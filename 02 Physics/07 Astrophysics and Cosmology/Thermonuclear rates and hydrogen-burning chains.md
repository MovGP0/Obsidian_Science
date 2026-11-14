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
=\frac{\partial\energy{E}}{\partial t}
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
r_{\alpha\beta}=n_\alpha n_\beta\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
\qquad (\unit{cm^{-3}\,s^{-1}}).
$$

The handwritten aside beside the unit reads “DON'T NEED UNITS??”

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\frac{\displaystyle\int_0^\infty\psi(\energy{\epsilon})\,
   \sigma_{\alpha\beta}\mechanical{v}\,\mathrm{d}\energy{\epsilon}}
{\displaystyle\int_0^\infty\psi(\energy{\epsilon})\,\mathrm{d}\energy{\epsilon}}.
$$

The thermal average of the rate coefficient is

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\left(\frac8{\pi\mechanical{m}}\right)^{1/2}
(\thermal{k}\thermal{T})^{-3/2}
\int_0^\infty
\sigma_{\alpha\beta}(\energy{\epsilon})\,
e^{-\energy{\epsilon}/(\thermal{k}\thermal{T})}\,
\energy{\epsilon}\,\mathrm{d}\energy{\epsilon},
\qquad
\mechanical{m}=\frac{\mechanical{m}_\alpha\mechanical{m}_X}
{\mechanical{m}_\alpha+\mechanical{m}_X}.
$$

The notes write the cross section as

$$
\sigma_{\alpha\beta}(\energy{\epsilon})
=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
\frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}{\energy{\Gamma}^2}
f(\energy{\epsilon}).
$$

They mark the ratio of widths as a joint probability and call $f(\energy{\epsilon})$ the shape factor. The vector $\mechanical{\vec{L}}$ is the entrance-channel angular momentum.

$$
\pi\signal{\bar{\lambda}}^{\,2}
=\frac{\pi\hbar^2}{2\energy{\epsilon}\mechanical{m}}
=\frac{0.657}{[\energy{\epsilon}/\unit{MeV}]\mu}\,\unit{barn},
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

The notes say that $f(\energy{\epsilon})$ accounts for the other physics. Near a resonance,

$$
f(\energy{\epsilon})
=\frac{\energy{\Gamma}^2}
 {(\energy{\epsilon}-\energy{\epsilon}_r)^2+(\energy{\Gamma}/2)^2}.
$$

The square on the energy difference follows the Breit–Wigner formula farther down the page. It is omitted in the first handwritten denominator. The resonance energy satisfies

$$
\mechanical{m}_{Z^*}c^2+\energy{\epsilon}^*
=\mechanical{m}_\alpha c^2+\mechanical{m}_Xc^2+\energy{\epsilon}_r.
$$

##### Breit–Wigner cross section

$$
\sigma_{\alpha\beta}
=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
\frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}
 {(\energy{\epsilon}-\energy{\epsilon}_r)^2+(\energy{\Gamma}/2)^2}.
$$

