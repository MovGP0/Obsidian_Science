---
title: "Canonical density matrices and imaginary-time kernels"
---

> [!TLDR]
> Build the canonical density matrix and partition function, then evaluate free-particle and oscillator kernels.

## Worked lecture material

For Hamiltonian flow, $\nabla_\Gamma\cdot\vec v_\Gamma=0$ because the mixed derivatives of $\energy{H}$ cancel. The continuity equation becomes

$$
\frac{\partial P}{\partial t}+\{P,\energy{H}\}=0,
\qquad
\{A,B\}
=\sum_i\left(
\frac{\partial A}{\partial\mechanical{q}_i}\frac{\partial B}{\partial\mechanical{p}_i}
-\frac{\partial B}{\partial\mechanical{q}_i}\frac{\partial A}{\partial\mechanical{p}_i}
\right).
$$

The bracket is the Poisson bracket. The quantum counterpart is the density matrix equation

$$
\frac{\partial\hat\rho}{\partial t}+\frac{1}{i\energy{\hbar}}[\hat\rho,\energy{\hat H}]=0,
$$

where $[\hat\rho,\energy{\hat H}]=\hat\rho\energy{\hat H}-\energy{\hat H}\hat\rho$. In a stationary state the explicit time derivative vanishes.

##### Canonical ensemble

A small system of energy $\energy{E}_1$ is weakly coupled to a much larger heat bath of energy $\energy{E}_2$. The combined energy is $\energy{E}$, and $\energy{E}_2\gg\energy{E}_1$. The sketch shows the bath as the larger of two compartments. Its temperature $\thermal{T}$ is fixed, with $1/(\thermal{k}_{\mathrm B}\thermal{T})$ given by the logarithmic energy derivative of the state count at equilibrium.

The probability for a particular energy split is proportional to $\Omega_1(\energy{E}_1)\Omega_2(\energy{E}-\energy{E}_1)$. The bath expansion gives

$$
dP\propto\Omega_1(\energy{E}_1)e^{-\thermal{\beta}\energy{E}_1}\,d\energy{E}_1,
\qquad
\thermal{\beta}=\frac{1}{\thermal{k}_{\mathrm B}\thermal{T}}.
$$

For discrete microstates $i$ with energies $\energy{E}_i$, the normalized probabilities are

$$
P_i=\frac{e^{-\thermal{\beta}\energy{E}_i}}{Z},
\qquad
Z=\sum_i e^{-\thermal{\beta}\energy{E}_i}.
$$

The sum includes every state, so several states at the same energy contribute separately. For classical continuous phase space the notes normalize the weight over all states. With density relative to the same $d\Gamma$ in numerator and denominator,

$$
P(\mechanical{\vec p},\mechanical{\vec q})
=\frac{e^{-\thermal{\beta}\energy{H}(\mechanical{\vec p},\mechanical{\vec q})}}
{\displaystyle\int e^{-\thermal{\beta}\energy{H}(\mechanical{\vec p},\mechanical{\vec q})}\,d\Gamma}.
$$

A density in energy has the additional state-count factor shown in $dP$ above.

##### The partition function and the density matrix

The partition function $Z$ normalizes the canonical distribution. For a discrete set of states, use the sum from the previous page. In the continuum, with the energy origin set at the lower limit, use the density of states $g(\energy{E})=\partial\Sigma/\partial\energy{E}$, written $\Omega(\energy{E})$ here in the notebook.

$$
Z(\thermal{\beta})
=\int_0^\infty g(\energy{E})e^{-\thermal{\beta}\energy{E}}\,d\energy{E}
=\int e^{-\thermal{\beta}\energy{H}(\mechanical{\vec p},\mechanical{\vec q})}\,d\Gamma.
$$

The first integral is a Laplace transform of the density of states. The classical expression uses the phase-space measure with the normalization appropriate to the state count. The entropy relation also gives $\Omega=e^{\thermal{S}/\thermal{k}_{\mathrm B}}$ for the shell multiplicity.

Use the energy eigenstates $\energy{\hat H}|\psi_i\rangle=\energy{E}_i|\psi_i\rangle$ and the completeness relation $\sum_i|\psi_i\rangle\langle\psi_i|=\mathbb{1}$. The canonical density matrix is

