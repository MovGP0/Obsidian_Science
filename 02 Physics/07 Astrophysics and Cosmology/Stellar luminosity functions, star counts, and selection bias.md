---
title: "Stellar luminosity functions, star counts, and selection bias"
---

> [!TLDR]
> Use star counts and luminosity functions to infer population properties while accounting for selection and the initial mass function.

## Worked lecture material

##### Supernova progenitors

Type Ia supernovae are white-dwarf explosions. In the single-degenerate scenario described here, a white dwarf gains mass from a companion until it exceeds the Chandrasekhar limit. The double-degenerate scenario involves a binary with two white dwarfs.

Type II supernovae result from core collapse in a massive star that still has its hydrogen envelope.

##### Historical background and the luminosity function

The lecture refers to chapter 2 of Sparke and Gallagher and to the treatment of Malmquist bias in Binney and Merrifield.

The luminosity function describes the distribution of luminosities. In terms of absolute magnitude $M$, the product $\Phi(M,\mechanical{\mathbf{x}})\,dM\,d^3\mechanical{\mathbf{x}}$ gives the number of stars in volume $d^3\mechanical{\mathbf{x}}$ with absolute magnitude between $M$ and $M+dM$. The volume element is measured in cubic parsecs.

![[Kyle Kabasares - Intro to Astrophysics - Luminosity temperature curve.png|**Fig. 52** A luminosity–temperature curve with two positions marked.]]

##### The mass-to-light ratio

In the Gaia era, the lecture notes that a luminosity function can be converted to a mass function. The mass-to-light ratio is $\Upsilon=\mechanical{\mathcal{M}}/\energy{L}$. In the $V$ band and in solar units,

$$
\Upsilon_V=\frac{\mechanical{\mathcal{M}}/\mechanical{M}_{\odot}}
{\energy{L}_V/\energy{L}_{V,\odot}}.
$$

A galaxy’s total mass-to-light ratio can include its dark matter halo and enclosed stellar mass.

##### Star counts

As a historical thought experiment, count stars as an astronomer would have done a century before the lecture.

![[Kyle Kabasares - Intro to Astrophysics - Star counts in a sky field.png|**Fig. 53** Stars counted inside a selected patch of sky.]]

The function $A(m)$ counts stars per unit solid angle in an interval of apparent magnitude.

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

Substitute the magnitude–distance relation into the count in a cone of fixed solid angle. With the distances in parsecs and the density in stars per cubic parsec,

$$
N_{\Omega}(m)=\frac{n\Omega}{3}\left[10^{0.2(m-M)+1}\right]^3.
$$

Thus $N_{\Omega}(m)\propto10^{0.6m}$ and $\log_{10}N_{\Omega}(m)=0.6m+\mathrm{const}$. Here $N_{\Omega}$ is the count over the cone, while the previous page also uses $N$ for the count per unit solid angle.

![[Kyle Kabasares - Intro to Astrophysics - Uniform magnitude counts.png|**Fig. 55** The logarithm of the cumulative star count increases linearly with limiting magnitude with a slope of $0.6$.]]

For two populations with different absolute magnitudes, write $N_1=C_1\,10^{0.6m}$ and $N_2=C_2\,10^{0.6m}$. Their sum is $N_1+N_2=C_3\,10^{0.6m}$ with $C_3=C_1+C_2$. The log count still has slope $0.6$.

![[Kyle Kabasares - Intro to Astrophysics - Radio source counts.png|**Fig. 56** The log of the cumulative source count declines with log flux density. The lecture describes this representation as common in radio astronomy.]]

##### The star count equation

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

##### Malmquist bias

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

The Malmquist bias relation is

$$
\boxed{\langle M\rangle_m-M_0
=-\sigma^2\frac{d\ln A_{\Omega}}{dm}}.
$$

The count $A_{\Omega}$ generally increases with apparent magnitude $m$. The negative offset then means the sample is intrinsically brighter on average than the underlying class of stars. The lecture emphasizes checking how survey selection affects the population represented by the sample.

##### Present-day and initial luminosity functions

$\Phi(M)\,dM$ is the present-day luminosity function in an absolute-magnitude interval. The initial luminosity function $\Psi(M)\,dM$ counts stars that ever formed with absolute magnitudes between $M$ and $M+dM$.

For a population formed in a single burst and observed at age $\tau_{\mathrm{gal}}$, the present-day main-sequence luminosity function vanishes for stars with $\tau_{\mathrm{MS}}<\tau_{\mathrm{gal}}$. For stars with $\tau_{\mathrm{MS}}>\tau_{\mathrm{gal}}$, $\Phi_{\mathrm{MS}}=\Psi_{\mathrm{MS}}$.

##### Constant star formation rate

Star formation rate is measured in solar masses per year. Consider a galaxy that has formed stars at a constant rate for $\tau_{\mathrm{gal}}=\quantity{10}{Gyr}$.

