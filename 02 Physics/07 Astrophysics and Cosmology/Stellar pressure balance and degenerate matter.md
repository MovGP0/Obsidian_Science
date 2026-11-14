---
title: "Stellar pressure balance and degenerate matter"
---

> [!TLDR]
> Compare gravity and internal pressure in stellar models and see how relativistic degeneracy changes the stability limit.

## Worked lecture material

For adiabatic expansion of a photon gas, its entropy is constant, so $\mechanical{V}\thermal{T}^3$ is constant. Combined with $\mechanical{P}\propto\thermal{T}^4$, this gives

$$
\mechanical{P}\mechanical{V}^{4/3}=\text{constant}.
$$

This is a polytropic relation of the form $\mechanical{P}\mechanical{V}^{\thermal{\gamma}}=\text{constant}$.

##### Stellar structure case study

Approximate a star as a sphere of uniform density $\mechanical{\rho}$ out to radius $\mechanical{R}$. The source sketches the actual density dropping toward the outer edge and uses a sharp cutoff at $\mechanical{R}$ for the estimate. Build the star by adding shells. The interaction energy of a shell $d\mechanical{m}=4\pi\mechanical{r}^2\mechanical{\rho}\,d\mechanical{r}$ with the interior mass $\mechanical{M}(\mechanical{r})=4\pi\mechanical{\rho}\mechanical{r}^3/3$ is

$$
d\energy{V}_g=-\frac{\mechanical{G}\mechanical{M}(\mechanical{r})\,d\mechanical{m}}{\mechanical{r}}.
$$

The total mass is fixed at $\mechanical{M}=N\mechanical{m}_N=4\pi\mechanical{\rho}\mechanical{R}^3/3$, where $N$ counts nucleons. Thus

$$
\begin{aligned}
\energy{V}_g
&=-\frac{\mechanical{G}(4\pi)^2\mechanical{\rho}^2}{3}\int_0^{\mechanical{R}}\mechanical{r}^4\,d\mechanical{r}\\
&=-\frac{3\mechanical{G}\mechanical{M}^2}{5\mechanical{R}}
=-\frac35\left(\frac{4\pi}{3}\right)^{1/3}\mechanical{G}(N\mechanical{m}_N)^2\mechanical{V}^{-1/3}.
\end{aligned}
$$

The effective gravitational pressure and nonrelativistic electron degeneracy pressure are

$$
\begin{aligned}
\mechanical{P}_g&=-\left(\frac{\partial\energy{V}_g}{\partial\mechanical{V}}\right)_N
=-\frac15\left(\frac{4\pi}{3}\right)^{1/3}\mechanical{G}(N\mechanical{m}_N)^2\mechanical{V}^{-4/3},\\
\mechanical{P}_{\mathrm{deg}}&=\frac{(3\pi^2)^{2/3}\energy{\hbar}^2}{5\mechanical{m}_e}\left(\frac{N_e}{\mechanical{V}}\right)^{5/3}.
\end{aligned}
$$

For fully ionized matter, the electron fraction is $Y_e=N_e/N$. For $^{56}\mathrm{Fe}$ it is $26/56\approx 0.464$, and for $^{12}\mathrm C$ it is $6/12=0.5$.

##### Stellar fusion and pressure balance

In a Sun-like star, positrons can annihilate with electrons, $e^+ + e^- \to 2\gamma$. The lecture lists the following proton–proton chain reactions and energies,

$$
\begin{aligned}
{}^{1}\mathrm H+{}^{1}\mathrm H
&\to {}^{2}\mathrm H+e^++\nu_e &&(1.44\;\unit{MeV}\text{ including positron annihilation}),\\
{}^{2}\mathrm H+{}^{1}\mathrm H
&\to {}^{3}\mathrm{He}+\gamma &&(5.49\;\unit{MeV}),\\
{}^{3}\mathrm{He}+{}^{3}\mathrm{He}
&\to {}^{4}\mathrm{He}+{}^{1}\mathrm H+{}^{1}\mathrm H &&(12.85\;\unit{MeV}).
\end{aligned}
$$

The helium-burning steps lead through an unstable beryllium intermediate,

