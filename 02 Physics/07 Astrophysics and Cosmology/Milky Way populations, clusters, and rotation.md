---
title: "Milky Way populations, clusters, and rotation"
---

> [!TLDR]
> Describe Galactic stellar populations and clusters, and infer disk rotation from observed velocities.

## Worked lecture material

The lecture estimates a Milky Way star formation rate of about $3\mechanical{M}_{\odot}$ per year. The IMF specifies how that mass is distributed among newly formed stars.

##### Spiral galaxies

A spiral galaxy has a disk of stars and gas and a central bulge or spheroid. Its halo includes dark matter, gas, and stars.

##### Baade’s stellar populations

- Population I consists of relatively metal-rich disk stars with rotation-dominated kinematics. The stars span a wide range of ages, including young stars.
- Population II consists mainly of old, metal-poor halo stars with dispersion-dominated kinematics. It includes globular clusters.
- Population III refers to the hypothetical first generation of stars, which formed from primordial gas at zero metallicity.

Bulge stars typically have high metallicity in the lecture’s description.

##### Components of the Milky Way

- The dark matter halo contains about $10^{12}\mechanical{M}_{\odot}$ within $\mechanical{r}=\quantity{200}{kpc}$.
- Orderly rotation dominates the stellar disk kinematics. The Galaxy has thin and thick disk components and a central bar. The disk stellar mass is about $3\times10^{10}\mechanical{M}_{\odot}$.
- The bulge is a concentration of stars in the inner kiloparsec.

The lecture uses Galactic coordinates $(\ell,b)$, cylindrical coordinates $(\mechanical{R},\theta,\mechanical{z})$ for Galactic structure, and a local coordinate system for stellar kinematics.

##### Velocity dispersion

For the distribution of stellar velocities along one direction,

$$
\mechanical{\sigma}^2
=\left\langle\left(\mechanical{v}-\langle\mechanical{v}\rangle\right)^2\right\rangle
=\frac{1}{N}\sum_i\left(\mechanical{v}_i-\langle\mechanical{v}\rangle\right)^2.
$$

> [!note]
> The notes subtract $\langle\mechanical{v}^2\rangle$ from $\mechanical{v}^2$ inside the average, which gives zero. Velocity dispersion uses deviations from the mean velocity.

##### The Milky Way thin disk

The thin disk has exponential density profiles in both radius and height.

$$
n(\mechanical{R},\mechanical{z},S)
=n_0(0,0,S)\exp\left[-\frac{\mechanical{R}}{\mechanical{h}_R(S)}\right]
\exp\left[-\frac{|\mechanical{z}|}{\mechanical{h}_z(S)}\right].
$$

The radial scale length $\mechanical{h}_R$ and vertical scale height $\mechanical{h}_z$ describe stars of type $S$. The lecture gives a radial scale length of about $\quantity{4}{kpc}$ and notes that the scale height depends on stellar type. At the Sun’s location, $\mechanical{r}\sim\quantity{8}{kpc}$, the thin disk rotates at about $\quantity{200\text{–}220}{km\cdot s^{-1}}$.

##### The thick disk

The thick disk has a scale height of about $\quantity{1}{kpc}$ and a vertical velocity dispersion $\mechanical{\sigma}_z$ of about $\quantity{30}{km\cdot s^{-1}}$. It contains about 5% of the total disk stellar mass and dominates at heights above about $\quantity{1\text{–}2}{kpc}$ from the midplane.

##### The Gould Belt

The Gould Belt is a ring containing numerous O and B stars and molecular clouds. The notes suggest reviewing the tables in Sparke and Gallagher.

Asymmetric drift refers to stellar populations lagging behind the local standard of rest.

##### Milky Way stellar halo

The stellar halo is an old population. The notes associate it largely with debris from disrupted globular clusters and dwarf galaxies and place most globular clusters in the halo population. The notes put most of the stellar halo within $\quantity{30}{kpc}$ of the Galactic center.

The relative abundance of elements $a$ and $b$ is defined by their number ratio relative to the solar number ratio.

$$
[a/b]=\log_{10}\left(\frac{N_a/N_b}{(N_a/N_b)_{\odot}}\right).
$$

##### The bulge and bar

The bulge luminosity is about one-third of the disk luminosity.

##### Globular clusters

Globular clusters contain about $10^4$–$10^6$ stars. The lecture lists the core radius, half-light radius, and tidal radius as measures of their sizes. It gives about 150 known globular clusters in the Milky Way and notes that metal-rich and metal-poor clusters have different radial distributions.

