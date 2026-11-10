---
title: "Thermodynamics and Statistical Mechanics (Chem 232A – Physics 214A, UC Irvine 2018)"
---

> [!TLDR]
> These lectures connect thermodynamic observables to microscopic state counts and ensemble probabilities. The ideal-gas calculations lead to Fermi degeneracy, Bose–Einstein condensation, and blackbody radiation. Applications include compact stars and magnetic ordering in the Ising model.

Source notes by Kyle Kabasares. [[Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018).pdf|Original PDF]].

Transcribed PDF pages 1–73 of 73.

### PDF page 1

#### January 9, 2018 · Statistical thermodynamics with C. Martens

The first lecture distinguishes equilibrium thermodynamics from nonequilibrium thermodynamics. Classical and quantum dynamics give equations such as

$$
\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a},
\qquad
i\energy{\hbar}\frac{\partial\psi}{\partial t}=\energy{\hat H}\psi.
$$

Following the dynamics of a large number of molecules directly is difficult.

#### Molecular dynamics of liquid argon

Consider $N$ argon atoms. The total kinetic energy $\energy{E}_k$ fluctuates with time about its time average $\langle\energy{E}_k\rangle$. The notebook asks why it fluctuates. A second plot shows a narrow distribution $P(\energy{E}_k)$ with a width $\energy{\sigma}\propto\sqrt N$. At fixed temperature the mean scales with $N$.

$$
\langle\energy{E}_k\rangle=\frac32 N\thermal{k}_{\mathrm B}\thermal{T},
\qquad
\frac{\energy{\sigma}}{\langle\energy{E}_k\rangle}\sim\frac{1}{\sqrt N}.
$$

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Kinetic energy fluctuations in liquid argon.png|**Fig. 1** The time series fluctuates around its mean. The distribution underneath shows the typical scale of those fluctuations.]]

Equilibrium thermodynamics describes a system using a few relevant macroscopic averages.

#### First law of thermodynamics

The internal energy $\energy{U}$ of an isolated system is constant, $\Delta\energy{U}=0$. Applied to the universe as an isolated system, this gives $\Delta\energy{U}_{\mathrm{univ}}=0$.

#### Second law of thermodynamics

The entropy of an isolated system is nondecreasing, $\Delta\thermal{S}\geq0$, and increases for irreversible spontaneous processes. For the universe, $\Delta\thermal{S}_{\mathrm{univ}}\geq0$.

The sketch shows heat $\thermal{Q}$ entering a system at temperature $\thermal{T}$. For reversible heat transfer at constant temperature, $\Delta\thermal{S}=\thermal{Q}_{\mathrm{rev}}/\thermal{T}$. If the temperature varies along the reversible path, integrate $\delta\thermal{Q}_{\mathrm{rev}}/\thermal{T}$ between the initial and final states.

### PDF page 2

#### Heat, work, and spontaneous processes

A system that exchanges energy with its surroundings can change its internal energy by heating or work.

$$
\Delta\energy{U}=\thermal{Q}+\energy{W},
$$

where $\thermal{Q}$ is heat entering the system and $\energy{W}$ is work done on it.

Consider hot and cold reservoirs at fixed temperatures $\thermal{T}_h>\thermal{T}_c$, with respective internal energies $\energy{U}_1,\energy{U}_2$ and entropies $\thermal{S}_1,\thermal{S}_2$. Place them in thermal contact. The sketch shows heat $\thermal{Q}>0$ flowing from the hot reservoir to the cold reservoir. The first law gives

$$
\Delta\energy{U}=\Delta\energy{U}_1+\Delta\energy{U}_2
=-\thermal{Q}+\thermal{Q}=0.
$$

The total entropy change is

$$
\begin{aligned}
\Delta\thermal{S}&=\Delta\thermal{S}_1+\Delta\thermal{S}_2
=-\frac{\thermal{Q}}{\thermal{T}_h}+\frac{\thermal{Q}}{\thermal{T}_c}\\
&=\thermal{Q}\left(\frac{1}{\thermal{T}_c}-\frac{1}{\thermal{T}_h}\right)>0.
\end{aligned}
$$

The notes summarize this tendency as “Nature abhors a gradient.” The side sketches show heat flowing from hot to cold, particles spreading from a dense region into a sparse one, and an electron moving toward the positive plate. The reaction $2\mathrm{H}_2+\mathrm{O}_2\rightleftharpoons 2\mathrm{H}_2\mathrm{O}$ is marked with $\Delta\energy{G}$ as a chemical driving force. The entropy production for spontaneous irreversible change is written $\dot{\thermal{S}}_{\mathrm{univ}}>0$.

The two-particle scattering sketch illustrates microscopic time reversal. A trajectory with position $\mechanical{\vec r}(t)$ and momentum $\mechanical{\vec p}(t)$ has a reversed trajectory with $\mechanical{\vec r}(-t)$ and $-\mechanical{\vec p}(-t)$. For many particles, the notebook contrasts dispersal with a reverse process in which they collect again. The observed evolution from an ordered configuration to one with particles more widely distributed is much more likely than the reverse.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Particle configurations in connected chambers.png|**Fig. 2** A configuration with all particles in the left chamber is compared with one in which they occupy both chambers.]]

The page introduces the **thermodynamic limit**, $N\to\infty$.

### PDF page 3

The first sketch shows the Sun emitting radiation and the Earth absorbing and emitting radiation. In the idealized steady state, the energy and entropy stored on Earth are constant,

$$
\frac{d\energy{U}_{\mathrm{Earth}}}{dt}=\dot{\energy{U}}_{\mathrm{Earth}}=0,
\qquad
\frac{d\thermal{S}_{\mathrm{Earth}}}{dt}=\dot{\thermal{S}}_{\mathrm{Earth}}=0.
$$

Two sketches compare heat conduction through a fluid heated from below and cooled from above with convection in the same arrangement. The circulation cells are labeled a low-entropy structure. The notebook associates the convection case with a higher rate of entropy production $\dot{\thermal{S}}_{\mathrm{univ}}$.

#### January 10, 2018 · Steady states and simple systems

The Earth sketch shows incoming radiation from the hot Sun and outgoing radiation toward colder surroundings. In this steady-state picture, $\dot{\thermal{S}}_{\mathrm{Earth}}=0$ and $\dot{\energy{U}}_{\mathrm{Earth}}=0$ while $\dot{\thermal{S}}_{\mathrm{univ}}>0$.

#### Origin of life

One sketch labels an iron-rich interior, a crust, surrounding water and carbon dioxide, and an electron arrow directed outward. A second shows protons across a lipid membrane, a protein labeled F1 ATPase, and the conversion of ADP and inorganic phosphate into ATP as protons cross the membrane.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Origin of life and proton driven ATP synthesis.png|**Fig. 3** The sketches connect the origin-of-life discussion to a membrane proton gradient that can drive ATP synthesis.]]

#### Thermodynamics of simple systems

A simple system is homogeneous and isotropic, with definite chemical composition. The model neglects electromagnetic interactions and gravitational effects. Volume $\mechanical{V}$ is the relevant mechanical variable. Internal energy $\energy{U}$ is conserved for an isolated system.

A sketch shows a box containing two species, $A$ and $B$. The independent variables $(\energy{U},\mechanical{V},N_A,N_B)$ are extensive parameters, where $N_A$ and $N_B$ count the particles of each species.

### PDF page 4

Extensive parameters scale with system size. Intensive parameters are independent of system size. The first law for a system exchanging heat and work is again $\Delta\energy{U}=\thermal{Q}+\energy{W}$.

#### Thermodynamic equilibrium

Equilibrium thermodynamics describes macroscopic systems at equilibrium. The sketch illustrates mixing by pouring Havana Club rum into a glass with cola, then shows the mixed Cuba Libre.

#### System and surroundings

A box labeled “surroundings” encloses two subsystems, $A$ and $B$, separated by a wall. The notes distinguish the mechanical constraint from the thermal constraint.

- A rigid wall keeps the volume fixed. A movable wall, such as a piston, can change the volume and transfer work.
- An adiabatic wall prevents heat transfer, $\thermal{Q}=0$. A diathermal wall permits heat to flow.

The sketches show work supplied by a motor driving a stirrer and by a tool boring a cannon. A process from state $A$ to state $B$ obeys

$$
\Delta\energy{U}=\energy{U}_B-\energy{U}_A=\thermal{Q}+\energy{W}.
$$

For displacement $d\mechanical{x}$ against the force $\mechanical{F}$ exerted by the system, the work done on it is $\delta\energy{W}=-\mechanical{F}\,d\mechanical{x}$. The example shows an object lifted from $\mechanical{x}=0$ to $\mechanical{x}=\mechanical{h}$ against gravity. With $\mechanical{F}=-\mechanical{m}\mechanical{g}$ along the upward axis, the work supplied is $\energy{W}=\mechanical{m}\mechanical{g}\mechanical{h}$.

### PDF page 5

#### Quasistatic compression of an ideal gas

A piston of area $\mechanical{A}$ separates the gas pressure $\mechanical{P}_{\mathrm{int}}$ from the applied external pressure $\mechanical{P}_{\mathrm{ext}}$. During quasistatic compression, the forces differ only infinitesimally, $\mechanical{F}_{\mathrm{ext}}=\mechanical{F}_{\mathrm{int}}+\delta\mechanical{F}$. In the quasistatic limit $\mechanical{P}_{\mathrm{ext}}=\mechanical{P}_{\mathrm{int}}=\mechanical{P}$, with $\mechanical{F}_{\mathrm{int}}=\mechanical{A}\mechanical{P}$.

Take $\mechanical{x}$ positive in the direction that increases volume, so $d\mechanical{V}=\mechanical{A}\,d\mechanical{x}$. The work done on the gas is

$$
\delta\energy{W}
=-\mechanical{F}_{\mathrm{ext}}\,d\mechanical{x}
\longrightarrow-\mechanical{F}_{\mathrm{int}}\,d\mechanical{x}
=-\mechanical{P}\,d\mechanical{V}.
$$

Compress from $\mechanical{V}_0$ to $\mechanical{V}_0/2$ at constant $\thermal{T}$. The ideal gas law is $\mechanical{P}\mechanical{V}=n\thermal{R}\thermal{T}$, and a monatomic ideal gas has $\energy{U}=(3/2)n\thermal{R}\thermal{T}$. At fixed $\thermal{T}$,

$$
\begin{aligned}
\energy{W}
&=-\int_{\mechanical{V}_0}^{\mechanical{V}_0/2}
\mechanical{P}(\mechanical{V},\thermal{T})\,d\mechanical{V}\\
&=-n\thermal{R}\thermal{T}\int_{\mechanical{V}_0}^{\mechanical{V}_0/2}\frac{d\mechanical{V}}{\mechanical{V}}
=-n\thermal{R}\thermal{T}\ln\left(\frac{\mechanical{V}_0/2}{\mechanical{V}_0}\right)
=n\thermal{R}\thermal{T}\ln 2.
\end{aligned}
$$

The notes recall $\int dx/x=\ln|x|+C$ and $\ln b-\ln a=\ln(b/a)$ for positive $a$ and $b$. The work is positive for compression. Since $\Delta\energy{U}=0$ on this isotherm, $\thermal{Q}=-\energy{W}=-n\thermal{R}\thermal{T}\ln 2$. The sketch shows heat leaving the gas. The surroundings receive this heat and their entropy changes by $\Delta\thermal{S}_{\mathrm{surr}}=-\thermal{Q}/\thermal{T}$.

#### January 10, 2018 · Discussion

The notes record the room as NS2-2208 and give the GitHub reference as “swflynn thermodynamics.” The discussion emphasizes identifying keywords in thermodynamics problems and explicitly stating assumptions.

**Zeroth law of thermodynamics.** If $A$ is in thermal equilibrium with $B$, and $B$ is in thermal equilibrium with $C$, then $A$ is in thermal equilibrium with $C$. The two small diagrams show the pairs $A$–$B$ and $B$–$C$.

### PDF page 6

#### State functions and pressure–volume work

The first law is $\Delta\energy{U}=\thermal{Q}+\energy{W}$. In differential form,

$$
d\energy{U}=\delta\thermal{Q}+\delta\energy{W}.
$$

The internal energy is a state function with an exact differential. Its change depends on the endpoints, which are points in the space of thermodynamic states. Heat and work depend on the path, so the notes distinguish $\thermal{Q}+\energy{W}$ from an expression in endpoint differences of heat and work.

