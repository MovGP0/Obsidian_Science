---
title: "Thermonuclear rates and hydrogen-burning chains"
---

> [!TLDR]
> Connect reaction cross sections and thermal distributions with stellar burning rates and the proton–proton and CNO chains.

## Worked lecture material

##### Stellar energy sources

$$
\frac{\partial\energy{L}_r}{\partial\mechanical{M}_r}=\energy{\epsilon}.
$$

The shell sketch gives $\energy{\epsilon}\,\Delta\mechanical{M}_r=\Delta\energy{L}_r$. The time-dependent energy balance is

$$
\frac{\mathrm{d}\thermal{Q}}{\mathrm{d}t}
=\frac{\partial\energy{u}}{\partial t}
+\mechanical{P}\frac{\partial}{\partial t}\left(\frac1{\mechanical{\rho}}\right)
=\energy{\epsilon}-\frac{\partial\energy{L}_r}{\partial\mechanical{M}_r}.
$$

The source brackets the two terms in the middle and labels them $\energy{\epsilon}_{\mathrm{grav}}$. The last formula on the page uses the opposite sign for that contribution.

The three adiabatic exponents are defined by

$$
\begin{aligned}
\thermal{\Gamma}_1
&=\left(\frac{\partial\ln\mechanical{P}}{\partial\ln\mechanical{\rho}}\right)_{\mathrm{ad}}
=-\left(\frac{\partial\ln\mechanical{P}}{\partial\ln(1/\mechanical{\rho})}\right)_{\mathrm{ad}},\\
\frac{\thermal{\Gamma}_2}{\thermal{\Gamma}_2-1}
&=\left(\frac{\partial\ln\mechanical{P}}{\partial\ln\thermal{T}}\right)_{\mathrm{ad}},\\
\thermal{\Gamma}_3-1
&=\left(\frac{\partial\ln\thermal{T}}{\partial\ln\mechanical{\rho}}\right)_{\mathrm{ad}}.
\end{aligned}
$$

For a relativistic gas, the notes set $\thermal{\Gamma}_1=\thermal{\Gamma}_2=\thermal{\Gamma}_3=4/3$. The gravitational energy term is written

$$
\energy{\epsilon}_{\mathrm{grav}}
=-\frac{\mechanical{P}}{\mechanical{\rho}(\thermal{\Gamma}_3-1)}
\left[
\frac{\partial\ln\mechanical{P}}{\partial t}
-\thermal{\Gamma}_1\frac{\partial\ln\mechanical{\rho}}{\partial t}
\right].
$$

For an adiabatic change, $\mechanical{P}\propto\mechanical{\rho}^{\thermal{\Gamma}_1}$. The notes write a modified scaling $\mechanical{P}\propto\mechanical{\rho}^{\thermal{\Gamma}_1-\delta}$ and obtain

$$
\energy{\epsilon}_{\mathrm{grav}}
=\frac{\delta\mechanical{P}}{\mechanical{\rho}(\thermal{\Gamma}_3-1)}
\frac{\partial\ln\mechanical{\rho}}{\partial t}>0.
$$

Here $\delta\mechanical{P}$ in the numerator is the product of the exponent shift $\delta$ and the pressure $\mechanical{P}$. The homologous ratios are

$$
\frac{\mechanical{\rho}}{\mechanical{\rho}_0}
=\left(\frac{\mechanical{R}}{\mechanical{R}_0}\right)^{-3},
\qquad
\frac{\mechanical{P}}{\mechanical{P}_0}
=\left(\frac{\mechanical{R}}{\mechanical{R}_0}\right)^{-4}.
$$

$$
\energy{L}(t)
=-\int_{\mechanical{M}}
 \frac{\mechanical{P}_0}{\mechanical{\rho}_0}
 \frac{\mechanical{R}_0}{\mechanical{R}^{2}(t)}
 \frac{\mathrm{d}\mechanical{R}}{\mathrm{d}t}
 \left(\frac{3\thermal{\Gamma}_1-4}{\thermal{\Gamma}_3-1}\right)
 \mathrm{d}\mechanical{M}_r.
$$

If $\thermal{\Gamma}_1=4/3$, then $\energy{L}(t)=0$ in this model.

