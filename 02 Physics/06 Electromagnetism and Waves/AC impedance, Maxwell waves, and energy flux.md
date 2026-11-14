---
title: "AC impedance, Maxwell waves, and energy flux"
---

> [!TLDR]
> Use phase and impedance in AC circuits and derive wave propagation and power flow from Maxwell’s equations.

## Worked lecture material

##### AC circuits and a sinusoidal voltage source

The sketches show the sine-wave symbol for an AC voltage source and the plate symbol for a DC battery.

##### Phasors

The time plot starts at $+\electric{\mathcal{E}}_0$, oscillates between $\pm\electric{\mathcal{E}}_0$, and marks one and two periods. The companion sketch shows a rotating phasor of length $\electric{\mathcal{E}}_0$ at angle $\signal{\omega}t$. Its projection onto the $x$ axis gives the instantaneous voltage in the convention used here.

$$
\signal{T}=\frac1{\signal{f}}=\frac{2\pi}{\signal{\omega}}.
$$

##### Resistor circuit

The source drives a single resistor with $\electric{V}_{\mathrm{source}}\cos(\signal{\omega}t)$. Lowercase letters give instantaneous values. Capital letters give maxima.

$$
\electric{v}_R=\electric{i}_R\circuit{R},\qquad
\electric{v}_R=\electric{V}_R\cos(\signal{\omega}t),\qquad
\electric{i}_R=\electric{I}_R\cos(\signal{\omega}t),\qquad
\electric{V}_R=\electric{I}_R\circuit{R}.
$$

The voltage and current of the resistor are in phase.

##### Capacitor in an AC circuit

The sketch connects a sinusoidal source across a capacitor. Current brings charge to the capacitor. For the instantaneous charge and voltage, $\electric{q}_C=\circuit{C}\electric{v}_C$. If $\electric{v}_C=\electric{V}_{C,\max}\cos(\signal{\omega}t)$, then

$$
\begin{aligned}
\electric{i}_C
&=\frac{\mathrm{d}\electric{q}_C}{\mathrm{d}t}
=\frac{\mathrm{d}}{\mathrm{d}t}\bigl(\circuit{C}\electric{V}_{C,\max}
 \cos(\signal{\omega}t)\bigr)\\
&=-\signal{\omega}\circuit{C}\electric{V}_{C,\max}\sin(\signal{\omega}t)
=\electric{I}_{C,\max}\cos(\signal{\omega}t+\pi/2).
\end{aligned}
$$

The current leads the voltage by a phase angle $\signal{\phi}=\pi/2$. In the sketch the current phasor is ahead of the voltage phasor by that angle, with their horizontal projections marked $\electric{i}_C$ and $\electric{v}_C$.

The capacitive reactance is

$$
\circuit{X}_C=\frac1{\signal{\omega}\circuit{C}},
\qquad
\electric{V}_{C,\max}=\electric{I}_{C,\max}\circuit{X}_C.
$$

> [!note]
> The handwritten reactance box uses the lowercase instantaneous values. The preceding phase relation shows that the scalar reactance relation applies to the amplitudes.

##### Inductor in an AC circuit

The sketch connects a sinusoidal source across an inductor. The induced emf is $\electric{\mathcal{E}}_L=-\circuit{L}\,\mathrm{d}\electric{I}/\mathrm{d}t$. For the voltage across the element and its current,

$$
\begin{aligned}
\electric{v}_L&=\electric{V}_L\cos(\signal{\omega}t),\\
\electric{i}_L&=\electric{I}_{L,\max}\sin(\signal{\omega}t)
=\frac{\electric{V}_L}{\signal{\omega}\circuit{L}}
 \cos(\signal{\omega}t-\pi/2).
\end{aligned}
$$

The voltage leads the current by $90^\circ$. The inductive reactance is $\circuit{X}_L=\signal{\omega}\circuit{L}$. As in the capacitor example, the scalar relation between voltage and current through reactance uses their amplitudes.

| Element | Peak current | Phase relation |
| --- | --- | --- |
| Resistor | $\electric{I}_p=\electric{V}_p/\circuit{R}$ | In phase |
| Capacitor | $\electric{I}_p=\electric{V}_p/\circuit{X}_C$ | Current leads voltage by $90^\circ=\pi/2$ radians. |
| Inductor | $\electric{I}_p=\electric{V}_p/\circuit{X}_L$ | Voltage leads current by $90^\circ=\pi/2$ radians. |

