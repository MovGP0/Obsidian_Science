---
title: "Ising mean field and transfer-matrix calculations"
---

> [!TLDR]
> Compare mean-field ordering and susceptibility with the exact one-dimensional transfer-matrix calculation.

## Worked lecture material

##### Ising model

The lecture opens by comparing the microcanonical and canonical ensembles. A reversible adiabatic process has $\Delta\thermal{S}=0$. The microcanonical ensemble fixes $\energy{E}$ through isolation and fixed external parameters, while the canonical ensemble fixes $\thermal{T}$ through contact with a heat reservoir. The corresponding phase-space weights are

$$
p_{\mathrm{mc}}\propto\delta\bigl(\energy{E}-\energy{H}(\mechanical{p},\mechanical{q})\bigr),
\qquad
p_{\mathrm{can}}\propto e^{-\thermal{\beta}\energy{H}(\mechanical{p},\mechanical{q})}.
$$

The classical energy-shell density of states is

$$
g(\energy{E})=
\int\frac{\displaystyle\prod_{i=1}^N d^3\mechanical{p}_i\,d^3\mechanical{q}_i}
{(2\pi\energy{\hbar})^{3N}N!}
\delta\bigl(\energy{E}-\energy{H}(\mechanical{p},\mechanical{q})\bigr).
$$

With a step function $\Theta$ in place of $\delta$, the integral gives the cumulative state count $\Omega(\energy{E})$ inside the energy surface. The entropy from the dimensionless state count is $\thermal{S}=\thermal{k}_{\mathrm B}\ln\Omega$. The ideal-gas result combines the volume per particle and energy per particle,

$$
\thermal{S}(\energy{E},\mechanical{V},N)=N\thermal{k}_{\mathrm B}
\left[
\ln\left(
\frac{\mechanical{V}}{N}
\left(\frac{\mechanical{m}}{2\pi\energy{\hbar}^2}\frac{2\energy{E}}{3N}\right)^{3/2}
\right)+\frac52
\right].
$$

The canonical calculation uses $\energy{A}=\energy{E}-\thermal{T}\thermal{S}$ or the density matrix formula $\thermal{S}=-\thermal{k}_{\mathrm B}\operatorname{Tr}(\hat{\rho}\ln\hat{\rho})$. It gives

$$
\thermal{S}(\thermal{T},N,\mechanical{V})=
N\thermal{k}_{\mathrm B}\left[
\ln\left(
\frac{\mechanical{V}}{N}
\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}
\right)+\frac52
\right].
$$

By equipartition, $\energy{E}=\tfrac32 N\thermal{k}_{\mathrm B}\thermal{T}$, so the two expressions agree.

In the microcanonical ensemble, count states on the surface $\energy{E}=\energy{H}(\mechanical{p},\mechanical{q})$ for each choice of the external parameters. A canonical description can likewise follow a sequence of equilibrium states at different temperatures. Along a reversible adiabatic path,

$$
d\thermal{S}
=\left(\frac{\partial\thermal{S}}{\partial\energy{E}}\right)_{\mechanical{V},N}d\energy{E}
+\left(\frac{\partial\thermal{S}}{\partial\mechanical{V}}\right)_{\energy{E},N}d\mechanical{V}
+\left(\frac{\partial\thermal{S}}{\partial N}\right)_{\energy{E},\mechanical{V}}dN
=0.
$$

The lecture notes that either ensemble can describe the equilibrium states along such a path.

##### Mean-field approximation to the Ising model

The Hamiltonian and canonical partition function are

$$
\energy{H}=-\energy{J}\sum_{\langle ij\rangle}\sigma_i\sigma_j-\energy{h}\sum_i\sigma_i,
\qquad
\sigma_i\in\{-1,1\},
\qquad
Z=\sum_{\{\sigma_i\}}e^{-\thermal{\beta}\energy{H}(\{\sigma_i\})}.
$$

Here $\langle ij\rangle$ runs over neighboring pairs. Replace neighboring spins by their mean $\bar{\sigma}$. The lattice sketch shows four nearest neighbors around one spin on a square lattice. The coordination number $q$ is the number of neighbors, and the approximation works best when $q$ is large.

The notebook uses the effective coupling $\energy{J}q/2$ in its mean-field equation, so that $\thermal{T}_{\mathrm c}=\energy{J}q/(2\thermal{k}_{\mathrm B})$. At zero applied field, the ordered phase below $\thermal{T}_{\mathrm c}$ has $\bar{\sigma}\ne0$. The disordered phase above $\thermal{T}_{\mathrm c}$ has $\bar{\sigma}=0$. In the positive branch near the transition,

$$
\bar{\sigma}\sim\sqrt{3}\left(1-\frac{\thermal{T}}{\thermal{T}_{\mathrm c}}\right)^{1/2}.
$$

The sketch shows the mean spin decreasing from one at zero temperature to zero at the critical temperature.

##### Internal energy and heat capacity of the Ising model

The mean-field internal energy at zero applied field is given as an exercise,

