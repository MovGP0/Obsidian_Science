---
title: "Galaxy scaling laws, Sérsic profiles, and luminosity functions"
---

> [!TLDR]
> Connect disk and elliptical galaxy observables with scaling laws, projected profiles, and the distribution of luminosities.

## Worked lecture material

##### Halo scaling and galaxy luminosity

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

The stellar bulge and disk account for the inner circular-speed profile in the model discussed. An extended dark matter halo is needed to account for the speeds measured at larger radii.

##### Tully–Fisher relation

See Schneider §3.4.1. The stellar luminosity scales with the maximum rotation speed,

$$
\energy{L}\propto\mechanical{v}_{\max}^{\alpha},
\qquad
\alpha\simeq2.5\text{–}4.
$$

The exponent is larger in redder bands. At fixed $\mechanical{v}_{\max}$, the notes give a luminosity scatter of about $20\%$, or about $10\%$ in the $H$ band. The relation is used as a distance indicator. The lecture next develops a heuristic explanation, emphasizing the physical insight that can be gained before running complex numerical simulations.

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

The preceding estimate gives the fourth-power Tully–Fisher relation if $\Upsilon^{-2}/\langle\energy{I}\rangle$ is approximately constant among spiral galaxies. This condition connects the distributions of dark matter and luminous matter.

The luminosity in the estimate counts the stars. What role does the gas play? If the relation reflects galaxy dynamics, the circular speed should also be related to the mass producing the gravitational field. Write

$$
\mechanical{M}_{\mathrm{tot}}\propto\mechanical{v}_{\mathrm c}^{\,b},
$$

