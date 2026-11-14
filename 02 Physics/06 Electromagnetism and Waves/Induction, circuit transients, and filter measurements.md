---
title: "Induction, circuit transients, and filter measurements"
---

> [!TLDR]
> Apply Faraday and Lenz laws, derive circuit responses, and compare RC filter predictions with instrument readings.

## Worked lecture material

Outside the wire, the Amperian loop encloses all the current.

$$
\magnetic{B}\oint\mathrm{d}\mechanical{\ell}
=\magnetic{B}(2\pi\mechanical{r})
=\magnetic{\mu}_0\electric{I},
\qquad
\magnetic{B}=\frac{\magnetic{\mu}_0\electric{I}}{2\pi\mechanical{r}}.
$$

The sketch shows the field rising linearly inside the wire, reaching $\magnetic{\mu}_0\electric{I}/(2\pi\mechanical{R})$ at the surface, and falling as $1/\mechanical{r}$ outside.

##### Magnetic flux and Faraday's law

The notes give $\magnetic{\Phi}_B=\int\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec A}$ and recall the corresponding electric flux integral. A changing magnetic flux produces emf.

$$
\electric{\mathcal{E}}=-\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}.
$$

##### Solenoid example

The solenoid has $N=400$ turns, length $\mechanical{L}=\quantity{0.25}{m}$, radius $\mechanical{r}=\quantity{1.0}{cm}$, and current $\electric{I}=\quantity{3.0}{A}$.

$$
\magnetic{B}_{\mathrm{sol}}=\frac{N\magnetic{\mu}_0\electric{I}}{\mechanical{L}}.
$$

The notes use $\cos\theta=1$ and multiply the flux per turn by $N$. Their $\magnetic{\Phi}_B$ in this example is the flux linkage.

$$
N\magnetic{B}_{\mathrm{sol}}\,\pi\mechanical{r}^2
=758\times10^{-6}\,\unit{Wb}.
$$

For one flat loop, $\magnetic{\Phi}_B=\magnetic{\vec B}\cdot\mechanical{\vec A}=\magnetic{B}\mechanical{A}\cos\theta$. Its time derivative can contain changes in field, area, and angle.

$$
\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}
=\frac{\mathrm{d}\magnetic{B}}{\mathrm{d}t}\mechanical{A}\cos\theta
+\magnetic{B}\frac{\mathrm{d}\mechanical{A}}{\mathrm{d}t}\cos\theta
+\magnetic{B}\mechanical{A}\frac{\mathrm{d}(\cos\theta)}{\mathrm{d}t}.
$$

The induced emf is in volts and obeys $\electric{\mathcal{E}}_{\mathrm{ind}}=\electric{I}_{\mathrm{ind}}\circuit{R}$ in the resistive loop.

##### Faraday's law, Lenz's law, LR circuits, and inductors

$$
\electric{\mathcal{E}}_{\mathrm{ind}}
=-\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t},
\qquad
\mechanical{\vec F}_{\mathrm{wire}}
=\electric{I}_{\mathrm{ind}}\mechanical{\vec\ell}\times\magnetic{\vec B}_{\mathrm{ext}}.
$$

The sketch shows part of a rectangular loop in an into-the-page field. The horizontal sides have opposing vertical force components that cancel. The force arrow on the side within the field points right.

##### Induced-current problem

Coil 1 makes the external field and therefore the flux linked by coil 2. The notes use $\magnetic{\Phi}_B=\magnetic{B}\mechanical{A}\cos\theta$ and $\electric{\mathcal{E}}_{\mathrm{ind}}=\electric{I}_{\mathrm{ind}}\circuit{R}$. With adjacent turns of wire diameter $\mechanical{d}$, the length of coil 1 is $\mechanical{d}N_1$, so

$$
\magnetic{B}_1=\frac{\magnetic{\mu}_0N_1\electric{I}_1}{\mechanical{d}N_1}
=\frac{\magnetic{\mu}_0\electric{I}_1}{\mechanical{d}}.
$$

| Time interval in seconds | Current and field of coil 1 | Response of coil 2 |
| --- | --- | --- |
| $0<t<0.1$ | Constant negative current and constant leftward field. | No change in flux. Induced emf is zero. |
| $0.1<t<0.3$ | Current increases linearly, so the field and linked flux increase. | Constant negative emf and nonzero induced current. Use the winding direction of coil 2 to determine the current direction. |
| $0.3<t<0.4$ | Constant positive current and constant rightward field. | Induced emf and current are zero. |

The normal of coil 2 is aligned with the field reference direction, so $\cos0^\circ=1$. For the middle interval, the page gives

