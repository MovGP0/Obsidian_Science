---
title: "Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)"
---

> [!TLDR]
> These lecture notes connect galaxy structure, kinematics, and hot gas to the mass and gravitational potential. They cover disk and elliptical profiles, dark matter halos, luminosity functions, the Jeans and virial equations, the fundamental plane, and X-ray scaling relations.

Source notes by Kyle Kabasares. [[Extragalactic Astrophysics (Physics 241C, UC Irvine 2018).pdf|Original PDF]].

Transcribed PDF pages 1–100 of 100.

### PDF page 1

**Lecture, April 11, 2018. Sketch of galaxy formation.** Reading from Schneider, Chapter 10, sections 1, 2, 4.1, 4.4, and 5.1. The notes recall the earlier discussion of Eggen and Lynden-Bell and emphasize the importance of dark matter halos.

Toomre and Toomre (1972) used early simulations of encounters between galaxies represented by disks of test particles. The simulations omitted dark matter halos. [Galactic Bridges and Tails](https://articles.adsabs.harvard.edu/pdf/1972ApJ...178..623T).

The lecture attributes to the Toomres the argument that mergers form most elliptical galaxies. The strong version of the argument starts by assuming that all galaxies form as disks.

### PDF page 2

In the strong version of the merger scenario, some of the original disk galaxies merge to make ellipticals. The notes regard the assumption that all galaxies begin as disks as unlikely. What sets the maximum size of a galaxy? The characteristic dimensions remain unexplained by monolithic collapse and merging alone.

**Dynamical timescale.** The time for a particle to orbit across a self-gravitating system is of the same order as the free-fall time.

$$
t_{\mathrm{dyn}}\sim t_{\mathrm{ff}}\sim(\mechanical{G}\overline{\mechanical{\rho}})^{-1/2}.
$$

In hydrostatic equilibrium, the gas pressure gradient balances gravity. If the gas emits radiation, it loses energy and cools.

### PDF page 3

The principal two-body cooling processes are bremsstrahlung, collisional excitation followed by radiative decay, and recombination. The radiative volume emissivity is the emitted luminosity per unit volume,

$$
\energy{\epsilon}_{\mathrm r}=n_{\mathrm H}^2\thermal{\Lambda}_{\mathrm r}(\thermal{T},Z),
$$

where $\thermal{\Lambda}_{\mathrm r}$ is the cooling function. It depends on temperature and metallicity.

**Radiative cooling timescale.** Divide the thermal energy of the gas by the radiative loss rate. For a gas of volume $V$ with $N_{\mathrm H}=n_{\mathrm H}V$ hydrogen nuclei,

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

### PDF page 4

The cooling argument predicts efficient galaxy formation when $t_{\mathrm{cool}}<t_{\mathrm{dyn}}$. Setting the two timescales equal gives the critical scales

$$
\mechanical{R}_{\mathrm{crit}}\simeq\quantity{75}{kpc},
\qquad
\mechanical{M}_{\mathrm{crit}}\sim10^{12}\mechanical{M}_\odot
\quad\text{in baryons}.
$$

The handwritten mass lacks a unit. Solar masses are inferred from the galactic scale. Above $\mechanical{M}_{\mathrm{crit}}$, the notes say fragmentation in this model requires $\mechanical{R}<\mechanical{R}_{\mathrm{crit}}$, and note that clusters are larger. The calculation treats the baryons alone.

**Dark matter.** The notes credit Fritz Zwicky's 1933 work at Caltech on the Coma cluster as early evidence for dark matter. The galaxies move at speeds of order $\quantity{1000}{km\,s^{-1}}$. The mass inferred from their motions exceeds the mass expected from the starlight by more than a factor of ten in the lecture's estimate. The notes also mention his interest in gravitational lensing and suggest that his reputation for unconventional ideas contributed to the initial reception of the dark matter proposal.

### PDF page 5

The notes add that Zwicky's abrasive personality made him enemies and that some assumptions of the original dark matter argument needed additional evidence.

**Rotation curves of spiral galaxies.** Stars and gas in spiral disks move on nearly circular orbits. For a finite mass concentrated toward the center, the outer circular speed would fall with distance in the Keplerian regime.

![[Kyle Kabasares - Extragalactic Astrophysics - Keplerian rotation curve.png|**Fig. 1** The sketch shows rotation speed rising in the inner galaxy and labels the declining outer branch as a Keplerian falloff.]]

The lecture gives an order-of-magnitude estimate of at least ten times as much mass in dark matter as in visible stars and gas.

**Adding dark matter to the model.** In the two-stage picture attributed to White and Rees (1978), dark matter halos form first through hierarchical clustering. Luminous material forms from gas that falls into the halos, cools, and condenses. [White and Rees on galaxy formation](https://academic.oup.com/mnras/article/183/3/341/972568).

### PDF page 6

The gas cools and condenses in dark matter potential wells. The notes mention feedback as a way to explain the low efficiency of galaxy formation and cite Fall and Efstathiou (1980) on disks with halos. [Formation and rotation of disc galaxies with haloes](https://academic.oup.com/mnras/article/193/2/189/972375).

**Galaxy formation with cold dark matter.** The notes cite Blumenthal, Faber, Primack, and Rees (1984). [Galaxy formation and large-scale structure with cold dark matter](https://www.nature.com/articles/311517a0).

**Hot and cold accretion.** Rees and Ostriker (1977) use $t_{\mathrm{cool}}=t_{\mathrm{dyn}}$ as the boundary between two regimes, slow contraction near hydrostatic equilibrium and free-fall collapse with fragmentation. [Rees and Ostriker on cooling and fragmentation](https://academic.oup.com/mnras/article/179/4/541/1014614).

For numerical simulations the notes cite Kereš and colleagues (2009). [Cold mode and hot cores in simulations](https://academic.oup.com/mnras/article/395/1/160/1079146).

**Spiral galaxies.** See Schneider, section 3.3. A spiral galaxy has a rotating disk of stars and gas on nearly circular orbits, together with a central bulge.

### PDF page 7

**Trends along the Hubble spiral sequence.** The bulge-to-disk luminosity ratio decreases from $\energy{L}_{\mathrm{bulge}}/\energy{L}_{\mathrm{disk}}\sim0.3$ for Sa galaxies to about $0.05$ for Sc galaxies. The opening angle of the spiral arms increases along the sequence.

**Spiral structure.** Grand-design spirals have long, continuous, symmetric arms, most often two, that can be traced over a wide range of radii. The notes also list flocculent spirals. Bars are common, with about $70\%$ of spirals having large-scale stellar bars in the lecture's estimate. Spiral galaxies span a comparatively small range of absolute magnitudes.

**Surface brightness profiles.** The notes point to Box 2.1 in Binney and Tremaine and distinguish two definitions. The first uses flux per unit solid angle.

### PDF page 8

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

### PDF page 9

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

**Lecture, April 16, 2018.** The midterm involves choosing a paper. The notes say to let Professor Buote know the choice by the end of the week.

### PDF page 10

**Surface brightness profiles of disk galaxies.** The bulge is described by a de Vaucouleurs profile, the $n=4$ Sérsic profile or $R^{1/4}$ law. The notes refer to pages 65 and 117 of Schneider.

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

### PDF page 11

The radius $\mechanical{R}$ used in an isophotal profile is generally a semimajor axis, as on page 10. The effective radius is defined by the half-light condition

$$
\int_0^{\mechanical{R}_{\mathrm e}}\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}
=\frac12\int_0^\infty\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}.
$$

The common area factor cancels in this ratio for circular isophotes or ellipses of fixed axis ratio. The notes give $\mechanical{R}_{\mathrm e}\simeq\quantity{0.7}{kpc}$ for the Milky Way bulge. For a spherical system with a projected de Vaucouleurs profile,

$$
\energy{L}=\int_0^\infty 2\pi\mechanical{R}\,\energy{I}(\mechanical{R})\,d\mechanical{R}
\simeq7.215\pi\,\energy{I}_{\mathrm e}\mechanical{R}_{\mathrm e}^2.
$$

**Exponential disk.** The notes refer to Schneider, page 118. A disk is often modeled by

$$
\energy{I}(\mechanical{R})
=\energy{I}_0\exp(-\mechanical{R}/\mechanical{h}_{\mathrm R}),
$$

where $\energy{I}_0$ is the central surface luminosity density and $\mechanical{h}_{\mathrm R}$, also written $\mechanical{R}_{\mathrm d}$, is the radial scale length.

### PDF page 12

For a circular exponential disk, integrating the brightness over projected area gives $\energy{I}_0=\energy{L}/(2\pi\mechanical{h}_{\mathrm R}^2)$. Here $\mechanical{R}$ is usually the semimajor axis, $\mechanical{h}_{\mathrm R}$ is the exponential scale length, and $\energy{I}_0$ is the central surface luminosity density. The half-light radius is $\mechanical{R}_{\mathrm e}\simeq1.67\mechanical{h}_{\mathrm R}$.

In magnitudes per square arcsecond,

$$
\mu(\mechanical{R})=\mu_0+1.09\frac{\mechanical{R}}{\mechanical{h}_{\mathrm R}}.
$$

**Freeman's law.** The lecture slides give a small scatter in the central surface brightness of the disks in the original sample, with $\mu_0=\quantity{21.52\pm0.39}{mag\,arcsec^{-2}}$ in the $B$ band. The notes then return from the slides to the board.

### PDF page 13

**Evidence for dark matter from spiral galaxy rotation curves.** The notes refer to Schneider §3.3.4 and MBW §11.1.2. For a spherically symmetric system, equate the centripetal force on a test particle of mass $\mechanical{m}$ to the magnitude of the gravitational force.

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

### PDF page 14

Expand the potential as $\mechanical{\Phi}=\sum_{\ell,m}\mechanical{\Phi}_{\ell m}$. As the distance from the region containing most of the mass increases, the monopole term rapidly dominates. Thus sufficiently far from a localized mass distribution the rotation curve approaches the Keplerian form.

The notes emphasize that observed rotation speeds can remain nearly constant well outside the stellar disk, where most of the visible matter is concentrated. The flat part of the curve points to gravitating matter extending beyond the disk.

**Case 2. Singular isothermal sphere (SIS).** This halo model is a spherical, collisionless, self-gravitating system with a Maxwellian velocity distribution. It has a central density cusp rather than a finite-density core. The scalings are

$$
\mechanical{\rho}(\mechanical{r})\propto\mechanical{r}^{-2},
\qquad
\mechanical{M}(<\mechanical{r})\propto\mechanical{r}.
$$

### PDF page 15

The singular isothermal sphere has a logarithmic gravitational potential, $\mechanical{\Phi}(\mechanical{r})\propto\ln(\mechanical{r}/\mechanical{r}_0)$ up to a choice of reference radius. Since the enclosed mass grows linearly with radius,

$$
\mechanical{v}_{\mathrm c}
=\left(\frac{\mechanical{G}\mechanical{M}(<\mechanical{r})}{\mechanical{r}}\right)^{1/2}
\propto\left(\frac{\mechanical{r}}{\mechanical{r}}\right)^{1/2}
=\text{constant}.
$$

A flat outer rotation curve is consistent with a logarithmic potential over the radii probed. The profile must eventually change if the total mass is finite. The 2018 notes question how convincingly an outer Keplerian decline had been demonstrated.

**April 16, 2018, part 2. Case 3. Cold dark matter halo profiles.** See Schneider §7.6.1. Numerical simulations of structure formation in a cold dark matter universe give approximately self-similar spherically averaged halo density profiles. The lecture describes these with the Navarro–Frenk–White (NFW) profile. [The Structure of Cold Dark Matter Halos](https://arxiv.org/abs/astro-ph/9508025), [A Universal Density Profile from Hierarchical Clustering](https://arxiv.org/abs/astro-ph/9611107).

### PDF page 16

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

### PDF page 17

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

### PDF page 18

1. Once $\Delta$ and the reference critical density are fixed, the NFW profile is specified by $c$ and $\mechanical{M}_\Delta$. The mass definition then gives $\mechanical{r}_\Delta$.
2. The notes give $100$ to $2500$ as typical choices for $\Delta$.
3. The approximate CDM halo relation $c_\Delta\propto\mechanical{M}_\Delta^{-0.1}$ quantifies a departure from perfect self-similarity.

For this formula the notes use the radial variable $y=\mechanical{r}/\mechanical{r}_\Delta$, so the argument of the NFW mass function is $cy$. Then

$$
\mechanical{v}_{\mathrm c}(\mechanical{r})
=\mechanical{v}_{\mathrm c,\Delta}
\left[
\frac{1}{y}\frac{\ln(1+cy)-cy/(1+cy)}
{\ln(1+c)-c/(1+c)}
\right]^{1/2},
\qquad
\mechanical{v}_{\mathrm c,\Delta}
=\sqrt{\frac{\mechanical{G}\mechanical{M}_\Delta}{\mechanical{r}_\Delta}}.
$$

At $y=1$, the circular speed is $\mechanical{v}_{\mathrm c,\Delta}$.

### PDF page 19

The stellar bulge and disk account for the inner circular-speed profile in the model discussed. An extended dark matter halo is needed to account for the speeds measured at larger radii.

**Tully–Fisher relation.** See Schneider §3.4.1. The stellar luminosity scales with the maximum rotation speed,

$$
\energy{L}\propto\mechanical{v}_{\max}^{\alpha},
\qquad
\alpha\simeq2.5\text{–}4.
$$

The exponent is larger in redder bands. At fixed $\mechanical{v}_{\max}$, the notes give a luminosity scatter of about $20\%$, or about $10\%$ in the $H$ band. The relation is used as a distance indicator. The lecture next develops a heuristic explanation, emphasizing the physical insight that can be gained before running complex numerical simulations.

### PDF page 20

Analytic estimates can guide later simulations. The Tully–Fisher relation involves the kinematics of stars and gas, so the lecture connects it with the depth of the gravitational potential well, which affects the rotation curve across the galaxy.

At large radius, use the spherical approximation. A flat rotation curve implies $\mechanical{M}(<\mechanical{r})\propto\mechanical{r}$ because the force on a star of mass $\mechanical{m}_*$ obeys

$$
\frac{\mechanical{m}_*\mechanical{v}_{\mathrm{flat}}^2}{\mechanical{r}}
=\frac{\mechanical{G}\mechanical{M}(<\mechanical{r})\mechanical{m}_*}{\mechanical{r}^2}.
$$

For this order-of-magnitude argument take $\mechanical{v}_{\max}\simeq\mechanical{v}_{\mathrm{flat}}$. Then

$$
\mechanical{M}(<\mechanical{r})
\simeq\frac{\mechanical{v}_{\max}^2\mechanical{r}}{\mechanical{G}}.
\tag{A}
$$

Define the mass-to-light ratio $\Upsilon(<\mechanical{r})=\mechanical{M}(<\mechanical{r})/\energy{L}$. The notes use the galaxy luminosity $\energy{L}$ for the comparison. Thus $\Upsilon\energy{L}=\mechanical{M}(<\mechanical{r})\simeq\mechanical{v}_{\max}^2\mechanical{r}/\mechanical{G}$.

### PDF page 21

The luminosity in the argument comes from the stars. In principle both enclosed mass and enclosed stellar luminosity vary with radius, so $\Upsilon$ can depend on radius. The notes treat it as constant for the estimate.

Eliminate the enclosed mass in equation (A) using $\mechanical{M}(<\mechanical{r})=\Upsilon\energy{L}$.

$$
\energy{L}\simeq
\frac{\mechanical{v}_{\max}^2\mechanical{r}}{\Upsilon\mechanical{G}}.
\tag{B}
$$

Omitting the geometric factor $\pi$, write the mean surface luminosity density as $\langle\energy{I}\rangle\simeq\energy{L}/\mechanical{r}^2$. Substituting $\mechanical{r}\simeq\sqrt{\energy{L}/\langle\energy{I}\rangle}$ into equation (B) gives

$$
\energy{L}\simeq
\frac{\mechanical{v}_{\max}^2}{\Upsilon\mechanical{G}}
\sqrt{\frac{\energy{L}}{\langle\energy{I}\rangle}}.
$$

Squaring and canceling one factor of $\energy{L}$ yields

$$
\energy{L}\simeq
\frac{\mechanical{v}_{\max}^4}
{\Upsilon^2\mechanical{G}^2\langle\energy{I}\rangle}.
$$

### PDF page 22

The preceding estimate gives the fourth-power Tully–Fisher relation if $\Upsilon^{-2}/\langle\energy{I}\rangle$ is approximately constant among spiral galaxies. This condition connects the distributions of dark matter and luminous matter.

The luminosity in the estimate counts the stars. What role does the gas play? If the relation reflects galaxy dynamics, the circular speed should also be related to the mass producing the gravitational field. Write

$$
\mechanical{M}_{\mathrm{tot}}\propto\mechanical{v}_{\mathrm c}^{\,b},
$$

with $b$ an unknown exponent and $\mechanical{v}_{\mathrm c}$ close to the circular speed inferred from the kinematic tracers. To compare with observations, relate the total mass to the stellar light and account for the gas. The notes follow McGaugh and colleagues (2000, *ApJ* 533, L99). [The Baryonic Tully–Fisher Relation](https://arxiv.org/abs/astro-ph/0003001).

### PDF page 23

1. Relate total gravitating mass to baryonic mass by $\mechanical{M}_{\mathrm b}=f_{\mathrm b}\mechanical{M}_{\mathrm{tot}}$, with $f_{\mathrm b}$ taken to be the mean cosmic baryon fraction. This assumes the halo retains its baryons during evolution. The notes caution that feedback can invalidate the assumption.
2. Relate the halo's baryonic mass to the mass of baryons in the disk by $\mechanical{M}_{\mathrm d}=f_{\mathrm d}\mechanical{M}_{\mathrm b}$. Here $f_{\mathrm d}$ is the fraction of halo baryons ending up in the disk.
3. Relate the disk baryons to stellar mass by $\mechanical{M}_*=f_*\mechanical{M}_{\mathrm d}$, where $f_*$ is the fraction of the disk baryon mass in stars.

### PDF page 24

Combining the three mass fractions gives $\mechanical{M}_*=f_*f_{\mathrm d}f_{\mathrm b}\mechanical{M}_{\mathrm{tot}}$. Define the stellar mass-to-light ratio $\Upsilon_*=\mechanical{M}_*/\energy{L}$. Then

$$
\energy{L}=\Upsilon_*^{-1}f_*f_{\mathrm d}f_{\mathrm b}\mechanical{M}_{\mathrm{tot}},
\qquad
\boxed{\energy{L}\propto
\Upsilon_*^{-1}f_*f_{\mathrm d}f_{\mathrm b}\mechanical{v}_{\mathrm c}^{\,b}.}
$$

This argument produces a tight luminosity–speed relation with the same exponent $b$ if the product $\Upsilon_*^{-1}f_*f_{\mathrm d}f_{\mathrm b}$ stays nearly constant. The gas fraction, and therefore $f_*$, varies substantially along the Hubble sequence. The notes report that a tighter relation results when both stars and gas are included in the disk baryon mass.

$$
\boxed{\mechanical{M}_{\mathrm d}=\mechanical{M}_*+\mechanical{M}_{\mathrm g}
\propto\mechanical{v}_{\mathrm c}^{\,\alpha}.}
$$

This is the baryonic Tully–Fisher relation.

### PDF page 25

The notes give the following normalization of the baryonic disk relation,

$$
\mechanical{M}_{\mathrm d}
=2\times10^9h^{-2}\mechanical{M}_\odot
\left(\frac{\mechanical{v}_{\max}}{\quantity{100}{km\,s^{-1}}}\right)^4.
$$

Here $h$ is the reduced Hubble parameter.

### PDF page 26

**Lecture, April 23, 2018. Normal elliptical galaxies.** For an ellipse with semimajor axis $a$ and semiminor axis $b$,

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,
\qquad a\ge b.
$$

The full major and minor axes have lengths $2a$ and $2b$. The axis ratio is $q=b/a$, the ellipticity is $\epsilon=1-q$, and the geometric eccentricity is $e=\sqrt{1-q^2}$. The area is $\pi ab=\pi qa^2$, so the radius of a circle with the same area is $\sqrt{ab}$.

![[Kyle Kabasares - Extragalactic Astrophysics - ellipse axes and semiaxes.png|**Fig. 4** The ellipse sketch labels the semimajor axis $a$ and semiminor axis $b$.]]

In the Hubble classification $\mathrm E_n$, $n$ is approximately $10\epsilon$. The notes list classes $\mathrm E_0$ through $\mathrm E_6$.

**Sérsic profile.** The notes refer to MBW pages 42–43, Binney and Tremaine page 20, and Schneider §3.6. The radial stellar surface brightness of elliptical galaxies is generally fit by

$$
\energy{I}(\mechanical{R})
=\energy{I}_{\mathrm e}
\exp\!\left[-b_n\left(\left(\frac{\mechanical{R}}{\mechanical{R}_{\mathrm e}}\right)^{1/n}-1\right)\right].
$$

### PDF page 27

The radius $\mechanical{R}$ is usually the isophotal semimajor axis, though the notes also give the circularized radius $\sqrt{ab}$. The effective radius $\mechanical{R}_{\mathrm e}$ encloses half the light and $\energy{I}_{\mathrm e}=\energy{I}(\mechanical{R}_{\mathrm e})$. For a given Sérsic index $n$, choose $b_n$ so that

$$
\int_0^{\mechanical{R}_{\mathrm e}}\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}
=\frac12\int_0^\infty\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}.
$$

The notes use $b_n\simeq2n-0.324$ as a practical approximation. The de Vaucouleurs law has $n=4$ and $b_4\simeq7.67$. An exponential disk has $n=1$.

In magnitudes per square arcsecond, $\mu-\mu_{\mathrm e}=-2.5\log_{10}(\energy{I}/\energy{I}_{\mathrm e})$, so

$$
\mu(\mechanical{R})=\mu_{\mathrm e}+1.086\,b_n
\left[\left(\frac{\mechanical{R}}{\mechanical{R}_{\mathrm e}}\right)^{1/n}-1\right].
$$

The exponent $1/n$ follows from the intensity form on page 26.

### PDF page 28

The total projected luminosity of a spherical system with a Sérsic profile is

$$
\energy{L}
=2\pi\int_0^\infty\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}
=\frac{2\pi n\Gamma(2n)}{b_n^{2n}}\energy{I}_0\mechanical{R}_{\mathrm e}^2,
\qquad \energy{I}_0=\energy{I}_{\mathrm e}e^{b_n}.
$$

The gamma function, referenced to Schneider page 156, is $\Gamma(x)=\int_0^\infty y^{x-1}e^{-y}\,dy$ for $x>0$, with $\Gamma(n+1)=n!$ for nonnegative integers.

The notes give the Prugniel–Simien approximation to the deprojected Sérsic profile. For a constant stellar mass-to-light ratio, the resulting spatial mass density takes the form

$$
\begin{aligned}
\mechanical{\rho}(\mechanical{r})
&=\mechanical{\rho}_0\left(\frac{\mechanical{r}}{\mechanical{R}_{\mathrm e}}\right)^{-p}
\exp\!\left[-b\left(\frac{\mechanical{r}}{\mechanical{R}_{\mathrm e}}\right)^{1/n}\right],\\
b&\simeq 2n-\frac13+\frac{0.009876}{n},\\
p&\simeq 1-\frac{0.6097}{n}+\frac{0.05563}{n^2}.
\end{aligned}
$$

The notes quote this approximation under Prugniel and Simien (1997). [The fundamental plane of early-type galaxies](https://cdsarc.u-strasbg.fr/vizier/ftp/vizier/aa/papers/7321001/2300111.pdf).

### PDF page 29

The notes compare the projected Sérsic law with an Einasto spatial density law. Replacing the projected intensity with a density, its normalization with a density scale, and the projected radius with a spatial radius gives the same exponential form. In this comparison the radial scale of the spatial law can be chosen independently of the projected half-light radius.

**April 23, 2018, part 2. Boxy and disky isophotes.** An isophote is a curve of constant surface brightness. The notes refer to Schneider §3.2.5 and MBW pages 45–46. A standard ellipse fit to an isophote gives its semimajor axis, axis ratio, position angle (usually of the major axis), and intensity.

To study departures from perfect ellipses, compute the distance from the center along different directions and compare the isophote with the fitted ellipse.

### PDF page 30

Parameterize points on the fitted ellipse by $x=a\cos\theta$ and $y=b\sin\theta$, so $x^2/a^2+y^2/b^2=1$.

![[Kyle Kabasares - Extragalactic Astrophysics - radial distance to a fitted ellipse.png|**Fig. 5** The line from the center to a point on the ellipse has length $R_{\mathrm{ell}}(\theta)$. The ellipse parameter $\theta$ is defined by the parametrization in the text.]]

The squared distance to the center is

$$
\mechanical{R}_{\mathrm{ell}}^2(\theta)
=x^2+y^2=a^2\cos^2\theta+b^2\sin^2\theta.
$$

The radius itself is the radius of the concentric circle through that point. The handwritten expression for the radius has the dimensions of its square. Use

$$
\cos 2\theta=2\cos^2\theta-1=1-2\sin^2\theta,
\qquad
\cos^2\theta=\frac{1+\cos2\theta}{2},
\qquad
\sin^2\theta=\frac{1-\cos2\theta}{2}.
$$

### PDF page 31

Substituting the double-angle identities gives

$$
\begin{aligned}
\mechanical{R}_{\mathrm{ell}}^2(\theta)
&=\frac{a^2}{2}(1+\cos2\theta)+\frac{b^2}{2}(1-\cos2\theta),\\
\mechanical{R}_{\mathrm{ell}}(\theta)
&=\sqrt{\frac{a^2+b^2}{2}+\frac{a^2-b^2}{2}\cos2\theta}.
\end{aligned}
$$

This is the ordinary distance from the center. For a family of similar ellipses with fixed axis ratio $q=b/a$, the elliptical radius convention instead assigns a point $(x,y)$ the semimajor axis $a=\sqrt{x^2+y^2/q^2}$ of the ellipse through that point.

The notes quantify deviations from a perfect ellipse with a Fourier series in $\theta$.

$$
\Delta(\theta)
=\mechanical{R}_{\mathrm{iso}}(\theta)-\mechanical{R}_{\mathrm{ell}}(\theta)
=a_0+\sum_{n=1}^\infty\bigl[a_n\cos(n\theta)+b_n\sin(n\theta)\bigr].
$$

Here $\mechanical{R}_{\mathrm{iso}}$ is the distance to the actual isophote and $\mechanical{R}_{\mathrm{ell}}$ is the distance to the fitted ellipse along the same direction. The coefficients through $n=2$ are consistent with zero within the fitting errors by construction of the best-fitting ellipse.

### PDF page 32

Most elliptical galaxies are nearly symmetric about their major and minor axes, so the $n=3$ terms are usually small. Reflection symmetry also suppresses the sine terms. The leading shape correction in the notes is therefore

$$
\Delta(\theta)
=\mechanical{R}_{\mathrm{iso}}(\theta)-\mechanical{R}_{\mathrm{ell}}(\theta)
\simeq a_4\cos4\theta.
$$

Equivalently,

$$
\mechanical{R}_{\mathrm{iso}}(\theta)\simeq
\mechanical{R}_{\mathrm{ell}}(\theta)
\left[1+\frac{a_4\cos4\theta}{\mechanical{R}_{\mathrm{ell}}(\theta)}\right].
$$

Schneider writes the displacement using vectors. The ellipse position vector is $\mechanical{\vec R}_{\mathrm{ell}}(\theta)=(a\cos\theta,b\sin\theta)$ and its magnitude is $\sqrt{x^2+y^2}$. The same bracket multiplies the position vector when the correction is radial.

A positive $a_4$ gives a **disky** isophote. A negative $a_4$ gives a **boxy** isophote.

### PDF page 33

The notes give a typical isophotal deviation $|a_4/a|\sim0.01$, so the fitted ellipses reproduce the observed shapes to about the percent level in this measure.

**Galaxy luminosity function.** See Schneider §3.10, MBW §2.4.1, and Binney and Tremaine page 22. The luminosity function gives the abundance of galaxies in different luminosity intervals. In a convention normalized per unit volume, $\phi(\energy{L})\,d\energy{L}$ counts galaxies per volume with luminosity between $\energy{L}$ and $\energy{L}+d\energy{L}$.

The composite luminosity function including all galaxy types is approximated by the Schechter form,

$$
\phi(\energy{L})\,d\energy{L}
=\phi_*\left(\frac{\energy{L}}{\energy{L}_*}\right)^{\alpha}
\exp\!\left(-\frac{\energy{L}}{\energy{L}_*}\right)
\frac{d\energy{L}}{\energy{L}_*}.
$$

Here $\phi_*$ sets the normalization.

### PDF page 34

Above the characteristic luminosity $\energy{L}_*$, the Schechter function falls exponentially. The power-law index $\alpha$ controls the faint-end slope. Expressing the function in absolute magnitude gives $\phi(M)\,dM$.

**Lecture, April 26, 2018.** The midterm is next week. The notes repeat the global Schechter luminosity function from page 33 and give parameter estimates in two bands from MBW Table 15.1, page 656.

| Band | $\alpha$ | $M^*$ ($\unit{mag}$) | $\phi_* / (h^3\,\unit{Mpc^{-3}})$ |
| --- | ---: | ---: | ---: |
| $K$ | $-1.16\pm0.04$ | $-23.83\pm0.03$ | $(0.75\pm0.01)\times10^{-2}$ |
| $b$ | $-1.21\pm0.03$ | $-19.66\pm0.07$ | $(1.61\pm0.08)\times10^{-2}$ |

### PDF page 35

The two bands in the table give similar faint-end slopes and substantially different normalizations. Integrating the Schechter function over luminosity gives the mean number density of galaxies,

$$
n_{\mathrm g}=\int_0^\infty\phi(\energy{L})\,d\energy{L}
=\phi^*\Gamma(\alpha+1),
$$

and the mean luminosity density, which has the same units as volume emissivity,

$$
\energy{\ell}_{\mathrm{tot}}
=\int_0^\infty\energy{L}\phi(\energy{L})\,d\energy{L}
=\phi^*\energy{L}^*\Gamma(\alpha+2).
$$

If the Schechter function is extrapolated to zero luminosity, the number integral diverges for $\alpha\leq-1$ and the luminosity integral diverges for $\alpha\leq-2$. The lecture gives observed faint-end slopes from the near ultraviolet to the near infrared in the range $-2\leq\alpha\leq-1$. For slopes in the interior of this range, the faintest galaxies dominate the number count, while brighter galaxies account for most of the light.

### PDF page 36

#### Theoretical motivation for the Schechter luminosity function

Schechter based the luminosity function on the shape predicted by a self-similar stochastic model of galaxy formation and treated the faint-end slope $\alpha$ as a parameter to be fitted to the data. [Schechter (1976)](https://doi.org/10.1086/154079)

For the special case of self-similar dark-matter halo evolution discussed in the lecture, the Press–Schechter model gives a halo mass function of the form

$$
n(\mechanical{M})
\propto
\mechanical{M}^{-3/2}\exp\!\left(-C\mechanical{M}\right),
$$

where $\mechanical{M}$ is the halo mass, $n(\mechanical{M})\,d\mechanical{M}$ counts halos per unit volume in a mass interval, and $C$ is a positive constant. The lecture points to equation 23 in the original paper and relates this special case to cold dark matter. [Press and Schechter (1974)](https://adsabs.harvard.edu/pdf/1974ApJ...187..425P)

### PDF page 37

Schechter's empirical model makes two changes in using the halo mass function as a guide to the luminosity function.

1. Replace the fixed exponent $-3/2$ with the adjustable faint-end slope $\alpha$.
2. Assume $\energy{L}\propto\mechanical{M}$, with a proportionality factor that varies little with halo mass.

If the connection is sound, theory should be able to recover the observed luminosity function from the halo mass function. The lecture considers this plausible but more complicated in practice and expects the argument to apply only to the composite luminosity function.

#### Collisionless galactic dynamics

The lecture refers to BT and to MBW, section 5.4. It begins with collision time scales. The first case is direct collisions with gravity neglected, analogous to atoms or molecules in a box when long-range forces are ignored. See MBW, p. 230.

### PDF page 38

Ignoring gravity, the lecture takes the direct-collision cross section to be the geometric area presented by one star of radius $\mechanical{R}_*$,

$$
\mechanical{\sigma}_{\mathrm{direct}}=\pi\mechanical{R}_*^2.
$$

Assume a spherical galaxy of radius $\mechanical{R}$ contains $N$ stars, all with radius $\mechanical{R}_*$ and with uniform number density. The density is

$$
n=\frac{N}{\mechanical{V}}=\frac{3N}{4\pi\mechanical{R}^3},
$$

where $\mechanical{V}$ is the volume of the galaxy. The volume swept out over one mean free path contains one target star on average, so $n\mechanical{\sigma}_{\mathrm{direct}}\mechanical{\ell}_{\mathrm{direct}}=1$. Thus,

$$
\mechanical{\ell}_{\mathrm{direct}}
=\frac{1}{n\mechanical{\sigma}_{\mathrm{direct}}}
=\left(\frac{4\pi}{3}\frac{\mechanical{R}^3}{N}\right)
\frac{1}{\pi\mechanical{R}_*^2}.
$$

### PDF page 39

If all stars have the same characteristic speed $\mechanical{v}$, the time over which one direct collision per star is expected is

$$
\mechanical{t}_{\mathrm{direct}}
=\frac{\mechanical{\ell}_{\mathrm{direct}}}{\mechanical{v}}
=\frac43\left(\frac{\mechanical{R}}{\mechanical{R}_*}\right)^2
\frac1N\frac{\mechanical{R}}{\mechanical{v}}
\simeq
\left(\frac{\mechanical{R}}{\mechanical{R}_*}\right)^2
\frac{\mechanical{t}_{\mathrm{cross}}}{N}.
$$

Here $\mechanical{t}_{\mathrm{cross}}=\mechanical{R}/\mechanical{v}$ is the characteristic time for a star to cross the galaxy. For a typical large galaxy, take $N\sim 10^{10}$, $\mechanical{R}\sim\quantity{10}{kpc}$, $\mechanical{v}\sim\quantity{200}{km\,s^{-1}}$, and $\mechanical{R}_*\sim\quantity{6.9\times10^5}{km}$ for a Sun-sized star. This gives $\mechanical{t}_{\mathrm{direct}}\sim\quantity{10^{21}}{yr}$, far longer than the age of the universe, of order $\quantity{10^{10}}{yr}$. Direct stellar collisions can therefore be ignored in this estimate of galactic dynamics.

### PDF page 40

#### Lecture of May 7, 2018 — gravitational encounters

The lecture recaps the direct-collision estimate of $\mechanical{t}_{\mathrm{direct}}\simeq\quantity{10^{21}}{yr}$ (MBW, p. 230), then turns to indirect collisions. The long-range gravitational attraction between stars can alter their galactic orbits even if they never touch. See BT, section 1.2.1, and Schneider, pp. 112–113.

![[Kyle Kabasares - Extragalactic Astrophysics - Two-star gravitational encounter.png|**Fig. 6** The incident star approaches along the $x$ direction at speed $\mechanical{v}$. The dashed perpendicular marks the impact parameter $\mechanical{b}$. The line between the stars gives their separation $\mechanical{r}$ and makes an angle $\theta$ with that perpendicular. The transverse force component is $\mechanical{F}_{\perp}$.]]

### PDF page 41

#### The impulse approximation

The lecture uses the same type of approximation as in the treatment of bremsstrahlung in Physics 240C. The interaction is strongest near closest approach, when $\mechanical{r}\simeq\mechanical{b}$. Estimate the impulse on the incident star by integrating the force along a straight trajectory.

1. The encounter produces a small velocity change, $\lvert\delta\mechanical{\vec v}\rvert/\mechanical{v}\ll1$.
2. The target star is treated as stationary. For two moving stars, the notes refer to the reduced-mass treatment in BT, section 3.1.
3. In the straight-line approximation, the longitudinal impulses before and after closest approach cancel. The accelerations along $x$ at positive and negative $\theta$ have opposite signs, so $\delta\mechanical{\vec v}\perp\mechanical{\vec v}$.

To obtain $\delta\mechanical{v}=\lvert\delta\mechanical{\vec v}\rvert$, it is therefore enough to integrate the force perpendicular to the trajectory.

### PDF page 42

Assume the two stars have the same mass $\mechanical{m}$. The magnitude of their gravitational force is $\mechanical{F}_r=G\mechanical{m}^2/\mechanical{r}^2$. The component perpendicular to the incident star's motion is

$$
\mechanical{F}_{\perp}
=\mechanical{F}_r\cos\theta
=\frac{G\mechanical{m}^2}{\mechanical{r}^2}\frac{\mechanical{b}}{\mechanical{r}}.
$$

Along the straight trajectory, $\mechanical{x}=\mechanical{v}\mechanical{t}$ with $\mechanical{t}=0$ at closest approach. Since $\mechanical{r}=\sqrt{\mechanical{b}^2+\mechanical{x}^2}$,

$$
\mechanical{F}_{\perp}
=\frac{G\mechanical{m}^2}{\mechanical{b}^2}
\left[1+\left(\frac{\mechanical{v}\mechanical{t}}{\mechanical{b}}\right)^2\right]^{-3/2}.
$$

The exponent follows from the factor $\mechanical{r}^{-3}$ in the projected force and agrees with the denominator in the handwritten impulse integral. Integrating Newton's second law, $\mechanical{\vec F}=\mechanical{m}\,d\mechanical{\vec v}/d\mechanical{t}$, gives

$$
\begin{aligned}
\delta\mechanical{v}
&=\frac{1}{\mechanical{m}}\int_{-\infty}^{+\infty}\mechanical{F}_{\perp}\,d\mechanical{t}\\
&=\frac{G\mechanical{m}}{\mechanical{b}^2}
\int_{-\infty}^{+\infty}
\frac{d\mechanical{t}}{\left[1+\left(\mechanical{v}\mechanical{t}/\mechanical{b}\right)^2\right]^{3/2}}.
\end{aligned}
$$

### PDF page 43

Use the trigonometric substitution $\tan u=\mechanical{v}\mechanical{t}/\mechanical{b}$, so $\sec^2u\,du=(\mechanical{v}/\mechanical{b})\,d\mechanical{t}$. The impulse integral becomes

$$
\begin{aligned}
\delta\mechanical{v}
&=\frac{G\mechanical{m}}{\mechanical{b}^2}
\frac{\mechanical{b}}{\mechanical{v}}
\int_{-\pi/2}^{\pi/2}\frac{\sec^2u\,du}{(1+\tan^2u)^{3/2}}\\
&=\frac{G\mechanical{m}}{\mechanical{b}\mechanical{v}}
\int_{-\pi/2}^{\pi/2}\cos u\,du\\
&=\frac{2G\mechanical{m}}{\mechanical{b}\mechanical{v}}.
\end{aligned}
$$

Here $1+\tan^2u=\sec^2u$ and $1/\sec u=\cos u$. The result also equals the acceleration at closest approach, $G\mechanical{m}/\mechanical{b}^2$, times an effective encounter duration, $2\mechanical{b}/\mechanical{v}$. See Schneider, p. 113, equation 3.4.

The approximation requires $\delta\mechanical{v}/\mechanical{v}\ll1$. The condition $\delta\mechanical{v}\sim\mechanical{v}$ sets the minimum impact parameter used in the calculation.

### PDF page 44

Setting $\delta\mechanical{v}\sim\mechanical{v}$ gives the lower impact-parameter cutoff,

$$
\mechanical{b}_{\min}=\frac{2G\mechanical{m}}{\mechanical{v}^2}.
$$

To sum the effects of all target stars, approximate their mean projected number density by

$$
\Sigma_{\mathrm{target}}=\frac{N}{\pi\mechanical{R}^2},
$$

where $N$ is the total number of stars and $\mechanical{R}$ is the galaxy radius. For one target, the cross-sectional area in the impact-parameter range $\mechanical{b}$ to $\mechanical{b}+d\mechanical{b}$ is $\mechanical{\sigma}_*=2\pi\mechanical{b}\,d\mechanical{b}$.

![[Kyle Kabasares - Extragalactic Astrophysics - Encounter impact-parameter annulus.png|**Fig. 7** An annulus of radius $\mechanical{b}$ and width $d\mechanical{b}$ gives the cross section for encounters in this impact-parameter range.]]

The expected number of deflections in that range during one crossing is

$$
\delta n=\Sigma_{\mathrm{target}}\mechanical{\sigma}_*
=\frac{2N}{\mechanical{R}^2}\mechanical{b}\,d\mechanical{b}.
$$

### PDF page 45

#### Lecture of May 9, 2018 — cumulative deflections

Each encounter deflects the star in a random direction, so $\langle\delta\mechanical{\vec v}\rangle=0$. The mean-square velocity change still accumulates. For one crossing, encounters in a given impact-parameter interval contribute

$$
d(\Delta\mechanical{v}^2)
=(\delta\mechanical{v})^2\,\delta n
=\left(\frac{2G\mechanical{m}}{\mechanical{b}\mechanical{v}}\right)^2
\frac{2N}{\mechanical{R}^2}\mechanical{b}\,d\mechanical{b}.
$$

The squared kicks add in the mean because the cross terms between independent deflections average to zero. Substituting the two expressions from the preceding derivation and integrating over impact parameters gives

$$
\begin{aligned}
\Delta\mechanical{v}^2
&=\frac{8N(G\mechanical{m})^2}{\mechanical{R}^2\mechanical{v}^2}
\int_{\mechanical{b}_{\min}}^{\mechanical{b}_{\max}}\frac{d\mechanical{b}}{\mechanical{b}}\\
&=\frac{8N(G\mechanical{m})^2}{\mechanical{R}^2\mechanical{v}^2}\ln\Lambda,
\qquad
\Lambda=\frac{\mechanical{b}_{\max}}{\mechanical{b}_{\min}}.
\end{aligned}
$$

### PDF page 46

For the Coulomb logarithm, choose $\mechanical{b}_{\max}=\mechanical{R}$ and use the small-deflection cutoff $\mechanical{b}_{\min}=2G\mechanical{m}/\mechanical{v}^2$. Then

$$
\ln\Lambda=\ln\!\left(\frac{\mechanical{R}\mechanical{v}^2}{2G\mechanical{m}}\right).
$$

Approximate the typical stellar speed by the circular speed at the edge of the galaxy,

$$
\mechanical{v}^2\simeq\mechanical{v}_{\mathrm c}^2
=\frac{GN\mechanical{m}}{\mechanical{R}}.
$$

Eliminating $\mechanical{R}$ gives

$$
\frac{\Delta\mechanical{v}^2}{\mechanical{v}^2}\simeq\frac{8\ln\Lambda}{N}.
$$

The denominator is the squared speed, as follows from the preceding substitution. This also gives $\Lambda\simeq N/2$ and hence $\ln\Lambda\simeq\ln N$ for large $N$. The number of crossings needed for an order-unity change in velocity is set by $N_{\mathrm{relax}}\Delta\mechanical{v}^2=\mechanical{v}^2$, so

$$
N_{\mathrm{relax}}\simeq\frac{N}{8\ln\Lambda}\simeq\frac{N}{8\ln N}.
$$

### PDF page 47

Each crossing takes $\mechanical{t}_{\mathrm{cross}}=\mechanical{R}/\mechanical{v}$. The **two-body relaxation time** is

$$
\mechanical{t}_{\mathrm{relax}}
=N_{\mathrm{relax}}\mechanical{t}_{\mathrm{cross}}
\simeq\frac{0.1N}{\ln N}\mechanical{t}_{\mathrm{cross}}.
$$

After one relaxation time, many small kicks from passing stars have accumulated enough to change the orbit substantially from the orbit predicted by the smooth gravitational field. In that sense, the star loses memory of its initial conditions. See BT, p. 37.

The notes compare a large galaxy's age of hundreds of crossing times with a relaxation time of order $10^8\mechanical{t}_{\mathrm{cross}}$. The handwritten star count is read as $N\sim10^{11}$, consistent in order of magnitude with this relaxation estimate. Two-body stellar encounters can generally be neglected in large galaxies, with the very centers of galaxies a possible exception.

### PDF page 48

In a **collisionless system**, particles respond to the gravitational field of the smooth mass distribution. The dynamics on the time scales of interest are well approximated by that field.

#### The collisionless Boltzmann equation

See MBW, section 5.4.2, and BT, section 4.1. Assume a collisionless system of $N$ identical point masses, which may represent stars or dark-matter particles. Treating them as identical simplifies the derivation.

In a system with a large number of particles, such as the stars in an elliptical galaxy, observations usually constrain the distribution of stellar positions and motions. A statistical description in phase space can therefore replace a detailed calculation of each orbit.

Define the phase-space **distribution function** $f$ so that

$$
f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{x}\,d^3\mechanical{v}
$$

is the probability that a randomly chosen star at time $\mechanical{t}$ has a position and velocity in the indicated phase-space volume.

### PDF page 49

The distribution function gives a full statistical description of the system. Buote follows the BT convention, in which $f$ is normalized as a probability density. The MBW convention uses $f_{\mathrm{MBW}}=Nf_{\mathrm{BT}}$, the number density of particles in phase space.

In the BT convention,

$$
\int f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{v}\,d^3\mechanical{x}=1.
$$

Integrating over velocities gives the probability per unit spatial volume,

$$
\nu(\mechanical{\vec x},\mechanical{t})
=\int f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{v}.
$$

The number density is $n=N\nu$. For identical particles of mass $\mechanical{m}$, the mass density is $\mechanical{\rho}=\mechanical{m}n=\mechanical{M}\nu$, where $\mechanical{M}=N\mechanical{m}$ is the total mass. Thus,

$$
\mechanical{\rho}(\mechanical{\vec x},\mechanical{t})
=\mechanical{M}\int f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{v}.
$$

See BT, section 4.1.2, for the relation of $f$ to observables. The time argument is suppressed in the handwritten density formulas.

### PDF page 50

At a fixed position $\mechanical{\vec x}$, the conditional velocity density is

$$
P_{\mechanical{\vec x}}(\mechanical{\vec v})
=\frac{f(\mechanical{\vec x},\mechanical{\vec v})}{\nu(\mechanical{\vec x})}.
$$

The kinematic observables come from its velocity moments. For the mean velocity,

$$
\overline{\mechanical{\vec v}}(\mechanical{\vec x})
=\int\mechanical{\vec v}P_{\mechanical{\vec x}}(\mechanical{\vec v})\,d^3\mechanical{v}
=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{\vec v}f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}.
$$

In both forms the integral is over velocity at fixed position. A single component, such as the radial component $\mechanical{v}_r$ or the component along the azimuthal angle, is often more convenient. Its first and second moments are

$$
\begin{aligned}
\overline{\mechanical{v}_i}
&=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{v}_i f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v},\\
\overline{\mechanical{v}_i^2}
&=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{v}_i^2 f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}.
\end{aligned}
$$

The principal quantities in this description are $\mechanical{\rho}$, $\overline{\mechanical{v}_i}$, and $\overline{\mechanical{v}_i^2}$.

### PDF page 51

The total derivative $df/d\mechanical{t}$ describes the evolution of $f$ as one follows a star through phase space. In the smooth gravitational field, the collisionless phase-space flow is incompressible. With no particle sources or sinks, probability is conserved and $f$ stays constant along a trajectory,

$$
\frac{df}{d\mechanical{t}}=0.
$$

This is the **Lagrangian** or **convective** derivative. The lecture separates the rate of change at a fixed phase-space point, the **Eulerian** term $\partial f/\partial\mechanical{t}$, from the change due to motion to a nearby point. The spatial displacement is $d\mechanical{\vec x}=\mechanical{\vec v}\,d\mechanical{t}$. Motion through velocity space also contributes when the star accelerates. See the discussion of convective derivatives in BT, pp. 807–808.

### PDF page 52

Let $\vec w=(\mechanical{\vec x},\mechanical{\vec v})$ collect the six phase-space coordinates. At fixed time, a phase-space displacement changes $f$ by $\sum_{i=1}^6(\partial f/\partial w_i)\,dw_i$. Along the orbit, $dw_i=(dw_i/d\mechanical{t})\,d\mechanical{t}$. Adding the explicit time dependence gives

$$
\frac{df}{d\mechanical{t}}
=\frac{\partial f}{\partial\mechanical{t}}
+\sum_{i=1}^3\frac{\partial f}{\partial\mechanical{x}_i}
\frac{d\mechanical{x}_i}{d\mechanical{t}}
+\sum_{i=1}^3\frac{\partial f}{\partial\mechanical{v}_i}
\frac{d\mechanical{v}_i}{d\mechanical{t}}
=0.
$$

If $\energy{V}=\mechanical{m}\mechanical{\Phi}$ is the star's gravitational potential energy, the smooth galactic field gives

$$
\frac{d\mechanical{v}_i}{d\mechanical{t}}
=\frac{\mechanical{F}_{\mathrm g,i}}{\mechanical{m}}
=-\frac{1}{\mechanical{m}}\frac{\partial\energy{V}}{\partial\mechanical{x}_i}
=-\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}.
$$

#### Lecture of May 14, 2018 — the Vlasov equation

Using $d\mechanical{x}_i/d\mechanical{t}=\mechanical{v}_i$ and the acceleration above gives the **collisionless Boltzmann equation**, also called the **Vlasov equation**,

$$
\frac{df}{d\mechanical{t}}
=\frac{\partial f}{\partial\mechanical{t}}
+\sum_{i=1}^3\mechanical{v}_i\frac{\partial f}{\partial\mechanical{x}_i}
-\sum_{i=1}^3\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\frac{\partial f}{\partial\mechanical{v}_i}
=0.
$$

The spatial derivative in the middle term follows from the chain rule and appears explicitly in the May 14 recap.

### PDF page 53

#### Jeans equations

See MBW, section 5.4.5, and BT, section 4.8. Observations typically constrain quantities such as $\nu$, $\mechanical{\rho}$, $\overline{\mechanical{v}_i}$, and $\overline{\mechanical{v}_i^2}$ more directly than the full distribution function. The velocity moments of the collisionless Boltzmann equation give equations for such quantities. To form the moment of order $n$, multiply by $\mechanical{v}_i^n$ and integrate over all velocities.

For the zeroth moment, $n=0$, integrate the equation directly to obtain the continuity equation. Its three terms are

$$
\begin{aligned}
0={}&\int\frac{\partial f}{\partial\mechanical{t}}\,d^3\mechanical{v}
+\int\sum_i\mechanical{v}_i\frac{\partial f}{\partial\mechanical{x}_i}\,d^3\mechanical{v}\\
&-\int\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}.
\end{aligned}
$$

For the first term the domain of velocity integration is independent of time. Hence

$$
\int\frac{\partial f}{\partial\mechanical{t}}\,d^3\mechanical{v}
=\frac{\partial}{\partial\mechanical{t}}\int f\,d^3\mechanical{v}
=\frac{\partial\nu}{\partial\mechanical{t}}.
$$

### PDF page 54

The second term is

$$
\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\int\mechanical{v}_i f\,d^3\mechanical{v}
=\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right).
$$

