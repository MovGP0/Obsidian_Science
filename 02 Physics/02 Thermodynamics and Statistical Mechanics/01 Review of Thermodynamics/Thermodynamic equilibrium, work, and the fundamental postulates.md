---
title: "Thermodynamic equilibrium, work, and the fundamental postulates"
---

> [!TLDR]
> Use equilibrium states and thermodynamic identities to compare quasistatic compression, work, heat, and spontaneous processes.

## Worked lecture material

##### Statistical thermodynamics with C. Martens

The first lecture distinguishes equilibrium thermodynamics from nonequilibrium thermodynamics. Classical and quantum dynamics give equations such as

$$
\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a},
\qquad
i\energy{\hbar}\frac{\partial\psi}{\partial t}=\energy{\hat H}\psi.
$$

Following the dynamics of a large number of molecules directly is difficult.

##### Molecular dynamics of liquid argon

Consider $N$ argon atoms. The total kinetic energy $\energy{E}_k$ fluctuates with time about its time average $\langle\energy{E}_k\rangle$. The notebook asks why it fluctuates. A second plot shows a narrow distribution $P(\energy{E}_k)$ with a width $\energy{\sigma}\propto\sqrt N$. At fixed temperature the mean scales with $N$.

$$
\langle\energy{E}_k\rangle=\frac32 N\thermal{k}_{\mathrm B}\thermal{T},
\qquad
\frac{\energy{\sigma}}{\langle\energy{E}_k\rangle}\sim\frac{1}{\sqrt N}.
$$

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Kinetic energy fluctuations in liquid argon.png|**Fig. 1** The time series fluctuates around its mean. The distribution underneath shows the typical scale of those fluctuations.]]

Equilibrium thermodynamics describes a system using a few relevant macroscopic averages.

##### First law of thermodynamics

The internal energy $\energy{U}$ of an isolated system is constant, $\Delta\energy{U}=0$. Applied to the universe as an isolated system, this gives $\Delta\energy{U}_{\mathrm{univ}}=0$.

##### Second law of thermodynamics

The entropy of an isolated system is nondecreasing, $\Delta\thermal{S}\geq0$, and increases for irreversible spontaneous processes. For the universe, $\Delta\thermal{S}_{\mathrm{univ}}\geq0$.

The sketch shows heat $\thermal{Q}$ entering a system at temperature $\thermal{T}$. For reversible heat transfer at constant temperature, $\Delta\thermal{S}=\thermal{Q}_{\mathrm{rev}}/\thermal{T}$. If the temperature varies along the reversible path, integrate $\delta\thermal{Q}_{\mathrm{rev}}/\thermal{T}$ between the initial and final states.

##### Heat, work, and spontaneous processes

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

The first sketch shows the Sun emitting radiation and the Earth absorbing and emitting radiation. In the idealized steady state, the energy and entropy stored on Earth are constant,

$$
\frac{d\energy{U}_{\mathrm{Earth}}}{dt}=\dot{\energy{U}}_{\mathrm{Earth}}=0,
\qquad
\frac{d\thermal{S}_{\mathrm{Earth}}}{dt}=\dot{\thermal{S}}_{\mathrm{Earth}}=0.
$$

Two sketches compare heat conduction through a fluid heated from below and cooled from above with convection in the same arrangement. The circulation cells are labeled a low-entropy structure. The notebook associates the convection case with a higher rate of entropy production $\dot{\thermal{S}}_{\mathrm{univ}}$.

##### Steady states and simple systems

The Earth sketch shows incoming radiation from the hot Sun and outgoing radiation toward colder surroundings. In this steady-state picture, $\dot{\thermal{S}}_{\mathrm{Earth}}=0$ and $\dot{\energy{U}}_{\mathrm{Earth}}=0$ while $\dot{\thermal{S}}_{\mathrm{univ}}>0$.

##### Origin of life

One sketch labels an iron-rich interior, a crust, surrounding water and carbon dioxide, and an electron arrow directed outward. A second shows protons across a lipid membrane, a protein labeled F1 ATPase, and the conversion of ADP and inorganic phosphate into ATP as protons cross the membrane.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Origin of life and proton driven ATP synthesis.png|**Fig. 3** The sketches connect the origin-of-life discussion to a membrane proton gradient that can drive ATP synthesis.]]

##### Thermodynamics of simple systems

A simple system is homogeneous and isotropic, with definite chemical composition. The model neglects electromagnetic interactions and gravitational effects. Volume $\mechanical{V}$ is the relevant mechanical variable. Internal energy $\energy{U}$ is conserved for an isolated system.

A sketch shows a box containing two species, $A$ and $B$. The independent variables $(\energy{U},\mechanical{V},N_A,N_B)$ are extensive parameters, where $N_A$ and $N_B$ count the particles of each species.

Extensive parameters scale with system size. Intensive parameters are independent of system size. The first law for a system exchanging heat and work is again $\Delta\energy{U}=\thermal{Q}+\energy{W}$.

##### Thermodynamic equilibrium

Equilibrium thermodynamics describes macroscopic systems at equilibrium. The sketch illustrates mixing by pouring Havana Club rum into a glass with cola, then shows the mixed Cuba Libre.

##### System and surroundings

A box labeled “surroundings” encloses two subsystems, $A$ and $B$, separated by a wall. The notes distinguish the mechanical constraint from the thermal constraint.

- A rigid wall keeps the volume fixed. A movable wall, such as a piston, can change the volume and transfer work.
- An adiabatic wall prevents heat transfer, $\thermal{Q}=0$. A diathermal wall permits heat to flow.

