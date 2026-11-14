---
title: "Advanced stellar burning, polytropes, and compact stars"
---

> [!TLDR]
> Follow helium and later burning stages, then use polytropic structure and degeneracy pressure to describe compact stars.

## Worked lecture material

The boxed reaction gives oxygen-15 as the product of proton capture on nitrogen-14. It supplies the corrected product for the last line on [[Thermonuclear rates and hydrogen-burning chains#CNO cycles|the section on CNO cycles]].

$$
\begin{aligned}
{}^{14}\mathrm{N}+{}^{1}\mathrm{H}
&\longrightarrow{}^{15}\mathrm{O}+\gamma,\\
{}^{15}\mathrm{O}
&\longrightarrow{}^{15}\mathrm{N}+e^++\nu_e,\\
{}^{15}\mathrm{N}+{}^{1}\mathrm{H}
&\longrightarrow{}^{12}\mathrm{C}+{}^{4}\mathrm{He}.
\end{aligned}
$$

The arrow labeled “go back” returns to the start of the cycle.

The plot compares the normalized CNO and pp energy production rates against $\thermal{T}_6$. The pp denominator is $\mechanical{\rho}X^2$. The CNO denominator appears to be $\mechanical{\rho}XX_{\mathrm{CNO}}$. The CNO curve rises more steeply and crosses the pp curve above the solar mark near $\thermal{T}_6=15$. The margin says $\energy{\epsilon}_{\mathrm{pp}}\simeq10\energy{\epsilon}_{\mathrm{CNO}}$ in the Sun.

![[Kyle Kabasares - Stellar Astrophysics - CNO and proton-proton energy production.png|**Fig. 22** Normalized CNO and pp energy production rates versus temperature, with the solar point marked]]

$$
\energy{\epsilon}=\energy{\epsilon}_0\mechanical{\rho}^{\lambda}\thermal{T}^{\nu},
\qquad
\nu_{\mathrm{CNO}}=\frac{50.8}{\thermal{T}_6^{1/3}}-\frac23.
$$

##### Helium burning

$$
\alpha+\alpha\longrightarrow{}^{8}\mathrm{Be}
  (\alpha,\gamma){}^{12}\mathrm{C}
  (\alpha,\gamma){}^{16}\mathrm{O}.
$$

The first step is endothermic, with $\energy{Q}=-92\,\unit{keV}$. The temperature estimate is $\thermal{T}\sim1.2\times10^8\,\unit{K}$. The parenthetical note near the last capture reads “Unknown ~ 2.”

$$
\frac{n_X^2}{n({}^{8}\mathrm{Be})}
=\frac{\pi\mechanical{m}_\alpha\thermal{k}\thermal{T}}{h}
 \mathrm{e}^{-\energy{Q}/(\thermal{k}\thermal{T})}.
$$

The prefactor is reproduced as written. Its dimensions do not give the number density on the left.

The opening line gives $\energy{Q}=\quantity{7.4}{MeV}$.

The handwritten year is 2018, although nearby lectures are dated 2019. The opening aside mentions a paper with Tajima and “frustrating conservation.”

Two alpha particles form beryllium-8. Further captures give carbon-12 and oxygen-16. The beryllium-8 state is labeled excited, with an arrow pointing back toward the two-alpha state and a lifetime of about $\quantity{10^{-16}}{s}$. Forming beryllium-8 is endothermic and takes about $\quantity{92}{keV}$.

The power-law expression for energy generation is repeated. The next line also uses $\energy{\epsilon}_0$, this time for an energy in keV.

$$
\begin{aligned}
\energy{\epsilon}&=\energy{\epsilon}_0\mechanical{\rho}^{\lambda}\thermal{T}^{\nu},\\
\energy{\epsilon}_0&=1.22\left(Z_\alpha Z_X\mu\thermal{T}_6^2\right)^{1/3}\,\unit{keV}.
\end{aligned}
$$

The notes give $Z_\alpha=2$, $\mu=2$, and a temperature of about $\quantity{1.2\times10^8}{K}$. The temperature subscript on that last value resembles $6$. The value is written in kelvins.

$$
\frac{n_\alpha^2}{n({}^{8}\mathrm{Be})}
=\left(\frac{\pi\mechanical{m}_\alpha\thermal{k}\thermal{T}}{h^2}\right)^{3/2}
\mathrm{e}^{-\energy{Q}/(\thermal{k}\thermal{T})}.
$$

The final line gives $\quantity{7.367}{MeV}$ for beryllium-8 alpha capture to carbon-12 and marks the excited carbon-12 state as unstable.

The notes mark a $30\%$ uncertainty for carbon-12 alpha capture to oxygen-16. They also list oxygen-16 alpha capture to neon-20.

##### Carbon, neon, and oxygen burning

| Reaction | Energy or note |
| --- | --- |
| ${}^{12}\mathrm{C}({}^{12}\mathrm{C},\alpha){}^{20}\mathrm{Ne}$ | $\quantity{4.6}{MeV}$ |
| ${}^{20}\mathrm{Ne}(\gamma,\alpha){}^{16}\mathrm{O}$ | Endothermic |
| ${}^{12}\mathrm{C}({}^{12}\mathrm{C},p){}^{23}\mathrm{Na}$ | $\quantity{2.24}{MeV}$ |
| ${}^{16}\mathrm{O}({}^{16}\mathrm{O},\alpha){}^{28}\mathrm{Si}$ | $\quantity{9.593}{MeV}$. Silicon-28 is circled. |
| ${}^{16}\mathrm{O}({}^{16}\mathrm{O},p){}^{31}\mathrm{P}$ | $\quantity{7.68}{MeV}$ |
| ${}^{16}\mathrm{O}({}^{16}\mathrm{O},n){}^{31}\mathrm{S}$ | $\quantity{1.5}{MeV}$ |

##### Silicon burning

The notes give $\thermal{T}>3\times10^9\,\unit{K}$ and label iron-56 the “most bound nucleus.” The reaction shorthand is $X(\gamma,Y)Z$, with $n$ and $p$ circled beneath the outgoing particle label.

##### Neutrino emission

The first process is labeled “positron decay” in the notes. It shows electron–positron annihilation.

$$
e^++e^-\longrightarrow\nu_e+\bar{\nu}_e.
$$

The notes say that it is appreciable at $\thermal{k}\thermal{T}\simeq2\mechanical{m}_ec^2$ and write

$$
\gamma+\gamma\rightleftharpoons e^++e^-
\rightleftharpoons\nu_e+\bar{\nu}_e.
$$

##### Photoneutrinos

$$
e^-+\gamma\longrightarrow e^-+\nu_e+\bar{\nu}_e.
$$

The next line is labeled “axions.”

$$
\gamma+\gamma\rightleftharpoons a+\bar{a}.
$$

##### Bremsstrahlung

The process on this line is written

$$
\gamma+e^-\longrightarrow e^-+\bar{\nu}_e+\nu_e+\gamma.
$$

The notes give a neutrino luminosity $\energy{L}_\nu\simeq5\times10^{12}\energy{L}_\odot$ and point from it to an underlined duration of two days.

##### Polytropes and compact objects

The notes connect loss of heat with contraction. Electron capture is written

$$
e^-+{}^{56}\mathrm{Fe}\longrightarrow{}^{56}Y+\nu_e,
$$

where the underlined $Y$ stands for the product nucleus. The notes give $\mechanical{M}\leq10.5\mechanical{M}_\odot$ and compare this value with $9\mechanical{M}_\odot$ in Hansen.

The page gives the Heisenberg uncertainty relation, with an aside marked “Joke,” and then uses an order-of-magnitude estimate.

$$
\Delta\mechanical{x}\,\Delta\mechanical{p}\geq\frac{\hbar}{2},
\qquad
\Delta\mechanical{x}\,\Delta\mechanical{p}\simeq\hbar.
$$

$$
\begin{aligned}
\langle\Delta\mechanical{x}\rangle
&\simeq\frac{\hbar}{\Delta\mechanical{p}}
 =\frac{\hbar}{(3\mechanical{m}\thermal{k}\thermal{T})^{1/2}},\\
\frac12\mechanical{m}\langle\mechanical{v}^2\rangle
&=\frac32\thermal{k}\thermal{T},\\
\mechanical{p}&=\mechanical{m}_e\mechanical{v}
 \simeq(3\mechanical{m}\thermal{k}\thermal{T})^{1/2}.
\end{aligned}
$$

$$
\mechanical{\rho}
=\frac{\mechanical{m}_p}{(\Delta\mechanical{x})^3}
=\mechanical{m}_p
 \left(\frac{3\mechanical{m}\thermal{k}\thermal{T}}{\hbar^2}\right)^{3/2}.
$$

With $a\simeq\Delta\mechanical{x}$, the electron kinetic energy is

$$
\energy{E}_e
=\frac12\mechanical{m}_e\mechanical{v}^2
=\frac{\mechanical{p}^2}{2\mechanical{m}_e}
=\frac{\hbar^2}{2\mechanical{m}_ea^2}.
$$

The electron energy per volume is

$$
\energy{\varepsilon}
=\frac{\energy{E}_e}{a^3}
\simeq\frac{\hbar^2}{2\mechanical{m}_ea^5}.
$$

Since $\mechanical{\rho}=\mechanical{m}_p/a^3$, the notes obtain $\mechanical{\rho}\propto\energy{\varepsilon}^{3/5}$. They write $\mechanical{P}\propto\energy{\varepsilon}$ and $\mechanical{P}=w\energy{\varepsilon}$ with $w=\thermal{\gamma}-1$. For the $\thermal{\gamma}=5/3$ polytrope,

$$
\boxed{\mechanical{P}=K\mechanical{\rho}^{5/3}}.
$$

The notes call $\thermal{\gamma}$ the “polytrope index.” They then write

$$
\mechanical{P}=(\thermal{\gamma}-1)\energy{\varepsilon}
=\frac23\energy{\varepsilon}
=\frac{\hbar^2}{3\mechanical{m}_ea^5}.
$$

The last boxed expression in the source is

$$
\boxed{\mechanical{P}
=\frac{\hbar^2}{2\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mechanical{m}_p}\right)^{5/3}}.
$$

> [!note]
> The intermediate line in the source omits $\mechanical{\rho}$ from $a^{-3}=\mechanical{\rho}/\mechanical{m}_p$. The preceding pressure expression gives $3\mechanical{m}_e$ in the denominator, while the box gives $2\mechanical{m}_e$.

The margin reads “Worst time of year…” The notes then express the density in terms of particle, nucleus, and electron counts.

$$
\mechanical{\rho}
=(n+n_e)\mu\mechanical{m}_u
=n\mu_0\mechanical{m}_u
=n_e\mu_e\mechanical{m}_u.
$$

Here $n$ is the nucleus number density in this equation. The notes define $\mu$ as the mean mass per free particle in atomic mass units, and $\mu_0$ as the mean mass per free nucleus in the same units. The $\mu_e$ factor uses the mass per free electron.

The notes give $\mu_e$ as the mean mass in atomic mass units per free electron. The composition examples are as follows.

| Composition | $\mu$ | $\mu_0$ | $\mu_e$ |
| --- | --- | --- | --- |
| Ionized hydrogen | $0.5$ | $1$ | $1$ |
| Ionized helium | $1.33$ | $4$ | $2$ |
| Iron, as written | $56/29$ | $28$ | $2$ |

The first Fermi–Dirac pressure line is written

$$
\mechanical{P}
=\frac{(3\pi^2)^{2/3}}5\,\frac{\hbar}{\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mu_e\mechanical{m}_u}\right)^{5/3}.
$$

