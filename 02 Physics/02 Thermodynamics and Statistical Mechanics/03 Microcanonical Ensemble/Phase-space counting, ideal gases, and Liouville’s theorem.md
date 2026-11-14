---
title: "Phase-space counting, ideal gases, and Liouville’s theorem"
---

> [!TLDR]
> Count accessible states, derive ideal-gas thermodynamics, and connect ensemble averages with conservation of phase-space density.

## Worked lecture material

##### Statistical mechanics

The reading list names Pathria, a name that appears to read “Carder,” and Feynman's statistical mechanics lectures, with a note about the density matrix. As the number of particles grows from one or a few to $N\sim10^{23}$, statistical mechanics describes observables through averages $\langle A\rangle$, fluctuations, and correlations.

##### Historical outline

The dates below follow the notebook.

- **Bernoulli, about 1738.** Molecules exert pressure, with $\mechanical{P}\propto1/\mechanical{V}$ at fixed $\thermal{T}$. The notes also mention van der Waals's replacement $\mechanical{V}-\mechanical{b}$ to account for finite molecular size.
- **Krönig, about 1856.** Random-walk ideas and probability.
- **Clausius, about 1859.** Mean free path and the kinetic theory of gases.
- **Maxwell, about 1860.** The distribution of molecular velocities. The notebook labels it Gaussian, which applies to a velocity component.
- **Boltzmann, about 1868–1871.** The Boltzmann weight is proportional to $e^{-\thermal{\beta}\energy{E}}$, with $\thermal{\beta}=1/(\thermal{k}_{\mathrm B}\thermal{T})$. The microscopic Hamiltonian is $\energy{H}(\mechanical{p}_i,\mechanical{q}_i)$ for coordinates and momenta indexed by $i$. Equipartition assigns mean energy $\tfrac12\thermal{k}_{\mathrm B}\thermal{T}$ to each quadratic term. The notes connect the $H$-theorem with relaxation toward an equilibrium distribution under suitable conditions and with irreversibility at the macroscopic level. They date the Boltzmann transport equations to 1876.
- **Gibbs, about 1902.** Thermodynamic potentials are functions of state variables. The notebook sketches partial derivatives of a potential $\Omega(\thermal{T},\mechanical{V},N)$. The Helmholtz free energy $\energy{F}$, called $\energy{A}$ in Pathria, relates to the partition function $Z$ by $\energy{F}=-\thermal{\beta}^{-1}\ln Z$.
- **Planck, about 1900.** Blackbody radiation.
- **Einstein, early 1900s.** Photons are quanta of light.
- **Bose statistics, about 1924.** Indistinguishable bosons and Bose condensation.
- **Fermi statistics, about 1926.** Indistinguishable fermions and Fermi states.
- **Pauli, about 1941.** The spin–statistics theorem associates integer spin with bosons and half-integer spin with fermions.

##### Phase space and ensembles

The notes introduce a phase-space density $P(\mechanical{p}_i,\mechanical{q}_i,t)$ and sketch an evolving set of configurations at constant energy. At equilibrium $\partial P/\partial t=0$. A distribution that depends only on the conserved energy, $P=P(\energy{E})$, is stationary. In an **ergodic** system, a trajectory samples the accessible states so that a long-time average agrees with the ensemble average.

##### Thermodynamics review and classical statistical mechanics

The notebook lists Reif and Fermi as undergraduate references.

At fixed particle number, the first law with pressure–volume work gives $d\energy{E}=\delta\thermal{Q}+\delta\energy{W}$, with $\delta\energy{W}=-\mechanical{P}\,d\mechanical{V}$ for a quasistatic process. The reversible heat term is $\thermal{T}\,d\thermal{S}$. The handwritten annotation appears to interchange the roles of $\thermal{S}$ and $\thermal{T}$ in this term. Entropy is maximized at equilibrium for an isolated system, and its exact differential integrates to zero over a closed cycle.

In the energy representation,

$$
\thermal{T}=\left(\frac{\partial\energy{E}}{\partial\thermal{S}}\right)_V,\qquad
\mechanical{P}=-\left(\frac{\partial\energy{E}}{\partial\mechanical{V}}\right)_S.
$$

The Legendre transform to the Helmholtz free energy gives

$$
\begin{aligned}
\energy{F}&=\energy{E}-\thermal{T}\thermal{S},&
d\energy{F}&=-\thermal{S}\,d\thermal{T}-\mechanical{P}\,d\mechanical{V},\\
\thermal{S}&=-\left(\frac{\partial\energy{F}}{\partial\thermal{T}}\right)_V,&
\mechanical{P}&=-\left(\frac{\partial\energy{F}}{\partial\mechanical{V}}\right)_T.
\end{aligned}
$$

The notebook also gives $\energy{G}=\energy{A}+\mechanical{P}\mechanical{V}$, where $\energy{A}=\energy{F}$, and $\energy{H}=\energy{G}+\thermal{T}\thermal{S}$.

##### Counting states and exchanging energy

In the thermodynamic limit, $N$ and $\mechanical{V}$ both tend to infinity with the number density $n=N/\mechanical{V}$ held fixed. Here $n$ denotes density, whereas it denotes the amount in moles in the earlier ideal gas calculation. Extensive quantities scale with $N$ or $\mechanical{V}$. Temperature, pressure, and chemical potential $\energy{\mu}$ are intensive.

