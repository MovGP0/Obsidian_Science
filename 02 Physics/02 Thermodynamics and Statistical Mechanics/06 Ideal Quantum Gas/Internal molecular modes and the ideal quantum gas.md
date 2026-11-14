---
title: "Internal molecular modes and the ideal quantum gas"
---

> [!TLDR]
> Compare monatomic and diatomic gases and derive quantum-gas pressure and energy from occupation numbers.

## Worked lecture material

Separate the center-of-mass position $\mechanical{\vec X}$ from the internal relative coordinates $\mechanical{\vec x}$. In a box of side $\mechanical{L}$ the product wavefunction and energy are

$$
\begin{aligned}
\psi_i&=\mechanical{L}^{-3/2}
e^{i\mechanical{\vec p}\cdot\mechanical{\vec X}/\energy{\hbar}}\phi_i(\mechanical{\vec x}),\\
\energy{\hat H}\psi_i&=\left(\frac{\mechanical{p}^2}{2\mechanical{M}}+\energy{\epsilon}_i\right)\psi_i.
\end{aligned}
$$

The internal levels $\energy{\epsilon}_i$ can include electronic energies. The one-molecule partition function is the translational Gaussian integral times the internal partition function $j$.

$$
\begin{aligned}
Z_1&=\frac{\mechanical{V}}{(2\pi\energy{\hbar})^3}
\int d^3\mechanical{\vec p}\sum_i e^{-\thermal{\beta}(\energy{\epsilon}_i+\mechanical{p}^2/(2\mechanical{M}))}\\
&=\mechanical{V}\left(\frac{\mechanical{M}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}j(\thermal{T}),
\qquad
j(\thermal{T})=\sum_i e^{-\thermal{\beta}\energy{\epsilon}_i}.
\end{aligned}
$$

The margin cites Pathria page 142. For $N$ independent identical molecules in the dilute classical regime, $Z_N=Z_1^N/N!$. The internal term gives a separate contribution to the free and mean energies.

$$
\begin{aligned}
\energy{A}&=\energy{A}_{\mathrm{point}}-N\thermal{k}_{\mathrm B}\thermal{T}\ln j,\\
\langle\energy{E}\rangle&=\frac32N\thermal{k}_{\mathrm B}\thermal{T}
-N\frac{\partial\ln j}{\partial\thermal{\beta}}.
\end{aligned}
$$

The heat capacities are $\thermal{C}_V=\thermal{T}(\partial\thermal{S}/\partial\thermal{T})_V=(\partial\langle\energy{E}\rangle/\partial\thermal{T})_V$ and $\thermal{C}_P=\thermal{T}(\partial\thermal{S}/\partial\thermal{T})_P$, at fixed $N$. Thus

$$
\thermal{C}_V=\frac32N\thermal{k}_{\mathrm B}
+N\thermal{k}_{\mathrm B}\thermal{\beta}^2\frac{\partial^2\ln j}{\partial\thermal{\beta}^2}.
$$

The handwritten derivative in this line drops a superscript $2$ in the numerator. For noninteracting molecules the internal factor is independent of volume. In the grand ensemble $\ln\Xi=e^{\thermal{\beta}\energy{\mu}}Z_1=\langle N\rangle$, so $\energy{\Omega}=-\langle N\rangle/\thermal{\beta}$ and $\mechanical{P}\mechanical{V}=\langle N\rangle\thermal{k}_{\mathrm B}\thermal{T}$. The pressure heat capacity has the same internal term plus $\tfrac52N\thermal{k}_{\mathrm B}$, so $\thermal{C}_P-\thermal{C}_V=N\thermal{k}_{\mathrm B}$.

##### Monatomic gas example

If level $i$ has degeneracy $p_i$, then $j=\sum_i p_i e^{-\thermal{\beta}\energy{\epsilon}_i}$. The example takes zero electronic orbital and spin angular momentum and a nuclear spin $s_n$, giving degeneracy $2s_n+1$. With the ground energy as zero, $j\to2s_n+1$ as $\thermal{T}\to0$.

When electronic spin $s$ or orbital angular momentum $\ell$ is nonzero, the internal state count includes the associated multiplicities. The spin factor is $2s+1$, the orbital factor is $2\ell+1$, and the nuclear factor is $2s_n+1$. The sketch of $j(\thermal{T})/(2s_n+1)$ rises from the ground-multiplet degeneracy $2J+1$ toward $(2\ell+1)(2s+1)$ as higher levels within the electronic multiplet become thermally accessible.

##### Diatomic molecule

For a diatomic molecule restricted to its electronic ground state, the Hamiltonian separates into center-of-mass translation and relative motion.

$$
\energy{H}=\frac{\mechanical{P}_{\mathrm{cm}}^2}{2\mechanical{M}}
+\energy{\epsilon}_0
+\frac{\mechanical{p}_{\mathrm{rel}}^2}{2\mechanical{\mu}}
+\energy{V}(\mechanical{r}),
$$

where $\mechanical{\mu}$ is the reduced mass. Near the equilibrium bond length $\mechanical{r}_0$, use a rigid-rotor term and a harmonic vibrational potential,

$$
\energy{V}_{\mathrm{eff}}\approx
\frac{\energy{\hbar}^2\ell(\ell+1)}{2\mechanical{I}}+
\frac12\mechanical{k}(\mechanical{r}-\mechanical{r}_0)^2,
\qquad \mechanical{\omega}=\sqrt{\frac{\mechanical{k}}{\mechanical{\mu}}}.
$$

Relative to the electronic energy offset, the internal eigenvalues are

$$
\energy{E}_{\ell,n}=
\frac{\energy{\hbar}^2\ell(\ell+1)}{2\mechanical{I}}
+\energy{\hbar}\mechanical{\omega}\left(n+\frac12\right),
\qquad \ell,n=0,1,2,\ldots.
$$

The sketch shows closely spaced rotational levels grouped under each vibrational level. The internal partition function factors as $j=Z_{\mathrm{vib}}Z_{\mathrm{rot}}$.

For rotations there are $2\ell+1$ possible projections, $m=-\ell,\ldots,\ell$, so

$$
Z_{\mathrm{rot}}
=\sum_{\ell=0}^\infty(2\ell+1)e^{-\thermal{\beta}\energy{\hbar}^2\ell(\ell+1)/(2\mechanical{I})}.
$$

At low temperature, the $\ell=0$ and $\ell=1$ terms give $Z_{\mathrm{rot}}\approx1+3e^{-\thermal{\beta}\energy{\Delta}_{\mathrm{rot}}}$, where $\energy{\Delta}_{\mathrm{rot}}=\energy{\hbar}^2/\mechanical{I}$. The rotational heat capacity is exponentially small. Its leading term from $Z_{\mathrm{rot}}$ is $3N\thermal{k}_{\mathrm B}(\thermal{\beta}\energy{\Delta}_{\mathrm{rot}})^2e^{-\thermal{\beta}\energy{\Delta}_{\mathrm{rot}}}$. The handwritten prefactor is incomplete.

At high temperature replace the sum by an integral and approximate $\ell(\ell+1)\approx\ell^2$ and $2\ell+1\approx2\ell$ for the large $\ell$ values that contribute.

$$
Z_{\mathrm{rot}}\approx\int_0^\infty 2\ell\,e^{-\thermal{\beta}\energy{\hbar}^2\ell^2/(2\mechanical{I})}\,d\ell
=\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\hbar}^2/(2\mechanical{I})}.
$$