For pressure–volume work alone, $\energy{W}=\energy{W}_{PV}=-\int\mechanical{P}_{\mathrm{ext}}\,d\mechanical{V}$. The sketch shows a downward applied force compressing a piston of area $\mechanical{A}$. In the quasistatic limit $\mechanical{P}_{\mathrm{ext}}=\mechanical{P}_{\mathrm{gas}}$. With the ideal gas equation of state, $\energy{W}=-\int(n\thermal{R}\thermal{T}/\mechanical{V})\,d\mechanical{V}$. To take $n$ and $\thermal{T}$ outside the integral, specify fixed amount and isothermal conditions. The monatomic ideal gas has $\energy{U}=\tfrac32n\thermal{R}\thermal{T}$.

#### Differentials and heat capacity

For a fixed amount of substance, write $\energy{U}=\energy{U}(\thermal{T},\mechanical{V})$. Its differential is

$$
d\energy{U}=
\left(\frac{\partial\energy{U}}{\partial\thermal{T}}\right)_V d\thermal{T}+
\left(\frac{\partial\energy{U}}{\partial\mechanical{V}}\right)_T d\mechanical{V}.
$$

The coefficient $\thermal{C}_V=(\partial\energy{U}/\partial\thermal{T})_V$ is the heat capacity at constant volume. Along a reversible path $d\thermal{S}=\delta\thermal{Q}_{\mathrm{rev}}/\thermal{T}$, and integration gives the entropy change. Inserting $\delta\thermal{Q}_{\mathrm{rev}}=\thermal{T}\,d\thermal{S}$ and $\delta\energy{W}_{PV}=-\mechanical{P}\,d\mechanical{V}$ in the first law combines the first and second laws into

$$
d\energy{U}=\thermal{T}\,d\thermal{S}-\mechanical{P}\,d\mechanical{V},
\qquad
\energy{U}=\energy{U}(\thermal{S},\mechanical{V}).
$$

#### Enthalpy and a Maxwell relation

The Legendre transform $\energy{H}=\energy{U}+\mechanical{P}\mechanical{V}$ defines the enthalpy.

$$
\begin{aligned}
d\energy{H}&=d\energy{U}+\mechanical{P}\,d\mechanical{V}+\mechanical{V}\,d\mechanical{P}\\
&=\thermal{T}\,d\thermal{S}+\mechanical{V}\,d\mechanical{P}.
\end{aligned}
$$

Thus $\energy{H}=\energy{H}(\thermal{S},\mechanical{P})$ at fixed composition. The last line points toward a Maxwell relation by equating the mixed derivatives of $\energy{U}(\thermal{S},\mechanical{V})$.

$$
\frac{\partial^2\energy{U}}{\partial\thermal{S}\,\partial\mechanical{V}}
=\frac{\partial^2\energy{U}}{\partial\mechanical{V}\,\partial\thermal{S}}.
$$

### PDF page 7

The margin marks the January 12, 2018 lecture as missed.

#### Isothermal and adiabatic compression

The opening sketch repeats the isothermal compression of a monatomic ideal gas from $\mechanical{V}_0$ to $\mechanical{V}_0/2$. With $\mechanical{P}\mechanical{V}=n\thermal{R}\thermal{T}$ and $\energy{U}=(3/2)n\thermal{R}\thermal{T}$,

$$
\energy{W}=-n\thermal{R}\thermal{T}\int_{\mechanical{V}_0}^{\mechanical{V}_0/2}\frac{d\mechanical{V}}{\mechanical{V}}
=n\thermal{R}\thermal{T}\ln 2,\qquad
\Delta\energy{U}=0,\qquad
\thermal{Q}=-n\thermal{R}\thermal{T}\ln 2.
$$

The sign convention takes $\thermal{Q}$ as heat into the system. Heat into the surroundings is $-\thermal{Q}$, giving $\Delta\thermal{S}_{\mathrm{surr}}=-\thermal{Q}/\thermal{T}$. A separate line gives the statistical formula $\thermal{S}=\thermal{k}_{\mathrm B}\ln W$, where $W$ is the multiplicity.

For reversible adiabatic compression to the same final volume, $\thermal{Q}=0$ and $\Delta\thermal{S}_{\mathrm{univ}}=0$. The work and internal energy change are equal, and the gas temperature now depends on volume along the path.

$$
\Delta\energy{U}=\energy{W}=-\int_{\mechanical{V}_0}^{\mechanical{V}_0/2}
\mechanical{P}(\thermal{T},\mechanical{V})\,d\mechanical{V}
=-n\thermal{R}\int_{\mechanical{V}_0}^{\mechanical{V}_0/2}
\frac{\thermal{T}(\mechanical{V})}{\mechanical{V}}\,d\mechanical{V}.
$$

Use $\mechanical{P}=\mechanical{P}_0(\mechanical{V}_0/\mechanical{V})^{5/3}$ for this adiabatic path. With the dimensionless substitution $x=\mechanical{V}/\mechanical{V}_0$,

$$
\begin{aligned}
\energy{W}
&=-\mechanical{P}_0\int_{\mechanical{V}_0}^{\mechanical{V}_0/2}
\left(\frac{\mechanical{V}_0}{\mechanical{V}}\right)^{5/3}d\mechanical{V}\\
&=-\mechanical{P}_0\mechanical{V}_0\int_1^{1/2}x^{-5/3}\,dx\\
&=\frac32\mechanical{P}_0\mechanical{V}_0\left[(1/2)^{-2/3}-1\right]
=\frac32\mechanical{P}_0\mechanical{V}_0(2^{2/3}-1).
\end{aligned}
$$

The notebook recalls the power rule $\int x^\alpha\,dx=x^{\alpha+1}/(\alpha+1)+C$ for $\alpha\ne-1$. Since $\mechanical{P}_0\mechanical{V}_0=n\thermal{R}\thermal{T}_0$,

$$
\Delta\energy{U}
=\frac32n\thermal{R}\thermal{T}_0(2^{2/3}-1)
=\energy{U}_{\mathrm f}-\energy{U}_0
=\frac32n\thermal{R}(\thermal{T}_{\mathrm f}-\thermal{T}_0).
$$

### PDF page 8

The energy balance for the adiabatic compression gives the final temperature $\thermal{T}_{\mathrm f}=2^{2/3}\thermal{T}_0$. As a check, $\thermal{T}_{\mathrm f}^{3/2}(\mechanical{V}_0/2)=\thermal{T}_0^{3/2}\mechanical{V}_0$. A margin note refers to a similar problem in Lecture 7.

To derive the temperature–volume relation directly, use the first law on a reversible adiabatic path with fixed $n$.

$$
d\energy{U}=-\mechanical{P}\,d\mechanical{V}
=\frac32n\thermal{R}\,d\thermal{T}.
$$

Substitute $\mechanical{P}=n\thermal{R}\thermal{T}/\mechanical{V}$ and separate variables.

$$
\frac32\frac{d\thermal{T}}{\thermal{T}}=-\frac{d\mechanical{V}}{\mechanical{V}},
\qquad
\frac32\int_{\thermal{T}_0}^{\thermal{T}}\frac{d\thermal{T}}{\thermal{T}}
=-\int_{\mechanical{V}_0}^{\mechanical{V}}\frac{d\mechanical{V}}{\mechanical{V}}.
$$

Combining the logarithms using $a\ln b=\ln b^a$ gives

$$
\frac32\ln\left(\frac{\thermal{T}}{\thermal{T}_0}\right)+\ln\left(\frac{\mechanical{V}}{\mechanical{V}_0}\right)
=\ln\left[\left(\frac{\thermal{T}}{\thermal{T}_0}\right)^{3/2}
\frac{\mechanical{V}}{\mechanical{V}_0}\right]=0.
$$

Exponentiating yields $\thermal{T}^{3/2}\mechanical{V}=\thermal{T}_0^{3/2}\mechanical{V}_0$, or

$$
\thermal{T}(\mechanical{V})=\thermal{T}_0\left(\frac{\mechanical{V}_0}{\mechanical{V}}\right)^{2/3}.
$$

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Temperature along a monatomic ideal gas adiabat.png|**Fig. 4** Temperature decreases as the volume increases along a reversible adiabat and equals the initial temperature at the initial volume.]]

### PDF page 9

Substitute the adiabatic temperature relation into the ideal gas law to recover the pressure along the path.

$$
\begin{aligned}
\mechanical{P}(\mechanical{V})
&=\frac{n\thermal{R}\thermal{T}_0}{\mechanical{V}}
\left(\frac{\mechanical{V}_0}{\mechanical{V}}\right)^{2/3}\\
&=\frac{n\thermal{R}\thermal{T}_0}{\mechanical{V}_0}
\left(\frac{\mechanical{V}_0}{\mechanical{V}}\right)^{5/3}
=\mechanical{P}_0\left(\frac{\mechanical{V}_0}{\mechanical{V}}\right)^{5/3}.
\end{aligned}
$$

This is the function integrated in the adiabatic work calculation on PDF page 7.

#### January 17, 2018 · The central problem of thermodynamics

Determine the new equilibrium state after removing an internal constraint from a closed composite system initially at equilibrium under that constraint. The sketch shows subsystems with parameters $(\energy{U}_1,\mechanical{V}_1,N_1)$ and $(\energy{U}_2,\mechanical{V}_2,N_2)$. A partition constrains the initial state. After it is removed, the combined system passes through nonequilibrium states and reaches a new equilibrium specified by the combined parameters $(\energy{U},\mechanical{V},N)$.

#### Postulates of thermodynamics

The notebook recalls that $\exists$ means “there exists” and $\forall$ means “for all.”

**Postulate I.** Equilibrium states exist and are uniquely characterized by the extensive parameters $\energy{U},\mechanical{V},N_1,\ldots,N_r$ for a simple system.

**Postulate II.** There is a real-valued state function $\thermal{S}(\energy{U},\mechanical{V},N_1,\ldots,N_r)$, the entropy. The equilibrium values of the unconstrained internal parameters maximize the entropy subject to the imposed constraints. The sketch shows a peaked surface with a line of fixed $y$ as an example of a constraint.

The margin introduces Gibbs free energy, $\energy{G}=\energy{H}-\thermal{T}\thermal{S}$, as the part left “after taxes.” It writes $\Delta\energy{G}=\energy{H}-\thermal{T}\Delta\thermal{S}$ and $\Delta\energy{G}_{\mathrm{univ}}>0$. The latter is an unexplained margin notation. The entropy increase for an isolated system is stated in the second law on PDF page 1.

### PDF page 10

**Postulate III.** The entropy of a composite system is the sum of its parts' entropies. In the postulates, entropy is continuous, differentiable, and monotonically increasing in energy at fixed volume and composition. The first sketch shows an increasing $\thermal{S}$ as $\energy{U}$ increases. The notes give the derivative and anticipate its connection to temperature.

$$
\left(\frac{\partial\thermal{S}}{\partial\energy{U}}\right)_{V,N}
=\frac{1}{\thermal{T}}>0.
$$

A function homogeneous of degree $n$ satisfies $f(\lambda x,\lambda y,\lambda z)=\lambda^n f(x,y,z)$. Entropy is homogeneous of degree one in the extensive parameters.

$$
\thermal{S}(\lambda\energy{U},\lambda\mechanical{V},\lambda N)
=\lambda\thermal{S}(\energy{U},\mechanical{V},N).
$$

The notebook points from this property to Euler's relation. Because the entropy is increasing with energy, the fundamental relation $\thermal{S}(\energy{U},\mechanical{V},N)$ in the **entropy representation** can be inverted to $\energy{U}(\thermal{S},\mechanical{V},N)$ in the **energy representation**.

Choose $\lambda=1/N$ to express the entropy per unit amount.

$$
\thermal{S}\left(\frac{\energy{U}}{N},\frac{\mechanical{V}}{N},1\right)
=\frac{\thermal{S}(\energy{U},\mechanical{V},N)}{N}.
$$

Define lowercase quantities $\energy{u}=\energy{U}/N$, $\mechanical{v}=\mechanical{V}/N$, and $\thermal{s}=\thermal{S}/N$. These are per-particle if $N$ counts particles. The notebook calls them molar quantities, corresponding to expressing $N$ in moles. The scaled relation is $\thermal{S}(\energy{u},\mechanical{v},1)=\thermal{s}(\energy{u},\mechanical{v})$, so $\thermal{S}=N\thermal{s}$.