##### Star clusters

The notes list the open clusters M103 and NGC 346.

###### Open clusters

Open clusters contain a few hundred to a few thousand stars. Their core radius is the radius at which the surface brightness falls to half its central value. This radius is typically a few parsecs. Their internal velocity dispersion is typically $\mechanical{\sigma}\sim\quantity{1}{km\cdot s^{-1}}$.

The lecture refers to Table 2.2 in Sparke and Gallagher. Use Hertzsprung–Russell diagrams and isochrones to estimate cluster ages. The notes also flag the Hertzsprung gap.

**Globular clusters**

The lecture gives about 150 globular clusters for the Milky Way and calls this a typical number for a spiral galaxy. Globular clusters can be classified by their radii. Their typical metallicity is $[\mathrm{Fe}/\mathrm{H}]\sim-2$ to $-1$. At $-2$, the iron-to-hydrogen ratio is 1% of the solar value.

For typical globular-cluster properties, see Table 2.3. The lecture compares metal-rich and metal-poor globular clusters and discusses fitting isochrones to them. The example uses the Hubble passbands F475W and F814W, labeled approximately $B$ and $I$. The lecture emphasizes surface brightness profiles and refers to Sparke and Gallagher for mass segregation and dynamical friction.

##### The Milky Way at multiple wavelengths

Atomic hydrogen emits at $\signal{\lambda}=\quantity{21}{cm}$. The emission alone gives no direct distance to an individual parcel of gas.

##### Spherically symmetric potential

The circular velocity for a spherical mass distribution is

$$
\mechanical{v}_c(\mechanical{R})
=\sqrt{\frac{G\mechanical{M}(\mechanical{R})}{\mechanical{R}}},
$$

where $\mechanical{M}(\mechanical{R})$ is the mass enclosed within radius $\mechanical{R}$. The orbital angular speed is $\mechanical{\omega}=\mechanical{v}_{\mathrm{tang}}/\mechanical{R}$.

If the mass is concentrated at $\mechanical{R}=0$, the circular speed follows Keplerian rotation, $\mechanical{v}=\sqrt{G\mechanical{M}/\mechanical{R}}$. For solid-body rotation, $\mechanical{v}/\mechanical{R}$ is constant, so $\mechanical{v}\propto\mechanical{R}$ and $\mechanical{M}(\mechanical{R})=\mechanical{v}^2\mechanical{R}/G\propto\mechanical{R}^3$.

##### Galaxy rotation curve

![[Kyle Kabasares - Intro to Astrophysics - Flat galaxy rotation curve.png|**Fig. 62** The rotation curve rises in the inner galaxy and flattens near $\quantity{200}{km\cdot s^{-1}}$. The dashed curve shows a declining comparison.]]

In the spherical approximation, a flat rotation curve implies $\mechanical{M}(\mechanical{R})\propto\mechanical{R}$ at large radii.

##### Rotation kinematics of the Milky Way disk

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

The atomic hydrogen line at $\quantity{21}{cm}$ is useful for measuring gas velocities through Doppler shifts.

##### Position–velocity diagram

![[Kyle Kabasares - Intro to Astrophysics - Atomic gas position velocity diagram.png|**Fig. 66** Schematic radial velocity versus Galactic longitude for the outer gas, with positive and negative extrema of about $\quantity{100}{km\cdot s^{-1}}$.]]

> [!note]
> The intermediate longitude on the right is written as $180^\circ$. The symmetric axis from $+180^\circ$ to $-180^\circ$ suggests $-90^\circ$ at that tick.

The $\mathrm{CO}(1\!-\!0)$ spectral line can also map the Milky Way. The notes ask how gas density depends on radius and associate local density enhancements with spiral structure. A position–velocity diagram made with molecular gas is lumpier than one made with atomic gas.

##### Local Galactic rotation

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

The derivative $(d\mechanical{\omega}/d\mechanical{R})_{\mechanical{R}_0}$ measures shear in Galactic rotation. To measure $A$, plot the radial velocity per unit distance against Galactic longitude.

![[Kyle Kabasares - Intro to Astrophysics - Measuring the first Oort constant.png|**Fig. 68** The ratio $\mechanical{v}_r/\mechanical{d}$ varies as $\sin(2\ell)$ with amplitude $A$.]]

