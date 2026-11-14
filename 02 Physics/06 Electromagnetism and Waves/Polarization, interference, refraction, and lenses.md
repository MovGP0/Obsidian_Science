---
title: "Polarization, interference, refraction, and lenses"
---

> [!TLDR]
> Compare the wave and ray models using polarizers, fringe patterns, refraction, and image formation.

## Worked lecture material

Accelerating charges produce electromagnetic radiation.

##### Polarizers

Intensity is proportional to the square of the electric-field amplitude. An ideal first polarizer transmits half the intensity of unpolarized light. A second polarizer at angle $\mechanical{\theta}$ to the first obeys Malus’s law.

$$
\energy{I}_1=\frac{\energy{I}_0}{2},
\qquad
\energy{I}_2=\energy{I}_{\mathrm{transmitted}}
=\energy{I}_1\cos^2\mechanical{\theta}.
$$

##### Superposition and interference

The wave sketch labels a maximum as a crest and a minimum as a trough. The principle of superposition applies to the displacements of the two waves.

$$
\begin{aligned}
\mechanical{D}_1&=\mechanical{D}_{01}\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_1),\\
\mechanical{D}_2&=\mechanical{D}_{02}\sin(\signal{k}x-\signal{\omega}\signal{t}+\signal{\phi}_2).
\end{aligned}
$$

When crests line up with troughs, equal-amplitude waves cancel completely by destructive interference. When crests line up with crests and troughs line up with troughs, the waves undergo constructive interference.

##### Path and phase differences

Interference depends on the path length difference and on the initial phase difference $\Delta\signal{\phi}=\signal{\phi}_1-\signal{\phi}_2$.

![[Kyle Kabasares - Electricity and Magnetism - Double-slit path difference.png|**Fig. 11** The two paths to the screen differ by the projection of the slit separation along the direction of observation.]]

For slit separation $\mechanical{d}$, screen distance $\mechanical{L}$, and displacement $y$ along the screen, the far-screen geometry gives

$$
\Delta\mechanical{r}\simeq\mechanical{d}\sin\mechanical{\theta},
\qquad
\tan\mechanical{\theta}=\frac{y}{\mechanical{L}}.
$$

For waves emitted in phase, a bright fringe occurs where $\Delta\mechanical{r}=m\signal{\lambda}$ for integer order $m$. At small angles, $\cos\mechanical{\theta}\simeq1$, so

$$
\sin\mechanical{\theta}\simeq\tan\mechanical{\theta}
=\frac{y}{\mechanical{L}}
\simeq\frac{m\signal{\lambda}}{\mechanical{d}}.
$$

##### Physics discussion, question 4

In part (a), the notes use $\energy{I}=\electric{E}_0\magnetic{B}_0/(2\magnetic{\mu}_0)$, $\electric{E}_0=\mechanical{c}\magnetic{B}_0$, and $\energy{I}=\energy{P}/\mechanical{A}$. For an absorbing object, radiation pressure and Newton’s second law give

$$
\mechanical{p}_{\mathrm{rad}}=\frac{\energy{I}}{\mechanical{c}},
\qquad
\mechanical{F}_{\mathrm{rad}}=\frac{\energy{I}\mechanical{A}}{\mechanical{c}}
=\mechanical{m}\mechanical{a},
\qquad
\mechanical{a}=\frac{\energy{I}\mechanical{\ell}^2}{\mechanical{m}\mechanical{c}},
$$

where the last expression reads the unclear squared length in the notes as the side length of a square cross section.

In part (b), the initial speed is estimated from the root-mean-square thermal speed. With constant acceleration, the stopping time comes from

$$
\mechanical{v}_{\mathrm{rms}}
=\sqrt{\frac{3\thermal{k}_{\mathrm B}\thermal{T}}{\mechanical{m}}},
\qquad
\mechanical{a}=\frac{\mechanical{v}_f-\mechanical{v}_i}{\Delta\signal{t}},
\qquad
\Delta\signal{t}=\frac{0-\mechanical{v}_i}{\mechanical{a}}.
$$

The mass conversion starts with $85\,\unit{g\,mol^{-1}}$ and divides by $6.02\times10^{23}$ atoms per mole. The handwritten exponent appears to have a minus sign. The positive exponent is required for the number of atoms per mole.

##### Field from intensity

For $\energy{I}=100\,\unit{W\,m^{-2}}$, the notes find the root-mean-square electric and magnetic fields.

