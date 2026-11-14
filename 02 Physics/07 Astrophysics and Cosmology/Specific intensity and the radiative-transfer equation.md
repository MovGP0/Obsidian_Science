---
title: "Specific intensity and the radiative-transfer equation"
---

> [!TLDR]
> Define the quantities measured in radiation and derive how emission and absorption change the intensity along a ray.

## Worked lecture material

##### Physics 240C. Radiative Processes with David Buote

Office hours are Wednesdays from 1 to 2 p.m. The course covers spectral lines and line broadening toward the end.

The main text is Rybicki and Lightman (1979), which gives the background needed to derive the applications. Material from Electricity and Magnetism II is useful preparation. *Astrophysical Processes* by H. Bradt (2008) is an advanced undergraduate reference.

The lectures follow the main text, covering chapters 1–7 and 10, with topics presented in a different order. There are five or six problem sets. The notes list April 11 and April 16 as possible due dates for the first set.

The lectures emphasize derivations and have few worked examples. The notes emphasize taking the homework seriously as preparation for the final.

The final combines problems like those on the homework with derivations. The course has no website. The instructor will show a few slides in class and will keep them for use during the lectures.

Homework is due Tuesday, April 16. The first week and a half covers foundational material. The reading is sections 1.1–1.4 of Rybicki and Lightman.

##### Fundamentals of radiative transfer

The topic is what can be learned from photons. Luminosity is the energy a source emits per unit time, integrated over all frequencies or photon energies and all directions.

![[Kyle Kabasares - Radiative Transfer - Radiating source.png|**Fig. 1** The source whose total emitted energy defines the luminosity.]]

$$
\boxed{\energy{L}=\frac{d\energy{E}}{dt}}
$$

##### Units and specific luminosity

Energy can be measured in joules, ergs, or electronvolts:

$$
\begin{aligned}
\quantity{1}{J} &= \quantity{10^7}{erg},\\
\quantity{1}{eV} &= \quantity{1.602\times10^{-19}}{J}.
\end{aligned}
$$

Rybicki and Lightman use CGS units. Time is measured in seconds or years. A handy approximation is $\quantity{1}{yr} \simeq \quantity{\pi\times10^7}{s}$.

The **specific luminosity** is the luminosity per unit frequency.

$$
\energy{L}_{\signal{\nu}}
= \frac{d\energy{L}}{d\signal{\nu}}
= \frac{d\energy{E}}{dt\,d\signal{\nu}}
$$

Integrating it over a frequency interval gives the luminosity in that interval.

$$
\energy{L} = \int_{\signal{\nu}_1}^{\signal{\nu}_2} \energy{L}_{\signal{\nu}}\,d\signal{\nu}
$$

##### What do we measure?

Imagine two concentric spheres of radii $\mechanical{R}_1$ and $\mechanical{R}_2$ surrounding a source of specific luminosity $\energy{L}_{\signal{\nu}}$. Assume that the source is steady ($d\energy{L}_{\signal{\nu}}/dt = 0$), that the surrounding space is a vacuum, and that the emission is isotropic.

![[Kyle Kabasares - Radiative Transfer - Spherical surfaces around a source.png|**Fig. 2** Imaginary spheres of two different radii around an isotropic source.]]

##### Radiative flux and the inverse-square law

By conservation of energy, the same energy per unit time crosses each sphere, so $\energy{L}_{\signal{\nu}}(\mechanical{R}_1)=\energy{L}_{\signal{\nu}}(\mechanical{R}_2)$. In terms of the specific flux,

$$
\energy{F}_{\signal{\nu}}(\mechanical{R}_1)\,4\pi\mechanical{R}_1^2
= \energy{F}_{\signal{\nu}}(\mechanical{R}_2)\,4\pi\mechanical{R}_2^2.
$$

The **radiative flux** is energy crossing a surface per unit time and area. Its CGS unit is $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$.

$$
\energy{F} \equiv \frac{d\energy{L}}{d\mechanical{A}}
= \frac{d\energy{E}}{dt\,d\mechanical{A}}
$$

The specific flux obeys the inverse-square law.

