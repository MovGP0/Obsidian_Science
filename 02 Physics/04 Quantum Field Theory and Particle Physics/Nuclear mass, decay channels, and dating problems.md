---
title: "Nuclear mass, decay channels, and dating problems"
---

> [!TLDR]
> Use mass differences, activity, and branching to analyze nuclear stability, decay chains, and age estimates.

## Worked lecture material

##### Radioactive decay

In the comparison used in lecture, alpha particles are helium-4 nuclei with the least penetration and most ionization. Gamma rays are very short-wavelength photons with the most penetration and least ionization in air. Beta particles (electrons in $\beta^-$ decay) lie between them.

Radioactive decay is statistical. Individual decays are random, while the expected number of decays in $dt$ is proportional to the number $N(t)$ of nuclei present. Let $\lambda$ be the decay constant.

$$
-dN=\lambda N\,dt,\qquad
\int_{N_0}^{N_f}\frac{dN}{N}=-\int_0^t\lambda\,dt,\qquad
\ln\frac{N_f}{N_0}=-\lambda t,\qquad N(t)=N_0e^{-\lambda t}.
$$

The activity is $R=-dN/dt=\lambda N_0e^{-\lambda t}=R_0e^{-\lambda t}$. One becquerel is one decay per second. One curie is $3.7\times10^{10}\,\unit{Bq}$.

##### Radioactive decay examples

**1.** A $1.0\,\unit{mg}$ sample has a half-life of one hour. After two hours its remaining radioactive mass is $(1.0\,\unit{mg})(1/2)(1/2)=0.25\,\unit{mg}$.

**2.** A polonium-210 sample undergoing alpha decay has activity $R=2000\,\unit{Bq}$. Find the number of nuclei and the mass. The calculation uses $t_{1/2}=138$ days.

$$
\frac12=e^{-\lambda t_{1/2}},\qquad
\lambda=\frac{\ln 2}{t_{1/2}},\qquad
N=\frac{R}{\lambda}=\frac{R t_{1/2}}{\ln 2}=3.44\times10^{10}.
$$

There is one nucleus per atom. Using $6.02\times10^{23}$ atoms per mole and a molar mass of $0.210\,\unit{kg/mol}$ gives a sample mass of $1.2\times10^{-14}\,\unit{kg}$.

##### The nucleus

**1. Nuclear size.** Could electrons be constituents of the nucleus? Estimate the momentum spread of an electron confined to a diameter of $8.0\times10^{-15}\,\unit{m}$ using the Heisenberg uncertainty relation.

$$
\Delta x\,\Delta p_x\ge\frac{\hbar}{2},\qquad
\Delta p_x\gtrsim\frac{6.58\times10^{-16}\,\unit{eV\,s}}{2(8.0\times10^{-15}\,\unit{m})}
=0.041\,\unit{eV\,s/m}.
$$

This gives a momentum scale with $pc\simeq12.3\,\unit{MeV}$. The handwritten estimate of $81\,\unit{keV}$ uses $938\,\unit{MeV}/c^2$, the proton mass, in $p^2/(2m)$. For an electron the momentum is relativistic, giving a kinetic energy scale $\sqrt{(pc)^2+(\mechanical{m}_ec^2)^2}-\mechanical{m}_ec^2$ of roughly $12\,\unit{MeV}$. The lecture compares the confinement scale with the $13.6\,\unit{eV}$ binding energy of the electron in hydrogen.

The mass number $A$ is the total number of protons and neutrons. The atomic number $Z$ counts protons and $N$ counts neutrons, so $A=N+Z$. The notation $\,{}_Z^AX_N$ gives, for example, $\,{}_8^{16}\mathrm O_8$, also written $\,{}_8^{16}\mathrm O$ or $\,{}^{16}\mathrm O$.

**2. Nuclear spin.** The deuteron is the nucleus of deuterium, $\,{}_1^2\mathrm H$, with $Z=1$, $A=2$, and spin 1. A hypothetical model with two protons and one electron would combine three spin-$1/2$ particles. Its spin projections would be half-integers, $\pm1/2$ or $\pm3/2$, inconsistent with spin 1.

**3. Nuclear magnetic moments.** The Bohr and nuclear magnetons use the electron and proton masses, respectively.

$$
\magnetic{\mu}_B=\frac{\electric{e}\hbar}{2\mechanical{m}_e},
\qquad
\magnetic{\mu}_N=\frac{\electric{e}\hbar}{2\mechanical{m}_p},
\qquad
\mechanical{m}_e=9.11\times10^{-31}\,\unit{kg},\quad
\mechanical{m}_p=1.67\times10^{-27}\,\unit{kg}.
$$

