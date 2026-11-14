---
title: "Expansion histories and primordial element abundances"
---

> [!TLDR]
> Compare cosmological expansion laws and use reaction freeze-out and the deuterium bottleneck to estimate light-element abundances.

## Worked lecture material

##### Reaction rates and early-universe equilibrium

![[Kyle Kabasares - Cosmology - incident particles and target cross section.png|**Fig. 18** The incoming trajectories and shaded target illustrate the use of a cross section in the reaction rate.]]

The dimensions of number density, cross section, and speed are $\mathrm{L}^{-3}$, $\mathrm{L}^2$, and $\mathrm{L}/\mathrm{T}$. Their product is an inverse time.

In the reverse reaction, the source term for species $1$ equals the number $(V_0a^3)n_3$ of species-$3$ particles in the box times the destruction rate per particle of species $3$, $\Gamma_3=n_4\langle\sigma'\mechanical{v}_{\mathrm{rel}}\rangle$. Here $\sigma'$ is the reverse cross section and the speed is relative to species $4$. Detailed balance in equilibrium gives

$$
n_3^{(0)}n_4^{(0)}\langle\sigma'\mechanical{v}_{\mathrm{rel}}\rangle
=n_1^{(0)}n_2^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle.
$$

Consequently,

$$
\langle\sigma'\mechanical{v}_{\mathrm{rel}}\rangle
=\frac{n_1^{(0)}n_2^{(0)}}{n_3^{(0)}n_4^{(0)}}
\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle.
$$

To evaluate the rate coefficient, average the cross section times relative speed over the particle distributions. Apply the rate equation to the equilibrium abundance of deuterons in $n+p\rightleftharpoons D+\gamma$ at $\thermal{k}_{\mathrm B}\thermal{T}\lesssim\quantity{1}{MeV}$.

$$
\frac{d(a^3V_0n_1)}{dt}
=(V_0a^3)n_1^{(0)}n_2^{(0)}
\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle
\underbrace{\left(
\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}-
\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}
\right)}_{\text{zero in equilibrium}}.
$$

In reaction equilibrium,

$$
\frac{n_Dn_\gamma}{n_D^{(0)}n_\gamma^{(0)}}
=\frac{n_nn_p}{n_n^{(0)}n_p^{(0)}}.
$$

Since photons are taken to remain in equilibrium, $n_\gamma=n_\gamma^{(0)}$, so

$$
\frac{n_D}{n_pn_n}=\frac{n_D^{(0)}}{n_p^{(0)}n_n^{(0)}}.
$$

The nonrelativistic equilibrium density for spin-$\tfrac12$ nucleons is $2(\mechanical{m}\thermal{T}/2\pi)^{3/2}e^{-\mechanical{m}/\thermal{T}}$ in natural units. The margin lists the relativistic scaling $n^{(0)}\propto\thermal{T}^3$. With three spin states for the deuteron,

$$
\frac{n_D^{(0)}}{n_p^{(0)}n_n^{(0)}}
=
\frac{3(\mechanical{m}_D\thermal{T}/2\pi)^{3/2}e^{-\mechanical{m}_D/\thermal{T}}}
{4(\mechanical{m}_p\thermal{T}/2\pi)^{3/2}
(\mechanical{m}_n\thermal{T}/2\pi)^{3/2}
e^{-(\mechanical{m}_p+\mechanical{m}_n)/\thermal{T}}}.
$$

Taking $\mechanical{m}_n\simeq\mechanical{m}_p$ and $\mechanical{m}_D\simeq2\mechanical{m}_p$ in the prefactor and retaining the mass difference in the exponent gives

$$
\boxed{\frac{n_D}{n_pn_n}
\simeq\frac{3\cdot2^{3/2}}4
\left(\frac{\mechanical{m}_p\thermal{T}}{2\pi}\right)^{-3/2}
e^{(\mechanical{m}_p+\mechanical{m}_n-\mechanical{m}_D)/\thermal{T}}.}
$$

Multiply this ratio by $n_pn_n$ to get the deuteron density. The notes point to the approximate particle-physics symmetry between protons and neutrons and quote a neutron lifetime of order $\quantity{1000}{s}$.

##### Expansion with different equations of state