**Postulate IV.** The entropy vanishes in a state for which

$$
\left(\frac{\partial\energy{U}}{\partial\thermal{S}}\right)_{V,N}=\thermal{T}=0.
$$

The final sketch plots $\energy{U}$ against $\thermal{S}$, with the curve beginning at zero entropy and rising from a horizontal tangent.

### PDF page 11

#### January 9, 2018 · Statistical mechanics

The reading list names Pathria, a name that appears to read “Carder,” and Feynman's statistical mechanics lectures, with a note about the density matrix. As the number of particles grows from one or a few to $N\sim10^{23}$, statistical mechanics describes observables through averages $\langle A\rangle$, fluctuations, and correlations.

#### Historical outline

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

#### Phase space and ensembles

The notes introduce a phase-space density $P(\mechanical{p}_i,\mechanical{q}_i,t)$ and sketch an evolving set of configurations at constant energy. At equilibrium $\partial P/\partial t=0$. A distribution that depends only on the conserved energy, $P=P(\energy{E})$, is stationary. In an **ergodic** system, a trajectory samples the accessible states so that a long-time average agrees with the ensemble average.

### PDF page 12

#### January 11, 2018 · Thermodynamics review and classical statistical mechanics

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

#### Counting states and exchanging energy

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

### PDF page 13

#### Entropy and the Boltzmann distribution

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

#### Volume and particle exchange

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

### PDF page 14

#### January 16, 2018 · Ideal gases and the virial theorem

The lecture reviews $\Omega(N,\mechanical{V},\energy{E})$ as the number of accessible microstates, $\thermal{S}=\thermal{k}_{\mathrm B}\ln\Omega$, and the entropy derivatives that give $1/\thermal{T}$, $\mechanical{P}/\thermal{T}$, and $-\energy{\mu}/\thermal{T}$.

For an ideal gas with vanishing pair interactions, the configuration part of the state count scales as $\Omega\propto\mechanical{V}^N$. It follows that

$$
\frac{\mechanical{P}}{\thermal{T}}
=\left(\frac{\partial\thermal{S}}{\partial\mechanical{V}}\right)_{E,N}
=\frac{\thermal{k}_{\mathrm B}N}{\mechanical{V}},\qquad
\mechanical{P}\mechanical{V}=N\thermal{k}_{\mathrm B}\thermal{T}=n\thermal{R}\thermal{T},
$$

where $n$ in the last expression is the amount in moles. This is the ideal gas equation of state.

#### Virial derivation of the kinetic energy

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

### PDF page 15

#### Pressure from the scaling of energy levels

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

#### Cumulative state count and the momentum distribution

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

### PDF page 16

The cumulative classical count $\Sigma$ integrates the phase-space measure with a step function restricting the kinetic energy. The coordinate integrations contribute $\mechanical{V}^N$ because the kinetic energy is independent of position inside the box.

#### January 18, 2018 · State counting for an ideal gas

The ideal gas has zero pair potential. Replacing the cutoff step function by a delta function gives the density of states at $\energy{E}$,

$$
\frac{\partial\Sigma}{\partial\energy{E}}=
\frac{1}{(2\pi\energy{\hbar})^{3N}N!}
\int d^3\mechanical{\vec p}_1\cdots d^3\mechanical{\vec p}_N\,
d^3\mechanical{\vec q}_1\cdots d^3\mechanical{\vec q}_N\,
\delta\left(\energy{E}-\sum_{i=1}^N\frac{\mechanical{p}_i^2}{2\mechanical{m}}\right).
$$

The notebook labels the integral $\Omega$ and calls it dimensionless. With a Dirac delta in energy, the integral is a density per unit energy. The dimensionless count $\Omega$ used in $\thermal{S}=\thermal{k}_{\mathrm B}\ln\Omega$ is obtained by integrating over an energy shell. The notes identify $2\pi\energy{\hbar}$ as a phase-space cell for one coordinate and its conjugate momentum, and link the $1/N!$ to the Gibbs paradox. The shorthand $\int[dp\,dq/(2\pi\energy{\hbar})]$ is compared to Feynman's path-integral notation.

#### Volume of a ball in $D$ dimensions

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

### PDF page 17

#### Stirling's approximation and the ideal gas entropy

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

### PDF page 18

The monatomic ideal gas has $\thermal{C}_V=(\partial\energy{E}/\partial\thermal{T})_{N,V}=\tfrac32N\thermal{k}_{\mathrm B}$ and $\mechanical{P}=-(\partial\energy{E}/\partial\mechanical{V})_{N,S}=2\energy{E}/(3\mechanical{V})$. Their common energy dependence recovers the ideal gas law.

#### Chemical potential and thermal wavelength

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

#### Fluctuations and phase-space averages

The variance of an observable $A$ is $\langle A^2\rangle-\langle A\rangle^2$. The notes anticipate relative fluctuations of order $N^{-1/2}$ in the thermodynamic limit. This scaling refers to the relative standard deviation of an extensive observable under the usual weak-correlation assumptions.

For $N$ degrees of freedom, the phase space has $2N$ coordinates $(\mechanical{q}_1,\ldots,\mechanical{q}_N,\mechanical{p}_1,\ldots,\mechanical{p}_N)$. The notes relate the probability of occupying a small region to the limiting fraction of observation time spent there. Write $d\Gamma$ for the product of coordinate and momentum differentials. For a region $B$,

