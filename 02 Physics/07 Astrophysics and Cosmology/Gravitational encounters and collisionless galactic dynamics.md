---
title: "Gravitational encounters and collisionless galactic dynamics"
---

> [!TLDR]
> Derive the impulse approximation and estimate when repeated stellar encounters affect a galaxy’s dynamics.

## Worked lecture material

Schechter's empirical model makes two changes in using the halo mass function as a guide to the luminosity function.

1. Replace the fixed exponent $-3/2$ with the adjustable faint-end slope $\alpha$.
2. Assume $\energy{L}\propto\mechanical{M}$, with a proportionality factor that varies little with halo mass.

If the connection is sound, theory should be able to recover the observed luminosity function from the halo mass function. The lecture considers this plausible but more complicated in practice and expects the argument to apply only to the composite luminosity function.

##### Collisionless galactic dynamics

The lecture refers to BT and to MBW, section 5.4. It begins with collision time scales. The first case is direct collisions with gravity neglected, analogous to atoms or molecules in a box when long-range forces are ignored. See MBW, p. 230.

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

##### Gravitational encounters

The lecture recaps the direct-collision estimate of $\mechanical{t}_{\mathrm{direct}}\simeq\quantity{10^{21}}{yr}$ (MBW, p. 230), then turns to indirect collisions. The long-range gravitational attraction between stars can alter their galactic orbits even if they never touch. See BT, section 1.2.1, and Schneider, pp. 112–113.

![[Kyle Kabasares - Extragalactic Astrophysics - Two-star gravitational encounter.png|**Fig. 6** The incident star approaches along the $x$ direction at speed $\mechanical{v}$. The dashed perpendicular marks the impact parameter $\mechanical{b}$. The line between the stars gives their separation $\mechanical{r}$ and makes an angle $\theta$ with that perpendicular. The transverse force component is $\mechanical{F}_{\perp}$.]]

##### The impulse approximation

The lecture uses the same type of approximation as in the treatment of bremsstrahlung in Physics 240C. The interaction is strongest near closest approach, when $\mechanical{r}\simeq\mechanical{b}$. Estimate the impulse on the incident star by integrating the force along a straight trajectory.

1. The encounter produces a small velocity change, $\lvert\delta\mechanical{\vec v}\rvert/\mechanical{v}\ll1$.
2. The target star is treated as stationary. For two moving stars, the notes refer to the reduced-mass treatment in BT, section 3.1.
3. In the straight-line approximation, the longitudinal impulses before and after closest approach cancel. The accelerations along $x$ at positive and negative $\theta$ have opposite signs, so $\delta\mechanical{\vec v}\perp\mechanical{\vec v}$.

To obtain $\delta\mechanical{v}=\lvert\delta\mechanical{\vec v}\rvert$, it is therefore enough to integrate the force perpendicular to the trajectory.

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

##### Cumulative deflections

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

Each crossing takes $\mechanical{t}_{\mathrm{cross}}=\mechanical{R}/\mechanical{v}$. The **two-body relaxation time** is

$$
\mechanical{t}_{\mathrm{relax}}
=N_{\mathrm{relax}}\mechanical{t}_{\mathrm{cross}}
\simeq\frac{0.1N}{\ln N}\mechanical{t}_{\mathrm{cross}}.
$$

After one relaxation time, many small kicks from passing stars have accumulated enough to change the orbit substantially from the orbit predicted by the smooth gravitational field. In that sense, the star loses memory of its initial conditions. See BT, p. 37.

The notes compare a large galaxy's age of hundreds of crossing times with a relaxation time of order $10^8\mechanical{t}_{\mathrm{cross}}$. The handwritten star count is read as $N\sim10^{11}$, consistent in order of magnitude with this relaxation estimate. Two-body stellar encounters can generally be neglected in large galaxies, with the very centers of galaxies a possible exception.

## Source

Kyle Kabasares, *Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $V$ | $\unit{m^3}$ | Gas volume | Volume used to convert emissivity to luminosity. |
| $\mechanical{R}$, $\mechanical{R}_{\mathrm e}$ | $\unit{kpc}$ | Projected and effective radius | The profile coordinate is the isophote's semimajor axis. The effective radius encloses half the component's projected light. |
| $n$ | $1$ | Sérsic index | Shape parameter of the profile, with $n=4$ for the de Vaucouleurs law. |
| $\energy{L}$ | $\unit{W}$ | Total luminosity | Integral of the surface luminosity density over projected area. |
| $\mechanical{v}_{\mathrm c}$ | $\unit{m\,s^{-1}}$ | Circular speed | Speed on a circular orbit at the specified radius. |
| $\mechanical{r}$ | $\unit{m}$ | Spherical radius | Three-dimensional distance from the center. |
| $\Delta$ | $1$ | Overdensity threshold | Convention for defining an outer halo radius. |
| $c$ | $1$ | Halo concentration | Ratio of the outer halo reference radius to the scale radius. |
| $\alpha$ | $1$ | Tully–Fisher slope | Power-law exponent relating luminosity to maximum rotation speed. |
| $p$ | $1$ | Inner deprojection slope | Exponent of the prefactor in the approximate spatial density. |
| $\alpha$ | $1$ | Schechter faint-end slope | Power-law index at luminosities small compared with $\energy{L}_*$. |
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
| $\mechanical{\sigma}$ | $\unit{m\,s^{-1}}$ | Isothermal velocity dispersion | Constant one-dimensional velocity dispersion. |
| $\delta$ | $1$ | Global velocity anisotropy | One minus the ratio of integrated vertical to equatorial random-motion stress. |
| $a$, $b$ | $1$ | Fundamental-plane coefficients | Logarithmic slopes with respect to velocity dispersion and effective intensity. |