$$
\hat\rho=\sum_i|\psi_i\rangle\frac{e^{-\thermal{\beta}\energy{E}_i}}{Z}\langle\psi_i|
=\frac{e^{-\thermal{\beta}\energy{\hat H}}}{\operatorname{Tr}(e^{-\thermal{\beta}\energy{\hat H}})}.
$$

The operator exponential is diagonal in the energy basis, with diagonal entries $e^{-\thermal{\beta}\energy{E}_i}$. Thus $Z=\operatorname{Tr}(e^{-\thermal{\beta}\energy{\hat H}})$. The notebook cites Pathria page 105 for the power-series expansion and Feynman page 139 for the density matrix.

A thermal average is

$$
\langle A\rangle
=\frac{\sum_i e^{-\thermal{\beta}\energy{E}_i}\langle\psi_i|A|\psi_i\rangle}{Z}
=\operatorname{Tr}(\hat\rho A).
$$

Taking $A=\energy{\hat H}$ gives $\langle\energy{E}\rangle=-\partial\ln Z/\partial\thermal{\beta}$.

##### Energy fluctuations

Another derivative of $\ln Z$ gives the energy variance.

$$
\begin{aligned}
\frac{\partial^2\ln Z}{\partial\thermal{\beta}^2}
&=\frac{\sum_i\energy{E}_i^2e^{-\thermal{\beta}\energy{E}_i}}{Z}
-\left(\frac{\sum_i\energy{E}_ie^{-\thermal{\beta}\energy{E}_i}}{Z}\right)^2\\
&=\langle\energy{E}^2\rangle-\langle\energy{E}\rangle^2.
\end{aligned}
$$

The canonical energy variance determines the heat capacity at fixed volume and particle number.

$$
\thermal{C}_V=\left(\frac{\partial\langle\energy{E}\rangle}{\partial\thermal{T}}\right)_{V,N}
=\thermal{k}_{\mathrm B}\thermal{\beta}^2\frac{\partial^2\ln Z}{\partial\thermal{\beta}^2}.
$$

##### Pressure and the Hellmann–Feynman theorem

A displacement of a wall changes the volume by the wall area times its displacement. The force exerted by the system is minus the Hamiltonian derivative with respect to the wall position. Dividing by the area gives the pressure operator $\mechanical{\hat P}=-\partial\energy{\hat H}/\partial\mechanical{V}$. Its thermal average is

$$
\mechanical{P}
=\operatorname{Tr}(\hat\rho\mechanical{\hat P})
=-\frac{1}{Z}\sum_i e^{-\thermal{\beta}\energy{E}_i}
\left\langle\psi_i\left|\frac{\partial\energy{\hat H}}{\partial\mechanical{V}}\right|\psi_i\right\rangle.
$$

For a Hamiltonian depending on a parameter $\lambda$, take a normalized eigenstate satisfying $\energy{\hat H}(\lambda)|\psi(\lambda)\rangle=\energy{E}(\lambda)|\psi(\lambda)\rangle$. Differentiating its energy expectation gives three terms.

$$
\frac{d\energy{E}}{d\lambda}
=\left\langle\psi\left|\frac{\partial\energy{\hat H}}{\partial\lambda}\right|\psi\right\rangle
+\left\langle\frac{\partial\psi}{\partial\lambda}\left|\energy{\hat H}\right|\psi\right\rangle
+\left\langle\psi\left|\energy{\hat H}\right|\frac{\partial\psi}{\partial\lambda}\right\rangle.
$$

Because $\energy{\hat H}$ is Hermitian, the second and third terms sum to $\energy{E}\,d\langle\psi|\psi\rangle/d\lambda=0$. The first term alone gives $d\energy{E}/d\lambda$. Applying the theorem to the volume derivative gives

$$
\mechanical{P}
=-\frac{1}{Z}\sum_i e^{-\thermal{\beta}\energy{E}_i}\frac{\partial\energy{E}_i}{\partial\mechanical{V}}
=\frac{1}{\thermal{\beta}}\left(\frac{\partial\ln Z}{\partial\mechanical{V}}\right)_{\beta,N}.
$$

Compare with $\mechanical{P}=-(\partial\energy{A}/\partial\mechanical{V})_{N,T}$. The notes box the canonical Helmholtz free energy $\energy{A}=-(1/\thermal{\beta})\ln Z$ for $Z(\thermal{\beta},\mechanical{V},N)$.

##### Entropy from the canonical density matrix

