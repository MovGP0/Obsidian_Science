---
title: "Nuclear and quantum statistics review calculations"
---

> [!TLDR]
> Work through mixed review problems on nuclear decay, binding, angular momentum, and equilibrium populations.

## Worked lecture material

**6-23 review.** For the fourth bound state of a finite well, the wave function has three interior nodes.

![[Kyle Kabasares - Modern Physics - Fourth state wave function review.png|**Fig. 68** Fourth bound-state wave function and schematic probability density. The squared modulus vanishes at all three wave function nodes.]]

##### Nuclear physics review

The mass number $A$ counts nucleons and satisfies $A=Z+N$. The atomic number $Z$ counts protons and determines the element. Changing neutron number $N$ at fixed $Z$ gives another isotope. Nuclides are labeled $\,{}_Z^AX$. One femtometer is $10^{-15}\,\unit{m}$.

The unified atomic mass unit in the notes is $1\,\unit{u}=1.660540\times10^{-27}\,\unit{kg}\simeq931.5\,\unit{MeV}/c^2$. The listed masses are

$$
\mechanical{m}_p=1.007276\,\unit{u},\qquad
\mechanical{m}_n=1.008664\,\unit{u},\qquad
\mechanical{m}_e=0.0005485799\,\unit{u}.
$$

Radioactive nuclei decay at random. An alpha particle is a helium nucleus $\,{}_2^4\mathrm{He}^{2+}$ with no electrons.

$$
\,{}_Z^AX\to\,{}_{Z-2}^{A-4}Y+\,{}_2^4\mathrm{He},
\qquad
\,{}_{92}^{238}\mathrm U\to\,{}_{90}^{234}\mathrm{Th}+\,{}_2^4\mathrm{He}.
$$

A free neutron is unstable and undergoes beta decay into a proton, electron, and electron antineutrino. The abbreviated line on this page shows the proton and electron.

##### Orbital angular momentum direction

For $\ell=4$, $m_\ell=0,\pm1,\pm2,\pm3,\pm4$ and $\mechanical{L}_z=m_\ell\hbar$. The magnitude is $\sqrt{20}\,\hbar$ and its square is $\mechanical{L}_x^2+\mechanical{L}_y^2+\mechanical{L}_z^2$. The vector model gives $\cos\theta=\mechanical{L}_z/\lvert\mechanical{\vec L}\rvert$. The minimum angle to positive $z$ is $\arccos(4/\sqrt{20})=26.6^\circ$. For $\ell=2$, the magnitude is $\sqrt6\,\hbar$ and the minimum angle is $\arccos(2/\sqrt6)=35.3^\circ$.

![[Kyle Kabasares - Modern Physics - Angular momentum direction review.png|**Fig. 69** Projection $L_z$ and the angle between the orbital angular momentum and the $z$-axis.]]

**10.4 review.** For $\ell=2$, $\mechanical{L}^{\,2}=6\hbar^2$ and $\mechanical{L}_z^2=m_\ell^2\hbar^2$. The possible values of $\lvert m_\ell\rvert$ are $0,1,2$.

- The minimum of $\mechanical{L}_x^2+\mechanical{L}_y^2$ occurs at $\lvert m_\ell\rvert=2$ and equals $6\hbar^2-4\hbar^2=2\hbar^2$.
- The maximum occurs at $m_\ell=0$ and equals $6\hbar^2$.
- At $m_\ell=1$, it equals $5\hbar^2$.
- The principal quantum number must be at least 3.

##### Statistical physics review

Maxwell–Boltzmann statistics is the classical case. Bose–Einstein and Fermi–Dirac are the quantum cases. For a classical ideal gas of particles of the same type treated as distinguishable, the Maxwell–Boltzmann distribution uses $f_{\mathrm{MB}}=Ae^{-\energy{E}/(k_B\thermal{T})}$, with the exponential as the Boltzmann factor.