For the third term, introduce the velocity-space gradient $\nabla_v=\sum_i\hat e_i\,\partial/\partial\mechanical{v}_i$. By the product rule, $\nabla_v\cdot(f\vec A)=f\nabla_v\cdot\vec A+\vec A\cdot\nabla_v f$. The vector $\nabla_x\mechanical{\Phi}$ is independent of velocity, so

$$
\begin{aligned}
\int\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}
&=\int\nabla_v\cdot\left(f\nabla_x\mechanical{\Phi}\right)\,d^3\mechanical{v}\\
&=\oint \left(f\nabla_x\mechanical{\Phi}\right)\cdot\hat n\,dS_v
=0.
\end{aligned}
$$

The divergence theorem gives the surface integral. Its boundary can be taken at sufficiently high speeds where the distribution vanishes, as assumed in the lecture.

The zeroth moment therefore gives continuity for $\nu$. Multiplying by the constant $\mechanical{M}=N\mechanical{m}$ and using $\mechanical{\rho}=\mechanical{M}\nu$ gives mass continuity,

$$
\begin{aligned}
\frac{\partial\nu}{\partial\mechanical{t}}
+\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right)&=0,\\
\frac{\partial\mechanical{\rho}}{\partial\mechanical{t}}
+\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{\rho}\overline{\mechanical{v}_i}\right)&=0.
\end{aligned}
$$