If $n_i$ particles occupy level $i$ with energy $\energy{\epsilon}_i$, then $N=\sum_i n_i$ and $\energy{E}=\sum_i n_i\energy{\epsilon}_i$. Specifying $N,\mechanical{V},\energy{E}$ defines a macrostate that can have many microscopic realizations. The notebook calls it a “microstate” on the first line, then draws two microscopic configurations for the same macroscopic values. Write $\Omega(N,\energy{E},\mechanical{V})$ for the multiplicity.

Two weakly interacting subsystems can exchange energy while their total $\energy{E}\approx\energy{E}_1+\energy{E}_2$ stays fixed. For a given split, the combined multiplicity is $\Omega_1(\energy{E}_1)\Omega_2(\energy{E}-\energy{E}_1)$. The two density-of-states factors scale as

$$
\Omega_1\propto\energy{E}_1^{3N_1/2-1},\qquad
\Omega_2\propto(\energy{E}-\energy{E}_1)^{3N_2/2-1},\qquad N_2=N-N_1.
$$

The sketch shows the first factor rising and the second falling with $\energy{E}_1$. Their product has a peak at the most probable energy split. At the maximum,

$$
0=\frac{d}{d\energy{E}_1}(\Omega_1\Omega_2)
=\Omega_2\frac{\partial\Omega_1}{\partial\energy{E}_1}
-\Omega_1\frac{\partial\Omega_2}{\partial\energy{E}_2},
$$

where $d\energy{E}_2/d\energy{E}_1=-1$. Dividing by $\Omega_1\Omega_2$ gives the equilibrium condition

$$
\frac{1}{\Omega_1}\frac{\partial\Omega_1}{\partial\energy{E}_1}
=\frac{1}{\Omega_2}\frac{\partial\Omega_2}{\partial\energy{E}_2},
\qquad \thermal{\beta}_1=\thermal{\beta}_2.
$$

A margin note compares the density of states with a frequency spectrum written $d\energy{u}=\rho(\signal{\nu})\,d\signal{\nu}$ and recalls $\energy{E}=\energy{h}\signal{\nu}$ for one photon. The prefactor of the accompanying expression proportional to $\signal{\nu}^2/\mechanical{c}^3$ is unclear.

##### Entropy and the Boltzmann distribution

At the equilibrium energy $\bar{\energy{E}}$, define $\thermal{\beta}=(\partial\ln\Omega/\partial\energy{E})_{V,N}$ evaluated at $\energy{E}=\bar{\energy{E}}$. Comparing with $(\partial\thermal{S}/\partial\energy{E})_{V,N}=1/\thermal{T}$ gives a microscopic interpretation of entropy, attributed here to Planck.

$$
\thermal{S}=\thermal{k}_{\mathrm B}\ln\Omega.
$$

If $\Omega=1$, the entropy is zero. The notebook describes entropy qualitatively as a measure of disorder.

For a small subsystem $1$ in contact with a much larger thermal bath $2$, write $\energy{E}_2=\energy{E}-\energy{E}_1\gg\energy{E}_1$. The probability of an energy in $d\energy{E}_1$ is proportional to $\Omega_1(\energy{E}_1)\Omega_2(\energy{E}-\energy{E}_1)\,d\energy{E}_1$. Expand the logarithm of the bath multiplicity to first order.

$$
\ln\Omega_2(\energy{E}-\energy{E}_1)
\approx\ln\Omega_2(\energy{E})
-\energy{E}_1\frac{\partial\ln\Omega_2}{\partial\energy{E}}
=\ln\Omega_2(\energy{E})-\frac{\energy{E}_1}{\thermal{k}_{\mathrm B}\thermal{T}}.
$$

The first term is independent of $\energy{E}_1$. Exponentiating gives the energy distribution

$$
dP\propto\Omega_1(\energy{E}_1)
e^{-\energy{E}_1/(\thermal{k}_{\mathrm B}\thermal{T})}\,d\energy{E}_1.
$$

This derivation uses the small subsystem and large bath assumptions. The written logarithm appears to include an extra constant bath factor, which is absorbed into normalization.

##### Volume and particle exchange

For two subsystems separated by a movable partition, hold $\mechanical{V}=\mechanical{V}_1+\mechanical{V}_2$ fixed. The same multiplicity maximization equates $(\partial\ln\Omega_i/\partial\mechanical{V}_i)_{E_i,N_i}$ on the two sides. For particle exchange hold $N=N_1+N_2$ fixed. Define the derivatives at the equilibrium values of their arguments.

$$
\begin{aligned}
\thermal{\beta}&=\left(\frac{\partial\ln\Omega}{\partial\energy{E}}\right)_{V,N},\\
\eta&=\left(\frac{\partial\ln\Omega}{\partial\mechanical{V}}\right)_{E,N},\\
\xi&=\left(\frac{\partial\ln\Omega}{\partial N}\right)_{E,V}.
\end{aligned}
$$

The first law for a variable particle number is $d\energy{E}=\thermal{T}\,d\thermal{S}-\mechanical{P}\,d\mechanical{V}+\energy{\mu}\,dN$. Solving for the entropy differential gives

