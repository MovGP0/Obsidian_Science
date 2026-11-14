---
title: "Grand potentials, exchange symmetry, and occupation numbers"
---

> [!TLDR]
> Derive grand-canonical energies and occupation numbers and relate quantum statistics to exchange symmetry.

## Worked lecture material

For one quantum rotor the level of index $\ell$ has degeneracy $2\ell+1$, so

$$
Z_1(\thermal{\beta})=\sum_{\ell=0}^{\infty}(2\ell+1)
\exp\left[-\thermal{\beta}\frac{\energy{\hbar}^2\ell(\ell+1)}{2\mechanical{I}}\right].
$$

**Exercise.** At low temperature keep the first few levels. At high temperature approximate the sum by an integral. The margin refers to Pathria for the answer. For $N$ independent rotors the partition function is $Z_1^N$. A separate note points to the virial theorem for two-body potentials $\energy{V}_{ij}(|\mechanical{\vec x}_i-\mechanical{\vec x}_j|)$ and for the van der Waals equation.

##### Grand canonical ensemble

A small system $1$ exchanges energy and particles with a large bath $b$. The page lists photons and phonons as examples where the particle count can vary. The combined quantities $\energy{E}=\energy{E}_1+\energy{E}_b$, $\mechanical{V}=\mechanical{V}_1+\mechanical{V}_b$, and $N=N_1+N_b$ are fixed, with the subsystem quantities small by comparison. In the grand canonical expansion the volumes are held fixed.

At a given energy and particle split, the weight is proportional to $\Omega_1(\energy{E}_1,N_1)\Omega_b(\energy{E}-\energy{E}_1,N-N_1)$. The logarithm of the product gives the sum of the two logarithms. Expand the bath term at the total energy and particle number.

$$
\begin{aligned}
\ln\Omega_b(\energy{E}-\energy{E}_1,N-N_1)
&\approx\ln\Omega_b(\energy{E},N)
-\energy{E}_1\left(\frac{\partial\ln\Omega_b}{\partial\energy{E}}\right)_{V,N}\\
&\quad-N_1\left(\frac{\partial\ln\Omega_b}{\partial N}\right)_{V,E}\\
&=\ln\Omega_b(\energy{E},N)-\thermal{\beta}\energy{E}_1+\thermal{\beta}\energy{\mu}N_1.
\end{aligned}
$$

The bath derivative with respect to $N$ is $-\energy{\mu}/(\thermal{k}_{\mathrm B}\thermal{T})$.

##### Repeated notes on quantum spins

The lower half repeats the magnetic moment and angular momentum relations for spin-$1/2$ particles and the energy $\energy{E}=-\magnetic{\mu}\magnetic{H}(n_\uparrow-n_\downarrow)$. The two orientations give $\ln Z_N=N\ln[2\cosh(\thermal{\beta}\magnetic{\mu}\magnetic{H})]$ and

$$
\langle\energy{E}\rangle=-N\magnetic{\mu}\magnetic{H}\tanh(\thermal{\beta}\magnetic{\mu}\magnetic{H}),
\qquad
\frac{\magnetic{M}_z}{N}=\magnetic{\mu}\tanh(\thermal{\beta}\magnetic{\mu}\magnetic{H}).
$$