### PDF page 55

The spatial term in mass continuity can also be written as $\nabla_x\cdot(\mechanical{\rho}\overline{\mechanical{\vec v}})$.

For the first moment, fix a component $j$, multiply the collisionless Boltzmann equation by $\mechanical{v}_j$, and integrate over velocities,

$$
\begin{aligned}
0={}&\frac{\partial}{\partial\mechanical{t}}
\int\mechanical{v}_j f\,d^3\mechanical{v}
+\sum_i\int\mechanical{v}_i\mechanical{v}_j
\frac{\partial f}{\partial\mechanical{x}_i}\,d^3\mechanical{v}\\
&-\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\int\mechanical{v}_j\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}.
\end{aligned}
$$

The first term is $\partial(\nu\overline{\mechanical{v}_j})/\partial\mechanical{t}$. Because positions and velocities are independent coordinates in phase space, the spatial derivative in the second term can be taken outside the integral,

$$
\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\int\mechanical{v}_i\mechanical{v}_j f\,d^3\mechanical{v}
=\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i\mechanical{v}_j}\right).
$$

For the third term, the product rule gives

$$
\begin{aligned}
\int\mechanical{v}_j\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}
={}&\int\frac{\partial(\mechanical{v}_j f)}{\partial\mechanical{v}_i}\,d^3\mechanical{v}\\
&-\int\frac{\partial\mechanical{v}_j}{\partial\mechanical{v}_i}f\,d^3\mechanical{v}.
\end{aligned}
$$