$$
\energy{F}_{\signal{\nu}}(\mechanical{R}_2)
= \energy{F}_{\signal{\nu}}(\mechanical{R}_1)
\left(\frac{\mechanical{R}_1}{\mechanical{R}_2}\right)^2
$$

Flux depends on the distance from the source.

**Exercise.** Show that the inverse-square relation holds when the source emits anisotropically.

##### Specific intensity

Consider an area element $d\vec{\mechanical{A}}=\hat{n}\,d\mechanical{A}$ and a bundle of rays with unit propagation vector $\hat{k}_{\mathrm{beam}}$. Write the vector solid-angle element as $d\vec{\Omega}_{\mathrm{beam}}=\hat{k}_{\mathrm{beam}}\,d\Omega_{\mathrm{beam}}$. The acceptance cone determines which rays contribute.

![[Kyle Kabasares - Radiative Transfer - Acceptance cone.png|**Fig. 3** A bundle of rays crossing a surface element. The surface normal and the propagation direction determine the projected area.]]
![[Kyle Kabasares - Radiative Transfer - Solid angle of a surface element.png|**Fig. 4** An area element perpendicular to the cone axis at a distance $r$ subtends the solid angle $d\Omega_{\mathrm{beam}}=dA/r^2$.]]

For perpendicular incidence, $\hat{k}\cdot\hat{n}=1$. The luminosity through the area element in the specified frequency and angular intervals is

$$
d\energy{L}=\energy{I}_{\signal{\nu}}\,d\Omega_{\mathrm{beam}}\,d\mechanical{A}\,d\signal{\nu},
\qquad
\energy{I}_{\signal{\nu}}=\frac{d\energy{I}}{d\signal{\nu}}.
$$

The CGS unit of $\energy{I}_{\signal{\nu}}$ is $\unit{erg\cdot s^{-1}\cdot sr^{-1}\cdot cm^{-2}\cdot Hz^{-1}}$. A full sphere subtends $\quantity{4\pi}{sr}$.

For oblique incidence, the **specific intensity** or **surface brightness** is defined using the projected area.

$$
d\energy{L}
=\energy{I}_{\signal{\nu}}(\hat{k}\cdot\hat{n})\,d\Omega_{\mathrm{beam}}\,d\mechanical{A}\,d\signal{\nu}
$$

Comparing with the definition of flux gives the differential specific flux contributed by the bundle.

$$
d\energy{F}_{\signal{\nu}}
=\energy{I}_{\signal{\nu}}(\hat{k}\cdot\hat{n})\,d\Omega_{\mathrm{beam}}
$$

##### Net flux and isotropy

The net specific flux through a surface with normal $\hat{n}$ is

$$
\energy{F}_{\signal{\nu}}
=\int_{\Omega_{\mathrm{beam}}}\energy{I}_{\signal{\nu}}\cos\theta\,d\Omega,
\qquad \cos\theta=\hat{k}\cdot\hat{n},
$$

where $\Omega_{\mathrm{beam}}$ is the total acceptance solid angle of the incoming beam.

If the specific intensity is isotropic at a point, the net flux over all directions there vanishes.

$$
\energy{F}_{\signal{\nu}}
=\energy{I}_{\signal{\nu}}\int_0^\pi \cos\theta\sin\theta\,d\theta
\int_0^{2\pi}d\phi=0
$$

Equal amounts of radiation cross $d\mechanical{A}$ in the $+\hat{n}$ and $-\hat{n}$ directions.

##### Ray bundle in free space

Does specific intensity have the same distance dependence as specific flux? Consider a bundle of rays passing through two area elements separated by a distance $\mechanical{D}$.

![[Kyle Kabasares - Radiative Transfer - Ray bundle in free space.png|**Fig. 5** The same bundle passes through two area elements with normals $\hat{n}_1$ and $\hat{n}_2$.]]

By the definition of specific intensity,

$$
\begin{aligned}
d\energy{L}_{\signal{\nu}}^{1}
&=\energy{I}_{\signal{\nu}}^{1}\,d\vec{\Omega}_{\mathrm{beam}}^{1}\cdot d\vec{\mechanical{A}}_1,\\
d\energy{L}_{\signal{\nu}}^{2}
&=\energy{I}_{\signal{\nu}}^{2}\,d\vec{\Omega}_{\mathrm{beam}}^{2}\cdot d\vec{\mechanical{A}}_2.
\end{aligned}
$$

