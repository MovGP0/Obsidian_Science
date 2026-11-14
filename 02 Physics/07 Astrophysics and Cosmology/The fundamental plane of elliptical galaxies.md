---
title: "The fundamental plane of elliptical galaxies"
---

> [!TLDR]
> Use virial scaling to interpret the fundamental plane and diameter–dispersion relation, including the assumptions behind the predicted slopes.

## Worked lecture material

In practice the lecture replaces $\mechanical{\sigma}_0$ by $\overline{\mechanical{\sigma}}$, the mean dispersion within $\mechanical{R}_{\mathrm e}/2$, and $\mechanical{v}_0$ by $4\mechanical{v}_{\mathrm m}/\pi$, where $\mechanical{v}_{\mathrm m}$ is the maximum measured rotation speed. For an oblate isotropic rotator, $\delta=0$, a useful approximation is

$$
\frac{\mechanical{v}_{\mathrm m}}{\overline{\mechanical{\sigma}}}
\simeq\sqrt{\frac{\epsilon}{1-\epsilon}}.
$$

For $\epsilon=1/2$, this gives a ratio of $1$. Viewing the galaxy away from edge-on changes the projected quantities and can lead to an underestimate of $\delta$.

##### The fundamental plane

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

The fundamental-plane slopes vary somewhat by waveband. At fixed velocity dispersion and effective intensity, the scatter in effective radius is about $15\%$.

##### The $D_n$–$\sigma$ relation

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

For self-similar profiles the mean intensity inside the effective radius satisfies $\langle\energy{I}_{\mathrm e}\rangle\propto\energy{I}_{\mathrm e}$. Exponentiating the preceding logarithmic relation then gives

$$
\mechanical{D}_n\propto
\mechanical{\sigma}_0^a\langle\energy{I}_{\mathrm e}\rangle^{b+1/\gamma}.
$$

##### Diameter–dispersion recap

The lecture repeats the definition of $\mechanical{D}_n$ using the aperture luminosity and the radial integral with area element $2\pi\mechanical{R}\,d\mechanical{R}$. The fundamental plane is associated in the notes with the Seven Samurai collaboration and with the variable $\log_{10}\langle\energy{I}\rangle$.

##### Oral final exam

Set aside 45 minutes after 11 a.m. during finals week. The exam is an informal discussion intended to check how well students have assimilated the course material. Come with a topic in mind and expect to move between topics. Equations can be filled in on the board. Be ready to ask questions and derive equations.

Dressler et al. used a threshold corresponding to $\quantity{20.75}{mag\,arcsec^{-2}}$ in the $B$ band. In the lecture's derivation, most of the light contributing to this aperture is in the regime where a de Vaucouleurs profile has an effective $\gamma\sim1.2$, giving $1/\gamma\sim0.8$. With $b$ between $-0.85$ and $-0.75$, the residual exponent $b+1/\gamma$ is roughly between $-0.05$ and $+0.05$ at this precision. [Dressler et al. (1987)](https://articles.adsabs.harvard.edu/pdf/1987ApJ...313...42D)

Neglecting the weak dependence on mean effective intensity gives the **$D_n$–$\sigma$ relation** $\mechanical{D}_n\propto\mechanical{\sigma}_0^a$, with $a$ typically about $1.2$–$1.5$. For $a=1.33$ the lecture gives

$$
\frac{\mechanical{D}_n}{\unit{kpc}}
=2.05
\left(\frac{\mechanical{\sigma}_0}{\quantity{100}{km\,s^{-1}}}\right)^{1.33}.
$$

See Schneider, equation 3.35. The notes quote about $15\%$ rms scatter, comparable to that of the fundamental plane itself. The relation is a nearly edge-on projection of the plane and serves as a distance indicator.

##### Virial derivation of the fundamental-plane scaling

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

Writing $K=(2\pi G K_R K_v^2)^{-1}$ and taking base-ten logarithms gives

$$
\log_{10}\mechanical{R}_{\mathrm e}
=2\log_{10}\mechanical{\sigma}_0
-\log_{10}\langle\energy{I}_{\mathrm e}\rangle
+\log_{10}K-\log_{10}\!\left(\frac{\mechanical{M}}{\energy{L}}\right).
$$

For a common $K$ and $\mechanical{M}/\energy{L}$ this predicts slopes $(a,b)=(2,-1)$, while the measured dispersion slope is closer to $1.5$ in several bands. The deviation from the constant-$K$, constant-mass-to-light prediction is called the **tilt of the fundamental plane**.

Ellipticals would be **homologous** if their density profiles and orbital structures were self-similar, with fixed $K_R$ and $K_v$. This would make their product $K_R K_v^2$, and therefore $K$, constant. The tilt can arise from departures from homology, a varying mass-to-light ratio, or both. In this description, $K$ or $\mechanical{M}/\energy{L}$ can depend on effective radius, velocity dispersion, or effective intensity.

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

For the $V$ band, $a=1.15$ and $b=-0.85$ give $\mechanical{M}/\energy{L}\propto\energy{L}^{0.37}\langle\energy{I}_{\mathrm e}\rangle^{0.11}$. For the $K$ band, the [[#The fundamental plane|the section on The fundamental plane]] coefficients $a=1.51$ and $b=-0.77$ give $\mechanical{M}/\energy{L}\propto\energy{L}^{0.16}\langle\energy{I}_{\mathrm e}\rangle^{-0.14}$. The latter coefficients are read from the earlier table because they reproduce the powers shown in the handwritten example.

## Source

Kyle Kabasares, *Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $V$ | $\unit{m^3}$ | Gas volume | Volume used to convert emissivity to luminosity. |
| $\mechanical{R}$, $\mechanical{R}_{\mathrm e}$ | $\unit{kpc}$ | Projected and effective radius | The profile coordinate is the isophote's semimajor axis. The effective radius encloses half the component's projected light. |
| $\energy{I}(\mechanical{R})$, $\energy{I}_{\mathrm e}$ | $\unit{W\,m^{-2}}$ | Surface luminosity density and its effective value | The profile and its normalization at the effective radius. |
| $n$ | $1$ | Sérsic index | Shape parameter of the profile, with $n=4$ for the de Vaucouleurs law. |
| $\energy{L}$ | $\unit{W}$ | Total luminosity | Integral of the surface luminosity density over projected area. |
| $\mechanical{r}$ | $\unit{m}$ | Spherical radius | Three-dimensional distance from the center. |
| $q$, $\epsilon$, $e$ | $1$ | Axis ratio, ellipticity, and eccentricity | Three measures of apparent ellipse shape. |
| $p$ | $1$ | Inner deprojection slope | Exponent of the prefactor in the approximate spatial density. |
| $n$ | $\unit{m^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\mechanical{\sigma}$ | $\unit{m\,s^{-1}}$ | Isothermal velocity dispersion | Constant one-dimensional velocity dispersion. |
| $\mechanical{r}_{\mathrm g}$ | $\unit{m}$ | Gravitational radius | Radius defined by the total mass and gravitational binding energy. |
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
| $\mechanical{r}_{\mathrm g}$ | $\unit{pc}$ | Gyroradius | Radius of a charged particle's motion around a magnetic field line in this section. |