The last line again recalls the $1/\sqrt N$ factor in the relative standard deviation. The mean-energy line here omits the factor $\magnetic{H}$, and the fluctuation line again shows the squared hyperbolic sine. The derivatives and corrected forms are on [[Classical canonical gases and spin magnetization#Quantum spins|the section on Quantum spins]].

For the two-state spin model, $\magnetic{\chi}$ tends to $N\magnetic{\mu}^2/(\thermal{k}_{\mathrm B}\thermal{T})$ at zero field. The finite-field expression follows from the derivative of $\tanh x$ on [[Classical canonical gases and spin magnetization#Quantum spins|the section on Quantum spins]]. The handwritten denominator here is unclear.

With $x=\thermal{\beta}\magnetic{\mu}\magnetic{H}$, the free energy and entropy are

$$
\begin{aligned}
\energy{A}&=-N\thermal{k}_{\mathrm B}\thermal{T}\ln(2\cosh x),\\
\thermal{S}
&=\frac{\langle\energy{E}\rangle-\energy{A}}{\thermal{T}}
=N\thermal{k}_{\mathrm B}\bigl[\ln(2\cosh x)-x\tanh x\bigr].
\end{aligned}
$$

At fixed positive field and low temperature, $\thermal{S}\sim N\thermal{k}_{\mathrm B}(2x+1)e^{-2x}$. It tends to zero as all spins align in the unique ground state. The notebook's leading correction is written without all the normalization factors. At high temperature, $\thermal{S}\to N\thermal{k}_{\mathrm B}\ln 2$. The sketch shows $\thermal{S}/(N\thermal{k}_{\mathrm B})$ rising from zero toward $\ln 2$.

##### Grand potential and entropy

For the canonical ensemble, $\energy{A}=-\thermal{\beta}^{-1}\ln Z$. The corresponding grand canonical potential uses the grand partition function $\Xi$.

$$
\energy{\Omega}(\thermal{T},\mechanical{V},\energy{\mu})
=-\frac{1}{\thermal{\beta}}\ln\Xi,\qquad
\Xi=e^{-\thermal{\beta}\energy{\Omega}}.
$$

Here $\energy{\Omega}$ is an energy, distinct from the state count $\Omega$. The notebook mentions that Feynman uses $g$ for this potential. The normalized density operator obeys

$$
\ln\hat\rho=\thermal{\beta}\energy{\Omega}\mathbb{1}
+\thermal{\beta}\energy{\mu}\hat N-\thermal{\beta}\energy{\hat H},
$$

with hats denoting operators. Substituting into $\thermal{S}=-\thermal{k}_{\mathrm B}\operatorname{Tr}(\hat\rho\ln\hat\rho)$ and using $\operatorname{Tr}\hat\rho=1$ gives

$$
\thermal{S}=-\frac{\energy{\Omega}+\energy{\mu}\langle N\rangle-\langle\energy{E}\rangle}{\thermal{T}}.
$$

Rearranging yields $\energy{\Omega}=\langle\energy{E}\rangle-\thermal{T}\thermal{S}-\energy{\mu}\langle N\rangle=\energy{A}-\energy{\mu}\langle N\rangle$. For a homogeneous extensive system the equation of state is $\energy{\Omega}=-\mechanical{P}\mechanical{V}$.

The grand canonical weight for a microstate with energy $\energy{E}$ and particle count $N$ is the Boltzmann factor times $e^{\thermal{\beta}\energy{\mu}N}$. The normalized probability is

$$
P_{\text{state}}(\energy{E},N)
=\frac{e^{\thermal{\beta}(\energy{\mu}N-\energy{E})}}
{\displaystyle\sum_{N'=0}^{\infty}\sum_{\text{states at }N'}
e^{\thermal{\beta}(\energy{\mu}N'-\energy{E}_{\text{state}})}}.
$$

The normalization factor for the grand canonical distribution is

$$
\Xi(\thermal{T},\mechanical{V},\energy{\mu})
=\sum_{N=0}^\infty\sum_{\text{states at }N}
e^{\thermal{\beta}(\energy{\mu}N-\energy{E}_{\text{state}})}
=\sum_{N=0}^\infty e^{\thermal{\beta}\energy{\mu}N}
Z_N(\thermal{\beta},\mechanical{V}).
$$

The second form groups the states at fixed $N$ into the canonical partition function $Z_N$. The remaining marks on the page are show-through from the reverse side.

##### Grand canonical ideal gas

The grand canonical density matrix and its normalization are

$$
\hat\rho=\frac{\exp[\thermal{\beta}(\energy{\mu}\hat N-\energy{\hat H})]}{\Xi},
\qquad
\Xi=\operatorname{Tr}\exp[\thermal{\beta}(\energy{\mu}\hat N-\energy{\hat H})].
$$

The notebook obtains the mean count and energy by differentiating at fixed volume.

$$
\langle N\rangle=\frac{1}{\thermal{\beta}}
\left(\frac{\partial\ln\Xi}{\partial\energy{\mu}}\right)_{\beta,V},
\qquad
\langle\energy{E}\rangle=\energy{\mu}\langle N\rangle-
\left(\frac{\partial\ln\Xi}{\partial\thermal{\beta}}\right)_{\mu,V}.
$$

The chemical potential sets the mean count. The grand potential $\energy{\Omega}=-\thermal{\beta}^{-1}\ln\Xi=-\mechanical{P}\mechanical{V}$ gives the equation of state.

To compute $\Xi$ for the ideal gas, choose states of definite $N$, then sum over $N$. The canonical factor for $N$ identical particles in the dilute classical limit is the product of Gaussian momentum integrals and position integrals, divided by $N!$.

$$
\begin{aligned}
Z_N
&=\frac{\mechanical{V}^N}{(2\pi\energy{\hbar})^{3N}N!}
\int d^3\mechanical{\vec p}_1\cdots d^3\mechanical{\vec p}_N\,
e^{-\thermal{\beta}\sum_i\mechanical{p}_i^2/(2\mechanical{m})}\\
&=\frac{\mechanical{V}^N}{N!}
\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3N/2}.
\end{aligned}
$$

Substitute $Z_N$ into $\Xi=\sum_Ne^{\thermal{\beta}\energy{\mu}N}Z_N$. The series has the form $\sum_{N=0}^{\infty}x^N/N!=e^x$, so

$$
\Xi=\exp\left[
e^{\thermal{\beta}\energy{\mu}}\mechanical{V}
\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}
\right].
$$

For the grand canonical classical gas,

$$
\langle N\rangle
=\frac{1}{\thermal{\beta}}\frac{\partial\ln\Xi}{\partial\energy{\mu}}
=e^{\thermal{\beta}\energy{\mu}}\mechanical{V}
\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}.
$$

Solving gives the dimensionless fugacity $z=e^{\thermal{\beta}\energy{\mu}}=(\langle N\rangle/\mechanical{V})\signal{\lambda}_{\mathrm{th}}^3$. It scales as $(\langle N\rangle/\mechanical{V})\thermal{T}^{-3/2}$ for fixed particle mass.

##### Estimate

The notebook takes a sample density of $10^{17}\;\unit{cm^{-3}}$, the proton rest energy $\mechanical{m}\mechanical{c}^2\approx938\;\unit{MeV}$, $\energy{\hbar}\mechanical{c}\approx1.97\times10^{-11}\;\unit{MeV\,cm}$, and room-temperature $\thermal{k}_{\mathrm B}\thermal{T}\approx0.024\;\unit{eV}$. Combining them gives

$$
\signal{\lambda}_{\mathrm{th}}^3=
\left[\frac{2\pi(\energy{\hbar}\mechanical{c})^2}{(\mechanical{m}\mechanical{c}^2)\thermal{k}_{\mathrm B}\thermal{T}}\right]^{3/2}
\sim10^{-24}\;\unit{cm^3},
\qquad
z\sim10^{-7}\ll1.
$$

The estimate illustrates the dilute classical regime.

##### Bose and Fermi distributions

An occupation number $n_i$ counts the particles in one one-particle state with energy $\energy{E}_i$. A sketch shows several particles occupying the same energy level. Then $N=\sum_i n_i$ and $\energy{E}=\sum_i n_i\energy{E}_i$. The notes also mention the Fermi energy, the highest occupied one-particle energy at zero temperature.

For bosons, focus on one state and allow $n_i=0,1,2,\ldots$. The grand partition function of that state is a geometric series.

$$
\Xi_i=\sum_{n_i=0}^{\infty}e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)n_i}
=\frac{1}{1-e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}},
$$

which converges for $\energy{\mu}<\energy{E}_i$ at positive temperature.

The mean occupation of one boson state follows from its grand partition function,

$$
\begin{aligned}
\langle n_i\rangle
&=\frac{1}{\thermal{\beta}}\frac{\partial\ln\Xi_i}{\partial\energy{\mu}}
=-\frac{1}{\thermal{\beta}}\frac{\partial}{\partial\energy{\mu}}
\ln[1-e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}]\\
&=\frac{e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}}{1-e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}}
=\frac{1}{e^{\thermal{\beta}(\energy{E}_i-\energy{\mu})}-1}.
\end{aligned}
$$

