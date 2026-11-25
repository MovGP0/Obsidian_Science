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

The power-law expression for energy generation is repeated. The next line gives the Gamow peak energy $\energy{E}_0$ in keV. The notes use the symbol $\energy{\epsilon}_0$ for it.

$$
\begin{aligned}
\energy{\epsilon}&=\energy{\epsilon}_0\mechanical{\rho}^{\lambda}\thermal{T}^{\nu},\\
\energy{E}_0&=1.22\left(Z_\alpha^2 Z_X^2\mu\thermal{T}_6^2\right)^{1/3}\,\unit{keV}.
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
=(n_{\mathrm{nuc}}+n_e)\mu\mechanical{m}_u
=n_{\mathrm{nuc}}\mu_0\mechanical{m}_u
=n_e\mu_e\mechanical{m}_u.
$$

Here $n_{\mathrm{nuc}}$ is the nucleus number density. The notes define $\mu$ as the mean mass per free particle in atomic mass units, and $\mu_0$ as the mean mass per free nucleus in the same units. The $\mu_e$ factor uses the mass per free electron.

The notes give $\mu_e$ as the mean mass in atomic mass units per free electron. The composition examples are as follows.

| Composition | $\mu$ | $\mu_0$ | $\mu_e$ |
| --- | --- | --- | --- |
| Ionized hydrogen | $0.5$ | $1$ | $1$ |
| Ionized helium | $1.33$ | $4$ | $2$ |
| Fully ionized iron-56 | $56/27pprox2.07$ | $56$ | $56/26pprox2.15$ |

The first Fermi–Dirac pressure line is written

$$
\mechanical{P}
=\frac{(3\pi^2)^{2/3}}5\,\frac{\hbar^2}{\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mu_e\mechanical{m}_u}\right)^{5/3}.
$$

The notes equate the ideal-gas and degeneracy pressures and write

$$
\begin{aligned}
\mechanical{P}
&=\frac{\mechanical{\rho}\thermal{k}\thermal{T}}{\mu\mechanical{m}_u}
 =\frac{(3\pi^2)^{2/3}}5\,\frac{\hbar^2}{\mechanical{m}_e}
 \left(\frac{\mechanical{\rho}}{\mu_e\mechanical{m}_u}\right)^{5/3},\\
\frac{\thermal{T}}{\mechanical{\rho}_{\mathrm{cr}}^{2/3}}
&=\frac{(3\pi^2)^{2/3}\hbar^2}
 {5\mechanical{m}_e\mechanical{m}_u^{2/3}\thermal{k}}\,
 \frac{\mu}{\mu_e^{5/3}}.
\end{aligned}
$$

> [!note]
> The source pressure lines show $\hbar$ to the first power, a coefficient that varies across the three lines, and $\mechanical{\rho}_{\mathrm{cr}}^{3/2}$. The lines above use the correct form with $\hbar^2$ and $(3\pi^2)^{2/3}$. Equating the two density powers gives $\thermal{T}\propto\mechanical{\rho}_{\mathrm{cr}}^{2/3}$, which agrees with the power of temperature in the next line.

$$
\mechanical{\rho}_{\mathrm{cr}}
=2.38\times10^{-5}
 \left(\frac{\thermal{T}/\unit{K}}{\mu}\right)^{3/2}
 \mu_e^{5/2}\,\unit{kg\,m^{-3}}.
$$

For a helium white dwarf, the notes give $\thermal{T}=10^9\,\unit{K}$ and box $\mechanical{\rho}_{\mathrm{cr}}\simeq10^9\,\unit{kg\,m^{-3}}$. With $\mu=4/3$ and $\mu_e=2$, the formula gives $\mechanical{\rho}_{\mathrm{cr}}\approx2.8\times10^9\,\unit{kg\,m^{-3}}$.

The notes begin with a speed condition and normalized variables.

$$
\mechanical{D}^2\gg\frac{2\thermal{k}\thermal{T}_0}{\mechanical{m}},
\qquad
x=\frac{\thermal{T}}{\thermal{T}_0},
\qquad
y=\frac{\mechanical{\rho}}{\mechanical{\rho}_0},
\qquad
d=\frac{\mechanical{D}^2\mechanical{m}}{\thermal{k}\thermal{T}_0}.
$$

