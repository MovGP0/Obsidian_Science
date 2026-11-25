---
title: "Field superposition and Gauss-law review"
---

> [!TLDR]
> Use spherical and planar symmetry to find fields and potentials for shells, sheets, and parallel plates.

## Worked lecture material

##### Concave mirror

The sketch shows a concave mirror forming a real, inverted image for the object position shown. The law of reflection and the magnification relation are $\mechanical{\theta}_i=\mechanical{\theta}_r$ and $\mechanical{M}=-\mechanical{s}_i/\mechanical{s}_o$.

![[Kyle Kabasares - Electricity and Magnetism - Concave mirror ray diagram.png|**Fig. 19** Reflected rays converge in front of the concave mirror. The focal length and radius of curvature are marked on the optical axis.]]

The Lorentz force gives the interaction of a moving charge with electric and magnetic fields.

$$
\mechanical{\vec F}
=\electric{q}(\electric{\vec E}+\mechanical{\vec v}\times\magnetic{\vec B}).
$$

The notes connect this interaction with Maxwell’s equations. They also review Malus’s law, $\energy{I}_2=\energy{I}_1\cos^2\mechanical{\theta}$, where $\mechanical{\theta}$ is the angular difference between the polarization axes.

##### Walter Lewin

Electric charge comes in two signs, positive and negative. The sketches show a positively charged rod distorting the electron cloud of an atom toward the rod. A second sketch shows charges in a neutral piece of matter redistributing in the presence of the rod. Friction can transfer electric charge. The electrostatic force depends on both charges and their separation.

For a source charge $\electric{Q}$ and a positive test charge $\electric{q}$ at point $P$, $\hat r$ points from the source toward $P$.

$$
\mechanical{\vec F}=\frac{\electric{k}\electric{q}\electric{Q}}{\mechanical{r}^2}\hat r,
\qquad
\electric{\vec E}(P)=\frac{\mechanical{\vec F}}{\electric{q}}
=\frac{\electric{k}\electric{Q}}{\mechanical{r}^2}\hat r.
$$

The electric field points in the direction of the force on a positive test charge and is measured in $\unit{N\,C^{-1}}$. The field sketches show arrows pointing out of a positive charge and into a negative charge.

##### Field superposition and field lines

The first sketch adds three field vectors at point $P$. The electric field is the vector sum of the contributions, and the force on a test charge is

$$
\electric{\vec E}(P)
=\electric{\vec E}_1+\electric{\vec E}_2+\electric{\vec E}_3
=\sum_{n=1}^3\electric{\vec E}_n,
\qquad
\mechanical{\vec F}=\electric{q}\electric{\vec E}.
$$

The force lies along the tangent to the electric field line. The notes compare a positive charge to an air source and a negative charge to an air sink to indicate the direction of the field lines.

##### Gauss’s law for a point charge

For a point charge $\electric{Q}$ at the center of a sphere of radius $\mechanical{R}$, the electric field is radial and has constant magnitude on the surface. The outward area element is also radial, so the flux uses the radial component $\electric{E}_r$.

$$
\electric{\Phi}_{\mathrm E}=4\pi\mechanical{R}^2\electric{E}_r
=(4\pi\mechanical{R}^2)
\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{R}^2}
=\frac{\electric{Q}}{\electric{\varepsilon}_0}.
$$

In general, Gauss’s law gives the electric flux through a closed surface from the total enclosed charge.

$$
\electric{\Phi}_{\mathrm E}
=\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec A}
=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}.
$$

##### Spherical symmetry. Uniform thin shell

The notes list spherical, cylindrical, and planar symmetry. For a hollow, uniformly charged thin shell, choose concentric spherical Gaussian surfaces through the two points of interest. Symmetry gives a radial electric field with constant magnitude on each Gaussian surface.

For the inner radius $\mechanical{r}_1<\mechanical{R}$, the Gaussian sphere encloses no charge. Thus $4\pi\mechanical{r}_1^2\electric{E}_r=0$, giving $\electric{E}_r=0$ inside. For $\mechanical{r}_2>\mechanical{R}$, the sphere encloses the full shell charge $\electric{Q}$.

$$
4\pi\mechanical{r}_2^2\electric{E}_r
=\frac{\electric{Q}}{\electric{\varepsilon}_0},
\qquad
\electric{E}_r
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}_2^2}.
$$