$$
\electric{E}_{\mathrm{rms}}=\sqrt{\energy{I}\mechanical{c}\magnetic{\mu}_0}
\approx194\,\unit{V\,m^{-1}},
\qquad
\magnetic{B}_{\mathrm{rms}}=\frac{\electric{E}_{\mathrm{rms}}}{\mechanical{c}}
\approx647\,\unit{nT}.
$$

##### Light pulse and pendulum

The sketch shows a pendulum of length $\mechanical{L}$ moving from the vertical to angle $\mechanical{\theta}$, where its vertical projection is $\mechanical{L}\cos\mechanical{\theta}$. A pulse of power $\energy{P}$ and duration $\Delta\signal{t}$ transfers momentum $\mechanical{p}=\energy{P}\Delta\signal{t}/\mechanical{c}$ when absorbed. The pendulum rises until its initial kinetic energy is converted to gravitational potential energy.

$$
\begin{aligned}
\energy{K}&=\tfrac12\mechanical{m}\mechanical{v}^2
=\frac{\mechanical{p}^2}{2\mechanical{m}},\\
\frac{\mechanical{p}^2}{2\mechanical{m}}
&=\mechanical{m}\mechanical{g}\mechanical{L}(1-\cos\mechanical{\theta}),\\
\mechanical{\theta}
&=\arccos\left(1-\frac{(\energy{P}\Delta\signal{t}/\mechanical{c})^2}
{2\mechanical{m}^2\mechanical{g}\mechanical{L}}\right).
\end{aligned}
$$

The numerical substitution uses $\energy{P}=1000\times10^6\,\unit{W}$, $\Delta\signal{t}=200\times10^{-9}\,\unit{s}$, $\mechanical{m}=10\times10^{-3}\,\unit{kg}$, $\mechanical{g}=9.8\,\unit{m\,s^{-2}}$, and $\mechanical{L}=0.04\,\unit{m}$. The first handwritten angle equation has the negative sign carried here. The sign appears to be omitted in the later substitution.

##### Discussion, questions 8 and 9

For question 8, the notes record $\Delta\signal{t}=\lvert(\mechanical{d}_a-\mechanical{d}_p)/\mechanical{c}\rvert/10=0.0143\,\unit{s}$ without the preceding problem statement.

In question 9, unpolarized light passes through three ideal polarizers whose axes are at $0^\circ$, $\mechanical{\theta}$, and $90^\circ$. The first transmits half the initial intensity. Apply Malus’s law to each of the next two.

$$
\begin{aligned}
\energy{I}_3
&=\tfrac12\energy{I}_0\cos^2\mechanical{\theta}\cos^2(90^\circ-\mechanical{\theta})\\
&=\tfrac12\energy{I}_0\cos^2\mechanical{\theta}\sin^2\mechanical{\theta}
=\tfrac18\energy{I}_0\sin^2(2\mechanical{\theta}).
\end{aligned}
$$

The last form uses $2\cos\mechanical{\theta}\sin\mechanical{\theta}=\sin(2\mechanical{\theta})$.

##### Wave optics

Diffraction is the bending or spreading of waves. The notes compare double-slit interference fringes with the bright central maximum and weaker side fringes of single-slit diffraction.

![[Kyle Kabasares - Electricity and Magnetism - Double-slit and single-slit patterns.png|**Fig. 12** Sketches of the double-slit fringe pattern and the single-slit central maximum and side maxima.]]

For small angles, adjacent double-slit fringes have spacing

$$
\Delta y=y_{m+1}-y_m=\frac{\signal{\lambda}\mechanical{L}}{\mechanical{d}}.
$$

The example gives $1.0\,\unit{cm}$ from order $m=0$ to order $m=2$, a slit separation of $0.2\,\unit{mm}$, and a wavelength of $600\,\unit{nm}$. The notes leave $\mechanical{L}$ to be found. The two fringe spacings give $\Delta y=0.50\,\unit{cm}$ and hence $\mechanical{L}\simeq1.7\,\unit{m}$.

##### Reflection, refraction, and Snell’s law

In the ray model, light follows a straight path in a uniform medium until an interaction with matter changes its direction. The mirror sketch extends the reflected rays behind the mirror to the virtual image $P_1$ of point $P$.

![[Kyle Kabasares - Electricity and Magnetism - Plane mirror virtual image.png|**Fig. 13** Backward extensions of reflected rays meet at the virtual image behind a plane mirror.]]

![[Kyle Kabasares - Electricity and Magnetism - Mirror and law of reflection.png|**Fig. 14** The incident and reflected angles are measured from the surface normal.]]