##### 6.2 Thermonuclear energy sources

The references listed are Clayton (1968), Arnett (1996), and Goodstein's *States of Matter*. The notes say that Clayton can be used to learn thermodynamics and statistical mechanics.

##### Nuclear reactions

$$
\alpha+X\longrightarrow Z^*\longrightarrow Y+B.
$$

The intermediate $Z^*$ is an excited compound nucleus.

The example begins with proton capture on boron-11.

$$
p+{}^{11}\mathrm{B}\longrightarrow{}^{12}\mathrm{C}^{*}.
$$

The notes list possible outcomes for the excited carbon-12 nucleus.

$$
{}^{12}\mathrm{C}^{*}\longrightarrow
\begin{cases}
{}^{12}\mathrm{C}^{**}+\gamma,\\
{}^{11}\mathrm{B}+p,\\
{}^{11}\mathrm{C}+n,\\
{}^{12}\mathrm{N}+e^-+\bar{\nu}_e,\\
{}^{8}\mathrm{Be}+\alpha,\\
\text{other channels.}
\end{cases}
$$

The energy-level sketch shows several bound levels and a dashed level near the top of a potential well. It marks intervals of $\quantity{8}{MeV}$ and $\quantity{25}{MeV}$ and labels neutrons and protons near the bottom.

For a reaction channel $i$,

$$
\energy{\Gamma}_i\tau_i=\hbar,
\qquad
P_i=\frac{1/\tau_i}{\sum_j(1/\tau_j)}
=\frac{\tau}{\tau_i}=\frac{\energy{\Gamma}_i}{\energy{\Gamma}}.
$$

The lower binding-energy sketch marks iron-56 near the peak and uranium-238 on the descending side. The vertical axis runs from about $6$ to $9$ on the nuclear binding energy per nucleon scale. The fusion arrow points toward the peak from the light nuclei. The fission arrow points back toward it from the heavy nuclei. The unit annotation appears to read “BeV,” while the values fit the MeV scale for binding energy per nucleon.

The binding energy is the mass difference multiplied by $c^2$.

$$
\energy{B}_e
=\bigl(\text{sum of constituent masses}-\text{mass of nucleus}\bigr)c^2.
$$

The notes give the following nuclear scales.

$$
\begin{aligned}
\mechanical{R}&\simeq1.4\times10^{-15}\,\unit{m},\\
\mechanical{\rho}_{\mathrm{nuc}}&\simeq1.5\times10^{14}\,\unit{g\,cm^{-3}},\\
\mechanical{M}_n&\sim\mechanical{M}_p\sim940\,\unit{MeV\,c^{-2}}.
\end{aligned}
$$

##### Nuclear reaction rates

The cross section $\sigma_{\alpha\beta}(\mechanical{v})$ is the number of reactions per unit time per target $X$, divided by the incident flux of monoenergetic projectiles $\alpha$. Its unit is $\unit{cm^2}$.

$$
{}^{12}\mathrm{C}(p,\gamma){}^{13}\mathrm{N},
\qquad
{}^{12}\mathrm{C}+p\longrightarrow{}^{13}\mathrm{N}^{*}
\longrightarrow{}^{13}\mathrm{N}^{**}+\gamma.
$$

For projectile number density $n_\alpha$, the incident flux is $n_\alpha\mechanical{v}$. For target density $n_X$,

$$
r_{\alpha\beta}(\mechanical{v})
=n_\alpha n_X\sigma_{\alpha\beta}(\mechanical{v})\,\mechanical{v}.
$$

Averaging over the energies gives

$$
r_{\alpha\beta}=n_\alpha n_X\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
\qquad (\unit{cm^{-3}\,s^{-1}}).
$$

The handwritten aside beside the unit reads “DON'T NEED UNITS??”

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\frac{\displaystyle\int_0^\infty\psi(\energy{E})\,
   \sigma_{\alpha\beta}\mechanical{v}\,\mathrm{d}\energy{E}}
{\displaystyle\int_0^\infty\psi(\energy{E})\,\mathrm{d}\energy{E}}.
$$