$$
\left(\frac{\partial\thermal{S}}{\partial\energy{E}}\right)_{N,V}=\frac{1}{\thermal{T}},\qquad
\left(\frac{\partial\thermal{S}}{\partial\mechanical{V}}\right)_{E,N}=\frac{\mechanical{P}}{\thermal{T}},\qquad
\left(\frac{\partial\thermal{S}}{\partial N}\right)_{E,V}=-\frac{\energy{\mu}}{\thermal{T}}.
$$

Thus $\eta=\mechanical{P}/(\thermal{k}_{\mathrm B}\thermal{T})$ and $\xi=-\energy{\mu}/(\thermal{k}_{\mathrm B}\thermal{T})$. If all three exchanges are allowed at equilibrium, then $\thermal{T}_1=\thermal{T}_2$, $\mechanical{P}_1=\mechanical{P}_2$, and $\energy{\mu}_1=\energy{\mu}_2$.

##### Ideal gases and the virial theorem

The lecture reviews $\Omega(N,\mechanical{V},\energy{E})$ as the number of accessible microstates, $\thermal{S}=\thermal{k}_{\mathrm B}\ln\Omega$, and the entropy derivatives that give $1/\thermal{T}$, $\mechanical{P}/\thermal{T}$, and $-\energy{\mu}/\thermal{T}$.

For an ideal gas with vanishing pair interactions, the configuration part of the state count scales as $\Omega\propto\mechanical{V}^N$. It follows that

$$
\frac{\mechanical{P}}{\thermal{T}}
=\left(\frac{\partial\thermal{S}}{\partial\mechanical{V}}\right)_{E,N}
=\frac{\thermal{k}_{\mathrm B}N}{\mechanical{V}},\qquad
\mechanical{P}\mechanical{V}=N\thermal{k}_{\mathrm B}\thermal{T}=n\thermal{R}\thermal{T},
$$

where $n$ in the last expression is the amount in moles. This is the ideal gas equation of state.

##### Virial derivation of the kinetic energy

Dot the equation $\mechanical{m}_i\ddot{\mechanical{\vec x}}_i=\mechanical{\vec F}_i$ with $\mechanical{\vec x}_i$ and sum over particles. In a long-time average the boundary term from integration by parts vanishes for bounded motion.

$$
\left\langle\sum_i\mechanical{\vec F}_i\cdot\mechanical{\vec x}_i\right\rangle
=\left\langle\sum_i\mechanical{m}_i\ddot{\mechanical{\vec x}}_i\cdot\mechanical{\vec x}_i\right\rangle
=-\left\langle\sum_i\mechanical{m}_i\dot{\mechanical{\vec x}}_i^{\,2}\right\rangle
=-2\langle\energy{E}_{\mathrm{kin}}\rangle.
$$

For the ideal gas the forces come from the walls. A wall element of area $d\sigma$ and outward unit normal $\hat n$ applies $d\mechanical{\vec F}=-\mechanical{P}\hat n\,d\sigma$ to the gas. Using uniform pressure and the divergence theorem,

$$
-\left\langle\sum_i\mechanical{\vec F}_i\cdot\mechanical{\vec x}_i\right\rangle
=\mechanical{P}\int_{\partial V}\hat n\cdot\mechanical{\vec x}\,d\sigma
=\mechanical{P}\int_V\nabla\cdot\mechanical{\vec x}\,d\mechanical{V}
=3\mechanical{P}\mechanical{V}.
$$

Hence $\mechanical{P}\mechanical{V}=\tfrac23\langle\energy{E}_{\mathrm{kin}}\rangle$. Together with the ideal gas law this gives the equipartition result

$$
\langle\energy{E}_{\mathrm{kin}}\rangle=\frac32N\thermal{k}_{\mathrm B}\thermal{T}.
$$

There are three translational degrees of freedom per particle, each contributing $\tfrac12\thermal{k}_{\mathrm B}\thermal{T}$.

In the microcanonical ensemble, $\energy{E}=\sum_{i=1}^N\tfrac12\mechanical{m}\mechanical{v}_i^2$ is fixed. In the quantum description of noninteracting particles, the energy is the sum of the occupied one-particle energies. For a particle in a cubic box of side $\mechanical{L}$,

$$
\energy{\epsilon}
=\frac{\energy{\hbar}^2\signal{k}^2}{2\mechanical{m}}
=\frac{\energy{\hbar}^2\pi^2}{2\mechanical{m}\mechanical{L}^2}
(n_x^2+n_y^2+n_z^2).
$$

##### Pressure from the scaling of energy levels

For a cube, $\mechanical{V}=\mechanical{L}^3$. The one-particle box energies on the preceding page give

$$
\sum_i(n_{ix}^2+n_{iy}^2+n_{iz}^2)
=\frac{2\mechanical{m}}{\energy{\hbar}^2\pi^2}\mechanical{V}^{2/3}\energy{E}.
$$

The relevant combination for counting states is $\mechanical{V}^{2/3}\energy{E}$ at fixed $N$. Thus $\thermal{S}(N,\mechanical{V},\energy{E})$ depends on $\mechanical{V}$ and $\energy{E}$ through this combination. Along a reversible adiabat $\thermal{S}$ is constant, so $\mechanical{V}^{2/3}\energy{E}$ is constant and

