---
title: "Magnetic forces and fields of wires and loops"
---

> [!TLDR]
> Use the Lorentz force to predict charge motion and use Biot–Savart and Ampère’s law to calculate fields from steady currents.

## Worked lecture material

##### Magnetism

The notes introduce permanent and induced magnetism, then compare magnetic and electric fields. Magnetic poles attract or repel. The bar magnet has north and south poles and closed field-line loops. Electric charges attract or repel, and the electric sketches show lines leaving a positive point charge and entering a negative point charge. Electric sources can be individual charges or dipoles. In the classical model used here, magnetic sources have no isolated poles.

The electric fields add by superposition, $\electric{\vec E}=\electric{\vec E}_1+\electric{\vec E}_2+\electric{\vec E}_3+\cdots$. The notes compare the two Gauss laws.

$$
\electric{\Phi}_E=\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}
=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0},
\qquad
\magnetic{\Phi}_B=\oint\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec A}=0.
$$

In the magnet sketch, every field line entering a closed surface also leaves it. The notes relate zero net magnetic flux to the absence of magnetic monopoles in classical electromagnetism. Magnetic fields also obey superposition.

$$
\magnetic{\vec B}=\magnetic{\vec B}_1+\magnetic{\vec B}_2+\magnetic{\vec B}_3+\cdots.
$$

The bottom sketch shows a circulating electron, an upward arrow labeled magnetic dipole moment, and closed magnetic field lines.

A moving charge creates a magnetic field. The field is a vector with magnitude $\magnetic{B}$ and a direction given by the right-hand rule in a cross product. The SI unit is the tesla, $1\,\unit{T}=1\,\unit{N\,A^{-1}\,m^{-1}}$. The CGS unit is the gauss, written G or Gs.

The magnetic dipole moment of a current loop is $\magnetic{\vec\mu}=\electric{I}\mechanical{\vec A}$. The sketch shows the moment normal to the loop, pointing from the south pole to the north pole.

##### Drawing magnetic field directions

Use arrows for right, left, up, and down. A circled cross $\otimes$ points into the board and a circled dot $\odot$ points out of the board. The arrow sketch compares these symbols with the tail and tip of an arrow.

For a wire perpendicular to the field, the magnetic force balances the weight.

$$
\mechanical{\vec F}_m
=\electric{I}\mechanical{\vec\ell}\times\magnetic{\vec B},
\qquad
\mechanical{F}_m-\mechanical{F}_g=0,
\qquad
\electric{I}\mechanical{\ell}\magnetic{B}=\mechanical{m}\mechanical{g}.
$$

$$
\electric{I}
=\frac{\mechanical{m}\mechanical{g}}{\mechanical{\ell}\magnetic{B}}.
$$

The numerical line uses $\mechanical{m}=\quantity{0.010}{kg}$, $\mechanical{g}=\quantity{9.8}{m\,s^{-2}}$, and $\magnetic{B}=0.5\times10^{-4}\,\unit{T}$ and gives $\electric{I}=\quantity{1960}{A}$. The value implies $\mechanical{\ell}=\quantity{1}{m}$, which is not written in the substitution.

For a particle moving perpendicular to the field, the margin gives $\electric{q}\mechanical{v}\magnetic{B}=\mechanical{m}\mechanical{v}^2/\mechanical{r}$.

##### Velocity selector

The sketch shows a positive particle moving right, an electric field pointing up, and a magnetic field pointing out of the page. The magnetic and electric forces balance when

$$
\electric{q}\mechanical{v}\magnetic{B}=\electric{q}\electric{E},
\qquad
\boxed{\mechanical{v}=\frac{\electric{E}}{\magnetic{B}}}
\simeq1.64\times10^6\,\unit{m\,s^{-1}}.
$$

The handwritten speed has a small superscript $6$ after $1.64$. The following kinetic energies confirm the power-of-ten reading. Using $\energy{K}=\mechanical{m}\mechanical{v}^2/2$, the notes obtain $\quantity{14}{keV}$ for a proton and $\quantity{7.7}{eV}$ for an electron.

##### Circular motion after acceleration

