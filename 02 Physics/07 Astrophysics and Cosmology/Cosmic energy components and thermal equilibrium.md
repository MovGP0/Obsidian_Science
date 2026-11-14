---
title: "Cosmic energy components and thermal equilibrium"
---

> [!TLDR]
> Track the evolution of matter, radiation, and other components, and use equilibrium distributions and comoving entropy to describe thermal history.

## Worked lecture material

##### Energy density and expansion

If dark matter exchanges energy with dark radiation, the notes cross out a separate adiabatic equation for dark matter. The dark sector as a whole can be treated as adiabatic if it exchanges no energy with other sectors. With $V\propto a^3$ and $\energy{U}_x=\energy{\rho}_x V$,

$$
\energy{\rho}_x=\energy{\rho}_{\mathrm{DM}}+\energy{\rho}_{\mathrm{DR}},
\qquad
\frac{d\energy{\rho}_x}{dt}
=-3\frac{\dot a}{a}(\energy{\rho}_x+\thermal{p}_x).
$$

The Einstein tensor satisfies the contracted Bianchi identity,

$$
\nabla_\mu G^\mu{}_\nu=0,
\qquad
G_{\mu\nu}=R_{\mu\nu}-\tfrac12g_{\mu\nu}g^{\alpha\beta}R_{\alpha\beta}.
$$

In units with $\mechanical{c}=1$, the acceleration equation can be written as

$$
\ddot a=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})\frac{a^3}{a^2}.
$$

The notes associate the three pressure contributions with motion along the three spatial directions. For comparison, a point at fixed comoving coordinate $(r,0,0)$ is at proper radius $x=ar$. In the pressureless Newtonian calculation, its acceleration is $\ddot x=r\ddot a=-\mechanical{G}\mechanical{M}/x^2$, with enclosed mass $\mechanical{M}=(4\pi/3)x^3\mechanical{\rho}$. This gives $\ddot a=-4\pi\mechanical{G}\mechanical{\rho}a/3$.

![[Kyle Kabasares - Cosmology - proper radius and Newtonian acceleration.png|**Fig. 15** A point at comoving radius $r$ is separated from the origin by a proper distance $x=ar$. The sketch compares its acceleration with the Newtonian inverse-square expression.]]

To integrate the general acceleration equation, multiply both sides by $\dot a$.

$$
\frac12\frac{d}{dt}(\dot a^2)=\dot a\,\ddot a
=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})a\dot a.
$$

Separate the total energy density into radiation, matter, neutrinos, and a component $x$.

$$
\energy{\rho}=\energy{\rho}_{\mathrm{rad}}+\energy{\rho}_{\mathrm{matter}}+\energy{\rho}_{\nu}+\energy{\rho}_x.
$$

A species behaves as radiation when its rest energy is small compared with its characteristic thermal energy. Examples in the notes are photons, possible dark radiation, and neutrinos at early times. There are three neutrino flavors, $\nu_e$, $\nu_\mu$, and $\nu_\tau$. The 2018 lecture quotes an approximate upper-limit range of $\quantity{0.2\text{–}1}{eV}$ for $\sum_{i=1}^3\mechanical{m}_{\nu_i}\mechanical{c}^2$, where the sum runs over the neutrino mass eigenstates.

The present CMB temperature is $\thermal{T}_{\mathrm{CMB},0}=\quantity{2.726}{K}$, or $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm{CMB},0}=\quantity{2.35\times10^{-4}}{eV}=\quantity{0.235}{meV}$. The temperature scales as

$$
\thermal{T}(a)=\frac{\thermal{T}_{\mathrm{CMB},0}}{a}.
$$

At $a\simeq 0.001$, around the time the CMB was released, $\thermal{k}_{\mathrm B}\thermal{T}\simeq\quantity{0.235}{eV}$. For a characteristic Big Bang nucleosynthesis temperature with $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm{BBN}}\simeq\quantity{1}{MeV}$, the notes estimate

$$
a_{\mathrm{BBN}}\simeq
\frac{\thermal{T}_{\mathrm{CMB},0}}{\thermal{T}_{\mathrm{BBN}}}
=\frac{\quantity{0.235}{meV}}{\quantity{10^6}{eV}}
=2.35\times10^{-10}.
$$

The notes estimate that the material of the Milky Way occupied a region roughly $\quantity{20}{AU}$ across at that epoch.