$$
\mechanical{P}=-\left(\frac{\partial\energy{E}}{\partial\mechanical{V}}\right)_{S,N}
=\frac{2\energy{E}}{3\mechanical{V}}.
$$

**Exercise.** For ultrarelativistic particles use $\energy{E}=\mechanical{c}|\mechanical{\vec p}|$ for a single particle. Momentum in the box scales as $\mechanical{L}^{-1}$, so the corresponding adiabatic invariant is $\mechanical{V}^{1/3}\energy{E}$. It gives $\mechanical{P}=\energy{E}/(3\mechanical{V})$.

The notebook recommends James Sethna's *Entropy, Order Parameters, and Complexity*.

##### Cumulative state count and the momentum distribution

In a large volume, it can be convenient to count all states below a cutoff,

$$
\Sigma(N,\mechanical{V},\energy{E})
=\sum_{\energy{E}'<\energy{E}}\Omega(N,\mechanical{V},\energy{E}').
$$

For one quantum particle, approximate the sum over states by an integral. The box quantization $k_x=\pi n_x/\mechanical{L}$ with positive integers can be extended to integration over all wavevectors by accounting for the eight octants.

$$
\sum_{\text{states}}1
\ \longrightarrow\
\left(\frac{\mechanical{L}}{2\pi}\right)^3\int d^3\signal{\vec k}
=\frac{\mechanical{V}}{(2\pi\energy{\hbar})^3}\int d^3\mechanical{\vec p}.
$$

For $N$ identical particles in the classical counting approximation, include $1/N!$ and keep the momentum configurations below the energy cutoff using the step function $\Theta$.

$$
\Sigma(N,\mechanical{V},\energy{E})
=\frac{\mechanical{V}^N}{N!(2\pi\energy{\hbar})^{3N}}
\int d^3\mechanical{\vec p}_1\cdots d^3\mechanical{\vec p}_N\,
\Theta\left(\energy{E}-\sum_{i=1}^N\frac{\mechanical{p}_i^2}{2\mechanical{m}}\right).
$$

Several sketches show particles with different directions of motion inside a box. A margin question asks whether the ideal-gas calculation assumes no collisions.

To get the distribution of the first particle's $x$ component, integrate over $\mechanical{p}_{1y},\mechanical{p}_{1z}$ and all the other momenta. For a shell at fixed energy the notes indicate a delta function to impose the energy constraint. The result at large $N$ is Gaussian.

$$
F(\mechanical{p}_{1x})\propto
\exp\left(-\frac{\mechanical{p}_{1x}^2}{2\mechanical{m}}\frac{3N}{2\energy{E}}\right),
\qquad
\int_{-\infty}^{\infty}F(\mechanical{p}_{1x})\,d\mechanical{p}_{1x}=1.
$$

The question uses the velocity component $\mechanical{v}_{1x}$. The boxed result uses the momentum component, with $\mechanical{p}_{1x}=\mechanical{m}\mechanical{v}_{1x}$.

The cumulative classical count $\Sigma$ integrates the phase-space measure with a step function restricting the kinetic energy. The coordinate integrations contribute $\mechanical{V}^N$ because the kinetic energy is independent of position inside the box.

##### State counting for an ideal gas

The ideal gas has zero pair potential. Replacing the cutoff step function by a delta function gives the density of states at $\energy{E}$,

$$
\frac{\partial\Sigma}{\partial\energy{E}}=
\frac{1}{(2\pi\energy{\hbar})^{3N}N!}
\int d^3\mechanical{\vec p}_1\cdots d^3\mechanical{\vec p}_N\,
d^3\mechanical{\vec q}_1\cdots d^3\mechanical{\vec q}_N\,
\delta\left(\energy{E}-\sum_{i=1}^N\frac{\mechanical{p}_i^2}{2\mechanical{m}}\right).
$$

The notebook labels the integral $\Omega$ and calls it dimensionless. With a Dirac delta in energy, the integral is a density per unit energy. The dimensionless count $\Omega$ used in $\thermal{S}=\thermal{k}_{\mathrm B}\ln\Omega$ is obtained by integrating over an energy shell. The notes identify $2\pi\energy{\hbar}$ as a phase-space cell for one coordinate and its conjugate momentum, and link the $1/N!$ to the Gibbs paradox. The shorthand $\int[dp\,dq/(2\pi\energy{\hbar})]$ is compared to Feynman's path-integral notation.

##### Volume of a ball in $D$ dimensions

For the cutoff at $\energy{E}$, the allowed $D=3N$ dimensional momentum vectors form a ball of radius $R=\sqrt{2\mechanical{m}\energy{E}}$. Let $\Omega_D$ be the surface area of the unit sphere in $D$ dimensions. The ball volume is

$$
\int d^D\vec x\,\Theta(R-|\vec x|)
=\int_0^R r^{D-1}\,dr\int d\Omega_D
=\frac{\Omega_D R^D}{D}.
$$

To find $\Omega_D$, evaluate a Gaussian integral in Cartesian and spherical coordinates. The Cartesian result is $\pi^{D/2}$. In spherical coordinates use $y=r^2$.

