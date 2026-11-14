---
title: "Classical canonical gases and spin magnetization"
---

> [!TLDR]
> Use canonical sums and integrals to compare classical and quantum limits, spin response, and rotational heat capacity.

## Worked lecture material

##### Classical canonical ideal gas

The margin cites Pathria page 57 and Feynman page 49. For $N$ particles the Hamiltonian is the sum of kinetic energies and pair potentials,

$$
\energy{H}=\sum_{i=1}^N\frac{\mechanical{p}_i^2}{2\mechanical{m}}+\sum_{i<j}\energy{V}_{ij}.
$$

For an ideal gas the pair term vanishes, the coordinate integrals give $\mechanical{V}^N$, and the momentum integral factors into $N$ independent Gaussian integrals. In one dimension $\int_{-\infty}^\infty e^{-ax^2}\,dx=\sqrt{\pi/a}$ for $a>0$. Applying this to the three components gives

$$
\begin{aligned}
Z_1
&=\frac{\mechanical{V}}{(2\pi\energy{\hbar})^3}
\int d^3\mechanical{\vec p}\,e^{-\thermal{\beta}\mechanical{p}^2/(2\mechanical{m})}\\
&=\frac{\mechanical{V}}{(2\pi\energy{\hbar})^3}
\left(\frac{2\pi\mechanical{m}}{\thermal{\beta}}\right)^{3/2}
=\mechanical{V}\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}
{2\pi\energy{\hbar}^2}\right)^{3/2}.
\end{aligned}
$$

For identical particles in the classical limit, $Z_N=Z_1^N/N!$. Stirling's approximation gives

$$
\ln Z_N=N\ln Z_1-\ln N!
\approx N\left\{\ln\left[\frac{\mechanical{V}}{N}
\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}\right]+1\right\}.
$$

The handwritten intermediate line has a minus sign on the constant. The plus sign follows from subtracting $\ln N!\approx N\ln N-N$ and yields the boxed entropy result. The thermodynamic quantities are

$$
\begin{aligned}
\energy{A}&=-\thermal{k}_{\mathrm B}\thermal{T}\ln Z_N,\qquad
\langle\energy{E}\rangle=\frac32N\thermal{k}_{\mathrm B}\thermal{T},\\
\mechanical{P}&=\frac{1}{\thermal{\beta}}\left(\frac{\partial\ln Z_N}{\partial\mechanical{V}}\right)_{\beta,N}
=\frac{N\thermal{k}_{\mathrm B}\thermal{T}}{\mechanical{V}},\\
\thermal{S}&\approx N\thermal{k}_{\mathrm B}\left\{\ln\left[\frac{\mechanical{V}}{N}
\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}\right]+\frac52\right\}.
\end{aligned}
$$

##### Quantum and classical limits

For the monatomic ideal gas, $\langle\energy{E}\rangle=\tfrac32N\thermal{k}_{\mathrm B}\thermal{T}$, $\thermal{C}_V=\tfrac32N\thermal{k}_{\mathrm B}$, and $\mechanical{P}\mechanical{V}=N\thermal{k}_{\mathrm B}\thermal{T}$. For $N$ independent quantum harmonic oscillators,

$$
\langle\energy{E}\rangle=
N\energy{\hbar}\mechanical{\omega}\left[\frac12+
\frac{1}{e^{\energy{\hbar}\mechanical{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})}-1}\right],
$$

while the classical result is $N\thermal{k}_{\mathrm B}\thermal{T}$. The notes ask why the oscillator results differ and point to the energy gap $\energy{\hbar}\mechanical{\omega}$. For a gas in a large box the translational levels are closely spaced, so the discrete spacing is negligible in the dilute classical regime.

A margin aside comments on the broad use of statistical mechanics and quantum mechanics across disciplines. It jokes about electromagnetism being less recently used and about going thirty years without seeing a pendulum.

##### Temperature and heat

The historical sketch lists thermometers associated with the Medici family in Florence, then Fahrenheit (1714), Réaumur (1731), and Celsius (1742). The Réaumur line notes a $0$–$80$ scale and mentions boiling alcohol. These are the dates and descriptions in the notebook.

The sketch attributed to Guillaume Amontons plots pressure against temperature. A dashed straight line extrapolates to zero pressure at approximately $-273\;\unit{^\circ C}$. The notes then mention Lavoisier (1783) and the caloric theory of heat, followed by Count Rumford (about 1798). The cannon-boring example illustrates conversion of mechanical work into heat.

The historical notes mention Joule (1843), beer brewing, the importance of temperature for fermentation, and the use of accurate thermometers. Sadi Carnot (1824), described as an officer in the French army, sought a mathematical theory of heat engines. The notebook puts the print run of his book at about 600 copies and notes its small readership.

William Thomson, Lord Kelvin, is associated with absolute zero at $-273.15\;\unit{^\circ C}$. For a classical ideal gas, $\thermal{T}\propto\langle\mechanical{v}^2\rangle$, so the mean thermal kinetic energy tends to zero in that model. The margin points out that quantum systems can retain zero-point energy.