$$
\begin{aligned}
{}^{4}\mathrm{He}+{}^{4}\mathrm{He}
&\rightleftharpoons {}^{8}\mathrm{Be} &&(\text{formation costs about }95\;\unit{keV}),\\
{}^{8}\mathrm{Be}+{}^{4}\mathrm{He}
&\to {}^{12}\mathrm C+\gamma &&(7.4\;\unit{MeV}).
\end{aligned}
$$

The handwritten first helium-burning line includes a $\gamma$ beside the endothermic formation of $^{8}\mathrm{Be}$. The notebook identifies $^{56}\mathrm{Fe}$ with the endpoint of energy-releasing stellar fusion.

For the uniform-density degenerate star, impose hydrostatic balance in the pressure estimate,

$$
|\mechanical{P}_g|=\mechanical{P}_{\mathrm{deg}}.
$$

Use this relation to solve for the radius $\mechanical{R}$.

##### Stellar structure

The uniform-density model uses $\mechanical{M}=4\pi\mechanical{R}^3\mechanical{\rho}/3$ and $Y_e=N_e/N\approx 1/2$. The magnitude of the gravitational pressure scales as $\mechanical{V}^{-4/3}$, and the nonrelativistic electron degeneracy pressure scales as $\mechanical{V}^{-5/3}$. Equilibrium requires $|\mechanical{P}_g|=\mechanical{P}_{\mathrm{deg}}$.

The first finite-temperature correction to the zero-temperature Fermi gas result has relative order $(\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F})^2$. The Fermi energy is calculated from the electron density. When this ratio is small, the zero-temperature pressure is a good approximation.

Solving for the equilibrium radius with the pressures on [[#Stellar structure case study|the section on Stellar structure case study]] gives

$$
\mechanical{R}_{\mathrm{eq}}
=\left(\frac{9\pi}{4}\right)^{2/3}
\frac{\energy{\hbar}^2Y_e^{5/3}}{\mechanical{G}\mechanical{m}_e\mechanical{m}_N^2}N^{-1/3}.
$$

The boxed expression in the notebook uses the numerical factor $(81\pi^2/128)^{1/3}$. Substitution of $Y_e=1/2$ in the pressure balance above gives $(81\pi^2/512)^{1/3}$. For a solar mass, $N\sim10^{57}$, and the lecture estimates a radius on the order of $10^4\;\unit{km}$. Electron degeneracy supports a white dwarf, making it a macroscopic example of quantum mechanics.

##### Relativistic case

For ultrarelativistic electrons, use $\energy{\epsilon}=\mechanical{c}|\mechanical{\vec p}|$ in place of the nonrelativistic dispersion.

At zero temperature, fill both spin states for each wavevector inside the Fermi sphere. Write $\mechanical{p}_{\mathrm F}=\energy{\hbar}\signal{k}_F$ for the Fermi momentum. The ultrarelativistic electron energy is

$$
\energy{E}_{\mathrm{Fermi}}=2\mechanical{V}
\int_{|\signal{\vec k}|\le\signal{k}_F}\frac{d^3\signal{k}}{(2\pi)^3}
\,\energy{\hbar}\mechanical{c}|\signal{\vec k}|
=\frac{\mechanical{V}\mechanical{c}\mechanical{p}_{\mathrm F}^4}{4\pi^2\energy{\hbar}^3}.
$$

With fixed $Y_e$, the Fermi momentum scales as $\energy{\hbar}(N/\mechanical{V})^{1/3}$. Thus $\energy{E}_{\mathrm{Fermi}}\propto N^{4/3}\mechanical{V}^{-1/3}$, and $-\partial\energy{E}_{\mathrm{Fermi}}/\partial\mechanical{V}\propto\mechanical{V}^{-4/3}$.

##### Instability at small radius

Add the negative gravitational binding energy and the positive electron energy. Up to numerical factors and at fixed electron fraction,

$$
\begin{aligned}
\energy{E}_{\mathrm{tot}}&=\energy{E}_{\mathrm{grav}}+\energy{E}_{\mathrm{Fermi}},\\
\energy{E}_{\mathrm{grav}}&\sim-\frac{\mechanical{G}(N\mechanical{m}_N)^2}{\mechanical{R}},&
\energy{E}_{\mathrm{Fermi}}&\sim\frac{\energy{\hbar}\mechanical{c}N^{4/3}}{\mechanical{R}}.
\end{aligned}
$$

Both terms now scale as $1/\mechanical{R}$. When gravity dominates, further compression lowers the energy in the small-radius model. Balancing the coefficients gives an estimate of the instability threshold,

$$
N\sim\left(\frac{\energy{\hbar}\mechanical{c}}{\mechanical{G}\mechanical{m}_N^2}\right)^{3/2}.
$$

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Stellar instability energy sketch.png|**Fig. 16** Schematic energy versus radius. The lecture marks a gravity-dominated branch and instability at small radius.]]