Know Maxwell’s equations for the exam. Faraday’s law gives the emf around a closed curve.

$$
\electric{\mathcal{E}}
=\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec s}
=-\frac{\mathrm d\magnetic{\Phi}_{\mathrm m}}{\mathrm d\signal{t}}.
$$

The electric field and emf exist along the closed curve bounding the surface through which the magnetic flux changes, even if there is no wire along that curve.

##### Induced fields

The minus sign in Faraday’s law expresses Lenz’s law. The induced electric circulation drives a current, if a conducting loop is present, whose magnetic field opposes the change in magnetic flux. The term for a changing electric flux in the Ampère–Maxwell law has a plus sign.

$$
\oint\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec s}
=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\mathrm d\electric{\Phi}_{\mathrm E}}{\mathrm d\signal{t}}
\qquad \text{when no conduction current crosses the surface.}
$$

##### Maxwell’s equations

Gauss’s law for electricity

$$
\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec A}
=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0},
\qquad
\nabla\cdot\electric{\vec E}=\frac{\electric{\rho}}{\electric{\varepsilon}_0}.
$$

Gauss’s law for magnetism

$$
\oint\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec A}=0,
\qquad
\nabla\cdot\magnetic{\vec B}=0.
$$

Faraday’s law

$$
\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec s}
=-\frac{\mathrm d\magnetic{\Phi}_{\mathrm m}}{\mathrm d\signal{t}},
\qquad
\nabla\times\electric{\vec E}=-\frac{\partial\magnetic{\vec B}}{\partial\signal{t}}.
$$

Ampère–Maxwell law

$$
\begin{aligned}
\oint\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec s}
&=\magnetic{\mu}_0\left(\electric{I}_{\mathrm{through}}+
\electric{\varepsilon}_0\frac{\mathrm d\electric{\Phi}_{\mathrm E}}{\mathrm d\signal{t}}\right),\\
\nabla\times\magnetic{\vec B}
&=\magnetic{\mu}_0\electric{\vec J}
+\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial\electric{\vec E}}{\partial\signal{t}}.
\end{aligned}
$$

Here $\electric{\rho}$ is the charge density and $\electric{\vec J}$ is the current density. Divergence measures the local source or sink strength of a vector field $\vec A$.

$$
\nabla\cdot\vec A
=\left(\hat{\imath}\frac{\partial}{\partial x}
+\hat{\jmath}\frac{\partial}{\partial y}
+\hat{k}\frac{\partial}{\partial z}\right)\cdot\vec A.
$$

##### Maxwell’s equations in a source-free region

With no charge or conduction current in vacuum, Maxwell’s equations become

$$
\begin{aligned}
\nabla\cdot\electric{\vec E}&=0,&
\nabla\cdot\magnetic{\vec B}&=0,\\
\nabla\times\electric{\vec E}&=-\frac{\partial\magnetic{\vec B}}{\partial\signal{t}},&
\nabla\times\magnetic{\vec B}&=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial\electric{\vec E}}{\partial\signal{t}}.
\end{aligned}
$$

##### Wave equation and sinusoidal solution

For a wave traveling along the $x$ axis, the electric field obeys

$$
\frac{\partial^2\electric{E}}{\partial x^2}
=\frac{1}{\mechanical{v}^2}\frac{\partial^2\electric{E}}{\partial\signal{t}^2}.
$$

A sinusoidal wave traveling in the positive $x$ direction has the form

$$
\electric{\vec E}
=\electric{\vec E}_0\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}).
$$

The angular frequency $\signal{\omega}$ is related to the frequency $\signal{f}$, and the wave number $\signal{k}$ to the wavelength $\signal{\lambda}$.

Differentiate Faraday’s law with respect to time and substitute $\partial\electric{\vec E}/\partial\signal{t}$ from the Ampère–Maxwell law.

$$
\begin{aligned}
\nabla\times\frac{\partial\electric{\vec E}}{\partial\signal{t}}
&=-\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2},\\
\frac{1}{\magnetic{\mu}_0\electric{\varepsilon}_0}
\nabla\times(\nabla\times\magnetic{\vec B})
&=-\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2}.
\end{aligned}
$$

The notes give the vector triple-product identity to prepare for simplifying the double curl.

$$
\vec A\times(\vec B\times\vec C)
=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B).
$$

##### Electromagnetic wave speed