The velocity derivative is with respect to the summed index $i$, as in the collisionless equation and in the product-rule calculation on the handwritten page.

### PDF page 56

After restoring the potential gradient, the first integral from the product rule is a velocity-space divergence. By the divergence theorem,

$$
\int\nabla_v\cdot\left(\mechanical{v}_j f\nabla_x\mechanical{\Phi}\right)\,d^3\mechanical{v}
=\oint\left(\mechanical{v}_j f\nabla_x\mechanical{\Phi}\right)\cdot\hat n\,dS_v=0.
$$

The boundary flux vanishes if the distribution has finite velocity support or decays sufficiently fast at large velocities. The other integral uses $\partial\mechanical{v}_j/\partial\mechanical{v}_i=\delta_{ij}$, the Kronecker delta, because the velocity components are independent coordinates. Its contribution to the first moment is

$$
-\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\int(-\delta_{ij})f\,d^3\mechanical{v}
=\nu\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}.
$$

Combining all three terms gives

$$
\frac{\partial}{\partial\mechanical{t}}\left(\nu\overline{\mechanical{v}_j}\right)
+\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i\mechanical{v}_j}\right)
+\nu\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}=0.
$$

The standard Jeans form follows by subtracting $\overline{\mechanical{v}_j}$ times the continuity equation.

### PDF page 57

Multiplying the continuity equation by $\overline{\mechanical{v}_j}$ gives

$$
\overline{\mechanical{v}_j}\frac{\partial\nu}{\partial\mechanical{t}}
+\overline{\mechanical{v}_j}\sum_i
\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right)=0.
$$

Subtracting this equation from the first moment replaces its time derivative with $\nu\,\partial\overline{\mechanical{v}_j}/\partial\mechanical{t}$. Define the **velocity dispersion tensor** by

$$
\mechanical{\sigma}_{ij}^2
=\overline{\mechanical{v}_i\mechanical{v}_j}
-\overline{\mechanical{v}_i}\,\overline{\mechanical{v}_j}.
$$

Using this identity and expanding the derivative of the product of mean velocities gives

$$
\begin{aligned}
\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i\mechanical{v}_j}\right)
={}&\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\mechanical{\sigma}_{ij}^2\right)
+\overline{\mechanical{v}_j}\sum_i
\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right)\\
&+\sum_i\nu\overline{\mechanical{v}_i}
\frac{\partial\overline{\mechanical{v}_j}}{\partial\mechanical{x}_i}.
\end{aligned}
$$

The middle term cancels the spatial term from continuity. The **Jeans equations**, analogous to Euler's equations, are therefore

$$
\nu\frac{\partial\overline{\mechanical{v}_j}}{\partial\mechanical{t}}
+\sum_i\nu\overline{\mechanical{v}_i}
\frac{\partial\overline{\mechanical{v}_j}}{\partial\mechanical{x}_i}
=-\nu\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}
-\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\mechanical{\sigma}_{ij}^2\right).
$$

The indices and spatial derivatives follow from the product-rule expansion above. Multiplying through by $N\mechanical{m}$ converts each factor of $\nu$ to $\mechanical{\rho}$.

### PDF page 58

The Jeans equations are the collisionless analogue of the Euler equations for a fluid.

1. The probability density $\nu$ corresponds, after multiplication by the total mass, to the fluid mass density.
2. The mean stellar velocity corresponds to the bulk fluid velocity.
3. The divergence of the velocity dispersion term corresponds to the pressure gradient $\nabla\mechanical{P}$ in the fluid equations.

The lecture calls $\nu\mechanical{\sigma}_{ij}^2$ the stress tensor in the probability-normalized equations. In mass units the stress is $\mechanical{\rho}\mechanical{\sigma}_{ij}^2$. It can describe anisotropic pressure, whereas the local pressure of an ideal fluid is isotropic.

Continuity and the Jeans equations relate observable quantities to the gravitational potential. Even if the potential and tracer density are specified, the three components of the mean velocity and the six independent components of the symmetric dispersion tensor leave nine kinematic unknowns. The four equations consist of one scalar continuity equation and three Jeans equations. Further assumptions are needed to close the system.

### PDF page 59

Solving the Jeans equations usually requires a prescription for $\mechanical{\sigma}_{ij}^2$ that plays a role analogous to an equation of state. A prescribed tensor can lead to moment solutions that fail to correspond to a physical distribution $f\geq0$ everywhere in phase space. The notes also caution against assuming that the tensor is diagonal in the chosen coordinates.

In terms of the distribution function, the full definition is

$$
\begin{aligned}
\mechanical{\sigma}_{ij}^2
&=\frac{1}{\nu(\mechanical{\vec x})}\int
\left(\mechanical{v}_i-\overline{\mechanical{v}_i}\right)
\left(\mechanical{v}_j-\overline{\mechanical{v}_j}\right)
f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}\\
&=\overline{\mechanical{v}_i\mechanical{v}_j}
-\overline{\mechanical{v}_i}\,\overline{\mechanical{v}_j}.
\end{aligned}
$$

The tensor is symmetric, so at each point $\mechanical{\vec x}$ an orthogonal basis $\hat e_i(\mechanical{\vec x})$ diagonalizes it. In that basis $\mechanical{\sigma}_{ij}^2=\mechanical{\sigma}_{ii}^2\delta_{ij}$ with no sum over $i$. The ellipsoid with principal semiaxes $\mechanical{\sigma}_{11}$, $\mechanical{\sigma}_{22}$, and $\mechanical{\sigma}_{33}$ is called the **velocity ellipsoid** at $\mechanical{\vec x}$.

### PDF page 60

Observers usually measure the line-of-sight velocity dispersion. A model specifying the dispersion tensor, mean velocity, tracer density, and gravitational potential can predict the line-of-sight quantities $\mechanical{\sigma}_{\mathrm{los}}$ and $\overline{\mechanical{v}_{\mathrm{los}}}$ for comparison with data.

#### Lecture of May 16, 2018 — the spherical Jeans equation

After recapping the Jeans equations in Cartesian coordinates, the lecture quotes the result for a steady spherical system. See BT, p. 350, and MBW, p. 241. The radial equation is

$$
\frac{d}{d\mechanical{r}}\left(\nu\overline{\mechanical{v}_r^2}\right)
+\frac{2\beta}{\mechanical{r}}\nu\overline{\mechanical{v}_r^2}
=-\nu\frac{d\mechanical{\Phi}}{d\mechanical{r}},
$$

where $\beta$ measures the anisotropy of the stellar velocities.

### PDF page 61

In the steady spherical model the mean velocities vanish. The radial second moment at position $\mechanical{\vec x}$ is

$$
\overline{\mechanical{v}_r^2}(\mechanical{\vec x})
=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{v}_r^2 f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}.
$$

The **anisotropy parameter** compares radial and tangential motions,

$$
\begin{aligned}
\beta(\mechanical{r})
&=1-\frac{\overline{\mechanical{v}_\theta^2}+\overline{\mechanical{v}_\phi^2}}
{2\overline{\mechanical{v}_r^2}}\\
&=1-\frac{\overline{\mechanical{v}_t^2}}{\overline{\mechanical{v}_r^2}}
=1-\frac{\mechanical{\sigma}_t^2}{\mechanical{\sigma}_r^2}.
\end{aligned}
$$

Spherical symmetry gives equal second moments in the two tangential directions, so $\mechanical{v}_t$ denotes one component along any direction tangent to the sphere. The last equality uses the vanishing mean velocities, which make the second moments equal to the corresponding variances. Here $\beta$ is a function of radius in the spherical model.

The case $\beta=0$ has isotropic second moments. In this case the spherical Jeans equation is formally equivalent to hydrostatic equilibrium.

### PDF page 62

For purely radial orbits $\beta=1$. Purely tangential orbits give the limit $\beta\to-\infty$. Radially biased systems have $0<\beta\leq1$, while tangentially biased systems have $\beta<0$.

To express the spherical Jeans equation in terms of the mass profile, expand the derivative of $\nu\overline{\mechanical{v}_r^2}$ and use

$$
\frac{d\mechanical{\Phi}}{d\mechanical{r}}
=\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}^2}.
$$

Dividing by $\nu\overline{\mechanical{v}_r^2}$ and writing the two derivatives as logarithmic slopes gives

$$
\mechanical{M}(<\mechanical{r})
=-\frac{\mechanical{r}\overline{\mechanical{v}_r^2}}{G}
\left[
\frac{d\ln\nu}{d\ln\mechanical{r}}
+\frac{d\ln\overline{\mechanical{v}_r^2}}{d\ln\mechanical{r}}
+2\beta
\right].
$$

For $\beta=0$, the fluid counterpart follows by replacing $\nu$ with the gas mass density $\mechanical{\rho}_{\mathrm{gas}}$ and $\overline{\mechanical{v}_r^2}$ with $k_{\mathrm B}\thermal{T}/(\mu\mechanical{m}_{\mathrm u})$. Their product plays the role of the ideal-gas pressure in hydrostatic equilibrium. Here $\mu\mechanical{m}_{\mathrm u}$ is the mean particle mass and $\mechanical{m}_{\mathrm u}$ is the atomic mass unit.

### PDF page 63

For elliptical galaxies and galaxy clusters, the anisotropy profile $\beta(\mechanical{r})$ is constrained indirectly, using assumptions about the stellar orbits. Uncertainty in that profile carries through to $\mechanical{M}(<\mechanical{r})$ inferred from the spherical Jeans equation. The ambiguous handwritten profile symbol is read here as $\beta$, the unmeasured term in the preceding equation.

#### The isothermal sphere

The lecture introduces a spherical model specified by its distribution function. See BT, pp. 302–307, and MBW, p. 242. In the number-density convention, the notes give the form

$$
f(\energy{\xi})
=\frac{\mechanical{\rho}_0/\mechanical{m}}{(2\pi\mechanical{\sigma}^2)^{3/2}}
\exp\!\left(\frac{\energy{\xi}}{\mechanical{\sigma}^2}\right),
$$

where $\mechanical{m}$ is the particle mass, $\mechanical{\rho}_0$ is the density scale, and $\mechanical{\sigma}^2=\langle\mechanical{v}^2\rangle/3$ is constant. The energy variable $\energy{\xi}$ is expressed per unit mass. Its sign convention is the one that gives a decaying Gaussian in speed. At fixed position the velocity dependence is Maxwellian, as in a collisional isothermal gas with $\mechanical{\sigma}^2=k_{\mathrm B}\thermal{T}/\mechanical{m}$.

### PDF page 64

Define the relative gravitational potential and relative specific energy by

$$
\mechanical{\Psi}=\mechanical{\Phi}_0-\mechanical{\Phi},
\qquad
\energy{\xi}=\mechanical{\Phi}_0-\energy{E}
=\mechanical{\Psi}-\frac{\mechanical{v}^2}{2},
$$

where $\mechanical{\Phi}_0$ is constant and $\energy{E}=\mechanical{\Phi}+\mechanical{v}^2/2$ is the total energy per unit mass. Integrating the Gaussian in the distribution function over velocity yields

$$
\mechanical{\rho}(\mechanical{r})=\mechanical{\rho}_0
\exp\!\left(\frac{\mechanical{\Psi}(\mechanical{r})}{\mechanical{\sigma}^2}\right).
$$

The density is $\mechanical{m}\int f\,d^3\mechanical{v}$ in the number-density convention used for the preceding distribution. It is $N\mechanical{m}\int f\,d^3\mechanical{v}$ in the probability convention written on this page. The exponential denominator is the velocity variance $\mechanical{\sigma}^2$, as in the following handwritten Poisson equation.

Since $\nabla^2\mechanical{\Psi}=-4\pi G\mechanical{\rho}$, spherical symmetry gives

$$
\frac{1}{\mechanical{r}^2}\frac{d}{d\mechanical{r}}
\left(\mechanical{r}^2\frac{d\mechanical{\Psi}}{d\mechanical{r}}\right)
=-4\pi G\mechanical{\rho}_0
\exp\!\left(\frac{\mechanical{\Psi}}{\mechanical{\sigma}^2}\right).
$$

This can be solved numerically with $\mechanical{\rho}(0)=\mechanical{\rho}_0$ and $(d\mechanical{\Psi}/d\mechanical{r})_{\mechanical{r}=0}=0$. The scale used to discuss the solution is the **King radius**,

$$
\mechanical{r}_0=\frac{3\mechanical{\sigma}}{\sqrt{4\pi G\mechanical{\rho}_0}}.
$$

### PDF page 65

At $\mechanical{r}\lesssim2\mechanical{r}_0$, the King approximation describes the inner density profile,

$$
\mechanical{\rho}(\mechanical{r})\simeq
\frac{\mechanical{\rho}_0}{[1+(\mechanical{r}/\mechanical{r}_0)^2]^{3/2}}.
$$

At $\mechanical{r}\gtrsim10\mechanical{r}_0$, the solution approaches the singular isothermal sphere (SIS),

$$
\mechanical{\rho}(\mechanical{r})\simeq
\frac{\mechanical{\sigma}^2}{2\pi G\mechanical{r}^2}.
$$