The thermal average of the rate coefficient is

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\left(\frac8{\pi\mechanical{m}}\right)^{1/2}
(\thermal{k}\thermal{T})^{-3/2}
\int_0^\infty
\sigma_{\alpha\beta}(\energy{E})\,
e^{-\energy{E}/(\thermal{k}\thermal{T})}\,
\energy{E}\,\mathrm{d}\energy{E},
\qquad
\mechanical{m}=\frac{\mechanical{m}_\alpha\mechanical{m}_X}
{\mechanical{m}_\alpha+\mechanical{m}_X}.
$$

The notes write the cross section as

$$
\sigma_{\alpha\beta}(\energy{E})
=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
\frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}{\energy{\Gamma}^2}
f(\energy{E}).
$$

They mark the ratio of widths as a joint probability and call $f(\energy{E})$ the shape factor. The vector $\mechanical{\vec{L}}$ is the entrance-channel angular momentum.

$$
\pi\signal{\bar{\lambda}}^{\,2}
=\frac{\pi\hbar^2}{2\energy{E}\mechanical{m}}
=\frac{0.657}{[\energy{E}/\unit{MeV}]\mu}\,\unit{barn},
\qquad
1\,\unit{barn}=10^{-24}\,\unit{cm^2}.
$$

The sketch shows projectile $\alpha$ approaching along a line offset from the target $X$. The offset $s$ is labeled the “impact factor.” The angular momentum relation is $s\mechanical{p}=\ell\hbar$.

The impact parameter for angular momentum index $\ell$ is $s_\ell=\ell\hbar/\mechanical{p}$. The cross section of the corresponding annulus is

$$
\sigma_{\ell,\ell+1}
=\pi(s_{\ell+1}^2-s_\ell^2)
=\pi\signal{\bar{\lambda}}^{\,2}(2\ell+1).
$$

The notes say that $f(\energy{E})$ accounts for the other physics. Near a resonance,

$$
f(\energy{E})
=\frac{\energy{\Gamma}^2}
 {(\energy{E}-\energy{E}_r)^2+(\energy{\Gamma}/2)^2}.
$$

The square on the energy difference follows the Breit–Wigner formula farther down the page. It is omitted in the first handwritten denominator. The resonance energy satisfies

$$
\mechanical{m}_{Z^*}c^2+\energy{E}^*
=\mechanical{m}_\alpha c^2+\mechanical{m}_Xc^2+\energy{E}_r.
$$

##### Breit–Wigner cross section

$$
\sigma_{\alpha\beta}
=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
\frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}
 {(\energy{E}-\energy{E}_r)^2+(\energy{\Gamma}/2)^2}.
$$