The notes equate the ideal-gas and degeneracy pressures and write

$$
\begin{aligned}
\mechanical{P}
&=\frac{\mechanical{\rho}\thermal{k}\thermal{T}}{\mu\mechanical{m}_u}
 =\frac{(3\pi)^{2/3}}5\,\frac{\hbar}{\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mu_e\mechanical{m}_u}\right)^{5/3},\\
\frac{\thermal{T}}{\mechanical{\rho}_{\mathrm{cr}}^{3/2}}
&=\frac{(2\pi^2)^{2/3}\hbar}
 {5\mechanical{m}_e\mechanical{m}_u^{2/3}\thermal{k}}\,
 \frac{\mu}{\mu_e^{5/3}}.
\end{aligned}
$$

> [!note]
> The pressure lines show $\hbar$ to the first power, while the energy scale on [[#Polytropes and compact objects|the section on Polytropes and compact objects]] uses $\hbar^2$. The written coefficient also varies across the three lines. Equating the two density powers gives $\thermal{T}\propto\mechanical{\rho}_{\mathrm{cr}}^{2/3}$, which agrees with the power of temperature in the next line.

$$
\mechanical{\rho}_{\mathrm{cr}}
=2.38\times10^{-5}
 \left(\frac{\thermal{T}/\unit{K}}{\mu}\right)^{3/2}
 \mu_e^{5/2}\,\unit{kg\,m^{-3}}.
$$

For a helium white dwarf, the notes give $\thermal{T}=10^9\,\unit{K}$ and box $\mechanical{\rho}_{\mathrm{cr}}\simeq10^9\,\unit{kg\,m^{-3}}$.

The notes begin with a speed condition and normalized variables.

$$
\mechanical{D}^2\gg\frac{2\thermal{k}\thermal{T}_0}{\mu},
\qquad
x=\frac{\thermal{T}}{\thermal{T}_0},
\qquad
y=\frac{\mechanical{\rho}}{\mechanical{\rho}_0},
\qquad
d=\frac{\mechanical{D}^2\mu}{\thermal{k}\thermal{T}_0}.
$$

For the speed condition to be dimensionally consistent, $\mu$ is a particle mass in these lines. The two equations in the normalized variables are

$$
x+dy^2=y+dy,\qquad 5x+dy^2=5+d.
$$

##### Relativistic stars

The page reviews nonrelativistic degeneracy. It writes the critical density with $\mu$ in both places, and gives $\thermal{T}\sim10^9\,\unit{K}$.

$$
\mechanical{\rho}_{\mathrm{cr}}
=2.38\times10^{-5}\,\unit{kg\,m^{-3}}
 \left(\frac{\thermal{T}/\unit{K}}{\mu}\right)^{3/2}\mu^{5/2}.
$$

The corresponding last factor on [[#Polytropes and compact objects|the section on Polytropes and compact objects]] is $\mu_e^{5/2}$.

The temperature diagram labels radiation pressure, classical gas, nonrelativistic electron degeneracy, relativistic electron degeneracy, and crystallization. A green track runs from envelope to interior to core. The blue boundary is labeled $\thermal{T}^{3/2}$ along its rising part. The vertical axis is $\log[\thermal{T}/\unit{K}]$. The horizontal scale runs from $-2$ to $12$ without a written axis title on this page.

![[Kyle Kabasares - Stellar Astrophysics - stellar matter regimes.png|**Fig. 23** Temperature diagram of stellar matter regimes, with radiation pressure, degeneracy, and crystallization boundaries marked]]

The notes estimate when the electrons become relativistic by setting $\mechanical{p}=\mechanical{m}_ec$ and $\Delta\mechanical{x}\,\Delta\mechanical{p}=\hbar$.

$$
\mechanical{\rho}
=\frac{\mechanical{m}_p}{(\Delta\mechanical{x})^3}
=\mechanical{m}_p\left(\frac{\mechanical{m}_ec}{\hbar}\right)^3
=3\times10^{10}\,\unit{kg\,m^{-3}}.
$$

The next estimate includes the electron composition factor.

$$
\mechanical{\rho}
=\frac{\mechanical{m}_u}{3\pi^2}\left(\frac{\mechanical{m}_ec}{\hbar}\right)^3\mu_e
\simeq9.74\times10^8\mu_e\,\unit{kg\,m^{-3}}.
$$

For the relativistic electron gas,

$$
\energy{E}=\mechanical{p}c=\frac{\hbar c}{a},
\qquad
\energy{\varepsilon}=\frac{\energy{E}}{a^3}=\frac{\hbar c}{a^4}.
$$

$$
\mechanical{\rho}\sim\frac{\mechanical{m}_p}{a^3},
\qquad
\mechanical{P}=\frac{\hbar c}{3a^4}
=(\thermal{\gamma}-1)\energy{\varepsilon},
\qquad
\thermal{\gamma}=\frac43.
$$

The shell sketch shows pressure force $\mechanical{F}_p$ upward and gravity $\mechanical{F}_g$ downward. In these equations, $\mechanical{M}$ denotes the enclosed mass.

$$
\frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}
=-\frac{\mechanical{G}\mechanical{M}\mechanical{\rho}}{\mechanical{r}^2},
\qquad
\mathrm{d}\mechanical{M}=4\pi\mechanical{r}^2\mechanical{\rho}\,\mathrm{d}\mechanical{r}.
$$

$$
\frac{\mathrm{d}}{\mathrm{d}\mechanical{r}}
\left[-\frac{\mechanical{r}^2}{\mechanical{G}\mechanical{\rho}}\,
      \frac{\mathrm{d}\mechanical{P}}{\mathrm{d}\mechanical{r}}\right]
=\frac{\mathrm{d}\mechanical{M}}{\mathrm{d}\mechanical{r}}
=4\pi\mechanical{r}^2\mechanical{\rho}.
$$

For $\mechanical{P}=K\mechanical{\rho}^{\thermal{\gamma}}$, the notes give $\thermal{\gamma}=5/3$ in the nonrelativistic case and $\thermal{\gamma}=4/3$ in the relativistic case.

The polytropic exponent satisfies $\thermal{\gamma}=1+1/n$. Thus $n=3/2$ for $\thermal{\gamma}=5/3$ and $n=3$ for $\thermal{\gamma}=4/3$. With central density $\mechanical{\rho}_c$, define

$$
\mechanical{\rho}=\mechanical{\rho}_c\omega^n,
\qquad
\omega=\left(\frac{\mechanical{\rho}}{\mechanical{\rho}_c}\right)^{1/n}.
$$

The radial coordinate is

$$
\mechanical{r}=az,
\qquad
a=\left[\frac{(n+1)K\mechanical{\rho}_c^{1/n-1}}{4\pi\mechanical{G}}\right]^{1/2}.
$$

The Lane–Emden equation is

$$
\frac1{z^2}\frac{\mathrm{d}}{\mathrm{d}z}
 \left(z^2\frac{\mathrm{d}\omega}{\mathrm{d}z}\right)+\omega^n=0.
$$

The notes identify $n=0$, $1$, and $5$ as cases with known analytic solutions. For $n<5$, both $\omega$ and the density reach zero at a finite radius.

The sketch compares $n=3/2$ and $n=3$. It gives $z_{3/2}=3.7$ for the first zero of the steeper curve. The $n=3$ curve reaches zero near $7$.

![[Kyle Kabasares - Stellar Astrophysics - Lane-Emden solutions.png|**Fig. 24** Lane–Emden solution sketches for polytropic indices 3/2 and 3]]

The central density scales as

$$
\mechanical{\rho}_c\propto\mechanical{R}^{2n/(1-n)}.
$$

For $n=3/2$, this gives $\mechanical{\rho}_c\propto\mechanical{R}^{-6}$.

$$
\begin{aligned}
\mechanical{M}
&=\int_0^{\mechanical{R}}4\pi\mechanical{\rho}\mechanical{r}^2\,\mathrm{d}\mechanical{r}\\
&=4\pi\mechanical{\rho}_c\int_0^{\mechanical{R}}
       \omega^n\mechanical{r}^2\,\mathrm{d}\mechanical{r}\\
&=4\pi\mechanical{\rho}_c\left(\frac{\mechanical{R}}{z_n}\right)^3
  \int_0^{z_n}\omega^n z^2\,\mathrm{d}z.
\end{aligned}
$$

The dimensionless integral is $2.71$ for $n=3/2$ (nonrelativistic) and $2.02$ for $n=3$ (relativistic).

$$
\mechanical{M}\propto\mechanical{\rho}_c\mechanical{R}^3
\propto\mechanical{R}^{(3-n)/(1-n)}.
$$

Thus $\mechanical{M}\propto\mechanical{R}^{-3}$ for $n=3/2$. For $n=3$, the mass is constant. The notes write the limiting mass as follows.

$$
\mechanical{M}
=\frac{(3\pi)^{3/2}}{2}
 \left(\frac{\hbar c}{\mechanical{G}}\right)^{3/2}
 \frac{2.02}{(\mu_e\mechanical{m}_u)^2}
=1.457\left(\frac2{\mu_e}\right)\mechanical{M}_\odot.
$$

> [!note]
> The denominator under $\hbar c$ resembles $a$ in the handwriting. It is read as $\mechanical{G}$ from the mass dimensions. The written coefficient $(3\pi)^{3/2}/2$ and the final unsquared composition factor are kept as written. The preceding expression scales as $\mu_e^{-2}$.

The page labels C, O, and He with $\mu_e=2$ and remarks that something happens if the mass exceeds the limit. It gives $\mechanical{M}=5.73\mechanical{M}_\odot$ for $\mu_e=1$ and adds “GR is needed.”

The last page gives the compactness estimate

$$
\frac{2\mechanical{G}\mechanical{M}}{\mechanical{R}c^2}=0.15,
\qquad
\mechanical{M}=1\mechanical{M}_\odot,\qquad
\mechanical{R}=10\,\unit{km}.
$$

> [!note]
> With the mass and radius written on the page, $\mechanical{G}\mechanical{M}/(\mechanical{R}c^2)\approx0.15$. The expression with the factor of two is approximately $0.30$.

## Source

Kyle Kabasares, *Stellar Astrophysics (Physics 241B, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{r}$ | $\unit{cm}$ | Radial distance | The distance from the center of the star. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | The proportionality constant in Newton's law of gravitation. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | The mass of the Sun. |
| $\energy{L}_\odot$ | $\unit{W}$ | Solar luminosity | The power radiated by the Sun. |
| $\mechanical{\rho}$ | $\unit{g\,cm^{-3}}$ | Mass density | The mass per unit volume at the given radius. |
| $\mechanical{F}$ | $\unit{dyn}$ | Force | The gravitational force on the patch. |
| $\mechanical{M}$ | $\unit{g}$ | Mass | The enclosed mass in the expression beside the force sketch. |
| $\mechanical{P}$ | $\unit{dyn\,cm^{-2}}$ | Pressure | The local force per unit area exerted by the stellar material. |
| $\mechanical{m}$ | $\unit{g}$ | Mass | The mass acted on by the force. |
| $\mechanical{M}$ | $\unit{g}$ | Total stellar mass | The upper limit of the integral over the stellar mass. |
| $\mechanical{R}$ | $\unit{cm}$ | Stellar radius | The radius of the star used in the energy scale. |
| $\energy{E}$ | $\unit{erg\,g^{-1}}$ | Specific internal energy | The internal energy per unit mass. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The local thermodynamic temperature. |
| $\thermal{\gamma}$ | 1 | Adiabatic index | The index that relates pressure and energy density in the gas model. |
| $\energy{\varepsilon}$ | $\unit{erg\,cm^{-3}}$ | Energy density | The product of mass density and specific internal energy. |
| $w$ | 1 | Equation-of-state parameter | The ratio of pressure to energy density. |
| $\energy{L}$ | $\unit{erg\,s^{-1}}$ | Stellar luminosity | The rate of energy loss from the contracting star. |
| $\energy{E}$ | $\unit{erg\,cm^{-3}}$ | Thermal energy density | The gas energy per unit volume in the temperature estimate. |
| $n$ | $\unit{cm^{-3}}$ | Particle number density | The number of gas particles per unit volume. |
| $\thermal{k}$ | $\unit{erg\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy per particle. |
| $\mu$ | $\unit{g\,mol^{-1}}$ | Mean molar mass | The mass per mole of gas particles, as used in the density conversion. |
| $\mechanical{\rho}_c$ | $\unit{g\,cm^{-3}}$ | Central mass density | The density at the center, equal to the density throughout the uniform model. |
| $n_e$ | $\unit{cm^{-3}}$ | Electron number density | The number of free electrons per unit volume. |
| $\mu_e$ | $\unit{g\,mol^{-1}}$ | Mean mass per mole of electrons | The total gas mass divided by the amount of free electrons. |
| $X$ | 1 | Hydrogen mass fraction | The fraction of stellar mass in hydrogen. |
| $Y$ | 1 | Helium mass fraction | The fraction of stellar mass in helium. |
| $Z$ | 1 | Metallicity | The fraction of stellar mass in elements heavier than helium. |
| $\energy{\epsilon}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific energy production rate | The power generated per unit mass of stellar material. |
| $\energy{\epsilon}_0$ | — | Energy production coefficient | The coefficient of the density and temperature power law. Its units depend on the exponents. |
| $D$ | $\unit{cm^2\,s^{-1}}$ | Radiative diffusion coefficient | The proportionality factor between energy flux and the radiation energy density gradient. |
| $a$ | $\unit{erg\,cm^{-3}\,K^{-4}}$ | Radiation constant | The constant in the radiation energy density $a\thermal{T}^4$. |
| $c$ | $\unit{cm\,s^{-1}}$ | Speed of light | The speed of light in the radiative diffusion relation. |
| $\mechanical{\rho}_0$ | $\unit{g\,cm^{-3}}$ | Reference density | The density at the corresponding position in the reference star. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Streaming speed | The speed used in the free-streaming distance integral. |
| $y$ | 1 | Radius scale factor | The ratio of the rescaled radius to the original radius. |
| $z$ | 1 | Redshift | The horizontal coordinate of the DSNB sketch. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Position uncertainty | The spatial uncertainty of an electron in the degeneracy argument. |
| $\Delta\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The momentum uncertainty in the degeneracy argument. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the uncertainty relation. |
| $N$ | 1 | Particle count | The number of particles in the gas volume. |
| $\energy{E}$ | $\unit{MeV}$ | Electron energy | The energy plotted in the collapse sketch. |
| $\mechanical{m}_e$ | $\unit{kg}$ | Electron mass | The particle mass on the electron side of the degeneracy comparison. |
| — | $\unit{kg}$ | Chandrasekhar mass | The mass limit noted for electron degeneracy support. |
| $Z$ | 1 | Proton number | The number of protons in the nucleus in the neutron-drip diagram. |
| $N$ | 1 | Neutron number | The number of neutrons in the nucleus in the neutron-drip diagram. |
| $\mechanical{R}$ | $\unit{m}$ | Nuclear radius scale | The length scale given with the nuclear density. |
| $\mechanical{m}_p$, $\mechanical{M}_p$ | $\unit{MeV\,c^{-2}}$ | Proton mass | The proton mass in the nucleon-mass estimate. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Projectile speed | The speed entering the incident flux and rate. |
| $n_\alpha$, $n_X$, $n_\beta$ | $\unit{cm^{-3}}$ | Projectile and target number densities | The number of particles per unit volume for the incident and target species. |
| $\energy{\epsilon}$ | $\unit{MeV}$ | Collision energy | The integration variable in the reaction rate average. |
| $\mechanical{m}$ | $\unit{kg}$ | Reduced mass | The reduced mass of the projectile–target pair. |
| $\mechanical{m}_\alpha$, $\mechanical{m}_X$ | $\unit{kg}$ | Projectile and target masses | The two masses used in the reduced mass. |
| $\mu$ | 1 | Reduced mass in atomic mass units | The numerical mass in the cross-section conversion to barns. |
| $s$ | $\unit{m}$ | Impact parameter | The transverse offset of the incoming trajectory from the target. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Relative momentum | The momentum used with the impact parameter to obtain the angular momentum. |
| $\thermal{T}_6$ | 1 | Temperature in millions of kelvins | The numerical temperature that labels the integrand curves. |
| $X_{\mathrm{CNO}}$ | 1 | CNO mass fraction | The combined abundance of carbon, nitrogen, and oxygen used in the normalization. |
| $\energy{\epsilon}_{\mathrm{pp}}$, $\energy{\epsilon}_{\mathrm{CNO}}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific burning rates | The energy production rates per unit mass for pp and CNO burning. |
| $\energy{Q}$ | $\unit{keV}$ | Reaction energy | The energy change of the first helium-burning step. |
| $n({}^{8}\mathrm{Be})$ | $\unit{cm^{-3}}$ | Beryllium-8 number density | The density of the intermediate nucleus in the helium-burning relation. |
| $h$ | $\unit{J\,s}$ | Planck constant | The action constant written in the equilibrium prefactor. |
| $\energy{\epsilon}_0$ | $\unit{keV}$ | Characteristic collision energy | The energy scale written in keV on the second line of the helium-burning estimate. |
| $\energy{L}_\nu$ | $\unit{erg\,s^{-1}}$ | Neutrino luminosity | The power carried away by neutrinos. |
| $\energy{E}_e$ | $\unit{J}$ | Electron kinetic energy | The nonrelativistic kinetic energy in the degeneracy estimate. |
| $a$ | $\unit{m}$ | Confinement length | The characteristic electron spacing estimated from position uncertainty. |
| $K$ | $\unit{dyn\,cm^3\,g^{-5/3}}$ | Polytropic constant | The coefficient of the density power law for the nonrelativistic gas. |
| $\mechanical{m}_u$ | $\unit{kg}$ | Atomic mass constant | The mass unit used in the composition formula. |
| $\mu$, $\mu_0$, $\mu_e$ | 1 | Mass per particle, nucleus, or electron in atomic mass units | The numerical mass factors in the three equivalent density expressions. |
| $n$ | $\unit{cm^{-3}}$ | Nucleus number density | The nucleus count per volume in the compact-object composition formula. |
| $\mechanical{\rho}_{\mathrm{cr}}$ | $\unit{kg\,m^{-3}}$ | Critical density | The density at which the ideal-gas and degeneracy pressures are equal in the estimate. |
| $\mechanical{D}$ | $\unit{m\,s^{-1}}$ | Speed scale | The speed inferred from the squared term in the opening condition. |
| $\thermal{T}_0$ | $\unit{K}$ | Reference temperature | The temperature used to normalize the thermal terms. |
| $\mu$ | $\unit{kg}$ | Particle mass scale | The mass in the speed condition on [[#Relativistic stars\|the section on Relativistic stars]]. |
| $\mechanical{F}_p$ | $\unit{dyn}$ | Pressure force | The outward force due to the pressure difference across the shell. |
| $\mechanical{F}_g$ | $\unit{dyn}$ | Gravitational force | The inward gravitational force on the shell. |
| $n$ | 1 | Polytropic index | The index that determines the density profile and the equation-of-state exponent. |
| $a$ | $\unit{m}$ | Polytropic length scale | The factor that converts the normalized coordinate to radius. |