At large radii, $\mechanical{M}(<\mechanical{r})\propto\mechanical{r}$. The untruncated isothermal sphere therefore has infinite mass. Modeling a real galaxy with it requires a cutoff. The King approximation is valid in the inner region, and the full isothermal profile requires the numerical solution.

#### The virial equations

See BT, section 4.8.3, and MBW, section 5.4.4.

### PDF page 66

A spatial moment of the Jeans equations relates the total kinetic and gravitational energies of a collisionless stellar system. Start with the first velocity moment in conservative form. Multiply by $\mechanical{M}\mechanical{x}_k$, where $\mechanical{M}$ is the total mass, and integrate over all space. With $\mechanical{\rho}=\mechanical{M}\nu$, this gives

$$
\begin{aligned}
\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{t}}
\left(\mechanical{\rho}\overline{\mechanical{v}_j}\right)d^3\mechanical{x}
={}&-\sum_i\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{\rho}\overline{\mechanical{v}_i\mechanical{v}_j}\right)d^3\mechanical{x}\\
&-\int\mechanical{\rho}\mechanical{x}_k
\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}\,d^3\mechanical{x}.
\end{aligned}
$$

The last integral is the $kj$ component of the **Chandrasekhar potential-energy tensor**,

$$
\energy{W}_{kj}
=-\int\mechanical{\rho}(\mechanical{\vec x})\mechanical{x}_k
\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}\,d^3\mechanical{x}.
$$

The handwritten definition uses the transposed component $jk$. All integrals extend over the entire system, usually taken to be all space.

### PDF page 67

Use the product rule on the first integral on the right of the spatial-moment equation. Since $\partial\mechanical{x}_k/\partial\mechanical{x}_i=\delta_{ki}$,

$$
\begin{aligned}
\sum_i\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{\rho}\overline{\mechanical{v}_i\mechanical{v}_j}\right)d^3\mechanical{x}
={}&\sum_i\int\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{x}_k\mechanical{\rho}\overline{\mechanical{v}_i\mechanical{v}_j}\right)
d^3\mechanical{x}\\
&-\int\mechanical{\rho}\overline{\mechanical{v}_k\mechanical{v}_j}\,d^3\mechanical{x}.
\end{aligned}
$$

The divergence theorem turns the first term into the **surface pressure term**,

$$
\energy{\Sigma}_{kj}=
\sum_i\oint\mechanical{x}_k\mechanical{\rho}
\overline{\mechanical{v}_i\mechanical{v}_j}\,n_i\,dS,
$$

where $n_i$ is the outward unit normal component. The lecture sets $\energy{\Sigma}_{kj}=0$ for the derivation. This applies when the integrand falls off sufficiently quickly for the surface flux at infinity to vanish.

### PDF page 68

Define the **kinetic-energy tensor** and split it into ordered and random contributions,

$$
\begin{aligned}
\energy{K}_{jk}
&=\frac12\int\mechanical{\rho}
\overline{\mechanical{v}_j\mechanical{v}_k}\,d^3\mechanical{x}
=\energy{T}_{jk}+\frac12\energy{\Pi}_{jk},\\
\energy{T}_{jk}
&=\frac12\int\mechanical{\rho}\,
\overline{\mechanical{v}_j}\,\overline{\mechanical{v}_k}\,d^3\mechanical{x},\\
\energy{\Pi}_{jk}
&=\int\mechanical{\rho}\mechanical{\sigma}_{jk}^2\,d^3\mechanical{x}.
\end{aligned}
$$

Here $\energy{T}_{jk}$ accounts for streaming or ordered motions, and $\energy{\Pi}_{jk}/2$ accounts for random motions. This decomposition uses the velocity covariance.

#### Lecture of May 21, 2018 — spatial moment recap

With the surface contribution displayed, the relation from the previous pages becomes

$$
\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{t}}
\left(\mechanical{\rho}\overline{\mechanical{v}_j}\right)d^3\mechanical{x}
=-\energy{\Sigma}_{kj}+2\energy{K}_{kj}+\energy{W}_{kj}.
$$

### PDF page 69

With the surface term set to zero, the spatial moment becomes $2\energy{K}_{kj}+\energy{W}_{kj}=2\energy{T}_{kj}+\energy{\Pi}_{kj}+\energy{W}_{kj}$. Write the equation again with $j$ and $k$ interchanged and average the two equations. The tensors on the right are symmetric for the self-gravitating system considered here, so

$$
\frac12\frac{d}{d\mechanical{t}}
\int\mechanical{\rho}\left(
\mechanical{x}_k\overline{\mechanical{v}_j}
+\mechanical{x}_j\overline{\mechanical{v}_k}
\right)d^3\mechanical{x}
=2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}.
$$

The time derivative can be moved outside the integral because the integration coordinates and domain are fixed. After spatial integration, only time remains as an independent variable, so the derivative is written as an ordinary derivative.

### PDF page 70

Define the second spatial moment of mass by

$$
\mechanical{I}_{jk}
=\int\mechanical{\rho}\mechanical{x}_j\mechanical{x}_k\,d^3\mechanical{x}.
$$

Differentiate under the integral and use continuity for $\partial\mechanical{\rho}/\partial\mechanical{t}$. Applying the product rule, then using the divergence theorem to discard the vanishing boundary flux, gives

$$
\begin{aligned}
\frac{d\mechanical{I}_{jk}}{d\mechanical{t}}
&=\int\frac{\partial\mechanical{\rho}}{\partial\mechanical{t}}
\mechanical{x}_j\mechanical{x}_k\,d^3\mechanical{x}\\
&=-\sum_i\int\mechanical{x}_j\mechanical{x}_k
\frac{\partial(\mechanical{\rho}\overline{\mechanical{v}_i})}
{\partial\mechanical{x}_i}\,d^3\mechanical{x}\\
&=\sum_i\int\mechanical{\rho}\overline{\mechanical{v}_i}
(\mechanical{x}_k\delta_{ji}+\mechanical{x}_j\delta_{ki})\,d^3\mechanical{x}\\
&=\int\mechanical{\rho}\left(
\mechanical{x}_k\overline{\mechanical{v}_j}
+\mechanical{x}_j\overline{\mechanical{v}_k}
\right)d^3\mechanical{x}.
\end{aligned}
$$

Substitute this result into the symmetrized spatial-moment equation to obtain the **tensor virial theorem**,

$$
\frac12\frac{d^2\mechanical{I}_{jk}}{d\mechanical{t}^2}
=2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}.
$$

### PDF page 71

In a time-independent equilibrium, $d^2\mechanical{I}_{jk}/d\mechanical{t}^2=0$. The virial equations relate properties integrated over the entire galaxy. If $\mechanical{\rho}$ is the density of a tracer population in a potential produced wholly or partly by other matter, the integrals need only cover the tracer support. For a single star or dark-matter particle, a surface enclosing the orbit gives zero boundary flux.

The standard form above treats a self-gravitating system with vanishing surface pressure. With external gravity and a boundary stress, the notes add separate terms,

$$
\frac12\frac{d^2\mechanical{I}_{jk}}{d\mechanical{t}^2}
=2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}
+\energy{\Sigma}^{(\mathrm{add})}_{jk}+\energy{V}_{jk}.
$$

Here $\energy{\Sigma}^{(\mathrm{add})}_{jk}$ denotes the signed surface term added in the handwritten equation. The earlier definition on page 67 used the outward flux, whose contribution has the opposite sign, with the symmetric part taken for the tensor equation.

### PDF page 72

The symmetric contribution from an external potential $\mechanical{\Phi}_{\mathrm{ext}}$ is

$$
\energy{V}_{jk}
=-\frac12\int\mechanical{\rho}
\left(
\mechanical{x}_k\frac{\partial\mechanical{\Phi}_{\mathrm{ext}}}{\partial\mechanical{x}_j}
+\mechanical{x}_j\frac{\partial\mechanical{\Phi}_{\mathrm{ext}}}{\partial\mechanical{x}_k}
\right)d^3\mechanical{x}.
$$

See BT, problem 4.38. External and surface terms are relevant for a galaxy embedded in a cluster or for a region within a galaxy or cluster.

The rigid-body inertia tensor $\mechanical{I}'_{jk}$ is related to the second spatial moment used in the virial equations by

$$
\mechanical{I}'_{jk}
=\int\mechanical{\rho}\left(
\lvert\mechanical{\vec x}\rvert^2\delta_{jk}
-\mechanical{x}_j\mechanical{x}_k
\right)d^3\mechanical{x}
=\operatorname{tr}(\mechanical{I})\delta_{jk}-\mechanical{I}_{jk}.
$$

The prime distinguishes the two tensors. See BT, equation D.41.

#### The scalar virial theorem

Taking the trace of the standard tensor virial theorem gives

$$
\frac12\frac{d^2\mechanical{I}}{d\mechanical{t}^2}
=2\energy{K}+\energy{W},
$$

where $\mechanical{I}$, $\energy{K}$, and $\energy{W}$ are the corresponding tensor traces.

### PDF page 73

The scalar moments are

$$
\begin{aligned}
\mechanical{I}&=\int\mechanical{\rho}\mechanical{r}^2\,d^3\mechanical{x},\\
\energy{K}&=\frac12\int\mechanical{\rho}\overline{\mechanical{v}^2}\,d^3\mechanical{x},\\
\energy{W}&=-\int\mechanical{\rho}\,\mechanical{\vec x}\cdot
\nabla\mechanical{\Phi}\,d^3\mechanical{x}.
\end{aligned}
$$

Here $\mechanical{r}^2=\mechanical{x}^2+\mechanical{y}^2+\mechanical{z}^2$ and $\mechanical{v}^2=\mechanical{v}_x^2+\mechanical{v}_y^2+\mechanical{v}_z^2$. For Newtonian self-gravity, $\energy{W}$ is the gravitational potential energy. See BT, equation 2.23. If surface pressure or an external potential is present, include the trace of its corresponding tensor term.

In steady state with the standard isolated-system assumptions, the scalar virial theorem gives $2\energy{K}+\energy{W}=0$. With $\energy{E}=\energy{K}+\energy{W}$, this implies

$$
\energy{E}=-\energy{K}=\frac{\energy{W}}2.
$$

The total kinetic energy is also $\energy{K}=\tfrac12\mechanical{M}\langle\mechanical{v}^2\rangle$, where the average is mass weighted over the system.

### PDF page 74

The mass-weighted mean-square speed over the system is

$$
\langle\mechanical{v}^2\rangle
=\frac{1}{\mechanical{M}}\int\mechanical{\rho}\overline{\mechanical{v}^2}\,d^3\mechanical{x}.
$$

Define the **gravitational radius** $\mechanical{r}_{\mathrm g}=G\mechanical{M}^2/\lvert\energy{W}\rvert$ (BT, equation 2.42). The scalar virial theorem in steady state then gives

$$
\langle\mechanical{v}^2\rangle=\frac{\lvert\energy{W}\rvert}{\mechanical{M}}
=\frac{G\mechanical{M}}{\mechanical{r}_{\mathrm g}}.
$$

The gravitational radius is of the same order as the half-mass radius $\mechanical{r}_{1/2}$. The lecture attributes this observation for simple stellar systems to Spitzer (1969) and gives the King-model estimate in BT, equation 4.249,

$$
\langle\mechanical{v}^2\rangle\simeq0.45\frac{G\mechanical{M}}{\mechanical{r}_{1/2}}.
$$

For a spherical system, the three global Cartesian second moments are equal. Choosing the line of sight as one axis gives $\langle\mechanical{v}^2\rangle=3\langle\mechanical{v}_{\mathrm{los}}^2\rangle$.

### PDF page 75

In the nonstreaming spherical model the global line-of-sight second moment is its velocity variance, so $\langle\mechanical{v}^2\rangle=3\mechanical{\sigma}_{\mathrm{los}}^2$. With $\mechanical{M}_{1/2}=\mechanical{M}/2$, the King-model estimate gives

$$
3\mechanical{\sigma}_{\mathrm{los}}^2
\simeq0.45\frac{G(2\mechanical{M}_{1/2})}{\mechanical{r}_{1/2}},
\qquad
\mechanical{M}_{1/2}
\simeq\frac{3\mechanical{\sigma}_{\mathrm{los}}^2\mechanical{r}_{1/2}}{0.9G}.
$$