Use $\thermal{S}=-\thermal{k}_{\mathrm B}\operatorname{Tr}(\hat\rho\ln\hat\rho)$ and $\ln\hat\rho=-\thermal{\beta}\energy{\hat H}-(\ln Z)\mathbb{1}$. The notes recall that the trace is linear and equals the sum of diagonal elements. With $\operatorname{Tr}\hat\rho=1$,

$$
\thermal{S}=\thermal{k}_{\mathrm B}\thermal{\beta}\langle\energy{E}\rangle+
\thermal{k}_{\mathrm B}\ln Z
=\frac{\langle\energy{E}\rangle-\energy{A}}{\thermal{T}}.
$$

This recovers $\energy{A}=\langle\energy{E}\rangle-\thermal{T}\thermal{S}$.

##### Position representation and imaginary time

The notes cite Feynman page 47. With $\energy{\hat H}|\phi_n\rangle=\energy{E}_n|\phi_n\rangle$ and $w_n=e^{-\thermal{\beta}\energy{E}_n}/Z$,

$$
\hat\rho=\sum_n w_n|\phi_n\rangle\langle\phi_n|,
\qquad
\rho(\mechanical{x},\mechanical{x}')
=\sum_n w_n\phi_n(\mechanical{x})\phi_n^*(\mechanical{x}').
$$

Here $\phi_n(\mechanical{x})=\langle\mechanical{x}|\phi_n\rangle$. The order of the position arguments follows the boxed expansion. Define the unnormalized operator $\hat\rho_u(\thermal{\beta})=e^{-\thermal{\beta}\energy{\hat H}}$. The notebook drops the subscript in the subsequent derivation. Its position kernel satisfies

$$
-\frac{\partial\rho_u(\mechanical{x},\mechanical{x}';\thermal{\beta})}{\partial\thermal{\beta}}
=\energy{\hat H}_x\rho_u(\mechanical{x},\mechanical{x}';\thermal{\beta}),
\qquad
\rho_u(\mechanical{x},\mechanical{x}';0)=\delta(\mechanical{x}-\mechanical{x}').
$$

The operator equation has the same minus sign, as follows by differentiating the exponential. The handwritten operator equation omits it. The evolution corresponds to the Schrödinger equation in imaginary time, with $\tau=it$ and $\thermal{\beta}=\tau/\energy{\hbar}$.

##### Free particle kernel

For a free particle on a line, $\energy{\hat H}_x=-(\energy{\hbar}^2/2\mechanical{m})\partial^2/\partial\mechanical{x}^2$. The kernel solving the above diffusion equation is

$$
\rho_u(\mechanical{x},\mechanical{x}';\thermal{\beta})
=\sqrt{\frac{\mechanical{m}}{2\pi\energy{\hbar}^2\thermal{\beta}}}
\exp\left[-\frac{\mechanical{m}(\mechanical{x}-\mechanical{x}')^2}
{2\energy{\hbar}^2\thermal{\beta}}\right].
$$

The margin cites Baym, page 68. Integrating the diagonal kernel over a length $\mechanical{L}$ gives the free-particle trace in the large-box approximation,

$$
Z=\int d\mechanical{x}\,\rho_u(\mechanical{x},\mechanical{x};\thermal{\beta})
=\mechanical{L}\sqrt{\frac{\mechanical{m}}{2\pi\energy{\hbar}^2\thermal{\beta}}}.
$$

##### Canonical ensemble kernels

At fixed $\thermal{T}$, the notebook reviews

$$
Z=\operatorname{Tr}(e^{-\thermal{\beta}\energy{\hat H}}),\qquad
\langle\energy{E}\rangle=-\frac{\partial\ln Z}{\partial\thermal{\beta}},\qquad
\langle(\Delta\energy{E})^2\rangle=\frac{\partial^2\ln Z}{\partial\thermal{\beta}^2}.
$$

The second derivative determines $\thermal{C}_V$. The normalized operator $\hat\rho=e^{-\thermal{\beta}\energy{\hat H}}/Z$ gives $\langle\energy{E}\rangle=\operatorname{Tr}(\hat\rho\energy{\hat H})$. The unnormalized operator $\hat\rho_u=e^{-\thermal{\beta}\energy{\hat H}}$ solves $-\partial\hat\rho_u/\partial\thermal{\beta}=\energy{\hat H}\hat\rho_u$. Under $t=-i\tau$, this is the imaginary-time form of the Schrödinger evolution equation. The margin refers to Baym for the kernels.

The free-particle equation and its Gaussian solution are on [[#Entropy from the canonical density matrix|the section on Entropy from the canonical density matrix]]. The repeated handwritten kernel here drops $\thermal{\beta}$ from the square-root denominator and puts $\pi$ in the exponent denominator. The diagonal trace below is consistent with the kernel on [[#Entropy from the canonical density matrix|the section on Entropy from the canonical density matrix]].

For one free particle on a line of length $\mechanical{L}$ in the large-box approximation,

$$
Z_1=\int_0^{\mechanical{L}}d\mechanical{x}\,\rho_u(\mechanical{x},\mechanical{x};\thermal{\beta})
=\mechanical{L}\sqrt{\frac{\mechanical{m}}{2\pi\energy{\hbar}^2\thermal{\beta}}}.
$$

For $N$ independent particles in three dimensions, the boxed product before an identical-particle correction is

$$
Z_N=\mechanical{V}^N\left(\frac{\mechanical{m}}{2\pi\energy{\hbar}^2\thermal{\beta}}\right)^{3N/2}.
$$

For identical particles in the dilute classical approximation, divide by $N!$ as in the microcanonical count. The free energy is written $\energy{F}$ or $\energy{A}$, with $Z=e^{-\thermal{\beta}\energy{F}}$. The notebook notes agreement with the microcanonical results.

##### One-dimensional quantum harmonic oscillator

Take $\energy{\hat H}=\mechanical{\hat p}^2/(2\mechanical{m})+\tfrac12\mechanical{m}\mechanical{\omega}^2\mechanical{\hat x}^2$ and $f=\thermal{\beta}\energy{\hbar}\mechanical{\omega}/2=\energy{\hbar}\mechanical{\omega}/(2\thermal{k}_{\mathrm B}\thermal{T})$. The position kernel is the imaginary-time form of the Feynman propagator.

$$
\rho_u(\mechanical{x},\mechanical{x}';\thermal{\beta})
=\sqrt{\frac{\mechanical{m}\mechanical{\omega}}{2\pi\energy{\hbar}\sinh(2f)}}
\exp\left[-\frac{\mechanical{m}\mechanical{\omega}}{2\energy{\hbar}\sinh(2f)}
\left((\mechanical{x}^2+\mechanical{x}'^{\,2})\cosh(2f)-2\mechanical{x}\mechanical{x}'\right)\right].
$$

The handwritten exponential appears to lack the leading minus sign. It is needed for the kernel to decay at large positions.

The notes compare the statistical sum over configurations, $Z(\thermal{\beta})=\sum e^{-\thermal{\beta}\energy{H}}$, with the quantum amplitude written as a sum over paths weighted by $e^{i\mathcal{S}_{\mathrm{path}}/\energy{\hbar}}$. Here $\mathcal{S}_{\mathrm{path}}$ is the action of a path. The comparison pairs the real coefficient $-\thermal{\beta}$ with the imaginary coefficient $i/\energy{\hbar}$ in the two exponents.

##### Harmonic oscillator partition function

To trace the oscillator kernel, set $\mechanical{x}'=\mechanical{x}$. With $f=\thermal{\beta}\energy{\hbar}\mechanical{\omega}/2$, the resulting Gaussian is $A e^{-B\mechanical{x}^2}$, with

$$
A=\sqrt{\frac{\mechanical{m}\mechanical{\omega}}{2\pi\energy{\hbar}\sinh(2f)}},\qquad
B=\frac{\mechanical{m}\mechanical{\omega}}{\energy{\hbar}}\tanh f.
$$

The kernel from [[#Canonical ensemble kernels|the section on · Canonical ensemble kernels]] fixes the square root in $A$ and the square on $\mechanical{x}$. The Gaussian trace is

$$
Z=\int_{-\infty}^{\infty}\rho_u(\mechanical{x},\mechanical{x};\thermal{\beta})\,d\mechanical{x}
=A\sqrt{\frac{\pi}{B}}=\frac{1}{2\sinh f}.
$$

The handwritten box appears to put an extra factor of $1/2$ in the argument of $\sinh$. The subsequent free energy uses $f$ as defined above.

The Helmholtz free energy can be rewritten as a sum of the zero-point energy and a thermal term.

$$
\energy{A}=\frac{1}{\thermal{\beta}}\ln(2\sinh f)
=\frac12\energy{\hbar}\mechanical{\omega}
+\thermal{k}_{\mathrm B}\thermal{T}\ln(1-e^{-\thermal{\beta}\energy{\hbar}\mechanical{\omega}}).
$$

The mean energy follows from the derivative of $\ln Z$.

$$
\langle\energy{E}\rangle
=\frac{\energy{\hbar}\mechanical{\omega}}{2}\coth f
=\energy{\hbar}\mechanical{\omega}\left[
\frac12+\frac{1}{e^{\thermal{\beta}\energy{\hbar}\mechanical{\omega}}-1}
\right].
$$

The second term in brackets is the Planck occupation factor. The margin compares it with the Boltzmann factor $e^{-\thermal{\beta}\energy{\hbar}\mechanical{\omega}}$ and notes that the mean potential energy, obtained from $\langle\mechanical{x}^2\rangle$, is half the total. In the classical limit, the kinetic and potential terms each contribute $\tfrac12\thermal{k}_{\mathrm B}\thermal{T}$.

Alternatively, use the discrete levels $\energy{E}_n=\energy{\hbar}\mechanical{\omega}(n+1/2)$ and sum a geometric series.

$$
Z=\sum_{n=0}^\infty e^{-\thermal{\beta}\energy{E}_n}
=e^{-f}\sum_{n=0}^\infty(e^{-2f})^n
=\frac{e^{-f}}{1-e^{-2f}}
=\frac{1}{2\sinh f}.
$$

For $N$ independent identical oscillators with distinct sites, $Z_N=(Z_1)^N$. The last sketch shows masses linked by springs in a crystal lattice, whose vibration modes can be modeled as harmonic oscillators and quantized as phonons.

## Source

Kyle Kabasares, *Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of a particle. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\psi$ | — | Wavefunction | Quantum state amplitude with units that depend on the representation. |
| $\energy{\hat H}$ | $\unit{J}$ | Hamiltonian | Energy operator that determines quantum time evolution. |
| $t$ | $\unit{s}$ | Time | Time coordinate for the dynamics. |
| $N$ | 1 | Particle count | Number of atoms or molecules. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates absolute temperature to a microscopic energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature of the system or reservoir. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\mechanical{x}$, $\mechanical{h}$ | $\unit{m}$ | Position and height | Coordinate along the displacement and elevation reached in the lifting example. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{H}$ | $\unit{J}$ | Enthalpy or Hamiltonian | Internal energy plus the pressure–volume product in thermodynamics. In mechanics and ensemble weights, the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\mechanical{q}_i$, $\mechanical{p}_i$ | — | Generalized coordinates and momenta | Conjugate variables that specify a phase-space point. Their units depend on the coordinates. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $Z$ | 1 | Partition function | Sum of the Boltzmann weights of the accessible states. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\Omega$ | 1 | Multiplicity | Number of accessible microstates, including the cumulative count in the ideal-gas calculation. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | Side length of the cubic box. |
| $\Sigma$ | 1 | Cumulative state count | Number of states below the specified energy cutoff. |
| $\mechanical{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Oscillation frequency in the harmonic Hamiltonian. |
| $P(\mechanical{\vec p},\mechanical{\vec q})$ | — | Phase-space probability density | Density normalized with respect to the chosen phase-space measure. |
| $\hat\rho$ | 1 | Density matrix | Quantum statistical state with trace equal to one. |
| $P_i$ | 1 | Microstate probability | Probability of occupying state $i$ in the ensemble. |
| $g(\energy{E})$ | $\unit{J^{-1}}$ | Density of states | Number of states per unit energy in the continuum approximation. |
| $\rho(\mechanical{x},\mechanical{x}')$, $\rho_u(\mechanical{x},\mechanical{x}';\thermal{\beta})$ | $\unit{m^{-1}}$ in one dimension | Position-space density kernels | Matrix elements of the normalized state or the unnormalized thermal operator. |
| $\mathcal{S}_{\mathrm{path}}$ | $\unit{J\,s}$ | Action | Integral of the Lagrangian along a path in the quantum amplitude. |
| $\mechanical{\theta}$, $\phi$ | $\unit{rad}$ | Orientation angles | Polar and azimuthal angles of a moment relative to the field axis. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $q$ | $1$ | Coordination number | Number of neighboring lattice sites. |