##### Planar symmetry. Uniform infinite sheet

The surface charge density is $\electric{\sigma}=\electric{Q}/\mechanical{A}$ in $\unit{C\,m^{-2}}$. To find the field a distance $\mechanical{d}$ from the sheet, choose a cylindrical Gaussian surface with two flat, parallel end caps parallel to the sheet. Its axis is perpendicular to the sheet, and the two caps are at equal distances $\mechanical{d}$ on opposite sides.

![[Kyle Kabasares - Electricity and Magnetism - Gaussian pillbox through a charged plane.png|**Fig. 20** The charged sheet cuts the pillbox halfway between its two end caps. The field is perpendicular to the sheet and tangent to the cylindrical wall.]]

The flux element is $\mathrm d\electric{\Phi}_{\mathrm E}=\electric{\vec E}\cdot\mathrm d\mechanical{\vec A}=\electric{E}\,\mathrm d\mechanical{A}\cos\mechanical{\theta}$. At the curved wall, $\mechanical{\theta}=90^\circ$ and this term vanishes. The two end caps contribute equally by symmetry.

Let $\mechanical{A}_1$, $\mechanical{A}_2$, and $\mechanical{A}_3$ be the areas of the top cap, the cross section in the sheet, and the bottom cap. All three equal $\mechanical{A}$. The enclosed charge is $\electric{\sigma}\mechanical{A}_2$. Using the signed outward field component $\electric{E}_{\perp}$ at either cap,

$$
\begin{aligned}
\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0}
&=\oint\electric{\vec E}\cdot\mathrm d\mechanical{\vec A},\\
\frac{\electric{\sigma}\mechanical{A}_2}{\electric{\varepsilon}_0}
&=\electric{E}_{\perp}(\mechanical{A}_1+\mechanical{A}_3)
=2\electric{E}_{\perp}\mechanical{A},\\
\electric{E}_{\perp}&=\frac{\electric{\sigma}}{2\electric{\varepsilon}_0}.
\end{aligned}
$$

##### Two oppositely charged plates

Two parallel infinite sheets carry surface charge densities $+\electric{\sigma}$ and $-\electric{\sigma}$ and are separated by $\mechanical{d}$. The sketch adds the fields of the two sheets. Each has magnitude $\electric{\sigma}/(2\electric{\varepsilon}_0)$. Outside the pair the fields cancel. Between the sheets they point from the positive sheet toward the negative sheet and add to $\electric{E}=\electric{\sigma}/\electric{\varepsilon}_0$. The two interior arrows in the sketch support this sum, though the adjacent handwritten expression appears to give only the single-sheet value.

##### Electrostatic potential energy

The diagram shows two positive charges. To move $\electric{q}_2$ slowly from infinity to a distance $\mechanical{R}$ from $\electric{q}_1$, the external force balances the electric force. With the potential energy set to zero at infinity, the external work gives

$$
\begin{aligned}
\energy{U}
&=\energy{W}_{\mathrm{ext}}
=\int_{\infty}^{\mechanical{R}}\mechanical{\vec F}_{\mathrm{ext}}\cdot\mathrm d\mechanical{\vec r}
=\int_{\mechanical{R}}^{\infty}\mechanical{\vec F}_{\mathrm{el}}\cdot\mathrm d\mechanical{\vec r}\\
&=\frac{\electric{q}_1\electric{q}_2}{4\pi\electric{\varepsilon}_0}
\int_{\mechanical{R}}^\infty\frac{\mathrm d\mechanical{r}}{\mechanical{r}^2}
=\frac{\electric{q}_1\electric{q}_2}{4\pi\electric{\varepsilon}_0\mechanical{R}}.
\end{aligned}
$$

Bringing like charges together takes positive external work. The electrostatic force is conservative, so this work depends on the endpoints.

##### Electric potential

The electric potential is the external work per unit charge to bring a test charge from infinity to the point of interest. With $\electric{V}_\infty=0$, the potential due to a point charge $\electric{Q}$ at distance $\mechanical{r}$ is