##### When does the CMB temperature scale as $a^{-1}$?

If photon number is conserved, the number density falls as $a^{-3}$. The geodesic equation gives $\energy{E}\propto a^{-1}$ for a free, noninteracting massless particle. Together these scalings give

$$
\energy{\rho}_{\mathrm{CMB}}\propto a^{-3}a^{-1}=a^{-4}.
$$

For blackbody radiation, $\energy{\rho}_{\mathrm{CMB}}\propto\thermal{T}^4$. The temperature tracks the mean photon energy and therefore falls as $a^{-1}$ under these assumptions. The lecture mentions electron–positron annihilation and reionization as examples of processes that create photons. Energy transferred to the radiation bath by particle–antiparticle annihilation slows its cooling.

The matter density includes baryonic material such as protons and helium-4 nuclei. Early on, relativistic neutrinos can be counted with radiation. Here their density is kept separate so that its scale-factor dependence can change.

$$
\energy{\rho}(a)
=\frac{\energy{\rho}_{\mathrm{rad},0}}{a^4}
+\frac{\energy{\rho}_{\mathrm{matter},0}}{a^3}
+\energy{\rho}_\nu(a)+\energy{\rho}_x(a).
$$

The Friedmann equation with explicit powers of $\mechanical{c}$ is

$$
H^2=\frac{8\pi\mechanical{G}}{3\mechanical{c}^2}\sum_i\energy{\rho}_i
-\frac{k\mechanical{c}^2}{a^2R_0^2}.
$$

Define the critical energy density at scale factor $a$ and its present value by

$$
\energy{\rho}_{\mathrm{cr}}(a)=\frac{3\mechanical{c}^2H^2(a)}{8\pi\mechanical{G}},
\qquad
\energy{\rho}_{\mathrm{cr},0}=\frac{3\mechanical{c}^2H_0^2}{8\pi\mechanical{G}}.
$$

Normalizing the Friedmann equation by $H^2(a)$ gives

$$
1=\sum_i\Omega_i(a)-\frac{k\mechanical{c}^2}{a^2H^2(a)R_0^2},
\qquad
\Omega_i(a)=\frac{\energy{\rho}_i(a)}{\energy{\rho}_{\mathrm{cr}}(a)}.
$$

The sum over physical components exceeds one for $k=+1$ and is below one for $k=-1$. A convention often used in papers is to normalize by the present Hubble parameter instead.

$$
\frac{H^2(a)}{H_0^2}
=\frac{\energy{\rho}(a)}{\energy{\rho}_{\mathrm{cr},0}}
-\frac{k\mechanical{c}^2}{R_0^2H_0^2}\,a^{-2}.
$$

For the rest of this expression, let $\Omega_i$ denote the present ratio $\energy{\rho}_{i,0}/\energy{\rho}_{\mathrm{cr},0}$. Evaluating at $a=1$ then gives

$$
-\frac{k\mechanical{c}^2}{R_0^2H_0^2}=1-\Omega,
\qquad
\Omega=\Omega_{\mathrm{m}}+\Omega_{\mathrm{r}}+\Omega_\nu+\Omega_x.
$$

Hence

$$
\begin{aligned}
\frac{H^2(a)}{H_0^2}
={}&\Omega_{\mathrm{m}}a^{-3}+\Omega_{\mathrm{r}}a^{-4}
+\Omega_\nu\frac{\energy{\rho}_\nu(a)}{\energy{\rho}_{\nu,0}}
+\Omega_x\frac{\energy{\rho}_x(a)}{\energy{\rho}_{x,0}}\\
&+\left(1-\Omega_{\mathrm{m}}-\Omega_{\mathrm{r}}-\Omega_\nu-\Omega_x\right)a^{-2}.
\end{aligned}
$$

The handwritten estimates are $\Omega_{\mathrm{m}}\simeq0.3$ and $\Omega_{\mathrm{r}}\sim10^{-4}$. The annotations $0.7$ and $<10^{-2}$ appear under the neutrino and $x$ terms, respectively, but appear to have been swapped given the separate dark-energy and neutrino components.

##### Matter and curvature only

In this model,

$$
\frac{H^2}{H_0^2}=\Omega_{\mathrm{m}}a^{-3}+(1-\Omega_{\mathrm{m}})a^{-2}.
$$