The lecture gives $A\simeq\quantity{15}{km\cdot s^{-1}\cdot kpc^{-1}}$. In the notation of Sparke and Gallagher, $(\mechanical{v}/\mechanical{R})'=d\mechanical{\omega}/d\mechanical{R}$.

The second Oort constant comes from the tangential velocity. For $\mechanical{d}\ll\mechanical{R}_0$ the lecture starts with

$$
\mechanical{v}_t\simeq\mechanical{v}\sin\alpha-\mechanical{v}_0\cos\ell.
$$

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

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{\mathrm{g}}$ | Solar mass | Mass of the Sun. |
| $\mechanical{d}$ | $\unit{cm}$ | Distance to the source | Distance from the observer to the spherical source. |
| $\signal{\lambda}$ | $\unit{cm}$ | Wavelength | Wavelength of the radiation. |
| $h$ | $\unit{erg\cdot s}$ | Planck constant | Relates photon energy to frequency. |
| $\sigma$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot K^{-4}}$ | Stefan–Boltzmann constant | Relates blackbody flux to the fourth power of temperature. |
| $\mechanical{r}$ | $\unit{cm}$ | Emitter radius | Radius of the spherical emitter. |
| $b$ | 1 | Softening constant | Sets the low-flux scale of the inverse hyperbolic sine magnitude. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $n$ | $\unit{cm^{-3}}$ | Grain number density | Number of dust grains per unit volume. |
| $\mechanical{r}$ | — | Profile radius | Radial coordinate in the surface brightness sketch. |
| $\theta$ | $\unit{rad}$ | Position angle | Orientation on the sky measured from north toward east. |
| $\theta$ | $\unit{rad}$ | Angular resolution | Minimum angular separation in the Rayleigh criterion. |
| $\alpha$ | $\unit{h}$ | Right ascension | Celestial coordinate measured eastward along the celestial equator. |
| $\ell,\,b$ | $\unit{deg}$ | Galactic longitude and latitude | Angles that specify a direction in the Galactic coordinate system. |
| $\mechanical{R}_0$ | $\unit{kpc}$ | Solar Galactocentric distance | Distance from the Sun to the Galactic center. |
| $\alpha$ | $\unit{arcsec}$ | Parallax angle | Angular shift due to a one-AU observing baseline. |
| $\lambda$ | $\unit{rad}$ | Convergent-point angle | Angle between the line of sight to the cluster member and the direction of the shared velocity. |
| $i$ | $\unit{deg}$ | Inclination | Angle between the orbital axis and the line of sight. |
| $\mechanical{\omega}$ | $\unit{rad\cdot s^{-1}}$ | Orbital angular speed | Rate of change of orbital phase. |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $\mechanical{R}$ | $\unit{km}$ | Stellar radius | Radius in the main-sequence scaling relation. |
| $[\mathrm{Fe}/\mathrm{H}]$ | 1 | Iron abundance index | Base-ten logarithm of the iron-to-hydrogen ratio relative to the solar value. |
| $\omega$ | $\unit{rad}$ | Argument of periastron | Orientation of periastron in the orbital plane. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\sigma$ | 1 | Absolute-magnitude dispersion | Standard deviation of the Gaussian magnitude distribution. |
| $\mechanical{\sigma}$ | $\unit{km\cdot s^{-1}}$ | Velocity dispersion | Standard deviation of velocities along the chosen direction. |
| $\mechanical{\sigma}_z$ | $\unit{km\cdot s^{-1}}$ | Vertical velocity dispersion | Spread of stellar velocities perpendicular to the disk. |
| $[a/b]$ | 1 | Relative elemental abundance | Logarithm of the number ratio of elements $a$ and $b$ relative to the solar ratio. |
| — | $\unit{pc}$ | Core radius | Radius at which a cluster’s surface brightness is half the central value. |
| $\mechanical{M}(\mechanical{R})$ | $\unit{M_{\odot}}$ | Enclosed mass | Mass inside radius $\mechanical{R}$. |
| $\mechanical{v}_0$ | $\unit{km\cdot s^{-1}}$ | Solar circular speed | Circular rotation speed at the Sun’s Galactocentric radius. |
| $\mechanical{\omega}_0$ | $\unit{rad\cdot s^{-1}}$ | Solar orbital angular speed | Angular speed of circular rotation at the Sun’s location. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $B$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | Second Oort constant | Offset in the nearby tangential velocity per unit distance. |
| $\alpha$ | $\unit{rad}$ | Scattering angle | Small change in the direction of the moving star. |