The electron moment is approximately one Bohr magneton in magnitude. The nuclear magneton sets the scale of the proton's magnetic moment.

##### Nuclear radius and density

The scattering sketch shows deflection by a nucleus. The Coulomb potential energy for two unit positive charges is $\energy{V}=\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$. The notes label the matter radius and connect the nuclear scale with the short range of the strong force.

![[Kyle Kabasares - Modern Physics - Alpha scattering and nuclear radius.png|**Fig. 57** Deflection of an alpha particle near a nucleus.]]

The second sketch shows polonium-210 alpha particles hitting beryllium, producing penetrating radiation that passes through lead and ejects protons from paraffin. The handwritten proton energy is labeled $5.7\,\unit{keV}$.

![[Kyle Kabasares - Modern Physics - Neutron discovery sketch.png|**Fig. 58** Beryllium, lead, and paraffin in the neutron-discovery sketch.]]

With nuclear radius $\mechanical{R}=R_0A^{1/3}$ and $R_0=1.2\times10^{-15}\,\unit{m}=1.2\,\unit{fm}$, the volume is $(4\pi/3)R_0^3A$. The mass is approximately $uA$, where $u$ is the atomic mass unit. The density is approximately independent of $A$,

$$
\mechanical{\rho}=\frac{uA}{(4\pi/3)R_0^3A}
=\frac{u}{(4\pi/3)R_0^3}
\simeq2.3\times10^{17}\,\unit{kg/m^3}.
$$

##### Nuclear magnetons and the confinement estimate

The lecture revisits the calculation from Friday. A nucleon is a nuclear particle, either a proton or a neutron. Nuclear magnetic moments are expressed in nuclear magnetons.

$$
\magnetic{\mu}_N=\frac{\electric{e}\hbar}{2\mechanical{m}_p},\qquad
\magnetic{\mu}_p=2.79\magnetic{\mu}_N,\qquad
\magnetic{\mu}_n=-1.91\magnetic{\mu}_N,\qquad
\magnetic{\mu}_e=-1.00116\magnetic{\mu}_B.
$$

The nuclear magneton is roughly 1800 times smaller than the Bohr magneton. The neutron has zero net charge but a negative magnetic moment, indicating an internal charge distribution.

For the confinement estimate, take $\Delta x$ of order the nuclear diameter and $\mechanical{p}_x$ of order $\Delta p_x$. The smallest momentum spread in the estimate is $\hbar/(2\Delta x)=0.041\,\unit{eV\,s/m}$. Using the nonrelativistic expression for a proton with $\mechanical{m}_pc^2=938\,\unit{MeV}$ gives

$$
\energy{K}\simeq\frac{(\Delta p_xc)^2}{2\mechanical{m}_pc^2}
=8.06\times10^4\,\unit{eV}\simeq0.08\,\unit{MeV}.
$$