Apply the vector identity for the double curl and use $\nabla\cdot\magnetic{\vec B}=0$.

$$
\begin{aligned}
\frac{1}{\magnetic{\mu}_0\electric{\varepsilon}_0}
\left[\nabla(\nabla\cdot\magnetic{\vec B})-\nabla^2\magnetic{\vec B}\right]
&=-\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2},\\
\nabla^2\magnetic{\vec B}
&=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial^2\magnetic{\vec B}}{\partial\signal{t}^2}.
\end{aligned}
$$

Comparing with the wave equation gives the speed of light in vacuum.

$$
\begin{aligned}
\frac{1}{\mechanical{v}^2}&=\magnetic{\mu}_0\electric{\varepsilon}_0,\\
\mechanical{v}
&=\frac{1}{\sqrt{\magnetic{\mu}_0\electric{\varepsilon}_0}}
=\frac{1}{\sqrt{(4\pi\times10^{-7}\,\unit{T\,m\,A^{-1}})
(8.854\times10^{-12}\,\unit{C^2\,N^{-1}\,m^{-2}})}}
\approx 2.99\times10^8\,\unit{m\,s^{-1}}.
\end{aligned}
$$

For the electric field, differentiate the source-free Ampère–Maxwell law with respect to time, substitute Faraday’s law, and use the double-curl identity together with Gauss’s law at $\electric{\rho}=0$. The result is

$$
\nabla^2\electric{\vec E}
=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial^2\electric{\vec E}}{\partial\signal{t}^2}.
$$

##### Fields that vary along one axis

Let the field components depend on $x$ and $\signal{t}$. Gauss’s law gives $\partial\electric{E}_x/\partial x=0$, so the longitudinal electric component can depend only on time at this stage of the derivation. The determinant for the curl simplifies because the $y$ and $z$ derivatives vanish.

$$
\begin{aligned}
\nabla\times\electric{\vec E}
&=\begin{vmatrix}
\hat{\imath}&\hat{\jmath}&\hat{k}\\
\partial/\partial x&\partial/\partial y&\partial/\partial z\\
\electric{E}_x&\electric{E}_y&\electric{E}_z
\end{vmatrix}\\
&=\left(0,-\frac{\partial\electric{E}_z}{\partial x},
\frac{\partial\electric{E}_y}{\partial x}\right)
=-\frac{\partial\magnetic{\vec B}}{\partial\signal{t}}.
\end{aligned}
$$

The $x$ component therefore gives $\partial\magnetic{B}_x/\partial\signal{t}=0$. The source-free magnetic divergence also makes $\magnetic{B}_x$ independent of $x$ for this geometry.

For $\magnetic{\vec B}$ depending on $x$ and $\signal{t}$ only,

$$
\nabla\times\magnetic{\vec B}
=\left(0,-\frac{\partial\magnetic{B}_z}{\partial x},
\frac{\partial\magnetic{B}_y}{\partial x}\right)
=\magnetic{\mu}_0\electric{\varepsilon}_0
\frac{\partial\electric{\vec E}}{\partial\signal{t}}.
$$

Thus $\electric{E}_x$ is also constant.

##### Traveling waves

Light is an oscillation of the electromagnetic field. The right-hand rule gives the direction of propagation from $\electric{\vec E}\times\magnetic{\vec B}$. The speed and field magnitudes satisfy

$$
\begin{aligned}
\mechanical{c}&=\frac{1}{\sqrt{\electric{\varepsilon}_0\magnetic{\mu}_0}},
&\electric{E}&=\mechanical{c}\magnetic{B}
&&\text{in vacuum},\\
\mechanical{v}&=\frac{1}{\sqrt{\magnetic{\mu}\electric{\varepsilon}}},
&\electric{E}&=\mechanical{v}\magnetic{B}
&&\text{in the transparent medium considered here}.
\end{aligned}
$$

For a wave traveling in the positive $x$ direction, the fields may be polarized along $y$ and $z$, respectively.

$$
\begin{aligned}
\electric{\vec E}(x,\signal{t})&=\electric{E}_0\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_0)\,\hat{\jmath},\\
\magnetic{\vec B}(x,\signal{t})&=\magnetic{B}_0\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_0)\,\hat{k}.
\end{aligned}
$$

The wave number and angular frequency set the spatial and temporal periods. The phase constant $\signal{\phi}_0$ encodes the initial conditions. Both $\signal{k}x$ and $\signal{\omega}\signal{t}$ are measured in radians.