$$
P_B=\int_B P(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma,\qquad
\int P\,d\Gamma=1,\qquad
\langle A\rangle=\int P(\mechanical{\vec p},\mechanical{\vec q})A(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma.
$$

The ensemble average is taken to agree with the long-time average. The final sketch divides the system into two weakly interacting parts with approximately factorized probability density $P_{12}=P_1P_2$.

### PDF page 19

A large system is divided into $n$ blocks, with a distribution that approximately factors as $P\approx\prod_{i=1}^nP_i$. To motivate neglecting interactions across block boundaries, compare surface and volume contributions. For a block of linear size $\mechanical{L}$, the surface scales as $\mechanical{L}^2$ and the volume as $\mechanical{L}^3$. Their ratio scales as $1/\mechanical{L}$ and tends to zero for large blocks.

#### January 23, 2018 · Fluctuations in the infinite-volume limit

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

### PDF page 20

For independent blocks, the off-diagonal covariances vanish. The diagonal terms give

$$
\langle(\Delta A)^2\rangle
=\sum_{i=1}^n(\langle A_i^2\rangle-\langle A_i\rangle^2)\sim n.
$$

For blocks with comparable variances and nonzero mean contributions, $\langle A\rangle\sim n$. The relative variance scales as $n/n^2=1/n$. Hence the relative standard deviation $\sqrt{\langle(\Delta A)^2\rangle}/|\langle A\rangle|$ scales as $1/\sqrt n$.

#### More examples of the microcanonical ensemble

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

#### Phase space and Hamilton's equations

A point in phase space is specified by the coordinates $\mechanical{q}_i(t)$ and momenta $\mechanical{p}_i(t)$. Its motion obeys

$$
\dot{\mechanical{q}}_i=\frac{\partial\energy{H}}{\partial\mechanical{p}_i},
\qquad
\dot{\mechanical{p}}_i=-\frac{\partial\energy{H}}{\partial\mechanical{q}_i}.
$$

### PDF page 21

#### Time averages and ensemble averages

For $N$ particles with three translational coordinates each, $i=1,\ldots,3N$. Hamilton's equations give the phase-space velocity $\vec v_\Gamma=(\dot{\mechanical{q}}_i,\dot{\mechanical{p}}_i)_{i=1}^{3N}$. For a time-independent Hamiltonian, the trajectory stays on the surface $\energy{H}(\mechanical{\vec p},\mechanical{\vec q})=\energy{E}$.

In a long observation, the fraction of time spent in a phase-space region $B$ defines its trajectory probability. For a normalized ensemble density $P$,

$$
P_B=\int_B P(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma,\qquad
\int P(\mechanical{\vec p},\mechanical{\vec q})\,d\Gamma=1.
$$

Compare the time average $\bar f$ along one trajectory with the ensemble average $\langle f\rangle=\int P f\,d\Gamma$ over many systems observed at a fixed time. Ergodicity gives equality for the appropriate equilibrium measure and almost all initial conditions.

**Billiard example.** A ball in a rectangular billiard can bounce vertically along a fixed line or follow a different path at an angle. The direction of motion constrains the trajectory, so a time average can differ from the full ensemble average. The notes credit Sinai's example of adding a circular obstacle, yielding a dispersing billiard that can be ergodic. They connect chaotic trajectories with the possibility of ergodicity.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Rectangular and Sinai billiards.png|**Fig. 5** Two trajectories in an empty rectangle and a billiard with a circular obstacle.]]

#### Liouville's theorem

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

### PDF page 22

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

#### January 25, 2018 · Canonical ensemble

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

### PDF page 23

#### The partition function and the density matrix

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

#### Energy fluctuations

Another derivative of $\ln Z$ gives the energy variance.

$$
\begin{aligned}
\frac{\partial^2\ln Z}{\partial\thermal{\beta}^2}
&=\frac{\sum_i\energy{E}_i^2e^{-\thermal{\beta}\energy{E}_i}}{Z}
-\left(\frac{\sum_i\energy{E}_ie^{-\thermal{\beta}\energy{E}_i}}{Z}\right)^2\\
&=\langle\energy{E}^2\rangle-\langle\energy{E}\rangle^2.
\end{aligned}
$$

### PDF page 24

The canonical energy variance determines the heat capacity at fixed volume and particle number.

$$
\thermal{C}_V=\left(\frac{\partial\langle\energy{E}\rangle}{\partial\thermal{T}}\right)_{V,N}
=\thermal{k}_{\mathrm B}\thermal{\beta}^2\frac{\partial^2\ln Z}{\partial\thermal{\beta}^2}.
$$

#### Pressure and the Hellmann–Feynman theorem

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

### PDF page 25

#### Entropy from the canonical density matrix

Use $\thermal{S}=-\thermal{k}_{\mathrm B}\operatorname{Tr}(\hat\rho\ln\hat\rho)$ and $\ln\hat\rho=-\thermal{\beta}\energy{\hat H}-(\ln Z)\mathbb{1}$. The notes recall that the trace is linear and equals the sum of diagonal elements. With $\operatorname{Tr}\hat\rho=1$,

$$
\thermal{S}=\thermal{k}_{\mathrm B}\thermal{\beta}\langle\energy{E}\rangle+
\thermal{k}_{\mathrm B}\ln Z
=\frac{\langle\energy{E}\rangle-\energy{A}}{\thermal{T}}.
$$

This recovers $\energy{A}=\langle\energy{E}\rangle-\thermal{T}\thermal{S}$.

#### Position representation and imaginary time

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

#### Free particle kernel

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

### PDF page 26

#### January 30, 2018 · Canonical ensemble kernels

At fixed $\thermal{T}$, the notebook reviews

$$
Z=\operatorname{Tr}(e^{-\thermal{\beta}\energy{\hat H}}),\qquad
\langle\energy{E}\rangle=-\frac{\partial\ln Z}{\partial\thermal{\beta}},\qquad
\langle(\Delta\energy{E})^2\rangle=\frac{\partial^2\ln Z}{\partial\thermal{\beta}^2}.
$$

The second derivative determines $\thermal{C}_V$. The normalized operator $\hat\rho=e^{-\thermal{\beta}\energy{\hat H}}/Z$ gives $\langle\energy{E}\rangle=\operatorname{Tr}(\hat\rho\energy{\hat H})$. The unnormalized operator $\hat\rho_u=e^{-\thermal{\beta}\energy{\hat H}}$ solves $-\partial\hat\rho_u/\partial\thermal{\beta}=\energy{\hat H}\hat\rho_u$. Under $t=-i\tau$, this is the imaginary-time form of the Schrödinger evolution equation. The margin refers to Baym for the kernels.

The free-particle equation and its Gaussian solution are on PDF page 25. The repeated handwritten kernel here drops $\thermal{\beta}$ from the square-root denominator and puts $\pi$ in the exponent denominator. The diagonal trace below is consistent with the kernel on page 25.

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

#### One-dimensional quantum harmonic oscillator

Take $\energy{\hat H}=\mechanical{\hat p}^2/(2\mechanical{m})+\tfrac12\mechanical{m}\mechanical{\omega}^2\mechanical{\hat x}^2$ and $f=\thermal{\beta}\energy{\hbar}\mechanical{\omega}/2=\energy{\hbar}\mechanical{\omega}/(2\thermal{k}_{\mathrm B}\thermal{T})$. The position kernel is the imaginary-time form of the Feynman propagator.

$$
\rho_u(\mechanical{x},\mechanical{x}';\thermal{\beta})
=\sqrt{\frac{\mechanical{m}\mechanical{\omega}}{2\pi\energy{\hbar}\sinh(2f)}}
\exp\left[-\frac{\mechanical{m}\mechanical{\omega}}{2\energy{\hbar}\sinh(2f)}
\left((\mechanical{x}^2+\mechanical{x}'^{\,2})\cosh(2f)-2\mechanical{x}\mechanical{x}'\right)\right].
$$

The handwritten exponential appears to lack the leading minus sign. It is needed for the kernel to decay at large positions.

### PDF page 27

The notes compare the statistical sum over configurations, $Z(\thermal{\beta})=\sum e^{-\thermal{\beta}\energy{H}}$, with the quantum amplitude written as a sum over paths weighted by $e^{i\mathcal{S}_{\mathrm{path}}/\energy{\hbar}}$. Here $\mathcal{S}_{\mathrm{path}}$ is the action of a path. The comparison pairs the real coefficient $-\thermal{\beta}$ with the imaginary coefficient $i/\energy{\hbar}$ in the two exponents.

#### Harmonic oscillator partition function

To trace the oscillator kernel, set $\mechanical{x}'=\mechanical{x}$. With $f=\thermal{\beta}\energy{\hbar}\mechanical{\omega}/2$, the resulting Gaussian is $A e^{-B\mechanical{x}^2}$, with

$$
A=\sqrt{\frac{\mechanical{m}\mechanical{\omega}}{2\pi\energy{\hbar}\sinh(2f)}},\qquad
B=\frac{\mechanical{m}\mechanical{\omega}}{\energy{\hbar}}\tanh f.
$$

The kernel from PDF page 26 fixes the square root in $A$ and the square on $\mechanical{x}$. The Gaussian trace is

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

### PDF page 28

#### Classical canonical ideal gas

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

### PDF page 29

#### February 1, 2018 · Quantum and classical limits

For the monatomic ideal gas, $\langle\energy{E}\rangle=\tfrac32N\thermal{k}_{\mathrm B}\thermal{T}$, $\thermal{C}_V=\tfrac32N\thermal{k}_{\mathrm B}$, and $\mechanical{P}\mechanical{V}=N\thermal{k}_{\mathrm B}\thermal{T}$. For $N$ independent quantum harmonic oscillators,

$$
\langle\energy{E}\rangle=
N\energy{\hbar}\mechanical{\omega}\left[\frac12+
\frac{1}{e^{\energy{\hbar}\mechanical{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})}-1}\right],
$$

while the classical result is $N\thermal{k}_{\mathrm B}\thermal{T}$. The notes ask why the oscillator results differ and point to the energy gap $\energy{\hbar}\mechanical{\omega}$. For a gas in a large box the translational levels are closely spaced, so the discrete spacing is negligible in the dilute classical regime.

A margin aside comments on the broad use of statistical mechanics and quantum mechanics across disciplines. It jokes about electromagnetism being less recently used and about going thirty years without seeing a pendulum.

#### Temperature and heat

The historical sketch lists thermometers associated with the Medici family in Florence, then Fahrenheit (1714), Réaumur (1731), and Celsius (1742). The Réaumur line notes a $0$–$80$ scale and mentions boiling alcohol. These are the dates and descriptions in the notebook.

The sketch attributed to Guillaume Amontons plots pressure against temperature. A dashed straight line extrapolates to zero pressure at approximately $-273\;\unit{^\circ C}$. The notes then mention Lavoisier (1783) and the caloric theory of heat, followed by Count Rumford (about 1798). The cannon-boring example illustrates conversion of mechanical work into heat.

### PDF page 30

The historical notes mention Joule (1843), beer brewing, the importance of temperature for fermentation, and the use of accurate thermometers. Sadi Carnot (1824), described as an officer in the French army, sought a mathematical theory of heat engines. The notebook puts the print run of his book at about 600 copies and notes its small readership.

William Thomson, Lord Kelvin, is associated with absolute zero at $-273.15\;\unit{^\circ C}$. For a classical ideal gas, $\thermal{T}\propto\langle\mechanical{v}^2\rangle$, so the mean thermal kinetic energy tends to zero in that model. The margin points out that quantum systems can retain zero-point energy.

#### Spins in the canonical ensemble

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

### PDF page 31

#### Langevin function and Curie's law

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

### PDF page 32

#### Quantum spins

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

#### February 6, 2018 · Heat capacity and rotational levels

At fixed positive field,

$$
\thermal{C}_V=N\thermal{k}_{\mathrm B}\frac{x^2}{\cosh^2 x}
\ \sim\ 4N\thermal{k}_{\mathrm B}x^2e^{-2x}
\quad\text{as }\thermal{T}\to0.
$$

The power $x^2$ in the low-temperature limit follows from the preceding exact expression. The handwritten limit shows one power of $x$. The final line moves beyond spin $1/2$ to rotational levels $\energy{E}_\ell=\energy{\hbar}^2\ell(\ell+1)/(2\mechanical{I})$, with $\ell=0,1,2,\ldots$.

### PDF page 33

For one quantum rotor the level of index $\ell$ has degeneracy $2\ell+1$, so

$$
Z_1(\thermal{\beta})=\sum_{\ell=0}^{\infty}(2\ell+1)
\exp\left[-\thermal{\beta}\frac{\energy{\hbar}^2\ell(\ell+1)}{2\mechanical{I}}\right].
$$

**Exercise.** At low temperature keep the first few levels. At high temperature approximate the sum by an integral. The margin refers to Pathria for the answer. For $N$ independent rotors the partition function is $Z_1^N$. A separate note points to the virial theorem for two-body potentials $\energy{V}_{ij}(|\mechanical{\vec x}_i-\mechanical{\vec x}_j|)$ and for the van der Waals equation.

#### Grand canonical ensemble

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

#### Repeated notes on quantum spins

The lower half repeats the magnetic moment and angular momentum relations for spin-$1/2$ particles and the energy $\energy{E}=-\magnetic{\mu}\magnetic{H}(n_\uparrow-n_\downarrow)$. The two orientations give $\ln Z_N=N\ln[2\cosh(\thermal{\beta}\magnetic{\mu}\magnetic{H})]$ and

$$
\langle\energy{E}\rangle=-N\magnetic{\mu}\magnetic{H}\tanh(\thermal{\beta}\magnetic{\mu}\magnetic{H}),
\qquad
\frac{\magnetic{M}_z}{N}=\magnetic{\mu}\tanh(\thermal{\beta}\magnetic{\mu}\magnetic{H}).
$$

The last line again recalls the $1/\sqrt N$ factor in the relative standard deviation. The mean-energy line here omits the factor $\magnetic{H}$, and the fluctuation line again shows the squared hyperbolic sine. The derivatives and corrected forms are on PDF page 32.

### PDF page 34

For the two-state spin model, $\magnetic{\chi}$ tends to $N\magnetic{\mu}^2/(\thermal{k}_{\mathrm B}\thermal{T})$ at zero field. The finite-field expression follows from the derivative of $\tanh x$ on PDF page 32. The handwritten denominator here is unclear.

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

#### Grand potential and entropy

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

### PDF page 35

The normalization factor for the grand canonical distribution is

$$
\Xi(\thermal{T},\mechanical{V},\energy{\mu})
=\sum_{N=0}^\infty\sum_{\text{states at }N}
e^{\thermal{\beta}(\energy{\mu}N-\energy{E}_{\text{state}})}
=\sum_{N=0}^\infty e^{\thermal{\beta}\energy{\mu}N}
Z_N(\thermal{\beta},\mechanical{V}).
$$

The second form groups the states at fixed $N$ into the canonical partition function $Z_N$. The remaining marks on the page are show-through from the reverse side.

### PDF page 36

#### February 8, 2018 · Grand canonical ideal gas

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

### PDF page 37

For the grand canonical classical gas,

$$
\langle N\rangle
=\frac{1}{\thermal{\beta}}\frac{\partial\ln\Xi}{\partial\energy{\mu}}
=e^{\thermal{\beta}\energy{\mu}}\mechanical{V}
\left(\frac{\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}{2\pi\energy{\hbar}^2}\right)^{3/2}.
$$

Solving gives the dimensionless fugacity $z=e^{\thermal{\beta}\energy{\mu}}=(\langle N\rangle/\mechanical{V})\signal{\lambda}_{\mathrm{th}}^3$. It scales as $(\langle N\rangle/\mechanical{V})\thermal{T}^{-3/2}$ for fixed particle mass.

**Estimate.** The notebook takes a sample density of $10^{17}\;\unit{cm^{-3}}$, the proton rest energy $\mechanical{m}\mechanical{c}^2\approx938\;\unit{MeV}$, $\energy{\hbar}\mechanical{c}\approx1.97\times10^{-11}\;\unit{MeV\,cm}$, and room-temperature $\thermal{k}_{\mathrm B}\thermal{T}\approx0.024\;\unit{eV}$. Combining them gives

$$
\signal{\lambda}_{\mathrm{th}}^3=
\left[\frac{2\pi(\energy{\hbar}\mechanical{c})^2}{(\mechanical{m}\mechanical{c}^2)\thermal{k}_{\mathrm B}\thermal{T}}\right]^{3/2}
\sim10^{-24}\;\unit{cm^3},
\qquad
z\sim10^{-7}\ll1.
$$

The estimate illustrates the dilute classical regime.

#### Bose and Fermi distributions

An occupation number $n_i$ counts the particles in one one-particle state with energy $\energy{E}_i$. A sketch shows several particles occupying the same energy level. Then $N=\sum_i n_i$ and $\energy{E}=\sum_i n_i\energy{E}_i$. The notes also mention the Fermi energy, the highest occupied one-particle energy at zero temperature.

For bosons, focus on one state and allow $n_i=0,1,2,\ldots$. The grand partition function of that state is a geometric series.

$$
\Xi_i=\sum_{n_i=0}^{\infty}e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)n_i}
=\frac{1}{1-e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}},
$$

which converges for $\energy{\mu}<\energy{E}_i$ at positive temperature.

### PDF page 38

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

### PDF page 39

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

#### Fermions

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

### PDF page 40

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

#### February 13, 2018 · Quantum statistics review

For bosons, the many-particle wavefunction is symmetric under exchange. The level sketch shows occupations $n_i=0,1,2,\ldots$ and several particles sharing an energy level. The mean occupation is $[e^{\thermal{\beta}(\energy{E}-\energy{\mu})}-1]^{-1}$. The full partition function is the product of the geometric series, $\Xi_{\mathrm B}=\prod_i[1-e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}]^{-1}$.

### PDF page 41

For fermions, the review repeats the mean occupation $[e^{\thermal{\beta}(\energy{E}-\energy{\mu})}+1]^{-1}$ and the product $\Xi_{\mathrm F}=\prod_i[1+e^{\thermal{\beta}(\energy{\mu}-\energy{E}_i)}]$. Each factor has two terms. The sketch compares a Fermi curve with an edge near $\energy{E}\approx\energy{\mu}\approx\energy{E}_{\mathrm F}$ to a Bose curve concentrated at the lowest energies.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Comparison of Bose and Fermi occupations.png|**Fig. 9** The low-temperature Fermi curve has an occupation plateau, while the Bose curve rises sharply near the ground-state energy.]]

#### Exchange symmetry

For identical particles, interchanging the labels leaves the Hamiltonian invariant. If $\energy{\hat H}(1,2)\psi(1,2)=\energy{E}\psi(1,2)$, then the exchanged function $\psi(2,1)$ also solves the eigenvalue equation at $\energy{E}$. Choose a state with definite exchange symmetry and write $\psi(1,2)=\lambda\psi(2,1)$, where $\lambda=e^{i\alpha}$. Exchanging twice gives $\lambda^2=1$, so $\lambda=+1$ for a symmetric state or $\lambda=-1$ for an antisymmetric state.

Bosons have integer spin and fermions have half-integer spin. The notebook attributes the spin–statistics theorem to Pauli and labels it a result of quantum field theory. The date written on this page is 1944, while the earlier historical outline gives about 1941.