$$
\begin{aligned}
\pi^{D/2}
&=\Omega_D\int_0^\infty r^{D-1}e^{-r^2}\,dr
=\frac{\Omega_D}{2}\int_0^\infty y^{D/2-1}e^{-y}\,dy
=\frac{\Omega_D}{2}\Gamma(D/2),\\
\Omega_D&=\frac{2\pi^{D/2}}{\Gamma(D/2)}.
\end{aligned}
$$

The margin names MathWorld alongside the gamma function. The formulas listed are

$$
\Gamma(n)=\int_0^\infty t^{n-1}e^{-t}\,dt,\qquad
\Gamma(n+1)=n\Gamma(n),\qquad
\Gamma(1)=1,\qquad \Gamma(1/2)=\sqrt{\pi}.
$$

For positive integer $n$, $\Gamma(n)=(n-1)!$.

##### Stirling's approximation and the ideal gas entropy

For large $n$, the notes give

$$
\begin{aligned}
n!&\sim\sqrt{2\pi n}\left(\frac{n}{e}\right)^n
\left(1+\frac{1}{12n}+\frac{1}{288n^2}+\cdots\right),\\
\ln n!&=n\ln n-n+\frac12\ln(2\pi n)+\frac{1}{12n}+\cdots.
\end{aligned}
$$

With $D=3N$, use the ball volume $\pi^{D/2}R^D/\Gamma(D/2+1)$, radius $R=\sqrt{2\mechanical{m}\energy{E}}$, and the configuration volume $\mechanical{V}^N$.

$$
\Sigma(\energy{E})
=\frac{(2\mechanical{m}\energy{E})^{3N/2}\pi^{3N/2}\mechanical{V}^N}
{(2\pi\energy{\hbar})^{3N}N!\Gamma(3N/2+1)}.
$$

The $N!$ accounts for identical particles in this classical counting approximation. The shell count for a small energy width $\delta\energy{E}$ is

$$
\begin{aligned}
\Omega(\energy{E})&=\Sigma(\energy{E})-\Sigma(\energy{E}-\delta\energy{E})\\
&=\Sigma(\energy{E})\left[1-\left(1-\frac{\delta\energy{E}}{\energy{E}}\right)^{3N/2}\right]\\
&\approx\Sigma(\energy{E})\left[1-e^{-3N\delta\energy{E}/(2\energy{E})}\right].
\end{aligned}
$$

The shell factor adds a subextensive term to the entropy for fixed shell width and fixed energy per particle. To leading order one may use $\thermal{S}\approx\thermal{k}_{\mathrm B}\ln\Sigma$. Before applying Stirling's approximation this gives

$$
\thermal{S}\approx
N\thermal{k}_{\mathrm B}\ln\left[\mechanical{V}
\left(\frac{\mechanical{m}\energy{E}}{2\pi\energy{\hbar}^2}\right)^{3/2}\right]
-\thermal{k}_{\mathrm B}\ln[N!\Gamma(3N/2+1)].
$$

Use $\ln N!\sim N\ln(N/e)$ and $\ln\Gamma(3N/2+1)\sim (3N/2)\ln(3N/(2e))$. The resulting extensive entropy is

$$
\thermal{S}\approx N\thermal{k}_{\mathrm B}
\left\{\ln\left[\frac{\mechanical{V}}{N}
\left(\frac{\mechanical{m}\energy{E}}{3\pi\energy{\hbar}^2N}\right)^{3/2}\right]
+\frac52\right\}.
$$

The $N!$ produces the $1/N$ in the volume factor and contributes one unit to the constant $5/2$. Inverting gives the energy representation at the same order,

$$
\energy{E}(\thermal{S},\mechanical{V},N)
\approx\frac{3\pi\energy{\hbar}^2N^{5/3}}{\mechanical{m}\mechanical{V}^{2/3}}
\exp\left(\frac{2\thermal{S}}{3N\thermal{k}_{\mathrm B}}-\frac53\right).
$$

The notebook also considers the expression without $N!$, which has $N$ in place of $N^{5/3}$ and $-1$ in the exponent. The energy form is convenient when $\thermal{S}$ is fixed along a reversible adiabat.

Taking the entropy derivative with respect to energy gives

$$
\frac{1}{\thermal{T}}=\left(\frac{\partial\thermal{S}}{\partial\energy{E}}\right)_{V,N}
=\frac{3N\thermal{k}_{\mathrm B}}{2\energy{E}},\qquad
\energy{E}=\frac32N\thermal{k}_{\mathrm B}\thermal{T},\qquad
\thermal{C}_V=\frac32N\thermal{k}_{\mathrm B}.
$$

The last handwritten derivative is inverted relative to the differentiated entropy and the boxed energy result.

The monatomic ideal gas has $\thermal{C}_V=(\partial\energy{E}/\partial\thermal{T})_{N,V}=\tfrac32N\thermal{k}_{\mathrm B}$ and $\mechanical{P}=-(\partial\energy{E}/\partial\mechanical{V})_{N,S}=2\energy{E}/(3\mechanical{V})$. Their common energy dependence recovers the ideal gas law.

##### Chemical potential and thermal wavelength