##### Speed and refraction

The source sets the frequency $\signal{f}$, which stays fixed across a stationary interface. The material sets the speed, so the wavelength changes with the speed.

$$
\mechanical{v}=\signal{\lambda}\signal{f}=\frac{\mechanical{c}}{\signal{n}}.
$$

The arrow in the handwriting appears to place “does not change” under $\signal{\lambda}$. The statement about the source and the speed relation indicate that it is $\signal{f}$ that stays fixed.

Snell’s law relates the angles of incidence and refraction measured from the surface normal.

$$
\signal{n}_1\sin\mechanical{\theta}_1=\signal{n}_2\sin\mechanical{\theta}_2.
$$

For $\signal{n}_2>\signal{n}_1$, the refracted ray bends toward the normal, so $\mechanical{\theta}_2<\mechanical{\theta}_1$ at oblique incidence.

![[Kyle Kabasares - Electricity and Magnetism - Refraction at an interface.png|**Fig. 15** Incident, weakly reflected, and refracted rays at an interface where the second medium has the higher refractive index.]]

The worked Snell’s law problem records $\signal{n}_2=\signal{n}_1\sin\mechanical{\theta}_1/\sin\mechanical{\theta}_2=1.37$. The law of reflection gives $\mechanical{\theta}_i=\mechanical{\theta}_r$.

##### Lenses and images

In the sign convention used here, real object and image distances are positive and virtual distances are negative. A converging lens is thicker in the middle and has positive focal length. A diverging lens is thinner in the middle and has negative focal length.

![[Kyle Kabasares - Electricity and Magnetism - Converging lens real image.png|**Fig. 16** A converging lens brings rays from the real object to a real, inverted image on the other side.]]

![[Kyle Kabasares - Electricity and Magnetism - Diverging lens virtual image.png|**Fig. 17** The backward extensions of the refracted rays meet at the upright virtual image on the object side. The separate “Real image” label on the right conflicts with the ray construction.]]

A real image forms where the actual light rays meet. For a virtual image, trace the refracted rays backward to where they appear to originate.

The notes use $\mechanical{s}$, $\mechanical{o}$, and $\mechanical{s}_o$ for the object distance, and $\mechanical{s}'$, $\mechanical{i}$, and $\mechanical{s}_i$ for the image distance. The object height is $\mechanical{h}=\mechanical{y}_o$ and the image height is $\mechanical{h}'=\mechanical{y}_i$.

##### Thin-lens equations

The notes refer to the optics summary on textbook page 687. Similar triangles give the relation between the signed heights and distances.