If $\Omega_{\mathrm{m}}>1$, the universe has positive spatial curvature, $k=+1$. The expansion reaches $H=0$ at

$$
\boxed{a_{\mathrm{tr}}=\frac{\Omega_{\mathrm{m}}}{\Omega_{\mathrm{m}}-1}.}
$$

The notes connect this turnaround to a simple picture of halo collapse and galaxy formation.

##### Momentum in the flat FRW metric

For an appropriately normalized affine parameter $\lambda$, the contravariant spatial momentum $\mechanical{P}^i=dx^i/d\lambda$ scales as $a^{-2}$. In units with $\mechanical{c}=1$ the mass-shell relation is

$$
g_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu
=-\energy{E}^2+a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j
=-\mechanical{m}^2.
$$

The squared physical momentum is $\mechanical{p}^2=a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j\propto a^{-2}$, so $\mechanical{p}\propto a^{-1}$. Lowering the spatial index gives the conserved covariant component

$$
\mechanical{P}_i=g_{i\alpha}\mechanical{P}^\alpha=a^2\delta_{ij}\mechanical{P}^j=\text{constant}.
$$

##### Equilibrium distributions

For a species $i$ with $g_i$ internal states and phase-space distribution $f(\mechanical{\vec p},\vec x)$, the energy density and isotropic pressure in units with $\mechanical{c}=\hbar=1$ are

$$
\begin{aligned}
\energy{\rho}
&=g_i\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\,
f(\mechanical{\vec p},\vec x)\,\energy{E},\\
\thermal{p}
&=g_i\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\,
f(\mechanical{\vec p},\vec x)\,\frac{\mechanical{p}^2}{3\energy{E}}.
\end{aligned}
$$

##### Beyond equilibrium

The lecture introduces Big Bang nucleosynthesis, the CMB, and thermal dark matter. It lists the following characteristic energies, with temperature expressed as $\thermal{k}_{\mathrm B}\thermal{T}$.

- Thermal dark matter freeze-out at roughly $\mechanical{m}\mechanical{c}^2/20$. For $\mechanical{m}\mechanical{c}^2=\quantity{100}{GeV}$, the example gives $\thermal{k}_{\mathrm B}\thermal{T}\simeq\quantity{5}{GeV}$.
- Big Bang nucleosynthesis at $\quantity{1\text{–}10}{MeV}$ in the notes' rough ordering.
- Release of the CMB at roughly $\quantity{0.2}{eV}$ and $z\sim1100$.
- The margin also mentions QCD phase transitions and an “electronic phase transition” followed by $10$, with no unit given there.

For an equilibrium fluid with negligible chemical potentials, the entropy density is

$$
\thermal{s}=\frac{\energy{\rho}+\thermal{p}}{\thermal{T}}.
\tag{2.65}
$$

In units with $\thermal{k}_{\mathrm B}=1$, the equilibrium distribution depends on $\energy{E}/\thermal{T}$. The entropy $\thermal{S}=\thermal{s}V$ of a comoving volume is proportional to $\thermal{s}a^3$. For reversible evolution $d\thermal{S}=d\thermal{Q}/\thermal{T}$, so $\thermal{s}a^3$ is conserved during adiabatic expansion. For radiation,

$$
\thermal{p}=\frac{\energy{\rho}}{3},
\qquad
\thermal{s}=\frac{4\energy{\rho}}{3\thermal{T}}\propto\thermal{T}^3,
$$

since $\energy{\rho}\propto\thermal{T}^4$.

##### Comoving entropy and relativistic degrees of freedom

For radiation, $\thermal{s}a^3\propto(a\thermal{T})^3$. If the comoving entropy is conserved and the relativistic species content stays fixed, $\thermal{T}\propto a^{-1}$.

The energy density is $\energy{\rho}=g\int d^3\mechanical{\vec p}\,f(\mechanical{p})\energy{E}(\mechanical{p})/(2\pi)^3$, with $g$ counting the internal states, including spin. The notes use $\hbar=\thermal{k}_{\mathrm B}=\mechanical{c}=1$. In this convention the thermal distribution is

$$
f(\mechanical{p})=\frac{1}{e^{(\energy{E}-\thermal{\mu})/\thermal{T}}\pm1},
$$

with $+$ for fermions and $-$ for bosons. The mean energy is proportional to $\thermal{k}_{\mathrm B}\thermal{T}$, written as $\thermal{T}$ in these units.