For stars with $\tau_{\mathrm{MS}}>\tau_{\mathrm{gal}}$, the initial and present-day main-sequence luminosity functions are equal. For shorter-lived stars,

$$
\Psi_{\mathrm{MS}}(M)=\Phi_{\mathrm{MS}}(M)
\frac{\tau_{\mathrm{gal}}}{\tau_{\mathrm{MS}}}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Constant star formation timeline.png|**Fig. 57** A ten-billion-year star formation timeline with the first four-fifths bracketed.]]

##### Disk stars in the Milky Way

![[Kyle Kabasares - Intro to Astrophysics - Initial and present disk luminosity functions.png|**Fig. 58** Initial and present-day luminosity functions for Milky Way disk stars. They agree for faint, long-lived stars and differ at brighter magnitudes. The Sun is marked near the point where the curves separate.]]

Survey all stars in a representative sample to estimate the present-day luminosity function $\Phi(M)$.

##### Hertzsprung–Russell diagram of a star cluster

![[Kyle Kabasares - Intro to Astrophysics - Star cluster main sequence turnoffs.png|**Fig. 59** Luminosity in the $V$ band versus $B-V$. The tracks leave the zero-age main sequence at different turnoff points.]]

Globular clusters contain older stars.

##### Initial mass function

The initial mass function (IMF) describes the mass distribution of stars at formation. In the notation of the lecture, $\xi(\mechanical{M})\,d\mechanical{M}$ counts the stars formed per unit volume with masses between $\mechanical{M}$ and $\mechanical{M}+d\mechanical{M}$.

The lecture gives the Salpeter (1955) form

$$
\xi(\mechanical{M})\propto\left(\frac{\mechanical{M}}{\mechanical{M}_{\odot}}\right)^{-2.35},
$$

over an illustrative range of $0.2$–$100\mechanical{M}_{\odot}$.

![[Kyle Kabasares - Intro to Astrophysics - Salpeter initial mass function sketch.png|**Fig. 60** The initial mass function decreases with stellar mass.]]

##### Kroupa initial mass function

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

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{\mathrm{g}}$ | Solar mass | Mass of the Sun. |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant power. |
| $\mechanical{d}$ | $\unit{cm}$ | Distance to the source | Distance from the observer to the spherical source. |
| $\sigma$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot K^{-4}}$ | Stefan–Boltzmann constant | Relates blackbody flux to the fourth power of temperature. |
| $\mechanical{r}$ | $\unit{cm}$ | Emitter radius | Radius of the spherical emitter. |
| $m$ | 1 | Apparent magnitude | Logarithmic measure of observed flux relative to a zero point. |
| — | $\unit{s^{-1}}$ | Count rate | Detector counts per second. |
| $B-V$ | 1 | Color index | Difference between the apparent magnitudes in the $B$ and $V$ filters. |
| $m-M$ | 1 | Distance modulus | Difference between apparent and absolute magnitude. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $n$ | $\unit{cm^{-3}}$ | Grain number density | Number of dust grains per unit volume. |
| $\tau$ | 1 | Optical depth | Attenuation exponent along the path. |
| $\mechanical{r}$ | — | Profile radius | Radial coordinate in the surface brightness sketch. |
| $\alpha$ | $\unit{h}$ | Right ascension | Celestial coordinate measured eastward along the celestial equator. |
| $\alpha$ | $\unit{arcsec}$ | Parallax angle | Angular shift due to a one-AU observing baseline. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $\Phi(M,\mechanical{\mathbf{x}})$ | $\unit{pc^{-3}\cdot mag^{-1}}$ | Stellar luminosity function | Number of stars per unit volume and absolute magnitude. |
| $\mechanical{\mathbf{x}}$ | $\unit{pc}$ | Spatial position | Position at which the luminosity function is evaluated. |
| $\Upsilon,\,\Upsilon_V$ | $\unit{M_{\odot}/L_{\odot}}$ | Mass-to-light ratio | Mass per unit luminosity, with a $V$-band form normalized to solar values. |
| $A(m)$ | $\unit{sr^{-1}\cdot mag^{-1}}$ | Apparent-magnitude count distribution | Number of stars per unit solid angle and apparent magnitude. |
| $N(m)$ | $\unit{sr^{-1}}$ | Cumulative magnitude count | Number of stars per unit solid angle above the brightness limit. |
| $N(\mechanical{r})$ | 1 | Cumulative distance count | Number of stars within the distance limit in the selected cone. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular area of the selected sky cone. |
| $\Phi(M)$ | — | Magnitude distribution factor | Magnitude-dependent part of the separable luminosity function. Its units depend on the normalization of the spatial factor. |
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
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $B$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | Second Oort constant | Offset in the nearby tangential velocity per unit distance. |
| $\alpha$ | $\unit{rad}$ | Scattering angle | Small change in the direction of the moving star. |