The chemical potential is $\energy{\mu}=(\partial\energy{E}/\partial N)_{S,V}$. Differentiating the extensive energy representation from the previous page gives

$$
\energy{\mu}=\energy{E}\left(\frac{5}{3N}-\frac{2\thermal{S}}{3N^2\thermal{k}_{\mathrm B}}\right).
$$

The handwritten intermediate expression is difficult to reconcile with the energy representation. The boxed result can be recovered by substituting $\energy{E}=\tfrac32N\thermal{k}_{\mathrm B}\thermal{T}$ and the entropy formula.

$$
\energy{\mu}=\thermal{k}_{\mathrm B}\thermal{T}\ln\left[
\frac{N}{\mechanical{V}}\left(\frac{\energy{h}^2}{2\pi\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}\right)^{3/2}\right]
=\thermal{k}_{\mathrm B}\thermal{T}\ln(n\signal{\lambda}_{\mathrm{th}}^3),
\qquad
\signal{\lambda}_{\mathrm{th}}=\frac{\energy{h}}{\sqrt{2\pi\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}}.
$$

Here $n=N/\mechanical{V}$. The notes point out that the logarithm can change sign and connect the wavelength scale to the de Broglie relation $\mechanical{p}=\energy{h}/\signal{\lambda}$ and $\energy{E}=\mechanical{p}^2/(2\mechanical{m})$ at thermal energies. The classical gas result applies at high temperature or low density, where $n\signal{\lambda}_{\mathrm{th}}^3\ll1$.

The lecture moves from the ideal gas in the microcanonical ensemble to the canonical ensemble at fixed $\thermal{T}$.

##### Fluctuations and phase-space averages

The variance of an observable $A$ is $\langle A^2\rangle-\langle A\rangle^2$. The notes anticipate relative fluctuations of order $N^{-1/2}$ in the thermodynamic limit. This scaling refers to the relative standard deviation of an extensive observable under the usual weak-correlation assumptions.

For $N$ degrees of freedom, the phase space has $2N$ coordinates $(\mechanical{q}_1,\ldots,\mechanical{q}_N,\mechanical{p}_1,\ldots,\mechanical{p}_N)$. The notes relate the probability of occupying a small region to the limiting fraction of observation time spent there. Write $d\Gamma$ for the product of coordinate and momentum differentials. For a region $B$,