For the electron, the handwritten calculation uses $\mechanical{m}_ec^2=511\,\unit{keV}$ in the nonrelativistic formula and obtains $(pc)^2/(2\mechanical{m}_ec^2)=148\,\unit{MeV}$. The estimate illustrates the large energy cost of nuclear confinement. The relativistic kinetic energy for the same momentum scale is about $12\,\unit{MeV}$, as noted on [[#The nucleus|the section on The nucleus]].

The radius model $\mechanical{R}=R_0A^{1/3}$ with $R_0=1.2\,\unit{fm}$ gives

$$
\mechanical{R}(\,{}^{238}\mathrm U)=7.4\,\unit{fm},\qquad
\mechanical{R}(\,{}^4\mathrm{He})=1.9\,\unit{fm},\qquad
\frac{\mechanical{R}(\,{}^{238}\mathrm U)}{\mechanical{R}(\,{}^4\mathrm{He})}=3.9.
$$

In nuclide notation, $A$ counts protons plus neutrons, $Z$ counts protons, and $N$ counts neutrons. The density is mass divided by the spherical volume $(4\pi/3)\mechanical{R}^{\,3}$.

The strong nuclear force contributes to binding. The atom's mass is smaller than the sum $Z\mechanical{m}_e+Z\mechanical{m}_p+N\mechanical{m}_n$ for its separated constituents. The atomic electron binding energy compares the mass of the bare nucleus plus free electrons with the mass of the atom.

$$
\energy{B}_{\mathrm{atomic}}=(\mechanical{m}_{\mathrm{nucleus}}+Z\mechanical{m}_e-\mechanical{m}_{\mathrm{atom}})c^2.
$$

The deuteron is the nucleus of deuterium and contains one proton and one neutron. The atom's mass $2.014102\,\unit{u}$ exceeds the nuclear mass, about $2.01355\,\unit{u}$, by approximately the electron mass $0.000549\,\unit{u}$ when electron binding is neglected. Using atomic masses cancels the electron masses in the difference.

$$
\begin{aligned}
\mechanical{M}(\,{}^2\mathrm H)&\simeq\mechanical{M}(\,{}^1\mathrm H)+\mechanical{m}_n-\energy{B}_d/c^2,\\
\energy{B}_d&=[\mechanical{M}(\,{}^1\mathrm H)+\mechanical{m}_n-\mechanical{M}(\,{}^2\mathrm H)]c^2\\
&=(1.007825+1.008665-2.014102)\,\unit{u}\,c^2\simeq2.22\,\unit{MeV}.
\end{aligned}
$$

The conversion is $1\,\unit{u}\,c^2\simeq931.5\,\unit{MeV}$.

##### Nuclear binding energy

For a nuclide $\,{}_Z^AX$, $A=Z+N$ is the mass number, $Z$ counts protons, $N$ counts neutrons, and $X$ is the element symbol. Using atomic masses and neglecting the electronic binding correction,

$$
\energy{B}(\,{}_Z^AX)=
[N\mechanical{m}_n+Z\mechanical{M}(\,{}^1\mathrm H)-\mechanical{M}(\,{}_Z^AX)]c^2.
$$

The binding energy of the deuteron is $\energy{B}_d=2.224\,\unit{MeV}$. In $\gamma+d\to n+p$, the threshold photon energy includes the recoil term. In the mass notation used in the notes,

$$
hf_{\min}=\energy{B}_d\left[1+\frac{\energy{B}_d}{2\mechanical{M}(\,{}^2\mathrm H)c^2}\right].
$$

The potential sketches compare long-range Coulomb attraction for an electron and positron with a nuclear potential and a short-range square-well approximation for a neutron–proton collision. The approximation sets the potential to zero outside about $3\,\unit{fm}$. The collision sketch labels the impact parameter $b$.

![[Kyle Kabasares - Modern Physics - Coulomb and nuclear potentials.png|**Fig. 59** Coulomb and nuclear potential sketches and neutron–proton scattering.]]

A nucleus is energetically stable against a breakup into $R$ and $S$ when its mass is smaller than the combined product mass.

$$
\energy{B}_{R+S}=[\mechanical{M}(R)+\mechanical{M}(S)-\mechanical{M}(\,{}_Z^AX)]c^2.
$$

A positive value means the breakup requires energy. A negative value makes that channel energetically possible. The starred remark allows for persistence despite a negative value, as may occur when a decay is strongly inhibited.

##### Beryllium-8 example

Show that $\,{}^8\mathrm{Be}$ has positive binding energy relative to free nucleons but is unstable against breakup into two alpha particles.

$$
\begin{aligned}
\energy{B}(\,{}^8\mathrm{Be})
&=[4\mechanical{m}_n+4\mechanical{M}(\,{}^1\mathrm H)-\mechanical{M}(\,{}^8\mathrm{Be})]c^2\\
&=[4(1.008665)+4(1.007825)-8.005305]\,\unit{u}\,c^2
\simeq56.5\,\unit{MeV}.
\end{aligned}
$$

For $\,{}^8\mathrm{Be}\to2\alpha$, compare $2\mechanical{M}(\,{}^4\mathrm{He})$ with $\mechanical{M}(\,{}^8\mathrm{Be})$.

For $\,{}^8\mathrm{Be}\to2\alpha$, the mass difference in the order products minus parent is $[2(4.002603)-8.005305]\,\unit{u}$. Multiplying by $c^2$ gives approximately $-0.093\,\unit{MeV}$, so the breakup is energetically allowed.

For radioactive decay, $R=\lambda N(t)$ and $N(t)=N_0e^{-\lambda t}$. The half-life and mean lifetime are

$$
t_{1/2}=-\frac{\ln(1/2)}{\lambda}=\frac{\ln2}{\lambda}\simeq\frac{0.693}{\lambda},
\qquad
\tau=\frac1\lambda=\frac{t_{1/2}}{\ln2}.
$$

Decay conserves total mass-energy, linear momentum, angular momentum, electric charge, and the total nucleon number in these low-energy reactions. For a parent at rest decaying to a heavier daughter $D$ and a lighter product $Y$,

$$
\mechanical{M}(\,{}_Z^AX)=\mechanical{M}_D+\mechanical{M}_Y+\frac{\energy{Q}}{c^2}.
$$

The disintegration energy $\energy{Q}$ goes into the kinetic energies of the products in this two-body case.

##### Decay series

Mass-energy, linear momentum, angular momentum, and electric charge are conserved. The sum of the mass numbers $A$ over all nuclear products is also conserved.

Using $1\,\unit{u}\,c^2\simeq931.5\,\unit{MeV}$, the disintegration energy is $\energy{Q}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}_D-\mechanical{M}_Y]c^2$. It is the negative of the binding energy with respect to that particular breakup channel.