The handwritten $(2\ell+1)$ sits above the baseline beside $g$. The product follows the expression on [[#Nuclear reaction rates|the section on Nuclear reaction rates]]. The next line reads “Texas accent lol.”

##### Nonresonant stellar energy sources

Far from resonance, $f(\energy{E})$ is constant or varies slowly. The example is $p+p$.

The barrier penetration probability is proportional to $\mathrm{e}^{-2\pi\eta}$. In the source's electrostatic unit convention,

$$
\eta
=\frac{Z_\alpha Z_X\electric{e}^2}{\hbar\mechanical{v}}
=0.1574\,Z_\alpha Z_X
 \left(\frac{\mu}{\energy{E}/\unit{MeV}}\right)^{1/2}.
$$

The nonresonant cross section is

$$
\sigma_{\alpha\beta}(\energy{E})
=\frac{S(\energy{E})}{\energy{E}}\,
  \mathrm{e}^{-2\pi\eta}.
$$

The notes repeat the thermal average, reaction rate, and channel formula.

$$
\begin{aligned}
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
&=\left(\frac8{\pi\mechanical{m}}\right)^{1/2}
(\thermal{k}\thermal{T})^{-3/2}
\int\sigma_{\alpha\beta}(\energy{E})
  \mathrm{e}^{-\energy{E}/(\thermal{k}\thermal{T})}
  \energy{E}\,\mathrm{d}\energy{E},\\
r_{\alpha\beta}&=n_\alpha n_X\langle\sigma\mechanical{v}\rangle_{\alpha\beta},\\
\sigma_{\alpha\beta}(\energy{E})
&=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
  \frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}{\energy{\Gamma}^2}
  f(\energy{E}).
\end{aligned}
$$

The exponential factor in the nonresonant formula is labeled “Gamow penetrability.” The next line is written

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\frac{1.6\times10^{-15}\,\unit{cm^3\,s^{-1}}}
 {\mu^{1/2}(\thermal{k}\thermal{T})^{3/2}}
\,S
\int_0^\infty
 \mathrm{e}^{-\left(\energy{E}/(\thermal{k}\thermal{T})+
                    b/\energy{E}^{1/2}\right)}
 \,\mathrm{d}\energy{E}.
$$

Here $S$ is taken as constant and is in $\unit{MeV\,barn}$, the energies are in $\unit{MeV}$, and $\mu$ is the reduced mass in atomic mass units. These conventions give the prefactor from $(8/(\pi\mechanical{m}))^{1/2}$. The handwritten line has $\mu$ in place of $\mu^{1/2}$ and does not show the factor $S$. The example is carbon-12 proton capture to nitrogen-13. The sketch shows a larger integrand peak for $\thermal{T}_6=22$ and a smaller peak for $\thermal{T}_6=20$, with a reference line near the larger peak. The subscript is read as $6$ from the stellar temperature scale. The notes give $\energy{E}\simeq30\,\unit{keV}$ and $\langle\sigma\mechanical{v}\rangle\sim\thermal{T}^{17}$.

The margin asks why nuclear physics is “dying” if funding is adequate, answers “It's sociological!”, and adds “Californium” and “Communism.”

The resonant cross section follows the energy dependence

$$
\sigma_{\alpha\beta}\sim
\left[(\energy{E}-\energy{E}_r)^2+
      (\energy{\Gamma}/2)^2\right]^{-1}.
$$

The upper plot gives $\sigma_{\alpha\beta}$ against laboratory proton energy $\energy{E}_p$. It marks the peak with $\quantity{0.460}{MeV}$ and shows cross-section scale marks of $10^{-12}$ and $10^{-4}$.

![[Kyle Kabasares - Stellar Astrophysics - proton cross section at the resonance.png|**Fig. 19** Laboratory proton cross section with a resonance near 0.460 MeV]]

The lower plot gives $N_A\langle\sigma\mechanical{v}\rangle$ against a temperature variable read as $\thermal{T}_9$. The temperature marks are $10^{-2}$ and $10^1$. The rate marks are $10^{-8}$ and $10^4$. The curve flattens briefly and then rises into the region marked “resonance.”

![[Kyle Kabasares - Stellar Astrophysics - temperature dependence of the reaction rate.png|**Fig. 20** Temperature dependence of the molar reaction rate, with a resonance contribution marked]]

The notes announce two numerical homework problems and add “emails everyday!”

$$
\alpha+X\longrightarrow Y^*\longrightarrow Y+\beta.
$$

For $A>60$, the notes emphasize neutron capture. The helium-burning neutron source is carbon-13 alpha capture to oxygen-16, with an arrow from the emitted neutron to capture in the $s$-process.

$$
\frac{\mathrm{d}n_A}{\mathrm{d}t}
=-n_n n_A\langle\sigma\mechanical{v}\rangle_A
+n_n n_{A-1}\langle\sigma\mechanical{v}\rangle_{A-1}.
$$

The first term removes nuclei of mass number $A$. The second adds nuclei through capture on mass number $A-1$. The sketch of $n_A$ versus $A$ shows three levels that decrease in steps.

##### Weak interactions

$$
\begin{aligned}
{}^{13}\mathrm{N}&\longrightarrow{}^{13}\mathrm{C}+e^++\nu_e,\\
e^-+{}^{7}\mathrm{Be}&\longrightarrow{}^{7}\mathrm{Li}+\nu_e,\\
e^-+X&\longrightarrow Y+\nu_e.
\end{aligned}
$$

The last reaction is marked “important at high $\mechanical{P}$.”

The top of the page reads “Fuller + '82 + '83” and mentions a story about Kev's PhD advisor and a film degree. The next lines mention Livermore and Los Alamos, quote “Its mission is not science,” and say “DM is not lethal.” A crossed-out line about NASA funding “ZERO-POINT ENERGY” points to *Scientific American*. “Inertial Thrust/EM Drive” and “Quack Science” appear below it.

##### Proton–proton chains

##### Pp I

$$
\begin{aligned}
{}^{1}\mathrm{H}+{}^{1}\mathrm{H}&\longrightarrow{}^{2}\mathrm{H}+e^++\nu_e,\\
{}^{2}\mathrm{H}+{}^{1}\mathrm{H}&\longrightarrow{}^{3}\mathrm{He}+\gamma,\\
{}^{3}\mathrm{He}+{}^{3}\mathrm{He}&\longrightarrow{}^{4}\mathrm{He}
  +{}^{1}\mathrm{H}+{}^{1}\mathrm{H}.
\end{aligned}
$$

##### Pp II

$$
\begin{aligned}
{}^{3}\mathrm{He}+{}^{4}\mathrm{He}&\longrightarrow{}^{7}\mathrm{Be}+\gamma,\\
{}^{7}\mathrm{Be}+e^-&\longrightarrow{}^{7}\mathrm{Li}+\nu_e\;(+\gamma),\\
{}^{7}\mathrm{Li}+{}^{1}\mathrm{H}&\longrightarrow{}^{4}\mathrm{He}+{}^{4}\mathrm{He}.
\end{aligned}
$$

The second helium superscript on the last handwritten line is faint. Conservation of mass number gives $4$.

The line between the branches reads “GF in Chicago Story.”

##### Pp III

$$
\begin{aligned}
{}^{7}\mathrm{Be}+{}^{1}\mathrm{H}&\longrightarrow{}^{8}\mathrm{B}+\gamma,\\
{}^{8}\mathrm{B}&\longrightarrow{}^{8}\mathrm{Be}+e^++\nu_e,\\
{}^{8}\mathrm{Be}&\longrightarrow{}^{4}\mathrm{He}+{}^{4}\mathrm{He}.
\end{aligned}
$$

The last handwritten line abbreviates the parent as “8 B.” The product on the preceding line indicates beryllium-8.

The opening asides read “Monster salary,” “Everyone I know is gone now,” and “Yuri Shi man.”

The isotope chart plots proton number $Z$ against mass number $A=1,\ldots,8$. Rows are labeled H, He, Li, Be, and B. The paths for pp I, pp II, and pp III are blue, red, and green.

![[Kyle Kabasares - Stellar Astrophysics - proton-proton chain isotope paths.png|**Fig. 21** Isotope paths of the three proton–proton branches]]

The effective pp energy in the notes is $\energy{Q}_{\mathrm{eff,pp}}\simeq13\,\unit{MeV}$.

##### CNO cycles

Arrows link C and N in both directions and N and O in both directions. The notes call the three-element diagram a “tricycle” or “tri-cycle,” and the C–N part a “bicycle” or “bi-cycle.”

$$
\begin{aligned}
{}^{12}\mathrm{C}+{}^{1}\mathrm{H}
&\longrightarrow{}^{13}\mathrm{N}+\gamma,\\
{}^{13}\mathrm{N}
&\longrightarrow{}^{13}\mathrm{C}+e^++\nu_e,\\
{}^{13}\mathrm{C}+{}^{1}\mathrm{H}
&\longrightarrow{}^{14}\mathrm{N}+\gamma,\\
{}^{14}\mathrm{N}+{}^{1}\mathrm{H}
&\longrightarrow{}^{15}\mathrm{O}+\gamma,\\
{}^{15}\mathrm{O}
&\longrightarrow{}^{15}\mathrm{N}+e^++\nu_e,\\
{}^{15}\mathrm{N}+{}^{1}\mathrm{H}
&\longrightarrow{}^{12}\mathrm{C}+{}^{4}\mathrm{He}.
\end{aligned}
$$

The handwriting repeats nitrogen-14 as the product of the fourth reaction. The correct product is oxygen-15. The last two reactions close the cycle and return the carbon-12 nucleus. The notes do not write them.

## Source

Kyle Kabasares, *Stellar Astrophysics (Physics 241B, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_r$, $\mathrm{d}\mechanical{M}_r$ | $\unit{g}$ | Enclosed mass and mass element | The stellar mass within radius $\mechanical{r}$, and the mass of a thin shell. |
| $\mechanical{M}$ | $\unit{g}$ | Total stellar mass | The range of the integral over the stellar mass. |
| $\energy{L}_r$ | $\unit{erg\,s^{-1}}$ | Luminosity at radius $\mechanical{r}$ | The power that passes through the sphere of radius $\mechanical{r}$. |
| $\energy{L}$ | $\unit{erg\,s^{-1}}$ | Stellar luminosity | The rate of energy loss from the contracting star. |
| $\energy{\epsilon}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific energy production rate | The power generated per unit mass of stellar material. |
| $\energy{\epsilon}_{\mathrm{grav}}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific gravitational energy contribution | The contribution to net energy production from contraction or expansion. |
| $\thermal{Q}$ | $\unit{erg\,g^{-1}}$ | Specific heat transfer | The heat transferred per unit mass. |
| $\energy{u}$ | $\unit{erg\,g^{-1}}$ | Specific internal energy | The internal energy per unit mass. |
| $\mechanical{P}$ | $\unit{dyn\,cm^{-2}}$ | Pressure | The local force per unit area exerted by the stellar material. |
| $\mechanical{\rho}$ | $\unit{g\,cm^{-3}}$ | Mass density | The mass per unit volume at the given position. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The local thermodynamic temperature. |
| $t$ | $\unit{s}$ | Time | The independent variable in the energy balance. |
| $\thermal{\Gamma}_1$, $\thermal{\Gamma}_2$, $\thermal{\Gamma}_3$ | $1$ | Adiabatic exponents | The logarithmic derivatives of pressure, density, and temperature at constant entropy. |
| $\delta$ | $1$ | Exponent shift | The departure of the pressure–density exponent from $\thermal{\Gamma}_1$. |
| $\mechanical{R}$, $\mechanical{R}_0$ | $\unit{cm}$ | Stellar radius and reference radius | The radius of the star during the homologous change and at the reference time. |
| $\mechanical{\rho}_0$ | $\unit{g\,cm^{-3}}$ | Reference density | The density of the reference model in the homologous ratio. |
| $\mechanical{P}_0$ | $\unit{dyn\,cm^{-2}}$ | Reference pressure | The pressure of the reference model in the homologous ratio. |
| $\energy{\Gamma}_i$, $\energy{\Gamma}_\alpha$, $\energy{\Gamma}_\beta$ | $\unit{MeV}$ | Partial decay width | The energy width associated with decay through one channel. |
| $\energy{\Gamma}$ | $\unit{MeV}$ | Total decay width | The sum of the partial widths of the available channels. |
| $\tau_i$, $\tau$ | $\unit{s}$ | Partial and total lifetime | The reciprocal of the rate for channel $i$, and of the sum of the channel rates. |
| $P_i$ | $1$ | Branching probability | The fraction of decays through channel $i$. |
| $\hbar$ | $\unit{erg\,s}$ | Reduced Planck constant | The quantum of action in the width–lifetime relation. |
| $c$ | $\unit{cm\,s^{-1}}$ | Speed of light | The factor that converts mass to energy. |
| $\energy{B}_e$ | $\unit{MeV}$ | Nuclear binding energy | The energy that corresponds to the mass defect of the nucleus. |
| $\mechanical{R}$ | $\unit{m}$ | Nuclear radius scale | The length scale given with the nuclear density. |
| $\mechanical{\rho}_{\mathrm{nuc}}$ | $\unit{g\,cm^{-3}}$ | Nuclear mass density | The mass per unit volume of nuclear matter. |
| $\mechanical{M}_n$, $\mechanical{M}_p$ | $\unit{MeV\,c^{-2}}$ | Neutron and proton mass | The nucleon masses in the nuclear-scale estimate. |
| $\sigma_{\alpha\beta}$ | $\unit{cm^2}$ | Reaction cross section | The effective area for the specified reaction. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Relative speed | The speed in the incident flux and the rate. |
| $n_\alpha$, $n_X$ | $\unit{cm^{-3}}$ | Projectile and target number densities | The numbers of incident and target particles per unit volume. |
| $r_{\alpha\beta}$ | $\unit{cm^{-3}\,s^{-1}}$ | Reaction rate density | The number of reactions per unit volume per unit time. |
| $\langle\sigma\mechanical{v}\rangle_{\alpha\beta}$ | $\unit{cm^3\,s^{-1}}$ | Reaction rate coefficient | The energy-distribution average of cross section times speed. |
| $\energy{E}$ | $\unit{MeV}$ | Collision energy | The center-of-mass kinetic energy of the projectile–target pair. |
| $\psi(\energy{E})$ | — | Energy distribution weight | The weight used to average over collision energies. |
| $\thermal{k}$ | $\unit{erg\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy per particle. |
| $\mechanical{m}$ | $\unit{g}$ | Reduced mass | The reduced mass of the projectile–target pair. |
| $\mechanical{m}_\alpha$, $\mechanical{m}_X$ | $\unit{g}$ | Projectile and target masses | The two masses used in the reduced mass. |
| $\mu$ | $1$ | Reduced mass in atomic mass units | The numerical reduced mass in the barn conversion, the Coulomb parameter, and the rate prefactor. |
| $\signal{\bar{\lambda}}$ | $\unit{cm}$ | Reduced de Broglie wavelength | The wavelength divided by $2\pi$ for the relative motion. |
| $g$ | $1$ | Statistical factor | The spin-weight factor in the cross section. |
| $\mechanical{\vec{L}}$ | $\unit{erg\,s}$ | Entrance-channel angular momentum | The orbital angular momentum of the incoming pair. |
| $s$, $s_\ell$ | $\unit{cm}$ | Impact parameter | The transverse offset of the incoming trajectory from the target. |
| $\mechanical{p}$ | $\unit{g\,cm\,s^{-1}}$ | Relative momentum | The momentum used with the impact parameter to obtain the angular momentum. |
| $\sigma_{\ell,\ell+1}$ | $\unit{cm^2}$ | Partial cross section | The area between adjacent impact-parameter values. |
| $f(\energy{E})$ | $1$ | Shape factor | The energy-dependent factor in the reaction cross section. |
| $\energy{E}_r$ | $\unit{MeV}$ | Resonance energy | The collision energy at the center of the resonance. |
| $\energy{E}^*$ | $\unit{MeV}$ | Excitation energy | The excitation term on the compound-nucleus side of the energy balance. |
| $\mechanical{m}_{Z^*}$ | $\unit{g}$ | Compound nucleus mass | The mass of the intermediate nucleus in the resonance condition. |
| $\eta$ | $1$ | Coulomb penetration parameter | The parameter in the Gamow exponential. |
| $Z_\alpha$, $Z_X$ | $1$ | Charge numbers | The charge numbers of the projectile and the target. |
| $\electric{e}$ | $\unit{statC}$ | Elementary charge | The charge magnitude in the electrostatic unit convention of the source. |
| $S$ | $\unit{MeV\,barn}$ | Astrophysical S-factor | The factor that remains after the leading energy dependence and the barrier penetrability are removed. |
| $b$ | $\unit{MeV^{1/2}}$ | Gamow exponent coefficient | The coefficient of the inverse square root of energy in the exponential. |
| $\thermal{T}_6$, $\thermal{T}_9$ | $1$ | Scaled temperature | The temperature in units of $10^6\,\unit{K}$ or $10^9\,\unit{K}$. |
| $\energy{E}_p$ | $\unit{MeV}$ | Laboratory proton energy | The energy of the incident proton in the laboratory frame. |
| $N_A$ | $\unit{mol^{-1}}$ | Avogadro constant | The factor that converts the rate coefficient to a molar rate. |
| $n_n$ | $\unit{cm^{-3}}$ | Neutron number density | The number of free neutrons per unit volume. |
| $n_A$, $n_{A-1}$ | $\unit{cm^{-3}}$ | Nuclear number densities | The number densities at adjacent mass numbers in the neutron-capture chain. |
| $A$, $Z$ | $1$ | Mass number and proton number | The nucleon count and the proton count of a nucleus. |
| $\energy{Q}_{\mathrm{eff,pp}}$ | $\unit{MeV}$ | Effective pp energy | The energy scale given after the proton–proton branch chart. |