The relation $\energy{E}=\hbar\omega$ becomes $\energy{E}=\omega$. With $\hbar=(\quantity{6.626\times10^{-34}}{J\,s})/(2\pi)$ set to one, the unit of time is the reciprocal of the chosen energy unit. For example, an energy unit of $\quantity{1}{GeV}$ corresponds to a time unit of $\unit{GeV^{-1}}$.

For equilibrium with negligible chemical potential and $\mechanical{m}\ll\thermal{T}$,

$$
\begin{aligned}
\energy{\rho}
&=g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}
\frac{\sqrt{\mechanical{p}^2+\mechanical{m}^2}}{e^{(\energy{E}-\thermal{\mu})/\thermal{T}}\pm1}\\
&\simeq
\begin{cases}
\dfrac{\pi^2}{30}g\thermal{T}^4, & \text{bosons},\\[4pt]
\dfrac78\dfrac{\pi^2}{30}g\thermal{T}^4, & \text{fermions}.
\end{cases}
\end{aligned}
$$

In the opposite limit $\mechanical{m}\gg\thermal{T}$, a species in equilibrium with the bath has

$$
n\simeq g\left(\frac{\mechanical{m}\thermal{T}}{2\pi}\right)^{3/2}e^{-\mechanical{m}/\thermal{T}},
\qquad
\energy{\rho}\simeq\mechanical{m}n.
$$

The notes flag the dimensional distinction in red. The expression for $n$ has dimensions of energy cubed in natural units, whereas $\energy{\rho}$ has dimensions of energy to the fourth power.

For relativistic particles in equilibrium with negligible chemical potential and $\mechanical{m}\ll\thermal{T}$, the number density and mean energy in natural units are

$$
n=g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}f(\mechanical{p})
\propto\thermal{T}^3,
\qquad
\langle\energy{E}\rangle=\frac{\energy{\rho}}{n}
\simeq
\begin{cases}
2.701\,\thermal{T}, & \text{bosons},\\
3.151\,\thermal{T}, & \text{fermions}.
\end{cases}
$$

Suppose species $x$ decouples from the thermal bath at temperature $\thermal{T}_1$ and scale factor $a_1$. What happens to its number density and mean kinetic energy? If it is nonrelativistic at decoupling, its equilibrium number density just before decoupling is

$$
n(\thermal{T}_1)\simeq
g\left(\frac{\mechanical{m}\thermal{T}_1}{2\pi}\right)^{3/2}
e^{-\mechanical{m}/\thermal{T}_1}.
$$

Once particle number is conserved, $n(\thermal{T}_1)a_1^3=n(a)a^3$. The physical momentum satisfies $\mechanical{p}^2=a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j$ and $\mechanical{p}\propto a^{-1}$. Therefore

$$
\langle\energy{E}_{\mathrm{kin}}\rangle
\simeq
\begin{cases}
\langle\mechanical{p}^2\rangle/(2\mechanical{m})\propto a^{-2},
& \text{nonrelativistic},\\
\langle\mechanical{p}\rangle\propto a^{-1},
& \text{ultrarelativistic}.
\end{cases}
$$

The decoupled species can be assigned its own temperature scale from its momentum distribution.

##### Neutrino temperature after electron–positron annihilation

##### Estimate the present neutrino temperature

The sketch compares the relativistic species before and after electron–positron annihilation. The electron rest energy is $\mechanical{m}_e\mechanical{c}^2=\quantity{0.511}{MeV}$. Neutrinos decouple from the electromagnetic plasma via the weakening of weak-interaction rates around $\quantity{1}{MeV}$.

![[Kyle Kabasares - Cosmology - species before and after electron positron annihilation.png|**Fig. 16** The upper box includes electrons, positrons, photons, and all three neutrino and antineutrino flavors. The lower box omits electron–positron pairs. Protons and neutrons are marked with question marks.]]

For a relativistic species, $\energy{\rho}+\thermal{p}=\tfrac43\energy{\rho}$. There are two photon polarizations, four electron and positron spin states combined, and six neutrino and antineutrino states combined. The latter count takes one helicity per neutrino or antineutrino flavor. Taking the relativistic approximation on either side of annihilation and setting $C=2\pi^2/45$ gives