An alpha particle binds two protons and two neutrons by about $28.3\,\unit{MeV}$. Alpha decay is energetically possible if the corresponding four free nucleons are bound to the parent by less than that amount.

$$
\,{}_Z^AX\to\,{}_{Z-2}^{A-4}D+\alpha,\qquad
\energy{Q}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z-2}^{A-4}D)-\mechanical{M}(\,{}^4\mathrm{He})]c^2.
$$

A positive $\energy{Q}$ allows the decay energetically.

##### Uranium-230 decay channels

| Channel | Decay energy in the notes |
| --- | --- |
| $\,{}^{230}_{92}\mathrm U\to n+\,{}^{229}_{92}\mathrm U$ | $-7.7\,\unit{MeV}$ |
| $\,{}^{230}_{92}\mathrm U\to p+\,{}^{229}_{91}\mathrm{Pa}$ | $-5.6\,\unit{MeV}$ |
| $\,{}^{230}_{92}\mathrm U\to\,{}^{226}_{90}\mathrm{Th}+\alpha$ | $+6.0\,\unit{MeV}$ |

The mass entries in $\unit{u}$ are $230.033927$ for uranium-230, $229.033496$ for uranium-229, $226.024891$ for thorium-226, $4.002603$ for helium-4, and $1.008665$ for the neutron. For the proton-emission calculation with atomic masses, the listed $1.007825\,\unit{u}$ is the hydrogen atom mass. The single-neutron and single-proton channels are energetically closed, while the alpha channel is open.

##### Beta decay, electron capture, and gamma decay

In $\beta^-$ decay, $n\to p+e^-+\bar\nu_e$. The nuclear transition and the decay energy in terms of neutral atomic masses are

$$
\,{}_Z^AX\to\,{}_{Z+1}^AD+e^-+\bar\nu_e,\qquad
\energy{Q}_{\beta^-}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z+1}^AD)]c^2.
$$

In $\beta^+$ decay, a proton in the nucleus converts to a neutron with a positron and a neutrino.

$$
\,{}_Z^AX\to\,{}_{Z-1}^AD+e^++\nu_e,\qquad
\energy{Q}_{\beta^+}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z-1}^AD)-2\mechanical{m}_e]c^2.
$$

In electron capture, $p+e^-\to n+\nu_e$. The daughter has $Z-1$ and the same $A$. With neutral atomic masses, $\energy{Q}_{\mathrm{EC}}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z-1}^AD)]c^2$.

For gamma decay, $X^*\to X+\gamma$. Neglecting recoil, the photon energy is $hf=\energy{E}(X^*)-\energy{E}(X)$.

##### Uranium–lead dating example

Assume all $\,{}^{206}\mathrm{Pb}$ in the rock came from $\,{}^{238}\mathrm U$, the longest-lived member of the chain, with $t_{1/2}=4.47\times10^9$ years. The measured number ratio is $N_{\mathrm{Pb}}/N_{\mathrm U}=0.60$. With $N_{\mathrm U}=N_0e^{-\lambda t}$ and $N_{\mathrm{Pb}}=N_0(1-e^{-\lambda t})$,

$$
0.60=e^{\lambda t}-1,\qquad
t=\frac{t_{1/2}}{\ln2}\ln(1.60)\simeq3.0\times10^9\ \text{years}.
$$

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | Magnitude of the electron charge. |
| $\varepsilon$ | $1$ | Emissivity | Ratio of emitted power to that of a blackbody at the same temperature. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent multiplication term in the Hamiltonian. |
| $\magnetic{\mu}_B$ | $\unit{J/T}$ | Bohr magneton | Scale of the electron orbital magnetic moment. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate for the decay of an individual nucleus. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
| $t_{1/2}$ | $\unit{s}$ | Half-life | Time for the expected number of radioactive nuclei to fall by half. |
| $\magnetic{\mu}_N$ | $\unit{J/T}$ | Nuclear magneton | Magnetic moment scale based on the proton mass. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Nuclear mass per unit volume. |
| $\energy{B}$ | $\unit{MeV}$ | Nuclear binding energy | Energy required to separate a nucleus into its constituent nucleons. |
| $\tau$ | $\unit{s}$ | Mean lifetime | Reciprocal of the decay constant. |
| $\energy{Q}$ | $\unit{MeV}$ | Decay energy | Parent rest energy minus the sum of product rest energies. |