$$
\electric{V}(P)=\frac{\energy{U}}{\electric{q}}
=\int_{\mechanical{r}}^\infty
\frac{\mechanical{\vec F}_{\mathrm{el}}}{\electric{q}}\cdot\mathrm d\mechanical{\vec r}
=\int_{\mechanical{r}}^\infty\electric{\vec E}\cdot\mathrm d\mechanical{\vec r}
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}}.
$$

The unit is the volt, $\unit{V}=\unit{J\,C^{-1}}$. The final sketch uses a sphere with $\mechanical{R}=0.3\,\unit{m}$ and a charge read as $+10\,\unit{nC}$. Outside the sphere, for $\mechanical{r}>\mechanical{R}$, the potential falls as $1/\mechanical{r}$.

## Source

Kyle Kabasares, *Electricity and Magnetism (Physics 9H, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\theta}_i$, $\mechanical{\theta}_r$ | $\unit{rad}$ | Angles of incidence and reflection | The angles of the incident and reflected rays to the mirror normal. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Angle | The angle between the polarization axes, or between the field and the area element. |
| $\mechanical{M}$ | 1 | Transverse magnification | The signed ratio of image height to object height. |
| $\mechanical{s}_o$, $\mechanical{s}_i$ | $\unit{m}$ | Object and image distances | The signed distances from the mirror to the object and to the image. |
| $\mechanical{\vec F}$, $\mechanical{\vec F}_{\mathrm{ext}}$, $\mechanical{\vec F}_{\mathrm{el}}$ | $\unit{N}$ | Force | The force on a charge, the external force, and the electric force. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | The velocity of the moving charge. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | The magnetic field in the Lorentz force. |
| $\energy{I}_1$, $\energy{I}_2$ | $\unit{W\,m^{-2}}$ | Intensity | The light intensity before and after the polarizer. |
| $\electric{q}$, $\electric{q}_1$, $\electric{q}_2$ | $\unit{C}$ | Electric charge | The test charge or the two point charges. |
| $\electric{Q}$ | $\unit{C}$ | Source charge | The charge of the point source or of the thin shell. |
| $\electric{Q}_{\mathrm{enc}}$ | $\unit{C}$ | Enclosed charge | The net charge inside the Gaussian surface. |
| $\electric{\vec E}$, $\electric{\vec E}_n$, $\electric{E}$, $\electric{E}_r$, $\electric{E}_{\perp}$ | $\unit{N\,C^{-1}}$ | Electric field | The electric force per unit test charge, its contributions, and its components. |
| $\electric{k}$ | $\unit{N\,m^2\,C^{-2}}$ | Coulomb constant | The coefficient in the inverse-square force law. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The constant that sets the strength of the electric interaction in vacuum. |
| $\mechanical{r}$, $\mechanical{r}_1$, $\mechanical{r}_2$ | $\unit{m}$ | Radial distance | The distance from the source charge or the radius of a Gaussian sphere. |
| $\mechanical{\vec r}$ | $\unit{m}$ | Position vector | Its differential gives the displacement along the work path. |
| $\mechanical{R}$ | $\unit{m}$ | Radius or separation | The radius of the Gaussian sphere or the shell, or the final distance between the two charges. |
| $\mechanical{d}$ | $\unit{m}$ | Distance | The distance from the sheet, or the separation of the two plates. |
| $\electric{\Phi}_{\mathrm E}$ | $\unit{N\,m^2\,C^{-1}}$ | Electric flux | The surface integral of the normal electric field. |
| $\mechanical{A}$, $\mechanical{A}_1$, $\mechanical{A}_2$, $\mechanical{A}_3$ | $\unit{m^2}$ | Area | The sheet area and the cap and cross-section areas of the pillbox. |
| $\mechanical{\vec A}$ | $\unit{m^2}$ | Area vector | A vector normal to the surface with magnitude equal to the area. |
| $\electric{\sigma}$ | $\unit{C\,m^{-2}}$ | Surface charge density | The charge per unit area of the sheet. |
| $\energy{U}$ | $\unit{J}$ | Electric potential energy | The interaction energy of the two charges. |
| $\energy{W}_{\mathrm{ext}}$ | $\unit{J}$ | External work | The work of the external force that brings the charge in from infinity. |
| $\electric{V}$, $\electric{V}_\infty$ | $\unit{V}$ | Electric potential | The potential energy per unit test charge, with its value at infinity. |