$$
\begin{aligned}
\electric{\mathcal{E}}_2
&=-\frac{\mathrm{d}\magnetic{B}_1}{\mathrm{d}t}
    (\mechanical{A}_2N_2\cos0^\circ)\\
&=-\frac{\magnetic{\mu}_0\pi\mechanical{r}_2^2N_2}{\mechanical{d}}
   \frac{\mathrm{d}\electric{I}_1}{\mathrm{d}t}
=-\frac{\magnetic{\mu}_0\pi\mechanical{r}_2^2N_2}{\mechanical{d}}
   (20\,\unit{A\,s^{-1}}).
\end{aligned}
$$

Here $\mechanical{r}_2$ is the radius of coil 2 and $\mechanical{d}$ is the diameter of the wire used for the adjacent turns in coil 1.

##### LR and LC circuits and inductors

The upper margin lists $\circuit{C}_1\simeq\quantity{0.0060}{\mu F}$ and $\circuit{C}_2\simeq\quantity{1.47}{\mu F}$. The second entry includes a crossed-out value.

Inductance is the flux linkage per unit current. The page uses $\magnetic{\Phi}_B$ for the linkage.

$$
\circuit{L}=\frac{\magnetic{\Phi}_B}{\electric{I}},
\qquad
1\,\unit{H}=1\,\unit{T\,m^2\,A^{-1}}.
$$

In self-inductance, the magnetic field from a current loop links the same loop. A change in current induces an emf that opposes the change. The solenoid sketch shows the field due to current pointing right and the field induced by an increase in current pointing left.

$$
\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}
=\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t},
\qquad
\boxed{\electric{\mathcal{E}}_{\mathrm{ind}}
=-\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}
=-\frac{\mathrm{d}\magnetic{\Phi}_B}{\mathrm{d}t}
=\Delta\electric{V}_L}.
$$

The comparison sketches show current downward through a resistor and an inductor. Following the current through the resistor gives $\Delta\electric{V}_R=-\electric{I}\circuit{R}$, so the potential decreases. Following the current through the inductor gives $\Delta\electric{V}_L=-\circuit{L}\,\mathrm{d}\electric{I}/\mathrm{d}t$. The potential decreases for increasing current and increases for decreasing current.

##### Switching an LR circuit

The top sketch shows a battery, switch, resistor, and inductor in series. The inductor is drawn as an emf source with a negative upper terminal and positive lower terminal when current decreases. When current increases, the upper terminal is positive and the lower terminal is negative. The notes call the latter a back emf opposing the rise in current.

A long time after closing the circuit, the rate of change of the current and the inductor emf approach zero. The notes replace the ideal inductor with a wire and label its emf $\electric{\mathcal{E}}_L=0$.

A second sketch shows a switch with positions $a$ and $b$. In position $a$ the battery drives the series resistor and inductor. In the steady state,

$$
\electric{I}_0=\frac{\electric{V}_{\mathrm{bat}}}{\circuit{R}}.
$$

At $t=0$ the switch moves to $b$. The last sketch shows a closed loop with only $\circuit{R}$ and $\circuit{L}$.

With the source removed, use Kirchhoff's loop rule around the resistor and inductor.

$$
\Delta\electric{V}_R+\Delta\electric{V}_L
=-\electric{I}\circuit{R}-\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}=0.
$$

$$
\int_{\electric{I}_0}^{\electric{I}}\frac{\mathrm{d}\electric{I}'}{\electric{I}'}
=-\int_0^t\frac{\mathrm{d}t'}{\circuit{L}/\circuit{R}},
\qquad
\boxed{\electric{I}=\electric{I}_0\mathrm{e}^{-t/\signal{\tau}}},
\qquad \signal{\tau}=\frac{\circuit{L}}{\circuit{R}}.
$$

##### Transient comparison

| Circuit | Increasing quantity | Decreasing quantity |
| --- | --- | --- |
| RC | $\electric{Q}=\electric{Q}_0(1-\mathrm{e}^{-t/(\circuit{R}\circuit{C})})$ while charging | $\electric{Q}=\electric{Q}_0\mathrm{e}^{-t/(\circuit{R}\circuit{C})}$ while discharging |
| LR | $\electric{I}_L=\electric{I}_0(1-\mathrm{e}^{-t/(\circuit{L}/\circuit{R})})$ after starting from zero | $\electric{I}_L=\electric{I}_0\mathrm{e}^{-t/(\circuit{L}/\circuit{R})}$ after starting at $\electric{I}_0$ |

The RC current magnitude is $\electric{I}_0\mathrm{e}^{-t/(\circuit{R}\circuit{C})}$ and $\electric{V}_C=\electric{Q}/\circuit{C}$. The LR inductor emf magnitude decreases exponentially from $\electric{\mathcal{E}}_0$. The increasing-current entry appears to copy the RC denominator. The LR derivation on the same page uses $\circuit{L}/\circuit{R}$.

Current through an ideal inductor cannot change instantaneously. After a long time in a steady DC circuit, the inductor acts as a wire. A sketch of decreasing downward current marks the upper terminal negative and the lower terminal positive.

The battery–resistor–inductor loop gives $\electric{\mathcal{E}}_0-\electric{I}\circuit{R}-\circuit{L}\,\mathrm{d}\electric{I}/\mathrm{d}t=0$. Multiply by current to get

$$
\underbrace{\electric{I}\electric{\mathcal{E}}_0}_{\text{battery power}}
-\underbrace{\electric{I}^2\circuit{R}}_{\text{resistor dissipation}}
-\underbrace{\circuit{L}\electric{I}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}}_{\text{rate of energy storage in the magnetic field}}
=0.
$$