The factor $G$ is in the denominator when the preceding line is solved for mass. The lecture compares this with the Wolf et al. estimator for a dispersion-supported galaxy, which uses a luminosity-weighted line-of-sight dispersion. The mass inside the three-dimensional half-light radius is approximately $3\langle\mechanical{\sigma}_{\mathrm{los}}^2\rangle\mechanical{r}_{1/2}/G$, or $4\langle\mechanical{\sigma}_{\mathrm{los}}^2\rangle\mechanical{R}_{\mathrm e}/G$ in terms of the projected half-light radius. [Wolf et al. (2010)](https://arxiv.org/abs/0908.2995)

The handwritten reference arXiv:1805.00484 points to a study of systematic effects in such mass estimators. [Errani, Peñarrubia, and Walker (2018)](https://arxiv.org/abs/1805.00484)

#### Rotational support and anisotropy

The lecture next asks how rotation and velocity anisotropy contribute to the shape of elliptical galaxies. It starts with an axisymmetric model. See MBW, section 13.1.7, and BT, pp. 363–365.

### PDF page 76

Consider a galaxy rotating about its symmetry axis $z$ and viewed edge-on, with the $x$ axis along the line of sight. In steady state the tensor virial theorem gives $2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}=0$. The integrated tensors are diagonal in these coordinates. Streaming is purely azimuthal, so $\energy{T}_{zz}=0$.

#### Lecture of May 23, 2018 — axisymmetric virial equations

The lecture repeats the steady-state relation and notes that axisymmetry makes the two equatorial diagonal components equal. The two independent equations are

$$
\begin{aligned}
2\energy{T}_{xx}+\energy{\Pi}_{xx}+\energy{W}_{xx}&=0,\\
\energy{\Pi}_{zz}+\energy{W}_{zz}&=0.
\end{aligned}
$$

### PDF page 77

The equatorial ordered kinetic-energy components are

$$
\energy{T}_{xx}=\frac12\int\mechanical{\rho}(\overline{\mechanical{v}_x})^2\,d^3\mechanical{x},
\qquad
\energy{T}_{yy}=\frac12\int\mechanical{\rho}(\overline{\mechanical{v}_y})^2\,d^3\mechanical{x}.
$$

Axisymmetry and purely azimuthal streaming give

$$
2\energy{T}_{xx}=\energy{T}_{xx}+\energy{T}_{yy}
=\frac12\int\mechanical{\rho}(\overline{\mechanical{v}_\phi})^2\,d^3\mechanical{x}
=\frac12\mechanical{M}\mechanical{v}_0^2.
$$

The speed $\mechanical{v}_0$ is the mass-weighted root-mean-square azimuthal streaming speed. The random-motion terms can be written as

$$
\energy{\Pi}_{xx}=\mechanical{M}\mechanical{\sigma}_0^2,
\qquad
\energy{\Pi}_{zz}=(1-\delta)\mechanical{M}\mechanical{\sigma}_0^2,
$$

where

$$
\mechanical{\sigma}_0^2=\frac1{\mechanical{M}}\int\mechanical{\rho}\mechanical{\sigma}_{xx}^2\,d^3\mechanical{x},
\qquad
\delta=1-\frac{\energy{\Pi}_{zz}}{\energy{\Pi}_{xx}}.
$$

The variance $\mechanical{\sigma}_0^2$ approximates the mass-weighted line-of-sight dispersion squared for this viewing direction. Projection can add apparent dispersion through changes in streaming velocity along the line of sight. See BT, equations 4.27 and 4.263.

### PDF page 78

Dividing the equatorial virial equation by the vertical one gives

$$
\begin{aligned}
\frac{\energy{W}_{xx}}{\energy{W}_{zz}}
&=\frac{2\energy{T}_{xx}+\energy{\Pi}_{xx}}{\energy{\Pi}_{zz}}\\
&=\frac{\tfrac12\mechanical{M}\mechanical{v}_0^2+\mechanical{M}\mechanical{\sigma}_0^2}
{(1-\delta)\mechanical{M}\mechanical{\sigma}_0^2}\\
&=\frac{1}{1-\delta}\left(1+\frac12\frac{\mechanical{v}_0^2}{\mechanical{\sigma}_0^2}\right).
\end{aligned}
$$

The denominator uses the vertical component $zz$, as in the final handwritten line and the two virial equations.

For a density stratified on similar ellipsoids, the isodensity surfaces are concentric ellipsoidal shells of constant shape. A **spheroid** is an ellipsoid of revolution about its symmetry axis. In an **oblate spheroid** the symmetry axis is the shortest axis, as in a pancake. In a **prolate spheroid** it is the longest axis, as in an American football.

### PDF page 79

For density stratified on similar ellipsoids, Roberts showed that the ratio $\energy{W}_{xx}/\energy{W}_{zz}$ depends on the shape, independently of the radial density profile. See BT, pp. 95–96. [Roberts (1962)](https://doi.org/10.1086/147461)

For an oblate spheroid the ratio is

$$
\frac{\energy{W}_{xx}}{\energy{W}_{zz}}
=\frac12
\frac{\arcsin e-e\sqrt{1-e^2}}
{e\sqrt{1-e^2}-(1-e^2)\arcsin e},
$$

where $e=\sqrt{1-q^2}=\sqrt{1-(1-\epsilon)^2}$ is the eccentricity, $q$ is the minor-to-major axis ratio, and $\epsilon=1-q$ is the ellipticity.

The ratio is $1$ in the spherical limit and exceeds $1$ for an oblate spheroid with $\epsilon>0$. By the virial relation on the previous page, the flattening requires rotation, positive global anisotropy, or both. For the assumed density geometry, measuring $\epsilon$, $\mechanical{v}_0$, and $\mechanical{\sigma}_0$ allows one to infer $\delta$.

### PDF page 80

In practice the lecture replaces $\mechanical{\sigma}_0$ by $\overline{\mechanical{\sigma}}$, the mean dispersion within $\mechanical{R}_{\mathrm e}/2$, and $\mechanical{v}_0$ by $4\mechanical{v}_{\mathrm m}/\pi$, where $\mechanical{v}_{\mathrm m}$ is the maximum measured rotation speed. For an oblate isotropic rotator, $\delta=0$, a useful approximation is

$$
\frac{\mechanical{v}_{\mathrm m}}{\overline{\mechanical{\sigma}}}
\simeq\sqrt{\frac{\epsilon}{1-\epsilon}}.
$$

For $\epsilon=1/2$, this gives a ratio of $1$. Viewing the galaxy away from edge-on changes the projected quantities and can lead to an underestimate of $\delta$.

#### The fundamental plane

$$
\log_{10}\mechanical{R}_{\mathrm e}
=a\log_{10}\mechanical{\sigma}_0
+b\log_{10}\energy{I}_{\mathrm e}+\text{constant}.
$$

| Band | $a$ | $b$ | Scatter | Reference given in the notes |
| --- | --- | --- | --- | --- |
| $V$ | $1.15\pm0.05$ | $-0.85\pm0.03$ | $\sim15\%$ | Falcón-Barroso |
| SDSS $r$ | $1.49\pm0.05$ | $-0.75\pm0.01$ | $12\%$ | Bernardi et al. |
| $K$ | $1.51\pm0.04$ | $-0.77\pm0.01$ | $17\%$ | La Barbera |

The values and band assignments follow the handwritten table. The surname on the last line is read as La Barbera.

### PDF page 81

The fundamental-plane slopes vary somewhat by waveband. At fixed velocity dispersion and effective intensity, the scatter in effective radius is about $15\%$.

#### The $D_n$–$\sigma$ relation

See Schneider, section 3.4.4, and MBW, p. 605. Dressler et al. constructed a nearly edge-on projection of the fundamental plane with comparable scatter. Define $\mechanical{D}_n$ as the diameter within which the mean surface brightness reaches a chosen threshold $\langle\energy{I}_n\rangle$. For a circular aperture,

$$
\langle\energy{I}_n\rangle
=\frac{\energy{L}_n}{\pi(\mechanical{D}_n/2)^2}
=\frac{2\pi\int_0^{\mechanical{D}_n/2}
\energy{I}(\mechanical{R})\mechanical{R}\,d\mechanical{R}}
{\pi(\mechanical{D}_n/2)^2}.
$$

The radial factor in the integral comes from the annular area element. To continue the derivation, assume elliptical galaxies have self-similar surface-brightness profiles,

$$
\energy{I}(\mechanical{R})
=\energy{I}_{\mathrm e}f(\mechanical{R}/\mechanical{R}_{\mathrm e}),
\qquad
f(1)=1.
$$

### PDF page 82

With $x=\mechanical{R}/\mechanical{R}_{\mathrm e}$, the aperture relation becomes

$$
\mechanical{D}_n^2=
\frac{8\energy{I}_{\mathrm e}\mechanical{R}_{\mathrm e}^2}{\langle\energy{I}_n\rangle}
\int_0^{\mechanical{D}_n/(2\mechanical{R}_{\mathrm e})}f(x)x\,dx.
$$

For the power-law approximation $f(x)=x^{-\gamma}$ with $\gamma<2$, the integral is

$$
\int_0^{\mechanical{D}_n/(2\mechanical{R}_{\mathrm e})}x^{1-\gamma}\,dx
=\frac{1}{2-\gamma}
\left(\frac{\mechanical{D}_n}{2\mechanical{R}_{\mathrm e}}\right)^{2-\gamma}.
$$

The notes use $\gamma\simeq1.2$ as an effective power-law slope for a de Vaucouleurs profile in this calculation. See Schneider. For a fixed threshold and nonzero $\gamma$, the scaling is $\mechanical{D}_n\propto\mechanical{R}_{\mathrm e}\energy{I}_{\mathrm e}^{1/\gamma}$. Use this to eliminate $\mechanical{R}_{\mathrm e}$ from the fundamental-plane relation,

$$
\log_{10}\left(\mechanical{D}_n\energy{I}_{\mathrm e}^{-1/\gamma}\right)
=\log_{10}\left(\mechanical{\sigma}_0^a\energy{I}_{\mathrm e}^{b}\right)+\text{constant}.
$$

### PDF page 83

For self-similar profiles the mean intensity inside the effective radius satisfies $\langle\energy{I}_{\mathrm e}\rangle\propto\energy{I}_{\mathrm e}$. Exponentiating the preceding logarithmic relation then gives

$$
\mechanical{D}_n\propto
\mechanical{\sigma}_0^a\langle\energy{I}_{\mathrm e}\rangle^{b+1/\gamma}.
$$

#### Lecture of May 30, 2018 — diameter–dispersion recap

The lecture repeats the definition of $\mechanical{D}_n$ using the aperture luminosity and the radial integral with area element $2\pi\mechanical{R}\,d\mechanical{R}$. The fundamental plane is associated in the notes with the Seven Samurai collaboration and with the variable $\log_{10}\langle\energy{I}\rangle$.

#### Oral final exam

Set aside 45 minutes after 11 a.m. during finals week. The exam is an informal discussion intended to check how well students have assimilated the course material. Come with a topic in mind and expect to move between topics. Equations can be filled in on the board. Be ready to ask questions and derive equations.

### PDF page 84

Dressler et al. used a threshold corresponding to $\quantity{20.75}{mag\,arcsec^{-2}}$ in the $B$ band. In the lecture's derivation, most of the light contributing to this aperture is in the regime where a de Vaucouleurs profile has an effective $\gamma\sim1.2$, giving $1/\gamma\sim0.8$. With $b$ between $-0.85$ and $-0.75$, the residual exponent $b+1/\gamma$ is roughly between $-0.05$ and $+0.05$ at this precision. [Dressler et al. (1987)](https://articles.adsabs.harvard.edu/pdf/1987ApJ...313...42D)

Neglecting the weak dependence on mean effective intensity gives the **$D_n$–$\sigma$ relation** $\mechanical{D}_n\propto\mechanical{\sigma}_0^a$, with $a$ typically about $1.2$–$1.5$. For $a=1.33$ the lecture gives

$$
\frac{\mechanical{D}_n}{\unit{kpc}}
=2.05
\left(\frac{\mechanical{\sigma}_0}{\quantity{100}{km\,s^{-1}}}\right)^{1.33}.
$$

See Schneider, equation 3.35. The notes quote about $15\%$ rms scatter, comparable to that of the fundamental plane itself. The relation is a nearly edge-on projection of the plane and serves as a distance indicator.

### PDF page 85

#### Virial derivation of the fundamental-plane scaling

See MBW, section 3.4, Schneider, section 3.4.3, and BT, section 4.9.2. Start from the scalar virial relation $\langle\mechanical{v}^2\rangle=G\mechanical{M}/\mechanical{r}_{\mathrm g}$. Relate the observables to the virial quantities by

$$
\mechanical{R}_{\mathrm e}=K_R\mechanical{r}_{\mathrm g},
\qquad
\mechanical{\sigma}_0=K_v\sqrt{\langle\mechanical{v}^2\rangle}.
$$

The dimensionless factors $K_R$ and $K_v$ depend on the density profile and the orbital structure, respectively. Substitution gives $\mechanical{\sigma}_0^2/K_v^2=K_R G\mechanical{M}/\mechanical{R}_{\mathrm e}$. Since half the luminosity lies within the effective radius,

$$
\frac12\energy{L}=\pi\mechanical{R}_{\mathrm e}^2\langle\energy{I}_{\mathrm e}\rangle.
$$

Divide the virial relation by $\energy{L}$ and solve for $\mechanical{R}_{\mathrm e}$,

$$
\mechanical{R}_{\mathrm e}
=\frac{1}{2\pi G K_R K_v^2}\,
\mechanical{\sigma}_0^2
\langle\energy{I}_{\mathrm e}\rangle^{-1}
\left(\frac{\mechanical{M}}{\energy{L}}\right)^{-1}.
$$

### PDF page 86

Writing $K=(2\pi G K_R K_v^2)^{-1}$ and taking base-ten logarithms gives

$$
\log_{10}\mechanical{R}_{\mathrm e}
=2\log_{10}\mechanical{\sigma}_0
-\log_{10}\langle\energy{I}_{\mathrm e}\rangle
+\log_{10}K-\log_{10}\!\left(\frac{\mechanical{M}}{\energy{L}}\right).
$$

For a common $K$ and $\mechanical{M}/\energy{L}$ this predicts slopes $(a,b)=(2,-1)$, while the measured dispersion slope is closer to $1.5$ in several bands. The deviation from the constant-$K$, constant-mass-to-light prediction is called the **tilt of the fundamental plane**.

Ellipticals would be **homologous** if their density profiles and orbital structures were self-similar, with fixed $K_R$ and $K_v$. This would make their product $K_R K_v^2$, and therefore $K$, constant. The tilt can arise from departures from homology, a varying mass-to-light ratio, or both. In this description, $K$ or $\mechanical{M}/\energy{L}$ can depend on effective radius, velocity dispersion, or effective intensity.

### PDF page 87

Several observed trends point to systematic differences among elliptical galaxies.

1. The color–magnitude relation implies changes in the stellar populations and hence in stellar mass-to-light ratio.
2. The fundamental-plane coefficient $a$ depends on the photometric band.
3. The Sérsic index $n$ varies with luminosity.

The lecture notes that the importance of departures from homology in explaining the fundamental-plane tilt was still debated. See MBW, p. 603.

If the galaxies are assumed to be homologous, the tilt can be attributed to a varying mass-to-light ratio. Combining the fundamental plane with the virial scaling and using $\energy{L}=2\pi\mechanical{R}_{\mathrm e}^2\langle\energy{I}_{\mathrm e}\rangle$ gives

$$
\frac{\mechanical{M}}{\energy{L}}
\propto
\energy{L}^{(2-a)/(2a)}
\langle\energy{I}_{\mathrm e}\rangle^{-1/2-(1+2b)/a}.
$$

For the $V$ band, $a=1.15$ and $b=-0.85$ give $\mechanical{M}/\energy{L}\propto\energy{L}^{0.37}\langle\energy{I}_{\mathrm e}\rangle^{0.11}$. For the $K$ band, the page 80 coefficients $a=1.51$ and $b=-0.77$ give $\mechanical{M}/\energy{L}\propto\energy{L}^{0.16}\langle\energy{I}_{\mathrm e}\rangle^{-0.14}$. The latter coefficients are read from the earlier table because they reproduce the powers shown in the handwritten example.

### PDF page 88

In these examples the mass-to-light ratio increases with luminosity and depends more weakly on the mean effective intensity. The lecture identifies two contributions.

1. Changes in stellar ages and metallicities change the stellar mass-to-light ratio.
2. Changes in the amount and distribution of dark matter affect the dark-matter fraction inside the effective radius.

The lecture reports that most studies it considered attributed the larger effect in giant ellipticals to dark matter.

#### Lecture of June 4, 2018

The notes mention course evaluations and ask students to schedule the final exam with the instructor, preferably between 11 a.m. and 6 p.m. Students may bring materials subject to the instructor's approval and should be prepared to discuss any topic covered in the course.

The lecture connects the fundamental plane to disk-galaxy mergers. Dissipationless mergers reproduce the virial scaling, while dissipational mergers agree with the observed fundamental plane.

### PDF page 89

#### Cold and warm gas in elliptical galaxies

- Atomic and molecular gas are detected in about $20\%$ of ellipticals in the lecture's summary. Ellipticals generally have less cold gas than spirals, and the cold component is concentrated in their centers.
- The lecture quotes central dust in about $80\%$ of ellipticals and gives a mass range of $10^6$–$10^8$ solar masses alongside this estimate.
- Warm ionized gas, traced by $\mathrm{H}\alpha$ and $[\mathrm{N\,II}]$, is also common. The notes give a central detection rate of at least $50\%$, a temperature near $\quantity{10^4}{K}$, and masses of $10^2$–$10^4$ solar masses.

#### The ATLAS³D survey

The survey studied early-type galaxies out to $\quantity{42}{Mpc}$. CO measurements provided molecular hydrogen masses. The notes list about 240 objects for IRAM and 40 for CARMA, and use atomic hydrogen masses from the literature. Cold gas was detected in $10$–$34\%$ of early-type galaxies, depending on the definition of the red sequence. In massive early-type galaxies with $\mechanical{M}_*>5\times10^{10}\mechanical{M}_\odot$, the notes give $\mechanical{M}(\mathrm{H\,I})/\mechanical{M}_*\sim0.06$ and $\mechanical{M}(\mathrm{H}_2)/\mechanical{M}_*\sim0.01$ as upper-end fractions. The gas can come from external accretion and from retention of some of the original reservoir. [Young et al. (2014)](https://doi.org/10.1093/mnras/stt2474)

### PDF page 90

#### Hot gas in elliptical galaxies

Many luminous ellipticals, with $\log_{10}(\energy{L}_B/\energy{L}_{B,\odot})\gtrsim10.5$, show diffuse X-ray emission. The gas emits thermal bremsstrahlung and coronal lines, as in the intracluster medium. The notes give temperatures of $\quantity{5\times10^6}{K}$ to $\quantity{10^7}{K}$, or $k_{\mathrm B}\thermal{T}$ of about $\quantity{0.5}{keV}$ to $\quantity{1}{keV}$. Chandra images show this emission in massive ellipticals.

Stellar X-ray sources include low-mass X-ray binaries, cataclysmic variables, black-hole X-ray binaries, and high-mass X-ray binaries. Bright diffuse emission makes embedded point sources difficult to detect. Detected and unresolved sources must be accounted for in spatial and spectral modeling. Active galactic nuclei can also contribute.

The relation between X-ray luminosity $\energy{L}_X$ and optical luminosity $\energy{L}_{\mathrm{opt}}$ shows substantial scatter, particularly at high optical luminosities. At low X-ray luminosities, stellar sources are usually sufficient. The brightest X-ray systems require hot gas. Several factors may contribute to the high-luminosity scatter. The lecture highlights differences in dark-matter halo mass or size. [Mathews et al. (2006 preprint)](https://arxiv.org/abs/astro-ph/0610694)

### PDF page 91

#### Properties of the hot interstellar medium

The hot interstellar medium is a nearly fully ionized plasma. The electron Coulomb mean free path is approximately

$$
\mechanical{\lambda}_{\mathrm C}
=\quantity{243}{pc}
\left(\frac{\thermal{T}}{\quantity{10^7}{K}}\right)^2
\left(\frac{n_{\mathrm e}}{\quantity{10^{-3}}{cm^{-3}}}\right)^{-1}.
$$

The notes use the same scale for protons. In a magnetic field of magnitude $\magnetic{B}$, a particle of mass $\mechanical{m}$ and charge magnitude $Ze$ has an estimated gyroradius

$$
\mechanical{r}_{\mathrm g}
=\quantity{3.9\times10^{-11}}{pc}\,Z^{-1}
\left(\frac{\thermal{T}}{\quantity{10^7}{K}}\right)^{1/2}
\left(\frac{\mechanical{m}}{\mechanical{m}_{\mathrm e}}\right)^{1/2}
\left(\frac{\magnetic{B}}{2\,\mu\mathrm{G}}\right)^{-1}.
$$

A typical field of $2\,\mu\mathrm{G}$ is two microgauss. The gyroradius is tiny compared with galactic length scales. The lecture models the hot medium on those scales as a collisional fluid with isotropic pressure.

To assess whether multiple temperatures can persist at the same radius, first consider electron–electron energy equilibration. The time for electrons to equilibrate through mutual interactions is

$$
\mechanical{\tau}_{\mathrm{ee}}
=\quantity{1.1\times10^4}{yr}
\left(\frac{\thermal{T}_{\mathrm e}}{\quantity{10^7}{K}}\right)^{3/2}
\left(\frac{n_{\mathrm e}}{\quantity{10^{-3}}{cm^{-3}}}\right)^{-1}.
$$

The inverse density factors follow the cited plasma estimates. The lecture attributes the equilibration calculation to Spitzer (1962). [Buote and Humphrey (2012)](https://arxiv.org/abs/1104.0012)

### PDF page 92

Spitzer's reference is *The Physics of Fully Ionized Gases*, published by Dover. The electron–ion equipartition time is $\mechanical{\tau}_{\mathrm{e,i}}\simeq1870\mechanical{\tau}_{\mathrm{ee}}\sim\quantity{10^7}{yr}$. The lecture expects shorter effective time scales in the presence of microgauss fields. It models the hot gas in a relaxed elliptical by a Maxwellian with a single local kinetic temperature at each radius.

For typical parameters the ratio of magnetic to thermal pressure is

$$
\frac{\magnetic{P}_{\mathrm{mag}}}{\thermal{P}_{\mathrm{th}}}
\simeq0.015
\left(\frac{\magnetic{B}}{1\,\mu\mathrm{G}}\right)^2
\left(\frac{\thermal{T}}{\quantity{10^7}{K}}\right)^{-1}
\left(\frac{n_{\mathrm e}}{\quantity{10^{-3}}{cm^{-3}}}\right)^{-1}.
$$

The small microscopic length scales, equilibration, and dominant thermal pressure motivate a single monatomic-gas model for the hot medium.

For stars the crossing time over a distance $\mechanical{d}$ is

$$
\mechanical{t}_{\mathrm{cross}}
=\frac{\mechanical{d}}{\mechanical{\sigma}}
\simeq\quantity{3.9\times10^7}{yr}
\left(\frac{\mechanical{d}}{\quantity{10}{kpc}}\right)
\left(\frac{\mechanical{\sigma}}{\quantity{250}{km\,s^{-1}}}\right)^{-1}.
$$

For the hot gas the corresponding speed scale is the sound speed,

$$
\mechanical{c}_{\mathrm s}
\simeq\quantity{473}{km\,s^{-1}}
\left(\frac{\thermal{T}}{\quantity{10^7}{K}}\right)^{1/2}.
$$

The reference temperature is read as $10^7\,\unit{K}$, consistent with the hot-gas temperature and the numerical sound speed. The sound crossing time is of the same order as the stellar crossing time.

### PDF page 93

When bulk and turbulent speeds are much smaller than the sound speed, approximate hydrostatic equilibrium is expected. The lecture gives the disturbed galaxy M84 as an exception.

#### Lecture of June 6, 2018 — problem hints

For problem 2, a shortcut to the potential of a spherical mass distribution is to split it into interior and exterior contributions, taking the potential to vanish at infinity,

$$
\mechanical{\Phi}(\mechanical{r})
=-\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}}
-4\pi G\int_{\mechanical{r}}^\infty
\mechanical{r}'\mechanical{\rho}(\mechanical{r}')\,d\mechanical{r}'.
$$

For the NFW model the mass term is

$$
\mechanical{M}(<\mechanical{r})
=\frac{\mechanical{M}_\Delta}{\ln(1+c)-c/(1+c)}
\left[
\ln\!\left(1+c\frac{\mechanical{r}}{\mechanical{r}_\Delta}\right)
-\frac{c\mechanical{r}/\mechanical{r}_\Delta}
{1+c\mechanical{r}/\mechanical{r}_\Delta}
\right].
$$

For problem 3 the notes refer to items 59–60 in BT and split the potential-energy tensor into a self-gravitating part $\energy{W}_{jk}$ and an external part $\energy{W}_{jk}^{\mathrm{ext}}$. With the index convention of page 66,

$$
\energy{W}_{jk}^{\mathrm{ext}}
=-\int\mechanical{\rho}\mechanical{x}_j
\frac{\partial\mechanical{\Phi}_{\mathrm{ext}}}{\partial\mechanical{x}_k}\,d^3\mechanical{x}.
$$

The unsymmetrized spatial moment contains their sum. After averaging the two index orders, the tensor virial equation with zero boundary flux becomes

$$
\frac12\frac{d^2\mechanical{I}_{jk}}{d\mechanical{t}^2}
=2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}
+\frac12\left(\energy{W}_{jk}^{\mathrm{ext}}+\energy{W}_{kj}^{\mathrm{ext}}\right).
$$

#### Hot gas spectra

A dense set of temperature-sensitive Fe L-shell lines lies near $\quantity{1}{keV}$. These lines dominate the temperature and metallicity constraints for the hot gas in ellipticals.

### PDF page 94

The shape of the Fe L complex and bremsstrahlung continuum constrains the gas temperature. The spectral normalization constrains the gas density.

#### The isothermal beta model

The model describes the radial X-ray surface-brightness profile using a spherical galaxy, constant isotropic stellar velocity dispersion, the King approximation for the stellar density, and isothermal hot gas in hydrostatic equilibrium. See Schneider, pp. 298–299, and MBW, pp. 441–442.

Hydrostatic equilibrium and the ideal-gas law give

$$
\frac{d\thermal{P}_{\mathrm g}}{d\mechanical{r}}
=-\mechanical{\rho}_{\mathrm g}\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}^2},
\qquad
\thermal{P}_{\mathrm g}=\frac{\mechanical{\rho}_{\mathrm g}k_{\mathrm B}\thermal{T}}
{\mu\mechanical{m}_{\mathrm u}}.
$$