$$
\begin{aligned}
\thermal{s}_{\mathrm{before}}
&=C\left[\left(2+\tfrac78\cdot4\right)\thermal{T}_\gamma^3
+\tfrac78\cdot6\,\thermal{T}_\nu^3\right]_{\mathrm{before}},\\
\thermal{s}_{\mathrm{after}}
&=C\left[2\thermal{T}_\gamma^3+\tfrac78\cdot6\,\thermal{T}_\nu^3\right]_{\mathrm{after}}.
\end{aligned}
$$

The comoving entropy satisfies $\thermal{s}_{\mathrm{before}}a_{\mathrm{before}}^3=\thermal{s}_{\mathrm{after}}a_{\mathrm{after}}^3$. To compare the temperatures, the notes factor the neutrino contribution to the temperature scale out of each side.

$$
\begin{aligned}
&(a_{\mathrm{before}}\thermal{T}_{\nu,\mathrm{before}})^3
\left[\left(2+\tfrac72\right)
\left(\frac{\thermal{T}_\gamma}{\thermal{T}_\nu}\right)^3
+\tfrac78\cdot6\right]_{\mathrm{before}}\\
&\quad=(a_{\mathrm{after}}\thermal{T}_{\nu,\mathrm{after}})^3
\left[2\left(\frac{\thermal{T}_\gamma}{\thermal{T}_\nu}\right)^3
+\tfrac78\cdot6\right]_{\mathrm{after}}.
\end{aligned}
$$

The decoupled neutrinos have $a\thermal{T}_\nu=\text{constant}$, and before annihilation $\thermal{T}_\nu=\thermal{T}_\gamma$. The entropy equation then reduces to

$$
\frac{11}{2}+\frac{21}{4}
=2\left(\frac{\thermal{T}_\gamma}{\thermal{T}_\nu}\right)^3+\frac{21}{4},
\qquad
\frac{\thermal{T}_\nu}{\thermal{T}_\gamma}=\left(\frac4{11}\right)^{1/3}.
$$

![[Kyle Kabasares - Cosmology - photon and neutrino temperatures after annihilation.png|**Fig. 17** Schematic cooling curves. The photon temperature falls more slowly during annihilation, leaving the neutrino temperature lower by the indicated factor.]]

The notes list the midterm for October 30. In a flat FRW metric $ds^2=-\mechanical{c}^2dt^2+a^2(dx^2+dy^2+dz^2)$, a box of comoving volume $V_0$ contains $a^3V_0n_1$ particles of species $1$. Consider a two-body reaction $1+2\rightleftharpoons3+4$, such as $n+p\rightleftharpoons D+\gamma$.

Let $n_i^{(0)}$ be the equilibrium densities. The rate equation per unit proper volume is

$$
\frac{1}{V_0a^3}\frac{d(V_0a^3n_1)}{dt}
=n_1^{(0)}n_2^{(0)}
\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle
\left(
\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}-
\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}
\right).
$$

The first term in parentheses describes production of species $1$ by the reverse reaction. The second describes destruction by the forward reaction. Multiplying either rate density by $V_0a^3$ gives the corresponding rate for the whole box. Here $\sigma$ is the cross section and $\mechanical{v}_{\mathrm{rel}}$ is the relative speed of particles $1$ and $2$. The brackets denote an average over the momentum distributions. In particular, $n_2\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle$ is the inverse destruction time per particle of species $1$.

## Source

