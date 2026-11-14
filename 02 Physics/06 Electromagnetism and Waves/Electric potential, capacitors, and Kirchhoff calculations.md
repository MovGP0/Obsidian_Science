---
title: "Electric potential, capacitors, and Kirchhoff calculations"
---

> [!TLDR]
> Compute potential from the charge distribution and use voltage relations, capacitance, and Kirchhoff equations in circuits.

## Worked lecture material

The top margin contains decorative STEM lettering.

The year is written as 2013, between surrounding lectures dated 2014. The first question asks how to show that something oscillates. The mathematical test is

$$
\frac{\mathrm{d}^2 f}{\mathrm{d}x^2}=-C f
$$

for a positive constant $C$ related to the frequency. The margin suggests that the variable could be $\theta$ or another coordinate. The conceptual test starts with a stable equilibrium and a small displacement from it. The handwritten line ends after “will result in.”

##### Electric potential

With the reference at infinity,

$$
\Delta\energy{U}=\frac{\electric{k}\electric{q}_1\electric{q}_2}{\mechanical{r}},
\qquad
\electric{V}=\frac{\electric{k}\electric{q}}{\mechanical{r}}.
$$

Electric potential is $\electric{V}=\energy{U}_{\mathrm{source}}/\electric{q}$, measured in volts. A charge moving through a potential difference changes its potential energy by $\Delta\energy{U}=\electric{q}\,\Delta\electric{V}$. To integrate over a distribution, express $\mathrm{d}\electric{q}$ in terms of a line, area, or volume element.

The bottom sketch shows the electric field pointing from high potential to low potential, with a positive charge in the field. The first line says that a positive charge moves toward lower potential. The second line repeats that direction for a negative charge.

> [!note]
> The electric force on a negative charge is opposite the field, so the force points toward higher potential.

##### Potential on the axis of a charged disk

The sketch shows a disk of radius $\mechanical{R}$ with total charge $\electric{Q}$. Point P is at axial coordinate $\mechanical{z}$. A ring of radius $\mechanical{r}$ and thickness $\mathrm{d}\mechanical{r}$ has area $2\pi\mechanical{r}\,\mathrm{d}\mechanical{r}$. Its distance to P is $\sqrt{\mechanical{r}^2+\mechanical{z}^2}$.

$$
\electric{\eta}=\frac{\electric{Q}}{\pi\mechanical{R}^2}
=\frac{\mathrm{d}\electric{q}}{2\pi\mechanical{r}\,\mathrm{d}\mechanical{r}},
\qquad
\mathrm{d}\electric{q}=\frac{2\electric{Q}}{\mechanical{R}^2}
 \mechanical{r}\,\mathrm{d}\mechanical{r}.
$$

$$
\electric{V}=\int\mathrm{d}\electric{V}
=\frac{2\electric{k}\electric{Q}}{\mechanical{R}^2}
 \int_0^{\mechanical{R}}
 \frac{\mechanical{r}\,\mathrm{d}\mechanical{r}}
      {\sqrt{\mechanical{r}^2+\mechanical{z}^2}}.
$$

Use substitution to obtain

$$
\boxed{\electric{V}=\frac{2\electric{k}\electric{Q}}{\mechanical{R}^2}
\left(\sqrt{\mechanical{R}^2+\mechanical{z}^2}-|\mechanical{z}|\right)}.
$$

The electric field points from a positive charge toward a negative one. The point-charge example starts with $\electric{E}=\electric{k}\electric{q}/\mechanical{r}^2$. Its radial antiderivative is $-\electric{k}\electric{q}/\mechanical{r}$. The faint substitution appears to show bounds $-1$ and $1$. The point-charge expression is singular at zero, so these bounds cannot be used across the origin in that integral.

The notes give $\Delta\electric{V}_{ab}=0$ and conclude that $\Delta\electric{V}_{bc}=\Delta\electric{V}_{ac}$ because $\electric{V}_a=\electric{V}_b$. When the final potential is lower than the initial potential, the change is negative.