This is the Bose–Einstein occupation $\langle n(\energy{E})\rangle$ for a state of energy $\energy{E}$. It has the Planck form for zero chemical potential.

For all states, the exponent $\thermal{\beta}(\energy{\mu}N-\energy{E})=\sum_i\thermal{\beta}(\energy{\mu}-\energy{E}_i)n_i$ is additive. The sums over each $n_i$ are independent, so

$$
\Xi=\prod_i\left[\sum_{n_i=0}^{\infty}e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)n_i}\right]
=\prod_i\frac{1}{1-e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}}.
$$

The box labels the product with a subscript $N$. In the grand canonical expression, $\langle N\rangle$ is set through $\energy{\mu}$ and the actual particle count fluctuates.

At low temperature take the ground energy $\energy{E}_1=0$. The sketch shows most particles occupying the ground state, with few in excited states. If $\langle n_1\rangle\approx\langle N\rangle$, then

$$
e^{-\thermal{\beta}\energy{\mu}}-1=\frac{1}{\langle n_1\rangle}
\approx\frac{1}{\langle N\rangle},
\qquad
\energy{\mu}\approx-\frac{1}{\thermal{\beta}}
\ln\left(1+\frac{1}{\langle N\rangle}\right)
\approx-\frac{1}{\thermal{\beta}\langle N\rangle}.
$$