Bose–Einstein statistics applies to identical, indistinguishable particles with integer spin, including helium-4 atoms and photons. Its occupation factor is $f_{\mathrm{BE}}=[B_{\mathrm{BE}}e^{\energy{E}/(k_B\thermal{T})}-1]^{-1}$. Fermi–Dirac statistics applies to identical, indistinguishable particles with half-integer spin, such as the free electrons in a conductor. Its occupation factor is $f_{\mathrm{FD}}=[B_{\mathrm{FD}}e^{\energy{E}/(k_B\thermal{T})}+1]^{-1}$. The exponents use the same positive sign as the corrected expressions on [[Statistical populations and quantum counting problems#Statistical physics|the section on Statistical physics]].

![[Kyle Kabasares - Modern Physics - Comparing statistical distributions.png|**Fig. 70** Comparison of Bose–Einstein, Maxwell–Boltzmann, and Fermi–Dirac occupation factors on an energy scale marked in steps of $k_BT$.]]

The density of states $g(E)$ is the number of available states per unit energy. The particle count between $E$ and $E+dE$ is $n(E)\,dE$. In each of the three cases $n(E)=g(E)f(E)$, using the corresponding occupation factor.

##### Maxwell–Boltzmann population example

The hydrogen ground level $1s$ has two spin states, so $g(E_1)=2$. The first excited level has one $2s$ and three $2p$ orbitals, each with two spin states, so $g(E_2)=8$. With the positive excitation energy $\energy{E}_2-\energy{E}_1=10.2\,\unit{eV}$, the population ratio at $293\,\unit{K}$ is

$$
\frac{n(E_2)}{n(E_1)}
=4e^{-(\energy{E}_2-\energy{E}_1)/(k_B\thermal{T})}
=4\exp\left[-\frac{10.2\,\unit{eV}}
{(8.617\times10^{-5}\,\unit{eV/K})(293\,\unit{K})}\right].
$$

**Homework 13.1 — Speed-weighted distribution**

This exercise explicitly weights the ordinary speed distribution $f(v)\propto v^2e^{-mv^2/(2k_BT)}$ by $v$. The resulting density is $F(v)=Av^3e^{-\lambda v^2}$ with $\lambda=\mechanical{m}/(2k_B\thermal{T})$. Normalization gives $A=[\int_0^\infty v^3e^{-\lambda v^2}\,dv]^{-1}$.

$$
\langle\energy{K}\rangle
=\frac{\mechanical{m}}{2}\frac{I_5}{I_3},
\qquad
I_j=\int_0^\infty v^j e^{-\lambda v^2}\,dv.
$$

The integrals are $I_5=\lambda^{-3}$ and $I_3=\tfrac12\lambda^{-2}$, giving $I_5/I_3=2/\lambda$.

**13.1, continued.** The pressure of the gas is $\thermal{P}=(2/3)N\langle\energy{E}\rangle/\mechanical{V}$. To compute mean energy per particle using $n(E)=g(E)f(E)$, integrate $E\,g(E)f(E)$ over the energies and divide by $N$, or use a density already normalized to one.

##### Midterm 2 — Problem 1

The well has potential $\energy{V}_2$ to the left of $x=0$, zero between $0$ and $a$, $\energy{V}_1$ between $a$ and $L$, and an infinite wall at $L$. The sketches show $0<\energy{E}_2<\energy{V}_1$ for $n=2$, and $\energy{V}_1<\energy{E}_3<\energy{V}_2$ for $n=3$. The second state has one interior node and the third has two. At a finite wall in a forbidden region the tail decays exponentially.

![[Kyle Kabasares - Modern Physics - Midterm stepped well states.png|**Fig. 71** Second and third states in a stepped well with one infinite wall.]]

When potential energy rises, kinetic energy falls. In an allowed region the de Broglie wavelength $h/\mechanical{p}$ increases as momentum falls. The handwritten line uses $hc/\lambda$, which is the photon energy relation.

What is the physical significance of normalization? The total probability of finding the particle somewhere is 100 percent. Normalizing $\psi$ scales its squared modulus so its integral over all space is one.

##### Hydrogen radial probability

For $n=2$, $\ell=1$, $m_\ell=-1$, the radial function is

$$
R_{21}(r)=\frac1{\sqrt3}\left(\frac{Z}{2a_0}\right)^{3/2}
\left(\frac{Zr}{a_0}\right)e^{-Zr/(2a_0)}.
$$

Use $P(r)=r^2\lvert R_{21}(r)\rvert^2$ and integrate from $a_0$ to $2a_0$. For hydrogen, $Z=1$, so

$$
\Pr(a_0\le r\le2a_0)=\frac{1}{24a_0^5}\int_{a_0}^{2a_0}r^4e^{-r/a_0}\,dr.
$$

The boxed line in the notebook changes the limits to $0$ and $\infty$ and retains the unsquared exponential. The expression above follows the requested interval and squared radial function.

**8-33.** Photons are bosons, so any number can occupy the same lowest mode. The notebook uses this fact to compare the available many-particle configurations with a gas subject to exclusion.

**8-29.** The Einstein-model molar heat capacity is

$$
\thermal{C}_V=\frac{d\energy{U}}{d\thermal{T}}
=3N_Ak_B\left(\frac{hf}{k_B\thermal{T}}\right)^2
\frac{e^{hf/(k_B\thermal{T})}}{(e^{hf/(k_B\thermal{T})}-1)^2}.
$$

As $\thermal{T}\to\infty$, $x=hf/(k_B\thermal{T})\to0$ and $e^x-1\simeq x$. The limiting value is $3N_Ak_B=3R$.

##### Beta decay and electron capture review

| Process | Nuclear change | Decay energy from neutral atomic masses |
| --- | --- | --- |
| $\beta^-$ | $\,{}_Z^AX\to\,{}_{Z+1}^AD+e^-+\bar\nu_e$ | $[\mechanical{M}(X)-\mechanical{M}(D)]c^2$ |
| $\beta^+$ | $\,{}_Z^AX\to\,{}_{Z-1}^AD+e^++\nu_e$ | $[\mechanical{M}(X)-\mechanical{M}(D)-2\mechanical{m}_e]c^2$ |
| Electron capture | $\,{}_Z^AX+e^-\to\,{}_{Z-1}^AD+\nu_e$ | $[\mechanical{M}(X)-\mechanical{M}(D)]c^2$ |

The nucleon changes are $n\to p+e^-+\bar\nu_e$, $p\to n+e^++\nu_e$ inside a suitable parent nucleus, and $p+e^-\to n+\nu_e$. The review page draws an antineutrino in some of the last two lines. Both of those processes emit an electron neutrino, as on [[Nuclear mass, decay channels, and dating problems#Beta decay, electron capture, and gamma decay|the section on Beta decay, electron capture, and gamma decay]].

##### Problem 11-33 — Beryllium-8

The sign of binding energy determines stability with respect to the specified channel. For $\,{}^8\mathrm{Be}$ relative to free nucleons,

$$
\energy{B}=[4(1.008665)+4(1.007825)-8.005305](931.5\,\unit{MeV})
=+56.5\,\unit{MeV}.
$$

For breakup into two $\,{}^4\mathrm{He}$ nuclei, the binding energy in the products-minus-parent convention is

$$
\energy{B}_{2\alpha}=[2(4.002603)-8.005305](931.5\,\unit{MeV})
=-0.0922\,\unit{MeV}.
$$

The two-alpha decay is energetically allowed.

##### Problem 11-35 — Forces and energies across a carbon nucleus

The radius model gives $\mechanical{R}(\,{}^{12}\mathrm C)=(1.2\,\unit{fm})12^{1/3}=2.74\,\unit{fm}$, so the diameter is $d=5.48\,\unit{fm}$. The sketch places two protons across the diameter.

![[Kyle Kabasares - Modern Physics - Protons across a carbon nucleus.png|**Fig. 72** Two protons separated by the estimated carbon-12 nuclear diameter.]]

The handwritten gravitational force magnitude is $\mechanical{F}_G=G\mechanical{m}_p^{\,2}/d^2=6.19\times10^{-36}\,\unit{N}$. The Coulomb force is $\electric{F}_C=k_e\electric{e}^{\,2}/d^2$. The page gives $9.65\,\unit{N}$. Using the displayed $d$ and constants gives approximately $7.7\,\unit{N}$.

The gravitational potential energy magnitude is $G\mechanical{m}_p^{\,2}/d\simeq3.4\times10^{-50}\,\unit{J}=2.1\times10^{-37}\,\unit{MeV}$. The repulsive electric potential energy is $k_e\electric{e}^{\,2}/d=4.2\times10^{-14}\,\unit{J}\simeq0.26\,\unit{MeV}$. The notebook compares the latter with a nuclear potential depth of $50\,\unit{MeV}$ over about $3\,\unit{fm}$ and gives a ratio of about 192.

##### Problem 11-36 — Mass scale from interaction range

For an assumed strong-force range $\mechanical{R}=5\,\unit{fm}$, use $\mechanical{R}=\hbar/(\mechanical{m}c)$.

$$
\mechanical{m}=\frac{\hbar}{\mechanical{R}c}
=\frac{1.05\times10^{-34}\,\unit{J\,s}}
{(5\times10^{-15}\,\unit{m})(2.99\times10^8\,\unit{m/s})}
=7.02\times10^{-29}\,\unit{kg}.
$$

The units reduce as $\unit{J\,s^2/m^2}=\unit{kg}$. The mass is about $77$ electron masses, or $39.3\,\unit{MeV}/c^2$ using $\mechanical{m}_ec^2=510.99\,\unit{keV}$.

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | Magnitude of the electron charge. |
| $\electric{F}$ | $\unit{C/mol}$ | Faraday constant | Charge per mole of elementary charges. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Determines the blackbody spectrum. |
| $h$ | $\unit{J\,s}$ | Planck constant | Relates the energy of one quantum to its frequency. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent multiplication term in the Hamiltonian. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate for the decay of an individual nucleus. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
| $\energy{B}$ | $\unit{MeV}$ | Nuclear binding energy | Energy required to separate a nucleus into its constituent nucleons. |
| $\thermal{C}_V$ | $\unit{J/K}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume. |