##### Chandrasekhar limit and neutron stars

In natural units, $\energy{\hbar}=\mechanical{c}=1$ and $\mechanical{m}_N\sim1\;\unit{GeV}$. The handwritten estimate gives $\mechanical{G}^{-1}\sim(10^{18}\;\unit{GeV})^2$, with its next line using $10^{19}\;\unit{GeV}$ to obtain $N\sim10^{57}$. This is comparable to the number of nucleons in the Sun.

The lecture identifies the critical white-dwarf mass with the Chandrasekhar limit and gives the date 1931. It records $1.26\,\mechanical{M}_\odot$ and a revised value of $1.44\,\mechanical{M}_\odot$.

The lecture sketches a progression from a star through a white dwarf to a neutron star and gives the electron capture reaction

$$
e^-+p\to n+\nu_e,
$$

where $\nu_e$ is an electron neutrino. In the simple degeneracy estimate for a neutron star, take the neutron number to be approximately the nucleon number and replace the electron mass by the nucleon mass. With $N_e$ replaced by $N$ in the model on [[#Stellar structure|the section on Stellar structure]], this gives

$$
\mechanical{R}\sim
\left(\frac{81\pi^2}{16}\right)^{1/3}
\frac{\energy{\hbar}^2}{\mechanical{G}\mechanical{m}_N^3}\,N^{-1/3}.
$$

The prefactor exponent $1/3$ follows from the pressure-balance model. The notebook estimates $\mechanical{R}\sim10\;\unit{km}$ and cites Oppenheimer and Volkoff, 1939.

## Source

Kyle Kabasares, *Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of a particle. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $N$ | 1 | Particle count | Number of atoms or molecules. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates absolute temperature to a microscopic energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature of the system or reservoir. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Propagation speed in the photon spectrum formula. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | Magnitude of the wavevector for a quantum state in the box. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $\energy{E}_{\mathrm F}$ | $\unit{J}$ or $\unit{eV}$ | Fermi energy | Zero-temperature energy at the edge of the filled one-particle states. |
| $\mechanical{M}$ | $\unit{kg}$ | Molecular mass | Sum of the constituent particle masses. |
| $\thermal{\gamma}$ | 1 | Adiabatic exponent | Heat-capacity ratio for the ideal gas when the heat capacities are constant. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\mechanical{p}_{\mathrm F}$ | $\unit{kg\,m\,s^{-1}}$ | Fermi momentum | Momentum magnitude at the boundary of the occupied states at zero temperature. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Sets the Newtonian gravitational interaction strength. |
| $\mechanical{M}$ | $\unit{kg}$ | Stellar mass | Mass interior to a shell or total mass, as indicated by the argument. |
| $\mechanical{R}$ | $\unit{m}$ | Stellar radius | Outer cutoff in the uniform-density approximation. |
| $\energy{V}_g$ | $\unit{J}$ | Gravitational potential energy | Binding energy contribution obtained by assembling spherical shells. |
| $\mechanical{P}_g$, $\mechanical{P}_{\mathrm{deg}}$ | $\unit{Pa}$ | Gravitational and degeneracy pressure | Effective inward pressure from binding and outward pressure of a degenerate gas. |
| $Y_e$ | $1$ | Electron fraction | Number of electrons per nucleon in fully ionized matter. |
| $\signal{k}_F$ | $\unit{m^{-1}}$ | Fermi wave number | Radius of the occupied Fermi sphere in wavevector space. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | Reference unit for the white-dwarf critical mass. |