The rotational contribution to $\thermal{C}_V$ approaches $N\thermal{k}_{\mathrm B}$.

##### Internal modes of diatomic molecules

The sketches show rotation about an axis perpendicular to the bond and vibration along the bond. In the approximation used here, these modes are decoupled. For one molecule,

$$
Z=Z_{\mathrm{point}}Z_{\mathrm{rot}}Z_{\mathrm{vib}},\qquad
j=Z_{\mathrm{rot}}Z_{\mathrm{vib}}.
$$

Thus $\ln Z$ is a sum of translational, rotational, and vibrational terms. The effective-potential sketch shows a steep short-range rise, a minimum near the bond length $\mechanical{r}_0$, and a tail approaching zero at large separation.

$$
\begin{aligned}
Z_{\mathrm{rot}}&=\sum_{\ell=0}^{\infty}(2\ell+1)
e^{-\thermal{\beta}\energy{\hbar}^2\ell(\ell+1)/(2\mechanical{I})},\\
Z_{\mathrm{vib}}&=\sum_{n=0}^\infty e^{-\thermal{\beta}\energy{\hbar}\mechanical{\omega}(n+1/2)}
=\frac{1}{2\sinh[\energy{\hbar}\mechanical{\omega}/(2\thermal{k}_{\mathrm B}\thermal{T})]}.
\end{aligned}
$$