##### Spins in the canonical ensemble

Consider $N$ independent moments in a uniform external magnetic field. The notebook denotes the field by $\magnetic{\vec H}$ in the energy formula, with the units of $\magnetic{\vec B}$ there. It contrasts the independent approximation with coupled spins in ferromagnets. The Hamiltonian is $\energy{H}=-\sum_{i=1}^N\magnetic{\vec\mu}_i\cdot\magnetic{\vec H}$. Classically, a single moment has energy $-\magnetic{\mu}\magnetic{H}\cos\mechanical{\theta}$, where $\mechanical{\theta}$ is its angle to the field.

The total partition function is $Z_N=Z_1^N$. Integrate over orientations for a single classical moment.

$$
Z_1=\int_0^{2\pi}d\phi\int_{-1}^{1}d(\cos\mechanical{\theta})\,
e^{\thermal{\beta}\magnetic{\mu}\magnetic{H}\cos\mechanical{\theta}}
=4\pi\frac{\sinh(\thermal{\beta}\magnetic{\mu}\magnetic{H})}
{\thermal{\beta}\magnetic{\mu}\magnetic{H}}.
$$

Take $z$ along the field. The total mean magnetic moment along $z$ follows by differentiating $\ln Z_1$.

$$
\begin{aligned}
\magnetic{M}_z&=N\magnetic{\mu}\langle\cos\mechanical{\theta}\rangle
=\frac{N}{\thermal{\beta}}\frac{\partial\ln Z_1}{\partial\magnetic{H}},\\
\frac{\magnetic{M}_z}{N}
&=\magnetic{\mu}\left[\coth(\thermal{\beta}\magnetic{\mu}\magnetic{H})
-\frac{1}{\thermal{\beta}\magnetic{\mu}\magnetic{H}}\right].
\end{aligned}
$$

The bracket is the Langevin function of the dimensionless argument $\thermal{\beta}\magnetic{\mu}\magnetic{H}=\magnetic{\mu}\magnetic{H}/(\thermal{k}_{\mathrm B}\thermal{T})$.

##### Langevin function and Curie's law

Write the classical magnetization curve in terms of $x=\magnetic{\mu}\magnetic{H}/(\thermal{k}_{\mathrm B}\thermal{T})$. For a strong positive field, the Langevin function $L(x)=\coth x-1/x$ approaches $1$. Then $\magnetic{M}_z/N$ approaches the full moment $\magnetic{\mu}$.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Langevin function saturation.png|**Fig. 6** The normalized moment rises from zero and approaches its saturated value of one.]]

At weak fields, expand about $x=0$.

$$
L(x)=\frac{x}{3}-\frac{x^3}{45}+\cdots,\qquad
\frac{\magnetic{M}_z}{N}
\approx\frac{\magnetic{\mu}^2\magnetic{H}}{3\thermal{k}_{\mathrm B}\thermal{T}}.
$$

The handwritten expansion has a plus on the cubic term and omits one factor of $\magnetic{\mu}$ in the leading moment. The expression $\coth x-1/x$ and the susceptibility on the same page give the forms above. The zero-field susceptibility obeys **Curie's law**,

$$
\magnetic{\chi}
=\left.\frac{\partial\magnetic{M}_z}{\partial\magnetic{H}}\right|_{H=0}
=\frac{N\magnetic{\mu}^2}{3\thermal{k}_{\mathrm B}}\frac{1}{\thermal{T}}.
$$

The independent-spin susceptibility decreases as $1/\thermal{T}$. The notes then introduce the **Curie temperature** $\thermal{T}_c$ of a ferromagnet, where spontaneous magnetization is lost. They credit Heisenberg's explanation of ferromagnetism and associate alignment with the exchange effect on Coulomb energy. The sketches for the interacting ferromagnet show susceptibility rising sharply near $\thermal{T}_c$ and spontaneous magnetization falling to zero there. The margin notes that response functions can diverge at the transition.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ferromagnet response near the Curie temperature.png|**Fig. 7** Susceptibility peaks near the Curie temperature while the spontaneous magnetization approaches zero from the ordered side.]]

##### Quantum spins

The margin cites Pathria pages 77 or 111 and Feynman page 130. The notes write the magnetic moment as $\magnetic{\vec\mu}=g\electric{e}\mechanical{\vec J}/(2\mechanical{m}\mechanical{c})$ in Gaussian units, with $\electric{e}$ the signed particle charge and $g$ the Landé factor. Total angular momentum is $\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}$, and the eigenvalue of $\mechanical{J}^2$ is $\energy{\hbar}^2j(j+1)$ for $j=0,\tfrac12,1,\tfrac32,\ldots$. A spin-$1/2$ electron has spin projections $\mechanical{S}_z=\pm\energy{\hbar}/2$.