$$
\electric{q}\mechanical{v}\magnetic{B}=\frac{\mechanical{m}\mechanical{v}^2}{\mechanical{r}},
\qquad
\electric{q}\Delta\electric{V}=\frac12\mechanical{m}\mechanical{v}^2.
$$

$$
\mechanical{v}=\sqrt{\frac{2\electric{q}\Delta\electric{V}}{\mechanical{m}}},
\qquad
\mechanical{r}=\sqrt{\frac{2\mechanical{m}\Delta\electric{V}}{\electric{q}\magnetic{B}^2}}
=\quantity{63.3}{cm}.
$$

The radius difference is $\Delta\mechanical{r}=\mechanical{r}_{26}-\mechanical{r}_{24}=\quantity{2.58}{cm}$.

The margin reads “Look up TNA.”

For a moving point charge,

$$
\magnetic{\vec B}_{\mathrm{point}}
=\frac{\magnetic{\mu}_0}{4\pi}
 \frac{\electric{q}\,\mechanical{\vec v}\times\hat r}{\mechanical{r}^2},
\qquad
\magnetic{\mu}_0=4\pi\times10^{-7}\,\unit{T\,m\,A^{-1}}.
$$

In the snapshot at $t=0$, a positive charge moves to the right. The field at the marked point above and to its right points out of the page.

##### Slide 7 example

The electron moves along $+\hat{k}$ at $2.0\times10^7\,\unit{m\,s^{-1}}$. The observation point is $\quantity{0.01}{m}$ along $+\hat{\imath}$. The sketch labels the point $(1,0,0)$, consistent with coordinates in centimeters.

$$
\magnetic{\vec B}
=\frac{\magnetic{\mu}_0}{4\pi}
\frac{(-\electric{e})(2.0\times10^7\,\unit{m\,s^{-1}})}
     {(0.01\,\unit{m})^2}
     (\hat{k}\times\hat{\imath})
=-(3.2\times10^{-15}\,\unit{T})\hat{\jmath}.
$$

The box gives the magnitude $3.2\times10^{-15}\,\unit{T}$.

To pass from a moving charge to a small current element, the notes use $\electric{I}=\mathrm{d}\electric{q}/\mathrm{d}t$ and replace $\electric{q}\mechanical{\vec v}$ by $(\Delta\electric{q}/\Delta t)\Delta\mechanical{\vec x}=\electric{I}\Delta\mechanical{\vec x}$. The field contribution is

$$
\Delta\magnetic{\vec B}
=\frac{\magnetic{\mu}_0}{4\pi}
\frac{\electric{I}\Delta\mechanical{\vec s}\times\hat r}{\mechanical{r}^2}.
$$

The distance $\mechanical{r}$ runs from the current element to the point where the field is evaluated.

##### Field of a very long straight wire

The observation point is a perpendicular distance $\mechanical{d}$ from the wire. A current element $\electric{I}\Delta\mechanical{x}$ a distance $\mechanical{x}$ along the wire is at distance $\sqrt{\mechanical{x}^2+\mechanical{d}^2}$ from that point. The sine factor is $\sin\theta=\mechanical{d}/\sqrt{\mechanical{x}^2+\mechanical{d}^2}$.

$$
\Delta\magnetic{B}
=\frac{\magnetic{\mu}_0}{4\pi}
 \frac{\electric{I}\Delta\mechanical{x}\,\mechanical{d}}
      {(\mechanical{x}^2+\mechanical{d}^2)^{3/2}}.
$$

$$
\magnetic{B}
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{d}}{4\pi}
 \int_{-\infty}^{\infty}
 \frac{\mathrm{d}\mechanical{x}}{(\mechanical{x}^2+\mechanical{d}^2)^{3/2}}
=\frac{\magnetic{\mu}_0\electric{I}}{2\pi\mechanical{d}}.
$$

Use the right-hand rule for direction. With current to the right, the sketch shows dots above the wire and crosses below it.

##### Field on the axis of a circular loop

The loop of radius $\mechanical{R}$ lies in the $xy$ plane. The axis is $z$. A current element is perpendicular to the unit vector from the element to the observation point, so the cross-product sine is one.