The notebook repeats the rotational limits. At low temperature the gap makes the rotational heat capacity exponentially small. The correct leading form from the partition function is given on [[#Diatomic molecule|the section on Diatomic molecule]]. At high temperature, replacing the rotational sum by an integral recovers the classical contribution $N\thermal{k}_{\mathrm B}$.

The heat-capacity sketch shows an exponentially suppressed contribution at low $\thermal{T}$ and a high-temperature plateau at $N\thermal{k}_{\mathrm B}$. The graph is marked “vibr.” The adjacent hydrogen estimate $\thermal{T}_0\approx85\;\unit{K}$ corresponds to the rotational scale $\energy{\hbar}^2/(2\mechanical{I}\thermal{k}_{\mathrm B})$. The notebook compares the plateau with the classical Dulong–Petit behavior, which fails at low temperatures.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Thermal activation of molecular heat capacity.png|**Fig. 10** An internal mode contributes little to heat capacity at low temperature and approaches its classical contribution as temperature rises.]]

The vibrational contribution to $\thermal{C}_V$ goes to zero as $\thermal{T}\to0$ and approaches $N\thermal{k}_{\mathrm B}$ at high temperature. The combined diatomic heat capacity has three regimes in the sketch. Translation gives $\thermal{C}_V/(N\thermal{k}_{\mathrm B})=3/2$. Activating rotation raises it to $5/2$. Activating vibration raises it to the classical $7/2$. The sketch marks a much lower temperature scale for rotation than for vibration and notes that the precise scales depend on the molecule. The references are Feynman's lectures and Pathria page 164.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Diatomic heat capacity plateaus.png|**Fig. 11** The rotational and vibrational modes raise the normalized heat capacity in separate temperature ranges.]]

##### Adiabatic exponent

For a temperature range in which $\thermal{C}_V$ is constant, define $\thermal{\gamma}$ by $\thermal{C}_V/(N\thermal{k}_{\mathrm B})=1/(\thermal{\gamma}-1)$. This is $\thermal{\gamma}=\thermal{C}_P/\thermal{C}_V$ for an ideal gas. Along a reversible adiabat, $\Delta\thermal{S}=0$ and $\thermal{C}_Vd\thermal{T}=-\mechanical{P}\,d\mechanical{V}$. Combining with the ideal gas law gives

$$
\mechanical{P}\mechanical{V}^{\thermal{\gamma}}=\text{constant}.
$$

The notebook notes that a polytropic equation of state is often used in stellar structure.

##### Fermi and Bose distributions at low and high temperature

The page returns to $\langle n_i\rangle=[e^{\thermal{\beta}(\energy{\epsilon}_i-\energy{\mu})}\pm1]^{-1}$ with the plus sign for fermions and the minus sign for bosons. It lists quantities to compute next from $\Xi$, including mean particle count or density, mean energy, energy fluctuations, heat capacity, and the pressure–volume relation.

##### Density of an ideal quantum gas

Multiply the mean occupation by the number of states in a momentum element. With degeneracy $g$, equal to $2s+1$ when all spin states contribute, this gives