At constant temperature and mean particle mass,

$$
\frac{d\ln\mechanical{\rho}_{\mathrm g}}{d\mechanical{r}}
=-\frac{\mu\mechanical{m}_{\mathrm u}}{k_{\mathrm B}\thermal{T}}
\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}^2}.
$$

The stellar density slope can be obtained from the spherical Jeans equation in the same potential.

### PDF page 95

For the stars, take the constant isotropic variance $\mechanical{\sigma}^2=\overline{\mechanical{v}_r^2}$. The spherical Jeans equation becomes

$$
\frac{d\ln\mechanical{\rho}_*}{d\mechanical{r}}
=-\frac{1}{\mechanical{\sigma}^2}
\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}^2}.
$$

Eliminating the common acceleration from the gas and stellar equations gives

$$
\frac{d\ln\mechanical{\rho}_{\mathrm g}}{d\mechanical{r}}
=\beta\frac{d\ln\mechanical{\rho}_*}{d\mechanical{r}},
\qquad
\beta=\frac{\mu\mechanical{m}_{\mathrm u}\mechanical{\sigma}^2}{k_{\mathrm B}\thermal{T}}.
$$

Thus $\mechanical{\rho}_{\mathrm g}\propto\mechanical{\rho}_*^\beta$. With a King profile for the stars,

$$
\mechanical{\rho}_{\mathrm g}(\mechanical{r})
=\mechanical{\rho}_{\mathrm g,0}
\left[1+\left(\frac{\mechanical{r}}{\mechanical{r}_{\mathrm c}}\right)^2\right]^{-3\beta/2}.
$$

The volume emissivity is proportional to $\mechanical{\rho}_{\mathrm g}^2\thermal{\Lambda}(\thermal{T},Z)$, where temperature and metallicity are held constant. Integrating the emissivity along the line of sight gives the X-ray surface brightness,

$$
\energy{I}_X(\mechanical{R})=\energy{I}_{X,0}
\left[1+\left(\frac{\mechanical{R}}{\mechanical{r}_{\mathrm c}}\right)^2\right]^{-3\beta+1/2}.
$$

Here $\mechanical{r}_{\mathrm c}$ is the core radius and $\mechanical{R}$ is projected radius. The projection to infinite line-of-sight distance converges for $\beta>1/6$. For $\beta=1/2$, the outer intensity varies as $\mechanical{R}^{-2}$. The total X-ray luminosity integrated over an infinite model diverges for $\beta\leq1/2$.

### PDF page 96

The King approximation describes the inner isothermal sphere, roughly within twice the core radius. X-ray studies nevertheless fit the beta model to entire elliptical galaxies and galaxy clusters. Although real systems depart from its assumptions, the model often describes the observed brightness over a broad radial range. It implies a logarithmic potential up to an additive constant,

$$
\mechanical{\Phi}(\mechanical{r})-\mechanical{\Phi}(0)
\propto\ln\!\left[1+\left(\frac{\mechanical{r}}{\mechanical{r}_{\mathrm c}}\right)^2\right].
$$

The notes leave the derivation from hydrostatic equilibrium as an exercise.