$$
\mathrm{d}\magnetic{\vec B}
=\frac{\magnetic{\mu}_0}{4\pi}
 \frac{\electric{I}\,\mathrm{d}\mechanical{\vec\ell}\times\hat r}{\mechanical{r}^2}.
$$

For the projection onto the $z$ axis, the sketch gives a sine factor of $\mechanical{R}/\sqrt{\mechanical{R}^2+\mechanical{z}^2}$. The transverse parts cancel around the loop. Integrating the axial component gives

$$
\magnetic{B}_z
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{R}}{4\pi(\mechanical{R}^2+\mechanical{z}^2)^{3/2}}
 \oint\mathrm{d}\mechanical{\ell}
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{R}^2}
 {2(\mechanical{R}^2+\mechanical{z}^2)^{3/2}}.
$$

At the center, $\magnetic{B}=\magnetic{\mu}_0\electric{I}/(2\mechanical{R})$. For $N$ coincident turns, multiply both results by $N$.

The notes compare summing field contributions with using a law based on symmetry.

| Electric field | Magnetic field |
| --- | --- |
| $\electric{\vec E}=\int\mathrm{d}\electric{\vec E}$ | $\magnetic{\vec B}=\int\mathrm{d}\magnetic{\vec B}$ |
| Gauss's law gives $\oint\electric{\vec E}\cdot\mathrm{d}\mechanical{\vec A}=\electric{Q}_{\mathrm{enc}}/\electric{\varepsilon}_0$. | Ampère's law for steady current gives $\oint\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec\ell}=\magnetic{\mu}_0\electric{I}_{\mathrm{enc}}$. |

##### Solenoids and coils

The notes compare the solenoid to the parallel-plate capacitor because it produces a uniform field in its ideal interior. A real solenoid has finite length and fringe fields. An ideal solenoid has infinite length and zero field outside.

In the terminology of these problems, a solenoid has turns along its length with no overlap, and the wire diameter may be given. A coil of wire has turns wound on top of one another, with wire treated as infinitely thin. The handwritten warning says that “coil” can also refer to a solenoid and to use the winding information to distinguish the cases.

For coincident turns, the notes repeat

$$
\magnetic{B}_{\mathrm{coil,center}}=\frac{\magnetic{\mu}_0N\electric{I}}{2\mechanical{R}},
\qquad
\magnetic{B}_{\mathrm{coil,axis}}
=\frac{\magnetic{\mu}_0\electric{I}\mechanical{R}^2N}
 {2(\mechanical{z}^2+\mechanical{R}^2)^{3/2}}.
$$

The direction follows the right-hand rule. The final sketch shows a pair of Helmholtz coils for the electron charge-to-mass ratio lab.

##### Ampère's law

The sketch labels the contour $C$ and the surface $S$ that it bounds. Current passes through $S$. The tangent field and directed line element follow $C$.

$$
\oint_C\magnetic{\vec B}\cdot\mathrm{d}\mechanical{\vec\ell}
=\magnetic{\mu}_0\electric{I}_{\mathrm{enc}}.
$$

**Example**

The clockwise contour has line integral $3.77\times10^{-6}\,\unit{T\,m}$. Current $\electric{I}_1=\quantity{6.0}{A}$ is into the page, $\electric{I}_2=\quantity{4.0}{A}$ is out, and $\electric{I}_3$ is marked into the page. The clockwise orientation counts inward currents positive.

$$
\frac{3.77\times10^{-6}\,\unit{T\,m}}{4\pi\times10^{-7}\,\unit{T\,m\,A^{-1}}}
=6.0\,\unit{A}-4.0\,\unit{A}+\electric{I}_3.
$$

The left side is $\quantity{3.0}{A}$, so $\electric{I}_3=\quantity{1.0}{A}$ into the page.

##### Field inside a wire

The notes suggest choosing an Amperian loop with simple field contributions, for example zero field, field perpendicular to the line element, or field tangent to the loop. The round wire sketch shows a cross section of radius $\mechanical{R}$ and a concentric loop of radius $\mechanical{r}$. The field is tangent to the loop. For uniform current density,