##### Energy in fields

| Electric field | Magnetic field |
| --- | --- |
| Capacitor energy $\energy{U}_C=\tfrac12\circuit{C}(\Delta\electric{V})^2$ | Inductor energy $\energy{U}_L=\tfrac12\circuit{L}\electric{I}^2$ |
| Energy density $\energy{u}_E=\electric{\varepsilon}_0\electric{E}^2/2$ | Energy density $\energy{u}_B=\magnetic{B}^2/(2\magnetic{\mu}_0)$ |

##### LC example

A $\quantity{2.0}{\mu F}$ capacitor is charged to $\quantity{20}{V}$ and connected across a $\quantity{6.0}{\mu H}$ inductor.

$$
\signal{f}=\frac{\signal{\omega}}{2\pi}
=\frac{1}{2\pi\sqrt{\circuit{L}\circuit{C}}}
=\frac{10^6}{2\pi\sqrt{12}}\,\unit{Hz}
\simeq\quantity{46}{kHz}.
$$

The handwritten box omits the factor of $10^6$ from converting micro-units. The next handwritten line includes it.

The sketch shows the capacitor initially charged. Choose the loop current opposite the direction used to charge it, so $\electric{I}=-\mathrm{d}\electric{Q}/\mathrm{d}t$. Then

$$
\Delta\electric{V}_C+\Delta\electric{V}_L
=\frac{\electric{Q}}{\circuit{C}}-\circuit{L}\frac{\mathrm{d}\electric{I}}{\mathrm{d}t}=0,
$$

$$
\boxed{\frac{\mathrm{d}^2\electric{Q}}{\mathrm{d}t^2}
=-\frac{\electric{Q}}{\circuit{L}\circuit{C}}}.
$$

$$
\electric{Q}_C=\electric{Q}_{\max}\cos(\signal{\omega}t),
\qquad
\electric{I}_L=\electric{I}_{\max}\sin(\signal{\omega}t),
\qquad
\electric{I}_{\max}=\electric{Q}_{\max}\signal{\omega}
=\frac{\electric{Q}_{\max}}{\sqrt{\circuit{L}\circuit{C}}}.
$$

##### Passive RC low-pass filters

Filters change the frequency content of signals. The sketch shows a series resistor between input and output, with a capacitor from the output node to ground. The output is taken across the capacitor. Its voltage cannot change instantaneously, so a rapidly varying input gives a smaller output in the sketch.

The example heading gives $\circuit{C}=\quantity{10}{nF}$ and $\circuit{R}=\quantity{10}{k\Omega}$. The cutoff calculation is

$$
\signal{f}_{\mathrm{cutoff}}
=\frac{1}{2\pi\circuit{R}\circuit{C}}
\simeq\quantity{1592}{Hz}
\simeq\quantity{1600}{Hz}.
$$

The diagram and substitution use $\quantity{1}{nF}$. That value gives about $\quantity{15.9}{kHz}$. The written result agrees with the $\quantity{10}{nF}$ in the heading.

The red note says that frequencies below $\quantity{1600}{Hz}$ pass unchanged. The oscilloscope sketch distinguishes the input and output traces near cutoff and marks their phase shift.

![[Kyle Kabasares - Electricity and Magnetism - low-pass filter oscilloscope traces.png|**Fig. 5** Input and output traces of the RC low-pass filter near cutoff]]

##### Ideal and realistic low-pass responses