Thus the chemical potential approaches zero from below in this ground-state approximation.

For a fixed excited boson state with $\energy{E}$ above the ground energy, $\thermal{\beta}(\energy{E}-\energy{\mu})$ becomes large at low temperature. The occupation then has the Boltzmann form,

$$
\langle n(\energy{E})\rangle
=\frac{1}{e^{\thermal{\beta}(\energy{E}-\energy{\mu})}-1}
\approx e^{-\thermal{\beta}(\energy{E}-\energy{\mu})}.
$$

The notebook also rearranges the exact formula as

$$
e^{-\thermal{\beta}(\energy{E}-\energy{\mu})}
=\frac{\langle n(\energy{E})\rangle}{1+\langle n(\energy{E})\rangle}.
$$

When $\langle n(\energy{E})\rangle\ll1$, the denominator on the right is close to one, giving the classical dependence $\langle n(\energy{E})\rangle\propto e^{-\thermal{\beta}\energy{E}}$. This can apply to the sparsely occupied excited states while most bosons occupy the ground state.

##### Fermions

The page gives the dates Fermi (1925) and Dirac (1926). Identical fermions have an antisymmetric wavefunction under exchange of their full particle coordinates, including spin when relevant. In the spatial notation of the page,

$$
\psi(\mechanical{\vec r}_1,\mechanical{\vec r}_2)
=-\psi(\mechanical{\vec r}_2,\mechanical{\vec r}_1).
$$

A one-particle state has $n_i=0$ or $1$. The level sketch shows one fermion per occupied state. The totals remain $N=\sum_i n_i$ and $\energy{E}=\sum_i n_i\energy{E}_i$. The grand partition function for state $i$ now has only two terms,

$$
\Xi_i=\sum_{n_i=0}^{1}e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)n_i}
=1+e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}.
$$

The mean fermion occupation is the probability that the state is occupied,

$$
\langle n_i\rangle=\sum_{n_i=0}^1n_iP(n_i)
=\frac{e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}}{1+e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}}
=\frac{1}{e^{\thermal{\beta}(\energy{E}_i-\energy{\mu})}+1}.
$$

The unified form $\langle n(\energy{E})\rangle=[e^{\thermal{\beta}(\energy{E}-\energy{\mu})}\pm1]^{-1}$ takes $+1$ for fermions and $-1$ for bosons. The notebook uses the possible singularity in the boson occupation as a memory aid for the minus sign and relates it to Bose–Einstein condensation.

For the full ideal Fermi system,

$$
\Xi_{\mathrm F}=\prod_i(1+e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}),\qquad
\ln\Xi_{\mathrm F}=\sum_i\ln(1+e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}).
$$

At zero temperature the occupation is a step, with states below the Fermi energy filled and states above it empty. The chemical potential tends to the Fermi energy in the continuum limit. At finite temperature the step is rounded.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Fermi occupation at zero and finite temperature.png|**Fig. 8** The zero-temperature step is rounded over an energy range around the chemical potential at finite temperature.]]

##### Quantum statistics review

For bosons, the many-particle wavefunction is symmetric under exchange. The level sketch shows occupations $n_i=0,1,2,\ldots$ and several particles sharing an energy level. The mean occupation is $[e^{\thermal{\beta}(\energy{E}-\energy{\mu})}-1]^{-1}$. The full partition function is the product of the geometric series, $\Xi_{\mathrm B}=\prod_i[1-e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}]^{-1}$.

For fermions, the review repeats the mean occupation $[e^{\thermal{\beta}(\energy{E}-\energy{\mu})}+1]^{-1}$ and the product $\Xi_{\mathrm F}=\prod_i[1+e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}]$. Each factor has two terms. The sketch compares a Fermi curve with an edge near $\energy{E}\approx\energy{\mu}\approx\energy{E}_{\mathrm F}$ to a Bose curve concentrated at the lowest energies.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Comparison of Bose and Fermi occupations.png|**Fig. 9** The low-temperature Fermi curve has an occupation plateau, while the Bose curve rises sharply near the ground-state energy.]]

##### Exchange symmetry