with $b$ an unknown exponent and $\mechanical{v}_{\mathrm c}$ close to the circular speed inferred from the kinematic tracers. To compare with observations, relate the total mass to the stellar light and account for the gas. The notes follow McGaugh and colleagues (2000, *ApJ* 533, L99). [The Baryonic Tully–Fisher Relation](https://arxiv.org/abs/astro-ph/0003001).

1. Relate total gravitating mass to baryonic mass by $\mechanical{M}_{\mathrm b}=f_{\mathrm b}\mechanical{M}_{\mathrm{tot}}$, with $f_{\mathrm b}$ taken to be the mean cosmic baryon fraction. This assumes the halo retains its baryons during evolution. The notes caution that feedback can invalidate the assumption.
2. Relate the halo's baryonic mass to the mass of baryons in the disk by $\mechanical{M}_{\mathrm d}=f_{\mathrm d}\mechanical{M}_{\mathrm b}$. Here $f_{\mathrm d}$ is the fraction of halo baryons ending up in the disk.
3. Relate the disk baryons to stellar mass by $\mechanical{M}_*=f_*\mechanical{M}_{\mathrm d}$, where $f_*$ is the fraction of the disk baryon mass in stars.

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

##### Projected shapes and light profiles

The notes give the following normalization of the baryonic disk relation,

$$
\mechanical{M}_{\mathrm d}
=2\times10^9h^{-2}\mechanical{M}_\odot
\left(\frac{\mechanical{v}_{\max}}{\quantity{100}{km\,s^{-1}}}\right)^4.
$$

Here $h$ is the reduced Hubble parameter.

##### Normal elliptical galaxies

For an ellipse with semimajor axis $a$ and semiminor axis $b$,

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,
\qquad a\ge b.
$$

The full major and minor axes have lengths $2a$ and $2b$. The axis ratio is $q=b/a$, the ellipticity is $\epsilon=1-q$, and the geometric eccentricity is $e=\sqrt{1-q^2}$. The area is $\pi ab=\pi qa^2$, so the radius of a circle with the same area is $\sqrt{ab}$.

![[Kyle Kabasares - Extragalactic Astrophysics - ellipse axes and semiaxes.png|**Fig. 4** The ellipse sketch labels the semimajor axis $a$ and semiminor axis $b$.]]

In the Hubble classification $\mathrm E_n$, $n$ is approximately $10\epsilon$. The notes list classes $\mathrm E_0$ through $\mathrm E_6$.

##### Sérsic profile

The notes refer to MBW pages 42–43, Binney and Tremaine page 20, and Schneider §3.6. The radial stellar surface brightness of elliptical galaxies is generally fit by

$$
\energy{I}(\mechanical{R})
=\energy{I}_{\mathrm e}
\exp\!\left[-b_n\left(\left(\frac{\mechanical{R}}{\mechanical{R}_{\mathrm e}}\right)^{1/n}-1\right)\right].
$$

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

The exponent $1/n$ follows from the intensity form on [[#Normal elliptical galaxies|the section on Normal elliptical galaxies]].

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

The notes compare the projected Sérsic law with an Einasto spatial density law. Replacing the projected intensity with a density, its normalization with a density scale, and the projected radius with a spatial radius gives the same exponential form. In this comparison the radial scale of the spatial law can be chosen independently of the projected half-light radius.

##### Part 2. Boxy and disky isophotes

An isophote is a curve of constant surface brightness. The notes refer to Schneider §3.2.5 and MBW pages 45–46. A standard ellipse fit to an isophote gives its semimajor axis, axis ratio, position angle (usually of the major axis), and intensity.

To study departures from perfect ellipses, compute the distance from the center along different directions and compare the isophote with the fitted ellipse.

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

##### Galaxy luminosity functions

The notes give a typical isophotal deviation $|a_4/a|\sim0.01$, so the fitted ellipses reproduce the observed shapes to about the percent level in this measure.

##### Galaxy luminosity function

See Schneider §3.10, MBW §2.4.1, and Binney and Tremaine page 22. The luminosity function gives the abundance of galaxies in different luminosity intervals. In a convention normalized per unit volume, $\phi(\energy{L})\,d\energy{L}$ counts galaxies per volume with luminosity between $\energy{L}$ and $\energy{L}+d\energy{L}$.

The composite luminosity function including all galaxy types is approximated by the Schechter form,

$$
\phi(\energy{L})\,d\energy{L}
=\phi_*\left(\frac{\energy{L}}{\energy{L}_*}\right)^{\alpha}
\exp\!\left(-\frac{\energy{L}}{\energy{L}_*}\right)
\frac{d\energy{L}}{\energy{L}_*}.
$$

Here $\phi_*$ sets the normalization.

Above the characteristic luminosity $\energy{L}_*$, the Schechter function falls exponentially. The power-law index $\alpha$ controls the faint-end slope. Expressing the function in absolute magnitude gives $\phi(M)\,dM$.

The midterm is next week. The notes repeat the global Schechter luminosity function from page 33 and give parameter estimates in two bands from MBW Table 15.1, page 656.

| Band | $\alpha$ | $M^*$ ($\unit{mag}$) | $\phi_* / (h^3\,\unit{Mpc^{-3}})$ |
| --- | ---: | ---: | ---: |
| $K$ | $-1.16\pm0.04$ | $-23.83\pm0.03$ | $(0.75\pm0.01)\times10^{-2}$ |
| $b$ | $-1.21\pm0.03$ | $-19.66\pm0.07$ | $(1.61\pm0.08)\times10^{-2}$ |

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

##### Theoretical motivation for the Schechter luminosity function

Schechter based the luminosity function on the shape predicted by a self-similar stochastic model of galaxy formation and treated the faint-end slope $\alpha$ as a parameter to be fitted to the data. [Schechter (1976)](https://doi.org/10.1086/154079)

For the special case of self-similar dark-matter halo evolution discussed in the lecture, the Press–Schechter model gives a halo mass function of the form

$$
n(\mechanical{M})
\propto
\mechanical{M}^{-3/2}\exp\!\left(-C\mechanical{M}\right),
$$

where $\mechanical{M}$ is the halo mass, $n(\mechanical{M})\,d\mechanical{M}$ counts halos per unit volume in a mass interval, and $C$ is a positive constant. The lecture points to equation 23 in the original paper and relates this special case to cold dark matter. [Press and Schechter (1974)](https://adsabs.harvard.edu/pdf/1974ApJ...187..425P)

## Source

Kyle Kabasares, *Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Sets the strength of self-gravity. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | Reference unit for galactic and cluster masses. |
| $\mu$ | $\unit{mag\,arcsec^{-2}}$ | Surface brightness in magnitudes | Logarithmic measure of intensity per angular area with a specified zero point. |
| $\mechanical{R}$, $\mechanical{R}_{\mathrm e}$ | $\unit{kpc}$ | Projected and effective radius | The profile coordinate is the isophote's semimajor axis. The effective radius encloses half the component's projected light. |
| $\energy{I}(\mechanical{R})$, $\energy{I}_{\mathrm e}$ | $\unit{W\,m^{-2}}$ | Surface luminosity density and its effective value | The profile and its normalization at the effective radius. |
| $n$ | $1$ | Sérsic index | Shape parameter of the profile, with $n=4$ for the de Vaucouleurs law. |
| $\energy{L}$ | $\unit{W}$ | Total luminosity | Integral of the surface luminosity density over projected area. |
| $\energy{I}_0$ | $\unit{W\,m^{-2}}$ | Central surface luminosity density | Normalization of the exponential disk profile. |
| $\mechanical{v}_{\mathrm c}$ | $\unit{m\,s^{-1}}$ | Circular speed | Speed on a circular orbit at the specified radius. |
| $\mechanical{r}$ | $\unit{m}$ | Spherical radius | Three-dimensional distance from the center. |
| $\mechanical{M}(<\mechanical{r})$ | $\unit{kg}$ | Enclosed gravitating mass | Total mass within spherical radius $\mechanical{r}$. |
| $\mechanical{\rho}(\mechanical{r})$ | $\unit{kg\,m^{-3}}$ | Mass density profile | Local gravitating mass per unit volume at spherical radius $\mechanical{r}$. |
| $\mechanical{r}_\Delta$ | $\unit{kpc}$ | Spherical overdensity radius | Radius within which the mean density is $\Delta\mechanical{\rho}_{\mathrm c}$. |
| $\Delta$ | $1$ | Overdensity threshold | Convention for defining an outer halo radius. |
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
| $n$ | $\unit{m^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\mu$ | $1$ | Mean particle mass in atomic mass units | Dimensionless factor converting the atomic mass unit to the average gas particle mass. |
| $a$, $b$ | $1$ | Fundamental-plane coefficients | Logarithmic slopes with respect to velocity dispersion and effective intensity. |
| $K$ | $\unit{kg\,s^2\,m^{-3}}$ | Virial scaling coefficient | Inverse of $2\pi G K_R K_v^2$ in the effective-radius scaling. |