#### Gases with interactions or internal degrees of freedom

The notebook groups two extensions under “Non-ideal gases.” One adds pair interactions $\energy{V}_{ij}(\mechanical{\vec x}_i-\mechanical{\vec x}_j)\ne0$. The other adds internal degrees of freedom, illustrated by a rotating diatomic molecule. For a single molecule with total mass $\mechanical{M}=\sum_i\mechanical{m}_i$ and center-of-mass momentum $\mechanical{\vec p}$,

$$
\energy{H}=\frac{\mechanical{p}^2}{2\mechanical{M}}+\energy{H}_{\mathrm{int}}.
$$

### PDF page 42

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

#### Monatomic gas example

If level $i$ has degeneracy $p_i$, then $j=\sum_i p_i e^{-\thermal{\beta}\energy{\epsilon}_i}$. The example takes zero electronic orbital and spin angular momentum and a nuclear spin $s_n$, giving degeneracy $2s_n+1$. With the ground energy as zero, $j\to2s_n+1$ as $\thermal{T}\to0$.

### PDF page 43

When electronic spin $s$ or orbital angular momentum $\ell$ is nonzero, the internal state count includes the associated multiplicities. The spin factor is $2s+1$, the orbital factor is $2\ell+1$, and the nuclear factor is $2s_n+1$. The sketch of $j(\thermal{T})/(2s_n+1)$ rises from the ground-multiplet degeneracy $2J+1$ toward $(2\ell+1)(2s+1)$ as higher levels within the electronic multiplet become thermally accessible.

#### Diatomic molecule

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

### PDF page 44

#### February 15, 2018 · Internal modes of diatomic molecules

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

The notebook repeats the rotational limits. At low temperature the gap makes the rotational heat capacity exponentially small. The correct leading form from the partition function is given on PDF page 43. At high temperature, replacing the rotational sum by an integral recovers the classical contribution $N\thermal{k}_{\mathrm B}$.

The heat-capacity sketch shows an exponentially suppressed contribution at low $\thermal{T}$ and a high-temperature plateau at $N\thermal{k}_{\mathrm B}$. The graph is marked “vibr.” The adjacent hydrogen estimate $\thermal{T}_0\approx85\;\unit{K}$ corresponds to the rotational scale $\energy{\hbar}^2/(2\mechanical{I}\thermal{k}_{\mathrm B})$. The notebook compares the plateau with the classical Dulong–Petit behavior, which fails at low temperatures.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Thermal activation of molecular heat capacity.png|**Fig. 10** An internal mode contributes little to heat capacity at low temperature and approaches its classical contribution as temperature rises.]]

### PDF page 45

The vibrational contribution to $\thermal{C}_V$ goes to zero as $\thermal{T}\to0$ and approaches $N\thermal{k}_{\mathrm B}$ at high temperature. The combined diatomic heat capacity has three regimes in the sketch. Translation gives $\thermal{C}_V/(N\thermal{k}_{\mathrm B})=3/2$. Activating rotation raises it to $5/2$. Activating vibration raises it to the classical $7/2$. The sketch marks a much lower temperature scale for rotation than for vibration and notes that the precise scales depend on the molecule. The references are Feynman's lectures and Pathria page 164.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Diatomic heat capacity plateaus.png|**Fig. 11** The rotational and vibrational modes raise the normalized heat capacity in separate temperature ranges.]]

#### Adiabatic exponent

For a temperature range in which $\thermal{C}_V$ is constant, define $\thermal{\gamma}$ by $\thermal{C}_V/(N\thermal{k}_{\mathrm B})=1/(\thermal{\gamma}-1)$. This is $\thermal{\gamma}=\thermal{C}_P/\thermal{C}_V$ for an ideal gas. Along a reversible adiabat, $\Delta\thermal{S}=0$ and $\thermal{C}_Vd\thermal{T}=-\mechanical{P}\,d\mechanical{V}$. Combining with the ideal gas law gives

$$
\mechanical{P}\mechanical{V}^{\thermal{\gamma}}=\text{constant}.
$$

The notebook notes that a polytropic equation of state is often used in stellar structure.

#### Fermi and Bose distributions at low and high temperature

The page returns to $\langle n_i\rangle=[e^{\thermal{\beta}(\energy{\epsilon}_i-\energy{\mu})}\pm1]^{-1}$ with the plus sign for fermions and the minus sign for bosons. It lists quantities to compute next from $\Xi$, including mean particle count or density, mean energy, energy fluctuations, heat capacity, and the pressure–volume relation.

### PDF page 46

#### Density of an ideal quantum gas

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

### PDF page 47

#### Pressure and mean energy of an ideal quantum gas

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

### PDF page 48

#### February 20, 2018 · High- and low-temperature limits

The lecture returns to the number density, energy per particle, and pressure obtained from $\Xi$ and $\energy{\Omega}$. It considers the high-temperature or low-density limit first, then the low-temperature or high-density limit, including the Fermi energy and Bose condensation.

#### Expansion at small fugacity

For the nonrelativistic dispersion $\energy{\epsilon}=\mechanical{p}^2/(2\mechanical{m})$, use the grand-potential integral of PDF page 47. With $x=\thermal{\beta}\energy{\epsilon}$ and $z=e^{\thermal{\beta}\energy{\mu}}\ll1$, expand the occupation factor.

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

### PDF page 49

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

### PDF page 50

#### Degenerate Fermi gas at zero temperature

The notes cite Pathria chapter 8 and Feynman page 34. At $\thermal{T}=0$ the occupation is a step at $\energy{E}=\energy{\mu}=\energy{E}_{\mathrm F}$ in the continuum description. One sketch shows paired spin occupations in the filled levels, and the notes stress that the Fermi energy is an energy scale. With spin degeneracy $g=2s+1$, the occupied momentum states fill the ball of radius $\mechanical{p}_{\mathrm F}$.

$$
N=\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}
\int d^3\mechanical{\vec p}\,\Theta(\mechanical{p}_{\mathrm F}-|\mechanical{\vec p}|)
=\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}\frac{4\pi}{3}\mechanical{p}_{\mathrm F}^3.
$$

The note “Next: $T\ne0$” appears before this integral, but the step function and resulting boxed values use $\thermal{T}=0$. The handwritten volume also has an apparent square where the ball volume requires a cube. Solving for the Fermi momentum and energy gives

$$
\mechanical{p}_{\mathrm F}=\energy{\hbar}\left(\frac{6\pi^2n}{g}\right)^{1/3},
\qquad
\energy{E}_{\mathrm F}
=\frac{\mechanical{p}_{\mathrm F}^2}{2\mechanical{m}}
=\frac{\energy{\hbar}^2}{2\mechanical{m}}\left(\frac{6\pi^2n}{g}\right)^{2/3}.
$$

Integrate the one-particle energy over the same occupied ball.

$$
\langle\energy{E}\rangle
=\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}\frac{4\pi}{2\mechanical{m}}
\int_0^{\mechanical{p}_{\mathrm F}}\mechanical{p}^4\,d\mechanical{p}
=\frac35N\energy{E}_{\mathrm F}.
$$

Thus the mean energy per particle is $3\energy{E}_{\mathrm F}/5$. The nonrelativistic relation $\mechanical{P}\mechanical{V}=\tfrac23\langle\energy{E}\rangle$ then yields the Fermi degeneracy pressure,

$$
\mechanical{P}=\frac25n\energy{E}_{\mathrm F}
=\frac25\frac{\energy{\hbar}^2}{2\mechanical{m}}
\left(\frac{6\pi^2}{g}\right)^{2/3}n^{5/3}.
$$

The short handwritten intermediate pressure box omits $\energy{E}_{\mathrm F}$, which is present in the expanded expression. **Exercise.** Repeat the counting and thermodynamic calculation for $\energy{\epsilon}=\mechanical{c}|\mechanical{\vec p}|$ in the ultrarelativistic case.

### PDF page 51

**Exercise.** Check the nonrelativistic degeneracy-pressure formula for electrons in a neutron star. The notebook says to use the ultrarelativistic expression instead and anticipates a density exponent of $4/3$ in place of $5/3$.

#### Fermi gas at nonzero temperature

The sketch shows the Fermi occupation smoothed around $\energy{\mu}$. For the particle count, use

$$
N=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{\sqrt{\energy{\epsilon}}\,d\energy{\epsilon}}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}+1}.
$$

The number and energy integrals have the general form

$$
I=\int_0^\infty\frac{f(\energy{\epsilon})}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}+1}\,d\energy{\epsilon},
$$

with $f(\energy{\epsilon})=\sqrt{\energy{\epsilon}}$ or $\energy{\epsilon}^{3/2}$, respectively. The page mentions the polylogarithm. For the low-temperature expansion, set $x=\thermal{\beta}(\energy{\epsilon}-\energy{\mu})$, written $z$ in the notebook. Then $d\energy{\epsilon}=\thermal{k}_{\mathrm B}\thermal{T}\,dx$ and $\energy{\epsilon}=\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x$. Split the integral at $x=0$ and reflect the negative part to positive $x$.

$$
\begin{aligned}
I
&=\thermal{k}_{\mathrm B}\thermal{T}\int_{-\thermal{\beta}\energy{\mu}}^\infty
\frac{f(\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx\\
&=\thermal{k}_{\mathrm B}\thermal{T}\int_0^{\thermal{\beta}\energy{\mu}}
\frac{f(\energy{\mu}-\thermal{k}_{\mathrm B}\thermal{T}x)}{e^{-x}+1}\,dx
+\thermal{k}_{\mathrm B}\thermal{T}\int_0^\infty
\frac{f(\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx.
\end{aligned}
$$

The signs in the arguments of $f$ differ on the two sides. The identity used on the next page is $(e^{-x}+1)^{-1}=1-(e^x+1)^{-1}$.

### PDF page 52

#### February 22, 2018 · Sommerfeld expansion

The sketch overlays the zero-temperature step and the rounded finite-temperature Fermi distribution. For $\energy{\mu}>0$, use the identity from the previous page to split $I$ into three integrals.

$$
\begin{aligned}
I={}&\thermal{k}_{\mathrm B}\thermal{T}\int_0^{\thermal{\beta}\energy{\mu}}
f(\energy{\mu}-\thermal{k}_{\mathrm B}\thermal{T}x)\,dx\\
&-\thermal{k}_{\mathrm B}\thermal{T}\int_0^{\thermal{\beta}\energy{\mu}}
\frac{f(\energy{\mu}-\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx\\
&+\thermal{k}_{\mathrm B}\thermal{T}\int_0^\infty
\frac{f(\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx.
\end{aligned}
$$

The first term equals $\int_0^{\energy{\mu}} f(\energy{\epsilon})\,d\energy{\epsilon}$. For $\thermal{\beta}\energy{\mu}\gg1$, the corrections are dominated by $x$ of order one. Expand $f$ about $\energy{\mu}$ and extend the upper limit of the resulting moment integrals to infinity, with exponentially small tail terms of order $e^{-\thermal{\beta}\energy{\mu}}$ up to powers. Even Taylor terms cancel between the two corrections. The resulting expansion is

$$
I=\int_0^{\energy{\mu}}f(\energy{\epsilon})\,d\energy{\epsilon}
+\frac{\pi^2}{6}(\thermal{k}_{\mathrm B}\thermal{T})^2f'(\energy{\mu})
+\frac{7\pi^4}{360}(\thermal{k}_{\mathrm B}\thermal{T})^4f'''(\energy{\mu})
+O((\thermal{k}_{\mathrm B}\thermal{T})^6).
$$

The handwritten quartic term shows two primes. The cubic Taylor term of the difference requires $f'''$. The references listed are Landau page 155 and the integral table in Pathria's appendix.

The notes apply the formula first to particle count, taking $f(\energy{\epsilon})=\sqrt{\energy{\epsilon}}$. Its integral becomes

$$
I=\frac23\energy{\mu}^{3/2}
\left[1+\frac{\pi^2}{8}\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\mu}}\right)^2+\cdots\right].
$$

Multiply by $g\mechanical{V}(2\mechanical{m})^{3/2}/(4\pi^2\energy{\hbar}^3)$ to recover $N$. The page points next to expansions for energy and pressure.

### PDF page 53

At fixed $N$ and $\mechanical{V}$, invert the low-temperature particle-count expression. To quadratic order, replace $\energy{\mu}$ in the correction by its leading value $\energy{E}_{\mathrm F}$. With $x=\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F}$,

$$
\energy{\mu}=\energy{E}_{\mathrm F}\left[1-\frac{\pi^2}{12}x^2+O(x^4)\right].
$$

The prefactor $\energy{E}_{\mathrm F}=\frac{\energy{\hbar}^2}{2\mechanical{m}}(6\pi^2n/g)^{2/3}$ depends on density. For the energy integral take $f(\energy{\epsilon})=\energy{\epsilon}^{3/2}$.

$$
\begin{aligned}
\langle\energy{E}\rangle
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{\energy{\epsilon}^{3/2}\,d\energy{\epsilon}}
{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}+1}\\
&\approx\frac25\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\energy{\mu}^{5/2}
\left[1+\frac{5\pi^2}{8}\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\mu}}\right)^2+\cdots\right].
\end{aligned}
$$