$$
\energy{U}(\thermal{T})=-N\frac{\energy{J}q}{2}\bar{\sigma}^{\,2}.
$$

The heat capacity is $\thermal{C}_V=(\partial\energy{U}/\partial\thermal{T})_{\mechanical{V},N}$. With the critical temperature and near-critical spin on [[#Mean-field approximation to the Ising model|the section on Mean-field approximation to the Ising model]], the ordered-side limit is $3N\thermal{k}_{\mathrm B}$. The mean-field energy is zero above $\thermal{T}_{\mathrm c}$, so the heat capacity drops to zero there.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ising heat capacity.png|**Fig. 17** Mean-field heat capacity with a jump at the transition.]]

##### Magnetic susceptibility

The summed spin is $N\bar{\sigma}$. In magnetic-moment units, $\magnetic{M}=N\magnetic{\mu}\bar{\sigma}$, with moment $\magnetic{\mu}$ per spin. Differentiate with respect to the applied field $\magnetic{H}$ and evaluate at zero field to obtain

$$
\begin{aligned}
\magnetic{\chi}(\thermal{T})
&=\frac{\partial\magnetic{M}}{\partial\magnetic{H}}
=N\magnetic{\mu}\frac{\partial\bar{\sigma}}{\partial\magnetic{H}}\\
&=\frac{2N\magnetic{\mu}^{\,2}}{\energy{J}q}
\frac{\thermal{T}_{\mathrm c}/\thermal{T}}
{\cosh^2(\bar{\sigma}\thermal{T}_{\mathrm c}/\thermal{T})-\thermal{T}_{\mathrm c}/\thermal{T}}.
\end{aligned}
$$

The mean-field susceptibility has a simple pole near the transition. The notebook writes the approach from below as $\magnetic{\chi}\propto(1-\thermal{T}/\thermal{T}_{\mathrm c})^{-1}$.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ising susceptibility.png|**Fig. 18** Magnetic susceptibility near the critical temperature.]]

##### Spontaneous symmetry breaking

At $\thermal{T}\to0$ the sketches show an array of all up spins or all down spins. The zero-field Hamiltonian has the symmetry $\sigma_i\mapsto-\sigma_i$ for all sites, and selecting either ordered configuration breaks that symmetry spontaneously.

At low nonzero temperature, small islands of reversed spins form in an otherwise ordered region. As $\thermal{T}\to\thermal{T}_{\mathrm c}$, the lecture describes islands of both orientations at many sizes, illustrating scale invariance.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ising spin domains.png|**Fig. 19** A small reversed-spin domain at low temperature and a larger domain near the critical temperature.]]

At high temperature, $\thermal{\beta}\to0$ and $e^{-\thermal{\beta}\energy{H}}\to1$. All configurations have the same weight in that limit, so the spin orientations are random. On cooling toward $\thermal{T}_{\mathrm c}$ from above, correlated islands begin to form again. The lecture contrasts the difficulty of an exact solution in three dimensions with the one-dimensional calculation below.

##### One-dimensional Ising model

Take a chain of $N$ sites with unit spacing and periodic boundary conditions, $\sigma_{N+1}=\sigma_1$. Each site has $\sigma_i=\pm1$, and the Hamiltonian and partition function are

$$
\energy{H}(\{\sigma_i\})
=-\energy{J}\sum_{i=1}^N\sigma_i\sigma_{i+1}
-\energy{h}\sum_{i=1}^N\sigma_i,
\qquad
Z=\sum_{\{\sigma_i\}}e^{-\thermal{\beta}\energy{H}(\{\sigma_i\})}.
$$

Share the field energy equally between the two adjacent bonds of each site. The Boltzmann factor becomes

$$
e^{-\thermal{\beta}\energy{H}}
=\prod_{i=1}^N
\exp\left[
\thermal{\beta}\energy{J}\sigma_i\sigma_{i+1}
+\frac{\thermal{\beta}\energy{h}}2(\sigma_i+\sigma_{i+1})
\right].
$$

##### Transfer matrix

The configuration sum means summing each $\sigma_i$ independently over $\{-1,1\}$. The notebook labels the method “Ising 1920.” The four possible neighboring pairs give a $2\times 2$ transfer matrix,

$$
\mathsf{T}=
\begin{pmatrix}
e^{\thermal{\beta}(\energy{J}+\energy{h})} & e^{-\thermal{\beta}\energy{J}} \\
e^{-\thermal{\beta}\energy{J}} & e^{\thermal{\beta}(\energy{J}-\energy{h})}
\end{pmatrix},
\qquad
Z_N=\operatorname{Tr}(\mathsf{T}^N).
$$

The trace is invariant under the orthogonal change of basis that diagonalizes $\mathsf{T}$. Its eigenvalues are

$$
\lambda_\pm=e^{\thermal{\beta}\energy{J}}\left[
\cosh(\thermal{\beta}\energy{h})
\pm\sqrt{\sinh^2(\thermal{\beta}\energy{h})+e^{-4\thermal{\beta}\energy{J}}}
\right].
$$