For $N$ independent two-state moments, the field points up along $z$. Let $n_\uparrow$ and $n_\downarrow$ count the moments parallel and antiparallel to the field. The energy is $\energy{E}=-\magnetic{\mu}\magnetic{H}(n_\uparrow-n_\downarrow)$. Write $x=\thermal{\beta}\magnetic{\mu}\magnetic{H}$. Then

$$
Z_N=(e^x+e^{-x})^N,\qquad
\ln Z_N=N\ln(2\cosh x).
$$

The derivatives with respect to $\thermal{\beta}$ and $\magnetic{H}$ give

$$
\langle\energy{E}\rangle=-N\magnetic{\mu}\magnetic{H}\tanh x,\qquad
\frac{\magnetic{M}_z}{N}=\magnetic{\mu}\tanh x.
$$

The energy variance is $N(\magnetic{\mu}\magnetic{H})^2/\cosh^2 x$. For nonzero field its relative standard deviation is

$$
\frac{\sqrt{\langle(\Delta\energy{E})^2\rangle}}{|\langle\energy{E}\rangle|}
=\frac{1}{\sqrt N\,|\sinh x|}.
$$

The notebook stresses the $1/\sqrt N$ factor. Its last denominator shows $\sinh^2 x$, which belongs to the relative variance with the corresponding $1/N$ prefactor. The magnetic susceptibility is

$$
\magnetic{\chi}=\frac{\partial\magnetic{M}_z}{\partial\magnetic{H}}
=\frac{N\thermal{\beta}\magnetic{\mu}^2}{\cosh^2 x}
\ \longrightarrow\ \frac{N\magnetic{\mu}^2}{\thermal{k}_{\mathrm B}\thermal{T}}
\quad\text{as }\magnetic{H}\to0.
$$

This again has Curie's inverse-temperature dependence.

##### Heat capacity and rotational levels

At fixed positive field,

$$
\thermal{C}_V=N\thermal{k}_{\mathrm B}\frac{x^2}{\cosh^2 x}
\ \sim\ 4N\thermal{k}_{\mathrm B}x^2e^{-2x}
\quad\text{as }\thermal{T}\to0.
$$

The power $x^2$ in the low-temperature limit follows from the preceding exact expression. The handwritten limit shows one power of $x$. The final line moves beyond spin $1/2$ to rotational levels $\energy{E}_\ell=\energy{\hbar}^2\ell(\ell+1)/(2\mechanical{I})$, with $\ell=0,1,2,\ldots$.

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
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{H}$ | $\unit{J}$ | Enthalpy or Hamiltonian | Internal energy plus the pressure–volume product in thermodynamics. In mechanics and ensemble weights, the Hamiltonian. |
| $\mechanical{v}$ | $\unit{m^3}$ per particle or $\unit{m^3\,mol^{-1}}$ | Volume per unit amount | Volume divided by the particle count or mole amount. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\mechanical{q}_i$, $\mechanical{p}_i$ | — | Generalized coordinates and momenta | Conjugate variables that specify a phase-space point. Their units depend on the coordinates. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $Z$ | 1 | Partition function | Sum of the Boltzmann weights of the accessible states. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Propagation speed in the photon spectrum formula. |
| $\mechanical{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Oscillation frequency in the harmonic Hamiltonian. |
| $\energy{V}_{ij}$ | $\unit{J}$ | Pair potential energy | Contribution to the Hamiltonian from the interaction of particles $i$ and $j$. |
| $\magnetic{\mu}$, $\magnetic{\vec\mu}$ | $\unit{J\,T^{-1}}$ | Magnetic dipole moment | Moment of an individual spin. |
| $\magnetic{H}$, $\magnetic{\vec H}$ | $\unit{T}$ in this convention | Applied magnetic field | Field entering the dipole energy in the notebook's notation. |
| $\magnetic{M}$, $\magnetic{M}_z$ | $\unit{J\,T^{-1}}$ | Total moment along the field | Sum of the mean field-aligned moment components. |
| $\mechanical{\theta}$, $\phi$ | $\unit{rad}$ | Orientation angles | Polar and azimuthal angles of a moment relative to the field axis. |
| $\magnetic{\chi}$ | $\unit{J\,T^{-2}}$ in this convention | Magnetic susceptibility | Response of the total moment to a change in the applied field. |
| $\thermal{T}_c$ | $\unit{K}$ | Curie temperature | Temperature of the loss of spontaneous magnetization. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $\electric{e}$ | $\unit{C}$ in SI | Particle charge | Signed electric charge entering the magnetic moment formula in its chosen unit system. |
| $\mechanical{\vec J}$, $\mechanical{\vec L}$, $\mechanical{\vec S}$ | $\unit{J\,s}$ | Angular momenta | Total, orbital, and spin angular momenta. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia determining the spacing of rotor levels. |
| $z$ | 1 | Fugacity | Exponential of the chemical potential divided by the thermal energy. |
| $j$ | 1 | Internal partition function | Sum over molecular states other than translation. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