##### Field and potential

The electric field is perpendicular to equipotentials and points in the direction of steepest decrease of potential. The sketch uses hills and valleys with a downhill arrow labeled “tuck & roll.” The handwriting appears to label both positive and negative charges “hills.” In the point-charge potential of [[#Electric potential|the section on Electric potential]], positive charges give hills and negative charges give wells.

In one dimension, $\electric{E}_x=-\mathrm{d}\electric{V}/\mathrm{d}\mechanical{x}$. The page labels the minus sign “downhill” and the derivative “steepest.” In three dimensions,

$$
\begin{aligned}
\electric{\vec E}&=\electric{E}_x\hat{\imath}
 +\electric{E}_y\hat{\jmath}+\electric{E}_z\hat{k},\\
\electric{E}_x&=-\frac{\partial\electric{V}(\mechanical{x},\mechanical{y},\mechanical{z})}{\partial\mechanical{x}},\\
\electric{E}_y&=-\frac{\partial\electric{V}(\mechanical{x},\mechanical{y},\mechanical{z})}{\partial\mechanical{y}},\\
\nabla&=\hat{\imath}\frac{\partial}{\partial\mechanical{x}}
       +\hat{\jmath}\frac{\partial}{\partial\mechanical{y}}
       +\hat{k}\frac{\partial}{\partial\mechanical{z}},\\
\electric{\vec E}&=-\nabla\electric{V}.
\end{aligned}
$$

Hold the other two coordinates constant in each partial derivative. The margin reads “It's so beautiful.”

The worked line-integral example writes $\electric{\vec E}=(500\mechanical{x}\mechanical{y}^2\hat{\imath}+30\hat{\jmath})\,\unit{V\,m^{-1}}$ and gives the example displacement $\mathrm{d}\mechanical{\vec s}=5\,\mathrm{d}\mechanical{x}\,\hat{\imath}+3\,\mathrm{d}\mechanical{y}\,\hat{\jmath}+\mathrm{d}\mechanical{z}\,\hat{k}$. The dot product gives the two terms $2500\mechanical{x}\mechanical{y}^2\,\mathrm{d}\mechanical{x}$ and $90\,\mathrm{d}\mechanical{y}$. The final line treats $\mechanical{y}$ as fixed during the $x$ integral and uses

$$
\Delta\electric{V}
=-2500\mechanical{y}^2\int_{x_i}^{x_f}\mechanical{x}\,\mathrm{d}\mechanical{x}
-90\int_{y_i}^{y_f}\mathrm{d}\mechanical{y}.
$$

The intermediate handwriting gives a positive line integral for $\Delta\electric{V}$. The last line uses the minus sign consistent with $\electric{\vec E}=-\nabla\electric{V}$. The notes say to determine the additive constant from the initial conditions. It cancels in $\Delta\electric{V}=\electric{V}(x_f)-\electric{V}(x_i)$.

##### Charge separation and a parallel-plate capacitor

The opening sketches show separate charges and then two plates connected to a source. The left plate is at zero potential and the right is at $+\electric{V}$. The electric field points left, from the positive plate to the negative plate. A plate and its connected source terminal are at the same potential.

For a displacement along the uniform field between the plates,

$$
\Delta\electric{V}
=-\int\electric{E}_x\,\mathrm{d}\mechanical{x}
=-\electric{E}_x\Delta\mechanical{x}
=-\frac{\electric{Q}}{\mechanical{A}\electric{\varepsilon}_0}\mechanical{d},
$$

where $\mechanical{d}$ is the plate separation. The notes call capacitance a positive quantity.

$$
\circuit{C}=\frac{\electric{Q}}{|\Delta\electric{V}|},
\qquad
\circuit{C}=\frac{\electric{\varepsilon}_0\mechanical{A}}{\mechanical{d}}
\quad\text{for parallel plates}.
$$

Capacitance depends on the size, shape, and geometric arrangement. The notes also distinguish series and parallel connections.

The potential difference at an intermediate charge $\electric{q}$ during charging is $\electric{q}/\circuit{C}$. The change in stored energy is

$$
\Delta\energy{U}
=\int_0^{\electric{Q}}\frac{\electric{q}}{\circuit{C}}\,\mathrm{d}\electric{q}
=\frac{\electric{Q}^2}{2\circuit{C}}
=\frac12\circuit{C}\electric{V}^2
=\frac12\electric{Q}\electric{V}.
$$

For the parallel-plate capacitor, use the voltage magnitude $\electric{V}=\electric{E}\mechanical{d}$.

$$
\Delta\energy{U}
=\frac12\frac{\electric{\varepsilon}_0\mechanical{A}}{\mechanical{d}}
     (\electric{E}\mechanical{d})^2
=\frac{\electric{\varepsilon}_0\electric{E}^2}{2}
     (\mechanical{A}\mechanical{d}).
$$

The last factor is the volume between the plates.

##### Dielectrics

A dielectric is a nonconducting material with dielectric constant $\electric{K}$ and permittivity $\electric{\varepsilon}=\electric{K}\electric{\varepsilon}_0$. The notes give $\electric{E}>3\times10^5\,\unit{V\,m^{-1}}$ as the air breakdown threshold. They describe ionization and conduction during breakdown, and say that dielectric materials can withstand a stronger field before they break down.

##### Molecular view

1. Connect an empty capacitor to a battery for a long time.
2. Disconnect the battery.
3. Insert a dielectric between the plates.
4. Determine whether the field changes.

The free plate charge stays constant after disconnection. The field in the capacitor becomes smaller. The sketch shows leftward field arrows from the positive plate on the right to the negative plate on the left. The molecule diagram shows dipole moments aligned left, with positive bound charge on the left dielectric face and negative bound charge on the right.

The field without the dielectric is written $\electric{E}_0=\electric{\eta}/\electric{\varepsilon}_0$. The separate entry for the induced field is written $\electric{E}_{\mathrm{induced}}=\electric{\eta}_{\mathrm{induced}}/\electric{\varepsilon}$. The arrows point $\electric{\vec E}_0$ left and $\electric{\vec E}_{\mathrm{induced}}$ right.

$$
\electric{\vec E}_{\mathrm{net}}
=\electric{\vec E}_0+\electric{\vec E}_{\mathrm{induced}}.
$$

The notes use the capacitor energy in the form

$$
\energy{U}=\tfrac12\circuit{C}\electric{V}^2
=\tfrac12\circuit{C}(\electric{E}\mechanical{d})^2.
$$

The comparison is $\energy{U}_0=\tfrac12\circuit{C}\electric{E}_0^2\mechanical{d}^2$ before insertion and $\energy{U}_{\mathrm{now}}=\tfrac12\circuit{C}\electric{E}_{\mathrm{net}}^2\mechanical{d}^2$ afterward. The source uses the same capacitance symbol in both lines. Each energy uses the capacitance of its respective configuration.

##### Capacitors in series and parallel

The series sketch places $\circuit{C}_1$ and $\circuit{C}_2$ in one loop with the battery. The notes identify equal charge magnitudes, $\electric{Q}_1=\electric{Q}_2=\electric{Q}$. The voltage differences add.

$$
\Delta\electric{V}_{\mathrm{bat}}
=\Delta\electric{V}_1+\Delta\electric{V}_2
=\frac{\electric{Q}_1}{\circuit{C}_1}+\frac{\electric{Q}_2}{\circuit{C}_2}
=\electric{Q}\left(\frac1{\circuit{C}_1}+\frac1{\circuit{C}_2}\right).
$$

$$
\frac1{\circuit{C}_{\mathrm{eq}}}
=\frac1{\circuit{C}_1}+\frac1{\circuit{C}_2}.
$$

One intermediate line equates the battery voltage to $1/\circuit{C}_{\mathrm{eq}}$. The underbrace identifies that reciprocal with the parenthesized factor alone.

For a parallel connection,

$$
\electric{Q}_{\mathrm{tot}}=\electric{Q}_1+\electric{Q}_2+\cdots,
\qquad
\circuit{C}_{\mathrm{eq}}=\circuit{C}_1+\circuit{C}_2+\cdots.
$$

The parallel entry also copies the series voltage sum. Each parallel capacitor is connected across the same two nodes and has the battery's voltage.

##### Current and conductivity. Example problem

The sketch shows two capacitors in parallel across a battery. The notes give an air-gap capacitor and a dielectric constant $\electric{K}_E=\electric{\varepsilon}/\electric{\varepsilon}_0=2.50$. The calculation uses $\electric{V}=\quantity{12}{V}$ and $\circuit{C}=\quantity{2}{\mu F}$ for one capacitor.

$$
\electric{Q}=\electric{V}\circuit{C}
=(12\,\unit{V})(2\,\unit{\mu F})=\quantity{24}{\mu C}.
$$

For two such capacitors,

$$
\energy{U}=2\left(\tfrac12\circuit{C}\electric{V}^2\right)
=\circuit{C}\electric{V}^2=\quantity{288}{\mu J}.
$$

The example is marked “To be cont.”

##### Electrostatic equilibrium and current

The equilibrium sketch shows excess charge on the conductor's surface and a dashed Gaussian surface inside it. The conductor model shows fixed ionic cores and valence electrons that can move.

The wire sketch marks high potential on the left and low potential on the right. The field and conventional current point right. Electrons drift left. The notes distinguish the microscopic picture from the macroscopic description of current.

##### Drift speed and current

The notes give an electron drift speed of order $10^{-2}\,\unit{mm\,s^{-1}}=10^{-5}\,\unit{m\,s^{-1}}$ through a wire. Conventional current is measured in amperes, with $1\,\unit{A}=1\,\unit{C\,s^{-1}}$.

The notes use $\electric{i}_e$ for the number of electrons crossing a section per second. If $N_e$ electrons occupy volume $\mechanical{V}$, the electron number density is $n_e=N_e/\mechanical{V}$.

$$
\electric{i}_e
=\frac{n_e\mechanical{V}}{\Delta t}
=\frac{n_e\mechanical{A}\Delta\mechanical{x}}{\Delta t}
=n_e\mechanical{A}\mechanical{v}_d.
$$

Electrons drift opposite the direction of conventional current. Conventional current follows positive charge flow, so $\electric{I}=\electric{Q}/\Delta t$ and $\electric{Q}=\electric{I}\Delta t$ for steady current.

##### Current density

$$
\electric{J}=n_e\electric{e}\mechanical{v}_d
=\electric{\sigma}\electric{E}
=\frac{\electric{I}}{\mechanical{A}}.
$$

These are scalar magnitudes in the notes. The three forms use the drift speed, the field and conductivity, or the current and cross-sectional area.

Current $\electric{I}$ is measured in amperes, or coulombs per second. The electron flow rate is labeled $\electric{i}_e$.

##### Macroscopic circuits

The component list includes wires, resistors, capacitors, batteries, and inductors. The sketch groups the first four under DC and includes inductors in the AC grouping.

##### Ohm's law and power

A potential difference across a resistive element drives a current. For an ohmic material,

$$
\Delta\electric{V}=\electric{I}\circuit{R},
\qquad
\energy{P}=\electric{I}\electric{V}
=\electric{I}^2\circuit{R}
=\frac{\electric{V}^2}{\circuit{R}}.
$$

##### Adding resistors

$$
\circuit{R}_{\mathrm{eq}}=\circuit{R}_1+\circuit{R}_2+\circuit{R}_3+\cdots
\qquad\text{in series}.
$$

The source gives the reciprocal sum $1/\circuit{R}_1+1/\circuit{R}_2+1/\circuit{R}_3+\cdots$ for parallel resistors. The handwritten equality puts $\circuit{R}_{\mathrm{eq}}$ on the left. The sum is $1/\circuit{R}_{\mathrm{eq}}$.

##### Kirchhoff's rules

The “Doc Physics” sketch shows one loop with two batteries and two resistors. The batteries are drawn with their positive terminals at the top.

- Junction rule. $\sum\electric{I}=0$, with entering current positive and leaving current negative. This is conservation of charge.
- Loop rule. $\sum\Delta\electric{V}=0$. This is conservation of energy, with $\electric{q}\Delta\electric{V}=\Delta\energy{U}$.

The loop sketch shows a $\quantity{12}{V}$ source, one resistor on the upper wire, and two return branches with a resistor in each. The top left node is marked $\quantity{12}{V}$ and the bottom node $\quantity{0}{V}$. The notes label the drop across a resistor $\electric{I}\circuit{R}$.

##### Kirchhoff's rules. Worked example

The circuit has two junctions, A and B, sources of $\quantity{12}{V}$ and $\quantity{15}{V}$, and three $\quantity{22}{\Omega}$ resistors. The indicated current $\electric{I}_1$ enters A from the left. Currents $\electric{I}_2$ and $\electric{I}_3$ leave A through the right branch and middle branch.

![[Kyle Kabasares - Electricity and Magnetism - Kirchhoff two-battery example.png|**Fig. 4** Two-battery Kirchhoff example with three branch currents and loop directions]]

$$
\electric{I}_1-\electric{I}_2-\electric{I}_3=0. \tag{1}
$$

The equation at B is the negative of equation (1). For the two interior loops,

$$
12\,\unit{V}-\electric{I}_3\circuit{R}-\electric{I}_1\circuit{R}=0, \tag{2}
$$

$$
\electric{I}_3\circuit{R}-15\,\unit{V}-\electric{I}_2\circuit{R}=0. \tag{3}
$$

The outer loop gives $12\,\unit{V}-15\,\unit{V}-\electric{I}_2\circuit{R}-\electric{I}_1\circuit{R}=0$. It is the sum of the two interior loop equations.

$$
\electric{I}_3=\electric{I}_1-\electric{I}_2,\qquad
\electric{I}_1=\frac{12\,\unit{V}-\electric{I}_3\circuit{R}}{\circuit{R}},\qquad
\electric{I}_2=\frac{\electric{I}_3\circuit{R}-15\,\unit{V}}{\circuit{R}}.
$$

$$
\electric{I}_3=\frac{27\,\unit{V}-2\electric{I}_3\circuit{R}}{\circuit{R}},
\qquad
3\electric{I}_3=\frac{27\,\unit{V}}{\circuit{R}},
\qquad
\electric{I}_3=\frac{9\,\unit{V}}{\circuit{R}}.
$$

The handwritten boxes give $\electric{I}_3=\quantity{0.40}{A}$, $\electric{I}_1=\quantity{0.145}{A}$, and $\electric{I}_2=-0.28\,\unit{A}$. Keeping the exact ratios until the end gives about $\quantity{0.409}{A}$, $\quantity{0.136}{A}$, and $-0.273\,\unit{A}$, respectively.

##### Discharging a capacitor

Initially $\electric{Q}_0=\electric{Q}_{\max}$ and $\Delta\electric{V}_0=\Delta\electric{V}_{\max}$. Closing the switch connects the charged capacitor across the resistor. The sketch labels the upper capacitor plate positive and the lower plate negative.

$$
\Delta\electric{V}_C+\Delta\electric{V}_R=0,
\qquad
\frac{\electric{Q}}{\circuit{C}}=-\electric{I}\circuit{R}
=-\circuit{R}\frac{\mathrm{d}\electric{Q}}{\mathrm{d}t}.
$$

$$
-\int_0^t\frac{\mathrm{d}t'}{\circuit{C}\circuit{R}}
=\int_{\electric{Q}_{\max}}^{\electric{Q}(t)}\frac{\mathrm{d}\electric{Q}'}{\electric{Q}'},
\qquad
-\frac{t}{\circuit{C}\circuit{R}}
=\ln\left(\frac{\electric{Q}(t)}{\electric{Q}_{\max}}\right).
$$

With $\signal{\tau}=\circuit{R}\circuit{C}$,

$$
\electric{Q}(t)=\electric{Q}_{\max}\mathrm{e}^{-t/\signal{\tau}},
\qquad
\electric{I}(t)
=-\frac{\electric{Q}_{\max}}{\signal{\tau}}\mathrm{e}^{-t/\signal{\tau}}
=-\electric{I}_{\max}\mathrm{e}^{-t/\signal{\tau}}.
$$

The current is opposite to the charging direction.

##### Charging a capacitor

The lower circuit sketch puts an emf source, switch, resistor, and capacitor in series. The charging loop gives $\electric{\mathcal{E}}-\electric{I}\circuit{R}-\electric{V}_C=0$. Differentiate at constant emf and use $\electric{I}=\mathrm{d}\electric{Q}/\mathrm{d}t$.

$$
-\circuit{R}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}
=\frac{\electric{I}}{\circuit{C}},
\qquad
\int\frac{\mathrm{d}\electric{I}}{\electric{I}}=-\int\frac{\mathrm{d}t}{\signal{\tau}}.
$$

$$
\ln\left(\frac{\electric{I}}{\electric{I}_0}\right)=-\frac{t}{\signal{\tau}},
\qquad
\electric{I}(t)=\electric{I}_0\mathrm{e}^{-t/\signal{\tau}}.
$$

The margin uses $\electric{V}_C=\electric{\mathcal{E}}-\electric{I}_{\max}\circuit{R}\mathrm{e}^{-t/\signal{\tau}}$. For an initially empty capacitor, $\electric{I}_{\max}\circuit{R}=\electric{\mathcal{E}}$, so $\electric{Q}=\circuit{C}\electric{V}_C=\circuit{C}\electric{\mathcal{E}}(1-\mathrm{e}^{-t/\signal{\tau}})$. The first term in that handwritten charge relation looks like $\electric{Q}/\circuit{C}$, which is a voltage.

## Source

Kyle Kabasares, *Electricity and Magnetism (Physics 9H, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{U}$ | $\unit{J}$ | Electric potential energy | The interaction energy of the two charges. |
| $\electric{\vec E}$ | $\unit{V\,m^{-1}}$ | Electric field | The electric force per unit test charge. |
| $\electric{V}$ | $\unit{V}$ | Electric potential | The potential energy per unit test charge. |
| $\electric{q}$, $\electric{q}_1$, $\electric{q}_2$ | $\unit{C}$ | Electric charge | The test or source charge in the electrostatic relations. |
| $\mechanical{r}$ | $\unit{m}$ | Radial distance | The distance from a source, axis, or center. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ | $\unit{m}$ | Position coordinates | The coordinates in the spatial derivatives. |
| $\electric{k}$ | $\unit{N\,m^2\,C^{-2}}$ | Coulomb constant | The coefficient in the inverse-square force law. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The constant that sets the strength of the electric interaction in vacuum. |
| $\mechanical{d}$ | $\unit{m}$ | Separation or diameter | The separation of charges, plates, or slits, or the wire diameter. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | The magnitude of the charge of an electron or proton. |
| $\electric{Q}$ | $\unit{C}$ | Total charge | The charge distributed along the semicircular arc. |
| $\theta$, $\mechanical{\theta}$ | $\unit{rad}$ | Angle | A geometric angle used in projections, polarization, and ray diagrams. |
| $\mechanical{A}$ | $\unit{m^2}$ | Area | The area over which the surface charge is distributed. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | The volume over which the charge is distributed. |
| $\electric{\eta}$, $\electric{\sigma}$ | $\unit{C\,m^{-2}}$ | Surface charge density | The charge per unit area. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | The radius of a sphere, disk, wire, or coil, or the radius of curvature of a mirror. |
| $\electric{I}$, $\electric{I}_2$–$\electric{I}_6$ | $\unit{A}$ | Circuit currents | The current in the feed and each bridge branch. |
| $\circuit{R}_1$–$\circuit{R}_6$ | $\unit{\Omega}$ | Resistances | The resistances of the six elements in the bridge. |
| $\electric{V}_0$ | $\unit{V}$ | Source potential difference | The voltage across the source in the bridge sketch. |
| $\mathrm{d}\mechanical{\vec s}$ | $\unit{m}$ | Path displacement | The directed displacement element in the field integral. |
| $\circuit{C}$ | $\unit{F}$ | Capacitance | The charge magnitude per unit voltage across a capacitor. |
| $\electric{K}$ | 1 | Dielectric constant | The permittivity of the dielectric relative to vacuum. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Permittivity | The electric response parameter of a dielectric or transparent medium. |
| $\electric{\eta}_{\mathrm{induced}}$ | $\unit{C\,m^{-2}}$ | Induced surface charge density | The bound charge per area on a dielectric face. |
| $\circuit{C}_{\mathrm{eq}}$ | $\unit{F}$ | Equivalent capacitance | The capacitance of a single element that gives the same terminal charge–voltage relation. |
| $\mechanical{v}_d$ | $\unit{m\,s^{-1}}$ | Drift speed | The mean directed speed of the charge carriers along the wire. |
| $\electric{i}_e$ | $\unit{s^{-1}}$ | Electron flow rate | The number of electrons crossing a section per second. |
| $N_e$ | 1 | Electron count | The number of electrons in the specified volume. |
| $n_e$ | $\unit{m^{-3}}$ | Electron number density | The number of mobile electrons per unit volume. |
| $t$, $\signal{t}$, $\Delta\signal{t}$ | $\unit{s}$ | Time and elapsed time | The time coordinate or the duration of a process. |
| $\electric{J}$ | $\unit{A\,m^{-2}}$ | Current density | The conventional current per unit cross-sectional area. |
| $\electric{\sigma}$ | $\unit{S\,m^{-1}}$ | Electrical conductivity | The proportionality constant between current density and electric field. |
| $\energy{P}$ | $\unit{W}$ | Electrical power | The rate of electrical energy transfer in the resistive element. |
| $\circuit{R}_{\mathrm{eq}}$ | $\unit{\Omega}$ | Equivalent resistance | The single resistance with the same terminal relation as the resistor network. |
| $\signal{\tau}$ | $\unit{s}$ | Circuit time constant | The exponential time scale, equal to $\circuit{R}\circuit{C}$ or $\circuit{L}/\circuit{R}$. |
| $\electric{\mathcal{E}}$ | $\unit{V}$ | Electromotive force | The source voltage in the charging loop. |
| $\electric{V}_C$ | $\unit{V}$ | Capacitor voltage | The potential difference across the capacitor. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Speed | The speed of a particle or of a wave in the medium. |
| $N$ | 1 | Turn count | The number of loops contributing to the coil field. |
| $\Delta\electric{V}_R$, $\Delta\electric{V}_L$ | $\unit{V}$ | Element potential changes | The signed potential changes across the resistor and inductor along the loop. |
| $\electric{v}_R$, $\electric{V}_R$ | $\unit{V}$ | Resistor voltage | The instantaneous resistor voltage and its amplitude. |
| $\electric{E}_0$, $\electric{\vec E}_0$ | $\unit{V\,m^{-1}}$ | Electric-field amplitude | Scalar or vector amplitude in the sinusoidal wave solution. |