The left sketch is labeled “impossibly ideal” and shows a $\quantity{10}{V}$ passband with an abrupt drop at $\quantity{1.6}{kHz}$. The frequency scale marks $\quantity{10}{Hz}$, $\quantity{100}{Hz}$, $\quantity{1}{kHz}$, and $\quantity{10}{kHz}$. The right sketch shows the more gradual roll-off of a real filter. It marks the cutoff where the amplitude has fallen by $\quantity{3}{dB}$.

![[Kyle Kabasares - Electricity and Magnetism - ideal and real low-pass responses.png|**Fig. 6** Ideal step response in frequency and realistic roll-off for a 1.6 kHz low-pass filter]]

##### Passive high-pass filter

Swap the positions of the resistor and capacitor in the low-pass circuit. The sketch now shows a small low-frequency output that rises toward the $\quantity{10}{V}$ passband at high frequency. The cutoff remains $\quantity{1.6}{kHz}$ for the same components.

![[Kyle Kabasares - Electricity and Magnetism - high-pass response.png|**Fig. 7** High-pass response with the 1.6 kHz cutoff marked]]

##### Multimeter tutorial

##### DC voltage

The meter is set to DC volts. The red lead runs from the V socket to the positive battery terminal. The black lead runs from COM to the negative terminal. The display reads $\quantity{8.68}{V}$. Reversing the probes gives a negative reading.

![[Kyle Kabasares - Electricity and Magnetism - multimeter DC voltage.png|**Fig. 8** DC voltage measurement across a battery with the V and COM sockets]]

##### Current

The red lead is in the mA socket and the black lead is in COM. The meter is in series between the battery pack and the load. The display reads $\quantity{60}{mA}$.

![[Kyle Kabasares - Electricity and Magnetism - multimeter current measurement.png|**Fig. 9** Current measurement with the multimeter inserted in series]]

##### Oscilloscope tutorial

An oscilloscope shows how voltage changes over time. Connect the probe to the desired channel. The sketch labels two parts.

- The ground clip connects to the circuit ground.
- The probe tip touches the circuit point to observe.

Adjust volts per division to change the vertical scale and seconds per division to change the horizontal scale. The notes use DC coupling for most of the basic circuits in the course.

The function generator entry gives $\quantity{2}{Hz}$ and $\quantity{8}{V}$.

##### Filter lab. RC low-pass design

The upper schematic shows six $\quantity{10}{\Omega}$ resistors in series feeding a $\quantity{0.47}{\mu F}$ capacitor. The lower schematic replaces the six resistors with $\circuit{R}=\quantity{60}{\Omega}$. The notes mark the function generator reading as peak to peak.

$$
\signal{f}_{\mathrm{cutoff}}
=\frac{1}{2\pi\circuit{R}\circuit{C}}
=\frac{1}{2\pi(60\,\unit{\Omega})(0.47\times10^{-6}\,\unit{F})}
=\quantity{5643.8}{Hz}\simeq\quantity{5600}{Hz}.
$$

Replacing the capacitor with $\quantity{0.1}{\mu F}$ gives an entry of “26” with no unit. The formula gives about $\quantity{26.5}{kHz}$. Replacing the resistance with $\quantity{330}{\Omega}$ gives the recorded cutoff of $\quantity{4822}{Hz}$ with that capacitor.

The last entries are a range of $\quantity{130}{Hz}$ to $\quantity{488}{Hz}$ and a peak-to-peak voltage of $\quantity{7.80}{V}$.

##### Low-pass and high-pass sections in series

The low-pass section uses a series $\quantity{330}{\Omega}$ resistor and a $\quantity{0.1}{\mu F}$ capacitor across its output. The high-pass section uses a series $\quantity{0.47}{\mu F}$ capacitor and a $\quantity{100}{\Omega}$ resistor across the final output.

For the high-pass section, the notes use $\signal{f}_{\mathrm{cutoff}}=1/(2\pi\circuit{R}\circuit{C})\simeq\quantity{3400}{Hz}$. The response sketch marks the high-pass cutoff at $\quantity{3400}{Hz}$ and the low-pass cutoff at $\quantity{4800}{Hz}$. The sketched passband lies between them.

![[Kyle Kabasares - Electricity and Magnetism - cascaded low-pass and high-pass sections.png|**Fig. 10** Cascaded filter circuit and the sketched passband between the two cutoff frequencies]]

| Frequency (Hz) | Peak-to-peak voltage (V) |
| --- | --- |
| 47 | 1.08 |
| 3,5400 | 1.08 |
| 9,730 | 1.00 |