$$
\electric{I}_{\mathrm{enc}}
=\electric{I}_{\mathrm{tot}}\frac{\mechanical{r}^2}{\mechanical{R}^2},
\qquad
\magnetic{B}(2\pi\mechanical{r})
=\magnetic{\mu}_0\electric{I}_{\mathrm{tot}}\frac{\mechanical{r}^2}{\mechanical{R}^2}.
$$

$$
\boxed{\magnetic{B}
=\frac{\magnetic{\mu}_0\electric{I}_{\mathrm{tot}}\mechanical{r}}
 {2\pi\mechanical{R}^2}},\qquad 0\leq\mechanical{r}\leq\mechanical{R}.
$$

## Source

Kyle Kabasares, *Electricity and Magnetism (Physics 9H, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | The force on a charge. |
| $\electric{\vec E}$ | $\unit{V\,m^{-1}}$ | Electric field | The electric force per unit test charge. |
| $\electric{V}$ | $\unit{V}$ | Electric potential | The potential energy per unit test charge. |
| $\electric{q}$, $\electric{q}_1$, $\electric{q}_2$ | $\unit{C}$ | Electric charge | The test or source charge in the electrostatic relations. |
| $\mechanical{r}$ | $\unit{m}$ | Radial distance | The distance from a source, axis, or center. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ | $\unit{m}$ | Position coordinates | The coordinates in the spatial derivatives. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The constant that sets the strength of the electric interaction in vacuum. |
| $\mechanical{d}$ | $\unit{m}$ | Separation or diameter | The separation of charges, plates, or slits, or the wire diameter. |
| $\mechanical{m}$ | $\unit{kg}$ | Object mass | The mass supported by the electric force or suspended by the string. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration used for weight and gravitational potential energy. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | The magnitude of the charge of an electron or proton. |
| $\electric{Q}$ | $\unit{C}$ | Total charge | The charge distributed along the semicircular arc. |
| $\theta$, $\mechanical{\theta}$ | $\unit{rad}$ | Angle | A geometric angle used in projections, polarization, and ray diagrams. |
| $\electric{\Phi}$, $\electric{\Phi}_{E,\mathrm{net}}$ | $\unit{N\,m^2\,C^{-1}}$ | Electric flux | The surface integral of the normal electric field. |
| $\mechanical{\vec A}$ | $\unit{m^2}$ | Area vector | A vector normal to the surface with magnitude equal to the area. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | The radius of a sphere, disk, wire, or coil, or the radius of curvature of a mirror. |
| $\electric{I}$, $\electric{I}_2$–$\electric{I}_6$ | $\unit{A}$ | Circuit currents | The current in the feed and each bridge branch. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Permittivity | The electric response parameter of a dielectric or transparent medium. |
| $t$, $\signal{t}$, $\Delta\signal{t}$ | $\unit{s}$ | Time and elapsed time | The time coordinate or the duration of a process. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | The magnetic field that determines the flux through a surface. |
| $\magnetic{\Phi}_B$ | $\unit{Wb}$ | Magnetic flux | The integral of the normal magnetic field over the surface. |
| $\magnetic{\vec\mu}$ | $\unit{A\,m^2}$ | Magnetic dipole moment | The current times the oriented area of the loop. |
| $\mechanical{\vec\ell}$ | $\unit{m}$ | Wire length vector | The directed length of the wire segment carrying current. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Speed | The speed of a particle or of a wave in the medium. |
| $\energy{K}$ | $\unit{J}$ | Kinetic energy | The energy of a particle moving at the selected speed. |
| $\magnetic{\mu}_0$ | $\unit{T\,m\,A^{-1}}$ | Vacuum permeability | The magnetic constant in the current-element and moving-charge formulas. |
| $N$ | 1 | Turn count | The number of loops contributing to the coil field. |
| $\electric{I}_{\mathrm{enc}}$ | $\unit{A}$ | Enclosed current | The net current through a surface bounded by the Amperian loop. |
| $\magnetic{\mu}$ | $\unit{T\,m\,A^{-1}}$ | Permeability | Magnetic response parameter for the medium. |
| $\Delta\mechanical{r}$ | $\unit{m}$ | Path length difference | Difference in distance traveled by the two interfering waves. |