$$
P_B=\int_B P(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma,\qquad
\int P\,d\Gamma=1,\qquad
\langle A\rangle=\int P(\mechanical{\vec p},\mechanical{\vec q})A(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma.
$$

The ensemble average is taken to agree with the long-time average. The final sketch divides the system into two weakly interacting parts with approximately factorized probability density $P_{12}=P_1P_2$.

A large system is divided into $n$ blocks, with a distribution that approximately factors as $P\approx\prod_{i=1}^nP_i$. To motivate neglecting interactions across block boundaries, compare surface and volume contributions. For a block of linear size $\mechanical{L}$, the surface scales as $\mechanical{L}^2$ and the volume as $\mechanical{L}^3$. Their ratio scales as $1/\mechanical{L}$ and tends to zero for large blocks.

##### Fluctuations in the infinite-volume limit

Take $n$ weakly interacting blocks and an additive observable $A=\sum_i A_i$, where $A_i$ depends only on the phase-space coordinates of block $i$. The distribution is normalized. Under the factorization assumption, separate the integrals over all other blocks from the one over block $i$.

$$
\begin{aligned}
\langle A\rangle
&=\sum_i\int\left(\prod_j P_j\,d\Gamma_j\right)A_i\\
&=\sum_i\left(\prod_{j\ne i}\int P_j\,d\Gamma_j\right)
\left(\int P_i A_i\,d\Gamma_i\right)
=\sum_i\langle A_i\rangle.
\end{aligned}
$$

Every factor in the product with $j\ne i$ is one. To calculate fluctuations, let $\Delta A=A-\langle A\rangle$. Then $A^2=\sum_{i,j} A_i A_j$, and

$$
\begin{aligned}
\langle(\Delta A)^2\rangle
&=\langle A^2\rangle-\langle A\rangle^2\\
&=\sum_{i,j}\left\langle(A_i-\langle A_i\rangle)(A_j-\langle A_j\rangle)\right\rangle\\
&=\sum_{i,j}\left(\langle A_i A_j\rangle-\langle A_i\rangle\langle A_j\rangle\right).
\end{aligned}
$$

The final expression is a sum of covariances between blocks.

For independent blocks, the off-diagonal covariances vanish. The diagonal terms give

$$
\langle(\Delta A)^2\rangle
=\sum_{i=1}^n(\langle A_i^2\rangle-\langle A_i\rangle^2)\sim n.
$$

For blocks with comparable variances and nonzero mean contributions, $\langle A\rangle\sim n$. The relative variance scales as $n/n^2=1/n$. Hence the relative standard deviation $\sqrt{\langle(\Delta A)^2\rangle}/|\langle A\rangle|$ scales as $1/\sqrt n$.

##### More examples of the microcanonical ensemble

The microcanonical ensemble fixes $\energy{E}=\energy{H}(\mechanical{\vec p},\mechanical{\vec q})$. For an ideal gas the pair potential vanishes and the energy is $\sum_i\tfrac12\mechanical{m}\mechanical{v}_i^2$. A sketch asks when classical mechanics suffices. High temperature and low density favor the classical regime. Quantum statistics matters when wavefunctions of nearby particles overlap, as at low temperature or high density.

**Exercise.** Repeat the state count for a three-dimensional simple harmonic oscillator. Its classical Hamiltonian and phase-space volume below energy $\energy{E}$ are

$$
\energy{H}=\frac{\mechanical{p}^2}{2\mechanical{m}}+\frac12\mechanical{m}\mechanical{\omega}^2\mechanical{q}^2,\qquad
\Sigma_{\mathrm{class}}(\energy{E})
=\int d^3\mechanical{\vec p}\,d^3\mechanical{\vec q}\,\Theta(\energy{E}-\energy{H})
=\frac43\left(\frac{\pi\energy{E}}{\mechanical{\omega}}\right)^3.
$$

The last expression is the rescaled volume of a ball in six dimensions. For the quantum oscillator, the energy levels are

$$
\energy{E}=\energy{\hbar}\mechanical{\omega}\left(\frac32+n_x+n_y+n_z\right).
$$

At fixed $\ell=n_x+n_y+n_z$, the degeneracy is $(\ell+1)(\ell+2)/2$. With the index $j=\ell+1$ this is $j(j+1)/2$, the form used in the notebook's sum. Summing from $j=1$ through $j=M$ gives $M(M+1)(M+2)/6$. For an energy cutoff, $M=1+\lfloor\energy{E}/(\energy{\hbar}\mechanical{\omega})-3/2\rfloor$ when the cutoff is at or above the ground-state energy. The notes use the same letter for the excitation cutoff and the upper sum index. At high energies the cumulative quantum count approaches $\Sigma_{\mathrm{class}}/\energy{h}^3$.

For $N$ independent one-dimensional oscillators the leading energy dependence is $\Sigma(\energy{E})\propto(\energy{E}/(\energy{\hbar}\mechanical{\omega}))^N$. Using $\thermal{S}\approx\thermal{k}_{\mathrm B}\ln\Sigma$ gives $\energy{E}=N\thermal{k}_{\mathrm B}\thermal{T}$ in the classical limit. Each oscillator has a quadratic kinetic term and a quadratic potential term, each contributing $\tfrac12\thermal{k}_{\mathrm B}\thermal{T}$.

##### Phase space and Hamilton's equations

A point in phase space is specified by the coordinates $\mechanical{q}_i(t)$ and momenta $\mechanical{p}_i(t)$. Its motion obeys

$$
\dot{\mechanical{q}}_i=\frac{\partial\energy{H}}{\partial\mechanical{p}_i},
\qquad
\dot{\mechanical{p}}_i=-\frac{\partial\energy{H}}{\partial\mechanical{q}_i}.
$$

##### Time averages and ensemble averages

For $N$ particles with three translational coordinates each, $i=1,\ldots,3N$. Hamilton's equations give the phase-space velocity $\vec v_\Gamma=(\dot{\mechanical{q}}_i,\dot{\mechanical{p}}_i)_{i=1}^{3N}$. For a time-independent Hamiltonian, the trajectory stays on the surface $\energy{H}(\mechanical{\vec p},\mechanical{\vec q})=\energy{E}$.

In a long observation, the fraction of time spent in a phase-space region $B$ defines its trajectory probability. For a normalized ensemble density $P$,

$$
P_B=\int_B P(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma,\qquad
\int P(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma=1.
$$

Compare the time average $\bar f$ along one trajectory with the ensemble average $\langle f\rangle=\int P f\,d\Gamma$ over many systems observed at a fixed time. Ergodicity gives equality for the appropriate equilibrium measure and almost all initial conditions.

##### Billiard example

A ball in a rectangular billiard can bounce vertically along a fixed line or follow a different path at an angle. The direction of motion constrains the trajectory, so a time average can differ from the full ensemble average. The notes credit Sinai's example of adding a circular obstacle, yielding a dispersing billiard that can be ergodic. They connect chaotic trajectories with the possibility of ergodicity.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Rectangular and Sinai billiards.png|**Fig. 5** Two trajectories in an empty rectangle and a billiard with a circular obstacle.]]

##### Liouville's theorem

At thermal equilibrium, expect $\partial P/\partial t=0$. More generally, probability can flow across the boundary of a fixed region $B$ in phase space. The rate of loss in the region equals the outward flux.

$$
-\frac{\partial}{\partial t}\int_B P\,d\Gamma
=\int_{\partial B}P\vec v_\Gamma\cdot d\vec\sigma
=\int_B\nabla_\Gamma\cdot(P\vec v_\Gamma)\,d\Gamma.
$$

The phase-space derivative is $\nabla_\Gamma=(\partial/\partial\mechanical{q}_1,\ldots,\partial/\partial\mechanical{q}_{3N},\partial/\partial\mechanical{p}_1,\ldots,\partial/\partial\mechanical{p}_{3N})$. Because $B$ is arbitrary, probability satisfies the continuity equation

$$
\frac{\partial P}{\partial t}+\nabla_\Gamma\cdot(P\vec v_\Gamma)=0.
$$

The exercise expands the divergence into a sum of $\dot{\mechanical{q}}_i\,\partial P/\partial\mechanical{q}_i$ and $\dot{\mechanical{p}}_i\,\partial P/\partial\mechanical{p}_i$, plus $P\nabla_\Gamma\cdot\vec v_\Gamma$. Use Hamilton's equations to simplify the last term.

## Source

Kyle Kabasares, *Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Net force in the classical equation of motion. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of a particle. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $t$ | $\unit{s}$ | Time | Time coordinate for the dynamics. |
| $N$ | 1 | Particle count | Number of atoms or molecules. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates absolute temperature to a microscopic energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature of the system or reservoir. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\thermal{Q}$, $\thermal{Q}_{\mathrm{rev}}$ | $\unit{J}$ | Heat | Energy transferred by heating, with the subscript denoting a reversible path. |
| $\energy{W}$ | $\unit{J}$ | Work | Energy transferred by work, positive when done on the system. |
| $\energy{G}$ | $\unit{J}$ | Gibbs free energy | Thermodynamic potential whose change determines the spontaneous reaction direction at fixed temperature and pressure. |
| $\mechanical{\vec r}$, $\mechanical{\vec x}$ | $\unit{m}$ | Position | Spatial position on a particle trajectory. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\thermal{R}$ | $\unit{J\,mol^{-1}\,K^{-1}}$ | Molar gas constant | Proportionality constant in the ideal gas law. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{H}$ | $\unit{J}$ | Enthalpy or Hamiltonian | Internal energy plus the pressure–volume product in thermodynamics. In mechanics and ensemble weights, the Hamiltonian. |
| $W$ | 1 | Multiplicity | Number of microstates compatible with the macrostate. |
| $\energy{u}$ | $\unit{J}$ per particle or $\unit{J\,mol^{-1}}$ | Internal energy per unit amount | Internal energy divided by the particle count or mole amount. |
| $\mechanical{v}$ | $\unit{m^3}$ per particle or $\unit{m^3\,mol^{-1}}$ | Volume per unit amount | Volume divided by the particle count or mole amount. |
| $\mechanical{b}$ | $\unit{m^3}$ or $\unit{m^3\,mol^{-1}}$ | Excluded volume parameter | Volume correction accounting for the finite size of molecules. Its units follow the volume convention. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\mechanical{q}_i$, $\mechanical{p}_i$ | — | Generalized coordinates and momenta | Conjugate variables that specify a phase-space point. Their units depend on the coordinates. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $Z$ | 1 | Partition function | Sum of the Boltzmann weights of the accessible states. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $n_i$ | 1 | Occupation number | Number of particles in a given energy level. |
| $\energy{\epsilon}_i$ | $\unit{J}$ | Single-particle energy | Energy of a particle occupying level $i$. |
| $\energy{\mu}$ | $\unit{J}$ per particle | Chemical potential | Intensive energy variable conjugate to particle number. |
| $\Omega$ | 1 | Multiplicity | Number of accessible microstates, including the cumulative count in the ideal-gas calculation. |
| $\energy{h}$ | $\unit{J\,s}$ | Planck constant | Relates photon energy to frequency. |
| $\signal{\nu}$, $\signal{\omega}$ | $\unit{Hz}$, $\unit{rad\,s^{-1}}$ | Frequency and angular frequency | Two frequency conventions for radiation modes, related by $\signal{\omega}=2\pi\signal{\nu}$. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Propagation speed in the photon spectrum formula. |
| $\eta$ | $\unit{m^{-3}}$ | Volume derivative of log multiplicity | Pressure divided by the thermal energy scale. |
| $\xi$ | 1 | Particle-number derivative of log multiplicity | Negative chemical potential divided by the thermal energy scale. |
| $\mechanical{v}_i$ | $\unit{m\,s^{-1}}$ | Particle speed | Magnitude of the velocity of particle $i$. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | Side length of the cubic box. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | Magnitude of the wavevector for a quantum state in the box. |
| $\Sigma$ | 1 | Cumulative state count | Number of states below the specified energy cutoff. |
| $F(\mechanical{p}_{1x})$ | $\unit{s\,kg^{-1}\,m^{-1}}$ | Momentum-component probability density | Distribution of one particle's momentum along one axis. |
| $\signal{\lambda}_{\mathrm{th}}$ | $\unit{m}$ | Thermal de Broglie wavelength | Wavelength scale for a particle of the given mass at the absolute temperature. |
| $\mechanical{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Oscillation frequency in the harmonic Hamiltonian. |
| $P(\mechanical{\vec p},\mechanical{\vec q})$ | — | Phase-space probability density | Density normalized with respect to the chosen phase-space measure. |
| $P_i$ | 1 | Microstate probability | Probability of occupying state $i$ in the ensemble. |
| $z$ | 1 | Fugacity | Exponential of the chemical potential divided by the thermal energy. |
| $j$ | 1 | Internal partition function | Sum over molecular states other than translation. |
| $\energy{h}$ | $\unit{J}$ | Ising field parameter | Energy coefficient of the single-spin term. The same letter denotes Planck's constant in earlier sections. |
| $q$ | $1$ | Coordination number | Number of neighboring lattice sites. |