Write $d\vec{\mechanical{A}}_j=\hat{n}_j\,d\mechanical{A}_j$ and $d\vec{\Omega}_{\mathrm{beam}}^j=\hat{k}\,d\Omega_{\mathrm{beam}}^j$ for $j=1,2$. The specific luminosity crossing each element is

$$
\begin{aligned}
d\energy{L}_{\signal{\nu}}^1 &= \energy{I}_{\signal{\nu}}^1(\hat{k}\cdot\hat{n}_1)d\Omega_{\mathrm{beam}}^1\,d\mechanical{A}_1,\\
d\energy{L}_{\signal{\nu}}^2 &= \energy{I}_{\signal{\nu}}^2(\hat{k}\cdot\hat{n}_2)d\Omega_{\mathrm{beam}}^2\,d\mechanical{A}_2.
\end{aligned}
$$

The first solid angle is the cone of rays that leave $d\mechanical{A}_1$ and pass through $d\mechanical{A}_2$. Using $d\mechanical{A}=\mechanical{r}^2\,d\Omega$ for an area perpendicular to the cone axis gives

$$
d\Omega_{\mathrm{beam}}^1=\frac{(\hat{k}\cdot\hat{n}_2)d\mechanical{A}_2}{\mechanical{D}^2},
\qquad
d\Omega_{\mathrm{beam}}^2=\frac{(\hat{k}\cdot\hat{n}_1)d\mechanical{A}_1}{\mechanical{D}^2}.
$$

![[Kyle Kabasares - Radiative Transfer - Solid angles between area elements.png|**Fig. 6** The cone from the center of the first area element spans the projected area of the second.]]

Substituting the two solid angles gives the same geometric factor at both ends.

$$
\begin{aligned}
d\energy{L}_{\signal{\nu}}^1&=\energy{I}_{\signal{\nu}}^1(\hat{k}\cdot\hat{n}_1)(\hat{k}\cdot\hat{n}_2)
\frac{d\mechanical{A}_2\,d\mechanical{A}_1}{\mechanical{D}^2},\\
d\energy{L}_{\signal{\nu}}^2&=\energy{I}_{\signal{\nu}}^2(\hat{k}\cdot\hat{n}_2)(\hat{k}\cdot\hat{n}_1)
\frac{d\mechanical{A}_1\,d\mechanical{A}_2}{\mechanical{D}^2}.
\end{aligned}
$$

Energy conservation in a vacuum gives $d\energy{L}_{\signal{\nu}}^1=d\energy{L}_{\signal{\nu}}^2$. The geometric factors cancel, giving $\energy{I}_{\signal{\nu}}^2=\energy{I}_{\signal{\nu}}^1$. Specific intensity is constant along a ray in free space.

$$
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}=0
$$

Here $d\mechanical{s}$ is the path-length element along the bundle. The notes mention plane-parallel and cylindrical symmetry.

##### Flux from a uniformly bright surface

Consider a sphere of radius $\mechanical{R}$ with constant surface brightness $\energy{I}=\int\energy{I}_{\signal{\nu}}\,d\signal{\nu}$. What flux does an observer at distance $\mechanical{D}$ from its center measure?

![[Kyle Kabasares - Radiative Transfer - Uniformly bright sphere.png|**Fig. 7** A uniformly bright sphere and an observer at distance $D$ from its center. The accompanying text denotes the radius by $R$.]]

Recall the luminosity, flux, and inverse-square relations.

$$
\energy{L}=\frac{d\energy{E}}{dt},\qquad
\energy{F}=\frac{d\energy{L}}{d\mechanical{A}},\qquad
\energy{F}(\mechanical{d}_2)
=\energy{F}(\mechanical{d}_1)\left(\frac{\mechanical{d}_1}{\mechanical{d}_2}\right)^2
$$

The relations between specific intensity, luminosity, and flux are