$$
d\langle N\rangle=
\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}
\frac{d^3\mechanical{\vec p}}{e^{\thermal{\beta}(\energy{\epsilon}(\mechanical{p})-\energy{\mu})}\pm1}.
$$

The notebook emphasizes counting degeneracy. It lists $\energy{\epsilon}=\mechanical{p}^2/(2\mechanical{m})$ in the nonrelativistic case and $\energy{\epsilon}=\mechanical{c}|\mechanical{\vec p}|$ in the ultrarelativistic case. With the nonrelativistic dispersion, integrate angles and change variables to $\energy{E}=\mechanical{p}^2/(2\mechanical{m})$.

$$
\begin{aligned}
n=\frac{\langle N\rangle}{\mechanical{V}}
&=\frac{4\pi g}{(2\pi\energy{\hbar})^3}\int_0^\infty
\frac{\mechanical{p}^2\,d\mechanical{p}}{e^{\thermal{\beta}(\mechanical{p}^2/(2\mechanical{m})-\energy{\mu})}\pm1}\\
&=\frac{g(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{\sqrt{\energy{E}}\,d\energy{E}}{e^{\thermal{\beta}(\energy{E}-\energy{\mu})}\pm1}.
\end{aligned}
$$

The angular integral is $4\pi$, as required by the energy prefactor on the page. Set $x=\thermal{\beta}\energy{E}$, written $z$ in the notebook, to get

$$
n=\frac{g(2\mechanical{m})^{3/2}(\thermal{k}_{\mathrm B}\thermal{T})^{3/2}}
{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{x^{1/2}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}\pm1}.
$$

The notes ask for the limits $\thermal{\beta}\to0$ and $\thermal{\beta}\to\infty$. In general the integral gives $n(\thermal{T},\energy{\mu})$, which can be inverted to find $\energy{\mu}(\thermal{T},n)$.

The same continuum state count applies to the logarithm of the grand partition function.

$$
\ln\Xi
=\pm\sum_i\ln[1\pm e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}]
=\pm\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}
\int d^3\mechanical{\vec p}\,
\ln[1\pm e^{\thermal{\beta}(\energy{\mu}-\energy{\epsilon}(\mechanical{p}))}].
$$

Use the upper sign for fermions and the lower for bosons. The handwritten first sum reverses the exponent compared with the integral and the earlier partition functions. A final reminder gives the nonrelativistic dilute scaling $e^{\thermal{\beta}\energy{\mu}}\propto n\thermal{T}^{-3/2}$.

**Exercise.** Repeat the derivation from the beginning for a relativistic particle.

##### Pressure and mean energy of an ideal quantum gas

Change variables from momentum to energy in the grand partition function.

$$
\ln\Xi=\pm\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \sqrt{\energy{E}}\,
\ln[1\pm e^{\thermal{\beta}(\energy{\mu}-\energy{E})}]\,d\energy{E}.
$$

Integrate by parts using the primitive $(2/3)\energy{E}^{3/2}$ of $\sqrt{\energy{E}}$. The boundary term vanishes at zero and at infinity. The derivative of the signed logarithm is $-\thermal{\beta}/[e^{\thermal{\beta}(\energy{E}-\energy{\mu})}\pm1]$. Thus, with $x=\thermal{\beta}\energy{E}$,

$$
\ln\Xi=
\frac23\frac{g\mechanical{V}(2\mechanical{m})^{3/2}(\thermal{k}_{\mathrm B}\thermal{T})^{3/2}}
{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{x^{3/2}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}\pm1}.
$$

The notebook notes that the number-density integral has power $1/2$ instead of $3/2$. It identifies the general form $\int_0^\infty x^a/(A e^x\pm1)\,dx$, with $A=e^{-\thermal{\beta}\energy{\mu}}$, and mentions power-series expansions and MathWorld for evaluating such integrals.

From $\energy{\Omega}=-\thermal{k}_{\mathrm B}\thermal{T}\ln\Xi=-\mechanical{P}\mechanical{V}$, the pressure is