$$
\begin{aligned}
\signal{k}&=\frac{2\pi}{\signal{\lambda}},&
\signal{k}x&=2\pi\frac{x}{\signal{\lambda}},\\
\signal{\omega}&=\frac{2\pi}{\signal{T}}=2\pi\signal{f},&
\mechanical{v}&=\frac{\signal{\omega}}{\signal{k}}=\signal{\lambda}\signal{f}.
\end{aligned}
$$

The units are $\unit{rad\,m^{-1}}$ for $\signal{k}$, $\unit{rad\,s^{-1}}$ for $\signal{\omega}$, $\unit{Hz}=\unit{s^{-1}}$ for $\signal{f}$, and $\unit{m\,s^{-1}}$ for $\mechanical{v}$. The handwritten radio example reads “KNBR 680 MHz.”

To find the phase constant, set $x=0$ and $\signal{t}=0$, then read the initial field component from the graph.

$$
\electric{E}(0,0)=\electric{E}_0\sin\signal{\phi}_0.
$$

##### The Poynting vector

Electromagnetic waves carry energy and momentum. The magnitude of the Poynting vector measures the rate of energy transfer per area. For a plane wave in vacuum, $\electric{E}=\mechanical{c}\magnetic{B}$ and

$$
\begin{aligned}
\energy{\vec S}&=\frac{1}{\magnetic{\mu}_0}\electric{\vec E}\times\magnetic{\vec B},\\
\energy{S}&=\frac{\electric{E}\magnetic{B}}{\magnetic{\mu}_0}
=\frac{\electric{E}^2}{\mechanical{c}\magnetic{\mu}_0}.
\end{aligned}
$$

Intensity is the average power per area. For a sinusoidal plane wave, or for an isotropic source observed at radius $\mechanical{r}$, respectively,

$$
\energy{I}=\energy{S}_{\mathrm{avg}}
=\frac{\electric{E}_0\magnetic{B}_0}{2\magnetic{\mu}_0},
\qquad
\energy{I}=\frac{\energy{P}}{4\pi\mechanical{r}^2}.
$$

##### Radiation pressure

At normal incidence, fully absorbed light transfers momentum $\Delta\mechanical{p}=\energy{E}_{\mathrm{abs}}/\mechanical{c}$. Force is momentum transferred per time, so pressure is

$$
\mechanical{p}_{\mathrm{rad}}
=\frac{\mechanical{F}}{\mechanical{A}}
=\frac{\Delta\mechanical{p}}{\Delta\signal{t}\,\mechanical{A}}
=\frac{\energy{E}_{\mathrm{abs}}}{\mechanical{c}\Delta\signal{t}\,\mechanical{A}}
=\frac{\energy{I}}{\mechanical{c}}.
$$

If the light is fully reflected straight back, the momentum transfer and radiation pressure are twice as large.

## Source