$$
\begin{aligned}
d\energy{L} &= \energy{I}_{\signal{\nu}}(\hat{k}\cdot\hat{n})\,d\Omega_{\mathrm{beam}}\,d\mechanical{A}\,d\signal{\nu},\\
\energy{F}_{\signal{\nu}} &= \int_{\Omega_{\mathrm{beam}}}\energy{I}_{\signal{\nu}}\cos\theta\,d\Omega,\\
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}} &=0 \qquad \text{in free space}.
\end{aligned}
$$

Each ray from the visible disk has the same frequency-integrated intensity $\energy{I}$ at the observer. The flux is therefore

$$
\energy{F}=\int_{\Omega_{\mathrm{obs}}}\energy{I}\cos\theta\,d\Omega,
$$

where $\Omega_{\mathrm{obs}}$ is the acceptance solid angle at the observer.

![[Kyle Kabasares - Radiative Transfer - Angular radius of a bright sphere.png|**Fig. 8** Rays tangent to the sphere bound the cone seen by the observer. The angle between the line to the center and a tangent ray is $\theta_c$.]]

The tangent-ray geometry gives $\sin\theta_c=\mechanical{R}/\mechanical{D}$. The angular integral is

$$
\begin{aligned}
\energy{F}
&=\energy{I}\int_0^{2\pi}d\phi
\int_0^{\theta_c}\cos\theta\sin\theta\,d\theta\\
&=2\pi\energy{I}\left[\frac{x^2}{2}\right]_{\sqrt{1-\mechanical{R}^2/\mechanical{D}^2}}^1\\
&=\pi\energy{I}\left(\frac{\mechanical{R}}{\mechanical{D}}\right)^2,
\qquad x=\cos\theta.
\end{aligned}
$$

This recovers the inverse-square law. At the surface, $\mechanical{D}=\mechanical{R}$ and $\energy{F}=\pi\energy{I}$.

##### Radiation through matter

Along a ray in free space, $d\energy{I}_{\signal{\nu}}/d\mechanical{s}=0$. When light passes through matter, $d\energy{I}_{\signal{\nu}}/d\mechanical{s}$ can be nonzero.

##### Emission coefficient

Emission adds intensity to the beam. For the plane-parallel or cylindrical case, consider a cylinder of emitting material with cross-sectional area $d\mechanical{A}$, path length $d\mechanical{s}$, and beam acceptance solid angle $d\Omega_{\mathrm{beam}}$.

![[Kyle Kabasares - Radiative Transfer - Cylinder of emitting material.png|**Fig. 9** The beam enters the cylinder at specific intensity $I_\nu$ and leaves at $I_\nu^\prime$.]]

The **emission coefficient** $\energy{j}_{\signal{\nu}}$ describes the specific intensity added by spontaneous emission per unit path length.

$$
d\energy{I}_{\signal{\nu}}=\energy{j}_{\signal{\nu}}\,d\mechanical{s}
$$

The volume element is $d\mechanical{V}=d\mechanical{A}\,d\mechanical{s}$. The units of the emission coefficient follow from

$$
[\energy{j}_{\signal{\nu}}]
=\left[\frac{\energy{I}_{\signal{\nu}}}{\mechanical{s}}\right]
=\left[\frac{d\energy{L}_{\signal{\nu}}}{d\Omega\,d\mechanical{A}}\right]
\left[\frac{1}{d\mechanical{s}}\right]
=\left[\frac{d\energy{L}_{\signal{\nu}}}{d\Omega\,d\mechanical{V}}\right].
$$

In CGS, $\energy{j}_{\signal{\nu}}$ has units $\unit{erg\cdot s^{-1}\cdot Hz^{-1}\cdot sr^{-1}\cdot cm^{-3}}$. It is the luminosity per unit frequency, solid angle, and volume added to the beam as it crosses the material.

##### Emission along a finite path

Divide the cylinder into $N$ thin disks with thicknesses $\Delta\mechanical{s}_j$. Each disk adds $\Delta\energy{I}_{\signal{\nu}}^j$ to the beam.

![[Kyle Kabasares - Radiative Transfer - Emission from successive disks.png|**Fig. 10** The outgoing specific intensity is the incident intensity plus the contributions from the disks.]]