$$
\mechanical{P}=\frac23
\frac{g(2\mechanical{m})^{3/2}(\thermal{k}_{\mathrm B}\thermal{T})^{5/2}}
{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{x^{3/2}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}\pm1}.
$$

In the energy sum, the extra factor $\energy{E}$ relative to the number sum gives the same integral,

$$
\langle\energy{E}\rangle=
\frac{g\mechanical{V}(2\mechanical{m})^{3/2}(\thermal{k}_{\mathrm B}\thermal{T})^{5/2}}
{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{x^{3/2}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}\pm1}.
$$

The upper sign is for fermions and the lower for bosons. To express the pressure in terms of density and temperature, eliminate $\energy{\mu}$ with the density integral. The exact relation for the nonrelativistic ideal gas is $\mechanical{P}\mechanical{V}=\tfrac23\langle\energy{E}\rangle$.

**Exercise.** Repeat for the ultrarelativistic dispersion $\energy{E}=\mechanical{c}\mechanical{p}$. The stated result is $\mechanical{P}\mechanical{V}=\tfrac13\langle\energy{E}\rangle$.

##### High- and low-temperature limits

The lecture returns to the number density, energy per particle, and pressure obtained from $\Xi$ and $\energy{\Omega}$. It considers the high-temperature or low-density limit first, then the low-temperature or high-density limit, including the Fermi energy and Bose condensation.

##### Expansion at small fugacity

For the nonrelativistic dispersion $\energy{\epsilon}=\mechanical{p}^2/(2\mechanical{m})$, use the grand-potential integral of [[#Pressure and mean energy of an ideal quantum gas|the section on Pressure and mean energy of an ideal quantum gas]]. With $x=\thermal{\beta}\energy{\epsilon}$ and $z=e^{\thermal{\beta}\energy{\mu}}\ll1$, expand the occupation factor.

$$
\frac{1}{e^x/z\pm1}
=\frac{ze^{-x}}{1\pm ze^{-x}}
=ze^{-x}(1\mp ze^{-x}+\cdots).
$$

The first two terms in the pressure integral are

$$
\int_0^\infty\frac{x^{3/2}\,dx}{e^x/z\pm1}
=z\,\frac{3\sqrt\pi}{4}
\left(1\mp\frac{z}{2^{5/2}}+\cdots\right).
$$

Substituting gives

$$
\energy{\Omega}=-\mechanical{P}\mechanical{V}
=-g\mechanical{V}\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}
\thermal{k}_{\mathrm B}\thermal{T}\,z
\left(1\mp\frac{z}{2^{5/2}}+\cdots\right).
$$

The phase-space factor uses $\energy{\hbar}^2$ in the denominator, as on the preceding page. The first term is the classical ideal gas result. The next task is to express $\mechanical{P}$ in terms of volume at fixed $\langle N\rangle$ by eliminating $z$.

Differentiate the grand potential at fixed $\thermal{T},\mechanical{V}$ to get the mean particle count. Using the thermal wavelength to group the factors,

$$
\langle N\rangle
=-\left(\frac{\partial\energy{\Omega}}{\partial\energy{\mu}}\right)_{T,V}
=\frac{g\mechanical{V}}{\signal{\lambda}_{\mathrm{th}}^3}\,
z\left(1\mp\frac{z}{2^{3/2}}+\cdots\right).
$$

At fixed density $n=\langle N\rangle/\mechanical{V}$, the leading solution is $z_0=n\signal{\lambda}_{\mathrm{th}}^3/g$. Expand the reciprocal of the bracket and insert $z_0$ in its first correction.

$$
z=z_0\left(1\pm\frac{z_0}{2^{3/2}}+\cdots\right),
\qquad
z_0=\frac{n}{g}\left(\frac{2\pi\energy{\hbar}^2}{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}\right)^{3/2}.
$$

This determines $\energy{\mu}(\thermal{T},n)$ through $z=e^{\thermal{\beta}\energy{\mu}}$. Using the same substitution in the pressure expression yields

$$
-\energy{\Omega}=\mechanical{P}\mechanical{V}
=\langle N\rangle\thermal{k}_{\mathrm B}\thermal{T}
\left(1\pm\frac{n\signal{\lambda}_{\mathrm{th}}^3}{2^{5/2}g}+\cdots\right).
$$

The first term is the classical ideal gas law. At the same density and temperature the correction increases the pressure for fermions and decreases it for bosons.

The notes then turn to the very-low-temperature regime. The stated density condition is $n\gg(\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T})^{3/2}/\energy{\hbar}^3$, up to constants. Equivalently, the thermal energy is small compared with $\energy{\hbar}^2n^{2/3}/\mechanical{m}$. The handwritten temperature inequality has $n$ where this equivalence requires $n^{2/3}$.