Eliminating $\energy{\mu}$ with the fixed-density expansion gives

$$
\langle\energy{E}\rangle=\frac35N\energy{E}_{\mathrm F}
\left[1+\frac{5\pi^2}{12}x^2+O(x^4)\right].
$$

The prefactor is the zero-temperature energy. Using $\energy{\Omega}=-\mechanical{P}\mechanical{V}=-(2/3)\langle\energy{E}\rangle$, the low-temperature degeneracy pressure is

$$
\mechanical{P}=\frac25n\energy{E}_{\mathrm F}
\left[1+\frac{5\pi^2}{12}x^2+O(x^4)\right].
$$

The notebook gives $\thermal{k}_{\mathrm B}\thermal{T}\approx0.024\;\unit{eV}$ at room temperature and asks for the Fermi energy of copper. At fixed $N,\mechanical{V}$, differentiating the energy yields

$$
\thermal{C}_V=N\thermal{k}_{\mathrm B}\left[\frac{\pi^2}{2}x+O(x^3)\right],
$$

so the low-temperature electronic heat capacity is linear in temperature.

### PDF page 54

Let $x=\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F}$ as on the preceding page. The low-temperature Helmholtz free energy and entropy are

$$
\begin{aligned}
\energy{A}&=\frac35N\energy{E}_{\mathrm F}-\frac{\pi^2}{4}N\energy{E}_{\mathrm F}x^2+\cdots,\\
\thermal{S}&=\frac{\langle\energy{E}\rangle-\energy{A}}{\thermal{T}}
=\frac{\pi^2}{2}N\thermal{k}_{\mathrm B}x+\cdots.
\end{aligned}
$$

#### Numerical examples

**Metals.** At room temperature $\thermal{T}\approx300\;\unit{K}$ and $\thermal{k}_{\mathrm B}\thermal{T}\approx0.026\;\unit{eV}$. The notebook describes a Fermi energy of a few electronvolts as typical and gives the following values, with a reference to Pathria page 209.

| Metal | Fermi energy |
| --- | --- |
| Sodium (Na) | $3.24\;\unit{eV}$ |
| Silver (Ag) | $5.49\;\unit{eV}$ |
| Copper (Cu) | $7.00\;\unit{eV}$ |
| Gold (Au) | $5.53\;\unit{eV}$ |
| Iron (Fe) | $11.1\;\unit{eV}$ |
| Aluminum (Al) | $11.7\;\unit{eV}$ |

The gold symbol is overwritten in the handwriting. For copper, $(\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F})^2\approx1.38\times10^{-5}$, so the zero-temperature result is a good approximation for quantities with this leading relative correction.

**White dwarfs.** A solar mass corresponds to about $10^{57}$ nucleons. For the example, the notebook takes a temperature of order $10^4\;\unit{K}$ from luminosity and an electron density of order $10^{36}\;\unit{m^{-3}}$. The thermal energy is of order $\unit{eV}$. The exercise estimates $\energy{E}_{\mathrm F}\approx3\times10^5\;\unit{eV}=0.3\;\unit{MeV}$, so the ratio $\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F}$ is very small, written as order $10^{-5}$. Sirius B is named as a white dwarf example. A margin comment asks what changes when the electrons cannot be treated as a free Fermi gas.

### PDF page 55

**Neutron stars.** The notes mention Chandrasekhar and use $e^-+p^+\to n^0$ as shorthand for electron capture. Neutrons are fermions and contribute degeneracy pressure. The page gives $\thermal{k}_{\mathrm B}\thermal{T}\approx1\;\unit{MeV}$, a nuclear-scale number density of order one nucleon per cubic femtometer, and $\energy{E}_{\mathrm F}\sim30$–$100\;\unit{MeV}$. Since $1\;\unit{fm}=10^{-13}\;\unit{cm}$, one nucleon per cubic femtometer corresponds to $10^{39}\;\unit{cm^{-3}}$. The handwritten power in the centimeter-based density differs from this conversion.

The source gives a mass of order $1.2$–$2$ solar masses and a radius of about $10\;\unit{km}$. A separate line appears to give $\thermal{k}_{\mathrm B}\thermal{T}\sim10$–$10{,}000\;\unit{MeV}$ without specifying the conditions, alongside the earlier $1\;\unit{MeV}$ estimate. The notes emphasize that neutrons interact strongly.

**Nuclei.** The notebook again takes $\thermal{k}_{\mathrm B}\thermal{T}\sim1\;\unit{MeV}$ and a nuclear-scale density, with $\energy{E}_{\mathrm F}\sim30\;\unit{MeV}$. It gives a rough range $10^{-2}$ to $10^{-4}$ for $(\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F})^2$.

#### Ultrarelativistic degenerate Fermi gas

The nonrelativistic kinetic energy is $\mechanical{p}^2/(2\mechanical{m})$. In the relativistic case,

$$
\energy{\epsilon}(\mechanical{\vec p})
=\sqrt{\mechanical{p}^2\mechanical{c}^2+\mechanical{m}^2\mechanical{c}^4}
\approx\mechanical{c}|\mechanical{\vec p}|
$$

when the rest-energy term is negligible. The phase-space state count is unchanged. At zero temperature, the momentum cutoff is $\energy{E}_{\mathrm F}/\mechanical{c}$, so

$$
N=\frac{g\mechanical{V}}{6\pi^2\energy{\hbar}^3}
\left(\frac{\energy{E}_{\mathrm F}}{\mechanical{c}}\right)^3,\qquad
\energy{E}_{\mathrm F}
=\energy{\hbar}\mechanical{c}\left(\frac{6\pi^2}{g}\right)^{1/3}
\left(\frac{N}{\mechanical{V}}\right)^{1/3}.
$$

The mass drops out. Integrating $\mechanical{c}\mechanical{p}$ over the occupied ball gives $\langle\energy{E}\rangle=\tfrac34N\energy{E}_{\mathrm F}$. The nonrelativistic factor was $3/5$.

### PDF page 56

For an ultrarelativistic Fermi gas,

$$
\mechanical{P}\mechanical{V}=\frac{\energy{E}}{3}.
$$

#### Degenerate Bose gas

For nonrelativistic bosons, the mean occupation and dispersion are

$$
n(\energy{\epsilon})=\frac{1}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}-1},
\qquad
\energy{\epsilon}=\frac{\mechanical{p}^2}{2\mechanical{m}}.
$$

The $-1$ in the denominator changes the low-energy occupation. Counting states in a spherical shell gives

$$
\begin{aligned}
\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}\,d^3\mechanical{p}
&\longrightarrow \frac{4\pi g\mechanical{V}}{(2\pi\energy{\hbar})^3}\mechanical{p}^2\,d\mechanical{p} \\
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}\sqrt{\energy{\epsilon}}\,d\energy{\epsilon}.
\end{aligned}
$$

With $x=\thermal{\beta}\energy{\epsilon}$, the continuum particle count is

$$
\begin{aligned}
N_{\mathrm{ex}}
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{\sqrt{\energy{\epsilon}}\,d\energy{\epsilon}}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}-1} \\
&=\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{\sqrt{x}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}-1}.
\end{aligned}
$$

#### Lecture 3/1/18

The energy-level sketches contrast the filled low-energy levels of a Fermi gas with the Bose case. The fermion sketch shows spin pairs through the Fermi energy. In the boson sketch, several particles occupy the ground state and one occupies an excited state. The lecture asks at what temperature a macroscopic ground-state population appears.

### PDF page 57

#### Critical temperature of the Bose gas

The page repeats the nonrelativistic state count and continuum integral from page 56 and cites Pathria, page 157. Choose the ground-state energy to be zero. Its occupation is

$$
N_0=n(0)=\frac{1}{e^{-\thermal{\beta}\energy{\mu}}-1}.
$$

When nearly all $N$ particles occupy the ground state, $e^{-\thermal{\beta}\energy{\mu}}-1\approx 1/N$. Hence

$$
\energy{\mu}\approx-\thermal{k}_{\mathrm B}\thermal{T}\ln\left(1+\frac{1}{N}\right)
\approx-\frac{\thermal{k}_{\mathrm B}\thermal{T}}{N}.
$$

The chemical potential approaches zero from below as $\thermal{T}\to 0$. At the critical temperature $\thermal{T}_{\mathrm c}$ in the thermodynamic limit, $\thermal{\beta}\energy{\mu}=0$. The excited states alone then accommodate $N$ particles,

$$
N=\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c})^{3/2}}{4\pi^2\energy{\hbar}^3}I,
\qquad
I=\int_0^\infty\frac{\sqrt{x}\,dx}{e^x-1}.
$$

The integral follows from the gamma function and the Riemann zeta function,

$$
\begin{aligned}
\int_0^\infty\frac{x^{s-1}\,dx}{e^x-1}&=\Gamma(s)\zeta(s),&
\zeta(s)&=\sum_{j=1}^\infty\frac{1}{j^s}\qquad(s>1),\\
I&=\Gamma\left(\frac32\right)\zeta\left(\frac32\right)
=\frac{\sqrt{\pi}}{2}\zeta\left(\frac32\right)\approx 2.315.
\end{aligned}
$$

Solving the state-count equation gives

$$
\boxed{\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c}
=\frac{\energy{\hbar}^2}{2\mechanical{m}}\left(\frac{N}{\mechanical{V}}\right)^{2/3}
\left(\frac{4\pi^2}{gI}\right)^{2/3}.}
$$

The factors $4\pi^2$ and $g$ in the boxed result follow from the state count above. The grand canonical factor associated with particle number is $e^{+\thermal{\beta}\energy{\mu}N}$.

### PDF page 58

For helium, the ideal-gas calculation gives a critical temperature of roughly $3\;\unit{K}$. The lecture records an experimental value of approximately $2.19\;\unit{K}$ and attributes the comparison to Fritz London. The handwritten date reads 1928.

#### Counting the ground state separately

The ground state can hold a macroscopic population. Include its occupation explicitly and use the continuum integral for the excited states,

$$
N=N_0+\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{\sqrt{x}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}-1}.
$$

Below $\thermal{T}_{\mathrm c}$, set $\energy{\mu}=0$ in the excited-state integral in the thermodynamic limit. Its value is proportional to $\thermal{T}^{3/2}$ and equals $N$ at $\thermal{T}_{\mathrm c}$. Therefore,

$$
N_{\mathrm{ex}}=N\left(\frac{\thermal{T}}{\thermal{T}_{\mathrm c}}\right)^{3/2},
\qquad
N_0=N\left[1-\left(\frac{\thermal{T}}{\thermal{T}_{\mathrm c}}\right)^{3/2}\right].
$$

At zero temperature, all particles occupy the ground state. The margin cites Pathria, page 162.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ground and excited Bose populations.png|**Fig. 12** Ground-state fraction (blue) and excited-state fraction (red) below the critical temperature.]]

### PDF page 59

Bose condensation occurs in momentum space. The macroscopic ground-state population occupies the $\mechanical{\vec p}=0$ state.

#### Energy and heat capacity

The ground state contributes $N_0\cdot 0$ to the energy. Below $\thermal{T}_{\mathrm c}$, with $\energy{\mu}\to 0$, the excited states give

$$
\begin{aligned}
\energy{E}
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{\energy{\epsilon}^{3/2}\,d\energy{\epsilon}}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}-1}\\
&=\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T})^{3/2}\thermal{k}_{\mathrm B}\thermal{T}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{x^{3/2}\,dx}{e^x-1}.
\end{aligned}
$$