Kyle Kabasares, *Cosmology (Physics 240B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $z$ | $1$ | Redshift | Dimensionless shift of the observed wavelength relative to its emitted value. |
| $a$ | $1$ | Scale factor | Ratio of a physical separation at cosmic time $t$ to its value today for a pair of comoving points. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Cosmic temperature on the right axis of the scale-factor figure. |
| $H$, $H_0$ | $\unit{s^{-1}}$ | Hubble parameter and its present value | Fractional expansion rate $\dot a/a$, often quoted in $\unit{km\,s^{-1}\,Mpc^{-1}}$. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Coupling in the Friedmann equation. |
| $\energy{\rho}$, $\energy{\rho}_0$, $\energy{\rho}_{\mathrm{cr}}$ | $\unit{J\,m^{-3}}$ | Cosmic energy densities | Time-dependent, present-day and present-day critical densities. In SI the corresponding mass densities are the energy densities divided by $c^2$. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Converts energy to angular frequency in the units used for $H_0$. |
| $ds^2$ | $\unit{m^2}$ | Squared spacetime interval | Metric contraction of two coordinate differentials when the line element is expressed in length units. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Converts the time coordinate to length units in the flat interval. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates temperature to energy and is set to one in natural units. |
| $\tau$ | $\unit{s}$ | Proper time | Elapsed time measured by a clock moving along the timelike path. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Radial speed | Rate of change of radial position in the chosen inertial frame. It is expressed in units of the speed of light in $\gamma$. |
| $\gamma$ | $1$ | Lorentz factor | Ratio of coordinate time to proper time for inertial motion. |
| $\mechanical{F}$, $\mechanical{m}$, $\mechanical{a}$ | $\unit{N}$, $\unit{kg}$, $\unit{m\,s^{-2}}$ | Force, mass and acceleration | Quantities in Newton's second law. The acceleration here is distinct from the cosmological scale factor $a$. |
| $\mechanical{P}^\mu$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Tangent to the particle trajectory for an appropriate normalization of the affine parameter. Its time component in SI is $\energy{E}/\mechanical{c}$. |
| $\energy{E}$ | $\unit{J}$ | Photon energy | Energy measured by a comoving observer, equal to $\mechanical{P}^0$ in natural units. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Physical spatial momentum | Momentum components measured in a local orthonormal frame. |
| $\thermal{p}$ | $\unit{Pa}$ | Isotropic pressure | Spatial diagonal component of the comoving perfect-fluid stress-energy tensor. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Mass density | Mass per volume in the dimensional estimate of the infall time. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $k$ | $\unit{m^{-2}}$ | Spatial curvature parameter | Units apply when $r$ has dimensions of length and $a$ is dimensionless. |
| $R_0$ | $\unit{m}$ | Comoving curvature radius | Used in the positively and negatively curved cases. |
| $V$ | $\unit{m^3}$ | Proper spatial volume | A shell is evaluated at a fixed cosmic time. |
| $\thermal{Q}$ | $\unit{J}$ | Heat transferred | Vanishes for the adiabatic expansion considered here. |
| $\energy{U}$ | $\unit{J}$ | Internal energy in a comoving region | The product of energy density and the proper volume of the region. |
| $\mechanical{m}_{\nu_i}$ | $\unit{kg}$ | Neutrino mass eigenvalue | Its rest energy is often given in electronvolts. |
| $\thermal{T}_{\mathrm{CMB},0}$, $\thermal{T}_{\mathrm{BBN}}$ | $\unit{K}$ | Present CMB and characteristic nucleosynthesis temperatures | Used to estimate the scale factor during nucleosynthesis. |
| $\Omega_i(a)$, $\Omega_i$ | $1$ | Density parameters | The time-dependent form is normalized by the critical density at $a$. An index without an argument here denotes the present value. |
| $g_i$ | $1$ | Internal degeneracy | Number of internal states of particle species $i$. |
| $f(\mechanical{\vec p},\vec x)$ | $1$ | Phase-space occupation | Distribution per internal state with the momentum measure used above. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | For a homogeneous region, entropy density times proper volume. |
| $\thermal{s}$ | $\unit{J\,K^{-1}\,m^{-3}}$ | Entropy density | For negligible chemical potentials, enthalpy per volume divided by temperature. |
| $\thermal{\mu}$ | $\unit{J}$ | Chemical potential | Enters the thermal distribution through $\energy{E}-\thermal{\mu}$. |
| $n$ | $\unit{m^{-3}}$ | Particle number density | For a heavy nonrelativistic species, rest energy times number density gives the leading energy density. |
| $\thermal{T}_\gamma$, $\thermal{T}_\nu$ | $\unit{K}$ | Photon and neutrino temperatures | After decoupling, the two distributions have separate temperature scales. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\mechanical{v}_{\mathrm{rel}}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed entering the forward two-body reaction rate. |
| $\vec k$, $k$ | $\unit{m^{-1}}$ | Comoving wavevector and wavenumber | The wavevector labels a spatial Fourier mode. The magnitude is distinct from the curvature index $k$. |
| $\mu$ | $1$ | Direction cosine for a photon Fourier mode | Dot product of the photon direction with the wavevector direction. |
| $\delta$ | $1$ | Density contrast | Ratio of a first-order density perturbation to the homogeneous background. For nonrelativistic matter of fixed particle mass, the number and mass density contrasts agree. |