Kyle Kabasares, *Electricity and Magnetism (Physics 9H, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{\vec E}$ | $\unit{V\,m^{-1}}$ | Electric field | The electric force per unit test charge. |
| $\electric{V}$ | $\unit{V}$ | Electric potential | The potential energy per unit test charge. |
| $\electric{q}$, $\electric{q}_1$, $\electric{q}_2$ | $\unit{C}$ | Electric charge | The test or source charge in the electrostatic relations. |
| $\mechanical{r}$ | $\unit{m}$ | Radial distance | The distance from a source, axis, or center. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The constant that sets the strength of the electric interaction in vacuum. |
| $\electric{Q}$ | $\unit{C}$ | Total charge | The charge distributed along the semicircular arc. |
| $\mechanical{A}$ | $\unit{m^2}$ | Area | The area over which the surface charge is distributed. |
| $\electric{\rho}$ | $\unit{C\,m^{-3}}$ | Volume charge density | The charge per unit volume. |
| $\electric{\Phi}$, $\electric{\Phi}_{E,\mathrm{net}}$ | $\unit{N\,m^2\,C^{-1}}$ | Electric flux | The surface integral of the normal electric field. |
| $\mechanical{\vec A}$ | $\unit{m^2}$ | Area vector | A vector normal to the surface with magnitude equal to the area. |
| $\electric{I}$, $\electric{I}_2$–$\electric{I}_6$ | $\unit{A}$ | Circuit currents | The current in the feed and each bridge branch. |
| $\circuit{C}$ | $\unit{F}$ | Capacitance | The charge magnitude per unit voltage across a capacitor. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Permittivity | The electric response parameter of a dielectric or transparent medium. |
| $t$, $\signal{t}$, $\Delta\signal{t}$ | $\unit{s}$ | Time and elapsed time | The time coordinate or the duration of a process. |
| $\energy{P}$ | $\unit{W}$ | Electrical power | The rate of electrical energy transfer in the resistive element. |
| $\electric{\mathcal{E}}$ | $\unit{V}$ | Electromotive force | The source voltage in the charging loop. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | The magnetic field that determines the flux through a surface. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Speed | The speed of a particle or of a wave in the medium. |
| $\magnetic{\mu}_0$ | $\unit{T\,m\,A^{-1}}$ | Vacuum permeability | The magnetic constant in the current-element and moving-charge formulas. |
| $N$ | 1 | Turn count | The number of loops contributing to the coil field. |
| $\circuit{L}$ | $\unit{H}$ | Inductance | The linked magnetic flux per unit current. |
| $\signal{f}$ | $\unit{Hz}$ | Oscillation frequency | The number of cycles per second in a circuit or wave. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The phase advance per second in an oscillation. |
| $\signal{T}$ | $\unit{s}$ | Period | The time for one complete cycle of the sinusoidal signal. |
| $\electric{v}_R$, $\electric{V}_R$ | $\unit{V}$ | Resistor voltage | The instantaneous resistor voltage and its amplitude. |
| $\electric{i}_R$, $\electric{I}_R$ | $\unit{A}$ | Resistor current | The instantaneous resistor current and its amplitude. |
| $\electric{q}_C$ | $\unit{C}$ | Capacitor charge | The instantaneous charge on the selected plate. |
| $\electric{v}_C$, $\electric{V}_{C,\max}$ | $\unit{V}$ | Capacitor voltage | The instantaneous voltage across the capacitor and its amplitude. |
| $\electric{i}_C$, $\electric{I}_{C,\max}$ | $\unit{A}$ | Capacitor current | The instantaneous capacitor current and its amplitude. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase | The phase offset of a sinusoid or the phase difference between two oscillations. |
| $\circuit{X}_C$ | $\unit{\Omega}$ | Capacitive reactance | The ratio of voltage amplitude to current amplitude for the capacitor. |
| $\electric{v}_L$, $\electric{V}_L$ | $\unit{V}$ | Inductor voltage | The instantaneous voltage across the inductor and its amplitude. |
| $\electric{i}_L$, $\electric{I}_{L,\max}$ | $\unit{A}$ | Inductor current | The instantaneous current through the inductor and its amplitude. |
| $\circuit{X}_L$ | $\unit{\Omega}$ | Inductive reactance | The ratio of voltage amplitude to current amplitude for the inductor. |
| $\electric{I}_p$ | $\unit{A}$ | Peak current | Current amplitude in the AC comparison table. |
| $\electric{V}_p$ | $\unit{V}$ | Peak voltage | Voltage amplitude in the AC comparison table. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Wave number | Spatial rate of change of phase. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial period of the wave. |
| $\electric{E}_0$, $\electric{\vec E}_0$ | $\unit{V\,m^{-1}}$ | Electric-field amplitude | Scalar or vector amplitude in the sinusoidal wave solution. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | Propagation speed obtained from Maxwell’s equations. |
| $\magnetic{\mu}$ | $\unit{T\,m\,A^{-1}}$ | Permeability | Magnetic response parameter for the medium. |
| $\magnetic{B}_0$ | $\unit{T}$ | Magnetic-field amplitude | Peak magnetic field of the traveling wave. |
| $\signal{\phi}_0$ | $\unit{rad}$ | Phase constant | Phase of the traveling wave at the reference position and time. |
| $\energy{\vec S}$ | $\unit{W\,m^{-2}}$ | Poynting vector | Energy flux of the electromagnetic field. |
| $\energy{I}$ | $\unit{W\,m^{-2}}$ | Intensity | Time-averaged energy flux magnitude. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Radiation transfers momentum when absorbed or reflected. |
| $\mechanical{p}_{\mathrm{rad}}$ | $\unit{Pa}$ | Radiation pressure | Force per unit area exerted by incident light. |
| $\energy{E}_{\mathrm{abs}}$ | $\unit{J}$ | Absorbed energy | Energy transferred to the surface by the incident light. |