The last integral is $\Gamma(5/2)\zeta(5/2)=(3\sqrt{\pi}/4)\zeta(5/2)\approx 1.78329$. Dividing by the state count at $\thermal{T}_{\mathrm c}$ gives

$$
\energy{E}\approx 0.770\,N\thermal{k}_{\mathrm B}\thermal{T}
\left(\frac{\thermal{T}}{\thermal{T}_{\mathrm c}}\right)^{3/2},
\qquad
\thermal{C}_V=\left(\frac{\partial\energy{E}}{\partial\thermal{T}}\right)_{\mechanical{V},N}
=\frac{5\energy{E}}{2\thermal{T}}\propto\thermal{T}^{3/2}.
$$

The ideal Bose gas has a cusp at the transition and approaches the classical heat capacity $3N\thermal{k}_{\mathrm B}/2$ at high temperature. The sketch for helium labels a sharp anomaly near $2.19\;\unit{K}$ as the lambda transition. The margin cites Pathria, page 165.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Bose gas and helium heat capacity.png|**Fig. 13** Heat capacity sketches for the ideal Bose gas and helium. The upper plateau corresponds to $3\thermal{k}_{\mathrm B}/2$ per particle.]]

### PDF page 60

#### Chemical potential near the Bose transition

The finite-volume estimate at $\thermal{T}_{\mathrm c}$ is

$$
|\energy{\mu}|=\frac{\energy{\hbar}^2}{2\mechanical{m}}
\left(\frac{1}{\mechanical{V}}\right)^{2/3}
\left(\frac{4\pi}{g}\right)^{2/3}
\longrightarrow 0
\qquad(\mechanical{V}\to\infty).
$$

The sketch shows zero chemical potential up to $\thermal{T}_{\mathrm c}$ and a quadratic departure above it. Its rising curve represents the magnitude $|\energy{\mu}|\propto(\thermal{T}-\thermal{T}_{\mathrm c})^2$.

#### Photons and phonons

A photon has energy $\energy{\epsilon}_{p}=\mechanical{c}|\mechanical{\vec p}|=\energy{\hbar}\signal{\omega}$, with arbitrarily low energies in the continuum. The number of photons can vary at fixed energy and volume. Entropy maximization gives

$$
\left(\frac{\partial\thermal{S}}{\partial N}\right)_{\mechanical{V},\energy{E}}=-\frac{\energy{\mu}}{\thermal{T}}=0.
$$

Consequently $\energy{\mu}=0$, and the Planck occupation factor is

$$
n(\energy{\epsilon})=\frac{1}{e^{\thermal{\beta}\energy{\epsilon}}-1}
=\frac{1}{e^{\energy{\hbar}\signal{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})}-1}.
$$

For the two photon polarizations, the phase-space shell contains

$$
\begin{aligned}
d\mathcal{N}
&=\frac{g\mechanical{V}\,d^3\mechanical{p}}{(2\pi\energy{\hbar})^3}
=\frac{2\mechanical{V}}{(2\pi\energy{\hbar})^3}4\pi\mechanical{p}^2\,d\mechanical{p} \\
&=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3}\signal{\omega}^2\,d\signal{\omega},
\qquad \mechanical{p}=\frac{\energy{\hbar}\signal{\omega}}{\mechanical{c}}.
\end{aligned}
$$

The shell substitution gives $\signal{\omega}^2$ for the mode count. The extra factor of $\signal{\omega}$ appears when weighting each mode by its energy.

### PDF page 61

#### Photon number density

With $x=\thermal{\beta}\energy{\hbar}\signal{\omega}$,

$$
\begin{aligned}
N
&=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3}
\int_0^\infty\frac{\signal{\omega}^2\,d\signal{\omega}}{e^{\thermal{\beta}\energy{\hbar}\signal{\omega}}-1}\\
&=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3(\thermal{\beta}\energy{\hbar})^3}
\int_0^\infty\frac{x^2\,dx}{e^x-1},\\
\frac{N}{\mechanical{V}}
&=\frac{\Gamma(3)\zeta(3)}{\pi^2}
\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\hbar}\mechanical{c}}\right)^3
\approx 0.2436\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\hbar}\mechanical{c}}\right)^3.
\end{aligned}
$$

Ordinary light beams pass through each other with negligible interaction. The notebook sketches a photon scattering process through an electron loop. The amplitude scales as the fourth power of the elementary charge and hence as $\alpha^2$, where $\alpha$ is the fine-structure constant. The probability scales as $\alpha^4$.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Photon scattering box diagram.png|**Fig. 14** Electron-loop box diagram for photon–photon scattering. Wavy lines represent photons.]]

#### Mean energy in a frequency interval

Multiply the mode count by the mean occupation and the energy per photon,

$$
d\energy{E}
=\energy{\hbar}\signal{\omega}\,n(\signal{\omega})\,d\mathcal{N}
=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3}
\frac{\energy{\hbar}\signal{\omega}^3}{e^{\energy{\hbar}\signal{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})}-1}\,d\signal{\omega}.
$$

When $\energy{\hbar}\signal{\omega}\ll\thermal{k}_{\mathrm B}\thermal{T}$, the mean energy per mode approaches the equipartition value $\thermal{k}_{\mathrm B}\thermal{T}$. When $\energy{\hbar}\signal{\omega}\gg\thermal{k}_{\mathrm B}\thermal{T}$, the spectrum falls exponentially.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Planck spectrum peak.png|**Fig. 15** Planck spectrum in the dimensionless frequency $x=\energy{\hbar}\signal{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})$. The maximum of $x^3/(e^x-1)$ lies near $x=2.822$.]]

### PDF page 62

#### Lecture 3/6/18

The photon dispersion is $\energy{E}=\mechanical{c}|\mechanical{\vec p}|$, and $\energy{\mu}=0$. Integrate the Planck spectrum from page 61, using $x=\thermal{\beta}\energy{\hbar}\signal{\omega}$,

$$
\begin{aligned}
\langle\energy{E}\rangle
&=\frac{\mechanical{V}}{\pi^2(\energy{\hbar}\mechanical{c})^3\thermal{\beta}^4}
\int_0^\infty\frac{x^3\,dx}{e^x-1} \\
&=\frac{\pi^2\mechanical{V}(\thermal{k}_{\mathrm B}\thermal{T})^4}{15(\energy{\hbar}\mechanical{c})^3}
=\frac{4\thermal{\sigma}\mechanical{V}}{\mechanical{c}}\thermal{T}^4.
\end{aligned}
$$

The integral is $\pi^4/15$. Here $\thermal{\sigma}$ is the Stefan–Boltzmann constant. The margin gives the dates 1879 and 1884.

The grand potential equals the Helmholtz free energy for this gas. Integration by parts gives

$$
\begin{aligned}
\energy{\Omega}
&=\energy{A}-\energy{\mu}N
=\thermal{k}_{\mathrm B}\thermal{T}\int\ln(1-e^{-\thermal{\beta}\energy{\hbar}\signal{\omega}})\,d\mathcal{N} \\
&=\frac{\thermal{k}_{\mathrm B}\thermal{T}\mechanical{V}}{\pi^2\mechanical{c}^3}
\int_0^\infty\signal{\omega}^2\ln(1-e^{-\thermal{\beta}\energy{\hbar}\signal{\omega}})\,d\signal{\omega} \\
&=-\frac{\mechanical{V}}{3\pi^2\mechanical{c}^3}
\int_0^\infty\frac{\energy{\hbar}\signal{\omega}^3\,d\signal{\omega}}{e^{\thermal{\beta}\energy{\hbar}\signal{\omega}}-1}
=-\frac{\langle\energy{E}\rangle}{3}.
\end{aligned}
$$

Using $\energy{\Omega}=-\mechanical{P}\mechanical{V}$ and $\energy{A}=\langle\energy{E}\rangle-\thermal{T}\thermal{S}$,

$$
\mechanical{P}=\frac{4\thermal{\sigma}}{3\mechanical{c}}\thermal{T}^4,
\qquad
\thermal{S}=\frac{16\thermal{\sigma}\mechanical{V}}{3\mechanical{c}}\thermal{T}^3.
$$

### PDF page 63

For adiabatic expansion of a photon gas, its entropy is constant, so $\mechanical{V}\thermal{T}^3$ is constant. Combined with $\mechanical{P}\propto\thermal{T}^4$, this gives

$$
\mechanical{P}\mechanical{V}^{4/3}=\text{constant}.
$$

This is a polytropic relation of the form $\mechanical{P}\mechanical{V}^{\thermal{\gamma}}=\text{constant}$.

#### Stellar structure case study

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

### PDF page 64

#### Stellar fusion and pressure balance

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

### PDF page 65

#### Lecture 3/8/18. Stellar structure

The uniform-density model uses $\mechanical{M}=4\pi\mechanical{R}^3\mechanical{\rho}/3$ and $Y_e=N_e/N\approx 1/2$. The magnitude of the gravitational pressure scales as $\mechanical{V}^{-4/3}$, and the nonrelativistic electron degeneracy pressure scales as $\mechanical{V}^{-5/3}$. Equilibrium requires $|\mechanical{P}_g|=\mechanical{P}_{\mathrm{deg}}$.

The first finite-temperature correction to the zero-temperature Fermi gas result has relative order $(\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F})^2$. The Fermi energy is calculated from the electron density. When this ratio is small, the zero-temperature pressure is a good approximation.

Solving for the equilibrium radius with the pressures on page 63 gives

$$
\mechanical{R}_{\mathrm{eq}}
=\left(\frac{9\pi}{4}\right)^{2/3}
\frac{\energy{\hbar}^2Y_e^{5/3}}{\mechanical{G}\mechanical{m}_e\mechanical{m}_N^2}N^{-1/3}.
$$

The boxed expression in the notebook uses the numerical factor $(81\pi^2/128)^{1/3}$. Substitution of $Y_e=1/2$ in the pressure balance above gives $(81\pi^2/512)^{1/3}$. For a solar mass, $N\sim10^{57}$, and the lecture estimates a radius on the order of $10^4\;\unit{km}$. Electron degeneracy supports a white dwarf, making it a macroscopic example of quantum mechanics.

#### Relativistic case

For ultrarelativistic electrons, use $\energy{\epsilon}=\mechanical{c}|\mechanical{\vec p}|$ in place of the nonrelativistic dispersion.

### PDF page 66

At zero temperature, fill both spin states for each wavevector inside the Fermi sphere. Write $\mechanical{p}_{\mathrm F}=\energy{\hbar}\signal{k}_F$ for the Fermi momentum. The ultrarelativistic electron energy is

$$
\energy{E}_{\mathrm{Fermi}}=2\mechanical{V}
\int_{|\signal{\vec k}|\le\signal{k}_F}\frac{d^3\signal{k}}{(2\pi)^3}
\,\energy{\hbar}\mechanical{c}|\signal{\vec k}|
=\frac{\mechanical{V}\mechanical{c}\mechanical{p}_{\mathrm F}^4}{4\pi^2\energy{\hbar}^3}.
$$

With fixed $Y_e$, the Fermi momentum scales as $\energy{\hbar}(N/\mechanical{V})^{1/3}$. Thus $\energy{E}_{\mathrm{Fermi}}\propto N^{4/3}\mechanical{V}^{-1/3}$, and $-\partial\energy{E}_{\mathrm{Fermi}}/\partial\mechanical{V}\propto\mechanical{V}^{-4/3}$.

#### Instability at small radius

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

### PDF page 67

#### Chandrasekhar limit and neutron stars

In natural units, $\energy{\hbar}=\mechanical{c}=1$ and $\mechanical{m}_N\sim1\;\unit{GeV}$. The handwritten estimate gives $\mechanical{G}^{-1}\sim(10^{18}\;\unit{GeV})^2$, with its next line using $10^{19}\;\unit{GeV}$ to obtain $N\sim10^{57}$. This is comparable to the number of nucleons in the Sun.

The lecture identifies the critical white-dwarf mass with the Chandrasekhar limit and gives the date 1931. It records $1.26\,\mechanical{M}_\odot$ and a revised value of $1.44\,\mechanical{M}_\odot$.

The lecture sketches a progression from a star through a white dwarf to a neutron star and gives the electron capture reaction

$$
e^-+p\to n+\nu_e,
$$

where $\nu_e$ is an electron neutrino. In the simple degeneracy estimate for a neutron star, take the neutron number to be approximately the nucleon number and replace the electron mass by the nucleon mass. With $N_e$ replaced by $N$ in the model on page 65, this gives