The middle frequency is reproduced as written. It may mean $3540\,\unit{Hz}$, near the marked high-pass cutoff.

## Source

Kyle Kabasares, *Electricity and Magnetism (Physics 9H, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | The force on a charge. |
| $\energy{U}$ | $\unit{J}$ | Electric potential energy | The interaction energy of the two charges. |
| $\electric{V}$ | $\unit{V}$ | Electric potential | The potential energy per unit test charge. |
| $\mechanical{r}$ | $\unit{m}$ | Radial distance | The distance from a source, axis, or center. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The constant that sets the strength of the electric interaction in vacuum. |
| $\mechanical{d}$ | $\unit{m}$ | Separation or diameter | The separation of charges, plates, or slits, or the wire diameter. |
| $\electric{Q}$ | $\unit{C}$ | Total charge | The charge distributed along the semicircular arc. |
| $\theta$, $\mechanical{\theta}$ | $\unit{rad}$ | Angle | A geometric angle used in projections, polarization, and ray diagrams. |
| $\mechanical{L}$ | $\unit{m}$ | Length | The length of a charge distribution or pendulum, or the distance to the screen. |
| $\mechanical{A}$ | $\unit{m^2}$ | Area | The area over which the surface charge is distributed. |
| $\mechanical{\vec A}$ | $\unit{m^2}$ | Area vector | A vector normal to the surface with magnitude equal to the area. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | The radius of a sphere, disk, wire, or coil, or the radius of curvature of a mirror. |
| $\electric{I}$, $\electric{I}_2$–$\electric{I}_6$ | $\unit{A}$ | Circuit currents | The current in the feed and each bridge branch. |
| $\circuit{C}$ | $\unit{F}$ | Capacitance | The charge magnitude per unit voltage across a capacitor. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Permittivity | The electric response parameter of a dielectric or transparent medium. |
| $t$, $\signal{t}$, $\Delta\signal{t}$ | $\unit{s}$ | Time and elapsed time | The time coordinate or the duration of a process. |
| $\signal{\tau}$ | $\unit{s}$ | Circuit time constant | The exponential time scale, equal to $\circuit{R}\circuit{C}$ or $\circuit{L}/\circuit{R}$. |
| $\electric{\mathcal{E}}$ | $\unit{V}$ | Electromotive force | The source voltage in the charging loop. |
| $\electric{V}_C$ | $\unit{V}$ | Capacitor voltage | The potential difference across the capacitor. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | The magnetic field that determines the flux through a surface. |
| $\magnetic{\Phi}_B$ | $\unit{Wb}$ | Magnetic flux | The integral of the normal magnetic field over the surface. |
| $\mechanical{\vec\ell}$ | $\unit{m}$ | Wire length vector | The directed length of the wire segment carrying current. |
| $\magnetic{\mu}_0$ | $\unit{T\,m\,A^{-1}}$ | Vacuum permeability | The magnetic constant in the current-element and moving-charge formulas. |
| $N$ | 1 | Turn count | The number of loops contributing to the coil field. |
| $\electric{I}_{\mathrm{ind}}$ | $\unit{A}$ | Induced current | The current driven by the induced emf. |
| $\circuit{L}$ | $\unit{H}$ | Inductance | The linked magnetic flux per unit current. |
| $\Delta\electric{V}_R$, $\Delta\electric{V}_L$ | $\unit{V}$ | Element potential changes | The signed potential changes across the resistor and inductor along the loop. |
| $\energy{U}_C$, $\energy{U}_L$ | $\unit{J}$ | Stored capacitor and inductor energies | The energies stored by the respective circuit elements. |
| $\energy{u}_E$, $\energy{u}_B$ | $\unit{J\,m^{-3}}$ | Electric and magnetic energy densities | The energy per unit volume in the respective fields. |
| $\signal{f}$ | $\unit{Hz}$ | Oscillation frequency | The number of cycles per second in a circuit or wave. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The phase advance per second in an oscillation. |
| $\signal{f}_{\mathrm{cutoff}}$ | $\unit{Hz}$ | Cutoff frequency | The characteristic frequency set by the resistor and capacitor. |
| $\electric{v}_R$, $\electric{V}_R$ | $\unit{V}$ | Resistor voltage | The instantaneous resistor voltage and its amplitude. |
| $\electric{v}_L$, $\electric{V}_L$ | $\unit{V}$ | Inductor voltage | The instantaneous voltage across the inductor and its amplitude. |
| $\magnetic{\mu}$ | $\unit{T\,m\,A^{-1}}$ | Permeability | Magnetic response parameter for the medium. |