The notes estimate the age of the universe at $\thermal{k}_{\mathrm B}\thermal{T}\sim\quantity{1}{MeV}$ as about $\quantity{1}{s}$. The deuteron binding energy is $\energy{B}_D=(\mechanical{m}_p+\mechanical{m}_n-\mechanical{m}_D)\mechanical{c}^2\simeq\quantity{2.2}{MeV}$. Approximating $n_p\simeq n_B/2$, the equilibrium result becomes, in natural units,

$$
\frac{n_D}{n_n}\simeq\frac{n_B}{2}\frac34
\left(\frac{4\pi}{\mechanical{m}_p\thermal{T}}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Write $n_B=\eta_B n_\gamma$. The baryon-to-photon ratio $\eta_B$ can be inferred from the CMB and is of order $10^{-10}$ to $10^{-9}$ in the notes. Substituting $n_\gamma\propto\thermal{T}^3$ makes the abundance scale as

$$
\frac{n_D}{n_n}\propto
\eta_B\left(\frac{\thermal{T}}{\mechanical{m}_p}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Using a characteristic photon energy of $3\thermal{T}$ and baryon rest energy of about $\quantity{1}{GeV}$ gives

$$
\frac{\energy{\rho}_\gamma}{\energy{\rho}_B}
\simeq\frac{(3\thermal{T})n_\gamma}{(\quantity{1}{GeV})n_B}
=\frac{3\thermal{T}}{\quantity{1}{GeV}}\,\eta_B^{-1}.
$$

Photons therefore dominate over baryons in energy density during nucleosynthesis. The manuscript separately lists $\energy{B}_{{}^4\mathrm{He}}=\quantity{22}{MeV}$ without specifying the reaction or threshold. The neutron number fraction among free nucleons is $X_n=n_n/(n_n+n_p)$.

In units with $\mechanical{c}=1$, the spatial contraction of the Ricci tensor is

$$
g^{ij}R_{ij}
=3\left[\frac{\ddot a}{a}
+2\left(\frac{\dot a}{a}\right)^2
-\frac{2\Omega_kH_0^2}{a^2}\right].
$$

The circled curvature term is equivalent to $2k/(a^2R_0^2)$ when written with its sign as a contribution inside the brackets.

In the flat case, $\Omega_k=0$. If the spatial Ricci contraction from [[#Expansion with different equations of state|the section on Expansion with different equations of state]] is also set to zero, then

$$
\frac{\ddot a}{a}+2\left(\frac{\dot a}{a}\right)^2=0.
$$

A constant $a$ solves this equation. For a nonconstant power law $a\propto t^\alpha$, the equation becomes

$$
\frac{\alpha(\alpha-1)+2\alpha^2}{t^2}=0,
\qquad
\alpha=\frac13.
$$

To interpret the result, use a fluid equation of state $\thermal{p}=w\energy{\rho}$ with constant $w$. Energy conservation gives

$$
\frac{d\energy{\rho}}{dt}+3H(\energy{\rho}+\thermal{p})=0
\quad\Longrightarrow\quad
\frac{d\energy{\rho}}{dt}+\frac{3}{a}\frac{da}{dt}(1+w)\energy{\rho}=0,
$$

so

$$
\boxed{\energy{\rho}\propto a^{-3(1+w)}.}
$$

Matter has $w=0$ and radiation has $w=1/3$. For a flat universe dominated by one such fluid, substituting the density into $H^2=8\pi\mechanical{G}\energy{\rho}/3$ in units with $\mechanical{c}=1$ gives $a\propto t^{2/[3(1+w)]}$ for $w>-1$ with the time origin at $a=0$. In particular, $a\propto t^{1/3}$ corresponds to $w=1$.

A flat universe dominated by a $w=1$ component has $g^{ij}R_{ij}=0$. The notes compare this case with pressureless matter ($w=0$) and massless radiation ($w=1/3$). A homogeneous scalar field $\phi$ has $w\simeq1$ when its kinetic energy dominates.

The energy density of the scalar field is the sum of its kinetic and potential contributions. The pressure is their difference.

$$
\energy{\rho}=\frac12\dot\phi^2+\energy{V}(\phi),
\qquad
\thermal{p}=\frac12\dot\phi^2-\energy{V}(\phi).
$$

The equation-of-state ratio

$$
w=\frac{\tfrac12\dot\phi^2-\energy{V}(\phi)}
{\tfrac12\dot\phi^2+\energy{V}(\phi)}
$$

generally varies as the field evolves. In the kinetic limit $w=1$, the energy density scales as $\energy{\rho}\propto a^{-6}$. For a quadratic potential $\energy{V}(\phi)\sim\mechanical{m}^2\phi^2$, the notes estimate $\energy{V}\sim\mechanical{m}^2\mechanical{M}_{\mathrm{Pl}}^2$ when $\phi$ is of order the reduced Planck mass.

In natural units, define the reduced Planck mass by $\mechanical{M}_{\mathrm{Pl}}^2=1/(8\pi\mechanical{G})$. The flat Friedmann equation at the present epoch gives

$$
H_0^2=\frac{8\pi\mechanical{G}}{3}\energy{\rho}_0,
\qquad
\energy{\rho}_0=3H_0^2\mechanical{M}_{\mathrm{Pl}}^2.
$$

If the scalar potential accounts for about $70\%$ of the present density in a flat model, $\energy{V}\sim0.7\energy{\rho}_0\sim2\mechanical{M}_{\mathrm{Pl}}^2H_0^2$. In natural units the notes estimate

$$
H_0\sim\quantity{10^{-33}}{eV},
\qquad
\energy{\rho}_0\sim\left(\quantity{10^{-3}}{eV}\right)^4.
$$

The first scale is very small on particle-physics scales. For an early-universe black hole with size of order the Hubble length, the notes write $R_{\mathrm{s}}\sim H^{-1}$ in units with $\mechanical{c}=1$.

The notes associate $w=-2/3$ with domain walls, $w=-1/3$ with cosmic strings, and $w=-1$ with a cosmological constant. They question the viability of the first two as the dominant late-time component. They label $w=-1$ the phantom divide and mention modified gravity in connection with $w<-1$.

##### Cosmological constant problem

The lecture dates the discussion to the 1960s and contrasts the success of quantum theory in Minkowski spacetime with its difficulty in accounting for the small cosmological constant. The margin asks about anthropic reasoning, neutrino rest masses, and what appears to be a reference to mass-varying neutrinos. It closes by remarking on fine-tuning.

##### The horizon of the universe

The Hubble length $\mechanical{c}/H_0$ is a characteristic distance scale. The comoving particle horizon instead comes from integrating the null trajectory. With the time origin at the Big Bang, the present conformal time is

$$
\eta_0=\int_0^{t_0}\frac{dt}{a(t)}
=\int_0^1\frac{da}{a^2H(a)}.
$$

The corresponding comoving distance is $\mechanical{c}\eta_0$. Going forward in cosmic time means decreasing $z$. The page also asks about the entropy of the universe and about the value of the conformal-time integral if the upper limit is extended indefinitely.

In the flat matter-plus-$\Lambda$ model, $H(a)=H_0\sqrt{\Omega_{\mathrm{m}}a^{-3}+\Omega_\Lambda}$, so the conformal time at infinite future cosmic time is

$$
\eta_{\mathrm{future}}
=\int_0^\infty\frac{da}{a^2H(a)}
=\int_0^\infty\frac{da}{H_0\sqrt{\Omega_{\mathrm{m}}a+\Omega_\Lambda a^4}}
\sim4H_0^{-1}.
$$

The notes give $\eta_0\sim3H_0^{-1}$. Even an infinite wait adds a finite comoving distance to the particle horizon. The lecture connects this accelerated-expansion model with inflation.

One can also use the acceleration equation directly, with $\mechanical{c}=1$ and $\thermal{p}=w\energy{\rho}$.

$$
\frac{\ddot a}{a}
=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})
=-\frac{4\pi\mechanical{G}}{3}\energy{\rho}(1+3w).
$$

##### Galaxy counts in a redshift shell

For a flat universe,

$$
r(z)=\mechanical{c}\int_{1/(1+z)}^1\frac{da}{a^2H(a)},
\qquad
V_{\mathrm{com}}(z)=\frac{4\pi}{3}r^3(z).
$$

The exercise takes the comoving volume between $z=0.4$ and $z=0.5$ to be $\Delta V_{\mathrm{com}}=V_{\mathrm{com}}(0.5)-V_{\mathrm{com}}(0.4)\simeq\quantity{15}{Gpc^3}$. How many Milky Way-like galaxies per square arcminute does this imply if their comoving number density is one per $(\quantity{100}{Mpc})^3$?

With $\quantity{100}{Mpc}=\quantity{0.1}{Gpc}$, the assumed volume and number density give

$$
N\simeq\frac{\quantity{15}{Gpc^3}}{(\quantity{0.1}{Gpc})^3}=1.5\times10^4.
$$

The full sky covers roughly $4.0\times10^4$ square degrees, or $1.44\times10^8$ square arcminutes. Thus the stated inputs give

$$
\frac{N}{A_{\mathrm{sky}}}
\simeq\frac{1.5\times10^4}{1.44\times10^8}\,\unit{arcmin^{-2}}
\simeq\quantity{1.0\times10^{-4}}{arcmin^{-2}}.
$$

The handwritten intermediate count $1.5\times10^3$ and final estimate of one per square arcminute are inconsistent with the volume and number density stated at the top of the page.

##### Reaction freeze-out and primordial abundances

For $1+2\rightleftharpoons3+4$, write the rate equation as

$$
\frac{1}{a^3}\frac{d(a^3n_1)}{dt}
=n_1^{(0)}n_2^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{12\to34}
\left[
\underbrace{\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}}_{\text{production}}
-\underbrace{\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}}_{\text{destruction}}
\right].
$$