$$
\frac{\mechanical{h}'}{\mechanical{s}'}
=-\frac{\mechanical{h}}{\mechanical{s}},
\qquad
\mechanical{M}
=\frac{\mechanical{h}'}{\mechanical{h}}
=-\frac{\mechanical{s}'}{\mechanical{s}}.
$$

The sign determines orientation. If $\mechanical{M}<0$, the image is inverted. If $\mechanical{M}>0$, it is upright. The size ratio is $\lvert\mechanical{M}\rvert=\lvert\mechanical{h}'/\mechanical{h}\rvert$.

The thin-lens equation and the lensmaker’s equation in air are

$$
\frac{1}{\mechanical{f}}=\frac{1}{\mechanical{s}}+\frac{1}{\mechanical{s}'},
\qquad
\frac{1}{\mechanical{f}}=(\signal{n}-1)
\left(\frac{1}{\mechanical{R}_1}-\frac{1}{\mechanical{R}_2}\right).
$$

The notes mark the first radius positive and the second negative for the illustrated sign choice. With light traveling left to right, each radius is positive if its center of curvature lies to the right of the corresponding surface.

##### Reflection

For a plane mirror, the object acts as the source of the rays. The angles of incidence and reflection are equal and are measured from the normal. For a curved mirror, use the normal to the local tangent at the point of incidence.

![[Kyle Kabasares - Electricity and Magnetism - Reflection at a curved mirror.png|**Fig. 18** The reflection law applies at the point where the incident ray meets the curved surface.]]

## Source

Kyle Kabasares, *Electricity and Magnetism (Physics 9H, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{r}$ | $\unit{m}$ | Radial distance | The distance from a source, axis, or center. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ | $\unit{m}$ | Position coordinates | The coordinates in the spatial derivatives. |
| $\mechanical{d}$ | $\unit{m}$ | Separation or diameter | The separation of charges, plates, or slits, or the wire diameter. |
| $\mechanical{m}$ | $\unit{kg}$ | Object mass | The mass supported by the electric force or suspended by the string. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration used for weight and gravitational potential energy. |
| $\theta$, $\mechanical{\theta}$ | $\unit{rad}$ | Angle | A geometric angle used in projections, polarization, and ray diagrams. |
| $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | The force per unit mass of the ion or test object. |
| $\mechanical{s}$ | $\unit{m}$ | Dipole separation | The distance between the two charges of the dipole. |
| $\mechanical{L}$ | $\unit{m}$ | Length | The length of a charge distribution or pendulum, or the distance to the screen. |
| $\mechanical{A}$ | $\unit{m^2}$ | Area | The area over which the surface charge is distributed. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | The radius of a sphere, disk, wire, or coil, or the radius of curvature of a mirror. |
| $t$, $\signal{t}$, $\Delta\signal{t}$ | $\unit{s}$ | Time and elapsed time | The time coordinate or the duration of a process. |
| $\energy{P}$ | $\unit{W}$ | Electrical power | The rate of electrical energy transfer in the resistive element. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Speed | The speed of a particle or of a wave in the medium. |
| $\energy{K}$ | $\unit{J}$ | Kinetic energy | The energy of a particle moving at the selected speed. |
| $\magnetic{\mu}_0$ | $\unit{T\,m\,A^{-1}}$ | Vacuum permeability | The magnetic constant in the current-element and moving-charge formulas. |
| $\signal{f}$ | $\unit{Hz}$ | Oscillation frequency | The number of cycles per second in a circuit or wave. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The phase advance per second in an oscillation. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase | The phase offset of a sinusoid or the phase difference between two oscillations. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Wave number | Spatial rate of change of phase. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial period of the wave. |
| $\electric{E}_0$, $\electric{\vec E}_0$ | $\unit{V\,m^{-1}}$ | Electric-field amplitude | Scalar or vector amplitude in the sinusoidal wave solution. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | Propagation speed obtained from Maxwell’s equations. |
| $\magnetic{\mu}$ | $\unit{T\,m\,A^{-1}}$ | Permeability | Magnetic response parameter for the medium. |
| $\magnetic{B}_0$ | $\unit{T}$ | Magnetic-field amplitude | Peak magnetic field of the traveling wave. |
| $\energy{I}$ | $\unit{W\,m^{-2}}$ | Intensity | Time-averaged energy flux magnitude. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Radiation transfers momentum when absorbed or reflected. |
| $\mechanical{p}_{\mathrm{rad}}$ | $\unit{Pa}$ | Radiation pressure | Force per unit area exerted by incident light. |
| $\Delta\mechanical{r}$ | $\unit{m}$ | Path length difference | Difference in distance traveled by the two interfering waves. |
| $\mechanical{v}_{\mathrm{rms}}$ | $\unit{m\,s^{-1}}$ | Root-mean-square speed | Thermal speed used to estimate the atom’s initial speed. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature in the thermal speed estimate. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates temperature to energy per particle. |
| $\electric{E}_{\mathrm{rms}}$ | $\unit{V\,m^{-1}}$ | Root-mean-square electric field | Field inferred from the time-averaged intensity. |
| $\magnetic{B}_{\mathrm{rms}}$ | $\unit{T}$ | Root-mean-square magnetic field | Magnetic counterpart of the electric RMS field. |
| $\signal{n}$ | 1 | Refractive index | Ratio of the speed of light in vacuum to its phase speed in the medium. |
| $\mechanical{f}$ | $\unit{m}$ | Focal length | Signed distance to the focus of the lens. |
| $\mechanical{s}$, $\mechanical{o}$, $\mechanical{s}_o$ | $\unit{m}$ | Object distance | Signed distance from the lens to the object. |
| $\mechanical{s}'$, $\mechanical{i}$, $\mechanical{s}_i$ | $\unit{m}$ | Image distance | Signed distance from the lens to the image. |
| $\mechanical{h}$, $\mechanical{y}_o$ | $\unit{m}$ | Object height | Height of the object above the optical axis. |
| $\mechanical{h}'$, $\mechanical{y}_i$ | $\unit{m}$ | Image height | Signed height of the image relative to the optical axis. |
| $\mechanical{M}$ | 1 | Transverse magnification | Signed ratio of image height to object height. |
| $\mechanical{R}_1$, $\mechanical{R}_2$ | $\unit{m}$ | Lens surface radii of curvature | Signed radii in the lensmaker’s equation. |
