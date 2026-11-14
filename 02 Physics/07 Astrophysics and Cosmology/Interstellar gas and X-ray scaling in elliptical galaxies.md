---
title: "Interstellar gas and X-ray scaling in elliptical galaxies"
---

> [!TLDR]
> Compare gas phases in elliptical galaxies and use thermal spectra, hydrostatic models, and X-ray scaling laws to infer properties of hot gas.

## Worked lecture material

In these examples the mass-to-light ratio increases with luminosity and depends more weakly on the mean effective intensity. The lecture identifies two contributions.

1. Changes in stellar ages and metallicities change the stellar mass-to-light ratio.
2. Changes in the amount and distribution of dark matter affect the dark-matter fraction inside the effective radius.

The lecture reports that most studies it considered attributed the larger effect in giant ellipticals to dark matter.

The notes mention course evaluations and ask students to schedule the final exam with the instructor, preferably between 11 a.m. and 6 p.m. Students may bring materials subject to the instructor's approval and should be prepared to discuss any topic covered in the course.

The lecture connects the fundamental plane to disk-galaxy mergers. Dissipationless mergers reproduce the virial scaling, while dissipational mergers agree with the observed fundamental plane.

##### Cold and warm gas in elliptical galaxies

- Atomic and molecular gas are detected in about $20\%$ of ellipticals in the lecture's summary. Ellipticals generally have less cold gas than spirals, and the cold component is concentrated in their centers.
- The lecture quotes central dust in about $80\%$ of ellipticals and gives a mass range of $10^6$–$10^8$ solar masses alongside this estimate.
- Warm ionized gas, traced by $\mathrm{H}\alpha$ and $[\mathrm{N\,II}]$, is also common. The notes give a central detection rate of at least $50\%$, a temperature near $\quantity{10^4}{K}$, and masses of $10^2$–$10^4$ solar masses.

##### The ATLAS³D survey