The sketches show work supplied by a motor driving a stirrer and by a tool boring a cannon. A process from state $A$ to state $B$ obeys

$$
\Delta\energy{U}=\energy{U}_B-\energy{U}_A=\thermal{Q}+\energy{W}.
$$

For displacement $d\mechanical{x}$ against the force $\mechanical{F}$ exerted by the system, the work done on it is $\delta\energy{W}=-\mechanical{F}\,d\mechanical{x}$. The example shows an object lifted from $\mechanical{x}=0$ to $\mechanical{x}=\mechanical{h}$ against gravity. With $\mechanical{F}=-\mechanical{m}\mechanical{g}$ along the upward axis, the work supplied is $\energy{W}=\mechanical{m}\mechanical{g}\mechanical{h}$.

##### Quasistatic compression of an ideal gas

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

The notes record the room as NS2-2208 and give the GitHub reference as “swflynn thermodynamics.” The discussion emphasizes identifying keywords in thermodynamics problems and explicitly stating assumptions.

##### Zeroth law of thermodynamics

If $A$ is in thermal equilibrium with $B$, and $B$ is in thermal equilibrium with $C$, then $A$ is in thermal equilibrium with $C$. The two small diagrams show the pairs $A$–$B$ and $B$–$C$.

##### State functions and pressure–volume work

The first law is $\Delta\energy{U}=\thermal{Q}+\energy{W}$. In differential form,

$$
d\energy{U}=\delta\thermal{Q}+\delta\energy{W}.
$$

The internal energy is a state function with an exact differential. Its change depends on the endpoints, which are points in the space of thermodynamic states. Heat and work depend on the path, so the notes distinguish $\thermal{Q}+\energy{W}$ from an expression in endpoint differences of heat and work.

For pressure–volume work alone, $\energy{W}=\energy{W}_{PV}=-\int\mechanical{P}_{\mathrm{ext}}\,d\mechanical{V}$. The sketch shows a downward applied force compressing a piston of area $\mechanical{A}$. In the quasistatic limit $\mechanical{P}_{\mathrm{ext}}=\mechanical{P}_{\mathrm{gas}}$. With the ideal gas equation of state, $\energy{W}=-\int(n\thermal{R}\thermal{T}/\mechanical{V})\,d\mechanical{V}$. To take $n$ and $\thermal{T}$ outside the integral, specify fixed amount and isothermal conditions. The monatomic ideal gas has $\energy{U}=\tfrac32n\thermal{R}\thermal{T}$.

##### Differentials and heat capacity

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

##### Enthalpy and a Maxwell relation

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

The margin marks the January 12, 2018 lecture as missed.

##### Isothermal and adiabatic compression

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

This is the function integrated in the adiabatic work calculation on [[#Isothermal and adiabatic compression|the section on Isothermal and adiabatic compression]].

##### The central problem of thermodynamics

Determine the new equilibrium state after removing an internal constraint from a closed composite system initially at equilibrium under that constraint. The sketch shows subsystems with parameters $(\energy{U}_1,\mechanical{V}_1,N_1)$ and $(\energy{U}_2,\mechanical{V}_2,N_2)$. A partition constrains the initial state. After it is removed, the combined system passes through nonequilibrium states and reaches a new equilibrium specified by the combined parameters $(\energy{U},\mechanical{V},N)$.

##### Postulates of thermodynamics

The notebook recalls that $\exists$ means “there exists” and $\forall$ means “for all.”

##### Postulate I

Equilibrium states exist and are uniquely characterized by the extensive parameters $\energy{U},\mechanical{V},N_1,\ldots,N_r$ for a simple system.

##### Postulate II

There is a real-valued state function $\thermal{S}(\energy{U},\mechanical{V},N_1,\ldots,N_r)$, the entropy. The equilibrium values of the unconstrained internal parameters maximize the entropy subject to the imposed constraints. The sketch shows a peaked surface with a line of fixed $y$ as an example of a constraint.

The margin introduces Gibbs free energy, $\energy{G}=\energy{H}-\thermal{T}\thermal{S}$, as the part left “after taxes.” It writes $\Delta\energy{G}=\energy{H}-\thermal{T}\Delta\thermal{S}$ and $\Delta\energy{G}_{\mathrm{univ}}>0$. The latter is an unexplained margin notation. The entropy increase for an isolated system is stated in the second law on [[#Statistical thermodynamics with C. Martens|the section on · Statistical thermodynamics with C. Martens]].

##### Postulate III

The entropy of a composite system is the sum of its parts' entropies. In the postulates, entropy is continuous, differentiable, and monotonically increasing in energy at fixed volume and composition. The first sketch shows an increasing $\thermal{S}$ as $\energy{U}$ increases. The notes give the derivative and anticipate its connection to temperature.

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

##### Postulate IV

The entropy vanishes in a state for which

$$
\left(\frac{\partial\energy{U}}{\partial\thermal{S}}\right)_{V,N}=\thermal{T}=0.
$$

The final sketch plots $\energy{U}$ against $\thermal{S}$, with the curve beginning at zero entropy and rising from a horizontal tangent.

## Source

Kyle Kabasares, *Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018)*.

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
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\thermal{T}_c$ | $\unit{K}$ | Curie temperature | Temperature of the loss of spontaneous magnetization. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $z$ | 1 | Fugacity | Exponential of the chemical potential divided by the thermal energy. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\alpha$ | $1$ | Fine-structure constant | Electromagnetic coupling used in the photon scattering estimate. |
