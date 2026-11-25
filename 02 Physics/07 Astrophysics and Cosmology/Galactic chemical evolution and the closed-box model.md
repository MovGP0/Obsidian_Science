---
title: "Galactic chemical evolution and the closed-box model"
---

> [!TLDR]
> Use stellar yields and gas consumption to track enrichment and examine why the closed-box model overpredicts metal-poor stars.

## Worked lecture material

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

##### Chemical evolution

Walter Baade separated stars into the relatively metal-rich Population I of the disk and bulge and the metal-poor Population II of the halo. The notes recall Fritz Zwicky’s supernova classifications and the use of Type Ia supernovae as standard candles.

The lecture describes Type II core-collapse supernova spectra as fairly standard.

##### Origin of the elements

The primordial hydrogen and helium mass fractions are $X=0.76$ and $Y=0.24$. The solar metallicity is about $Z_\odot=0.02$ by mass. The notes append an extra $Z$ to the numerical value. The value $Z_\odot=0.02$ is the classical value, and the G-dwarf example below uses it. Modern solar abundances give $Z_\odot\approx0.013\text{–}0.014$ (Asplund et al. 2009), and the primordial helium mass fraction is $Y_p\approx0.245$.

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

Heavy-element abundances rise with time. Different abundance ratios probe the timescales of enrichment. The lecture also notes radial metallicity gradients and very metal-poor halo stars.

##### Closed-box model

The model assumes the following.

1. Gas stays within the box.
2. Metals are produced in fixed relative proportions, represented by one type of supernova and one kind of metal.
3. The gas is always fully mixed.
4. The model has two kinds of stars. Short-lived stars explode immediately, and long-lived stars have lifetimes longer than the age of the galaxy.

Let $\mechanical{M}_{\mathrm g}(t)$ be the gas mass. Let $\mechanical{M}_\star(t)$ be the mass in long-lived stars and remnants, including neutron stars, black holes, and white dwarfs. The mass of heavy elements in the gas is $\mechanical{M}_{\mathrm h}(t)$. The gas-phase metallicity is

$$
Z(t)=\frac{\mechanical{M}_{\mathrm h}(t)}{\mechanical{M}_{\mathrm g}(t)}.
$$

##### A star formation event in the closed box

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

##### The G-dwarf problem

The historical question is what fraction of stars in the Galactic disk have metallicities below one-quarter of a reference stellar metallicity. The notes write $\mechanical{M}_\star(<Z_\star/4)/\mechanical{M}_\star(<Z)$ and give $0.02$ for the solar reference metallicity. For initially metal-free gas,

$$
Z=p\ln\left[\frac{\mechanical{M}_{\mathrm g}(0)}{\mechanical{M}_{\mathrm g}(t)}\right],
$$

with the initial mass above the remaining gas mass in the ratio.

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

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $\mechanical{\Sigma}(<\mechanical{z})$ | $\unit{M_{\odot}\cdot pc^{-2}}$ | Surface mass density | Mass per unit area between the two stated heights about the disk midplane. |
| $\mechanical{z}$ | $\unit{kpc}$ | Height | Height above the disk midplane. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of tracer stars per unit volume. |
| $\mechanical{\sigma}_z$ | $\unit{km\cdot s^{-1}}$ | Vertical velocity dispersion | Spread of stellar velocities perpendicular to the disk. |
| $X$, $Y$ | 1 | Hydrogen and helium mass fractions | Primordial mass fractions of hydrogen and helium. |
| $Z_\odot$ | 1 | Solar metallicity | Solar mass fraction in elements heavier than helium. |
| $[\mathrm O/\mathrm{Fe}]$ | 1 | Oxygen-to-iron abundance index | Base-ten logarithm of the oxygen-to-iron number ratio relative to the Sun. |
| $N_{\mathrm O}$, $N_{\mathrm{Fe}}$ | 1 | Element number abundances | Numbers of oxygen and iron atoms in the star or in the Sun. |
| $\mechanical{M}_{\mathrm g}$ | $\unit{M_{\odot}}$ | Gas mass | Total mass of gas in the box. |
| $\mechanical{M}_{\mathrm h}$ | $\unit{M_{\odot}}$ | Gas-phase heavy-element mass | Mass of metals contained in the gas. |
| $\mechanical{M}_\star$, $\Delta\mechanical{M}_\star$ | $\unit{M_{\odot}}$ | Stellar mass | Mass in long-lived stars and remnants, and the mass formed in one burst. |
| $t$ | $\unit{Gyr}$ | Time | Time since the start of the closed-box evolution. |
| $Z(t)$ | 1 | Gas-phase metallicity | Mass fraction of metals in the gas. |
| $Z_0$ | 1 | Initial gas metallicity | Metal mass fraction of the gas at the start of the closed-box model. |
| $Z_\star$ | 1 | Reference stellar metallicity | Metallicity used as the reference in the G-dwarf fraction. |
| $p$ | 1 | Metal yield | Newly synthesized metal mass returned to the gas per unit mass locked into stars and remnants. |