The notes write $\mu$ in these lines. For the speed condition to be dimensionally consistent, it is a particle mass, written here as $\mechanical{m}$. The two equations in the normalized variables are

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
\mechanical{r}=\mechanical{\ell}z,
\qquad
\mechanical{\ell}=\left[\frac{(n+1)K\mechanical{\rho}_c^{1/n-1}}{4\pi\mechanical{G}}\right]^{1/2}.
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
=\frac{\sqrt{3\pi}}{2}
 \left(\frac{\hbar c}{\mechanical{G}}\right)^{3/2}
 \frac{2.02}{(\mu_e\mechanical{m}_u)^2}
=1.457\left(\frac2{\mu_e}\right)^2\mechanical{M}_\odot.
$$

> [!note]
> The denominator under $\hbar c$ resembles $a$ in the handwriting. It is read as $\mechanical{G}$ from the mass dimensions. The source writes the coefficient as $(3\pi)^{3/2}/2$ and the composition factor without the square. The correct coefficient is $\sqrt{3\pi}/2$, and the mass scales as $\mu_e^{-2}$.

The page labels C, O, and He with $\mu_e=2$ and remarks that something happens if the mass exceeds the limit. It gives $\mechanical{M}=5.73\mechanical{M}_\odot$ for $\mu_e=1$ and adds “GR is needed.” The corrected formula gives $\mechanical{M}\approx5.83\mechanical{M}_\odot$ for $\mu_e=1$.

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
| $\energy{\epsilon}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific energy production rate | The power generated per unit mass of stellar material. |
| $\energy{\epsilon}_0$ | — | Energy production coefficient | The coefficient of the density and temperature power law. Its units depend on the exponents. |
| $\energy{\epsilon}_{\mathrm{pp}}$, $\energy{\epsilon}_{\mathrm{CNO}}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific burning rates | The energy production rates per unit mass for pp and CNO burning. |
| $\lambda$, $\nu$, $\nu_{\mathrm{CNO}}$ | 1 | Power-law exponents | The density and temperature exponents of the energy production rate. |
| $X$ | 1 | Hydrogen mass fraction | The fraction of stellar mass in hydrogen. |
| $X_{\mathrm{CNO}}$ | 1 | CNO mass fraction | The combined abundance of carbon, nitrogen, and oxygen used in the normalization. |
| $\energy{E}_0$ | $\unit{keV}$ | Gamow peak energy | The most effective collision energy for the charged-particle reaction. |
| $Z_\alpha$, $Z_X$ | 1 | Charge numbers | The proton numbers of the alpha particle and the target nucleus. |
| $\mu$ | 1 | Mass number of the reduced mass | The reduced mass in atomic mass units in the Gamow-energy formula. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The local thermodynamic temperature. |
| $\thermal{T}_6$ | 1 | Temperature in millions of kelvins | The numerical temperature $\thermal{T}/(10^6\,\unit{K})$. |
| $\energy{Q}$ | $\unit{keV}$ | Reaction energy | The energy released or absorbed by a reaction step. |
| $n_X$, $n_\alpha$, $n({}^{8}\mathrm{Be})$ | $\unit{m^{-3}}$ | Nuclide number densities | The number densities in the helium-burning equilibrium relation. |
| $\mechanical{m}_\alpha$ | $\unit{kg}$ | Alpha-particle mass | The mass in the equilibrium prefactor. |
| $\thermal{k}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy per particle. |
| $h$, $\hbar$ | $\unit{J\,s}$ | Planck constant and reduced Planck constant | The quantum of action in the equilibrium prefactor and the uncertainty relation. |
| $\energy{L}_\nu$ | $\unit{W}$ | Neutrino luminosity | The power carried away by neutrinos. |
| $\energy{L}_\odot$ | $\unit{W}$ | Solar luminosity | The power radiated by the Sun. |
| $\mechanical{M}$ | $\unit{kg}$ | Mass | The stellar mass, the enclosed mass in the structure equations, or the limiting mass. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | The mass of the Sun. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Position uncertainty | The spatial uncertainty of an electron in the degeneracy argument. |
| $\Delta\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The momentum uncertainty in the degeneracy argument. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Electron momentum | The momentum of an electron in the degeneracy estimate. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Electron speed | The speed of an electron in the kinetic-energy estimate. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The particle mass in the thermal momentum estimate and in the speed condition. |
| $\mechanical{m}_e$ | $\unit{kg}$ | Electron mass | The mass of the electron. |
| $\mechanical{m}_p$ | $\unit{kg}$ | Proton mass | The mass per electron in the order-of-magnitude density estimate. |
| $\mechanical{m}_u$ | $\unit{kg}$ | Atomic mass constant | The mass unit used in the composition formula. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Mass density | The mass per unit volume of the stellar material. |
| $a$ | $\unit{m}$ | Confinement length | The characteristic electron spacing estimated from position uncertainty. |
| $\energy{E}_e$, $\energy{E}$ | $\unit{J}$ | Electron energy | The nonrelativistic or relativistic energy of a confined electron. |
| $\energy{\varepsilon}$ | $\unit{J\,m^{-3}}$ | Energy density | The electron energy per unit volume. |
| $\mechanical{P}$ | $\unit{Pa}$ | Pressure | The local pressure of the stellar material. |
| $w$ | 1 | Equation-of-state parameter | The ratio of pressure to energy density. |
| $\thermal{\gamma}$ | 1 | Polytropic exponent | The exponent in $\mechanical{P}=K\mechanical{\rho}^{\thermal{\gamma}}$. |
| $K$ | — | Polytropic constant | The coefficient of the density power law. Its unit depends on $\thermal{\gamma}$. |
| $n_{\mathrm{nuc}}$ | $\unit{m^{-3}}$ | Nucleus number density | The number of nuclei per unit volume in the composition formula. |
| $n_e$ | $\unit{m^{-3}}$ | Electron number density | The number of free electrons per unit volume. |
| $\mu$, $\mu_0$, $\mu_e$ | 1 | Mass per particle, nucleus, or electron in atomic mass units | The numerical mass factors in the three equivalent density expressions. |
| $\mechanical{\rho}_{\mathrm{cr}}$ | $\unit{kg\,m^{-3}}$ | Critical density | The density at which the ideal-gas and degeneracy pressures are equal. |
| $\mechanical{D}$ | $\unit{m\,s^{-1}}$ | Speed scale | The speed in the opening condition of the normalized equations. |
| $\thermal{T}_0$ | $\unit{K}$ | Reference temperature | The temperature used to normalize the thermal terms. |
| $\mechanical{\rho}_0$ | $\unit{kg\,m^{-3}}$ | Reference density | The density used to normalize the density. |
| $x$, $y$, $d$ | 1 | Normalized variables | The normalized temperature, normalized density, and speed parameter. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | The speed of light in the relativistic estimates. |
| $\mechanical{F}_p$ | $\unit{N}$ | Pressure force | The outward force due to the pressure difference across the shell. |
| $\mechanical{F}_g$ | $\unit{N}$ | Gravitational force | The inward gravitational force on the shell. |
| $\mechanical{r}$ | $\unit{m}$ | Radial distance | The distance from the center of the star. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | The proportionality constant in Newton's law of gravitation. |
| $n$ | 1 | Polytropic index | The index that sets the density profile, with $\thermal{\gamma}=1+1/n$. |
| $\mechanical{\rho}_c$ | $\unit{kg\,m^{-3}}$ | Central mass density | The density at the center of the polytrope. |
| $\omega$ | 1 | Lane–Emden variable | The dimensionless function with $\mechanical{\rho}=\mechanical{\rho}_c\omega^n$. |
| $\mechanical{\ell}$ | $\unit{m}$ | Polytropic length scale | The factor that converts the Lane–Emden coordinate to radius. |
| $z$, $z_n$ | 1 | Lane–Emden coordinate | The dimensionless radius and its value at the first zero of $\omega$. |
| $\mechanical{R}$ | $\unit{m}$ | Stellar radius | The radius of the star. |