The expression under the square root follows by diagonalizing the displayed matrix. The handwritten radical differs in both this line and the mean-spin line below it. Using the two eigenvalues,

$$
Z_N=\lambda_+^N+\lambda_-^N
=\lambda_+^N\left[1+\left(\frac{\lambda_-}{\lambda_+}\right)^N\right].
$$

At positive temperature, $|\lambda_-|<\lambda_+$. In the thermodynamic limit, the free energy per site and the mean spin are

$$
\begin{aligned}
\energy{f}&=-\thermal{k}_{\mathrm B}\thermal{T}\ln\lambda_+,\\
\bar{\sigma}&=-\frac{\partial\energy{f}}{\partial\energy{h}}
=\frac{\sinh(\thermal{\beta}\energy{h})}
{\sqrt{\sinh^2(\thermal{\beta}\energy{h})+e^{-4\thermal{\beta}\energy{J}}}}.
\end{aligned}
$$

At fixed positive temperature, $\bar{\sigma}\to0$ as $\energy{h}\to0$.

##### Ordering in one and two dimensions

The one-dimensional nearest-neighbor Ising model has zero spontaneous magnetization at every positive temperature. The disordered phase persists down to zero temperature from above. Differentiating the mean spin on [[#Transfer matrix|the section on Transfer matrix]] gives the zero-field susceptibility per site, measured with respect to the energy parameter $\energy{h}$,

$$
\magnetic{\chi}_h
=\left.\frac{\partial\bar{\sigma}}{\partial\energy{h}}\right|_{\energy{h}=0}
=\thermal{\beta}e^{2\thermal{\beta}\energy{J}}.
$$

For ferromagnetic coupling, the exponential growth dominates as $\thermal{T}\to0$. The sketch shows the susceptibility falling as temperature rises.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - One dimensional Ising susceptibility.png|**Fig. 20** Susceptibility of the Ising chain, with its low-temperature exponential growth marked on the curve.]]

The lecture relates the absence of ordering in one dimension to the limited number of neighbors. For the two-dimensional square lattice at zero field, it cites Onsager's 1944 exact solution and identifies a finite-temperature phase transition. The dimensionless critical coupling is

$$
\frac{\energy{J}}{\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c}}
=\frac12\ln(1+\sqrt{2}).
$$

The notebook labels the logarithm $\thermal{T}_{\mathrm c}$. In the Hamiltonian convention used here, it is the inverse reduced critical temperature.

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
| $\energy{U}$ | $\unit{J}$ | Internal energy | Total microscopic energy of the system. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{H}$ | $\unit{J}$ | Enthalpy or Hamiltonian | Internal energy plus the pressure–volume product in thermodynamics. In mechanics and ensemble weights, the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\mechanical{q}_i$, $\mechanical{p}_i$ | — | Generalized coordinates and momenta | Conjugate variables that specify a phase-space point. Their units depend on the coordinates. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $Z$ | 1 | Partition function | Sum of the Boltzmann weights of the accessible states. |
| $\Omega$ | 1 | Multiplicity | Number of accessible microstates, including the cumulative count in the ideal-gas calculation. |
| $\energy{h}$ | $\unit{J\,s}$ | Planck constant | Relates photon energy to frequency. |
| $g(\energy{E})$ | $\unit{J^{-1}}$ | Density of states | Number of states per unit energy in the continuum approximation. |
| $\magnetic{\mu}$, $\magnetic{\vec\mu}$ | $\unit{J\,T^{-1}}$ | Magnetic dipole moment | Moment of an individual spin. |
| $\magnetic{H}$, $\magnetic{\vec H}$ | $\unit{T}$ in this convention | Applied magnetic field | Field entering the dipole energy in the notebook's notation. |
| $\magnetic{M}$, $\magnetic{M}_z$ | $\unit{J\,T^{-1}}$ | Total moment along the field | Sum of the mean field-aligned moment components. |
| $\magnetic{\chi}$ | $\unit{J\,T^{-2}}$ in this convention | Magnetic susceptibility | Response of the total moment to a change in the applied field. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $j$ | 1 | Internal partition function | Sum over molecular states other than translation. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\thermal{T}_{\mathrm c}$ | $\unit{K}$ | Critical temperature | Onset of macroscopic ground-state occupation or magnetic ordering, according to the model. |
| $\energy{J}$ | $\unit{J}$ | Ising coupling | Energy coefficient of the neighboring-spin interaction. |
| $\energy{h}$ | $\unit{J}$ | Ising field parameter | Energy coefficient of the single-spin term. The same letter denotes Planck's constant in earlier sections. |
| $\sigma_i$, $\bar{\sigma}$ | $1$ | Ising spin and mean spin | Individual orientation and its average in the mean-field approximation. |
| $q$ | $1$ | Coordination number | Number of neighboring lattice sites. |
| $\energy{f}$ | $\unit{J}$ | Free energy per site | Thermodynamic-limit free energy of the Ising chain divided by the site count. |
| $\magnetic{\chi}_h$ | $\unit{J^{-1}}$ | Ising spin susceptibility | Change in mean spin per unit change in the field energy parameter. |