For the compact elliptical PGC 032873, Chandra data in the $0.5$–$7.0\,\unit{keV}$ band were modeled with a beta profile for the gas and a contribution from unresolved low-mass X-ray binaries. The binary normalization was fixed using a scaling with stellar $K$-band luminosity. The gas and binary profiles have very similar shapes. [Buote and Barth (2018)](https://arxiv.org/abs/1712.03978)

The small fitted values of $\beta$, often around or below $0.5$, make quantities extrapolated from the beta model sensitive to the assumed outer radius.

### PDF page 97

#### Scaling relations for the hot interstellar medium

See Schneider, section 6.5, and MBW, pp. 412–413. For elliptical-galaxy stars, the scalar virial theorem gave a scaling similar to the fundamental plane. The scalar relation also applies to a collisional gas under the corresponding equilibrium assumptions. The Jeans equations with isotropic dispersion have the same form as the fluid Euler equations, with the isotropic stress supplying the pressure.

For the hot gas, use $\langle\mechanical{v}^2\rangle=G\mechanical{M}/\mechanical{r}_{\mathrm g}$, where $\mechanical{M}$ is the total mass and $\mechanical{r}_{\mathrm g}$ is the gravitational radius. Define dimensionless structure factors by

$$
\mechanical{r}_{\mathrm{vir}}=K_R\mechanical{r}_{\mathrm g},
\qquad
\frac{k_{\mathrm B}\thermal{T}}{\mu\mechanical{m}_{\mathrm u}}
=K_T\langle\mechanical{v}^2\rangle.
$$

In this application $K_R$ depends on the density profile and $K_T$ on the thermal structure. Then

$$
\frac{k_{\mathrm B}\thermal{T}}{\mu\mechanical{m}_{\mathrm u}K_T}
=\frac{K_R G\mechanical{M}}{\mechanical{r}_{\mathrm{vir}}}.
$$

### PDF page 98

Write $\mechanical{M}_{\mathrm{vir}}=K_M\mechanical{M}$, where the dimensionless factor $K_M$ depends on the mass profile. By definition,

$$
\mechanical{M}_{\mathrm{vir}}
=\frac{4\pi}{3}\Delta\mechanical{\rho}_{\mathrm c}\mechanical{r}_{\mathrm{vir}}^3.
$$

Substitution into the virial relation gives the equivalent radius and mass forms,

$$
\begin{aligned}
\frac{k_{\mathrm B}\thermal{T}}{\mu\mechanical{m}_{\mathrm u}K_T}
&=\frac{K_R G}{K_M}\frac{4\pi}{3}\Delta\mechanical{\rho}_{\mathrm c}\mechanical{r}_{\mathrm{vir}}^2\\
&=\frac{K_R G}{K_M}
\left(\frac{4\pi\Delta\mechanical{\rho}_{\mathrm c}}{3}\right)^{1/3}
\mechanical{M}_{\mathrm{vir}}^{2/3}.
\end{aligned}
$$

The factor $G$ carries through from the preceding page. For homologous systems at fixed overdensity and critical density, $K_T$, $K_R$, and $K_M$ are common, so $\thermal{T}\propto\mechanical{r}_{\mathrm{vir}}^2$ and $\thermal{T}\propto\mechanical{M}_{\mathrm{vir}}^{2/3}$. The temperature in this argument is mass weighted within the virial radius.

For massive clusters the lecture gives the observed relation

$$
\mechanical{M}_{500}\simeq3.53\times10^{13}\mechanical{M}_\odot
\left(\frac{k_{\mathrm B}\thermal{T}}{\quantity{1}{keV}}\right)^{1.58},
$$

for masses above roughly $5\times10^{13}\mechanical{M}_\odot$. The exponent of ten in the handwritten normalization is read as $13$ from the cluster mass scale. The slope $1.58$ is close to the self-similar prediction $1.5$, suggesting that massive clusters can be treated as approximately self-similar equilibria in their global properties.

### PDF page 99

X-ray luminosity is more directly accessible than the virial mass of an elliptical galaxy. Within the chosen volume,

$$
\energy{L}_X=\int\energy{\epsilon}_X\,d\mechanical{V}
=\langle\energy{\epsilon}_X\rangle\mechanical{V},
\qquad
\langle\energy{\epsilon}_X\rangle
=\frac1{\mechanical{V}}\int\energy{\epsilon}_X\,d\mechanical{V}.
$$

For the hot gas, $\energy{\epsilon}_X\propto\mechanical{\rho}_{\mathrm g}^2\thermal{\Lambda}(\thermal{T},Z)$. The lecture notes that the gas temperature varies slowly, by about a factor of two within the virial radius. For scaling purposes, it approximates the mean emissivity by the product of the mean squared density and the mean cooling function. With similar gas density profiles,

$$
\langle\mechanical{\rho}_{\mathrm g}^2\rangle
\propto\left(\frac{\mechanical{M}_{\mathrm{gas}}}{\mechanical{r}_{\mathrm{vir}}^3}\right)^2,
$$

where $\mechanical{M}_{\mathrm{gas}}$ is the gas mass inside $\mechanical{r}_{\mathrm{vir}}$.

For thermal bremsstrahlung from pure hydrogen, the frequency-dependent cooling function has the approximate form

$$
\thermal{\Lambda}_\nu
\propto\thermal{T}^{-1/2}\exp\!\left(-\frac{h\nu}{k_{\mathrm B}\thermal{T}}\right).
$$

Integrating over all frequencies gives $\thermal{\Lambda}\propto\thermal{T}^{1/2}$ in this approximation. An integral over a finite band carries an additional temperature-dependent factor from its endpoints. The lecture uses the broad-band scaling as a good approximation for clusters and a rougher one for elliptical galaxies.

### PDF page 100

Substituting the density and bremsstrahlung scalings into the luminosity integral gives

$$
\energy{L}_X
\propto\langle\mechanical{\rho}_{\mathrm g}^2\rangle
\thermal{T}^{1/2}\mechanical{r}_{\mathrm{vir}}^3
\propto\frac{\mechanical{M}_{\mathrm{gas}}^2\thermal{T}^{1/2}}
{\mechanical{r}_{\mathrm{vir}}^3}.
$$

Let $\mechanical{M}_{\mathrm{gas}}=f_{\mathrm{gas}}\mechanical{M}_{\mathrm{vir}}$, where $f_{\mathrm{gas}}$ is the gas fraction. The virial scalings imply $\mechanical{r}_{\mathrm{vir}}\propto\thermal{T}^{1/2}$ and $\mechanical{M}_{\mathrm{vir}}\propto\thermal{T}^{3/2}$. Therefore,

$$
\energy{L}_X\propto
f_{\mathrm{gas}}^2\frac{(\thermal{T}^{3/2})^2\thermal{T}^{1/2}}
{(\thermal{T}^{1/2})^3}
=f_{\mathrm{gas}}^2\thermal{T}^2.
$$

For constant gas fraction the self-similar prediction is $\energy{L}_X\propto\thermal{T}^2$. The lecture gives a steeper empirical scaling of roughly $\thermal{T}^5$ for galaxies. The cluster comparison has no legible superscript. An exponent near $3$ is consistent with the observational comparison intended here. [ASCA compilation of hot gas properties](https://academic.oup.com/pasj/article-abstract/56/6/965/1501676)

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
| $\mechanical{v}_{\mathrm c,\Delta}$ | $\unit{m\,s^{-1}}$ | Circular speed at the overdensity radius | Normalizes the NFW circular-speed profile. |
| $\mechanical{v}_{\max}$ | $\unit{km\,s^{-1}}$ | Maximum rotation speed | Kinematic variable in the Tully–Fisher relation. |
| $\alpha$ | $1$ | Tully–Fisher slope | Power-law exponent relating luminosity to maximum rotation speed. |
| $\mechanical{v}_{\mathrm{flat}}$ | $\unit{km\,s^{-1}}$ | Flat rotation speed | Approximate circular speed in the outer, flat part of the rotation curve. |
| $\Upsilon(<\mechanical{r})$ | $\unit{kg\,W^{-1}}$ | Mass-to-light ratio | Enclosed mass divided by the luminosity used in the estimate. |
| $\mechanical{M}_{\mathrm{tot}}$, $\mechanical{M}_{\mathrm b}$, $\mechanical{M}_{\mathrm d}$, $\mechanical{M}_*$ | $\unit{kg}$ | Total, baryonic, disk baryon, and stellar masses | Successive mass components in the luminosity estimate. |
| $f_{\mathrm b}$, $f_{\mathrm d}$, $f_*$ | $1$ | Baryon, disk, and stellar fractions | Ratios of successive masses in the three steps above. |
| $\Upsilon_*$ | $\unit{kg\,W^{-1}}$ | Stellar mass-to-light ratio | Stellar mass divided by stellar luminosity in the chosen band. |
| $\mechanical{M}_{\mathrm g}$ | $\unit{kg}$ | Disk gas mass | Gas contribution to the disk baryon mass. |
| $h$ | $1$ | Reduced Hubble parameter | Defined by $H_0=\quantity{100h}{km\,s^{-1}\,Mpc^{-1}}$. |
| $q$, $\epsilon$, $e$ | $1$ | Axis ratio, ellipticity, and eccentricity | Three measures of apparent ellipse shape. |
| $b_n$ | $1$ | Sérsic normalization coefficient | Chosen so that the radius $\mechanical{R}_{\mathrm e}$ encloses half the projected light. |
| $\mechanical{\rho}_0$ | $\unit{kg\,m^{-3}}$ | Density normalization | Multiplicative scale in the approximate deprojection. |
| $p$ | $1$ | Inner deprojection slope | Exponent of the prefactor in the approximate spatial density. |
| $\mechanical{R}_{\mathrm{iso}}$, $\mechanical{R}_{\mathrm{ell}}$ | $\unit{m}$ | Isophote and fitted ellipse radii | Ordinary distances to the actual and fitted curves in a given direction. |
| $\Delta(\theta)$, $a_n$, $b_n$ | $\unit{m}$ | Isophotal residual and its Fourier coefficients | Measure departure from the fitted ellipse. These Fourier coefficients are distinct from the dimensionless Sérsic coefficient. |
| $\phi(\energy{L})$ | $\unit{Mpc^{-3}\,W^{-1}}$ | Galaxy luminosity function | Number per unit volume per luminosity interval. |
| $\phi_*$ | $\unit{Mpc^{-3}}$ | Schechter normalization | Density scale of the luminosity function. |
| $\energy{L}_*$ | $\unit{W}$ | Characteristic luminosity | Sets the scale of the transition to exponential suppression. |
| $\alpha$ | $1$ | Schechter faint-end slope | Power-law index at luminosities small compared with $\energy{L}_*$. |
| $M^*$ | $\unit{mag}$ | Characteristic absolute magnitude | Magnitude corresponding to the Schechter luminosity $\energy{L}_*$. |
| $n_{\mathrm g}$ | $\unit{Mpc^{-3}}$ | Mean galaxy number density | Integrated count per unit volume. |
| $\energy{\ell}_{\mathrm{tot}}$ | $\unit{W\,Mpc^{-3}}$ | Mean galaxy luminosity density | Integrated luminosity per unit volume. |
| $n(\mechanical{M})$ | $\unit{Mpc^{-3}\,kg^{-1}}$ | Halo mass function | Number per unit volume per unit halo mass. |
| $C$ | $\unit{kg^{-1}}$ | Exponential cutoff coefficient | Reciprocal of the mass scale in the special-case halo mass function. |
| $\mechanical{R}_*$ | $\unit{m}$ | Stellar radius | Common radius of the stars in the collision estimate. |
| $\mechanical{\sigma}_{\mathrm{direct}}$ | $\unit{m^2}$ | Direct-collision cross section | Geometric target area used in the lecture. |
| $N$ | $1$ | Number of stars | Total stellar population of the model galaxy. |
| $n$ | $\unit{m^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\mechanical{\ell}_{\mathrm{direct}}$ | $\unit{m}$ | Mean free path for direct collisions | Mean distance a star travels between direct hits. |
| $\mechanical{t}_{\mathrm{direct}}$ | $\unit{s}$ | Direct-collision time | Mean time for one direct collision per star in the model. |
| $\mechanical{t}_{\mathrm{cross}}$ | $\unit{s}$ | Galaxy crossing time | Characteristic galaxy radius divided by stellar speed. |
| $\mechanical{b}$ | $\unit{m}$ | Impact parameter | Perpendicular distance from the target star to the unperturbed trajectory. |
| $\mechanical{F}_{\perp}$ | $\unit{N}$ | Transverse gravitational force | Force component perpendicular to the incident trajectory. |
| $\delta\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity change in a stellar encounter | Small transverse velocity kick in the impulse approximation. |
| $\mechanical{b}_{\min}$ | $\unit{m}$ | Minimum impact parameter | Lower cutoff obtained by equating the estimated velocity kick to the incident speed. |
| $\Sigma_{\mathrm{target}}$ | $\unit{m^{-2}}$ | Projected stellar number density | Mean number of target stars per unit projected area. |
| $\mechanical{\sigma}_*$ | $\unit{m^2}$ | Differential encounter cross section | Area in the chosen impact-parameter interval around one target. |
| $\delta n$ | $1$ | Expected number of deflections | Encounter count in the impact-parameter interval during one crossing. |
| $\Delta\mechanical{v}^2$ | $\unit{m^2\,s^{-2}}$ | Mean-square velocity change | Cumulative effect of random encounters in one galaxy crossing. |
| $\mechanical{b}_{\max}$ | $\unit{m}$ | Maximum impact parameter | Upper cutoff for the encounter integral. |
| $\ln\Lambda$ | $1$ | Coulomb logarithm | Logarithm of the ratio of the upper and lower impact-parameter cutoffs. |
| $N_{\mathrm{relax}}$ | $1$ | Number of crossings for relaxation | Crossing count needed for the accumulated mean-square velocity change to reach the typical squared speed. |
| $\mechanical{t}_{\mathrm{relax}}$ | $\unit{s}$ | Two-body relaxation time | Time for accumulated stellar encounters to change a typical orbit substantially. |
| $f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})$ | $\unit{s^3\,m^{-6}}$ | Phase-space distribution function | Probability density with respect to the product of position volume and velocity volume. |
| $\nu(\mechanical{\vec x},\mechanical{t})$ | $\unit{m^{-3}}$ | Spatial probability density | Velocity integral of the normalized phase-space distribution. |
| $n(\mechanical{\vec x},\mechanical{t})$ | $\unit{m^{-3}}$ | Spatial number density | Number of particles per unit physical volume. |
| $P_{\mechanical{\vec x}}(\mechanical{\vec v})$ | $\unit{s^3\,m^{-3}}$ | Conditional velocity density | Probability density over velocity at a specified position. |
| $\overline{\mechanical{v}_i}$ | $\unit{m\,s^{-1}}$ | Mean velocity component | First moment of the conditional velocity distribution. |
| $\overline{\mechanical{v}_i^2}$ | $\unit{m^2\,s^{-2}}$ | Mean-square velocity component | Second raw moment of the conditional velocity distribution. |
| $\energy{V}$ | $\unit{J}$ | Gravitational potential energy | Product of the stellar mass and the gravitational potential. |
| $\overline{\mechanical{v}_i\mechanical{v}_j}$ | $\unit{m^2\,s^{-2}}$ | Mixed second velocity moment | Mean product of two velocity components at a fixed position. |
| $\mechanical{\sigma}_{ij}^2$ | $\unit{m^2\,s^{-2}}$ | Velocity dispersion tensor component | Covariance of two velocity components at a fixed position. |
| $\mechanical{\rho}\mechanical{\sigma}_{ij}^2$ | $\unit{Pa}$ | Stellar stress component | Mass-weighted velocity covariance that acts as an anisotropic pressure. |
| $\mechanical{\sigma}_{\mathrm{los}}$ | $\unit{m\,s^{-1}}$ | Line-of-sight velocity dispersion | Width of the projected velocity distribution along the viewing direction. |
| $\overline{\mechanical{v}_{\mathrm{los}}}$ | $\unit{m\,s^{-1}}$ | Mean line-of-sight velocity | First moment of the projected velocity distribution. |
| $\beta(\mechanical{r})$ | $1$ | Velocity anisotropy parameter | One minus the ratio of a single tangential velocity variance to the radial velocity variance. |
| $\mechanical{\sigma}_r$, $\mechanical{\sigma}_t$ | $\unit{m\,s^{-1}}$ | Radial and tangential velocity dispersions | Standard deviations in the radial direction and in one tangential direction. |
| $\mu$ | $1$ | Mean particle mass in atomic mass units | Dimensionless factor converting the atomic mass unit to the average gas particle mass. |
| $\mechanical{m}_{\mathrm u}$ | $\unit{kg}$ | Atomic mass unit | Mass unit used to specify the mean gas particle mass. |
| $\energy{\xi}$ | $\unit{J\,kg^{-1}}$ | Specific binding-energy variable | Energy variable in the exponential of the isothermal distribution. |
| $\mechanical{\sigma}$ | $\unit{m\,s^{-1}}$ | Isothermal velocity dispersion | Constant one-dimensional velocity dispersion. |
| $\mechanical{\Psi}$ | $\unit{m^2\,s^{-2}}$ | Relative gravitational potential | Difference between the chosen reference potential and the ordinary potential. |
| $\mechanical{r}_0$ | $\unit{m}$ | King radius | Length scale set by the velocity dispersion and central density of the nonsingular isothermal sphere. |
| $\energy{W}_{kj}$ | $\unit{J}$ | Potential-energy tensor component | Spatial moment of the gravitational force density. |
| $\energy{\Sigma}_{kj}$ | $\unit{J}$ | Virial surface pressure term | Boundary flux of the position-weighted momentum transport tensor. |
| $\energy{K}_{jk}$ | $\unit{J}$ | Kinetic-energy tensor component | Half the spatial integral of the mass-weighted second velocity moment. |
| $\energy{T}_{jk}$ | $\unit{J}$ | Ordered kinetic-energy tensor component | Kinetic contribution from bulk stellar motions. |
| $\energy{\Pi}_{jk}$ | $\unit{J}$ | Integrated random-motion stress | Twice the random contribution to the kinetic-energy tensor. |
| $\mechanical{I}_{jk}$ | $\unit{kg\,m^2}$ | Second spatial mass moment | Mass-weighted product of two position coordinates. |
| $\energy{V}_{jk}$ | $\unit{J}$ | External virial term | Symmetric spatial moment of the force density due to an external potential. |
| $\mechanical{I}'_{jk}$ | $\unit{kg\,m^2}$ | Rigid-body inertia tensor component | Standard tensor used to relate angular velocity to angular momentum. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Scalar spatial mass moment | Trace of the second spatial moment tensor. |
| $\energy{K}$, $\energy{W}$ | $\unit{J}$ | Total kinetic and gravitational potential energies | Traces of the kinetic and potential-energy tensors in the isolated self-gravitating system. |
| $\mechanical{r}_{\mathrm g}$ | $\unit{m}$ | Gravitational radius | Radius defined by the total mass and gravitational binding energy. |
| $\mechanical{r}_{1/2}$ | $\unit{m}$ | Half-mass radius | Three-dimensional radius enclosing half the system's mass. |
| $\mechanical{M}_{1/2}$ | $\unit{kg}$ | Enclosed mass at the half-mass or half-light radius | Half the total mass in the King-model example and the mass inside the tracer half-light radius in the Wolf et al. estimator. |
| $\mechanical{v}_0$ | $\unit{m\,s^{-1}}$ | Characteristic rotation speed | Mass-weighted root-mean-square azimuthal streaming speed. |
| $\mechanical{\sigma}_0$ | $\unit{m\,s^{-1}}$ | Characteristic equatorial velocity dispersion | Square root of the mass-weighted local variance along the equatorial line of sight. |
| $\delta$ | $1$ | Global velocity anisotropy | One minus the ratio of integrated vertical to equatorial random-motion stress. |
| $\mechanical{v}_{\mathrm m}$ | $\unit{m\,s^{-1}}$ | Maximum rotation speed | Observational velocity scale used in the oblate-rotator relation. |
| $\overline{\mechanical{\sigma}}$ | $\unit{m\,s^{-1}}$ | Mean central velocity dispersion | Dispersion averaged within half the effective radius in the lecture's convention. |
| $a$, $b$ | $1$ | Fundamental-plane coefficients | Logarithmic slopes with respect to velocity dispersion and effective intensity. |
| $\mechanical{D}_n$ | $\unit{m}$ | Diameter at a fixed mean surface brightness | Diameter of the aperture with the prescribed mean intensity. |
| $\energy{L}_n$ | $\unit{W}$ | Aperture luminosity | Luminosity enclosed by the aperture of diameter $\mechanical{D}_n$. |
| $\gamma$ | $1$ | Effective surface-brightness slope | Positive exponent in the power-law approximation $f(x)=x^{-\gamma}$. |
| $K_R$, $K_v$ | $1$ | Virial structure coefficients | Ratios connecting the effective radius and observed dispersion to the gravitational radius and global root-mean-square speed. |
| $\langle\energy{I}_{\mathrm e}\rangle$ | $\unit{W\,m^{-2}}$ | Mean effective intensity | Mean luminosity per unit projected area inside the effective radius. |
| $K$ | $\unit{kg\,s^2\,m^{-3}}$ | Virial scaling coefficient | Inverse of $2\pi G K_R K_v^2$ in the effective-radius scaling. |
| $\mechanical{M}(\mathrm{H\,I})$, $\mechanical{M}(\mathrm{H}_2)$ | $\unit{kg}$ | Atomic and molecular hydrogen masses | Cold-gas mass estimates from atomic hydrogen measurements and CO observations. |
| $\energy{L}_B$, $\energy{L}_{B,\odot}$ | $\unit{W}$ | Galaxy and solar $B$-band luminosities | Optical luminosity and its solar reference in the $B$ band. |
| $\energy{L}_X$, $\energy{L}_{\mathrm{opt}}$ | $\unit{W}$ | X-ray and optical luminosities | Luminosities compared across the elliptical galaxy sample. |
| $\mechanical{\lambda}_{\mathrm C}$ | $\unit{pc}$ | Coulomb mean free path | Characteristic distance traveled between Coulomb deflections. |
| $\mechanical{r}_{\mathrm g}$ | $\unit{pc}$ | Gyroradius | Radius of a charged particle's motion around a magnetic field line in this section. |
| $\magnetic{B}$ | $\unit{T}$ | Magnetic flux density magnitude | Field strength entering the gyroradius estimate. |
| $\mechanical{\tau}_{\mathrm{ee}}$ | $\unit{yr}$ | Electron–electron equilibration time | Time for electrons to equilibrate through Coulomb interactions with other electrons. |
| $\mechanical{\tau}_{\mathrm{e,i}}$ | $\unit{yr}$ | Electron–ion equilibration time | Time for ions and electrons to exchange thermal energy. |
| $\magnetic{P}_{\mathrm{mag}}$, $\thermal{P}_{\mathrm{th}}$ | $\unit{Pa}$ | Magnetic and thermal pressures | Contributions compared in the hot gas pressure estimate. |
| $\mechanical{c}_{\mathrm s}$ | $\unit{m\,s^{-1}}$ | Sound speed | Propagation speed of small pressure disturbances in the hot gas. |
| $\thermal{P}_{\mathrm g}$ | $\unit{Pa}$ | Hot gas thermal pressure | Ideal-gas pressure supporting the gas against gravity. |
| $\mechanical{\rho}_{\mathrm g}$ | $\unit{kg\,m^{-3}}$ | Hot gas mass density | Density inferred from the X-ray spectrum and used in hydrostatic equilibrium. |
| $\beta$ | $1$ | Isothermal beta-model exponent | Ratio of the stellar velocity variance to the gas thermal energy per unit mass in this section. |
| $\mechanical{r}_{\mathrm c}$ | $\unit{m}$ | Beta-model core radius | Radius setting the transition from the inner core to the outer power law. |
| $\energy{I}_{X,0}$ | $\unit{W\,m^{-2}}$ | Central projected X-ray intensity | Normalization of the beta-model brightness profile. |
| $K_T$ | $1$ | Thermal structure coefficient | Ratio of the gas thermal speed squared to the virial mean-square speed. |
| $K_M$ | $1$ | Virial mass fraction | Ratio of the mass inside the virial radius to total model mass. |
| $\mechanical{M}_{500}$ | $\unit{kg}$ | Cluster mass at overdensity 500 | Mass enclosed where the mean density is 500 times the critical density. |
| $\energy{\epsilon}_X$ | $\unit{W\,m^{-3}}$ | X-ray volume emissivity | Power radiated in X-rays per unit volume. |
| $\mechanical{M}_{\mathrm{gas}}$ | $\unit{kg}$ | Hot gas mass within the virial radius | Mass of the emitting gas used in the luminosity scaling. |
| $f_{\mathrm{gas}}$ | $1$ | Hot gas mass fraction | Ratio of hot gas mass to total mass within the virial radius. |