For identical particles, interchanging the labels leaves the Hamiltonian invariant. If $\energy{\hat H}(1,2)\psi(1,2)=\energy{E}\psi(1,2)$, then the exchanged function $\psi(2,1)$ also solves the eigenvalue equation at $\energy{E}$. Choose a state with definite exchange symmetry and write $\psi(1,2)=\lambda\psi(2,1)$, where $\lambda=e^{i\alpha}$. Exchanging twice gives $\lambda^2=1$, so $\lambda=+1$ for a symmetric state or $\lambda=-1$ for an antisymmetric state.

Bosons have integer spin and fermions have half-integer spin. The notebook attributes the spin–statistics theorem to Pauli and labels it a result of quantum field theory. The date written on this page is 1944, while the earlier historical outline gives about 1941.

##### Gases with interactions or internal degrees of freedom

The notebook groups two extensions under “Non-ideal gases.” One adds pair interactions $\energy{V}_{ij}(\mechanical{\vec x}_i-\mechanical{\vec x}_j)\ne0$. The other adds internal degrees of freedom, illustrated by a rotating diatomic molecule. For a single molecule with total mass $\mechanical{M}=\sum_i\mechanical{m}_i$ and center-of-mass momentum $\mechanical{\vec p}$,

$$
\energy{H}=\frac{\mechanical{p}^2}{2\mechanical{M}}+\energy{H}_{\mathrm{int}}.
$$

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
| $\energy{H}$ | $\unit{J}$ | Enthalpy or Hamiltonian | Internal energy plus the pressure–volume product in thermodynamics. In mechanics and ensemble weights, the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\mechanical{q}_i$, $\mechanical{p}_i$ | — | Generalized coordinates and momenta | Conjugate variables that specify a phase-space point. Their units depend on the coordinates. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $Z$ | 1 | Partition function | Sum of the Boltzmann weights of the accessible states. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $n_i$ | 1 | Occupation number | Number of particles in a given energy level. |
| $\energy{\mu}$ | $\unit{J}$ per particle | Chemical potential | Intensive energy variable conjugate to particle number. |
| $\Omega$ | 1 | Multiplicity | Number of accessible microstates, including the cumulative count in the ideal-gas calculation. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Propagation speed in the photon spectrum formula. |
| $\signal{\lambda}_{\mathrm{th}}$ | $\unit{m}$ | Thermal de Broglie wavelength | Wavelength scale for a particle of the given mass at the absolute temperature. |
| $\hat\rho$ | 1 | Density matrix | Quantum statistical state with trace equal to one. |
| $\energy{V}_{ij}$ | $\unit{J}$ | Pair potential energy | Contribution to the Hamiltonian from the interaction of particles $i$ and $j$. |
| $\magnetic{\mu}$, $\magnetic{\vec\mu}$ | $\unit{J\,T^{-1}}$ | Magnetic dipole moment | Moment of an individual spin. |
| $\magnetic{H}$, $\magnetic{\vec H}$ | $\unit{T}$ in this convention | Applied magnetic field | Field entering the dipole energy in the notebook's notation. |
| $\magnetic{M}$, $\magnetic{M}_z$ | $\unit{J\,T^{-1}}$ | Total moment along the field | Sum of the mean field-aligned moment components. |
| $\magnetic{\chi}$ | $\unit{J\,T^{-2}}$ in this convention | Magnetic susceptibility | Response of the total moment to a change in the applied field. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia determining the spacing of rotor levels. |
| $\Xi$ | 1 | Grand partition function | Normalizes the weights over energy states and particle numbers. |
| $\energy{\Omega}$ | $\unit{J}$ | Grand potential | Legendre transform of Helmholtz free energy with respect to particle number. |
| $\hat N$ | 1 | Number operator | Operator whose eigenvalue is the particle count in a number state. |
| $z$ | 1 | Fugacity | Exponential of the chemical potential divided by the thermal energy. |
| $\energy{E}_{\mathrm F}$ | $\unit{J}$ or $\unit{eV}$ | Fermi energy | Zero-temperature energy at the edge of the filled one-particle states. |
| $\mechanical{M}$ | $\unit{kg}$ | Molecular mass | Sum of the constituent particle masses. |
| $\energy{H}_{\mathrm{int}}$ | $\unit{J}$ | Internal Hamiltonian | Energy of the molecular degrees of freedom after separating center-of-mass motion. |
| $j$ | 1 | Internal partition function | Sum over molecular states other than translation. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\alpha$ | $1$ | Fine-structure constant | Electromagnetic coupling used in the photon scattering estimate. |
| $\mechanical{M}$ | $\unit{kg}$ | Stellar mass | Mass interior to a shell or total mass, as indicated by the argument. |