The handwritten $(2\ell+1)$ sits above the baseline beside $g$. The product follows the expression on [[#Nuclear reaction rates|the section on Nuclear reaction rates]]. The next line reads “Texas accent lol.”

##### Nonresonant stellar energy sources

Far from resonance, $f(\energy{\epsilon})$ is constant or varies slowly. The example is $p+p$.

The barrier penetration probability is proportional to $\mathrm{e}^{-2\pi\eta}$. In the source's electrostatic unit convention,

$$
\eta
=\frac{Z_\alpha Z_X\electric{e}^2}{\hbar\mechanical{v}}
=0.1574\,Z_\alpha Z_X
 \left(\frac{\mu}{\energy{\epsilon}/\unit{MeV}}\right)^{1/2}.
$$

The nonresonant cross section is

$$
\sigma_{\alpha\beta}(\energy{\epsilon})
=\frac{S(\energy{\epsilon})}{\energy{\epsilon}}\,
  \mathrm{e}^{-2\pi\eta}.
$$

The notes repeat the thermal average, reaction rate, and channel formula.

$$
\begin{aligned}
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
&=\left(\frac8{\pi\mechanical{m}}\right)^{1/2}
(\thermal{k}\thermal{T})^{-3/2}
\int\sigma_{\alpha\beta}(\energy{\epsilon})
  \mathrm{e}^{-\energy{\epsilon}/(\thermal{k}\thermal{T})}
  \energy{\epsilon}\,\mathrm{d}\energy{\epsilon},\\
r_{\alpha\beta}&=n_\alpha n_X\langle\sigma\mechanical{v}\rangle_{\alpha\beta},\\
\sigma_{\alpha\beta}(\energy{\epsilon})
&=\pi\signal{\bar{\lambda}}^{\,2}g(2\ell+1)
  \frac{\energy{\Gamma}_\alpha\energy{\Gamma}_\beta}{\energy{\Gamma}^2}
  f(\energy{\epsilon}).
\end{aligned}
$$

The exponential factor in the nonresonant formula is labeled “Gamow penetrability.” The next line is written

$$
\langle\sigma\mechanical{v}\rangle_{\alpha\beta}
=\frac{1.6\times10^{-15}\,\unit{cm^3\,s^{-1}}}
 {\mu(\thermal{k}\thermal{T})^{3/2}}
\int_0^\infty
 \mathrm{e}^{-\left(\energy{\epsilon}/(\thermal{k}\thermal{T})+
                    b/\energy{\epsilon}^{1/2}\right)}
 \,\mathrm{d}\energy{\epsilon}.
$$

The handwritten numerical prefactor has no stated convention for the units of the energies or $S(\energy{\epsilon})$. The example is carbon-12 proton capture to nitrogen-13. The sketch shows a larger integrand peak for $\thermal{T}_6=22$ and a smaller peak for $\thermal{T}_6=20$, with a reference line near the larger peak. The subscript is read as $6$ from the stellar temperature scale. The notes give $\energy{\epsilon}\simeq30\,\unit{keV}$ and $\langle\sigma\mechanical{v}\rangle\sim\thermal{T}^{17}$.

The margin asks why nuclear physics is “dying” if funding is adequate, answers “It's sociological!”, and adds “Californium” and “Communism.”

The resonant cross section follows the energy dependence

$$
\sigma_{\alpha\beta}\sim
\left[(\energy{\epsilon}-\energy{\epsilon}_r)^2+
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
&\longrightarrow{}^{14}\mathrm{N}+\gamma.
\end{aligned}
$$

The last line repeats nitrogen-14 as the product in the handwriting.

## Source

Kyle Kabasares, *Stellar Astrophysics (Physics 241B, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_r$ | $\unit{kg}$ | Enclosed mass | The stellar mass within radius $\mechanical{r}$. |
| $\mechanical{\rho}$ | $\unit{g\,cm^{-3}}$ | Mass density | The mass per unit volume at the given radius. |
| $\mathrm{d}\mechanical{M}_r$ | $\unit{g}$ | Mass element | The mass of the thin shell or the patch, according to context. |
| $\mechanical{M}$ | $\unit{g}$ | Mass | The enclosed mass in the expression beside the force sketch. |
| $\mechanical{P}$ | $\unit{dyn\,cm^{-2}}$ | Pressure | The local force per unit area exerted by the stellar material. |
| $\mechanical{m}$ | $\unit{g}$ | Mass | The mass acted on by the force. |
| $\mechanical{M}$ | $\unit{g}$ | Total stellar mass | The upper limit of the integral over the stellar mass. |
| $\mechanical{R}$ | $\unit{cm}$ | Stellar radius | The radius of the star used in the energy scale. |
| $\energy{E}$ | $\unit{erg\,g^{-1}}$ | Specific internal energy | The internal energy per unit mass. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The local thermodynamic temperature. |
| $\thermal{Q}$ | $\unit{erg\,g^{-1}}$ | Specific heat transfer | The heat transferred per unit mass. |
| $t$ | $\unit{s}$ | Time | The independent variable in the virial calculation. |
| $\energy{L}$ | $\unit{erg\,s^{-1}}$ | Stellar luminosity | The rate of energy loss from the contracting star. |
| $\energy{E}$ | $\unit{erg\,cm^{-3}}$ | Thermal energy density | The gas energy per unit volume in the temperature estimate. |
| $n$ | $\unit{cm^{-3}}$ | Particle number density | The number of gas particles per unit volume. |
| $\thermal{k}$ | $\unit{erg\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy per particle. |
| $N_A$ | $\unit{mol^{-1}}$ | Avogadro constant | The number of particles per mole. |
| $\mu$ | $\unit{g\,mol^{-1}}$ | Mean molar mass | The mass per mole of gas particles, as used in the density conversion. |
| $\thermal{\Gamma}_1$ | 1 | First adiabatic exponent | The logarithmic derivative of pressure with respect to density at constant entropy. |
| $X$ | 1 | Hydrogen mass fraction | The fraction of stellar mass in hydrogen. |
| $Y$ | 1 | Helium mass fraction | The fraction of stellar mass in helium. |
| $Z$ | 1 | Metallicity | The fraction of stellar mass in elements heavier than helium. |
| $\energy{L}_r$ | $\unit{erg\,s^{-1}}$ | Luminosity at radius $\mechanical{r}$ | The power that passes through the sphere of radius $\mechanical{r}$. |
| $\energy{\epsilon}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific energy production rate | The power generated per unit mass of stellar material. |
| $a$ | $\unit{erg\,cm^{-3}\,K^{-4}}$ | Radiation constant | The constant in the radiation energy density $a\thermal{T}^4$. |
| $c$ | $\unit{cm\,s^{-1}}$ | Speed of light | The speed of light in the radiative diffusion relation. |
| $\mechanical{R}_0$ | $\unit{cm}$ | Reference stellar radius | The radius of the reference star. |
| $\mechanical{\rho}_0$ | $\unit{g\,cm^{-3}}$ | Reference density | The density at the corresponding position in the reference star. |
| $\mechanical{P}_0$ | — | Pressure coefficient | The coefficient in the equation of state, with units that depend on the exponents. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Streaming speed | The speed used in the free-streaming distance integral. |
| $\energy{\epsilon}_{\mathrm{grav}}$ | $\unit{erg\,g^{-1}\,s^{-1}}$ | Specific gravitational energy contribution | The contribution to net energy production from gravitational processes. |
| $\tau$ | $\unit{yr}$ | Stellar time scale | The time scale whose fractional change is estimated from the additional loss. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the uncertainty relation. |
| $N$ | 1 | Particle count | The number of particles in the gas volume. |
| — | $\unit{s}$ | Two-nucleus contact time | The time written beside the two helium nuclei in the triple-alpha sketch. |
| $\energy{E}$ | $\unit{MeV}$ | Electron energy | The energy plotted in the collapse sketch. |
| $f$ | — | Electron distribution | The distribution sketched against electron energy, with no stated normalization. |
| $\mechanical{m}_n$, $\mechanical{M}_n$ | $\unit{kg}$ | Neutron mass | The particle mass on the neutron side of the degeneracy comparison. |
| $Z$ | 1 | Proton number | The number of protons in the nucleus in the neutron-drip diagram. |
| $N$ | 1 | Neutron number | The number of neutrons in the nucleus in the neutron-drip diagram. |
| $\thermal{\Gamma}_2$ | 1 | Second adiabatic exponent | The exponent defined through the pressure derivative with respect to temperature. |
| $\thermal{\Gamma}_3$ | 1 | Third adiabatic exponent | The exponent defined through the temperature derivative with respect to density. |
| $\mechanical{P}_0$ | $\unit{dyn\,cm^{-2}}$ | Reference stellar pressure | The pressure of the initial model used in the homologous ratio. |
| $\energy{\Gamma}_i$, $\energy{\Gamma}_\alpha$, $\energy{\Gamma}_\beta$ | $\unit{MeV}$ | Partial decay width | The energy width associated with decay through channel $i$. |
| $\energy{\Gamma}$ | $\unit{MeV}$ | Total decay width | The sum of the partial widths of the available channels. |
| $\tau_i$ | $\unit{s}$ | Partial lifetime | The reciprocal of the rate for channel $i$. |
| $\tau$ | $\unit{s}$ | Total lifetime | The reciprocal of the sum of the channel rates. |
| $P_i$ | 1 | Branching probability | The fraction of decays through channel $i$. |
| $\energy{B}_e$ | $\unit{MeV}$ | Nuclear binding energy | The energy corresponding to the mass defect of the nucleus. |
| $\mechanical{R}$ | $\unit{m}$ | Nuclear radius scale | The length scale given with the nuclear density. |
| $\mechanical{\rho}_{\mathrm{nuc}}$ | $\unit{g\,cm^{-3}}$ | Nuclear mass density | The mass per unit volume of nuclear matter. |
| $\mechanical{m}_p$, $\mechanical{M}_p$ | $\unit{MeV\,c^{-2}}$ | Proton mass | The proton mass in the nucleon-mass estimate. |
| $\sigma_{\alpha\beta}$ | $\unit{cm^2}$ | Reaction cross section | The effective area for the specified reaction. |
| $\mechanical{v}$ | $\unit{cm\,s^{-1}}$ | Projectile speed | The speed entering the incident flux and rate. |
| $n_\alpha$, $n_X$, $n_\beta$ | $\unit{cm^{-3}}$ | Projectile and target number densities | The number of particles per unit volume for the incident and target species. |
| $r_{\alpha\beta}$ | $\unit{cm^{-3}\,s^{-1}}$ | Reaction rate density | The number of reactions per unit volume per unit time. |
| $\langle\sigma\mechanical{v}\rangle_{\alpha\beta}$ | $\unit{cm^3\,s^{-1}}$ | Reaction rate coefficient | The energy-distribution average of cross section times speed. |
| $\energy{\epsilon}$ | $\unit{MeV}$ | Collision energy | The integration variable in the reaction rate average. |
| $\psi(\energy{\epsilon})$ | — | Energy distribution weight | The weight used to average over collision energies. |
| $\mechanical{m}$ | $\unit{kg}$ | Reduced mass | The reduced mass of the projectile–target pair. |
| $\mechanical{m}_\alpha$, $\mechanical{m}_X$ | $\unit{kg}$ | Projectile and target masses | The two masses used in the reduced mass. |
| $\signal{\bar{\lambda}}$ | $\unit{m}$ | Reduced de Broglie wavelength | The wavelength divided by $2\pi$ for the relative motion. |
| $\mu$ | 1 | Reduced mass in atomic mass units | The numerical mass in the cross-section conversion to barns. |
| $\mechanical{\vec{L}}$ | $\unit{J\,s}$ | Entrance-channel angular momentum | The orbital angular momentum of the incoming pair. |
| $s$ | $\unit{m}$ | Impact parameter | The transverse offset of the incoming trajectory from the target. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Relative momentum | The momentum used with the impact parameter to obtain the angular momentum. |
| $\sigma_{\ell,\ell+1}$ | $\unit{cm^2}$ | Partial cross section | The area between adjacent impact parameter values. |
| $\energy{\epsilon}_r$ | $\unit{MeV}$ | Resonance energy | The collision energy at the center of the resonance. |
| $\energy{\epsilon}^*$ | $\unit{MeV}$ | Excitation energy | The excitation term on the compound-nucleus side of the energy balance. |
| $\mechanical{m}_{Z^*}$ | $\unit{kg}$ | Compound nucleus mass | The mass term of the intermediate nucleus in the resonance condition. |
| $f(\energy{\epsilon})$ | 1 | Shape factor | The energy-dependent factor multiplying the reaction cross section. |
| $\eta$ | 1 | Coulomb penetration parameter | The parameter in the Gamow exponential. |
| $\electric{e}$ | $\unit{statC}$ | Elementary charge | The charge magnitude in the source's electrostatic unit convention. |
| $S(\energy{\epsilon})$ | $\unit{MeV\,barn}$ | Astrophysical S-factor | The factor remaining after separation of the leading energy dependence and barrier penetrability. |
| $b$ | $\unit{MeV^{1/2}}$ | Gamow exponent coefficient | The coefficient of inverse square root of energy in the exponential. |
| $\thermal{T}_6$ | 1 | Temperature in millions of kelvins | The numerical temperature that labels the integrand curves. |
| $\energy{E}_p$ | $\unit{MeV}$ | Laboratory proton energy | The energy of the incident proton measured in the laboratory frame. |
| $\thermal{T}_9$ | 1 | Temperature in billions of kelvins | The numerical temperature used for the rate plot. |
| $N_A\langle\sigma\mechanical{v}\rangle$ | $\unit{cm^3\,mol^{-1}\,s^{-1}}$ | Molar reaction rate coefficient | The thermal rate coefficient multiplied by the Avogadro constant. |
| $n_A$, $n_{A-1}$ | $\unit{cm^{-3}}$ | Nuclear number densities | The number densities at adjacent mass numbers in the neutron-capture chain. |
| $n_n$ | $\unit{cm^{-3}}$ | Neutron number density | The number of free neutrons per unit volume. |
| $\energy{Q}_{\mathrm{eff,pp}}$ | $\unit{MeV}$ | Effective pp energy | The energy scale given after the proton–proton branch chart. |
| $\energy{Q}$ | $\unit{keV}$ | Reaction energy | The energy change of the first helium-burning step. |
| $a$ | $\unit{m}$ | Confinement length | The characteristic electron spacing estimated from position uncertainty. |
| $\mu$, $\mu_0$, $\mu_e$ | 1 | Mass per particle, nucleus, or electron in atomic mass units | The numerical mass factors in the three equivalent density expressions. |
| $n$ | $\unit{cm^{-3}}$ | Nucleus number density | The nucleus count per volume in the compact-object composition formula. |
| $\mu$ | $\unit{kg}$ | Particle mass scale | The mass in the speed condition on [[Advanced stellar burning, polytropes, and compact stars#Relativistic stars\|the section on Relativistic stars]]. |
| $n$ | 1 | Polytropic index | The index that determines the density profile and the equation-of-state exponent. |
| $a$ | $\unit{m}$ | Polytropic length scale | The factor that converts the normalized coordinate to radius. |