In equilibrium the two rate densities are equal.

$$
n_3^{(0)}n_4^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{34\to12}
=n_1^{(0)}n_2^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{12\to34}.
$$

The units on both sides are $\unit{m^{-3}\,s^{-1}}$. This detailed-balance relation connects the thermally averaged forward and reverse coefficients. The notes compare it informally with Le Châtelier's principle and assume Maxwell–Boltzmann distributions for the thermal averages.

The reading reminder says “Recombination of primeval plasma” (1968). Apply the detailed-balance equation to neutrons and protons through $n+p\rightleftharpoons D+\gamma$.

If the reaction rate per particle times the age of the universe is much greater than one, the process occurs rapidly on cosmological timescales. To compare it with expansion, use $H(t)=d\ln a/dt=\dot a/a$ to rewrite the time derivative as

$$
\frac{1}{a^3}\frac{d(a^3n_1)}{dt}
=\frac{H(t)}{a^3}\frac{d(a^3n_1)}{d\ln a}.
$$

Dividing the rate equation by $H$ expresses the reaction term per interval in $\ln a$. When the relevant rate per particle is large compared with $H$, deuterium tracks equilibrium and its abundance can be obtained algebraically.

$$
\frac{n_Dn_\gamma}{n_D^{(0)}n_\gamma^{(0)}}
=\frac{n_nn_p}{n_n^{(0)}n_p^{(0)}},
\qquad
n_D=\frac{n_nn_p}{n_n^{(0)}n_p^{(0)}}n_D^{(0)},
$$