## Source

Kyle Kabasares, *Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of a particle. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\psi$ | — | Wavefunction | Quantum state amplitude with units that depend on the representation. |
| $\energy{\hat H}$ | $\unit{J}$ | Hamiltonian | Energy operator that determines quantum time evolution. |
| $N$ | 1 | Particle count | Number of atoms or molecules. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates absolute temperature to a microscopic energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature of the system or reservoir. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\mechanical{\vec r}$, $\mechanical{\vec x}$ | $\unit{m}$ | Position | Spatial position on a particle trajectory. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{H}$ | $\unit{J}$ | Enthalpy or Hamiltonian | Internal energy plus the pressure–volume product in thermodynamics. In mechanics and ensemble weights, the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $Z$ | 1 | Partition function | Sum of the Boltzmann weights of the accessible states. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $n_i$ | 1 | Occupation number | Number of particles in a given energy level. |
| $\energy{\epsilon}_i$ | $\unit{J}$ | Single-particle energy | Energy of a particle occupying level $i$. |
| $\energy{\mu}$ | $\unit{J}$ per particle | Chemical potential | Intensive energy variable conjugate to particle number. |
| $\Omega$ | 1 | Multiplicity | Number of accessible microstates, including the cumulative count in the ideal-gas calculation. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Propagation speed in the photon spectrum formula. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | Side length of the cubic box. |
| $\signal{\lambda}_{\mathrm{th}}$ | $\unit{m}$ | Thermal de Broglie wavelength | Wavelength scale for a particle of the given mass at the absolute temperature. |
| $\mechanical{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Oscillation frequency in the harmonic Hamiltonian. |
| $\mechanical{\theta}$, $\phi$ | $\unit{rad}$ | Orientation angles | Polar and azimuthal angles of a moment relative to the field axis. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia determining the spacing of rotor levels. |
| $\Xi$ | 1 | Grand partition function | Normalizes the weights over energy states and particle numbers. |
| $\energy{\Omega}$ | $\unit{J}$ | Grand potential | Legendre transform of Helmholtz free energy with respect to particle number. |
| $z$ | 1 | Fugacity | Exponential of the chemical potential divided by the thermal energy. |
| $\mechanical{M}$ | $\unit{kg}$ | Molecular mass | Sum of the constituent particle masses. |
| $j$ | 1 | Internal partition function | Sum over molecular states other than translation. |
| $\thermal{C}_P$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant pressure | Heat capacity for a process at fixed pressure and composition. |
| $p_i$ | 1 | Level degeneracy | Number of distinct quantum states at the same level energy. |
| $\mechanical{\mu}$ | $\unit{kg}$ | Reduced mass | Effective mass of the relative motion of the two atoms. |
| $\mechanical{r}_0$ | $\unit{m}$ | Equilibrium bond length | Internuclear separation at the minimum of the molecular potential. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Bond force constant | Curvature of the potential near its minimum. |
| $\energy{\Delta}_{\mathrm{rot}}$ | $\unit{J}$ | First rotational gap | Energy difference between the first excited and ground rotational levels. |
| $\thermal{\gamma}$ | 1 | Adiabatic exponent | Heat-capacity ratio for the ideal gas when the heat capacities are constant. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\mechanical{M}$ | $\unit{kg}$ | Stellar mass | Mass interior to a shell or total mass, as indicated by the argument. |