$$
\mechanical{R}\sim
\left(\frac{81\pi^2}{16}\right)^{1/3}
\frac{\energy{\hbar}^2}{\mechanical{G}\mechanical{m}_N^3}\,N^{-1/3}.
$$

The prefactor exponent $1/3$ follows from the pressure-balance model. The notebook estimates $\mechanical{R}\sim10\;\unit{km}$ and cites Oppenheimer and Volkoff, 1939.

### PDF page 68

#### Lecture 3/15/2018. Ising model, continued

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

### PDF page 69

In the microcanonical ensemble, count states on the surface $\energy{E}=\energy{H}(\mechanical{p},\mechanical{q})$ for each choice of the external parameters. A canonical description can likewise follow a sequence of equilibrium states at different temperatures. Along a reversible adiabatic path,

$$
d\thermal{S}
=\left(\frac{\partial\thermal{S}}{\partial\energy{E}}\right)_{\mechanical{V},N}d\energy{E}
+\left(\frac{\partial\thermal{S}}{\partial\mechanical{V}}\right)_{\energy{E},N}d\mechanical{V}
+\left(\frac{\partial\thermal{S}}{\partial N}\right)_{\energy{E},\mechanical{V}}dN
=0.
$$

The lecture notes that either ensemble can describe the equilibrium states along such a path.

#### Mean-field approximation to the Ising model

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

### PDF page 70

#### Internal energy and heat capacity of the Ising model

The mean-field internal energy at zero applied field is given as an exercise,

$$
\energy{U}(\thermal{T})=-N\frac{\energy{J}q}{2}\bar{\sigma}^{\,2}.
$$

The heat capacity is $\thermal{C}_V=(\partial\energy{U}/\partial\thermal{T})_{\mechanical{V},N}$. With the critical temperature and near-critical spin on page 69, the ordered-side limit is $3N\thermal{k}_{\mathrm B}$. The mean-field energy is zero above $\thermal{T}_{\mathrm c}$, so the heat capacity drops to zero there.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ising heat capacity.png|**Fig. 17** Mean-field heat capacity with a jump at the transition.]]

#### Magnetic susceptibility

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

#### Spontaneous symmetry breaking

At $\thermal{T}\to0$ the sketches show an array of all up spins or all down spins. The zero-field Hamiltonian has the symmetry $\sigma_i\mapsto-\sigma_i$ for all sites, and selecting either ordered configuration breaks that symmetry spontaneously.

### PDF page 71

At low nonzero temperature, small islands of reversed spins form in an otherwise ordered region. As $\thermal{T}\to\thermal{T}_{\mathrm c}$, the lecture describes islands of both orientations at many sizes, illustrating scale invariance.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ising spin domains.png|**Fig. 19** A small reversed-spin domain at low temperature and a larger domain near the critical temperature.]]

At high temperature, $\thermal{\beta}\to0$ and $e^{-\thermal{\beta}\energy{H}}\to1$. All configurations have the same weight in that limit, so the spin orientations are random. On cooling toward $\thermal{T}_{\mathrm c}$ from above, correlated islands begin to form again. The lecture contrasts the difficulty of an exact solution in three dimensions with the one-dimensional calculation below.

#### One-dimensional Ising model

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

### PDF page 72

#### Transfer matrix

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

### PDF page 73

#### Ordering in one and two dimensions

The one-dimensional nearest-neighbor Ising model has zero spontaneous magnetization at every positive temperature. The disordered phase persists down to zero temperature from above. Differentiating the mean spin on page 72 gives the zero-field susceptibility per site, measured with respect to the energy parameter $\energy{h}$,

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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Net force in the classical equation of motion. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of a particle. |
| $\mechanical{\vec a}$ | $\unit{m\,s^{-2}}$ | Acceleration | Time rate of change of velocity. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\psi$ | — | Wavefunction | Quantum state amplitude with units that depend on the representation. |
| $\energy{\hat H}$ | $\unit{J}$ | Hamiltonian | Energy operator that determines quantum time evolution. |
| $t$ | $\unit{s}$ | Time | Time coordinate for the dynamics. |
| $N$ | 1 | Particle count | Number of atoms or molecules. |
| $\energy{E}_k$ | $\unit{J}$ | Kinetic energy | Total kinetic energy of the particles. |
| $P(\energy{E}_k)$ | — | Kinetic energy distribution | Probability distribution for the total kinetic energy. |
| $\energy{\sigma}$ | $\unit{J}$ | Kinetic energy standard deviation | Width of the energy distribution. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates absolute temperature to a microscopic energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature of the system or reservoir. |
| $\energy{U}$ | $\unit{J}$ | Internal energy | Total microscopic energy of the system. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\thermal{Q}$, $\thermal{Q}_{\mathrm{rev}}$ | $\unit{J}$ | Heat | Energy transferred by heating, with the subscript denoting a reversible path. |
| $\energy{W}$ | $\unit{J}$ | Work | Energy transferred by work, positive when done on the system. |
| $\energy{G}$ | $\unit{J}$ | Gibbs free energy | Thermodynamic potential whose change determines the spontaneous reaction direction at fixed temperature and pressure. |
| $\dot{\thermal{S}}_{\mathrm{univ}}$ | $\unit{J\,K^{-1}\,s^{-1}}$ | Entropy production rate | Rate of increase of the total entropy. |
| $\mechanical{\vec r}$, $\mechanical{\vec x}$ | $\unit{m}$ | Position | Spatial position on a particle trajectory. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $N_A$, $N_B$ | 1 | Species populations | Numbers of particles of the two chemical species. |
| $\dot{\energy{U}}$ | $\unit{J\,s^{-1}}$ | Internal energy rate | Rate of change of energy stored in a system. |
| $\mechanical{x}$, $\mechanical{h}$ | $\unit{m}$ | Position and height | Coordinate along the displacement and elevation reached in the lifting example. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Magnitude of the local acceleration due to gravity. |
| $\mechanical{A}$ | $\unit{m^2}$ | Piston area | Area over which the gas pressure acts. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\thermal{R}$ | $\unit{J\,mol^{-1}\,K^{-1}}$ | Molar gas constant | Proportionality constant in the ideal gas law. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{H}$ | $\unit{J}$ | Enthalpy or Hamiltonian | Internal energy plus the pressure–volume product in thermodynamics. In mechanics and ensemble weights, the Hamiltonian. |
| $W$ | 1 | Multiplicity | Number of microstates compatible with the macrostate. |
| $\energy{u}$ | $\unit{J}$ per particle or $\unit{J\,mol^{-1}}$ | Internal energy per unit amount | Internal energy divided by the particle count or mole amount. |
| $\mechanical{v}$ | $\unit{m^3}$ per particle or $\unit{m^3\,mol^{-1}}$ | Volume per unit amount | Volume divided by the particle count or mole amount. |
| $\thermal{s}$ | $\unit{J\,K^{-1}}$ per particle or $\unit{J\,K^{-1}\,mol^{-1}}$ | Entropy per unit amount | Entropy divided by the particle count or mole amount. |
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
| $\hat\rho$ | 1 | Density matrix | Quantum statistical state with trace equal to one. |
| $P_i$ | 1 | Microstate probability | Probability of occupying state $i$ in the ensemble. |
| $g(\energy{E})$ | $\unit{J^{-1}}$ | Density of states | Number of states per unit energy in the continuum approximation. |
| $\rho(\mechanical{x},\mechanical{x}')$, $\rho_u(\mechanical{x},\mechanical{x}';\thermal{\beta})$ | $\unit{m^{-1}}$ in one dimension | Position-space density kernels | Matrix elements of the normalized state or the unnormalized thermal operator. |
| $\mathcal{S}_{\mathrm{path}}$ | $\unit{J\,s}$ | Action | Integral of the Lagrangian along a path in the quantum amplitude. |
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
| $\Xi$ | 1 | Grand partition function | Normalizes the weights over energy states and particle numbers. |
| $\energy{\Omega}$ | $\unit{J}$ | Grand potential | Legendre transform of Helmholtz free energy with respect to particle number. |
| $\hat N$ | 1 | Number operator | Operator whose eigenvalue is the particle count in a number state. |
| $z$ | 1 | Fugacity | Exponential of the chemical potential divided by the thermal energy. |
| $\energy{E}_{\mathrm F}$ | $\unit{J}$ or $\unit{eV}$ | Fermi energy | Zero-temperature energy at the edge of the filled one-particle states. |
| $\mechanical{M}$ | $\unit{kg}$ | Molecular mass | Sum of the constituent particle masses. |
| $\energy{H}_{\mathrm{int}}$ | $\unit{J}$ | Internal Hamiltonian | Energy of the molecular degrees of freedom after separating center-of-mass motion. |
| $j$ | 1 | Internal partition function | Sum over molecular states other than translation. |
| $\thermal{C}_P$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant pressure | Heat capacity for a process at fixed pressure and composition. |
| $p_i$ | 1 | Level degeneracy | Number of distinct quantum states at the same level energy. |
| $\mechanical{\mu}$ | $\unit{kg}$ | Reduced mass | Effective mass of the relative motion of the two atoms. |
| $\mechanical{r}_0$ | $\unit{m}$ | Equilibrium bond length | Internuclear separation at the minimum of the molecular potential. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Bond force constant | Curvature of the potential near its minimum. |
| $\energy{\Delta}_{\mathrm{rot}}$ | $\unit{J}$ | First rotational gap | Energy difference between the first excited and ground rotational levels. |
| $\thermal{\gamma}$ | 1 | Adiabatic exponent | Heat-capacity ratio for the ideal gas when the heat capacities are constant. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\mechanical{p}_{\mathrm F}$ | $\unit{kg\,m\,s^{-1}}$ | Fermi momentum | Momentum magnitude at the boundary of the occupied states at zero temperature. |
| $\thermal{T}_{\mathrm c}$ | $\unit{K}$ | Critical temperature | Onset of macroscopic ground-state occupation or magnetic ordering, according to the model. |
| $N_0$, $N_{\mathrm{ex}}$ | $1$ | Ground and excited populations | Particles in the ground state and particles in all excited states, respectively. |
| $\mathcal{N}$ | $1$ | Mode count | Number of photon modes, including polarization. |
| $\alpha$ | $1$ | Fine-structure constant | Electromagnetic coupling used in the photon scattering estimate. |
| $\thermal{\sigma}$ | $\unit{W\,m^{-2}\,K^{-4}}$ | Stefan–Boltzmann constant | Coefficient of $\thermal{T}^4$ in the blackbody radiant flux. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Sets the Newtonian gravitational interaction strength. |
| $\mechanical{M}$ | $\unit{kg}$ | Stellar mass | Mass interior to a shell or total mass, as indicated by the argument. |
| $\mechanical{R}$ | $\unit{m}$ | Stellar radius | Outer cutoff in the uniform-density approximation. |
| $\energy{V}_g$ | $\unit{J}$ | Gravitational potential energy | Binding energy contribution obtained by assembling spherical shells. |
| $\mechanical{P}_g$, $\mechanical{P}_{\mathrm{deg}}$ | $\unit{Pa}$ | Gravitational and degeneracy pressure | Effective inward pressure from binding and outward pressure of a degenerate gas. |
| $Y_e$ | $1$ | Electron fraction | Number of electrons per nucleon in fully ionized matter. |
| $\signal{k}_F$ | $\unit{m^{-1}}$ | Fermi wave number | Radius of the occupied Fermi sphere in wavevector space. |
| $\mechanical{M}_\odot$ | $\unit{kg}$ | Solar mass | Reference unit for the white-dwarf critical mass. |
| $\energy{J}$ | $\unit{J}$ | Ising coupling | Energy coefficient of the neighboring-spin interaction. |
| $\energy{h}$ | $\unit{J}$ | Ising field parameter | Energy coefficient of the single-spin term. The same letter denotes Planck's constant in earlier sections. |
| $\sigma_i$, $\bar{\sigma}$ | $1$ | Ising spin and mean spin | Individual orientation and its average in the mean-field approximation. |
| $q$ | $1$ | Coordination number | Number of neighboring lattice sites. |
| $\energy{f}$ | $\unit{J}$ | Free energy per site | Thermodynamic-limit free energy of the Ising chain divided by the site count. |
| $\magnetic{\chi}_h$ | $\unit{J^{-1}}$ | Ising spin susceptibility | Change in mean spin per unit change in the field energy parameter. |