where the second expression uses $n_\gamma=n_\gamma^{(0)}$. In the nonrelativistic limit, the equilibrium density is

$$
n^{(0)}=g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}f(\mechanical{p})
\simeq g\,e^{-\mechanical{m}/\thermal{T}}
\left(\frac{\mechanical{m}\thermal{T}}{2\pi}\right)^{3/2}
$$

in natural units. Once the equilibrium approximation fails, the abundance follows from numerical integration of the rate equation. Include neutron decay $n\to p+e^-+\bar\nu_e$ and the weak reaction $p+e^-\rightleftharpoons n+\nu_e$.

The equilibrium abundance of deuterium can be written using the deuteron binding energy $\energy{B}_D=\quantity{2.2}{MeV}$. In natural units,

$$
n_D=
\frac{n_nn_p}{\thermal{T}^3}\frac{g_D}{g_pg_n}
\left(\frac{2\pi\mechanical{m}_D\thermal{T}}{\mechanical{m}_n\mechanical{m}_p}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Let $n_{\mathrm{N}}=n_n+n_p$ denote the free-nucleon density. Approximating $\mechanical{m}_n\simeq\mechanical{m}_p$ and $\mechanical{m}_D\simeq2\mechanical{m}_p$ in the prefactor gives

$$
\frac{n_D}{n_{\mathrm{N}}}
\simeq\frac{n_nn_p}{n_{\mathrm{N}}^2}
\frac{n_{\mathrm{N}}}{\thermal{T}^3}
\frac{g_D}{g_pg_n}
\left(\frac{4\pi\thermal{T}}{\mechanical{m}_p}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Before much deuterium forms, $n_{\mathrm{N}}\simeq n_B$. Since $n_\gamma\propto\thermal{T}^3$, the second factor scales as the baryon-to-photon ratio, of order $10^{-9}$. The spin and nucleon fraction factors introduce no large or small scale here. The mass ratio supplies another small factor of order $(\unit{MeV}/\unit{GeV})^{3/2}$. For the deuteron fraction to approach order unity, the exponential must offset these suppressions. The notes estimate this happens around $\thermal{T}\sim\quantity{0.07}{MeV}$.

The next reaction considered is $D+p\rightleftharpoons{}^3\mathrm{He}+\gamma$, with the reaction rate per particle large compared with $H$. Helium-4 is tightly bound and the absence of a stable nucleus with mass number $A=5$ impedes further reactions. In the simplified picture, two neutrons and two protons end up in each helium-4 nucleus.

During radiation domination, $a\propto t^{1/2}$, so

$$
H=\frac{d\ln a}{dt}=\frac{1}{2t},
\qquad t=\frac{1}{2H}.
$$

The notes use the rough estimate $H\simeq(\quantity{1}{s^{-1}})(\thermal{k}_{\mathrm B}\thermal{T}/\quantity{1}{MeV})^2$. At $\thermal{k}_{\mathrm B}\thermal{T}=\quantity{0.07}{MeV}$ it gives $t\simeq\quantity{100}{s}$. The notes remark on the ability to estimate the scale factor at this epoch. They also quote Dodelson's estimate

$$
t\simeq(\quantity{132}{s})
\left(\frac{\quantity{0.1}{MeV}}{\thermal{k}_{\mathrm B}\thermal{T}}\right)^2
$$

and use $X_n=n_n/(n_n+n_p)=0.11$ at $\thermal{k}_{\mathrm B}\thermal{T}=\quantity{0.07}{MeV}$, with a reference to Dodelson's equation 3.30.

**Exercise.** Find the primordial helium-4 mass fraction $Y_{\mathrm p}$ given this neutron fraction. Let $n_n+n_p$ count nucleons before assembly and take the final products to be hydrogen and helium-4. Comparing number densities at a common scale factor gives $n_n+n_p=4n_{{}^4\mathrm{He}}+n_{\mathrm H}$. Approximating nuclear masses by their nucleon counts,

$$
Y_{\mathrm p}
\simeq\frac{4n_{{}^4\mathrm{He}}}{n_n+n_p}
=\frac{n_n+n_p-n_{\mathrm H}}{n_n+n_p}
=1-\frac{n_{\mathrm H}}{n_n+n_p}.
$$

If essentially all remaining neutrons are captured into surviving helium-4, two neutrons are needed per helium nucleus. Hence

$$
\left.\frac{4n_{{}^4\mathrm{He}}}{n_B}\right|_{\mathrm{today}}
\simeq
\left.\frac{2n_n}{n_n+n_p}\right|_{\thermal{k}_{\mathrm B}\thermal{T}\simeq\quantity{0.07}{MeV}}
=2(0.11)=0.22.
$$

The notes thus estimate that helium accounts for about $22\%$ of the baryonic mass in this simple calculation. At the time of nucleosynthesis, the plasma is ionized, with free electrons, protons, and helium nuclei. The neutron–proton rest-energy difference is $(\mechanical{m}_n-\mechanical{m}_p)\mechanical{c}^2\simeq\quantity{1.3}{MeV}$, about one part in a thousand of a nucleon rest energy.

The notes refer to Figure 3.2 for deuterium and remark that much of the calculation is performed numerically. They give approximate number abundances

$$
\frac{n_D}{n_B}\simeq 2\times10^{-5},
\qquad
\frac{n_{{}^7\mathrm{Li}}}{n_B}\sim10^{-10}.
$$

For lithium, the notes mention the Spite plateau and propose plotting abundance against metallicity.

![[Kyle Kabasares - Cosmology - lithium abundance versus metallicity axes.png|**Fig. 19** The manuscript sets up a lithium abundance plot against metallicity $[\mathrm{Fe}/\mathrm{H}]$ and leaves the axes empty.]]

##### Hydrogen recombination

For hydrogen recombination, consider $p+e^-\rightleftharpoons\mathrm{H}+\gamma$ and the forward rate coefficient $\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{p+e^-\to\mathrm{H}+\gamma}$. The hydrogen ground-state binding energy is $\quantity{13.6}{eV}$. The notes ask how likely it is that a photon produced by direct recombination ionizes another atom, and direct attention to recombination through the $n=2$ level.

![[Kyle Kabasares - Cosmology - hydrogen recombination and photoionization.png|**Fig. 20** An electron recombines with a proton and emits a photon. The second sketch shows an electron escaping a hydrogen atom.]]

The class leaves Chapter 3 midway through. Exercise 8 treats recombination. The notes emphasize natural units and turn to Chapter 4, on Boltzmann equations and perturbations.

In the unperturbed flat model, the line element is $ds^2=-\mechanical{c}^2dt^2+a^2(t)\delta_{ij}dx^i dx^j$. The Einstein equation relates this geometry to the stress–energy placed in the universe. With the connection computed from the metric, free particles obey

$$
\frac{d^2x^\mu}{d\lambda^2}+\Gamma^\mu_{\nu\alpha}
\frac{dx^\nu}{d\lambda}\frac{dx^\alpha}{d\lambda}=0.
$$

Galaxies demonstrate the presence of inhomogeneity. The notes introduce scalar perturbations $\Psi$ and $\Phi$ in conformal Newtonian gauge, with the sign convention

$$
ds^2=-\mechanical{c}^2\left(1+\frac{2\Psi(x^\mu)}{\mechanical{c}^2}\right)dt^2
+a^2(t)\left(1+\frac{2\Phi(x^\mu)}{\mechanical{c}^2}\right)\delta_{ij}dx^i dx^j.
$$

The potentials are functions of spacetime and satisfy $|\Psi|/\mechanical{c}^2,\ |\Phi|/\mechanical{c}^2\ll1$ in the weak-field regime considered here, far from black holes.

## Source

Kyle Kabasares, *Cosmology (Physics 240B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $z$ | $1$ | Redshift | Dimensionless shift of the observed wavelength relative to its emitted value. |
| $t$ | $\unit{s}$ | Cosmic time | Age measured from the early-universe origin used in the course. |
| $a$ | $1$ | Scale factor | Ratio of a physical separation at cosmic time $t$ to its value today for a pair of comoving points. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Cosmic temperature on the right axis of the scale-factor figure. |
| $H$, $H_0$ | $\unit{s^{-1}}$ | Hubble parameter and its present value | Fractional expansion rate $\dot a/a$, often quoted in $\unit{km\,s^{-1}\,Mpc^{-1}}$. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Coupling in the Friedmann equation. |
| $\energy{\rho}$, $\energy{\rho}_0$, $\energy{\rho}_{\mathrm{cr}}$ | $\unit{J\,m^{-3}}$ | Cosmic energy densities | Time-dependent, present-day and present-day critical densities. In SI the corresponding mass densities are the energy densities divided by $c^2$. |
| $ds^2$ | $\unit{m^2}$ | Squared spacetime interval | Metric contraction of two coordinate differentials when the line element is expressed in length units. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Converts the time coordinate to length units in the flat interval. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates temperature to energy and is set to one in natural units. |
| $\theta$, $\phi$ | $\unit{rad}$ | Spherical angles | Polar angle and azimuth in the spherical line element. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Radial speed | Rate of change of radial position in the chosen inertial frame. It is expressed in units of the speed of light in $\gamma$. |
| $\gamma$ | $1$ | Lorentz factor | Ratio of coordinate time to proper time for inertial motion. |
| $\mechanical{F}$, $\mechanical{m}$, $\mechanical{a}$ | $\unit{N}$, $\unit{kg}$, $\unit{m\,s^{-2}}$ | Force, mass and acceleration | Quantities in Newton's second law. The acceleration here is distinct from the cosmological scale factor $a$. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Physical spatial momentum | Momentum components measured in a local orthonormal frame. |
| $\thermal{p}$ | $\unit{Pa}$ | Isotropic pressure | Spatial diagonal component of the comoving perfect-fluid stress-energy tensor. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $k$ | $\unit{m^{-2}}$ | Spatial curvature parameter | Units apply when $r$ has dimensions of length and $a$ is dimensionless. |
| $R_0$ | $\unit{m}$ | Comoving curvature radius | Used in the positively and negatively curved cases. |
| $V$ | $\unit{m^3}$ | Proper spatial volume | A shell is evaluated at a fixed cosmic time. |
| $\Lambda$ | $\unit{m^{-2}}$ | Cosmological constant | Coefficient of the metric term in the Einstein equation. |
| $n$ | $\unit{m^{-3}}$ | Particle number density | For a heavy nonrelativistic species, rest energy times number density gives the leading energy density. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\mechanical{v}_{\mathrm{rel}}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed entering the forward two-body reaction rate. |
| $\Gamma_3$ | $\unit{s^{-1}}$ | Destruction rate per particle of species $3$ | The reverse two-body rate coefficient times the density of species $4$. |
| $\mechanical{m}_p$, $\mechanical{m}_n$, $\mechanical{m}_D$ | $\unit{kg}$ | Proton, neutron, and deuteron masses | Their rest-energy difference sets the deuteron binding energy. |
| $\energy{B}_D$ | $\unit{MeV}$ | Deuteron binding energy | Energy required to dissociate a deuteron into a proton and a neutron. |
| $\eta_B$ | $1$ | Baryon-to-photon ratio | Baryon number density divided by photon number density. |
| $X_n$ | $1$ | Neutron number fraction | Fraction of the free nucleons that are neutrons. |
| $\Omega_k$ | $1$ | Curvature density parameter | Equals $-k\mechanical{c}^2/(R_0^2H_0^2)$ at the present epoch. |
| $w$ | $1$ | Equation-of-state parameter | Ratio of isotropic pressure to energy density. |
| $\phi$ | $\unit{GeV}$ | Homogeneous scalar field | Field amplitude expressed in energy units with $\hbar=\mechanical{c}=1$. |
| $\energy{V}(\phi)$ | $\unit{J\,m^{-3}}$ | Scalar-field potential energy density | Potential term in the scalar-field stress–energy. |
| $\mechanical{M}_{\mathrm{Pl}}$ | $\unit{kg}$ | Reduced Planck mass | Its square is $\hbar\mechanical{c}/(8\pi\mechanical{G})$ in SI. |
| $R_{\mathrm{s}}$ | $\unit{m}$ | Schwarzschild radius | Used to estimate the event-horizon size of a black hole. |
| $\eta$ | $\unit{s}$ | Conformal time | Defined by $d\eta=dt/a$. The product $\mechanical{c}\eta$ has units of comoving distance. |
| $\Omega_\Lambda$ | $1$ | Present vacuum density parameter | Vacuum energy density divided by today's critical density. |
| $Y_{\mathrm p}$ | $1$ | Primordial helium-4 mass fraction | Approximated by the fraction of baryons bound into helium-4 nuclei. |
| $\Psi$, $\Phi$ | $\unit{m^2\,s^{-2}}$ | Scalar metric perturbation potentials | The time and space perturbations in the sign convention above. |
| $\vec k$, $k$ | $\unit{m^{-1}}$ | Comoving wavevector and wavenumber | The wavevector labels a spatial Fourier mode. The magnitude is distinct from the curvature index $k$. |
| $\mu$ | $1$ | Direction cosine for a photon Fourier mode | Dot product of the photon direction with the wavevector direction. |
| $\delta$ | $1$ | Density contrast | Ratio of a first-order density perturbation to the homogeneous background. For nonrelativistic matter of fixed particle mass, the number and mass density contrasts agree. |
