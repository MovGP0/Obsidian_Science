---
title: "Galaxy morphology, surface brightness, and halo models"
---

> [!TLDR]
> Describe galaxy structure from images and surface brightness, then compare halo potentials and rotation curves.

## Worked lecture material

##### Galaxy interactions and morphology

##### Sketch of galaxy formation

Reading from Schneider, Chapter 10, sections 1, 2, 4.1, 4.4, and 5.1. The notes recall the earlier discussion of Eggen and Lynden-Bell and emphasize the importance of dark matter halos.

Toomre and Toomre (1972) used early simulations of encounters between galaxies represented by disks of test particles. The simulations omitted dark matter halos. [Galactic Bridges and Tails](https://articles.adsabs.harvard.edu/pdf/1972ApJ...178..623T).

The lecture attributes to the Toomres the argument that mergers form most elliptical galaxies. The strong version of the argument starts by assuming that all galaxies form as disks.

In the strong version of the merger scenario, some of the original disk galaxies merge to make ellipticals. The notes regard the assumption that all galaxies begin as disks as unlikely. What sets the maximum size of a galaxy? The characteristic dimensions remain unexplained by monolithic collapse and merging alone.

##### Dynamical timescale

The time for a particle to orbit across a self-gravitating system is of the same order as the free-fall time.

$$
t_{\mathrm{dyn}}\sim t_{\mathrm{ff}}\sim(\mechanical{G}\overline{\mechanical{\rho}})^{-1/2}.
$$

In hydrostatic equilibrium, the gas pressure gradient balances gravity. If the gas emits radiation, it loses energy and cools.

The principal two-body cooling processes are bremsstrahlung, collisional excitation followed by radiative decay, and recombination. The radiative volume emissivity is the emitted luminosity per unit volume,

$$
\energy{\epsilon}_{\mathrm r}=n_{\mathrm H}^2\thermal{\Lambda}_{\mathrm r}(\thermal{T},Z),
$$

where $\thermal{\Lambda}_{\mathrm r}$ is the cooling function. It depends on temperature and metallicity.

##### Radiative cooling timescale

Divide the thermal energy of the gas by the radiative loss rate. For a gas of volume $V$ with $N_{\mathrm H}=n_{\mathrm H}V$ hydrogen nuclei,

$$
\energy{E}_{\mathrm{th}}\sim N_{\mathrm H}\thermal{k}_{\mathrm B}\thermal{T},
\qquad
\left|\frac{d\energy{E}_{\mathrm{th}}}{dt}\right|
=\energy{\epsilon}_{\mathrm r}V=n_{\mathrm H}^2\thermal{\Lambda}_{\mathrm r}V,
\qquad
t_{\mathrm{cool}}\sim\frac{\thermal{k}_{\mathrm B}\thermal{T}}
{n_{\mathrm H}\thermal{\Lambda}_{\mathrm r}(\thermal{T},Z)}.
$$

The comparison of cooling and dynamical times gives two modes of contraction. The notes list quasistatic contraction and cooling followed by free-fall collapse and fragmentation.

The cooling argument predicts efficient galaxy formation when $t_{\mathrm{cool}}<t_{\mathrm{dyn}}$. Setting the two timescales equal gives the critical scales

$$
\mechanical{R}_{\mathrm{crit}}\simeq\quantity{75}{kpc},
\qquad
\mechanical{M}_{\mathrm{crit}}\sim10^{12}\mechanical{M}_\odot
\quad\text{in baryons}.
$$

The handwritten mass lacks a unit. Solar masses are inferred from the galactic scale. Above $\mechanical{M}_{\mathrm{crit}}$, the notes say fragmentation in this model requires $\mechanical{R}<\mechanical{R}_{\mathrm{crit}}$, and note that clusters are larger. The calculation treats the baryons alone.

##### Dark matter

The notes credit Fritz Zwicky's 1933 work at Caltech on the Coma cluster as early evidence for dark matter. The galaxies move at speeds of order $\quantity{1000}{km\,s^{-1}}$. The mass inferred from their motions exceeds the mass expected from the starlight by more than a factor of ten in the lecture's estimate. The notes also mention his interest in gravitational lensing and suggest that his reputation for unconventional ideas contributed to the initial reception of the dark matter proposal.

The notes add that Zwicky's abrasive personality made him enemies and that some assumptions of the original dark matter argument needed additional evidence.

##### Rotation curves of spiral galaxies

Stars and gas in spiral disks move on nearly circular orbits. For a finite mass concentrated toward the center, the outer circular speed would fall with distance in the Keplerian regime.

![[Kyle Kabasares - Extragalactic Astrophysics - Keplerian rotation curve.png|**Fig. 1** The sketch shows rotation speed rising in the inner galaxy and labels the declining outer branch as a Keplerian falloff.]]

The lecture gives an order-of-magnitude estimate of at least ten times as much mass in dark matter as in visible stars and gas.

##### Adding dark matter to the model

In the two-stage picture attributed to White and Rees (1978), dark matter halos form first through hierarchical clustering. Luminous material forms from gas that falls into the halos, cools, and condenses. [White and Rees on galaxy formation](https://academic.oup.com/mnras/article/183/3/341/972568).

The gas cools and condenses in dark matter potential wells. The notes mention feedback as a way to explain the low efficiency of galaxy formation and cite Fall and Efstathiou (1980) on disks with halos. [Formation and rotation of disc galaxies with haloes](https://academic.oup.com/mnras/article/193/2/189/972375).

##### Galaxy formation with cold dark matter

The notes cite Blumenthal, Faber, Primack, and Rees (1984). [Galaxy formation and large-scale structure with cold dark matter](https://www.nature.com/articles/311517a0).

##### Hot and cold accretion

Rees and Ostriker (1977) use $t_{\mathrm{cool}}=t_{\mathrm{dyn}}$ as the boundary between two regimes, slow contraction near hydrostatic equilibrium and free-fall collapse with fragmentation. [Rees and Ostriker on cooling and fragmentation](https://academic.oup.com/mnras/article/179/4/541/1014614).

For numerical simulations the notes cite Kereš and colleagues (2009). [Cold mode and hot cores in simulations](https://academic.oup.com/mnras/article/395/1/160/1079146).

##### Spiral galaxies

See Schneider, section 3.3. A spiral galaxy has a rotating disk of stars and gas on nearly circular orbits, together with a central bulge.

##### Trends along the Hubble spiral sequence

The bulge-to-disk luminosity ratio decreases from $\energy{L}_{\mathrm{bulge}}/\energy{L}_{\mathrm{disk}}\sim0.3$ for Sa galaxies to about $0.05$ for Sc galaxies. The opening angle of the spiral arms increases along the sequence.

##### Spiral structure

Grand-design spirals have long, continuous, symmetric arms, most often two, that can be traced over a wide range of radii. The notes also list flocculent spirals. Bars are common, with about $70\%$ of spirals having large-scale stellar bars in the lecture's estimate. Spiral galaxies span a comparatively small range of absolute magnitudes.

##### Surface brightness profiles

The notes point to Box 2.1 in Binney and Tremaine and distinguish two definitions. The first uses flux per unit solid angle.

##### Specific intensity and surface brightness

Specific intensity $\energy{I}_\nu$ gives the energy transmitted by a ray bundle in frequency interval $d\nu$ through an area $dA$ over time $dt$.

$$
d\energy{E}
=\energy{I}_\nu(\hat k\cdot\hat n)\,dA\,dt\,d\Omega\,d\nu.
$$

The dot product is the projected-area factor, with the surface normal chosen for a positive crossing. The handwritten equation gives the energy per unit frequency, leaving $d\nu$ implicit.

![[Kyle Kabasares - Extragalactic Astrophysics - ray bundle through a surface element.png|**Fig. 2** A ray bundle of direction $\hat k$ and solid angle $d\Omega$ meets a surface element $dA$ of normal $\hat n$.]]

For material emitting within a volume element, the emission coefficient $\energy{j}_\nu$ is the increase in specific intensity per path length $ds$ in the absence of absorption. If there is no incident background,

$$
\energy{j}_\nu=\frac{d\energy{I}_\nu}{ds},
\qquad
\energy{I}_\nu=\int\energy{j}_\nu\,ds.
$$

The volume emissivity at frequency $\nu$ is obtained by integrating over direction. For isotropic emission,

$$
\energy{\epsilon}_\nu=\int_{4\pi}\energy{j}_\nu\,d\Omega=4\pi\energy{j}_\nu.
$$

The notes substitute the cooling form $\energy{\epsilon}_\nu=n_{\mathrm H}^2\thermal{\Lambda}_\nu(\thermal{T},Z)$ into the line-of-sight projection integral. Here $\thermal{\Lambda}_\nu$ is the cooling function per unit frequency.

For isotropic emission and negligible absorption, the first surface brightness definition is the line-of-sight projection

$$
\energy{I}_\nu=\frac1{4\pi}\int_{\mathrm{los}}\energy{\epsilon}_\nu\,d\ell.
$$

The lecture uses cgs units $\unit{erg\,s^{-1}\,cm^{-3}\,Hz^{-1}}$ for $\energy{\epsilon}_\nu$ and $\unit{erg\,s^{-1}\,cm^{-2}\,sr^{-1}\,Hz^{-1}}$ for $\energy{I}_\nu$. Optical observers often quote surface brightness as $\mu=-2.5\log_{10}(\energy{I}_\nu/\energy{I}_{\nu,\mathrm{ref}})$ with a reference intensity for the zero point, in magnitudes per square arcsecond.

The second definition is luminosity per projected physical area. It omits the factor $1/(4\pi)$ and has no solid-angle unit.

$$
\overline{\energy{I}}_\nu=\int_{\mathrm{los}}\energy{\epsilon}_\nu\,d\ell.
$$

The spectral units are $\unit{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}$. Integrating over frequency gives the $\unit{erg\,s^{-1}\,cm^{-2}}$ units written in the margin. The course uses both definitions.

The midterm involves choosing a paper. The notes say to let Professor Buote know the choice by the end of the week.

##### Surface brightness profiles of disk galaxies

The bulge is described by a de Vaucouleurs profile, the $n=4$ Sérsic profile or $R^{1/4}$ law. The notes refer to pages 65 and 117 of Schneider.

![[Kyle Kabasares - Extragalactic Astrophysics - disk and central bulge.png|**Fig. 3** An edge-on sketch shows a central bulge embedded in the disk.]]

With effective radius $\mechanical{R}_{\mathrm e}$ and $\energy{I}_{\mathrm e}=\energy{I}(\mechanical{R}_{\mathrm e})$,

$$
\energy{I}(\mechanical{R})
=\energy{I}_{\mathrm e}
\exp\!\left[-7.669\left(
\left(\frac{\mechanical{R}}{\mechanical{R}_{\mathrm e}}\right)^{1/4}-1
\right)\right].
$$

The handwritten exponential coefficient appears as $2.669$. The magnitude coefficient on the same page corresponds to $7.669$, which gives the normalized $n=4$ law. The intensity profile is often expressed as luminosity per projected area, for example in solar luminosities per square centimetre. The magnitude form in $\unit{mag\,arcsec^{-2}}$ is

$$
\mu(\mechanical{R})=\mu_{\mathrm e}+8.3268
\left[\left(\frac{\mechanical{R}}{\mechanical{R}_{\mathrm e}}\right)^{1/4}-1\right].
$$

The subtraction makes $\mu(\mechanical{R}_{\mathrm e})=\mu_{\mathrm e}$. The radius $\mechanical{R}$ is usually the semimajor axis of an ellipse fitted to an isophote.

The radius $\mechanical{R}$ used in an isophotal profile is generally a semimajor axis, as on [[#Surface brightness profiles of disk galaxies|the section on Surface brightness profiles of disk galaxies]]. The effective radius is defined by the half-light condition

$$
\int_0^{\mechanical{R}_{\mathrm e}}\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}
=\frac12\int_0^\infty\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}.
$$

The common area factor cancels in this ratio for circular isophotes or ellipses of fixed axis ratio. The notes give $\mechanical{R}_{\mathrm e}\simeq\quantity{0.7}{kpc}$ for the Milky Way bulge. For a spherical system with a projected de Vaucouleurs profile,

$$
\energy{L}=\int_0^\infty 2\pi\mechanical{R}\,\energy{I}(\mechanical{R})\,d\mechanical{R}
\simeq7.215\pi\,\energy{I}_{\mathrm e}\mechanical{R}_{\mathrm e}^2.
$$

##### Exponential disk

The notes refer to Schneider, page 118. A disk is often modeled by

$$
\energy{I}(\mechanical{R})
=\energy{I}_0\exp(-\mechanical{R}/\mechanical{h}_{\mathrm R}),
$$

where $\energy{I}_0$ is the central surface luminosity density and $\mechanical{h}_{\mathrm R}$, also written $\mechanical{R}_{\mathrm d}$, is the radial scale length.

For a circular exponential disk, integrating the brightness over projected area gives $\energy{I}_0=\energy{L}/(2\pi\mechanical{h}_{\mathrm R}^2)$. Here $\mechanical{R}$ is usually the semimajor axis, $\mechanical{h}_{\mathrm R}$ is the exponential scale length, and $\energy{I}_0$ is the central surface luminosity density. The half-light radius is $\mechanical{R}_{\mathrm e}\simeq1.67\mechanical{h}_{\mathrm R}$.

In magnitudes per square arcsecond,

$$
\mu(\mechanical{R})=\mu_0+1.09\frac{\mechanical{R}}{\mechanical{h}_{\mathrm R}}.
$$

##### Freeman's law

The lecture slides give a small scatter in the central surface brightness of the disks in the original sample, with $\mu_0=\quantity{21.52\pm0.39}{mag\,arcsec^{-2}}$ in the $B$ band. The notes then return from the slides to the board.

##### Evidence for dark matter from spiral galaxy rotation curves

The notes refer to Schneider §3.3.4 and MBW §11.1.2. For a spherically symmetric system, equate the centripetal force on a test particle of mass $\mechanical{m}$ to the magnitude of the gravitational force.

$$
\frac{\mechanical{m}\mechanical{v}_{\mathrm c}^2}{\mechanical{r}}
=|\mechanical{F}_{\mathrm g}|
=\left|\frac{d\energy{U}_{\mathrm g}}{d\mechanical{r}}\right|
=\mechanical{m}\left|\frac{d\mechanical{\Phi}}{d\mechanical{r}}\right|.
$$

Here $\energy{U}_{\mathrm g}=\mechanical{m}\mechanical{\Phi}$ is the gravitational potential energy. By spherical symmetry the circular speed satisfies

$$
\boxed{\mechanical{v}_{\mathrm c}^2
=\mechanical{r}\left|\frac{d\mechanical{\Phi}}{d\mechanical{r}}\right|
=\frac{\mechanical{G}\mechanical{M}(<\mechanical{r})}{\mechanical{r}}.}
$$

For a point mass, $\mechanical{M}(<\mechanical{r})=\mechanical{M}_{\mathrm{tot}}$ for every $\mechanical{r}>0$. This gives the Keplerian velocity profile $\mechanical{v}_{\mathrm c}\propto\mechanical{r}^{-1/2}$. For an arbitrary mass distribution, the potential can be expanded in multipole moments.

Expand the potential as $\mechanical{\Phi}=\sum_{\ell,m}\mechanical{\Phi}_{\ell m}$. As the distance from the region containing most of the mass increases, the monopole term rapidly dominates. Thus sufficiently far from a localized mass distribution the rotation curve approaches the Keplerian form.

The notes emphasize that observed rotation speeds can remain nearly constant well outside the stellar disk, where most of the visible matter is concentrated. The flat part of the curve points to gravitating matter extending beyond the disk.

##### Case 2. Singular isothermal sphere (SIS)

This halo model is a spherical, collisionless, self-gravitating system with a Maxwellian velocity distribution. It has a central density cusp rather than a finite-density core. The scalings are

$$
\mechanical{\rho}(\mechanical{r})\propto\mechanical{r}^{-2},
\qquad
\mechanical{M}(<\mechanical{r})\propto\mechanical{r}.
$$

##### Isothermal halo models

The singular isothermal sphere has a logarithmic gravitational potential, $\mechanical{\Phi}(\mechanical{r})\propto\ln(\mechanical{r}/\mechanical{r}_0)$ up to a choice of reference radius. Since the enclosed mass grows linearly with radius,

$$
\mechanical{v}_{\mathrm c}
=\left(\frac{\mechanical{G}\mechanical{M}(<\mechanical{r})}{\mechanical{r}}\right)^{1/2}
\propto\left(\frac{\mechanical{r}}{\mechanical{r}}\right)^{1/2}
=\text{constant}.
$$

A flat outer rotation curve is consistent with a logarithmic potential over the radii probed. The profile must eventually change if the total mass is finite. The 2018 notes question how convincingly an outer Keplerian decline had been demonstrated.

##### Part 2. Case 3. Cold dark matter halo profiles

See Schneider §7.6.1. Numerical simulations of structure formation in a cold dark matter universe give approximately self-similar spherically averaged halo density profiles. The lecture describes these with the Navarro–Frenk–White (NFW) profile. [The Structure of Cold Dark Matter Halos](https://arxiv.org/abs/astro-ph/9508025), [A Universal Density Profile from Hierarchical Clustering](https://arxiv.org/abs/astro-ph/9611107).

The NFW profile has two asymptotic density slopes.

$$
\mechanical{\rho}(\mechanical{r})\propto
\begin{cases}
\mechanical{r}^{-1}, & \mechanical{r}\ll\mechanical{r}_{\mathrm s},\\
\mechanical{r}^{-3}, & \mechanical{r}\gg\mechanical{r}_{\mathrm s}.
\end{cases}
$$

The margin separately mentions the Hernquist (1990) model. [An Analytical Model for Spherical Galaxies and Bulges](https://articles.adsabs.harvard.edu/pdf/1990ApJ...356..359H).

Because the enclosed NFW mass grows logarithmically at large radius, define an outer reference radius $\mechanical{r}_\Delta$ by setting the mean density within it to $\Delta$ times the critical density of the universe.

$$
\frac{3\mechanical{M}(<\mechanical{r}_\Delta)}{4\pi\mechanical{r}_\Delta^3}
=\Delta\mechanical{\rho}_{\mathrm c}.
$$

A common choice is $\Delta=200$. The notes use this to define a conventional virial radius, motivated by spherical collapse and the expectation that the halo has virialized within roughly this radius. They refer to Schneider §7.5.1.

The mass inside the outer reference radius is

$$
\mechanical{M}_\Delta
=\frac{4\pi}{3}\mechanical{r}_\Delta^3\Delta\mechanical{\rho}_{\mathrm c}.
$$

The concentration parameter is $c=\mechanical{r}_\Delta/\mechanical{r}_{\mathrm s}$. Here $c$ denotes concentration. Let $x=\mechanical{r}/\mechanical{r}_{\mathrm s}=c\mechanical{r}/\mechanical{r}_\Delta$. Expressed in terms of the outer radius and concentration, the NFW density and enclosed mass are

$$
\begin{aligned}
\mechanical{\rho}(\mechanical{r})&=
\mechanical{\rho}_{\mathrm c}\frac{\Delta}{3}
\frac{c^3}{\ln(1+c)-c/(1+c)}
\frac{1}{x(1+x)^2},\\
\mechanical{M}(<\mechanical{r})&=
\mechanical{M}_\Delta
\frac{\ln(1+x)-x/(1+x)}
{\ln(1+c)-c/(1+c)}.
\end{aligned}
$$

The normalization is fixed by the definition of $\mechanical{M}_\Delta$. At $\mechanical{r}=\mechanical{r}_\Delta$, $x=c$ and the logarithmic factors cancel.

## Source

Kyle Kabasares, *Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $t_{\mathrm{dyn}}$ | $\unit{s}$ | Dynamical timescale | Characteristic orbital or crossing time of a self-gravitating system. |
| $t_{\mathrm{ff}}$ | $\unit{s}$ | Free-fall time | Characteristic time for gravitational collapse in the absence of pressure support. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Sets the strength of self-gravity. |
| $\overline{\mechanical{\rho}}$ | $\unit{kg\,m^{-3}}$ | Mean mass density | Density used in the free-fall and dynamical time estimates. |
| $\energy{\epsilon}_{\mathrm r}$ | $\unit{W\,m^{-3}}$ | Radiative volume emissivity | Total emitted power per unit volume. |
| $\thermal{\Lambda}_{\mathrm r}$ | $\unit{W\,m^3}$ | Radiative cooling function | Emissivity divided by the square of the hydrogen number density in this convention. |
| $N_{\mathrm H}$, $n_{\mathrm H}$ | $1$, $\unit{m^{-3}}$ | Hydrogen count and number density | Number of hydrogen nuclei and their number per unit volume. |
| $V$ | $\unit{m^3}$ | Gas volume | Volume used to convert emissivity to luminosity. |
| $Z$ | $1$ | Metallicity | Abundance of elements heavier than helium, often quoted relative to solar metallicity. |
| $\thermal{T}$ | $\unit{K}$ | Gas temperature | Determines the thermal energy and affects the cooling function. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Converts temperature to energy per particle. |
| $\energy{E}_{\mathrm{th}}$ | $\unit{J}$ | Gas thermal energy | Energy available to be radiated by the cooling gas. |
| $t_{\mathrm{cool}}$ | $\unit{s}$ | Radiative cooling time | Thermal energy divided by the magnitude of its radiative loss rate. |
| $\mechanical{R}_{\mathrm{crit}}$ | $\unit{kpc}$ | Critical radius for cooling | Characteristic radius obtained by comparing cooling and dynamical times. |
| $\mechanical{M}_{\mathrm{crit}}$ | $\mechanical{M}_\odot$ | Critical baryonic mass | Mass scale associated with the cooling threshold. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | Reference unit for galactic and cluster masses. |
| $\energy{L}_{\mathrm{bulge}}$, $\energy{L}_{\mathrm{disk}}$ | $\unit{W}$ | Bulge and disk luminosities | Their ratio is one of the trends along the Hubble spiral sequence. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular area used in the flux-based definition of surface brightness. |
| $\energy{I}_\nu$ | $\unit{W\,m^{-2}\,sr^{-1}\,Hz^{-1}}$ | Specific intensity | Energy per time, projected area, solid angle, and frequency interval. |
| $\energy{j}_\nu$ | $\unit{W\,m^{-3}\,sr^{-1}\,Hz^{-1}}$ | Emission coefficient | Radiative contribution to the specific intensity per path length. |
| $\energy{\epsilon}_\nu$ | $\unit{W\,m^{-3}\,Hz^{-1}}$ | Spectral volume emissivity | Emission coefficient integrated over all solid angles. |
| $\thermal{\Lambda}_\nu$ | $\unit{W\,m^3\,Hz^{-1}}$ | Spectral cooling function | Spectral emissivity divided by the square of the hydrogen number density. |
| $\mu$ | $\unit{mag\,arcsec^{-2}}$ | Surface brightness in magnitudes | Logarithmic measure of intensity per angular area with a specified zero point. |
| $\overline{\energy{I}}_\nu$ | $\unit{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}$ | Spectral luminosity per projected area | Line-of-sight integral of the volume emissivity. |
| $\mechanical{R}$, $\mechanical{R}_{\mathrm e}$ | $\unit{kpc}$ | Projected and effective radius | The profile coordinate is the isophote's semimajor axis. The effective radius encloses half the component's projected light. |
| $\energy{I}(\mechanical{R})$, $\energy{I}_{\mathrm e}$ | $\unit{W\,m^{-2}}$ | Surface luminosity density and its effective value | The profile and its normalization at the effective radius. |
| $n$ | $1$ | Sérsic index | Shape parameter of the profile, with $n=4$ for the de Vaucouleurs law. |
| $\energy{L}$ | $\unit{W}$ | Total luminosity | Integral of the surface luminosity density over projected area. |
| $\energy{I}_0$ | $\unit{W\,m^{-2}}$ | Central surface luminosity density | Normalization of the exponential disk profile. |
| $\mechanical{h}_{\mathrm R}$, $\mechanical{R}_{\mathrm d}$ | $\unit{kpc}$ | Disk scale length | Radius where the exponential profile has fallen by a factor of $e$. |
| $\mu_0$ | $\unit{mag\,arcsec^{-2}}$ | Central disk surface brightness | Magnitude form of the disk profile at zero radius. |
| $\mechanical{v}_{\mathrm c}$ | $\unit{m\,s^{-1}}$ | Circular speed | Speed on a circular orbit at the specified radius. |
| $\mechanical{r}$ | $\unit{m}$ | Spherical radius | Three-dimensional distance from the center. |
| $\mechanical{M}(<\mechanical{r})$ | $\unit{kg}$ | Enclosed gravitating mass | Total mass within spherical radius $\mechanical{r}$. |
| $\mechanical{\Phi}$ | $\unit{m^2\,s^{-2}}$ | Gravitational potential | Gravitational potential energy per unit mass. |
| $\energy{U}_{\mathrm g}$ | $\unit{J}$ | Gravitational potential energy | Product of the test mass and the potential. |
| $\mechanical{F}_{\mathrm g}$ | $\unit{N}$ | Gravitational force | Force whose radial magnitude supplies the centripetal acceleration. |
| $\mechanical{\rho}(\mechanical{r})$ | $\unit{kg\,m^{-3}}$ | Mass density profile | Local gravitating mass per unit volume at spherical radius $\mechanical{r}$. |
| $\mechanical{r}_{\mathrm s}$ | $\unit{kpc}$ | NFW scale radius | Sets the transition between the inner and outer density slopes. |
| $\mechanical{r}_\Delta$ | $\unit{kpc}$ | Spherical overdensity radius | Radius within which the mean density is $\Delta\mechanical{\rho}_{\mathrm c}$. |
| $\Delta$ | $1$ | Overdensity threshold | Convention for defining an outer halo radius. |
| $\mechanical{\rho}_{\mathrm c}$ | $\unit{kg\,m^{-3}}$ | Critical mass density | Reference cosmic density for the spherical overdensity convention. |
| $\mechanical{M}_\Delta$ | $\unit{kg}$ | Spherical overdensity mass | Mass enclosed within $\mechanical{r}_\Delta$. |
| $c$ | $1$ | Halo concentration | Ratio of the outer halo reference radius to the scale radius. |
| $\mechanical{M}_{\mathrm{tot}}$, $\mechanical{M}_{\mathrm b}$, $\mechanical{M}_{\mathrm d}$, $\mechanical{M}_*$ | $\unit{kg}$ | Total, baryonic, disk baryon, and stellar masses | Successive mass components in the luminosity estimate. |
| $h$ | $1$ | Reduced Hubble parameter | Defined by $H_0=\quantity{100h}{km\,s^{-1}\,Mpc^{-1}}$. |
| $q$, $\epsilon$, $e$ | $1$ | Axis ratio, ellipticity, and eccentricity | Three measures of apparent ellipse shape. |
| $N$ | $1$ | Number of stars | Total stellar population of the model galaxy. |
| $n$ | $\unit{m^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\mu$ | $1$ | Mean particle mass in atomic mass units | Dimensionless factor converting the atomic mass unit to the average gas particle mass. |
| $\mechanical{r}_0$ | $\unit{m}$ | King radius | Length scale set by the velocity dispersion and central density of the nonsingular isothermal sphere. |
| $a$, $b$ | $1$ | Fundamental-plane coefficients | Logarithmic slopes with respect to velocity dispersion and effective intensity. |