$$
\energy{I}_{\signal{\nu}}^\prime
=\energy{I}_{\signal{\nu}}+\sum_{j=1}^{N}\Delta\energy{I}_{\signal{\nu}}^j,
\qquad
\sum_{j=1}^{N}\Delta\energy{I}_{\signal{\nu}}^j
=\sum_{j=1}^{N}\left(\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}\right)_j\Delta\mechanical{s}_j.
$$

In the limit $N\to\infty$,

$$
\energy{I}_{\signal{\nu}}^\prime
=\energy{I}_{\signal{\nu}}+\int_{\mathrm{path}}\energy{j}_{\signal{\nu}}\,d\mechanical{s}.
$$

The incident spectrum is specified before the beam enters the material. The added spectrum depends on the emission coefficient and the path through the material. For spontaneous emission, that contribution is independent of the incident spectrum. The outgoing spectrum depends on both contributions.

##### Absorption coefficient

The absorption coefficient describes the intensity lost as the beam passes through the material.

Consider a cylinder of absorbing material containing $N$ absorbers, each of cross section $\mechanical{\sigma}_{\signal{\nu}}$.

![[Kyle Kabasares - Radiative Transfer - Cylinder of absorbing material.png|**Fig. 11** A ray passes through absorbing material over a path of length $ds$.]]
![[Kyle Kabasares - Radiative Transfer - Absorbers seen face-on.png|**Fig. 12** The projected cross section of the cylinder contains $N$ absorbers.]]

For small absorbers with negligible overlap, the total cross section they present to the beam is

$$
d\mechanical{A}^{\mathrm{cross}}
=N\mechanical{\sigma}_{\signal{\nu}}
=\mechanical{n}\mechanical{\sigma}_{\signal{\nu}}\,d\mechanical{A}\,d\mechanical{s},
\qquad
\mechanical{n}=\frac{N}{d\mechanical{V}}=\frac{N}{d\mechanical{A}\,d\mechanical{s}}.
$$

The minus sign in the absorption term denotes energy removed from the beam.

$$
d\energy{L}_{\signal{\nu}}^{\mathrm{abs}}
=-\energy{I}_{\signal{\nu}}\,d\Omega_{\mathrm{beam}}\,d\mechanical{A}^{\mathrm{cross}}
$$

For normal incidence, the definition of specific intensity gives $d\energy{L}_{\signal{\nu}}=\energy{I}_{\signal{\nu}}\,d\Omega_{\mathrm{beam}}\,d\mechanical{A}$. The product rule yields

$$
\frac{d(d\energy{L}_{\signal{\nu}})}{d\mechanical{s}}
=\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}\,d\Omega_{\mathrm{beam}}\,d\mechanical{A}
+\energy{I}_{\signal{\nu}}\frac{d(d\Omega_{\mathrm{beam}}\,d\mechanical{A})}{d\mechanical{s}}.
$$

For the fixed cylinder and acceptance cone, the second term is zero. The change over $d\mechanical{s}$ is therefore $(d\energy{I}_{\signal{\nu}}/d\mechanical{s})\,d\mechanical{s}\,d\Omega_{\mathrm{beam}}\,d\mechanical{A}$. Equating it to the absorption loss gives

$$
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}
=-\mechanical{n}\mechanical{\sigma}_{\signal{\nu}}\energy{I}_{\signal{\nu}}.
$$

The **absorption coefficient** is $\energy{\alpha}_{\signal{\nu}}=\mechanical{n}\mechanical{\sigma}_{\signal{\nu}}$. The intensity removed over a short path is proportional to the intensity already in the beam.

$$
d\energy{I}_{\signal{\nu}}=-\energy{\alpha}_{\signal{\nu}}\energy{I}_{\signal{\nu}}\,d\mechanical{s}
$$

The model assumes randomly distributed, noninteracting absorbers with negligible overlap. Their characteristic size is of order $\sqrt{\mechanical{\sigma}_{\signal{\nu}}}$, and their mean separation $\mechanical{d}$ is of order $\mechanical{n}^{-1/3}$. If the size is much smaller than the separation,