The survey studied early-type galaxies out to $\quantity{42}{Mpc}$. CO measurements provided molecular hydrogen masses. The notes list about 240 objects for IRAM and 40 for CARMA, and use atomic hydrogen masses from the literature. Cold gas was detected in $10$–$34\%$ of early-type galaxies, depending on the definition of the red sequence. In massive early-type galaxies with $\mechanical{M}_*>5\times10^{10}\mechanical{M}_\odot$, the notes give $\mechanical{M}(\mathrm{H\,I})/\mechanical{M}_*\sim0.06$ and $\mechanical{M}(\mathrm{H}_2)/\mechanical{M}_*\sim0.01$ as upper-end fractions. The gas can come from external accretion and from retention of some of the original reservoir. [Young et al. (2014)](https://doi.org/10.1093/mnras/stt2474)

##### Hot gas in elliptical galaxies

Many luminous ellipticals, with $\log_{10}(\energy{L}_B/\energy{L}_{B,\odot})\gtrsim10.5$, show diffuse X-ray emission. The gas emits thermal bremsstrahlung and coronal lines, as in the intracluster medium. The notes give temperatures of $\quantity{5\times10^6}{K}$ to $\quantity{10^7}{K}$, or $k_{\mathrm B}\thermal{T}$ of about $\quantity{0.5}{keV}$ to $\quantity{1}{keV}$. Chandra images show this emission in massive ellipticals.

Stellar X-ray sources include low-mass X-ray binaries, cataclysmic variables, black-hole X-ray binaries, and high-mass X-ray binaries. Bright diffuse emission makes embedded point sources difficult to detect. Detected and unresolved sources must be accounted for in spatial and spectral modeling. Active galactic nuclei can also contribute.

The relation between X-ray luminosity $\energy{L}_X$ and optical luminosity $\energy{L}_{\mathrm{opt}}$ shows substantial scatter, particularly at high optical luminosities. At low X-ray luminosities, stellar sources are usually sufficient. The brightest X-ray systems require hot gas. Several factors may contribute to the high-luminosity scatter. The lecture highlights differences in dark-matter halo mass or size. [Mathews et al. (2006 preprint)](https://arxiv.org/abs/astro-ph/0610694)

##### Properties of the hot interstellar medium

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

When bulk and turbulent speeds are much smaller than the sound speed, approximate hydrostatic equilibrium is expected. The lecture gives the disturbed galaxy M84 as an exception.

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

For problem 3 the notes refer to items 59–60 in BT and split the potential-energy tensor into a self-gravitating part $\energy{W}_{jk}$ and an external part $\energy{W}_{jk}^{\mathrm{ext}}$. With the index convention of [[Galactic virial balance, rotational support, and anisotropy#The virial equations|the section on The virial equations]],

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

##### Hot gas spectra

A dense set of temperature-sensitive Fe L-shell lines lies near $\quantity{1}{keV}$. These lines dominate the temperature and metallicity constraints for the hot gas in ellipticals.

The shape of the Fe L complex and bremsstrahlung continuum constrains the gas temperature. The spectral normalization constrains the gas density.

##### The isothermal beta model

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

The King approximation describes the inner isothermal sphere, roughly within twice the core radius. X-ray studies nevertheless fit the beta model to entire elliptical galaxies and galaxy clusters. Although real systems depart from its assumptions, the model often describes the observed brightness over a broad radial range. It implies a logarithmic potential up to an additive constant,

$$
\mechanical{\Phi}(\mechanical{r})-\mechanical{\Phi}(0)
\propto\ln\!\left[1+\left(\frac{\mechanical{r}}{\mechanical{r}_{\mathrm c}}\right)^2\right].
$$

The notes leave the derivation from hydrostatic equilibrium as an exercise.

For the compact elliptical PGC 032873, Chandra data in the $0.5$–$7.0\,\unit{keV}$ band were modeled with a beta profile for the gas and a contribution from unresolved low-mass X-ray binaries. The binary normalization was fixed using a scaling with stellar $K$-band luminosity. The gas and binary profiles have very similar shapes. [Buote and Barth (2018)](https://arxiv.org/abs/1712.03978)

The small fitted values of $\beta$, often around or below $0.5$, make quantities extrapolated from the beta model sensitive to the assumed outer radius.

##### Scaling relations for the hot interstellar medium

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

## Source

Kyle Kabasares, *Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $V$ | $\unit{m^3}$ | Gas volume | Volume used to convert emissivity to luminosity. |
| $Z$ | $1$ | Metallicity | Abundance of elements heavier than helium, often quoted relative to solar metallicity. |
| $\thermal{T}$ | $\unit{K}$ | Gas temperature | Determines the thermal energy and affects the cooling function. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | Reference unit for galactic and cluster masses. |
| $\thermal{\Lambda}_\nu$ | $\unit{W\,m^3\,Hz^{-1}}$ | Spectral cooling function | Spectral emissivity divided by the square of the hydrogen number density. |
| $\mu$ | $\unit{mag\,arcsec^{-2}}$ | Surface brightness in magnitudes | Logarithmic measure of intensity per angular area with a specified zero point. |
| $\mechanical{R}$, $\mechanical{R}_{\mathrm e}$ | $\unit{kpc}$ | Projected and effective radius | The profile coordinate is the isophote's semimajor axis. The effective radius encloses half the component's projected light. |
| $n$ | $1$ | Sérsic index | Shape parameter of the profile, with $n=4$ for the de Vaucouleurs law. |
| $\energy{L}$ | $\unit{W}$ | Total luminosity | Integral of the surface luminosity density over projected area. |
| $\mechanical{r}$ | $\unit{m}$ | Spherical radius | Three-dimensional distance from the center. |
| $\mechanical{M}(<\mechanical{r})$ | $\unit{kg}$ | Enclosed gravitating mass | Total mass within spherical radius $\mechanical{r}$. |
| $\mechanical{\Phi}$ | $\unit{m^2\,s^{-2}}$ | Gravitational potential | Gravitational potential energy per unit mass. |
| $\mechanical{r}_\Delta$ | $\unit{kpc}$ | Spherical overdensity radius | Radius within which the mean density is $\Delta\mechanical{\rho}_{\mathrm c}$. |
| $\Delta$ | $1$ | Overdensity threshold | Convention for defining an outer halo radius. |
| $\mechanical{\rho}_{\mathrm c}$ | $\unit{kg\,m^{-3}}$ | Critical mass density | Reference cosmic density for the spherical overdensity convention. |
| $\mechanical{M}_\Delta$ | $\unit{kg}$ | Spherical overdensity mass | Mass enclosed within $\mechanical{r}_\Delta$. |
| $c$ | $1$ | Halo concentration | Ratio of the outer halo reference radius to the scale radius. |
| $\alpha$ | $1$ | Tully–Fisher slope | Power-law exponent relating luminosity to maximum rotation speed. |
| $\mechanical{M}_{\mathrm{tot}}$, $\mechanical{M}_{\mathrm b}$, $\mechanical{M}_{\mathrm d}$, $\mechanical{M}_*$ | $\unit{kg}$ | Total, baryonic, disk baryon, and stellar masses | Successive mass components in the luminosity estimate. |
| $h$ | $1$ | Reduced Hubble parameter | Defined by $H_0=\quantity{100h}{km\,s^{-1}\,Mpc^{-1}}$. |
| $q$, $\epsilon$, $e$ | $1$ | Axis ratio, ellipticity, and eccentricity | Three measures of apparent ellipse shape. |
| $p$ | $1$ | Inner deprojection slope | Exponent of the prefactor in the approximate spatial density. |
| $\alpha$ | $1$ | Schechter faint-end slope | Power-law index at luminosities small compared with $\energy{L}_*$. |
| $C$ | $\unit{kg^{-1}}$ | Exponential cutoff coefficient | Reciprocal of the mass scale in the special-case halo mass function. |
| $N$ | $1$ | Number of stars | Total stellar population of the model galaxy. |
| $n$ | $\unit{m^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\mechanical{t}_{\mathrm{cross}}$ | $\unit{s}$ | Galaxy crossing time | Characteristic galaxy radius divided by stellar speed. |
| $\mu$ | $1$ | Mean particle mass in atomic mass units | Dimensionless factor converting the atomic mass unit to the average gas particle mass. |
| $\mechanical{m}_{\mathrm u}$ | $\unit{kg}$ | Atomic mass unit | Mass unit used to specify the mean gas particle mass. |
| $\mechanical{\sigma}$ | $\unit{m\,s^{-1}}$ | Isothermal velocity dispersion | Constant one-dimensional velocity dispersion. |
| $\energy{W}_{kj}$ | $\unit{J}$ | Potential-energy tensor component | Spatial moment of the gravitational force density. |
| $\energy{T}_{jk}$ | $\unit{J}$ | Ordered kinetic-energy tensor component | Kinetic contribution from bulk stellar motions. |
| $\energy{\Pi}_{jk}$ | $\unit{J}$ | Integrated random-motion stress | Twice the random contribution to the kinetic-energy tensor. |
| $\mechanical{I}_{jk}$ | $\unit{kg\,m^2}$ | Second spatial mass moment | Mass-weighted product of two position coordinates. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Scalar spatial mass moment | Trace of the second spatial moment tensor. |
| $\energy{K}$, $\energy{W}$ | $\unit{J}$ | Total kinetic and gravitational potential energies | Traces of the kinetic and potential-energy tensors in the isolated self-gravitating system. |
| $\mechanical{r}_{\mathrm g}$ | $\unit{m}$ | Gravitational radius | Radius defined by the total mass and gravitational binding energy. |
| $a$, $b$ | $1$ | Fundamental-plane coefficients | Logarithmic slopes with respect to velocity dispersion and effective intensity. |
| $K_R$, $K_v$ | $1$ | Virial structure coefficients | Ratios connecting the effective radius and observed dispersion to the gravitational radius and global root-mean-square speed. |
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