$$
\sqrt{\mechanical{\sigma}_{\signal{\nu}}}\ll\mechanical{d}\sim\mechanical{n}^{-1/3}
\quad\Longrightarrow\quad
\mechanical{\sigma}_{\signal{\nu}}\ll\mechanical{n}^{-2/3}
\quad\Longrightarrow\quad
\energy{\alpha}_{\signal{\nu}}\mechanical{d}\ll1.
$$

##### Equation of radiative transfer

Combining the loss from absorption with the gain from spontaneous emission gives

$$
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}
=-\energy{\alpha}_{\signal{\nu}}\energy{I}_{\signal{\nu}}+\energy{j}_{\signal{\nu}}.
$$

##### Limiting cases

With emission alone, $\energy{\alpha}_{\signal{\nu}}=0$ and $d\energy{I}_{\signal{\nu}}/d\mechanical{s}=\energy{j}_{\signal{\nu}}$. The solution is

$$
\energy{I}_{\signal{\nu}}(\mechanical{s})
=\energy{I}_{\signal{\nu}}(\mechanical{s}_0)
+\int_{\mechanical{s}_0}^{\mechanical{s}}\energy{j}_{\signal{\nu}}(\mechanical{s}')\,d\mechanical{s}'.
$$

With absorption alone, $\energy{j}_{\signal{\nu}}=0$ and $d\energy{I}_{\signal{\nu}}/d\mechanical{s}=-\energy{\alpha}_{\signal{\nu}}\energy{I}_{\signal{\nu}}$. The solution is

$$
\energy{I}_{\signal{\nu}}(\mechanical{s})
=\energy{I}_{\signal{\nu}}(\mechanical{s}_0)
\exp\left[-\int_{\mechanical{s}_0}^{\mechanical{s}}
\energy{\alpha}_{\signal{\nu}}(\mechanical{s}')\,d\mechanical{s}'\right].
$$

##### Scattering

Elastic scattering changes the direction of the radiation and preserves the photon energy. In addition to the pure absorption and emission terms, the notes give the following scattering term with a minus sign, corresponding to their discussion of energy removal.

$$
\frac{d\energy{I}_{\signal{\nu}}^{\mathrm{scat}}}{d\mechanical{s}}
=-\int\energy{\alpha}_{\signal{\nu}}^{\mathrm{scat}}(\Omega,\Omega')
\energy{I}_{\signal{\nu}}(\Omega')\,\frac{d\Omega'}{4\pi}
$$

For isotropic scattering, the coefficient is angle-independent. With the angular integral taken over the full sphere, the expression becomes $-\energy{\alpha}_{\signal{\nu}}^{\mathrm{scat}}\energy{J}_{\signal{\nu}}$, where $\energy{J}_{\signal{\nu}}$ is the mean intensity.

$$
\energy{J}_{\signal{\nu}}=\frac{1}{4\pi}\int_{4\pi}\energy{I}_{\signal{\nu}}\,d\Omega
$$

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $\energy{L}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot Hz^{-1}}$ | Specific luminosity | Radiated power per unit frequency. |
| $\energy{F}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Radiative flux | Energy crossing a surface per unit time and area. |
| $\energy{F}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot Hz^{-1}}$ | Specific flux | Radiative flux per unit frequency. |
| $\energy{I}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Specific intensity | Radiated power per unit projected area, solid angle, and frequency. |
| $\energy{I}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}}$ | Frequency-integrated intensity | Specific intensity integrated over frequency. |
| $\energy{j}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot Hz^{-1}\cdot sr^{-1}\cdot cm^{-3}}$ | Emission coefficient | Specific intensity added by spontaneous emission per unit path length. |
| $\mechanical{\sigma}_{\signal{\nu}}$ | $\unit{cm^2}$ | Absorption cross section | Effective area presented by one absorber at frequency $\signal{\nu}$. |
| $\mechanical{n}$ | $\unit{cm^{-3}}$ | Number density | Number of absorbers per unit volume. |
| $\energy{\alpha}_{\signal{\nu}}$ | $\unit{cm^{-1}}$ | Absorption coefficient | Fractional loss of specific intensity per unit path length. |
| $\energy{J}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Mean intensity | Specific intensity averaged over all directions. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
