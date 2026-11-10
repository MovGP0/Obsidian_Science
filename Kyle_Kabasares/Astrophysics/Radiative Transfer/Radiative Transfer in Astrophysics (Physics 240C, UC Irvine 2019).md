---
title: "Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)"
---

> [!TLDR]
> These lecture notes derive radiative transfer and the spectra of thermal, synchrotron, and Compton processes. They connect atomic transition rates to line cross sections and show how natural and Doppler broadening combine into the Voigt profile.

Source notes by Kyle Kabasares. [[Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019).pdf|Original PDF]].

Transcribed PDF pages 1–150 of 150.

### PDF page 1

#### Physics 240C. Radiative Processes with David Buote

Office hours are Wednesdays from 1 to 2 p.m. The course covers spectral lines and line broadening toward the end.

The main text is Rybicki and Lightman (1979), which gives the background needed to derive the applications. Material from Electricity and Magnetism II is useful preparation. *Astrophysical Processes* by H. Bradt (2008) is an advanced undergraduate reference.

The lectures follow the main text, covering chapters 1–7 and 10, with topics presented in a different order. There are five or six problem sets. The notes list April 11 and April 16 as possible due dates for the first set.

The lectures emphasize derivations and have few worked examples. The notes emphasize taking the homework seriously as preparation for the final.

### PDF page 2

The final combines problems like those on the homework with derivations. The course has no website. The instructor will show a few slides in class and will keep them for use during the lectures.

#### Lecture of April 4, 2019

Homework is due Tuesday, April 16. The first week and a half covers foundational material. The reading is sections 1.1–1.4 of Rybicki and Lightman.

#### Fundamentals of radiative transfer

The topic is what can be learned from photons. Luminosity is the energy a source emits per unit time, integrated over all frequencies or photon energies and all directions.

![[Kyle Kabasares - Radiative Transfer - Radiating source.png|**Fig. 1** The source whose total emitted energy defines the luminosity.]]

$$
\boxed{\energy{L}=\frac{d\energy{E}}{dt}}
$$

### PDF page 3

#### Units and specific luminosity

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

#### What do we measure?

Imagine two concentric spheres of radii $\mechanical{R}_1$ and $\mechanical{R}_2$ surrounding a source of specific luminosity $\energy{L}_{\signal{\nu}}$. Assume that the source is steady ($d\energy{L}_{\signal{\nu}}/dt = 0$), that the surrounding space is a vacuum, and that the emission is isotropic.

![[Kyle Kabasares - Radiative Transfer - Spherical surfaces around a source.png|**Fig. 2** Imaginary spheres of two different radii around an isotropic source.]]

### PDF page 4

#### Radiative flux and the inverse-square law

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

### PDF page 5

#### Specific intensity

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

### PDF page 6

#### Net flux and isotropy

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

#### Ray bundle in free space

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

### PDF page 7

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

### PDF page 8

Energy conservation in a vacuum gives $d\energy{L}_{\signal{\nu}}^1=d\energy{L}_{\signal{\nu}}^2$. The geometric factors cancel, giving $\energy{I}_{\signal{\nu}}^2=\energy{I}_{\signal{\nu}}^1$. Specific intensity is constant along a ray in free space.

$$
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}=0
$$

Here $d\mechanical{s}$ is the path-length element along the bundle. The notes mention plane-parallel and cylindrical symmetry.

#### Lecture, April 9, 2019

**Example 2. Flux from a uniformly bright surface.** Consider a sphere of radius $\mechanical{R}$ with constant surface brightness $\energy{I}=\int\energy{I}_{\signal{\nu}}\,d\signal{\nu}$. What flux does an observer at distance $\mechanical{D}$ from its center measure?

![[Kyle Kabasares - Radiative Transfer - Uniformly bright sphere.png|**Fig. 7** A uniformly bright sphere and an observer at distance $D$ from its center. The accompanying text denotes the radius by $R$.]]

Recall the luminosity, flux, and inverse-square relations.

$$
\energy{L}=\frac{d\energy{E}}{dt},\qquad
\energy{F}=\frac{d\energy{L}}{d\mechanical{A}},\qquad
\energy{F}(\mechanical{d}_2)
=\energy{F}(\mechanical{d}_1)\left(\frac{\mechanical{d}_1}{\mechanical{d}_2}\right)^2
$$

### PDF page 9

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

### PDF page 10

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

#### Radiation through matter

Along a ray in free space, $d\energy{I}_{\signal{\nu}}/d\mechanical{s}=0$. When light passes through matter, $d\energy{I}_{\signal{\nu}}/d\mechanical{s}$ can be nonzero.

### PDF page 11

#### Emission coefficient

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

### PDF page 12

#### Emission along a finite path

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

#### Absorption coefficient

The absorption coefficient describes the intensity lost as the beam passes through the material.

### PDF page 13

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

### PDF page 14

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

#### Equation of radiative transfer

Combining the loss from absorption with the gain from spontaneous emission gives

$$
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}
=-\energy{\alpha}_{\signal{\nu}}\energy{I}_{\signal{\nu}}+\energy{j}_{\signal{\nu}}.
$$

### PDF page 15

#### Limiting cases

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

#### Scattering

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

### PDF page 16

#### Lecture, April 16, 2019

**Optical depth and mean free path.** Define the optical depth between two positions along a ray by

$$
\energy{\tau}_{\signal{\nu}}(\mechanical{s}_0,\mechanical{s})
=\int_{\mechanical{s}_0}^{\mechanical{s}}
\energy{\alpha}_{\signal{\nu}}(\mechanical{s}')\,d\mechanical{s}'.
$$

The transfer equation includes both absorption and emission. For pure absorption, the ratio of the emerging specific intensity at $\mechanical{s}$ to the incident specific intensity at $\mechanical{s}_0$ is

$$
\frac{\energy{I}_{\signal{\nu}}(\mechanical{s})}
{\energy{I}_{\signal{\nu}}(\mechanical{s}_0)}
=e^{-\energy{\tau}_{\signal{\nu}}(\mechanical{s}_0,\mechanical{s})}.
$$

Each specific intensity measures energy per unit frequency, solid angle, projected area, and time. Dividing numerator and denominator by the photon energy $h\signal{\nu}$ converts the ratio to a photon-number ratio. Thus $e^{-\energy{\tau}_{\signal{\nu}}}$ gives the fraction of incident photons that emerge, or the probability of traversing the path without absorption.

- For $\energy{\tau}_{\signal{\nu}}=0$, every incident photon emerges.
- As $\energy{\tau}_{\signal{\nu}}\to\infty$, the transmitted fraction tends to zero.

### PDF page 17

The probability density for the optical depth at the first absorption is $e^{-\energy{\tau}_{\signal{\nu}}}$. Its integral over nonnegative optical depth is one, and its mean is

$$
\begin{aligned}
\int_0^\infty e^{-\energy{\tau}_{\signal{\nu}}}\,d\energy{\tau}_{\signal{\nu}} &=1,\\
\langle\energy{\tau}_{\signal{\nu}}\rangle
=\int_0^\infty \energy{\tau}_{\signal{\nu}}e^{-\energy{\tau}_{\signal{\nu}}}\,d\energy{\tau}_{\signal{\nu}} &=1.
\end{aligned}
$$

A medium with $\energy{\tau}_{\signal{\nu}}\gg1$ is **optically thick**. A photon is likely to be absorbed before crossing it. A medium with $\energy{\tau}_{\signal{\nu}}\ll1$ is **optically thin**, and a photon is likely to escape. The characteristic boundary is $\energy{\tau}_{\signal{\nu}}=1$.

The **photon mean free path** is the average distance a photon travels before absorption. The corresponding mean optical depth is unity.

### PDF page 18

Define the characteristic path length $\mechanical{\ell}_{\signal{\nu}}$ by

$$
\int_0^{\mechanical{\ell}_{\signal{\nu}}}\energy{\alpha}_{\signal{\nu}}\,d\mechanical{s}
=1=\langle\energy{\alpha}_{\signal{\nu}}\rangle\,\mechanical{\ell}_{\signal{\nu}},
\qquad
\langle\energy{\alpha}_{\signal{\nu}}\rangle
=\frac{1}{\mechanical{\ell}_{\signal{\nu}}}
\int_0^{\mechanical{\ell}_{\signal{\nu}}}\energy{\alpha}_{\signal{\nu}}\,d\mechanical{s}.
$$

In a homogeneous medium, $\langle\energy{\alpha}_{\signal{\nu}}\rangle=\energy{\alpha}_{\signal{\nu}}$ and the photon mean free path is

$$
\mechanical{\ell}_{\signal{\nu}}
=\frac{1}{\energy{\alpha}_{\signal{\nu}}}
=\frac{1}{\mechanical{n}\mechanical{\sigma}_{\signal{\nu}}}.
$$

Equivalently, the volume $\mechanical{V}_1=\mechanical{\sigma}_{\signal{\nu}}\mechanical{\ell}_{\signal{\nu}}$ contains one absorber on average, so $\mechanical{n}\mechanical{V}_1=1$.

#### Survey of absorption and emission processes

The change $d\energy{I}_{\signal{\nu}}/d\mechanical{s}$ is a function of the radiation intensity and the emission, absorption, and scattering coefficients. What physical processes set those coefficients?

**Absorption** occurs when a photon interacts with matter and all of the incident photon's energy is removed from the radiation field.

![[Kyle Kabasares - Radiative Transfer - Photon incident on an atom.png|**Fig. 13** Before the interaction, a photon of energy $h\nu$ approaches an atom with a bound electron.]]

### PDF page 19

After absorption the atom is either ionized or excited. If an electron is ejected, some photon energy can become the electron's kinetic energy. In **true absorption**, the energy lost by the radiation field becomes thermal energy of the material.

#### Photoelectric absorption

An incoming photon ionizes a stationary, neutral atom in its ground state. The notes identify photoelectric absorption as important for photon energies $\energy{E}_\gamma\lesssim\mechanical{m}_e c^2$, above the relevant ionization threshold. For ground-state hydrogen the threshold is $\hbar\signal{\omega}=\quantity{13.6}{eV}$.

Let $\energy{E}_{\mathrm{I}}$ be the ionization energy. For $\energy{E}_\gamma<\energy{E}_{\mathrm{I}}$, photoionization is energetically forbidden. For $\energy{E}_\gamma\ge\energy{E}_{\mathrm{I}}$, the photon can be absorbed.

How does the photoelectric absorption cross section $\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}$ depend on the energies?

1. For $\energy{E}_\gamma\gg\energy{E}_{\mathrm{I}}$, the photon feels little influence from the atom. Above threshold, the cross section decreases with increasing $\energy{E}_\gamma$.
2. At a large fixed $\energy{E}_\gamma$, increasing $\energy{E}_{\mathrm{I}}$ brings the photon closer to threshold and increases $\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}$ within this regime.

### PDF page 20

The cross section increases with atomic number $Z$ and decreases with the principal quantum number $n$. The hydrogenic energy levels are

$$
\energy{E}_n=-\frac{Z^2\energy{\mathrm{Ry}}}{n^2},
\qquad
\energy{\mathrm{Ry}}=\quantity{13.6}{eV}.
$$

The result quoted without proof is

$$
\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}\propto Z^4n^{-5}\signal{\omega}^{-3}.
$$

The notes refer to equation 10.54 and the solution to problem 10.4 in Rybicki and Lightman. The dependence on $n$ favors inner-shell electrons such as those in the $1s$ shell. The dependence on $Z$ gives heavy elements larger cross sections. The cross section falls with increasing photon energy above threshold. The dependence list in the source writes $n^{-3}$, while the boxed relation writes $n^{-5}$.

The K shell is the innermost electron shell. The notes reproduce a diagram from Niel Brandt's Astronomy 485 course showing the iron K absorption edge near $\quantity{7.1}{keV}$ for neutral iron.

![[Kyle Kabasares - Radiative Transfer - Neutral iron K absorption edge.png|**Fig. 14** A flat incident spectrum drops at the neutral iron K edge. It recovers toward the incident level as photoelectric absorption weakens at higher energies.]]

### PDF page 21

For neutral iron, K-shell absorption begins at $\quantity{7.1}{keV}$. The dip weakens rapidly above the edge as energy increases. In the illustrated spectrum there is little absorption above $\quantity{30}{keV}$.

![[Kyle Kabasares - Radiative Transfer - X-ray absorption by gas.png|**Fig. 15** An incident power-law X-ray spectrum passes through neutral gas of solar abundances at column densities of $0$, $10^{20}$, $10^{21}$, $10^{22}$, and $10^{23}\,\mathrm{cm^{-2}}$. The plot marks H and He absorption and the C, O, and Ne edges. Source as cited in the notes is Niel Brandt's Astronomy 485 course.]]

K edges of heavier elements such as C, Ne, Mg, Si, and Fe are important contributions to the photoelectric absorption cross section at X-ray energies. Cold gas in the Milky Way therefore affects extragalactic X-ray observations.

$$
\energy{I}_{\signal{\nu}}
=\energy{I}_{\signal{\nu}}(\mechanical{s}_0)e^{-\energy{\tau}_{\signal{\nu}}},
\qquad
\energy{\tau}_{\signal{\nu}}=\int\energy{\alpha}_{\signal{\nu}}\,d\mechanical{s}.
$$

### PDF page 22

#### Photoelectric absorption coefficient of gas with solar abundances

The absorption coefficient is summed over all elements, where $\mechanical{n}_i$ is the number density of element $i$.

$$
\energy{\alpha}_{\signal{\omega}}
=\sum_i\mechanical{n}_i\bigl(\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}(\signal{\omega})\bigr)_i,
\qquad
\energy{\tau}_{\signal{\omega}}
=\int_{\mechanical{s}_0}^{\mechanical{s}}\sum_i\mechanical{n}_i
\bigl(\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}(\signal{\omega})\bigr)_i\,d\mechanical{s}'.
$$

By convention the sum is expressed in terms of the hydrogen number density $\mechanical{n}_{\mathrm{H}}$. The ratio $\mechanical{n}_i/\mechanical{n}_{\mathrm{H}}$ is the abundance of element $i$ relative to hydrogen by number.

$$
\sum_i\mechanical{n}_i\bigl(\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}\bigr)_i
=\mechanical{n}_{\mathrm{H}}\sum_i
\left(\frac{\mechanical{n}_i}{\mechanical{n}_{\mathrm{H}}}\right)
\bigl(\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}\bigr)_i
$$

If the relative abundances are constant along the path, the optical depth is

$$
\energy{\tau}_{\signal{\omega}}
=\left[\sum_i\left(\frac{\mechanical{n}_i}{\mechanical{n}_{\mathrm{H}}}\right)
\bigl(\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}(\signal{\omega})\bigr)_i\right]
\mechanical{N}_{\mathrm{H}},
\qquad
\mechanical{N}_{\mathrm{H}}=\int_{\mechanical{s}_0}^{\mechanical{s}}\mechanical{n}_{\mathrm{H}}\,d\mechanical{s}'.
$$

Here $\mechanical{N}_{\mathrm{H}}$ is the hydrogen absorption column density, measured in $\unit{cm^{-2}}$.

#### Lecture, April 18, 2019

Problem set 2 is due April 30. The lecture begins by reviewing the optical-depth expression in terms of hydrogen column density.

### PDF page 23

![[Kyle Kabasares - Radiative Transfer - Interstellar gas absorption cross section.png|**Fig. 16** The absorption cross section of interstellar gas with typical cosmic abundances. The discontinuities mark K-shell edges of the labeled elements. The notes reproduce Longair's Fig. 4.2, which credits Brown and Gould (1970).]]

For solar abundances and photon energies above about $\quantity{0.1}{keV}$, the notes give this approximation when individual edges are unresolved:

$$
\energy{\tau}_{\signal{\omega}}
\simeq 2\times10^{-22}
\left(\frac{\hbar\signal{\omega}}{\quantity{1}{keV}}\right)^{-8/3}
\left(\frac{\mechanical{N}_{\mathrm{H}}}{\unit{cm^{-2}}}\right).
$$

The optical depth is larger for smaller photon energy. The notes also mark the approximate $\signal{\omega}^{-3}$ dependence of the underlying photoelectric cross section. At $\energy{E}_\gamma=\quantity{1}{keV}$, a column $\mechanical{N}_{\mathrm{H}}=\quantity{5\times10^{21}}{cm^{-2}}$ gives $\energy{\tau}_{\signal{\omega}}\simeq1$.

### PDF page 24

![[Kyle Kabasares - Radiative Transfer - Transparency versus hydrogen column.png|**Fig. 17** Photon energy at unit optical depth versus hydrogen column density. The curve separates the transparent region above it from the opaque region below it. The slide cites Niel Brandt's Astronomy 485 course.]]

#### Scattering and radiative recombination

In the broad sense used here, **scattering** is an interaction of a photon with matter followed shortly by emission of at least one photon.

![[Kyle Kabasares - Radiative Transfer - Photon interaction with matter.png|**Fig. 18** An incident photon approaches matter, which subsequently emits one or more photons.]]

**Example 1. Photoionization followed by radiative recombination.**

1. An incident photon ionizes an atom by photoelectric absorption and ejects an electron.
2. The ion captures a free electron, which can be a different electron. One or more photons are emitted during the downward transitions.

### PDF page 25

![[Kyle Kabasares - Radiative Transfer - Photoionization and recombination.png|**Fig. 19** An incident photon at frequency $\nu_i$ and an emitted photon at frequency $\nu_f$.]]

In general $\signal{\nu}_f\ne\signal{\nu}_i$, since the captured electron can first occupy a different level from the one vacated. If the recombination time is short, the sequence resembles a single scattering event.

**Example 2. Line scattering.**

1. An incoming photon is absorbed and excites the atom.
2. The atom decays and emits a photon. In the approximation used here, $\energy{E}_\gamma^{\mathrm{in}}=\energy{E}_\gamma^{\mathrm{out}}$ when the electron returns to its original level.

![[Kyle Kabasares - Radiative Transfer - Line scattering.png|**Fig. 20** The incident photon excites a bound electron, and a photon leaves as the electron returns to the lower level.]]

**Example 3. Stimulated emission.** A photon incident on an excited atom induces a transition to a lower state.

### PDF page 26

In stimulated emission, a photon of energy $h\signal{\nu}$ induces an excited atom $A^*$ to decay to the lower state $A$. The two outgoing photons have the same energy.

$$
h\signal{\nu}+A^*\longrightarrow 2h\signal{\nu}+A
$$

![[Kyle Kabasares - Radiative Transfer - Stimulated emission.png|**Fig. 21** The incident photon induces a downward transition, giving two outgoing photons at the same frequency.]]

**Example 4. Continuum scattering.** In Thomson and Compton scattering an incident photon interacts with matter and emerges with a changed direction, a changed energy, or both. The cosmic microwave background involves both kinds of scattering. Thomson scattering occurs in stellar envelopes. The notes also list accretion disks.

#### Thomson scattering

Rybicki and Lightman, pp. 90–91. A free charge radiates in response to an incident electromagnetic wave.

### PDF page 27

![[Kyle Kabasares - Radiative Transfer - Incident and scattered waves.png|**Fig. 22** An incident electromagnetic wave drives a free electron, which radiates a scattered wave.]]

The induced electron oscillation is nonrelativistic, so $\mechanical{v}\ll c$ and $\mechanical{p}_e/\mechanical{m}_e\ll c$. For a photon, and for the electron's de Broglie wave, the momentum relations are

$$
\mechanical{p}_\gamma=\frac{h}{\signal{\lambda}_\gamma}=\frac{\energy{E}_\gamma}{c},
\qquad
\mechanical{p}_e=\frac{h}{\signal{\lambda}_e}.
$$

Taking the momentum transferred to the electron to be of order the incident photon momentum gives the Thomson condition

$$
\signal{\lambda}\gg\frac{h}{\mechanical{m}_e c}.
$$

The handwritten derivation uses $\mechanical{p}_e=\mechanical{p}_\gamma$ for this estimate. The length on the right is named later in the notes.

### PDF page 28

#### The classical regime

In Gaussian units, the Bohr radius and fine-structure constant are

$$
\mechanical{a}_0=\frac{\hbar^2}{\mechanical{m}_e\electric{e}^2},
\qquad
\alpha=\frac{\electric{e}^2}{\hbar c}.
$$

Thus $\alpha\mechanical{a}_0=\hbar/(\mechanical{m}_e c)$ and the Thomson condition is $\signal{\lambda}\gg2\pi\alpha\mechanical{a}_0$. Since $2\pi\alpha\simeq1/20$, wavelengths much larger than the Bohr radius satisfy this condition and lie in the classical regime.

![[Kyle Kabasares - Radiative Transfer - Linearly polarized incident wave.png|**Fig. 23** A linearly polarized wave approaches the electron from the negative $z$ side. Its electric field is along $x$, and the scattering direction makes an angle $\Theta$ with the $x$ axis.]]

**Homework.** Prove the result for the general case.

### PDF page 29

#### Motion of the electron in the incident wave

For an incident wave polarized along $x$,

$$
\vec{\electric{E}}=\electric{E}_x\hat{x},
\qquad
\electric{E}_x=(\electric{E}_x)_0\cos(\signal{k}z-\signal{\omega}t),
\qquad
\signal{k}=\frac{2\pi}{\signal{\lambda}},
\qquad
\signal{\omega}=\signal{k}c.
$$

At $z=0$, the field at the electron is $(\electric{E}_x)_0\cos(\signal{\omega}t)$. The Lorentz force in CGS is

$$
\vec{\mechanical{F}}=-\electric{e}\left(\vec{\electric{E}}
+\frac{\vec{\mechanical{v}}}{c}\times\vec{\magnetic{B}}\right).
$$

The magnetic term is small for $\mechanical{v}\ll c$, so $\mechanical{F}_x\simeq-\electric{e}(\electric{E}_x)_0\cos(\signal{\omega}t)$. Using $\mechanical{F}_x=\mechanical{m}_e\ddot{\mechanical{x}}$ gives

$$
\ddot{\mechanical{x}}
=-\frac{\electric{e}(\electric{E}_x)_0}{\mechanical{m}_e}\cos(\signal{\omega}t).
$$

The oscillating part of the motion is about $x=0$ at angular frequency $\signal{\omega}$. It satisfies $\mechanical{x}=-\ddot{\mechanical{x}}/\signal{\omega}^2$ and $\ddot{\mechanical{x}}+\signal{\omega}^2\mechanical{x}=0$. The electric dipole moment is $\vec{\electric{d}}=-\electric{e}\vec{\mechanical{r}}=-\electric{e}\mechanical{x}\hat{x}$. The last expression on this page evaluates its second derivative,

$$
\ddot{\vec{\electric{d}}}
=\frac{\electric{e}^2}{\mechanical{m}_e}(\electric{E}_x)_0\cos(\signal{\omega}t)\,\hat{x}.
$$

The next step uses Larmor's formula for radiation from a single accelerated charge.

### PDF page 30

#### Radiated power and Thomson cross section

Larmor's formula (Rybicki and Lightman, equation 3.18) gives the total radiated power of a charge $\electric{q}$ with acceleration $\mechanical{a}$. The equivalent dipole form and its value for the driven electron are

$$
\energy{L}
=\frac{2\electric{q}^2\mechanical{a}^2}{3c^3}
=\frac{2}{3c^3}\left|\ddot{\vec{\electric{d}}}\right|^2
=\frac{2\electric{e}^4(\electric{E}_x)_0^2}{3c^3\mechanical{m}_e^2}
\cos^2(\signal{\omega}t).
$$

The Thomson cross section $\mechanical{\sigma}_{\mathrm{T}}$ relates the scattered power to the incident energy flux $\energy{S}$.

$$
\energy{L}=\mechanical{\sigma}_{\mathrm{T}}\energy{S}
$$

#### Lecture, April 23, 2019

![[Kyle Kabasares - Radiative Transfer - Thomson scattering geometry.png|**Fig. 24** An incident wave polarized along $x$ reaches an electron initially at rest. The scattered ray makes an angle $\Theta$ with the polarization axis.]]

### PDF page 31

The lecture recalls $\energy{L}=\mechanical{\sigma}_{\mathrm{T}}\energy{S}$, the nonrelativistic oscillation condition $\mechanical{v}\ll c$, Larmor's scaling $\energy{L}\propto\mechanical{a}^2$, and the relation $\energy{\alpha}=\mechanical{n}\mechanical{\sigma}$ between an attenuation coefficient and a cross section.

The incident energy flux is the magnitude of the **Poynting vector**, which in CGS is

$$
\vec{\energy{S}}=\frac{c}{4\pi}(\vec{\electric{E}}\times\vec{\magnetic{B}}).
$$

For the plane-wave solution of Maxwell's equations, $\vec{\electric{E}}\perp\vec{\magnetic{B}}$ and the magnitudes are equal in Gaussian units. Evaluating at the electron's position gives

$$
\energy{S}=\frac{c}{4\pi}\left|\vec{\electric{E}}\right|^2
=\frac{c}{4\pi}(\electric{E}_x)_0^2\cos^2(\signal{\omega}t).
$$

Use this flux and the radiated power to solve for $\mechanical{\sigma}_{\mathrm{T}}$.

### PDF page 32

The incident field factor $(\electric{E}_x)_0^2\cos^2(\signal{\omega}t)$ cancels in the ratio of scattered power to incident flux.

$$
\mechanical{\sigma}_{\mathrm{T}}
=\frac{\energy{L}}{\energy{S}}
=\frac{8\pi}{3}\frac{\electric{e}^4}{\mechanical{m}_e^2c^4}
=\frac{8\pi}{3}\mechanical{r}_0^2
\simeq\quantity{0.665\times10^{-24}}{cm^2}
$$

Here $\mechanical{r}_0=\electric{e}^2/(\mechanical{m}_e c^2)\simeq\quantity{2.82\times10^{-13}}{cm}$ is the classical electron radius. The cross section is the effective area a free electron presents to the incident wave in the nonrelativistic limit. The scattered wave keeps the same frequency, $\hbar\signal{\omega}_f=\hbar\signal{\omega}_i$, so Thomson scattering is elastic. The total cross section also applies to unpolarized light. The notes assign that result as a homework problem.

#### CGS and SI electromagnetic units

Start from Coulomb's law for the signed radial force,

$$
\mechanical{F}_{21}=\frac{k\electric{q}_1\electric{q}_2}{\mechanical{r}_{21}^2}.
$$

The scalars $\electric{q}_1$ and $\electric{q}_2$ give the magnitude and sign of the charges.

### PDF page 33

Here $\mechanical{r}_{21}$ is the distance between the charges and $\mechanical{F}_{21}$ is the force on $\electric{q}_2$ due to $\electric{q}_1$.

**MKS (SI).** Force is in newtons, distance is in meters, and charge is in coulombs. The elementary charge is $\quantity{1.602\times10^{-19}}{C}$.

$$
\mechanical{F}_{21}
=\frac{1}{4\pi\electric{\epsilon}_0}
\frac{\electric{q}_1\electric{q}_2}{\mechanical{r}_{21}^2},
\qquad
k=\frac{1}{4\pi\electric{\epsilon}_0}\simeq\quantity{8.988\times10^9}{N\cdot m^2\cdot C^{-2}}.
$$

The permittivity of free space is $\electric{\epsilon}_0\simeq\quantity{8.854\times10^{-12}}{F\cdot m^{-1}}$. The notes mention the force between parallel currents, proportional to $\circuit{I}_1\circuit{I}_2/\mechanical{d}$ for a fixed wire length, as a historical measurement method.

**CGS (electrostatic units).** Force is in dynes ($\unit{g\cdot cm\cdot s^{-2}}$) and distance is in centimeters. Set $k=1$ and measure charge in electrostatic units (esu). The elementary charge is approximately $\quantity{4.8\times10^{-10}}{esu}$, and $\quantity{1}{C}\simeq\quantity{3\times10^9}{esu}$.

### PDF page 34

In Gaussian CGS, Coulomb's law becomes $\mechanical{F}_{21}=\electric{q}_1\electric{q}_2/\mechanical{r}_{21}^2$.

#### Maxwell's equations in SI and Gaussian CGS

Write $\electric{\rho}$ for charge density and $\vec{\electric{J}}$ for current density.

$$
\begin{array}{l l}
\text{SI} & \text{Gaussian CGS}\\[4pt]
\nabla\cdot\vec{\electric{E}}=\electric{\rho}/\electric{\epsilon}_0
& \nabla\cdot\vec{\electric{E}}=4\pi\electric{\rho}\\
\nabla\cdot\vec{\magnetic{B}}=0
& \nabla\cdot\vec{\magnetic{B}}=0\\
\nabla\times\vec{\electric{E}}=-\partial_t\vec{\magnetic{B}}
& \nabla\times\vec{\electric{E}}=-\frac{1}{c}\partial_t\vec{\magnetic{B}}\\
\nabla\times\vec{\magnetic{B}}
=\magnetic{\mu}_0\vec{\electric{J}}
+\magnetic{\mu}_0\electric{\epsilon}_0\partial_t\vec{\electric{E}}
& \nabla\times\vec{\magnetic{B}}
=\frac{4\pi}{c}\vec{\electric{J}}+\frac{1}{c}\partial_t\vec{\electric{E}}
\end{array}
$$

The permeability of free space is $\magnetic{\mu}_0\simeq\quantity{4\pi\times10^{-7}}{N\cdot A^{-2}}$.

#### Lorentz force and Poynting vector

The electric and magnetic fields use different units in SI and the same units in Gaussian CGS.

$$
\begin{array}{l l}
\text{SI} & \text{Gaussian CGS}\\[4pt]
\vec{\mechanical{F}}=\electric{q}(\vec{\electric{E}}+\vec{\mechanical{v}}\times\vec{\magnetic{B}})
& \vec{\mechanical{F}}=\electric{q}\bigl(\vec{\electric{E}}+\frac{\vec{\mechanical{v}}}{c}\times\vec{\magnetic{B}}\bigr)\\
\vec{\energy{S}}=\frac{1}{\magnetic{\mu}_0}(\vec{\electric{E}}\times\vec{\magnetic{B}})
& \vec{\energy{S}}=\frac{c}{4\pi}(\vec{\electric{E}}\times\vec{\magnetic{B}})
\end{array}
$$

### PDF page 35

#### Electromagnetic energy density and wave equation

The electromagnetic energy density in SI and Gaussian CGS is

$$
\begin{aligned}
\energy{U}_{\mathrm{SI}}&=\frac{1}{2}\left(\electric{\epsilon}_0\electric{E}^2+\frac{\magnetic{B}^2}{\magnetic{\mu}_0}\right),\\
\energy{U}_{\mathrm{CGS}}&=\frac{\electric{E}^2+\magnetic{B}^2}{8\pi}.
\end{aligned}
$$

For a plane electromagnetic wave in Gaussian CGS, $\magnetic{B}^2=\electric{E}^2$ and $\energy{U}_{\mathrm{CGS}}=\electric{E}^2/(4\pi)$. In SI, $\magnetic{\mu}_0\electric{\epsilon}_0=1/c^2$. The vacuum wave equation is

$$
\nabla^2\vec{\electric{E}}-\frac{1}{c^2}\frac{\partial^2\vec{\electric{E}}}{\partial t^2}=0.
$$

#### Compton scattering

Use the same incident-photon and free-electron setup, now allowing for recoil. The Thomson conditions $\mechanical{v}\ll c$, $\mechanical{p}_e/\mechanical{m}_e\ll c$, and $h\signal{\nu}\ll\mechanical{m}_ec^2$ are crossed out in the source.

The recoil question is whether $\mechanical{p}_e^2/(2\mechanical{m}_e)\ll h\signal{\nu}$ still holds, using the nonrelativistic expression as an estimate for the electron kinetic energy. Take $\mechanical{p}_e\sim\mechanical{p}_\gamma=h\signal{\nu}/c$ as an order-of-magnitude estimate.

### PDF page 36

Using the momentum estimate, the negligible-recoil condition would require

$$
\frac{1}{2}h\signal{\nu}
\left(\frac{h\signal{\nu}}{\mechanical{m}_e c^2}\right)\ll h\signal{\nu}
\quad\Longleftrightarrow\quad
\frac{1}{2}h\signal{\nu}\ll\mechanical{m}_e c^2.
$$

When the incident energy is comparable to the electron rest energy, the electron can recoil significantly and the outgoing photon can carry less energy. Calculating the cross section requires quantum electrodynamics. The photon energy loss follows from conservation of energy and momentum.

#### Four-vectors and Lorentz transformations

See Rybicki and Lightman, sections 4.1 and 4.2. Consider two inertial frames with the primed frame moving at speed $\mechanical{v}$ along the positive $x$ axis. An event with unprimed coordinates $(t,x,y,z)$ transforms as

$$
\begin{aligned}
x'&=\gamma(x-\mechanical{v}t),\\
y'&=y,\\
z'&=z,\\
t'&=\gamma\left(t-\frac{\mechanical{v}x}{c^2}\right).
\end{aligned}
$$

![[Kyle Kabasares - Radiative Transfer - Two inertial frames.png|**Fig. 25** The primed and unprimed coordinate axes are parallel, with the primed origin moving along the positive $x$ axis.]]

### PDF page 37

The Lorentz factor is $\gamma=[1-(\mechanical{v}/c)^2]^{-1/2}$. The speed of light is the same in all inertial frames, and the interval is Lorentz invariant.

$$
-c^2t^2+x^2+y^2+z^2=-c^2(t')^2+(x')^2+(y')^2+(z')^2
$$

The position four-vector is $X=(x^0,x^1,x^2,x^3)=(ct,x,y,z)=(ct,\vec{x})$. In units with $c=1$, it becomes $X=(t,\vec{x})$. The Minkowski inner product of this four-vector with itself is

$$
X\cdot X=-t^2+|\vec{x}|^2.
$$

For a timelike displacement, the **proper time** satisfies

$$
(d\tau)^2=(dt)^2-|d\vec{x}|^2=-dX\cdot dX
\qquad(c=1).
$$

Proper time is invariant. The **four-velocity** is the derivative of the position four-vector with respect to proper time.

$$
U=\frac{dX}{d\tau}
=\left(\frac{dt}{d\tau},\frac{d\vec{x}}{d\tau}\right)
\qquad(c=1).
$$

### PDF page 38

The four-velocity has $U\cdot U=-1$ when $c=1$. Rewriting the proper-time relation in terms of $\vec{\mechanical{v}}=d\vec{x}/dt$ gives

$$
(d\tau)^2=dt^2\left(1-\frac{\mechanical{v}^2}{c^2}\right),
\qquad
dt=\gamma\,d\tau.
$$

Hence $U=(\gamma,\gamma\vec{\mechanical{v}})$ in units with $c=1$, and $U=\gamma(c,\vec{\mechanical{v}})$ with $c$ restored.

The **four-momentum** is

$$
P=\mechanical{m}U
=(\gamma\mechanical{m}c,\gamma\mechanical{m}\vec{\mechanical{v}})
=\left(\frac{\energy{E}}{c},\vec{\mechanical{p}}\right).
$$

The time component is $\energy{E}/c$ with $\energy{E}=\gamma\mechanical{m}c^2$. At rest this gives the rest energy $\mechanical{m}c^2$. The spatial components are $\mechanical{p}_i=\gamma\mechanical{m}\mechanical{v}_i$ for $i=1,2,3$. They approach the classical momentum for $\mechanical{v}\ll c$. With $c=1$, $P=(\energy{E},\vec{\mechanical{p}})$.

### PDF page 39

The invariant is $P\cdot P=-\mechanical{m}^2c^2$, or $-\mechanical{m}^2$ with $c=1$. The energy–momentum form of $P$ and this invariant apply to massive and massless particles.

#### Lecture, April 25, 2019

**Photon energy after scattering from a free electron.** Initially, a photon travels along $\hat{k}_i$ with energy $\energy{E}_\gamma^i=hc/\signal{\lambda}_i$. The electron is at rest. After the interaction, the photon travels along $\hat{k}_f$ with energy $\energy{E}_\gamma^f=hc/\signal{\lambda}_f$, and the electron recoils.

![[Kyle Kabasares - Radiative Transfer - Compton scattering before and after.png|**Fig. 26** An incident photon reaches a stationary free electron. The outgoing photon makes an angle $\Theta$ with the incident direction, and the electron recoils.]]

To solve for the outgoing photon energy, use four-vectors with $c=1$. The initial photon four-momentum is

$$
P_\gamma^i=(\energy{E}_\gamma^i,\vec{\mechanical{p}}_\gamma^i),
\qquad
\vec{\mechanical{p}}_\gamma^i=\energy{E}_\gamma^i\hat{k}_i.
$$

### PDF page 40

The other four-momenta in units with $c=1$ are

$$
\begin{aligned}
P_e^i&=(\mechanical{m}_e,\vec{0}),\\
P_\gamma^f&=(\energy{E}_\gamma^f,\vec{\mechanical{p}}_\gamma^f),
& \vec{\mechanical{p}}_\gamma^f&=\energy{E}_\gamma^f\hat{k}_f,\\
P_e^f&=(\gamma\mechanical{m}_e,\vec{\mechanical{p}}_e^f).
\end{aligned}
$$

Conservation of energy and momentum gives $P_\gamma^i+P_e^i=P_\gamma^f+P_e^f$. Isolate $P_e^f=P_e^i+P_\gamma^i-P_\gamma^f$ and take the Minkowski inner product of each side with itself.

$$
(P_e^f)^2=(P_e^i)^2+(P_\gamma^i-P_\gamma^f)^2
+2P_e^i\cdot(P_\gamma^i-P_\gamma^f).
$$

The electron terms on the two sides cancel because each equals $-\mechanical{m}_e^2$.

### PDF page 41

The photon four-momenta are null, so $(P_\gamma^i-P_\gamma^f)^2=-2P_\gamma^i\cdot P_\gamma^f$. The remaining equation is $P_e^i\cdot(P_\gamma^i-P_\gamma^f)=P_\gamma^i\cdot P_\gamma^f$. Evaluating the products in units with $c=1$ gives

$$
-\mechanical{m}_e(\energy{E}_\gamma^i-\energy{E}_\gamma^f)
=-\energy{E}_\gamma^i\energy{E}_\gamma^f(1-\cos\Theta),
\qquad
\cos\Theta=\hat{k}_i\cdot\hat{k}_f.
$$

Divide by $-\mechanical{m}_e\energy{E}_\gamma^i\energy{E}_\gamma^f$ and restore $c$ to obtain

$$
\frac{1}{\energy{E}_\gamma^f}-\frac{1}{\energy{E}_\gamma^i}
=\frac{1-\cos\Theta}{\mechanical{m}_e c^2}.
$$

In terms of wavelengths, the **Compton formula** is

$$
\signal{\lambda}_f-\signal{\lambda}_i
=\signal{\lambda}_{\mathrm{C}}(1-\cos\Theta),
\qquad
\signal{\lambda}_{\mathrm{C}}=\frac{h}{\mechanical{m}_e c}.
$$

Here $\signal{\lambda}_{\mathrm{C}}$ is the electron Compton wavelength. The notes refer to Rybicki and Lightman, equation 7.3.

#### Total cross section for Compton scattering

The Klein–Nishina formula gives the total cross section as $3\mechanical{\sigma}_{\mathrm{T}}/4$ times a function of $x=\energy{E}_\gamma/(\mechanical{m}_e c^2)$ (Rybicki and Lightman, equation 7.5). In the low-energy limit $x\ll1$, the expansion is

$$
\mechanical{\sigma}
=\mechanical{\sigma}_{\mathrm{T}}\left(1-2x+\frac{26}{5}x^2+\cdots\right)
$$

(Rybicki and Lightman, equation 7.6a).

### PDF page 42

In the extreme relativistic limit, $x\gg1$, the total cross section is approximately

$$
\mechanical{\sigma}\simeq\frac{3\mechanical{\sigma}_{\mathrm{T}}}{8x}
\left(\ln(2x)+\frac{1}{2}\right).
$$

See Rybicki and Lightman, equation 7.6b.

#### Inverse Compton scattering

See Rybicki and Lightman, chapter 7, sections 1, 2, and 4. Start with a moving electron and calculate the energy it transfers to an incident photon. Transform the photon to the electron rest frame, evaluate the scattering there, and transform back to the laboratory frame.

Assume that the incident photon energy in the electron rest frame is much smaller than $\mechanical{m}_e c^2$. Scattering in that frame can then be treated in the Thomson limit. The notes return to the validity of this assumption later.

![[Kyle Kabasares - Radiative Transfer - Inverse Compton lab frame.png|**Fig. 27** Lab-frame directions of the incident and scattered photons and the moving electron.]]

Choose the electron direction $\hat{k}_e$ as the axis from which the angles are measured.

### PDF page 43

In the laboratory frame define

$$
\cos\theta_i=\hat{k}_i\cdot\hat{k}_e,\qquad
\cos\theta_f=\hat{k}_f\cdot\hat{k}_e.
$$

The corresponding angles in the electron rest frame are $\cos\theta_i'=\hat{k}_i'\cdot\hat{k}_e$ and $\cos\theta_f'=\hat{k}_f'\cdot\hat{k}_e$. The lab-frame electron direction serves as the reference axis in both drawings.

![[Kyle Kabasares - Radiative Transfer - Inverse Compton electron rest frame.png|**Fig. 28** The incident and outgoing photon directions in the electron rest frame, with the lab-frame electron direction retained as a reference.]]

#### Velocity transformations

How do photon energies transform? First consider the transformation of an ordinary velocity $\vec{\mechanical{u}}$ from the unprimed frame into the primed frame (Rybicki and Lightman, sections 4.1 and 4.2).

![[Kyle Kabasares - Radiative Transfer - Axes for velocity transformation.png|**Fig. 29** The primed and unprimed axes are parallel, with the boost along $x$.]]

Differentiating the spatial Lorentz transformations gives

$$
\begin{aligned}
x'&=\gamma(x-\mechanical{v}t), & dx'&=\gamma(dx-\mechanical{v}\,dt),\\
y'&=y, & dy'&=dy,\\
z'&=z, & dz'&=dz.
\end{aligned}
$$

### PDF page 44

The time transformation and its differential are

$$
t'=\gamma\left(t-\frac{\mechanical{v}x}{c^2}\right),
\qquad
dt'=\gamma\left(dt-\frac{\mechanical{v}}{c^2}\,dx\right).
$$

Dividing the spatial differentials by $dt'$ gives

$$
\begin{aligned}
\mechanical{u}_x'&=\frac{\mechanical{u}_x-\mechanical{v}}{1-\mechanical{v}\mechanical{u}_x/c^2},\\
\mechanical{u}_y'&=\frac{\mechanical{u}_y}{\gamma(1-\mechanical{v}\mechanical{u}_x/c^2)},\\
\mechanical{u}_z'&=\frac{\mechanical{u}_z}{\gamma(1-\mechanical{v}\mechanical{u}_x/c^2)}.
\end{aligned}
$$

The boost changes the transverse velocity components and therefore can change the direction. In the $xy$ plane, $\mechanical{u}_z=0$, $\tan\theta=\mechanical{u}_y/\mechanical{u}_x$, and $\mechanical{u}=\sqrt{\mechanical{u}_x^2+\mechanical{u}_y^2}$, with $\mechanical{u}_x=\mechanical{u}\cos\theta$ and $\mechanical{u}_y=\mechanical{u}\sin\theta$. It follows that

$$
\tan\theta'
=\frac{\mechanical{u}_y'}{\mechanical{u}_x'}
=\frac{\mechanical{u}_y}{\gamma(\mechanical{u}_x-\mechanical{v})}
=\frac{\mechanical{u}\sin\theta}{\gamma(\mechanical{u}\cos\theta-\mechanical{v})}.
$$

For the time component of the four-velocity, use the four-vector form of the Lorentz transformation.

### PDF page 45

#### Lorentz transformation matrix

For a boost along $x$, the position four-vector $X=(ct,x,y,z)$ transforms as $X'=\Lambda X$, where

$$
\Lambda=
\begin{pmatrix}
\gamma & -\gamma\mechanical{v}/c & 0 & 0\\
-\gamma\mechanical{v}/c & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix}.
$$

In components,

$$
(X')^\mu=\sum_{\nu=0}^{3}\Lambda^\mu{}_\nu X^\nu
=\Lambda^\mu{}_\nu X^\nu.
$$

The repeated index $\nu$ implies a sum under the Einstein summation convention. The indices $\mu$ and $\nu$ label the row and column and each runs from $0$ to $3$. The notes set aside the distinction between raised and lowered indices for this course. Any four-vector $A$ transforms in the same way, $(A')^\mu=\Lambda^\mu{}_\nu A^\nu$.

### PDF page 46

#### Energy transformation for a massive particle

Apply $P'=\Lambda P$ to the four-momentum. Its zeroth component transforms as

$$
(P')^0=\gamma\left(P^0-\frac{\mechanical{v}}{c}P^1\right),
\qquad
P^0=\frac{\energy{E}}{c},
\qquad
P^1=|\vec{\mechanical{p}}|\cos\theta.
$$

Here $\theta$ is the angle between the particle momentum and the boost direction. Multiplying by $c$ gives

$$
\energy{E}'=\gamma\left(\energy{E}-\mechanical{v}|\vec{\mechanical{p}}|\cos\theta\right).
$$

For a particle of mass $\mechanical{m}$ and speed $\mechanical{u}$ in the unprimed frame,

$$
\energy{E}=\frac{\mechanical{m}c^2}{\sqrt{1-\mechanical{u}^2/c^2}},
\qquad
|\vec{\mechanical{p}}|=\frac{\mechanical{m}\mechanical{u}}{\sqrt{1-\mechanical{u}^2/c^2}}.
$$

Substituting gives

$$
\energy{E}'=\gamma\energy{E}
\left(1-\frac{\mechanical{v}\mechanical{u}}{c^2}\cos\theta\right).
$$

The factor $\gamma$ here is set by the relative speed $\mechanical{v}$ of the frames.

### PDF page 47

#### Energy transformation for a massless particle

For a photon, $|\vec{\mechanical{p}}|=\energy{E}/c$. The boost therefore gives

$$
\energy{E}'=\gamma\energy{E}\left(1-\frac{\mechanical{v}}{c}\cos\theta\right).
$$

See Rybicki and Lightman, p. 119.

For the inverse Compton problem, apply this transformation to the incident photon to obtain its energy in the electron rest frame.

$$
(\energy{E}_\gamma^i)'=\gamma\energy{E}_\gamma^i
\left(1-\frac{\mechanical{v}}{c}\hat{k}_i\cdot\hat{k}_e\right).
$$

For a relativistic electron and an angular factor of order unity, the rest-frame energy is of order $\gamma\energy{E}_\gamma^i$. In the Thomson limit the scattering is elastic in that frame.

$$
(\energy{E}_\gamma^f)'=(\energy{E}_\gamma^i)'
=\gamma\energy{E}_\gamma^i
\left(1-\frac{\mechanical{v}}{c}\hat{k}_i\cdot\hat{k}_e\right)
$$

The next step transforms the scattered photon back to the laboratory frame.

### PDF page 48

Use the reverse Lorentz transformation with the outgoing photon direction in the electron frame, $\hat{k}_f'$. With $\beta=\mechanical{v}/c$,

$$
\begin{aligned}
\energy{E}_\gamma^f
&=\gamma(\energy{E}_\gamma^f)'(1+\beta\hat{k}_f'\cdot\hat{k}_e)\\
&=\gamma^2\energy{E}_\gamma^i
(1-\beta\hat{k}_i\cdot\hat{k}_e)(1+\beta\hat{k}_f'\cdot\hat{k}_e).
\end{aligned}
$$

The energy gain is greatest for a head-on incident photon, $\hat{k}_i\cdot\hat{k}_e=-1$, that scatters along the electron motion, $\hat{k}_f'\cdot\hat{k}_e=1$. For $\mechanical{v}\simeq c$, $(\energy{E}_\gamma^f)_{\max}\simeq4\gamma^2\energy{E}_\gamma^i$.

Inverse Compton scattering boosts the photon energy by a factor of order $\gamma^2$ when both angular factors are of order unity and the Thomson approximation applies in the electron rest frame. An angular average follows later in the notes. With a rest-frame energy of order $\gamma\energy{E}_\gamma^i$, the Thomson condition is

$$
(\energy{E}_\gamma^i)'\ll\mechanical{m}_ec^2,
\qquad
\energy{E}_\gamma^i\ll\frac{\mechanical{m}_ec^2}{\gamma}
\simeq\frac{\quantity{511}{keV}}{\gamma}.
$$

### PDF page 49

**Example 1.** The notes use $\mechanical{v}=0.9c$ and quote $\gamma=1.7$, giving a Thomson condition $\energy{E}_\gamma^i\ll\quantity{300}{keV}$ and taking $\energy{E}_\gamma^i\le\quantity{30}{keV}$ as an example. These quoted speed and Lorentz factor are inconsistent. At $0.9c$, $\gamma\simeq2.29$ and the energy scale $\mechanical{m}_ec^2/\gamma$ is about $\quantity{223}{keV}$.

**Example 2.** For radio photons scattered by electrons with $\gamma=10^4$, the Thomson limit requires an incident photon energy well below

$$
\frac{\mechanical{m}_e c^2}{\gamma}
\simeq\quantity{8.2\times10^{-11}}{erg}
\simeq\quantity{0.05}{keV},
$$

corresponding to $\signal{\nu}=\energy{E}/h\sim\quantity{10^{16}}{Hz}$. Radio frequencies of $\quantity{10^{11}}{Hz}$ or below readily satisfy this condition. For a typical Very Large Array frequency of $\quantity{10^9}{Hz}$,

$$
\signal{\nu}_{\mathrm{out}}\sim\gamma^2\signal{\nu}
\sim10^8\times\quantity{10^9}{Hz}
=\quantity{10^{17}}{Hz},
$$

in the soft X-ray band at about $\quantity{0.4}{keV}$.

#### Lecture, April 30, 2019 (marked missed)

Energy conservation limits the maximum outgoing photon energy to order $\gamma\mechanical{m}_e c^2$ when the incoming photon energy is small compared with the electron energy. The line above this estimate appears to square the incident energy. The Thomson-limit result on the preceding page scales linearly with it.

### PDF page 50

#### Power scattered by one moving electron

Consider the energy change of an incident beam of photons scattering off one moving electron.

![[Kyle Kabasares - Radiative Transfer - Photons scattered out of the incident beam.png|**Fig. 30** The electron scatters photons into several directions. The observer along the original direction sees the transmitted remnant.]]

First calculate the total scattered luminosity in the electron rest frame. In the Thomson limit it is $\energy{L}=\mechanical{\sigma}_{\mathrm{T}}\energy{S}$, where $\energy{S}$ is the incident wave's energy flux. In Gaussian units the flux and energy density of a plane wave in vacuum are

$$
\energy{S}=\frac{c}{4\pi}|\vec{\electric{E}}|^2,\qquad
\energy{U}=\frac{|\vec{\electric{E}}|^2+|\vec{\magnetic{B}}|^2}{8\pi}
=\frac{|\vec{\electric{E}}|^2}{4\pi}.
$$

Thus $\energy{S}=c\energy{U}$ and the scattered power in the electron rest frame is

$$
\frac{d\energy{E}_\gamma'}{dt'}=c\mechanical{\sigma}_{\mathrm{T}}\energy{U}_j',
$$

where $\energy{U}_j'$ is the energy density of the incoming photons in that frame.

### PDF page 51

#### Transforming the scattered luminosity

The notes use the invariance of total emitted power when the emitted radiation has zero net momentum in the emitter's instantaneous rest frame (Rybicki and Lightman, section 4.8). The radiated energy then transforms as $d\energy{E}=\gamma\,d\energy{E}'$, while the time interval along the emitter's worldline transforms as $dt=\gamma\,dt'$. Their ratio is invariant under this condition.

$$
\frac{d\energy{E}}{dt}=\frac{d\energy{E}'}{dt'}
$$

Thus the scattered luminosity in the laboratory frame is $d\energy{E}_\gamma/dt=c\mechanical{\sigma}_{\mathrm{T}}\energy{U}_\gamma'$. To transform the incident photon energy density, write

$$
\energy{U}_\gamma'=\int\energy{E}'\,\mechanical{n}(\energy{E}')\,d\energy{E}',
$$

where $\energy{E}'$ is the incident photon energy in the electron rest frame and $\mechanical{n}(\energy{E}')\,d\energy{E}'$ is the photon number density in the energy interval $[\energy{E}',\energy{E}'+d\energy{E}']$.

### PDF page 52

#### Photon number and phase-space volume

The notes use invariance of the number of photons in the corresponding phase-space element,

$$
dN=dN'=\mechanical{n}(\energy{E}')\,d\energy{E}'\,d\mechanical{V}'.
$$

For a volume element at rest in the primed frame, length contraction in the laboratory frame gives $d\mechanical{V}'=\gamma\,d\mechanical{V}$. Along the rest-frame worldline $dt'=d\tau=dt/\gamma$. The four-volume is invariant,

$$
d^4x'=d\mechanical{V}'\,dt'=d\mechanical{V}\,dt=d^4x,
$$

where the common factor of $c$ is suppressed. Hence $dN=\mechanical{n}(\energy{E}')\,d\energy{E}'\,d^4x'/dt'$. The notes invoke a homework result for photon trajectories that $dt'/\energy{E}'$ is invariant. They then use the invariant

$$
\frac{\mechanical{n}(\energy{E}')\,d\energy{E}'}{\energy{E}'}
$$

to express the electron-frame photon energy density in terms of laboratory quantities.

### PDF page 53

Using the invariant phase-space factor and $\energy{E}'=\gamma\energy{E}(1-\beta\cos\theta)$ gives

$$
\energy{U}_\gamma'
=\int(\energy{E}')^2
\frac{\mechanical{n}(\energy{E})\,d\energy{E}}{\energy{E}}
=\gamma^2\int(1-\beta\cos\theta)^2\energy{E}\mechanical{n}(\energy{E})\,d\energy{E}.
$$

The right side uses laboratory-frame quantities. For a photon distribution isotropic in that frame, include $d\Omega/(4\pi)$ and factor the angular and energy integrals.

$$
\energy{U}_\gamma'
=\gamma^2\left[\frac{1}{4\pi}\int_{4\pi}(1-\beta\cos\theta)^2\,d\Omega\right]
\left[\int\energy{E}\mechanical{n}(\energy{E})\,d\energy{E}\right]
=\gamma^2\left(1+\frac{\beta^2}{3}\right)\energy{U}_\gamma.
$$

The total scattered power is then

$$
\frac{d\energy{E}_\gamma}{dt}
=c\mechanical{\sigma}_{\mathrm{T}}\gamma^2
\left(1+\frac{\beta^2}{3}\right)\energy{U}_\gamma.
$$

To obtain the net energy transferred to the photons, subtract their original power removed from the incoming beam, $c\mechanical{\sigma}_{\mathrm{T}}\energy{U}_\gamma$.

### PDF page 54

#### Net inverse Compton power

Subtracting the unboosted scattered power gives the net power transferred from the electron to an isotropic radiation field,

$$
\begin{aligned}
\energy{L}_{\mathrm{IC}}
&=c\mechanical{\sigma}_{\mathrm{T}}\gamma^2
\left(1+\frac{\beta^2}{3}\right)\energy{U}_\gamma
-c\mechanical{\sigma}_{\mathrm{T}}\energy{U}_\gamma\\
&=\frac{4}{3}\mechanical{\sigma}_{\mathrm{T}}c\gamma^2\beta^2\energy{U}_\gamma.
\end{aligned}
$$

See Rybicki and Lightman, equation 7.16. For recoil corrections beyond the Thomson limit, the notes point to equation 7.16b. Writing the energy moments in units of the electron rest energy with $\varepsilon_i=\energy{E}_\gamma^i/(\mechanical{m}_e c^2)$, the correction shown is

$$
\energy{L}_{\mathrm{IC}}^{\mathrm{corr}}
=\energy{L}_{\mathrm{IC}}\left[1-\frac{63}{10}\gamma
\frac{\langle\varepsilon_i^2\rangle}{\langle\varepsilon_i\rangle}
+\cdots\right].
$$

#### Mean photon energy boost

For $\mechanical{v}\simeq c$ and Thomson scattering in the electron rest frame, $\energy{L}_{\mathrm{IC}}\simeq(4/3)\mechanical{\sigma}_{\mathrm{T}}c\gamma^2\energy{U}_\gamma$. The unboosted scattered power is the mean incident photon energy times the scattering rate. The inverse Compton power uses the mean gain per photon instead.

$$
\begin{aligned}
\mechanical{\sigma}_{\mathrm{T}}c\energy{U}_\gamma
&=\langle\energy{E}_\gamma^i\rangle\frac{dN_\gamma}{dt},\\
\energy{L}_{\mathrm{IC}}
&=\langle\energy{E}_\gamma^f-\energy{E}_\gamma^i\rangle\frac{dN_\gamma}{dt}.
\end{aligned}
$$

### PDF page 55

Dividing the two power equations cancels the photon scattering rate. For ultrarelativistic electrons, $(4/3)\gamma^2\gg1$, so the initial photon energy is small compared with the boosted energy.

$$
\begin{aligned}
\langle\energy{E}_\gamma^f-\energy{E}_\gamma^i\rangle
&\simeq\frac{4}{3}\gamma^2\langle\energy{E}_\gamma^i\rangle,\\
\langle\energy{E}_\gamma^f\rangle
&\simeq\frac{4}{3}\gamma^2\langle\energy{E}_\gamma^i\rangle.
\end{aligned}
$$

The factor $4/3$ comes from the angular average for a photon distribution isotropic in the laboratory frame.

#### Comptonization

Comptonization describes the exchange of energy between distributions of photons and electrons when Compton scattering primarily determines the evolution of the photon spectrum. The notes consider a low-density population of hot electrons. Low density keeps the electrons' own emission small relative to the incident photon population, and high temperature allows substantial energy gains per scattering.

For the **Sunyaev–Zeldovich effect**, assume nonrelativistic thermal electrons and low-energy photons, $k_{\mathrm B}\thermal{T}\ll\mechanical{m}_ec^2$ and $h\signal{\nu}_\gamma\ll\mechanical{m}_ec^2$. Problem set 2, problem 3, gives the mean fractional photon energy change from recoil on a stationary electron.

$$
\left\langle\frac{\Delta\energy{E}_\gamma}{\energy{E}_\gamma}\right\rangle
=-\frac{\energy{E}_\gamma}{\mechanical{m}_ec^2}
$$

### PDF page 56

#### Mean energy exchange with thermal electrons

For an isotropic incident photon field, the mean gain per scattering from electron motion is $(4/3)\gamma^2(\mechanical{v}^2/c^2)\langle\energy{E}_\gamma^i\rangle$. In the nonrelativistic limit the corresponding fractional gain is $(4/3)\mechanical{v}^2/c^2$.

For a Maxwellian electron distribution at temperature $\thermal{T}_e$,

$$
\frac{1}{2}\mechanical{m}_e\langle\mechanical{v}^2\rangle
=\frac{3}{2}k_{\mathrm B}\thermal{T}_e.
$$

The motion contributes $4k_{\mathrm B}\thermal{T}_e/(\mechanical{m}_ec^2)$ to the mean fractional photon energy gain. Combining this with the recoil loss gives

$$
\left\langle\frac{\Delta\energy{E}_\gamma}{\energy{E}_\gamma}\right\rangle
=-\frac{\energy{E}_\gamma}{\mechanical{m}_ec^2}
+\frac{4k_{\mathrm B}\thermal{T}_e}{\mechanical{m}_ec^2}.
$$

The first term transfers energy from photons to electrons. The second transfers energy from electrons to photons and dominates when $k_{\mathrm B}\thermal{T}_e\gg\energy{E}_\gamma$.

### PDF page 57

#### Lecture, May 2, 2019

Possible makeup lectures were listed for Monday, May 13 and May 20, from 9:00 to 10:20 a.m. in 4135 FRH.

#### Compton y parameter

When $k_{\mathrm B}\thermal{T}_e\gg\energy{E}_\gamma$, the mean fractional change in photon energy per scattering is approximately $4k_{\mathrm B}\thermal{T}_e/(\mechanical{m}_e c^2)$.

The **Compton $y$ parameter** estimates whether photons significantly change their energy as they traverse a hot, low-density electron gas. It is the mean fractional energy change per scattering multiplied by the mean number of scatterings (Rybicki and Lightman, equation 7.32). For scattering optical depth $\energy{\tau}$, the notes quote

$$
\langle N_{\mathrm{scat}}\rangle\sim\max(\energy{\tau}^2,\energy{\tau}),
$$

with $\energy{\tau}^2$ for an optically thick medium and $\energy{\tau}$ for an optically thin one (Rybicki and Lightman, p. 36).

### PDF page 58

#### Sunyaev–Zeldovich distortion

The hot intracluster medium has Thomson optical depth $\energy{\tau}\ll1$. In the previous convention, the Compton parameter is $4k_{\mathrm B}\thermal{T}_e\energy{\tau}/(\mechanical{m}_ec^2)$. For the thermal Sunyaev–Zeldovich (SZ) effect, the conventional $y_{\mathrm{SZ}}$ omits the factor of four.

The SZ effect is inverse Compton scattering of cosmic microwave background (CMB) photons by hot electrons in a galaxy cluster. The scattering shifts photons toward higher frequencies and distorts the CMB spectrum.

![[Kyle Kabasares - Radiative Transfer - Up-scattered CMB spectrum.png|**Fig. 31** The arrows show CMB photons shifting to higher frequencies in the hot intracluster gas.]]

The fraction scattered is approximately $\energy{\tau}$. With $\mechanical{n}_e$ the electron number density and $\mechanical{\ell}$ the line-of-sight distance,

$$
\energy{\tau}=\mechanical{\sigma}_{\mathrm{T}}\int\mechanical{n}_e\,d\mechanical{\ell},
\qquad
y_{\mathrm{SZ}}=\frac{\mechanical{\sigma}_{\mathrm{T}}}{\mechanical{m}_e c^2}
\int \mechanical{n}_e k_{\mathrm B}\thermal{T}_e\,d\mechanical{\ell}.
$$

The source's second expression omits $\mechanical{\sigma}_{\mathrm{T}}$, which follows from its preceding definition of $\energy{\tau}$ and makes $y_{\mathrm{SZ}}$ dimensionless. In the Rayleigh–Jeans limit, the CMB brightness-temperature change is

$$
\frac{\Delta\thermal{T}_{\mathrm{CMB}}}{\thermal{T}_{\mathrm{CMB}}}=-2y_{\mathrm{SZ}}.
$$

The notes refer to Peebles' physical cosmology text for the derivation.

### PDF page 59

For a nonuniform electron temperature, the low-frequency SZ temperature shift is proportional to the electron pressure integrated along the line of sight.

$$
\left(\frac{\Delta\thermal{T}}{\thermal{T}}\right)_{\mathrm{CMB}}
=-\frac{2k_{\mathrm B}\mechanical{\sigma}_{\mathrm{T}}}{\mechanical{m}_ec^2}
\int\mechanical{n}_e\thermal{T}_e\,d\mechanical{\ell}.
$$

For a cluster of mass $\mechanical{M}_{\mathrm{tot}}\sim10^{15}\mechanical{M}_\odot$, the notes estimate $\Delta\thermal{T}_{\mathrm{CMB}}\sim\quantity{-1}{mK}$, against a CMB temperature of $\quantity{2.73}{K}$.

Why does the SZ effect cause a temperature decrement? Radio observers infer a **brightness temperature** from the normalization of the Rayleigh–Jeans spectrum at low frequency.

$$
\energy{I}_{\signal{\nu}}\simeq
\frac{2h\signal{\nu}^3}{c^2}\frac{k_{\mathrm B}\thermal{T}}{h\signal{\nu}}
=\left(\frac{2k_{\mathrm B}\thermal{T}}{c^2}\right)\signal{\nu}^2
=C(\thermal{T})\,\signal{\nu}^2.
$$

The coefficient of the quadratic frequency dependence is proportional to the brightness temperature.

![[Kyle Kabasares - Radiative Transfer - Rayleigh–Jeans temperature decrement.png|**Fig. 32** The SZ-distorted Rayleigh–Jeans spectrum has lower intensity at fixed frequency, corresponding to a lower brightness temperature.]]

### PDF page 60

In the Rayleigh–Jeans limit, the SZ-distorted intensity satisfies $\energy{I}_{\signal{\nu}}^{\mathrm{SZ}}<\energy{I}_{\signal{\nu}}^{\mathrm{true}}$. The smaller normalization of the $\signal{\nu}^2$ spectrum implies $\thermal{T}_{\mathrm{SZ}}<\thermal{T}_{\mathrm{true}}$. At sufficiently high frequencies the inequality in intensity reverses. Historically the measurements emphasized the low-frequency side. Satellites can measure the whole blackbody curve, and ground-based radio measurements remain important.

#### Independent measurement of the Hubble constant

For a cluster of characteristic size $\mechanical{R}$, the magnitude of the fractional SZ temperature shift scales as $\mechanical{n}_e\thermal{T}_e\mechanical{R}$. The X-ray luminosity from thermal bremsstrahlung in the hot intracluster medium scales as

$$
\energy{L}_{\mathrm X}\propto\mechanical{n}_e^2\thermal{T}_e^{1/2}\mechanical{R}^3.
$$

Using the observed angular size $\Theta\simeq\mechanical{R}/\mechanical{D}$ and eliminating the density in favor of the SZ shift gives the flux scaling

$$
\energy{F}_{\mathrm X}\propto\frac{\energy{L}_{\mathrm X}}{\mechanical{D}^2}
\propto
\left(\frac{\Delta\thermal{T}}{\thermal{T}}\right)^2
\frac{\Theta}{\thermal{T}_e^{3/2}\mechanical{D}}.
$$

The measurements therefore determine the cluster distance $\mechanical{D}$. The historical example in the notes gives $H_0=\quantity{77^{+4+10}_{-3-8}}{km\cdot s^{-1}\cdot Mpc^{-1}}$.

### PDF page 61

#### Cluster halo mass estimator

The number of clusters above mass $\mechanical{m}$, $N(>\mechanical{m})$, is sensitive to cosmology. Define the integrated SZ Compton parameter over the apparent area of a cluster at redshift $z$.

$$
\begin{aligned}
Y_{\mathrm{SZ}} &= \int_{\mathrm{cluster}}y_{\mathrm{SZ}}\,d\Omega
=\frac{1}{\mechanical{d}_A^2(z)}\int y_{\mathrm{SZ}}\,d\mechanical{A}\\
&=\frac{\mechanical{\sigma}_{\mathrm{T}}k_{\mathrm B}}
{\mechanical{d}_A^2(z)\mechanical{m}_ec^2}
\int \mechanical{n}_e\thermal{T}_e\,d\mechanical{V}.
\end{aligned}
$$

The density-weighted mean electron temperature is

$$
\langle\thermal{T}_e\rangle_m
=\frac{\int\mechanical{n}_e\thermal{T}_e\,d\mechanical{V}}
{\int\mechanical{n}_e\,d\mechanical{V}}.
$$

For fixed gas composition the denominator is proportional to the gas mass, so $Y_{\mathrm{SZ}}\propto\mechanical{M}_{\mathrm{gas}}\langle\thermal{T}_e\rangle_m/\mechanical{d}_A^2(z)$. With $f_{\mathrm{gas}}=\mechanical{M}_{\mathrm{gas}}/\mechanical{M}_{\mathrm{tot}}$ and $\langle\thermal{T}_e\rangle_m\propto\mechanical{M}_{\mathrm{tot}}^\alpha$, this gives

$$
Y_{\mathrm{SZ}}\propto
\frac{f_{\mathrm{gas}}\mechanical{M}_{\mathrm{tot}}^{1+\alpha}}{\mechanical{d}_A^2(z)}.
$$

The source's last line writes the exponent as $\alpha$, omitting the extra mass factor in the preceding expression. The distribution of integrated SZ signals probes the distribution of cluster masses. The notes describe SZ selection as nearly independent of redshift.

### PDF page 62

#### Continuum emission from thermal bremsstrahlung

**Thermal bremsstrahlung**, or **free–free emission**, is radiation from a free electron accelerated in the Coulomb field of an ion (Rybicki and Lightman, chapter 5). The discussion assumes the nonrelativistic limit, with $h\signal{\nu}\ll\mechanical{m}_ec^2$.

![[Kyle Kabasares - Radiative Transfer - Free–free encounter.png|**Fig. 33** An electron initially moving at speed $v_0$ passes a much heavier ion with impact parameter $b$.]]

Neglecting the recoil of the heavy ion, conservation of energy gives

$$
\frac{1}{2}\mechanical{m}_e\mechanical{v}_0^2
=h\signal{\nu}+\frac{1}{2}\mechanical{m}_e\mechanical{v}^2,
$$

where $\mechanical{v}_0$ and $\mechanical{v}$ are the initial and final electron speeds. Larmor's formula gives $\energy{L}=d\energy{E}/dt=2\electric{e}^2\mechanical{a}^2/(3c^3)$.

In the **impulse approximation**, take the trajectory to be straight and the interaction to be appreciable over $\Delta t\simeq\mechanical{b}/\mechanical{v}_0$. At closest approach, $\mechanical{m}_e\mechanical{a}=-Z\electric{e}^2/\mechanical{b}^2$ with the outward direction taken as positive. Therefore

$$
\frac{d\energy{E}}{dt}\simeq
\frac{2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3\mechanical{b}^4},
\qquad
\Delta\energy{E}(\mechanical{b})\simeq
\frac{2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3}
\frac{1}{\mechanical{v}_0\mechanical{b}^3}.
$$

### PDF page 63

In the impulse approximation, $d\energy{E}/dt\simeq\Delta\energy{E}(\mechanical{b})/\Delta t=\Delta\energy{E}(\mechanical{b})/(\mechanical{b}/\mechanical{v}_0)$.

#### Free–free emission from a plasma

Let $\mechanical{n}_e$ and $\mechanical{n}_i$ be the electron and ion number densities. The incident electron number flux is $\mechanical{n}_e\mechanical{v}_0$. In time $dt$, $\mechanical{n}_e\mechanical{v}_0\,dt$ electrons arrive per unit area. The energy radiated per unit area by encounters at impact parameter $\mechanical{b}$ is obtained by multiplying this fluence by the radiated energy per encounter, $\Delta\energy{E}(\mechanical{b})$.

There are $\mechanical{n}_i\,d\mechanical{V}$ ion targets in volume $d\mechanical{V}$. For each one, impact parameters between $\mechanical{b}$ and $\mechanical{b}+d\mechanical{b}$ occupy an annulus of area $2\pi\mechanical{b}\,d\mechanical{b}$.

![[Kyle Kabasares - Radiative Transfer - Impact parameter annulus.png|**Fig. 34** The annulus represents the cross-sectional area for encounters in the indicated impact-parameter interval.]]

The emitted energy is

$$
d\energy{E}
=(\mechanical{n}_i\,d\mechanical{V})
(2\pi\mechanical{b}\,d\mechanical{b})
(\mechanical{n}_e\mechanical{v}_0\,dt)
\Delta\energy{E}(\mechanical{b}).
$$

### PDF page 64

#### Lecture, May 7, 2019

The lecture reviews the energy radiated per encounter, $\Delta\energy{E}(\mechanical{b})=2Z^2\electric{e}^6/(3\mechanical{m}_e^2c^3\mechanical{v}_0\mechanical{b}^3)$, and the emitted energy from a volume of plasma.

In the impulse approximation, $\Delta t\simeq\mechanical{b}/\mechanical{v}_0$. Use the instantaneous angular rate at closest approach as the characteristic emission frequency.

$$
2\pi\signal{\nu}\simeq\frac{1}{\Delta t}
=\frac{\mechanical{v}_0}{\mechanical{b}},
\qquad
|d\signal{\nu}|=\frac{\mechanical{v}_0}{2\pi\mechanical{b}^2}|d\mechanical{b}|.
$$

![[Kyle Kabasares - Radiative Transfer - Angular rate at closest approach.png|**Fig. 35** The electron moves along the straight trajectory. At closest approach the line to the ion rotates at rate $v_0/b$.]]

Substitute the magnitude $|d\mechanical{b}|=(2\pi\mechanical{b}^2/\mechanical{v}_0)|d\signal{\nu}|$ into the annulus factor of the emitted-energy expression.

$$
d\energy{E}=(\mechanical{n}_i\,d\mechanical{V})
\left(2\pi\mechanical{b}\,\frac{2\pi\mechanical{b}^2}{\mechanical{v}_0}\,d\signal{\nu}\right)
(\mechanical{n}_e\mechanical{v}_0\,dt)
\frac{2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3\mechanical{v}_0\mechanical{b}^3}.
$$

The powers of $\mechanical{b}$ cancel. Define the frequency-specific **volume emissivity** by $\energy{\epsilon}_{\signal{\nu}}=d\energy{E}/(dt\,d\mechanical{V}\,d\signal{\nu})$.

### PDF page 65

For electrons all incident at speed $\mechanical{v}_0$, the free–free volume emissivity is

$$
\energy{\epsilon}_{\signal{\nu}}
=\mechanical{n}_e\mechanical{n}_i
\frac{8\pi^2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3\mechanical{v}_0}.
$$

The Maxwellian speed distribution at temperature $\thermal{T}$ is

$$
P(\mechanical{v})\,d\mechanical{v}
=\left(\frac{\mechanical{m}_e}{2\pi k_{\mathrm B}\thermal{T}}\right)^{3/2}
4\pi\mechanical{v}^2
\exp\left(-\frac{\mechanical{m}_e\mechanical{v}^2}{2k_{\mathrm B}\thermal{T}}\right)
d\mechanical{v}.
$$

To average the emissivity, integrate $P(\mechanical{v}_0)/\mechanical{v}_0$ from $\mechanical{v}_{\min}$ to infinity. Energy conservation requires $\mechanical{m}_e\mechanical{v}_0^2/2\ge h\signal{\nu}$, so $\mechanical{v}_{\min}=\sqrt{2h\signal{\nu}/\mechanical{m}_e}$. Set $u=\mechanical{m}_e\mechanical{v}_0^2/(2k_{\mathrm B}\thermal{T})$ and $du=\mechanical{m}_e\mechanical{v}_0\,d\mechanical{v}_0/(k_{\mathrm B}\thermal{T})$ to obtain

$$
\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}
=\mechanical{n}_e\mechanical{n}_i
\frac{32\pi^3Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3}
\left(\frac{\mechanical{m}_e}{2\pi k_{\mathrm B}\thermal{T}}\right)^{3/2}
\frac{k_{\mathrm B}\thermal{T}}{\mechanical{m}_e}
\exp\left(-\frac{h\signal{\nu}}{k_{\mathrm B}\thermal{T}}\right).
$$

This is close to the quantum-mechanical result.

### PDF page 66

#### Free–free cooling function and Gaunt factor

Rearrange the impulse-approximation emissivity as

$$
\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}
=\mechanical{n}_e\mechanical{n}_i
\frac{32\pi Z^2\electric{e}^6}{3\mechanical{m}_ec^3}
\left(\frac{2\pi}{3k_{\mathrm B}\mechanical{m}_e}\right)^{1/2}
\frac{\exp[-h\signal{\nu}/(k_{\mathrm B}\thermal{T})]}{\sqrt{\thermal{T}}}
\left(\frac{3\pi}{2\sqrt{3}}\right).
$$

The quantum-mechanical result replaces the final factor by the velocity-averaged free–free **Gaunt factor** $\bar{g}_{\mathrm{ff}}$, which is of order unity. Define the spectral cooling function by $\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}=\mechanical{n}_e\mechanical{n}_i\energy{\Lambda}_{\signal{\nu}}^{\mathrm{ff}}(\thermal{T})$. Its CGS numerical form, with $\thermal{T}$ in kelvin, is

$$
\energy{\Lambda}_{\signal{\nu}}^{\mathrm{ff}}(\thermal{T})
=6.8\times10^{-38}Z^2\thermal{T}^{-1/2}
\exp\left(-\frac{h\signal{\nu}}{k_{\mathrm B}\thermal{T}}\right)
\bar{g}_{\mathrm{ff}}
\quad[\unit{erg\cdot cm^3\cdot s^{-1}\cdot Hz^{-1}}].
$$

See Rybicki and Lightman, equation 5.14b. The expression is for a plasma with electrons and one ion species of charge $Z\electric{e}$, with $Z=1$ for pure hydrogen. For an ion species $i$ in a mixture, write its density as $\mechanical{n}_i=\mechanical{n}_{\mathrm H}(\mechanical{n}_i/\mechanical{n}_{\mathrm H})$.

For isotropic emission the per-steradian emission coefficient is $\energy{j}_{\signal{\nu}}^{\mathrm{ff}}=\energy{\epsilon}_{\signal{\nu}}^{\mathrm{ff}}/(4\pi)$. The handwritten line places the thermally averaged emissivity beneath the numerator as an annotation.

### PDF page 67

The frequency-integrated free–free emissivity is $\energy{\epsilon}_{\mathrm{ff}}=\int\energy{\epsilon}_{\signal{\nu}}^{\mathrm{ff}}\,d\signal{\nu}$. The bolometric scaling is $\energy{\epsilon}_{\mathrm{ff}}\propto\mechanical{n}_e\mechanical{n}_i\sqrt{\thermal{T}}$ (Rybicki and Lightman, equation 5.15b), as used in the SZ discussion.

#### Thermal bremsstrahlung in galaxy clusters

An illustrative cluster mass budget is approximately $75\%$ dark matter, $20\%$ hot intracluster medium (ICM), and $5\%$ galaxies and stars. The ICM temperature is roughly $\quantity{10^7}{K}$ to $\quantity{10^8}{K}$, corresponding to $k_{\mathrm B}\thermal{T}\sim\quantity{1–10}{keV}$. Its thermal bremsstrahlung is predominantly in the X-ray band, with wavelengths of order $\quantity{1–10}{\mathring{A}}$.

The hot ICM is nearly fully ionized. For Coulomb interactions, the electron mean free path is approximately

$$
\mechanical{\ell}_e\simeq\quantity{23}{kpc}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^2
\left(\frac{\mechanical{n}_e}{\quantity{10^{-3}}{cm^{-3}}}\right)^{-1}.
$$

This is comparable to the radius of a galaxy. Faraday rotation measured at radio wavelengths gives typical magnetic fields of order $\magnetic{B}\sim\quantity{1}{\mu G}$.

### PDF page 68

The gyroradius of a particle of mass $\mechanical{m}$ and charge magnitude $Z\electric{e}$ in the hot ICM is estimated as

$$
\mechanical{r}_g\simeq
\frac{\quantity{3.1\times10^8}{cm}}{Z}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^{1/2}
\left(\frac{\mechanical{m}}{\mechanical{m}_e}\right)^{1/2}
\left(\frac{\magnetic{B}}{\quantity{1}{\mu G}}\right)^{-1}.
$$

This is small compared with cluster scales. The notes discuss a fluid description with an isotropic velocity-dispersion tensor and mention research on the heat-flux-driven buoyancy instability (HBI) and the magnetothermal instability (MTI).

Could the hot ICM have multiple temperatures at one radius? Electron–electron collisions establish equilibrium on a timescale

$$
t_{\mathrm{eq}}(e,e)\simeq\quantity{3.3\times10^5}{yr}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^{3/2}
\left(\frac{\mechanical{n}_e}{\quantity{10^{-3}}{cm^{-3}}}\right)^{-1}.
$$

For electron–proton collisions the notes estimate $t_{\mathrm{eq}}(e,p)\simeq1870\,t_{\mathrm{eq}}(e,e)$ and quote a timescale of order $\quantity{10^9}{yr}$. They refer to Lyman Spitzer's *Physics of Fully Ionized Gases* and use a Maxwellian velocity distribution with a single local kinetic temperature.

The electron thermal pressure is

$$
\mechanical{P}_{\mathrm{thermal}}=\mechanical{n}_e k_{\mathrm B}\thermal{T}
\simeq\quantity{10^{-11}}{dyn\cdot cm^{-2}}
\left(\frac{\mechanical{n}_e}{\quantity{10^{-3}}{cm^{-3}}}\right)
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right).
$$

### PDF page 69

The Gaussian CGS magnetic pressure is

$$
\mechanical{P}_{\mathrm{mag}}=\frac{\magnetic{B}^2}{8\pi}
\simeq\quantity{4\times10^{-14}}{dyn\cdot cm^{-2}}
\left(\frac{\magnetic{B}}{\quantity{1}{\mu G}}\right)^2.
$$

At the fiducial ICM parameters it is much smaller than the thermal pressure. The lecture treats the hot ICM as a monatomic ideal gas.

#### Lecture, May 9, 2019

The lecture reviews the short mean free path relative to the cluster size, short electron–electron collision time, and weak magnetic pressure as reasons for the simple gas model. The sound crossing time over a distance $\mechanical{D}$ is

$$
t_s=\frac{\mechanical{D}}{\mechanical{c}_s}
\simeq\quantity{6.6\times10^8}{yr}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^{-1/2}
\left(\frac{\mechanical{D}}{\unit{Mpc}}\right).
$$

The ICM can relax if it has experienced no major merger over about a gigayear. The lecture also recalls $\langle\energy{\epsilon}_{\signal{\nu}}\rangle=\mechanical{n}_e\mechanical{n}_i\energy{\Lambda}_{\signal{\nu}}(\thermal{T})$, where $\energy{\Lambda}_{\signal{\nu}}\propto\thermal{T}^{-1/2}e^{-h\signal{\nu}/(k_{\mathrm B}\thermal{T})}$ in the free–free approximation.

#### Hydrostatic equilibrium

Consider a fluid element of pressure $\mechanical{P}$ and density $\mechanical{\rho}$ occupying a small box of volume $d\mechanical{V}=dx\,dy\,dz$. Assume that pressure and gravity are the only forces on the element.

### PDF page 70

![[Kyle Kabasares - Radiative Transfer - Pressure on a fluid element.png|**Fig. 36** The pressures on the two faces normal to $x$ act in opposite directions.]]

Since pressure is force per area, the net $x$ component from the two faces is

$$
(\vec{\mechanical{F}}_P)_x
=\bigl[\mechanical{P}(x,y,z)-\mechanical{P}(x+dx,y,z)\bigr]\,dy\,dz
=-\frac{\partial\mechanical{P}}{\partial x}\,d\mechanical{V}
$$

to first order. Applying the same argument in the other two directions gives

$$
(\vec{\mechanical{F}}_P)_y=-\frac{\partial\mechanical{P}}{\partial y}\,d\mechanical{V},
\qquad
(\vec{\mechanical{F}}_P)_z=-\frac{\partial\mechanical{P}}{\partial z}\,d\mechanical{V}.
$$

### PDF page 71

Combining the pressure forces gives

$$
\vec{\mechanical{F}}_P
=-\left(\frac{\partial\mechanical{P}}{\partial x}\hat{i}
+\frac{\partial\mechanical{P}}{\partial y}\hat{j}
+\frac{\partial\mechanical{P}}{\partial z}\hat{k}\right)d\mechanical{V}
=-\nabla\mechanical{P}\,d\mechanical{V}.
$$

The fluid element has mass $d\mechanical{m}=\mechanical{\rho}\,d\mechanical{V}$. With $\energy{U}_g$ its gravitational potential energy and $\mechanical{\Phi}$ the gravitational potential per unit mass, its gravitational force is

$$
\vec{\mechanical{F}}_g=-\nabla\energy{U}_g=-d\mechanical{m}\,\nabla\mechanical{\Phi}.
$$

The local equilibrium condition is $\vec{\mechanical{F}}_P+\vec{\mechanical{F}}_g=0$, so the pressure force balances gravity:

$$
\nabla\mechanical{P}=-\mechanical{\rho}\nabla\mechanical{\Phi}.
$$

In spherical symmetry, this becomes

$$
\frac{d\mechanical{P}_{\mathrm{gas}}}{d\mechanical{r}}
=-\mechanical{\rho}_{\mathrm{gas}}\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}^2},
$$

where $\mechanical{M}(<\mechanical{r})$ is the cumulative mass of all components within radius $\mechanical{r}$.

### PDF page 72

The ideal-gas pressure is

$$
\mechanical{P}_{\mathrm{gas}}=\mechanical{n}_{\mathrm{gas}} k_{\mathrm B}\thermal{T}
=\frac{\mechanical{\rho}_{\mathrm{gas}}}{\mu\mechanical{m}_a}k_{\mathrm B}\thermal{T},
$$

where $\mu$ is the mean molecular weight in units of the atomic mass unit $\mechanical{m}_a$. For fully ionized gas of solar abundance, the notes take $\mu=0.615$.

X-ray observations can in principle measure the gas density and temperature profiles. Substituting these profiles into hydrostatic equilibrium yields the enclosed mass $\mechanical{M}(<\mechanical{r})$.

![[Kyle Kabasares - Radiative Transfer - Virgo cluster X-ray image.png|**Fig. 37** ROSAT PSPC X-ray image of the Virgo cluster. The slide credits Böhringer et al. (1994), Nature 368, p. 828.]]
![[Kyle Kabasares - Radiative Transfer - Two-keV bremsstrahlung spectrum.png|**Fig. 38** A thermal bremsstrahlung spectrum with a knee at an energy of order $k_{\mathrm B}T=2\,\mathrm{keV}$ and an exponential falloff at higher energy. The slide cites Niel Brandt's Astronomy 485 course.]]

### PDF page 73

#### Thermal spectra and cluster X-ray observations

Thermal bremsstrahlung and blackbody radiation can both have the Planck function as the source function. Their observed spectra differ because the emerging intensity also depends on optical depth.

![[Kyle Kabasares - Radiative Transfer - Bremsstrahlung and blackbody spectra.png|**Fig. 39** A thermal bremsstrahlung spectrum and a blackbody spectrum at the same temperature scale. The slide cites Niel Brandt's Astronomy 485 course.]]
![[Kyle Kabasares - Radiative Transfer - Spectrum of a solar-abundance plasma.png|**Fig. 40** Emission lines on the continuum of a solar-abundance plasma at $k_{\mathrm B}T=0.4\,\mathrm{keV}$, or about $4.6\times10^6\,\mathrm{K}$. The handwritten annotation notes a density much lower than that of the solar corona. The slide cites Niel Brandt's Astronomy 485 course.]]
![[Kyle Kabasares - Radiative Transfer - Chandra spectrum of NGC 6482.png|**Fig. 41** Chandra spectrum of NGC 6482 at projected radii of 6–10 kpc, with the particle background labeled. Photoelectric absorption and the detector bandpass cutoff suppress the low-energy counts.]]

### PDF page 74

![[Kyle Kabasares - Radiative Transfer - Suzaku spectrum of NGC 6482.png|**Fig. 42** Suzaku spectrum of NGC 6482 at projected radii of 25–75 kpc. The handwritten annotation notes Suzaku's lower spatial resolution.]]
![[Kyle Kabasares - Radiative Transfer - Chandra and Suzaku radial profiles.png|**Fig. 43** NGC 6482 radial X-ray surface brightness and temperature profiles from Chandra and Suzaku. Both panels mark $r_{2500}$.]]
![[Kyle Kabasares - Radiative Transfer - NGC 6482 enclosed mass components.png|**Fig. 44** Enclosed mass in the fossil group NGC 6482 in the fiducial model. The total includes an NFW dark matter halo, stars with a constant K-band mass-to-light ratio, and gas.]]

### PDF page 75

![[Kyle Kabasares - Radiative Transfer - RXJ 1159+5531 radial profiles.png|**Fig. 45** Radial X-ray profiles of the fossil cluster RXJ 1159+5531. The right panel shows the gas temperature in keV.]]
![[Kyle Kabasares - Radiative Transfer - Chandra images of Perseus.png|**Fig. 46** Cavities and ripples in Chandra images of Perseus illustrate active galactic nucleus feedback. The slide asks how gas motions affect the hydrostatic equilibrium assumption. The notes describe Perseus as the brightest cluster in the X-ray sky.]]
![[Kyle Kabasares - Radiative Transfer - Hitomi observations of Perseus.png|**Fig. 47** Hitomi observing fields superimposed on an image of Perseus. The scale bar is one arcminute, or 21 kpc. The slide cites the Hitomi Collaboration (2018), PASJ 70, 9.]]

### PDF page 76

![[Kyle Kabasares - Radiative Transfer - Hitomi microcalorimeter spectra.png|**Fig. 48** High-resolution Fe He-alpha spectra from Hitomi illustrate how Doppler widths and shifts can be measured.]]
![[Kyle Kabasares - Radiative Transfer - Perseus gas velocity and dispersion.png|**Fig. 49** Maps of bulk velocity and velocity dispersion in Perseus. The slide estimates nonthermal pressure support below 10 percent.]]

The slide estimates the ratio of gas kinetic energy to thermal energy from the velocity dispersion $\mechanical{\sigma}_v$ and bulk speed $\mechanical{v}_{\mathrm{bulk}}$.

$$
\frac{\energy{\epsilon}_{\mathrm{kin}}}{\energy{\epsilon}_{\mathrm{therm}}}
=\frac{\mu\mechanical{m}_a(3\mechanical{\sigma}_v^2+\mechanical{v}_{\mathrm{bulk}}^2)}
{3k_{\mathrm B}\thermal{T}}
\sim0.02\text{–}0.07.
$$

The notes remark on the loss of the satellites and its impact on graduate students. Gravitating mass and dark matter profiles inferred with Chandra and XMM generally agree with $\Lambda\mathrm{CDM}$ predictions, approximately following an NFW profile, with questions remaining at small radii. The notes identify the accuracy of the hydrostatic equilibrium approximation as a limitation and begin discussing turbulent line broadening and Doppler shifts.

### PDF page 77

The small turbulent line widths and Doppler shifts in Perseus suggest $\mechanical{P}_{\mathrm{nontherm}}\simeq0.04\,\mechanical{P}_{\mathrm{therm}}$. The notes cite the Hitomi Collaboration, *Nature* 535 (2016).

#### Makeup lecture, May 13, 2019

**Thermal bremsstrahlung absorption.** In free–free absorption an ion and free electron interact with an incident photon and emerge as an ion and free electron with the photon energy absorbed.

$$
\mathrm{ion}+e^-+\gamma\longrightarrow e^-+\mathrm{ion}
$$

See Rybicki and Lightman, sections 5.3, 1.4, and 1.5. For plane-parallel transfer with absorption and emission, use $d\energy{\tau}_{\signal{\nu}}=\energy{\alpha}_{\signal{\nu}}\,d\mechanical{s}$ and divide the transfer equation by $\energy{\alpha}_{\signal{\nu}}$. Define the **source function** as the ratio of emission to absorption coefficients.

$$
\energy{S}_{\signal{\nu}}(\energy{\tau}_{\signal{\nu}})
=\frac{\energy{j}_{\signal{\nu}}}{\energy{\alpha}_{\signal{\nu}}},
\qquad
\frac{d\energy{I}_{\signal{\nu}}}{d\energy{\tau}_{\signal{\nu}}}
=-\energy{I}_{\signal{\nu}}(\energy{\tau}_{\signal{\nu}})
+\energy{S}_{\signal{\nu}}(\energy{\tau}_{\signal{\nu}}).
$$

At a point where $\energy{I}_{\signal{\nu}}>\energy{S}_{\signal{\nu}}$, the intensity decreases locally with increasing path length or optical depth.

### PDF page 78

If $\energy{I}_{\signal{\nu}}<\energy{S}_{\signal{\nu}}$ at a point, then $d\energy{I}_{\signal{\nu}}/d\mechanical{s}>0$ there. The intensity increases locally as path length or optical depth increases.

For a constant source function the direct solution is

$$
\energy{I}_{\signal{\nu}}(\energy{\tau}_{\signal{\nu}})
=\energy{I}_{\signal{\nu}}(0)e^{-\energy{\tau}_{\signal{\nu}}}
+\energy{S}_{\signal{\nu}}\left(1-e^{-\energy{\tau}_{\signal{\nu}}}\right).
$$

It approaches $\energy{S}_{\signal{\nu}}$ as $\energy{\tau}_{\signal{\nu}}\to\infty$.

![[Kyle Kabasares - Radiative Transfer - Free–free interaction schematic.png|**Fig. 50** A free electron passes an ion along the trajectory used in the impulse approximation.]]
![[Kyle Kabasares - Radiative Transfer - Free–free high-frequency falloff.png|**Fig. 51** The thermal free–free spectrum turns down as the factor $\exp[-h\nu/(k_{\mathrm B}T)]$ suppresses high-frequency emission.]]

### PDF page 79

The thermally averaged free–free emissivity has the scaling $\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}\propto\mechanical{n}^2\thermal{T}^{-1/2}e^{-h\signal{\nu}/(k_{\mathrm B}\thermal{T})}$ for a fixed plasma composition.

#### Blackbody radiation and thermal equilibrium

Blackbody radiation is radiation in thermal equilibrium. To show that its specific intensity depends only on frequency and temperature, consider a container of arbitrary shape whose walls are held at temperature $\thermal{T}$. Let the walls and enclosed radiation reach equilibrium. Open a hole small enough to measure the radiation without appreciably disturbing equilibrium. A filter transmits only the frequency of interest.

![[Kyle Kabasares - Radiative Transfer - Blackbody cavity with frequency filter.png|**Fig. 52** A small opening in the cavity allows the specific intensity at frequency $\nu$ to be measured through a filter.]]

Suppose the measured specific intensity through the opening is $\energy{I}_{\signal{\nu}}$.

### PDF page 80

Take a second cavity of arbitrary shape, also in thermal equilibrium with its walls, initially at the same temperature $\thermal{T}'=\thermal{T}$. Join the two small openings through the frequency filter. The openings restrict the transfer enough that the changes are quasistatic and the radiation inside each cavity stays in equilibrium with its walls. Let the intensity passing from the second cavity be $\energy{I}_{\signal{\nu}}'$.

![[Kyle Kabasares - Radiative Transfer - Two cavities at the same temperature.png|**Fig. 53** A frequency filter connects two differently shaped blackbody cavities initially at the same temperature.]]

If $\energy{I}_{\signal{\nu}}'>\energy{I}_{\signal{\nu}}$, energy would flow from the second cavity into the first. The first would warm and the second would cool, so continued transfer in that direction would send heat from a cooler body to a hotter one. For the quasistatic changes within each cavity, $d\thermal{S}=\delta\energy{Q}/\thermal{T}$, giving

$$
d\thermal{S}_{\mathrm{tot}}
=d\thermal{S}+d\thermal{S}'
=\frac{\delta\energy{Q}}{\thermal{T}}
+\frac{\delta\energy{Q}'}{\thermal{T}'}.
$$

### PDF page 81

Energy conservation for the isolated pair gives $\delta\energy{Q}'=-\delta\energy{Q}$. If the warmer cavity at temperature $\thermal{T}$ received heat from the cooler one at $\thermal{T}'$, its heat gain $\delta\energy{Q}>0$ would give

$$
d\thermal{S}_{\mathrm{tot}}
=\delta\energy{Q}\left(\frac{1}{\thermal{T}}-\frac{1}{\thermal{T}'}\right)<0.
$$

That violates the second law of thermodynamics. Exchanging the cavity labels rules out the reverse intensity inequality at equal temperatures. Thus $\energy{I}_{\signal{\nu}}'=\energy{I}_{\signal{\nu}}$. The equilibrium blackbody specific intensity is isotropic and is a universal function of temperature and frequency, $\energy{B}_{\signal{\nu}}(\thermal{T})$.

Now consider the first cavity again, with the walls and radiation in equilibrium at temperature $\thermal{T}$. Put a lump of material into the cavity. Assume that its emitted radiation depends on its temperature and internal properties.

![[Kyle Kabasares - Radiative Transfer - Material in a blackbody cavity.png|**Fig. 54** A lump of material at temperature $T$ sits in the path from the cavity to the opening and frequency filter.]]

### PDF page 82

#### Kirchhoff's law for thermal radiation

![[Kyle Kabasares - Radiative Transfer - Blackbody radiation incident on a thermal source.png|**Fig. 55** Blackbody radiation crosses material with source function $S_\nu$. The diagram asks for the emerging specific intensity.]]

A piece of material in thermal equilibrium at the cavity temperature leaves the blackbody spectrum unchanged. Since $\energy{I}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}(\thermal{T})$ throughout the cavity, the transfer equation requires

$$
0=\frac{d\energy{I}_{\signal{\nu}}}{d\energy{\tau}_{\signal{\nu}}}
=-\energy{B}_{\signal{\nu}}(\thermal{T})+\energy{S}_{\signal{\nu}}(\energy{\tau}_{\signal{\nu}}).
$$

**Kirchhoff's law** for thermal radiation gives

$$
\energy{S}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}(\thermal{T}),
\qquad
\energy{j}_{\signal{\nu}}=\energy{\alpha}_{\signal{\nu}}\energy{B}_{\signal{\nu}}(\thermal{T}).
$$

The transfer equation for a thermal source becomes $d\energy{I}_{\signal{\nu}}/d\energy{\tau}_{\signal{\nu}}=-\energy{I}_{\signal{\nu}}+\energy{B}_{\signal{\nu}}(\thermal{T})$. For an equilibrium blackbody field $\energy{I}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}$ everywhere.

### PDF page 83

Thermal radiation has $\energy{S}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}$. In the optically thick, isothermal limit the emergent intensity approaches $\energy{B}_{\signal{\nu}}$. At finite optical depth it generally depends on the incident intensity as well as the source function.

For thermal bremsstrahlung, Kirchhoff's law gives $\energy{j}_{\signal{\nu}}^{\mathrm{ff}}=\energy{\alpha}_{\signal{\nu}}^{\mathrm{ff}}\energy{B}_{\signal{\nu}}(\thermal{T})$. Use $\energy{j}_{\signal{\nu}}^{\mathrm{ff}}=\energy{\epsilon}_{\signal{\nu}}^{\mathrm{ff}}/(4\pi)$ and the Planck function

$$
\energy{B}_{\signal{\nu}}(\thermal{T})
=\frac{2h\signal{\nu}^3}{c^2}
\frac{1}{e^{h\signal{\nu}/(k_{\mathrm B}\thermal{T})}-1}.
$$

Then the free–free absorption coefficient in Gaussian CGS is

$$
\energy{\alpha}_{\signal{\nu}}^{\mathrm{ff}}
=\frac{4\electric{e}^6}{3\mechanical{m}_ehc}
\left(\frac{2\pi}{3k_{\mathrm B}\mechanical{m}_e}\right)^{1/2}
\thermal{T}^{-1/2}Z^2\mechanical{n}_e\mechanical{n}_i\signal{\nu}^{-3}
\left[1-e^{-h\signal{\nu}/(k_{\mathrm B}\thermal{T})}\right]
\bar{g}_{\mathrm{ff}}.
$$

At radio frequencies with $h\signal{\nu}\ll k_{\mathrm B}\thermal{T}$, the square bracket is approximately $h\signal{\nu}/(k_{\mathrm B}\thermal{T})$. Neglecting the weak variation of the Gaunt factor, $\energy{\alpha}_{\signal{\nu}}^{\mathrm{ff}}\propto\mechanical{n}_e\mechanical{n}_i\signal{\nu}^{-2}\thermal{T}^{-3/2}$ for fixed $Z$. The Rayleigh–Jeans source function is $\energy{B}_{\signal{\nu}}\simeq2\signal{\nu}^2k_{\mathrm B}\thermal{T}/c^2$. The source writes $\signal{\nu}^3$ on this line, while its earlier Rayleigh–Jeans derivation gives $\signal{\nu}^2$. The example takes $\energy{I}_{\signal{\nu}}(0)=0$ and $\energy{S}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}$.

### PDF page 84

#### Radio spectrum of a homogeneous thermal plasma

With no incident intensity and a constant thermal source function,

$$
\energy{I}_{\signal{\nu}}(\energy{\tau}_{\signal{\nu}})
=\energy{B}_{\signal{\nu}}(\thermal{T})
\left(1-e^{-\energy{\tau}_{\signal{\nu}}}\right).
$$

**Optically thin.** For $\energy{\tau}_{\signal{\nu}}\ll1$, $\energy{I}_{\signal{\nu}}\simeq\energy{B}_{\signal{\nu}}\energy{\tau}_{\signal{\nu}}$, with $\energy{\tau}_{\signal{\nu}}\simeq\energy{\alpha}_{\signal{\nu}}^{\mathrm{ff}}\mechanical{L}$ in a uniform medium of length $\mechanical{L}$. Multiplying the radio-frequency opacity by the Rayleigh–Jeans function gives

$$
\energy{I}_{\signal{\nu}}\propto
\frac{\mechanical{n}_e\mechanical{n}_i}{\signal{\nu}^2\thermal{T}^{3/2}}
(\signal{\nu}^2\thermal{T})\mechanical{L}
=\frac{\mechanical{n}_e\mechanical{n}_i\mechanical{L}}{\sqrt{\thermal{T}}}.
$$

The source writes $\thermal{T}^{1/2}$ in the intermediate denominator. Its final scaling follows from the $\thermal{T}^{3/2}$ opacity denominator on the preceding page.

**Optically thick.** For $\energy{\tau}_{\signal{\nu}}\gg1$, the intensity approaches the Rayleigh–Jeans spectrum, $\energy{I}_{\signal{\nu}}\simeq\energy{B}_{\signal{\nu}}=2k_{\mathrm B}\thermal{T}\signal{\nu}^2/c^2$.

![[Kyle Kabasares - Radiative Transfer - Radio free–free turnover.png|**Fig. 56** The radio spectrum rises as $\nu^2$ in the optically thick, self-absorbed region and is approximately flat in the optically thin region.]]

Measurements on both sides of the radio turnover, together with an estimate of the source size, can be used to infer the total gas mass.

### PDF page 85

Use the optically thick spectrum to determine $\thermal{T}$, typically of order $\quantity{10^4}{K}$ for planetary nebulae. The optically thin spectrum then gives the density when $\thermal{T}$ and the source length $\mechanical{L}$ are known. The density and source size yield the total gas mass.

#### Lecture, May 14, 2019

Problem set 4 was due May 23. Monday makeup lectures were suspended for the time being.

#### Synchrotron radiation

See Rybicki and Lightman, chapter 6. Radio synchrotron sources include diffuse Galactic emission, supernova remnants, radio galaxies, and radio halos and relics in clusters. The Crab Nebula and its pulsar are examples associated with optical continuum emission.

Consider a particle of velocity $\vec{\mechanical{v}}$ moving in a uniform magnetic field $\vec{\magnetic{B}}$.

![[Kyle Kabasares - Radiative Transfer - Electron in a uniform magnetic field.png|**Fig. 57** An electron moves at an angle to the uniform magnetic field.]]

For nonrelativistic cyclotron motion, $|\vec{\mechanical{v}}|\ll c$. The magnetic force on an electron in Gaussian CGS is

$$
\vec{\mechanical{F}}=-\electric{e}\frac{\vec{\mechanical{v}}}{c}\times\vec{\magnetic{B}}.
$$

### PDF page 86

Decompose the velocity as $\vec{\mechanical{v}}=\vec{\mechanical{v}}_\perp+\vec{\mechanical{v}}_\parallel$ relative to $\vec{\magnetic{B}}$. The parallel term contributes zero magnetic force, since $\vec{\mechanical{v}}_\parallel\times\vec{\magnetic{B}}=0$. The parallel velocity is constant.

The perpendicular force $\vec{\mechanical{F}}_\perp=-(\electric{e}/c)\vec{\mechanical{v}}_\perp\times\vec{\magnetic{B}}$ is perpendicular to both $\vec{\mechanical{v}}_\perp$ and $\vec{\magnetic{B}}$. Its magnitude is constant, so the transverse motion is circular. With $\mechanical{v}_\perp=|\vec{\mechanical{v}}_\perp|$ and $\magnetic{B}=|\vec{\magnetic{B}}|$,

$$
|\vec{\mechanical{F}}_\perp|
=\frac{\mechanical{m}_e\mechanical{v}_\perp^2}{\mechanical{r}}
=\frac{\electric{e}\mechanical{v}_\perp\magnetic{B}}{c}.
$$

The sign of the electron charge fixes the sense of rotation. The angular cyclotron frequency and ordinary cyclotron frequency are

$$
\signal{\omega}_B=\frac{\mechanical{v}_\perp}{\mechanical{r}}
=\frac{\electric{e}\magnetic{B}}{\mechanical{m}_e c},
\qquad
\signal{\nu}_B=\frac{\signal{\omega}_B}{2\pi}.
$$

### PDF page 87

#### Properties of nonrelativistic cyclotron radiation

The charged particle follows a helix, rotating about the field at angular frequency $\signal{\omega}_B$ while moving along it at constant velocity $\mechanical{v}_\parallel$. The circular motion accelerates the particle, which radiates at the cyclotron frequency in this limit.

The polarization depends on the viewing angle.

- For a magnetic field perpendicular to the line of sight, the projected acceleration oscillates along a line on the sky. The observed radiation is linearly polarized, with its electric field oscillating at $\signal{\omega}_B$.
- For a field parallel to the line of sight, the orbital acceleration rotates in the plane of the sky. The radiation is circularly polarized.
- Intermediate viewing angles give elliptical polarization.

Relativistic motion changes these results. As a historical example, the notes show a cyclotron feature near $\quantity{34}{keV}$ in Hercules X-1 and quote a magnetic field of order $\quantity{3\times10^8}{T}$, or $\quantity{3\times10^{12}}{G}$.

![[Kyle Kabasares - Radiative Transfer - Hercules X-1 cyclotron feature.png|**Fig. 58** A sketch of the Hercules X-1 spectrum shows a dip near 34 keV.]]

### PDF page 88

#### Relativistic motion in a magnetic field

For speeds comparable to $c$, define the four-acceleration $A=dU/d\tau$, where $U=(\gamma c,\gamma\vec{\mechanical{v}})$. Using $dt/d\tau=\gamma$ gives

$$
A=\left(\gamma c\frac{d\gamma}{dt},\ \gamma\frac{d(\gamma\vec{\mechanical{v}})}{dt}\right).
$$

For a particle of charge $\electric{q}$ and mass $\mechanical{m}$, the tensor equation of motion is

$$
A^\mu=\frac{\electric{q}}{\mechanical{m}c}F^\mu{}_\nu U^\nu,
$$

where $F^\mu{}_\nu$ is the electromagnetic field tensor (Rybicki and Lightman, section 4.7). For an electron with $\vec{\electric{E}}=0$ the spatial force law reduces to

$$
\frac{d(\gamma\mechanical{m}_e\vec{\mechanical{v}})}{dt}
=-\electric{e}\frac{\vec{\mechanical{v}}}{c}\times\vec{\magnetic{B}}.
$$

The product rule and the derivative of the Lorentz factor give

$$
\begin{aligned}
\frac{d\gamma}{dt}&=\gamma^3\frac{\vec{\mechanical{v}}\cdot\vec{\mechanical{a}}}{c^2},\\
\frac{d(\gamma\mechanical{m}_e\vec{\mechanical{v}})}{dt}
&=\mechanical{m}_e\gamma^3\vec{\mechanical{v}}
\frac{\vec{\mechanical{v}}\cdot\vec{\mechanical{a}}}{c^2}
+\mechanical{m}_e\gamma\frac{d\vec{\mechanical{v}}}{dt}.
\end{aligned}
$$

### PDF page 89

With only a magnetic field acting, $\vec{\mechanical{a}}\perp\vec{\mechanical{v}}$, so $d\gamma/dt=0$. The Lorentz force reduces to

$$
\gamma\mechanical{m}_e\frac{d\vec{\mechanical{v}}}{dt}
=-\frac{\electric{e}}{c}(\vec{\mechanical{v}}\times\vec{\magnetic{B}}).
$$

The relativistic angular gyration frequency is therefore $\signal{\omega}_B^{\mathrm{rel}}=\signal{\omega}_B/\gamma$, with $\signal{\omega}_B=\electric{e}\magnetic{B}/(\mechanical{m}_e c)$.

#### Total radiated power of a relativistic electron

Apply Larmor's formula in the instantaneous rest frame and express the acceleration through the invariant square of the four-acceleration (Rybicki and Lightman, section 4.8).

$$
\energy{L}=\frac{2\electric{e}^2}{3c^3}(A\cdot A),
\qquad
A=\left(\gamma c\frac{d\gamma}{dt},\ \gamma\frac{d(\gamma\vec{\mechanical{v}})}{dt}\right).
$$

The handwritten power formula on this page appears to use $c^2$. The Larmor formula on PDF page 30 uses $c^3$. In the instantaneous rest frame $\vec{\mechanical{v}}'=0$, $\gamma=1$, and $d\gamma/dt'=0$, so $A'=(0,\vec{\mechanical{a}}')$.

### PDF page 90

The invariant square $A'\cdot A'=A\cdot A$ equates the rest-frame acceleration magnitude to the four-acceleration evaluated in the lab. Using $\dot{\gamma}=d\gamma/dt$,

$$
\begin{aligned}
(\mechanical{a}')^2
&=-\gamma^2c^2\dot{\gamma}^2
+\gamma^2|\vec{\mechanical{v}}\dot{\gamma}+\gamma\vec{\mechanical{a}}|^2,\\
\frac{(\mechanical{a}')^2}{\gamma^2}
&=-c^2\dot{\gamma}^2\left(1-\frac{\mechanical{v}^2}{c^2}\right)
+\gamma^2\mechanical{a}^2+2\gamma\dot{\gamma}\vec{\mechanical{v}}\cdot\vec{\mechanical{a}}.
\end{aligned}
$$

Substitute $1-\mechanical{v}^2/c^2=\gamma^{-2}$ and $\dot{\gamma}=\gamma^3(\vec{\mechanical{v}}\cdot\vec{\mechanical{a}})/c^2$. This gives

$$
(\mechanical{a}')^2
=\gamma^4\mechanical{a}^2
+\gamma^6\frac{(\vec{\mechanical{v}}\cdot\vec{\mechanical{a}})^2}{c^2}.
$$

Substitution into Larmor's formula gives the relativistic radiated power.

$$
\energy{L}=\frac{2\electric{e}^2}{3c^3}\gamma^4
\left(\mechanical{a}^2+\frac{\gamma^2}{c^2}
(\vec{\mechanical{v}}\cdot\vec{\mechanical{a}})^2\right)
$$

The final handwritten line squares a denominator of $c^2$. The immediately preceding acceleration identity gives the denominator $c^2$ shown here.

### PDF page 91

For gyration, $\mechanical{v}_\perp=\signal{\omega}_B^{\mathrm{rel}}\mechanical{r}$ with $\perp$ relative to the field. Now decompose the acceleration as $\vec{\mechanical{a}}=\vec{\mechanical{a}}_\perp+\vec{\mechanical{a}}_\parallel$ with the subscripts relative to the velocity. The bracket in the relativistic power formula becomes

$$
\begin{aligned}
\mechanical{a}^2+\gamma^2\left(\frac{\vec{\mechanical{v}}\cdot\vec{\mechanical{a}}}{c}\right)^2
&=\mechanical{a}_\perp^2+\mechanical{a}_\parallel^2
\left(1+\gamma^2\frac{\mechanical{v}^2}{c^2}\right)\\
&=\mechanical{a}_\perp^2+\gamma^2\mechanical{a}_\parallel^2.
\end{aligned}
$$

Thus $\energy{L}=(2\electric{e}^2/3c^3)\gamma^4(\mechanical{a}_\perp^2+\gamma^2\mechanical{a}_\parallel^2)$. The corresponding rest-frame acceleration components are $\mechanical{a}_\perp'=\gamma^2\mechanical{a}_\perp$ and $\mechanical{a}_\parallel'=\gamma^3\mechanical{a}_\parallel$ (Rybicki and Lightman, problem 4.3).

For gyration in a magnetic field, $\mechanical{a}_\parallel=0$ and $\mechanical{a}_\perp=\signal{\omega}_B^{\mathrm{rel}}\mechanical{v}_\perp$. Hence

$$
\energy{L}=\frac{2\electric{e}^2}{3c^3}\gamma^4(\signal{\omega}_B^{\mathrm{rel}})^2\mechanical{v}_\perp^2
=\frac{2\electric{e}^4}{3\mechanical{m}_e^2c^5}\gamma^2\magnetic{B}^2\mechanical{v}_\perp^2.
$$

The final handwritten denominator has $c^3$. Substituting the stated gyration frequency gives $c^5$ when the perpendicular velocity is expressed as a speed.

### PDF page 92

#### Synchrotron power averaged over pitch angle

The **pitch angle** $\alpha$ is the angle between $\vec{\mechanical{v}}$ and $\vec{\magnetic{B}}$, so $\mechanical{v}_\perp=\mechanical{v}\sin\alpha$.

![[Kyle Kabasares - Radiative Transfer - Synchrotron pitch angle.png|**Fig. 59** The pitch angle is measured from the magnetic field to the particle velocity.]]

For an isotropic distribution of velocity directions at fixed speed,

$$
\langle\mechanical{v}_\perp^2\rangle_{4\pi}
=\frac{1}{4\pi}\int_{4\pi}\mechanical{v}^2\sin^2\alpha\,d\Omega
=\frac{2}{3}\mechanical{v}^2.
$$

Average the radiated power from the preceding page using this mean square speed. Express the result in terms of the magnetic energy density $\energy{U}_B=\magnetic{B}^2/(8\pi)$ and the Thomson cross section $\mechanical{\sigma}_{\mathrm{T}}=(8\pi/3)\electric{e}^4/(\mechanical{m}_e^2c^4)$.

$$
\energy{L}_{\mathrm{sync}}
=\frac{4}{3}\gamma^2\left(\frac{\mechanical{v}}{c}\right)^2
\mechanical{\sigma}_{\mathrm{T}}c\energy{U}_B
$$

This is the total power of one electron averaged over the directions of its velocity relative to the field.

### PDF page 93

#### Synchrotron and inverse Compton power

For the same electron in the isotropic averages and the Thomson regime,

$$
\frac{\energy{L}_{\mathrm{sync}}}{\energy{L}_{\mathrm{IC}}}
=\frac{\energy{U}_B}{\energy{U}_{\mathrm{photon}}}.
$$

Both processes involve radiation from accelerated charges, so Larmor's formula gives $\energy{L}\propto\mechanical{a}^2$. For inverse Compton scattering the incident radiation gives $\mechanical{a}_{\mathrm{IC}}^2\propto|\vec{\electric{E}}|^2\propto\energy{U}_{\mathrm{photon}}$. For synchrotron radiation, $\mechanical{a}_{\mathrm{sync}}^2\propto|\vec{\magnetic{B}}|^2\propto\energy{U}_B$.

#### Lecture, May 16, 2019

The Monday makeup lecture was canceled. The lecture reviews $\energy{L}_{\mathrm{sync}}=(4/3)\gamma^2(\mechanical{v}/c)^2\mechanical{\sigma}_{\mathrm{T}}c\energy{U}_B$ for a single electron of speed $\mechanical{v}$ in a constant field, averaged over an isotropic distribution of velocity directions.

#### Relativistic beaming

The qualitative discussion of the synchrotron spectrum begins with relativistic beaming (Rybicki and Lightman, section 6.2 and p. 110). It uses the previously derived Lorentz transformation for the angle of a velocity vector.

### PDF page 94

![[Kyle Kabasares - Radiative Transfer - Velocity angle and boost axis.png|**Fig. 60** The laboratory velocity makes an angle $\theta$ with the boost direction along $x$.]]

For an object with lab-frame speed $\mechanical{u}$, the velocity transformation gives $\tan\theta'=\mechanical{u}\sin\theta/[\gamma(\mechanical{u}\cos\theta-\mechanical{v})]$. The handwritten numerator on this page has a prime on the angle. The velocity transformation on PDF page 44 uses the unprimed angle.

For light, $\mechanical{u}=c$. Transforming back to the laboratory frame yields the **aberration of light** relations

$$
\tan\theta=\frac{\sin\theta'}{\gamma(\cos\theta'+\mechanical{v}/c)},
\qquad
\sin\theta=\frac{\sin\theta'}{\gamma(1+(\mechanical{v}/c)\cos\theta')}.
$$

In the electric dipole approximation, the angular power pattern is $d\energy{L}/d\Omega\propto\mechanical{a}^2\sin^2\phi$, where $\phi$ is measured from the acceleration direction (Rybicki and Lightman, equation 3.23a).

### PDF page 95

![[Kyle Kabasares - Radiative Transfer - Electric dipole radiation pattern.png|**Fig. 61** Nonrelativistic dipole radiation forms a toroidal pattern symmetric about the dipole axis, with angular dependence $\sin^2\theta$.]]

For $\mechanical{v}\simeq c$ and $\gamma\gg1$, the aberration relation becomes

$$
\sin\theta\simeq\frac{\sin\theta'}{\gamma(1+\cos\theta')}.
$$

For rest-frame emission near $\theta'=\pi/2$, this gives $\theta\simeq1/\gamma\ll1$. Even radiation emitted perpendicular to the lab velocity direction in the electron rest frame appears at a small angle to that velocity in the lab. Almost all the radiated energy is concentrated in a forward cone of characteristic half-angle $1/\gamma$.

![[Kyle Kabasares - Radiative Transfer - Relativistic forward cone.png|**Fig. 62** The radiation is beamed along the electron's motion within a cone of characteristic half-angle $\theta\simeq1/\gamma$.]]

### PDF page 96

![[Kyle Kabasares - Radiative Transfer - Relativistic angular radiation pattern.png|**Fig. 63** Rybicki and Lightman's diagrams compare angular radiation patterns in two frames for acceleration perpendicular to the velocity. The strongly beamed pattern is schematic.]]

Most radiation is beamed into the forward cone with characteristic angular radius $\theta\sim1/\gamma$.

#### Synchrotron spectrum of a single electron

Consider an electron in a circular orbit in a constant magnetic field. An observer receives a pulse each time the forward emission cone sweeps across the line of sight.

![[Kyle Kabasares - Radiative Transfer - Synchrotron beam sweeping across an observer.png|**Fig. 64** The direction of the beam follows the instantaneous velocity. The observer receives emission during the short interval in which the cone points toward them.]]

The relativistic gyrofrequency determines the time between successive pulses. For this circular orbit, the separation is $\Delta t=2\pi/\signal{\omega}_B^{\mathrm{rel}}$. The discussion of its spectral consequence continues on the next page.

### PDF page 97

The pulse repetition frequency is $1/\Delta t=\signal{\omega}_B^{\mathrm{rel}}/(2\pi)$.

![[Kyle Kabasares - Radiative Transfer - Synchrotron emission cones along a trajectory.png|**Fig. 65** Emission cones at successive points of an accelerated particle's trajectory, from the Rybicki and Lightman illustration reproduced on the slide.]]

Each pulse has a finite duration. The fraction of the orbit traversed while the beam points toward the observer is of order $\theta/(2\pi)$. The narrow pulses give the spectrum power at frequencies above the repetition frequency.

![[Kyle Kabasares - Radiative Transfer - Pulse duration from the beam opening angle.png|**Fig. 66** The observer sees the electron only while its instantaneous emission cone includes the line of sight.]]

For a more precise estimate of the observed duration, account for the change in light-travel time while the electron approaches the observer.

![[Kyle Kabasares - Radiative Transfer - Light travel time across the emitting arc.png|**Fig. 67** The electron is visible between points A and B, separated by a chord of length $L$. The observer is at distance $D\gg L$.]]

### PDF page 98

For a pitch angle of $\pi/2$, the speed is $\mechanical{v}=\mechanical{v}_\perp$ and $\signal{\omega}_B^{\mathrm{rel}}=\mechanical{v}_\perp/\mechanical{r}_g$. Set the emission time at A to zero, so its radiation arrives at $t_A=\mechanical{D}/c$. The electron takes about $\mechanical{L}/\mechanical{v}$ to reach B. The radiation from B travels the remaining distance $\mechanical{D}-\mechanical{L}$, so

$$
t_B\simeq\frac{\mechanical{L}}{\mechanical{v}}+\frac{\mechanical{D}-\mechanical{L}}{c}.
$$

The observed pulse duration is therefore

$$
\Delta t=t_B-t_A\simeq\frac{\mechanical{L}}{\mechanical{v}}
\left(1-\frac{\mechanical{v}}{c}\right).
$$

This is much shorter than the travel time $\mechanical{L}/\mechanical{v}$ when $\mechanical{v}\simeq c$. With $\theta\simeq1/\gamma$,

$$
\mechanical{L}=2\mechanical{r}_g\sin(\theta/2)\simeq\mechanical{r}_g\theta
\simeq\frac{\mechanical{r}_g}{\gamma},
\qquad
\frac{\mechanical{L}}{\mechanical{v}}\simeq\frac{1}{\gamma\signal{\omega}_B^{\mathrm{rel}}}
=\frac{1}{\signal{\omega}_B}.
$$

Also, $1-\beta=(1-\beta^2)/(1+\beta)=1/[\gamma^2(1+\beta)]\simeq1/(2\gamma^2)$.

### PDF page 99

For $\sin\alpha=1$, the preceding estimates give $\Delta t_{\mathrm{pulse}}\simeq1/(2\gamma^2\signal{\omega}_B)$. Restoring the pitch-angle dependence gives

$$
\Delta t_{\mathrm{pulse}}\simeq
\frac{1}{2\gamma^2\signal{\omega}_B\sin\alpha}
=\frac{1}{2\gamma^3\signal{\omega}_B^{\mathrm{rel}}\sin\alpha}.
$$

The handwritten notation for the cyclotron and relativistic gyration rates varies on this page. The expressions here use the relation $\signal{\omega}_B^{\mathrm{rel}}=\signal{\omega}_B/\gamma$.

The classical time–bandwidth relation is $\Delta\signal{\omega}\,\Delta t\gtrsim1$ (Rybicki and Lightman, equation 2.26). Observing only a fraction of a wave cycle leaves the frequency poorly determined.

![[Kyle Kabasares - Radiative Transfer - Wave sampled over a short interval.png|**Fig. 68** The observation interval $\Delta t$ spans only a small fraction of the electric field oscillation.]]

For the synchrotron pulse,

$$
\Delta\signal{\omega}_{\mathrm{pulse}}\gtrsim\frac{1}{\Delta t_{\mathrm{pulse}}}
\simeq2\gamma^3\signal{\omega}_B^{\mathrm{rel}}\sin\alpha.
$$

### PDF page 100

Synchrotron emission from one electron spans harmonics of the relativistic gyration frequency up to order $\gamma^3\signal{\omega}_B^{\mathrm{rel}}$, above which it falls rapidly. For example, if the relativistic gyration frequency is of order $\quantity{10^{10}}{Hz}$ and $\gamma\sim10^3$ to $10^4$, the upper scale is of order $\quantity{10^{19}}{Hz}$ to $\quantity{10^{22}}{Hz}$. The radiation can thus cover a wide part of the electromagnetic spectrum.

The **critical angular frequency** is

$$
\signal{\omega}_c
=\frac{3}{2}\gamma^2\frac{\electric{e}\magnetic{B}}{\mechanical{m}_ec}\sin\alpha
=\frac{3}{2}\gamma^3\signal{\omega}_B^{\mathrm{rel}}\sin\alpha.
$$

The handwritten definition also relates $\signal{\omega}_c$ to the estimated pulse bandwidth. The bandwidth argument fixes the scale, and the numerical prefactor comes from the detailed spectrum. Emission falls off rapidly above $\signal{\omega}_c$, while the continuum approximation describes frequencies well above the fundamental and below the cutoff.

![[Kyle Kabasares - Radiative Transfer - Single-electron synchrotron spectrum.png|**Fig. 69** The single-electron spectrum rises as $(\omega/\omega_c)^{1/3}$ at low frequencies and has a high-frequency tail proportional to $(\omega/\omega_c)^{1/2}e^{-\omega/\omega_c}$.]]

### PDF page 101

#### Synchrotron emission from an electron population

The spectrum of a single particle peaks near the critical frequency. The notes mention that high-energy cosmic-ray protons and electrons incident on Earth have power-law particle spectra. They then motivate the inverse problem for synchrotron radiation: given a power-law radiation spectrum $P(\signal{\omega})\propto\signal{\omega}^{-s}$, what electron energy distribution could produce it? Rybicki and Lightman, section 6.3, gives another derivation.

Let $\energy{\epsilon}(\signal{\omega})=\int\energy{j}(\signal{\omega})\,d\Omega$ be the synchrotron power per unit volume and angular-frequency interval. The notes write

$$
\energy{\epsilon}(\signal{\omega})\,d\signal{\omega}
=\left(-\frac{d\energy{E}}{dt}\right)\mechanical{n}(\energy{E})\,d\energy{E}.
$$

Here $\mechanical{n}(\energy{E})\,d\energy{E}$ counts the electrons per unit volume between energies $\energy{E}$ and $\energy{E}+d\energy{E}$. The factor $-d\energy{E}/dt$ is the single-electron synchrotron luminosity, equal to the rate of loss of electron energy. The frequency–energy correspondence in this approximation is developed on the following page.

### PDF page 102

#### Lecture, May 21, 2019

The lecture repeats $\energy{\epsilon}(\signal{\omega})\,d\signal{\omega}=(-d\energy{E}/dt)\mechanical{n}(\energy{E})\,d\energy{E}$. The factor $\mechanical{n}(\energy{E})\,d\energy{E}$ counts electrons per unit volume in the specified energy interval, and $\energy{L}_{\mathrm{sync}}$ is the power radiated by a single electron of energy $\energy{E}$.

#### Review of homework problem 3

The recession speed is $\mechanical{v}_r=\quantity{6000}{km\cdot s^{-1}}$. Writing $H_0=\quantity{100h}{km\cdot s^{-1}\cdot Mpc^{-1}}$, the Hubble-law distance is

$$
\mechanical{D}=\frac{\mechanical{v}_r}{H_0}=\quantity{60h^{-1}}{Mpc}.
$$

![[Kyle Kabasares - Radiative Transfer - Homework source sketch.png|**Fig. 70** Sketch of the source used in the homework review.]]
![[Kyle Kabasares - Radiative Transfer - Homework X-ray continuum.png|**Fig. 71** The free–free X-ray luminosity scales as $n_en_i$ and turns down at high photon energy through the exponential thermal factor.]]

### PDF page 103

The bolometric free–free volume emissivity is $1.4\times10^{-27}\thermal{T}^{1/2}\mechanical{n}_e\mechanical{n}_i Z^2\bar{g}$ in CGS with temperature in kelvin and densities in $\unit{cm^{-3}}$. The emissivity unit is $\unit{erg\cdot s^{-1}\cdot cm^{-3}}$. Integrating over the volume gives luminosity. The homework results listed are

$$
\begin{aligned}
\mechanical{n}_e&=\quantity{2\times10^{-3}h^{1/2}}{cm^{-3}},\\
\mechanical{M}_{\mathrm{gas}}&=3\times10^{13}h^{-5/2}\mechanical{M}_\odot,\\
\energy{E}_{\mathrm{th}}&=\quantity{1.5\times10^{63}h^{-5/2}}{erg},\\
t_{\mathrm{cool}}&=\quantity{4.7\times10^{10}h^{-1/2}}{yr}.
\end{aligned}
$$

The hydrostatic equation $d\mechanical{P}/d\mechanical{r}=-\mechanical{\rho}_{\mathrm{gas}}G\mechanical{M}(<\mechanical{r})/\mechanical{r}^2$ with the ideal-gas pressure gives

$$
\mechanical{M}_{\mathrm{tot}}(<\mechanical{r})
=-\frac{k_{\mathrm B}\thermal{T}\mechanical{r}}{G\mu\mechanical{m}_a}
\left(\frac{d\ln\mechanical{\rho}_{\mathrm{gas}}}{d\ln\mechanical{r}}
+\frac{d\ln\thermal{T}}{d\ln\mechanical{r}}\right).
$$

The handwritten scaling has ordinary radial derivatives in the bracket and only one power of radius outside. The equivalent expression uses logarithmic radial derivatives as above. At fixed angular radius, $\mechanical{M}_{\mathrm{tot}}\propto h^{-1}$, so the gas fraction $f_{\mathrm{gas}}=\mechanical{M}_{\mathrm{gas}}/\mechanical{M}_{\mathrm{tot}}\simeq f_{\mathrm{baryon}}$ scales as $h^{-3/2}$.

Flux falls as inverse distance squared. Surface brightness is distance-independent in Euclidean geometry and dims cosmologically by $(1+z)^{-4}$ for bolometric radiation.

### PDF page 104

#### Return to the synchrotron lecture

![[Kyle Kabasares - Radiative Transfer - Synchrotron spectrum lecture recap.png|**Fig. 72** The lecture returns to the single-particle spectrum and its low- and high-frequency asymptotes.]]
![[Kyle Kabasares - Radiative Transfer - Circular orbit beaming recap.png|**Fig. 73** The observer samples a small part of the orbit as the beam of angular radius $\theta\sim1/\gamma$ sweeps past.]]

The notes recall $\Delta\signal{\omega}\,\Delta t_{\mathrm{pulse}}\gtrsim1$ and the estimate $\Delta t_{\mathrm{pulse}}\sim1/(\gamma^2\signal{\omega}_B)\sim1/(\gamma^3\signal{\omega}_B^{\mathrm{rel}})$ up to numerical factors for a perpendicular orbit. The last line of the sketch shows these timescales beneath the bandwidth inequality.

### PDF page 105

#### Power-law electron energy distribution

To estimate the origin of a power-law synchrotron spectrum, approximate each electron's emission as concentrated near $\signal{\omega}\simeq\signal{\omega}_c$. At fixed pitch angle, $\signal{\omega}_c=(3/2)\gamma^2\signal{\omega}_B\sin\alpha$, where $\signal{\omega}_B=\electric{e}\magnetic{B}/(\mechanical{m}_ec)$ is independent of electron energy. Thus

$$
\gamma\propto\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{1/2},\qquad
\energy{E}=\gamma\mechanical{m}_ec^2\propto
\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{1/2},\qquad
d\energy{E}\propto\frac{d\signal{\omega}}{\sqrt{\signal{\omega}\magnetic{B}}}.
$$

For $\mechanical{v}\simeq c$, the radiated power $\energy{L}_{\mathrm{sync}}=(4/3)\gamma^2(\mechanical{v}/c)^2\mechanical{\sigma}_{\mathrm{T}}c\energy{U}_B$ scales as $\gamma^2\magnetic{B}^2\propto\signal{\omega}\magnetic{B}$. Assume the electron energy distribution is a power law over $\energy{E}_1\le\energy{E}\le\energy{E}_2$,

$$
\mechanical{n}(\energy{E})\,d\energy{E}=C\energy{E}^{-p}\,d\energy{E}.
$$

### PDF page 106

In the characteristic-frequency approximation, $\energy{E}^{-p}\propto(\signal{\omega}/\magnetic{B})^{-p/2}$. Combining the electron power, the energy distribution, and $d\energy{E}/d\signal{\omega}$ gives

$$
\energy{\epsilon}(\signal{\omega})
\propto(\signal{\omega}\magnetic{B})
\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{-p/2}
(\signal{\omega}\magnetic{B})^{-1/2}
=\signal{\omega}^{-(p-1)/2}\magnetic{B}^{(p+1)/2}.
$$

Here the single-electron luminosity is positive, $\energy{L}_{\mathrm{sync}}=-d\energy{E}/dt$, where $\energy{E}$ denotes the electron's remaining energy. The observed spectral index $s$ in $\energy{\epsilon}(\signal{\omega})\propto\signal{\omega}^{-s}$ therefore gives the electron energy index $p$ through $s=(p-1)/2$.

The emitted spectrum is the superposition of the individual electron spectra. In this approximation, the electron energy distribution determines the shape of the ensemble power law.

![[Kyle Kabasares - Radiative Transfer - Superposition of synchrotron spectra.png|**Fig. 74** Single-particle spectra peak at different photon energies. Their superposition gives the broader power-law spectrum.]]

### PDF page 107

The spectral slope relation also follows from integrating the full single-electron spectrum. The factor of two between the particle and radiation slope scalings arises from the $\gamma^2$ dependence of the characteristic radiation frequency, which comes from the pulse duration.

#### Synchrotron polarization

Synchrotron radiation is highly polarized (Rybicki and Lightman, section 6.5). In the cyclotron case, a field transverse to the line of sight gives linear polarization, while viewing along the field gives circular polarization. The handedness depends on which side of the orbit is viewed.

Relativistic beaming sweeps emission into the forward direction, including photons emitted transverse to the boost in the electron rest frame. For the circular orbit shown, the forward direction is perpendicular to the magnetic field. The oppositely handed circular components can cancel when combined, leaving linear polarization.

![[Kyle Kabasares - Radiative Transfer - Cyclotron and synchrotron polarization.png|**Fig. 75** The slide compares the un-beamed cyclotron pattern and the forward-beamed synchrotron pattern. It credits Melia (2009), Fig. 5.10.]]

### PDF page 108

In the symmetric case described in the notes, photon directions parallel and antiparallel to the field in the electron frame contribute opposite circular polarizations. Equal right- and left-circular components cancel, leaving net linear polarization.

The **degree of polarization** $\Pi$ is the polarized intensity divided by the total intensity. For a power-law electron energy distribution $\mechanical{n}(\energy{E})\propto\energy{E}^{-p}$, the fractional linear polarization for an ordered field is

$$
\Pi=\frac{p+1}{p+7/3}.
$$

See Rybicki and Lightman, problem 6.5a. The example takes $p=2.5$, typical of Galactic cosmic rays in the notes, giving $\Pi\simeq72\%$.

To compare synchrotron and bremsstrahlung in the Galaxy at radio frequencies, use $p=2.5$ to estimate $\energy{\epsilon}(\signal{\omega})\propto\signal{\omega}^{-0.8}$ for synchrotron emission, rounding the spectral index $0.75$.

### PDF page 109

For optically thin thermal bremsstrahlung with $\hbar\signal{\omega}\ll k_{\mathrm B}\thermal{T}$, the spectral emissivity is approximately a constant times $1-\energy{E}_\gamma/(k_{\mathrm B}\thermal{T})$. Synchrotron dominates at low radio frequencies, with the notes giving wavelengths of order $\quantity{50}{cm}$ in the Galaxy. Polarized emission distinguishes the synchrotron component in this comparison.

#### Synchrotron self-absorption

Relativistic electrons moving in a constant magnetic field can absorb synchrotron photons. For $\mechanical{n}(\energy{E})\propto\energy{E}^{-p}$, the absorption coefficient scales as

$$
\energy{\alpha}_{\signal{\nu}}\propto\signal{\nu}^{-(p+4)/2}
$$

(Rybicki and Lightman, equation 6.53). Combining it with $\energy{j}_{\signal{\nu}}\propto\signal{\nu}^{-(p-1)/2}$ gives the source function

$$
\energy{S}_{\signal{\nu}}
=\frac{\energy{j}_{\signal{\nu}}}{\energy{\alpha}_{\signal{\nu}}}
\propto\frac{\signal{\nu}^{-(p-1)/2}}{\signal{\nu}^{-(p+4)/2}}
=\signal{\nu}^{5/2}.
$$

At large optical depth $\energy{I}_{\signal{\nu}}\to\energy{S}_{\signal{\nu}}$. The page ends with a note about discussion of finals.

### PDF page 110

![[Kyle Kabasares - Radiative Transfer - Synchrotron self-absorption turnover.png|**Fig. 76** The spectrum rises as $\nu^{5/2}$ on the optically thick side and falls as $\nu^{-(p-1)/2}$ on the optically thin side.]]

For power-law electron populations, the optically thick slope $5/2$ is independent of the electron index $p$. The optically thin slope is approximately $-0.8$ for the example $p\simeq2.5$. The notes identify this turnover at radio to millimeter wavelengths in active galactic nuclei (AGN).

#### Lecture, May 23, 2019

**Estimating magnetic fields via equipartition.** Consider a population of electrons with a power-law energy distribution, $\mechanical{n}(\energy{E})\propto\energy{E}^{-p}$. The estimate starts with the total energy in the electrons.

### PDF page 111

The total energy in the electron population is

$$
\energy{U}_e=\mechanical{V}\int_{\energy{E}_{\min}}^{\energy{E}_{\max}}
\energy{E}\,\mechanical{n}(\energy{E})\,d\energy{E},
$$

where $\mechanical{V}$ is the occupied volume and the integration limits cover the range over which the power law applies. For a fixed observing band, the characteristic-frequency relation gives $\energy{E}\propto\sqrt{\signal{\omega}/\magnetic{B}}$. Changing integration variables with $d\energy{E}\propto d\signal{\omega}/\sqrt{\signal{\omega}\magnetic{B}}$ gives

$$
\energy{U}_e\propto\mechanical{V}
\int_{\signal{\omega}_{\min}}^{\signal{\omega}_{\max}}
\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{(1-p)/2}
\frac{d\signal{\omega}}{\sqrt{\signal{\omega}\magnetic{B}}}
\propto\mechanical{V}\magnetic{B}^{(p-2)/2}.
$$

The proportionality holds at fixed electron-distribution normalization. The exponent $-p$ is implicit in the handwritten integrand and is needed to obtain its final scaling. From the preceding synchrotron emissivity, $\energy{\epsilon}(\signal{\omega})\propto\signal{\omega}^{-(p-1)/2}\magnetic{B}^{(p+1)/2}$, the luminosity integrated over the observed band is

$$
\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}
=\mechanical{V}\int_{\signal{\omega}_{\min}}^{\signal{\omega}_{\max}}
\energy{\epsilon}(\signal{\omega})\,d\signal{\omega}.
$$

At the same fixed normalization, $\mechanical{V}\propto\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}^{-(p+1)/2}$.

### PDF page 112

Substitute the luminosity relation to eliminate the electron normalization. For fixed observing-band limits,

$$
\energy{U}_e=C\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}^{-3/2},
$$

where $C$ depends on $\signal{\omega}_{\min}$, $\signal{\omega}_{\max}$, $p$, and fundamental constants.

Problem set 5 was due June 4, 2019. The handwritten question says “photons,” while the example and the subsequent notation refer to cosmic-ray protons. The notes give $\energy{U}_p\simeq100\energy{U}_e$ for Galactic cosmic rays and $\energy{U}_p\sim\energy{U}_e$ in the Crab Nebula. Write $\energy{U}_p=k\energy{U}_e$. The notes cite arXiv:1702.07523 and give a range $\energy{U}_p\simeq(8\text{–}125)\energy{U}_e$.

For a field filling the whole volume, the sum of particle and field energies is

$$
\energy{U}_{\mathrm{tot}}=\energy{U}_e+\energy{U}_p+\energy{U}_{B,\mathrm{tot}}
=(1+k)C\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}^{-3/2}
+\frac{\magnetic{B}^2}{8\pi}\mechanical{V}.
$$

The handwritten substitution drops $C$ and groups the field term inside the particle factor. The expression shown follows from the stated sum.

### PDF page 113

![[Kyle Kabasares - Radiative Transfer - Minimum energy magnetic field.png|**Fig. 77** At fixed synchrotron luminosity the particle energy decreases with increasing field, and the magnetic energy increases. Their sum has a minimum at $B_{\mathrm{eq}}$.]]

The equipartition estimate assumes that the source tends toward the field strength that minimizes the total energy. Set the derivative at fixed source volume and synchrotron luminosity to zero.

$$
0=\left.\frac{d\energy{U}_{\mathrm{tot}}}{d\magnetic{B}}\right|_{\magnetic{B}_{\mathrm{eq}}}
=-\frac{3}{2}(1+k)C\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}_{\mathrm{eq}}^{-5/2}
+\frac{\magnetic{B}_{\mathrm{eq}}\mechanical{V}}{4\pi}.
$$

This gives

$$
\magnetic{B}_{\mathrm{eq}}
=\left[\frac{6\pi}{\mechanical{V}}(1+k)C\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\right]^{2/7}.
$$

At that field strength,

$$
\energy{U}_{B,\mathrm{tot}}=\frac{3}{4}(1+k)\energy{U}_e,
\qquad
\energy{U}_{\mathrm{tot}}=\frac{7}{4}(1+k)\energy{U}_e
=\frac{7}{3}\energy{U}_{B,\mathrm{tot}}.
$$

The magnetic field and the particles have nearly equal energies, giving the name **equipartition**.

### PDF page 114

#### Limits and examples of the equipartition estimate

The notes treat equipartition as an assumption and suggest that turbulent plasma motions might tangle the magnetic field and bring the two energies toward equality. They mention simulations in support of this idea. The proton-to-electron energy ratio $k$ and the volume filling factor are uncertain. If the emitting field fills only a fraction $f\le1$, replace $\mechanical{V}$ by $f\mechanical{V}$.

Historical field estimates for clusters with radio halos or relics, labeled 2004 in the notes:

| Cluster | Equipartition | Faraday rotation |
| --- | ---: | ---: |
| Coma | $\quantity{\sim0.5}{\mu G}$ | $\quantity{\sim0.2}{\mu G}$ |
| A366 | $\quantity{\sim2}{\mu G}$ | $\quantity{\sim3\text{–}5}{\mu G}$ |

The Coma values are annotated as smaller than the central field. The notes next introduce Cygnus A, a double-lobed radio source in a galaxy cluster.

### PDF page 115

![[Kyle Kabasares - Radiative Transfer - Cygnus A radio lobes.png|**Fig. 78** The notes sketch the radio galaxy between two radio lobes and label a length of order 100–200 kpc.]]

Radio observations imply an equipartition field of order $\quantity{100}{\mu G}$. Approximating each lobe by a sphere of radius $\mechanical{R}=\quantity{30}{kpc}$ gives a magnetic energy of order

$$
\energy{U}_{B,\mathrm{tot}}=\frac{\magnetic{B}^2}{8\pi}
\frac{4\pi\mechanical{R}^3}{3}\sim\quantity{10^{60}}{erg}.
$$

The notes compare the energy of the lobes with more than $10^9$ supernovae and cite Burbidge (1956) for the energetics of radio galaxies. A margin note mentions B²FH (Burbidge, Burbidge, Fowler, and Hoyle), stellar nucleosynthesis, and the triple-alpha reaction.

#### Formation of spectral lines

The semiclassical treatment starts with transition probabilities and the Einstein $A$ and $B$ coefficients (Rybicki and Lightman, section 1.6). Consider a two-level atom with a lower state $L$ and upper state $U$, with populations $N_\ell$ and $N_u$.

### PDF page 116

#### Spontaneous emission

A downward transition from $u$ to $\ell$ emits one photon with energy $h\signal{\nu}_{u\ell}=\energy{E}_u-\energy{E}_\ell$.

![[Kyle Kabasares - Radiative Transfer - Spontaneous two-level transition.png|**Fig. 79** An electron in the upper state decays to the lower state and emits a photon of energy $h\nu$.]]

The Einstein coefficient $\energy{A}_{u\to\ell}$ is the spontaneous transition probability per unit time. In the two-level case,

$$
\frac{1}{N_u}\frac{dN_u}{dt}=-\energy{A}_{u\to\ell}.
$$

The notes point to the electric-dipole matrix element $|\langle u|\sum_i\vec{\mechanical{r}}_i|\ell\rangle|^2$, with the sum over the electrons. For a general upper level, sum over the accessible lower states, $\energy{A}_u=\sum_{\ell<u}\energy{A}_{u\to\ell}$.

In the optically thin approximation the line luminosity and frequency-integrated volume emissivity are

$$
\frac{d\energy{E}_{\mathrm{rad}}}{dt}
=(\energy{E}_u-\energy{E}_\ell)\energy{A}_{u\to\ell}N_u,
\qquad
\energy{\epsilon}=h\signal{\nu}_{u\ell}\mechanical{n}_u\energy{A}_{u\to\ell}.
$$

Here $\mechanical{n}_u$ is the upper-state number density. The handwritten luminosity line reverses the arrow on $A$, while the population and emissivity equations use the downward transition.

### PDF page 117

#### Lecture, May 28, 2019

The lecture reviews Einstein coefficients for a two-level atom.

![[Kyle Kabasares - Radiative Transfer - Two-level atom lecture recap.png|**Fig. 80** The level populations are $N_u$ and $N_\ell$, and the downward transition emits the energy difference $h\nu$.]]

The spontaneous emission relations are

$$
\frac{1}{N_u}\frac{dN_u}{dt}=-\energy{A}_{u\to\ell},
\qquad
\energy{A}_u=\sum_{\ell<u}\energy{A}_{u\to\ell},
\qquad
\frac{d\energy{E}_{\mathrm{rad}}}{dt}=N_u\energy{A}_{u\to\ell}h\signal{\nu}_{\ell u}.
$$

The last expression gives the emitted line power in the optically thin limit. The downward transition carries an electron from the upper to the lower state. In an external radiation field, photons can induce the upward transition $\ell\to u$.

### PDF page 118

#### Photoabsorption

An incident photon with $h\signal{\nu}=\energy{E}_u-\energy{E}_\ell$ can induce a transition from $\ell$ to $u$. The absorption rate is proportional to the supply of incident photons at the transition energy. The notes assume that the photons act independently.

![[Kyle Kabasares - Radiative Transfer - Photoabsorption in a two-level atom.png|**Fig. 81** An incoming photon excites an electron from the lower energy level to the upper one.]]

In terms of the Einstein absorption coefficient $\energy{B}_{\ell\to u}$ and the mean intensity,

$$
\frac{1}{N_\ell}\frac{dN_\ell}{dt}
=-\energy{B}_{\ell\to u}\energy{J}_{\signal{\nu}},
\qquad
\energy{J}_{\signal{\nu}}=\frac{1}{4\pi}\int\energy{I}_{\signal{\nu}}\,d\Omega.
$$

The coefficient $\energy{B}_{\ell\to u}$ is a property of the transition. The angular average $\energy{J}_{\signal{\nu}}$ measures the radiation field that drives it. Statistical equilibrium relates the Einstein coefficients by equating transition rates into and out of a level.

### PDF page 119

If the only processes were absorption and spontaneous emission, equating their rates would give

$$
N_\ell\energy{B}_{\ell\to u}\energy{J}_{\signal{\nu}}=N_u\energy{A}_{u\to\ell},
\qquad
\frac{\energy{A}_{u\to\ell}}{\energy{B}_{\ell\to u}}
=\frac{N_\ell}{N_u}\energy{J}_{\signal{\nu}}.
$$

Test this tentative equation in thermal equilibrium, where $\energy{J}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}(\thermal{T})$ and $N_\ell/N_u$ is a function of temperature. The right side is temperature dependent, while the Einstein coefficients are intrinsic to the transition. This is why the rate equation needs another term.

#### Stimulated emission

An incident photon can induce a downward transition, producing an additional photon of the same energy as the incident one.

![[Kyle Kabasares - Radiative Transfer - Stimulated two-level transition.png|**Fig. 82** A single incident photon stimulates a downward transition, leaving two outgoing photons with energy $h\nu_{\ell u}=E_u-E_\ell$ each.]]

### PDF page 120

The stimulated emission probability per unit time is $\energy{B}_{u\to\ell}\energy{J}_{\signal{\nu}}$. Its contribution to the upper level is

$$
\left.\frac{1}{N_u}\frac{dN_u}{dt}\right|_{\mathrm{stim}}
=-\energy{B}_{u\to\ell}\energy{J}_{\signal{\nu}}.
$$

In statistical equilibrium, upward photoabsorptions balance spontaneous and stimulated downward transitions.

$$
N_\ell\energy{B}_{\ell\to u}\energy{J}_{\signal{\nu}}
=N_u\energy{A}_{u\to\ell}+N_u\energy{B}_{u\to\ell}\energy{J}_{\signal{\nu}}.
$$

Solving for the mean intensity gives

$$
\energy{J}_{\signal{\nu}}=
\frac{\energy{A}_{u\to\ell}/\energy{B}_{u\to\ell}}
{\dfrac{N_\ell\energy{B}_{\ell\to u}}{N_u\energy{B}_{u\to\ell}}-1}.
$$

This equation follows from statistical equilibrium and therefore also holds in the more restrictive case of thermal equilibrium.

### PDF page 121

#### Einstein relations

In thermal equilibrium the relative populations follow Boltzmann factors. With statistical weights $g_\ell$ and $g_u$ and transition energy $h\signal{\nu}=\energy{E}_u-\energy{E}_\ell$,

$$
\frac{N_\ell}{N_u}
=\frac{g_\ell}{g_u}
e^{-(\energy{E}_\ell-\energy{E}_u)/(k_{\mathrm B}\thermal{T})}
=\frac{g_\ell}{g_u}e^{h\signal{\nu}/(k_{\mathrm B}\thermal{T})}.
$$

The intermediate handwritten substitution carries a minus sign in front of $h\nu$. The sign above follows from the energy difference and is the one used in the rate equation on the same page.

In equilibrium $\energy{J}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}(\thermal{T})$. Compare the Planck law with the statistical equilibrium expression:

$$
\frac{2h\signal{\nu}^3/c^2}{e^{h\signal{\nu}/(k_{\mathrm B}\thermal{T})}-1}
=\frac{\energy{A}_{u\to\ell}/\energy{B}_{u\to\ell}}
{\dfrac{g_\ell\energy{B}_{\ell\to u}}{g_u\energy{B}_{u\to\ell}}\,
e^{h\signal{\nu}/(k_{\mathrm B}\thermal{T})}-1}.
$$

Equality for all temperatures gives the **Einstein relations**.

$$
g_\ell\energy{B}_{\ell\to u}=g_u\energy{B}_{u\to\ell},
\qquad
\energy{A}_{u\to\ell}=\frac{2h\signal{\nu}^3}{c^2}\energy{B}_{u\to\ell}.
$$

The coefficients, statistical weights, and level spacing are properties of the atom or ion and are independent of temperature.

### PDF page 122

The Einstein relations hold even outside thermal equilibrium. A quantum-mechanical derivation uses Fermi's golden rule for the transition from $|\ell\rangle$ to $|u\rangle$,

$$
W_{\ell\to u}=\frac{2\pi}{\hbar}
\left|\langle u|H'|\ell\rangle\right|^2\rho_u(\energy{E}).
$$

Here $H'$ is the time-dependent perturbation of the Hamiltonian and $\rho_u(\energy{E})$ is the density of accessible upper states. The handwritten denominator looks like $h$. The usual golden-rule normalization with $2\pi$ in the numerator uses $\hbar$.

For a Hermitian perturbation the reversed matrix element has the same squared magnitude, $|\langle u|H'|\ell\rangle|^2=|\langle\ell|H'|u\rangle|^2$. The notes identify the resulting ratio of induced transition rates with detailed balance.

$$
\frac{W_{\ell\to u}}{W_{u\to\ell}}
=\frac{\rho_u(\energy{E})}{\rho_\ell(\energy{E})},
\qquad
\frac{\energy{B}_{\ell\to u}}{\energy{B}_{u\to\ell}}=\frac{g_u}{g_\ell}.
$$

### PDF page 123

The direct and inverse induced rates have a ratio proportional to the ratio of the statistical weights of their final states. The common matrix element cancels.

#### Finite line profile

A transition occupies a finite range of energies or frequencies. Represent it with a **line profile** $\phi(\signal{\nu})$ sharply peaked near the line center $\signal{\nu}_0$, normalized by

$$
\int_0^\infty \phi(\signal{\nu})\,d\signal{\nu}=1.
$$

![[Kyle Kabasares - Radiative Transfer - Normalized spectral line profile.png|**Fig. 83** The line profile is concentrated near the line-center frequency $\nu_0$ and has unit integral.]]

The rate equations retain their form if the mean specific intensity is replaced by its profile-weighted average.

$$
\langle\energy{J}\rangle
=\int_0^\infty\energy{J}_{\signal{\nu}}\phi(\signal{\nu})\,d\signal{\nu}
=\frac{1}{4\pi}\int_{4\pi}d\Omega
\int_0^\infty\energy{I}_{\signal{\nu}}\phi(\signal{\nu})\,d\signal{\nu}.
$$

### PDF page 124

#### Line emission and photoabsorption coefficients

The line profile depends on local conditions such as temperature and density. The notes assume isotropic spontaneous emission and use the same line profile for spontaneous emission and absorption, citing Rybicki and Lightman, p. 30.

Use $d\energy{I}_{\signal{\nu}}/d\mechanical{s}=-\energy{\alpha}_{\signal{\nu}}\energy{I}_{\signal{\nu}}+\energy{j}_{\signal{\nu}}$. Spontaneous emission gives

$$
\energy{j}_{\signal{\nu}}=\frac{\energy{\epsilon}_{\signal{\nu}}}{4\pi}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_u\energy{A}_{u\to\ell}\phi(\signal{\nu}),
\qquad
\signal{\nu}_{\ell u}=\frac{\energy{E}_u-\energy{E}_\ell}{h}.
$$

Here $\mechanical{n}_u$ is the number of electrons in the upper state per unit volume. The number of photoabsorptions per unit time is $N_\ell\energy{B}_{\ell\to u}\langle\energy{J}\rangle$. In a particular direction, the absorption term is

$$
\left.\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}\right|_{\mathrm{abs}}
=-\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_\ell
\energy{B}_{\ell\to u}\phi(\signal{\nu})\energy{I}_{\signal{\nu}}
=-\energy{\alpha}_{\signal{\nu}}^{\mathrm{abs}}\energy{I}_{\signal{\nu}}.
$$

### PDF page 125

#### Stimulated emission as negative absorption

The stimulated emission rate is $N_u\energy{B}_{u\to\ell}\langle\energy{J}\rangle$. Its intensity contribution is

$$
\left.\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}\right|_{\mathrm{stim}}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_u
\energy{B}_{u\to\ell}\phi(\signal{\nu})\energy{I}_{\signal{\nu}}.
$$

Because the term is proportional to the radiation field, include it as negative absorption. The total absorption coefficient is

$$
\energy{\alpha}_{\signal{\nu}}
=\energy{\alpha}_{\signal{\nu}}^{\mathrm{photoabs}}
-\energy{\alpha}_{\signal{\nu}}^{\mathrm{stim}}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}\phi(\signal{\nu})
\mechanical{n}_\ell\energy{B}_{\ell\to u}
\left(1-\frac{\mechanical{n}_u\energy{B}_{u\to\ell}}{\mechanical{n}_\ell\energy{B}_{\ell\to u}}\right).
$$

The photoabsorption term alone is called the absorption coefficient uncorrected for stimulated emission. The transfer equation for the two-level atom is

$$
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}
=-\frac{h\signal{\nu}_{\ell u}}{4\pi}\phi(\signal{\nu})
(\mechanical{n}_\ell\energy{B}_{\ell\to u}-\mechanical{n}_u\energy{B}_{u\to\ell})\energy{I}_{\signal{\nu}}
+\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_u\energy{A}_{u\to\ell}\phi(\signal{\nu}).
$$

### PDF page 126

#### Thermal line source function

Dividing spontaneous emissivity by net absorption and using the Einstein relation gives

$$
\energy{S}_{\signal{\nu}}
=\frac{\mechanical{n}_u\energy{A}_{u\to\ell}}
{\mechanical{n}_\ell\energy{B}_{\ell\to u}-\mechanical{n}_u\energy{B}_{u\to\ell}}
=\frac{2h\signal{\nu}_{\ell u}^3/c^2}
{\dfrac{\mechanical{n}_\ell\energy{B}_{\ell\to u}}{\mechanical{n}_u\energy{B}_{u\to\ell}}-1}.
$$

Thermal populations give $\mechanical{n}_\ell/\mechanical{n}_u=(g_\ell/g_u)e^{h\signal{\nu}_{\ell u}/(k_{\mathrm B}\thermal{T})}$. This leads to $\energy{S}_{\signal{\nu}}=\energy{B}_{\signal{\nu}_{\ell u}}(\thermal{T})$, approximating $\signal{\nu}\simeq\signal{\nu}_{\ell u}$ across the line. This is the thermal-radiation condition. The resulting emergent intensity also depends on optical depth.

$$
\energy{\alpha}_{\signal{\nu}}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}
\phi(\signal{\nu})\mechanical{n}_\ell\energy{B}_{\ell\to u}
\left[1-e^{-h\signal{\nu}_{\ell u}/(k_{\mathrm B}\thermal{T})}\right].
$$

The handwritten lower-to-upper population ratio reverses the exponent sign, and the boxed absorption coefficient omits $\mechanical{n}_\ell$. The expressions here follow from the Boltzmann and transfer equations above.

### PDF page 127

The line-transfer expressions describe an isolated bound–bound transition. The Einstein coefficients and the line profile determine the radiative terms for a two-level atom, given the level populations. For more nonoverlapping lines, sum their absorption and emission contributions. Collisions can also cause upward and downward transitions and affect the populations used in the radiative rates.

#### Lecture, May 30, 2019 (marked missed)

The lecture recaps the line-transfer equation with the stimulated-emission correction and spontaneous-emission term.

#### Classical model of an atom

The notes refer to Rybicki and Lightman, section 3.6, and to Jackson. Model a bound electron as oscillating about the nucleus. The resulting electric dipole acts as a damped oscillator driven by an external electromagnetic field.

### PDF page 128

![[Kyle Kabasares - Radiative Transfer - Classical electron oscillator.png|**Fig. 84** The sketch represents the bound electron by an oscillator in an electromagnetic wave.]]

**Case 1. Undriven oscillator (spontaneous emission).** Before including radiation damping, the equation of motion is $\ddot{\vec{\mechanical{r}}}+\signal{\omega}_0^2\vec{\mechanical{r}}=0$. Choosing zero initial phase gives $\vec{\mechanical{r}}=\vec{\mechanical{r}}_0\cos(\signal{\omega}_0t)$.

The accelerating dipole radiates power $\energy{L}=2\electric{e}^2\mechanical{a}^2/(3c^3)$, where $\vec{\mechanical{a}}=\ddot{\vec{\mechanical{r}}}$. This energy loss damps the oscillation. Over a cycle of duration $T_0$, the work by the radiation reaction force equals the negative of the radiated energy.

$$
\int_t^{t+T_0}\vec{\mechanical{F}}_{\mathrm{rad}}\cdot\vec{\mechanical{v}}\,dt
=-\frac{2\electric{e}^2}{3c^3}\int_t^{t+T_0}
\dot{\vec{\mechanical{v}}}\cdot\dot{\vec{\mechanical{v}}}\,dt.
$$

The next step integrates the right side by parts.

### PDF page 129

Integration by parts gives

$$
-\frac{2\electric{e}^2}{3c^3}
\left[\vec{\mechanical{v}}\cdot\dot{\vec{\mechanical{v}}}\Big|_t^{t+T_0}
-\int_t^{t+T_0}\vec{\mechanical{v}}\cdot\ddot{\vec{\mechanical{v}}}\,dt\right].
$$

In the weak-damping approximation the motion is nearly periodic over a cycle, so the boundary term is negligible. The corresponding radiation reaction force inferred from the cycle work is

$$
\vec{\mechanical{F}}_{\mathrm{rad}}=\frac{2\electric{e}^2}{3c^3}\ddot{\vec{\mechanical{v}}}.
$$

The derivation from work constrains the component along the velocity. The notes assume the perpendicular component is zero for the one-dimensional oscillator. Adding the restoring force gives

$$
\mechanical{m}_e\ddot{\vec{\mechanical{r}}}
=-\mechanical{m}_e\signal{\omega}_0^2\vec{\mechanical{r}}
+\frac{2\electric{e}^2}{3c^3}\ddot{\vec{\mechanical{v}}}.
$$

The timescale $2\electric{e}^2/(3\mechanical{m}_ec^3)\sim\quantity{10^{-23}}{s}$ is small, so evaluate the radiation term perturbatively using the undamped solution $\vec{\mechanical{r}}=\vec{\mechanical{r}}_0\cos(\signal{\omega}_0t)$.

### PDF page 130

For the undamped solution,

$$
\begin{aligned}
\vec{\mechanical{v}}&=-\signal{\omega}_0\vec{\mechanical{r}}_0\sin(\signal{\omega}_0t),\\
\dot{\vec{\mechanical{v}}}&=-\signal{\omega}_0^2\vec{\mechanical{r}}_0\cos(\signal{\omega}_0t),\\
\ddot{\vec{\mechanical{v}}}&=\signal{\omega}_0^3\vec{\mechanical{r}}_0\sin(\signal{\omega}_0t)
=-\signal{\omega}_0^2\vec{\mechanical{v}}.
\end{aligned}
$$

The force $\vec{\mechanical{F}}_{\mathrm{rad}}\propto\ddot{\vec{\mechanical{v}}}$ is the **radiation reaction force**, also called the Abraham–Lorentz force. The third derivative of position can lead to spurious solutions if treated as an exact equation of motion. With only the radiation reaction force and $C=2\electric{e}^2/(3c^3)$, Newton's law gives $\mechanical{m}\dot{\vec{\mechanical{v}}}-C\ddot{\vec{\mechanical{v}}}=0$. It admits constant velocity and an unphysical exponentially growing velocity proportional to $e^{t/(C/\mechanical{m})}$. Treat the radiation reaction as a small perturbation, so the change in dipole motion over one cycle is small.

### PDF page 131

Substituting $\ddot{\vec{\mechanical{v}}}\simeq-\signal{\omega}_0^2\vec{\mechanical{v}}$ gives the weakly damped oscillator equation and its approximate solution.

$$
\begin{aligned}
\ddot{\vec{\mechanical{r}}}+\Gamma\dot{\vec{\mechanical{r}}}+\signal{\omega}_0^2\vec{\mechanical{r}}&=0,\\
\vec{\mechanical{r}}(t)&\simeq\vec{\mechanical{r}}_0e^{-\Gamma t/2}\cos(\signal{\omega}_0t),\\
\Gamma&=\frac{2\electric{e}^2\signal{\omega}_0^2}{3\mechanical{m}_ec^3}
=\frac{8\pi^2\electric{e}^2\signal{\nu}_0^2}{3\mechanical{m}_ec^3}.
\end{aligned}
$$

Here $\Gamma$ sets the decay rate and is related to the Einstein $A$ coefficient. The notes give $\Gamma\simeq2.5\times10^{-22}(\signal{\nu}_0/\unit{Hz})^2\,\unit{s^{-1}}$. For the hydrogen Balmer $\mathrm{H}\alpha$ line, $\signal{\lambda}_0=\quantity{6563}{\mathring{A}}$ and $\signal{\nu}_0=c/\signal{\lambda}_0$. The classical estimate is $\quantity{5\times10^7}{s^{-1}}$, compared with the quoted quantum result $\quantity{4.4\times10^7}{s^{-1}}$.

**Case 2. Driven oscillator (absorption).** Place the model atom in an external electric field with complex representation $\vec{\electric{E}}_0e^{i\signal{\omega}t}$. Add the driving force to the restoring and damping forces. For an electron, take the drive to be $-\electric{e}\vec{\electric{E}}_0e^{i\signal{\omega}t}$, with its sign absorbable into the drive phase. The notes write the force with a plus sign.

### PDF page 132

The damping constant $\Gamma$ sets the dipole field envelope $e^{-\Gamma t/2}$. At a fixed observing point, the radiated electric field has the time dependence $\vec{\electric{E}}_{\mathrm{rad}}(t)\propto e^{-\Gamma t/2}\cos(\signal{\omega}_0t)$ in the weak-damping approximation. The handwritten exponent on the field appears positive, while the oscillator solution and surrounding description specify decay. The Poynting flux is proportional to the squared field, so the cycle-averaged power drops by a factor of $e$ after time $\Gamma^{-1}$.

For the driven oscillator, try the real part of $\vec{C}e^{i\signal{\omega}t}$. Using the drive sign of the source, the steady-state displacement is

$$
\vec{\mechanical{r}}(t)
=\operatorname{Re}\left[
\frac{(\electric{e}\vec{\electric{E}}_0/\mechanical{m}_e)e^{i\signal{\omega}t}}
{\signal{\omega}_0^2-\signal{\omega}^2+i\Gamma\signal{\omega}}\right].
$$

The acceleration is $\vec{\mechanical{a}}=-\signal{\omega}^2\vec{\mechanical{r}}$, and Larmor's formula gives the scattered luminosity $\energy{L}=2\electric{e}^2|\vec{\mechanical{a}}|^2/(3c^3)$. This will be used to compute the cross section.

### PDF page 133

Rationalizing the denominator in the driven solution gives the time-dependent real factor

$$
\frac{(\signal{\omega}_0^2-\signal{\omega}^2)\cos(\signal{\omega}t)
+\Gamma\signal{\omega}\sin(\signal{\omega}t)}
{(\signal{\omega}_0^2-\signal{\omega}^2)^2+\Gamma^2\signal{\omega}^2}.
$$

Substitute the resulting acceleration into Larmor's formula. Averaging over a cycle gives $1/2$ for each squared trigonometric function and zero for their cross term.

$$
\langle\energy{L}\rangle
=\frac{\electric{e}^4\electric{E}_0^2}{3\mechanical{m}_e^2c^3}
\frac{\signal{\omega}^4}{(\signal{\omega}^2-\signal{\omega}_0^2)^2+\Gamma^2\signal{\omega}^2}.
$$

The simplified handwritten denominator appears to omit squares that are present in the averaging step. The cross section is defined through $\langle\energy{L}\rangle=\mechanical{\sigma}\langle\energy{S}\rangle$. In Gaussian CGS the time-averaged incident Poynting flux is

$$
\langle\energy{S}\rangle
=\frac{c\electric{E}_0^2}{4\pi}\langle\cos^2(\signal{\omega}t)\rangle
=\frac{c\electric{E}_0^2}{8\pi}.
$$

### PDF page 134

### Cross section near resonance

Integrate the line cross section over frequency. With $x=4\pi(\signal{\nu}-\signal{\nu}_0)/\Gamma$,

$$
\int_0^\infty \mechanical{\sigma}(\signal{\nu})\,d\signal{\nu}
\simeq \frac{\pi\electric{e}^2}{\mechanical{m}_e c}\frac{1}{\pi}
\int_{-\infty}^\infty\frac{dx}{1+x^2}
=\frac{\pi\electric{e}^2}{\mechanical{m}_e c}.
$$

At $\signal{\nu}=0$, $x=-4\pi\signal{\nu}_0/\Gamma$. The estimates $\Gamma\sim\quantity{10^8}{s^{-1}}$ and $\signal{\nu}_0\sim\quantity{10^{15}}{s^{-1}}$ justify extending the lower limit of the line integral to $-\infty$. Substitute $x=\tan\theta$ and $dx=\sec^2\theta\,d\theta$ to obtain $\int_{-\pi/2}^{\pi/2}d\theta=\pi$.

The oscillator cross section is the mean radiated power divided by the incident energy flux,

$$
\mechanical{\sigma}(\signal{\omega})
=\frac{\langle\energy{L}\rangle}{c\electric{E}_0^2/(8\pi)}
=\frac{8\pi\electric{e}^4}{3\mechanical{m}_e^2 c^4}
\frac{\signal{\omega}^4}{(\signal{\omega}^2-\signal{\omega}_0^2)^2+\Gamma^2\signal{\omega}^2}.
$$

Near resonance, $(\signal{\omega}^2-\signal{\omega}_0^2)^2=(\signal{\omega}-\signal{\omega}_0)^2(\signal{\omega}+\signal{\omega}_0)^2\simeq4\signal{\omega}_0^2(\signal{\omega}-\signal{\omega}_0)^2$. Replacing the other smooth frequency factors by their values at $\signal{\omega}_0$ gives the Lorentzian used in the line integral.

### PDF page 135

Substitute $\Gamma=2\electric{e}^2\signal{\omega}_0^2/(3\mechanical{m}_ec^3)$ into the near-resonance cross section. In angular frequency and ordinary frequency, respectively,

$$
\begin{aligned}
\mechanical{\sigma}(\signal{\omega})
&=\frac{\pi\electric{e}^2}{\mechanical{m}_ec}
\frac{\Gamma}{(\signal{\omega}-\signal{\omega}_0)^2+(\Gamma/2)^2},\\
\mechanical{\sigma}(\signal{\nu})
&=\frac{\pi\electric{e}^2}{\mechanical{m}_ec}
\frac{\Gamma/(4\pi^2)}{(\signal{\nu}-\signal{\nu}_0)^2+(\Gamma/(4\pi))^2},
\qquad \signal{\nu}=\frac{\signal{\omega}}{2\pi}.
\end{aligned}
$$

The Lorentzian describes the frequency dependence near resonance. The integrated classical line cross section is $\mechanical{\sigma}_{\mathrm{classical}}=\pi\electric{e}^2/(\mechanical{m}_ec)$, in $\unit{cm^2\,Hz}$. The absorption damping rate $\Gamma_{\mathrm{abs}}$ measures how efficiently energy is removed from the incident beam.

### Lecture of June 4, 2019

- Online evaluations.
- Final exam listed as Thursday, June 11, 10:30–12:30, at HERE (as written).

### PDF page 136

### Absorption oscillator strength

The classical frequency-integrated cross section, $\mechanical{\sigma}_{\mathrm{classical}}=\pi\electric{e}^2/(\mechanical{m}_e c)$, measures the efficiency of energy removal from the incident beam. Its units are $\unit{cm^2\,Hz}$. The classical result assigns the same absorption or scattering efficiency to every atomic transition. Quantum mechanics gives different cross sections for different transitions.

Introduce the absorption oscillator strength $f_{\ell\to u}$ to generalize the classical oscillator model of an excited atom:

$$
\mechanical{\sigma}_{\ell\to u}=\frac{\pi\electric{e}^2}{\mechanical{m}_e c}f_{\ell\to u}.
$$

The dimensionless $f_{\ell\to u}$ is the effective number of classical oscillators contributing to the transition. For strong lines such as H$\alpha$, it is of order unity. For weak lines, $f_{\ell\to u}\ll1$.

Exam reminders were to bring a calculator and answer in CGS units.

### PDF page 137

For the strongest transitions the integrated dipole cross section is a general result, independent of the detailed frequency dependence of the incident radiation. The dipole approximation must apply, radiative losses must cause the normal modes to decay, and at high frequency the particle must respond as if free. In the oscillator formula the ratio $\signal{\omega}^4/[(\signal{\omega}^2-\signal{\omega}_0^2)^2+\Gamma^2\signal{\omega}^2]$ approaches unity as $\signal{\omega}\to\infty$, leaving the Thomson cross section $\mechanical{\sigma}_T=8\pi\electric{e}^4/(3\mechanical{m}_e^2c^4)$.

### Oscillator strength and Einstein coefficients

The photoabsorption coefficient is

$$
\signal{\alpha}_{\signal{\nu}}^{\mathrm{photoabs}}=
n_\ell B_{\ell\to u}\frac{h\signal{\nu}_{\ell u}}{4\pi}\phi(\signal{\nu})
=n_\ell\mechanical{\sigma}_{\ell\to u}(\signal{\nu}).
$$

Integrate over frequency using $\int_0^\infty\phi(\signal{\nu})\,d\signal{\nu}=1$:

$$
\mechanical{\sigma}_{\ell\to u}
=B_{\ell\to u}\frac{h\signal{\nu}_{\ell u}}{4\pi}
=\frac{\pi\electric{e}^2}{\mechanical{m}_ec}f_{\ell\to u}.
$$

### PDF page 138

$$
B_{\ell\to u}=\frac{4\pi^2\electric{e}^2}{\mechanical{m}_ec}\frac{f_{\ell\to u}}{h\signal{\nu}_{\ell u}}.
$$

Stimulated emission contributes negative absorption, $\signal{\alpha}_{\signal{\nu}}^{\mathrm{stim}}=-n_u B_{u\to\ell}h\signal{\nu}_{\ell u}\phi(\signal{\nu})/(4\pi)$. Its integrated cross section per atom is $\mechanical{\sigma}_{u\to\ell}=-B_{u\to\ell}h\signal{\nu}_{\ell u}/(4\pi)$. The emission oscillator strength $f_{u\to\ell}$ is signed.

$$
B_{u\to\ell}=\frac{4\pi^2\electric{e}^2}{\mechanical{m}_ec}\frac{-f_{u\to\ell}}{h\signal{\nu}_{\ell u}}.
$$

The Einstein relation $g_\ell B_{\ell\to u}=g_u B_{u\to\ell}$ gives $g_\ell f_{\ell\to u}=-g_u f_{u\to\ell}$. The spontaneous emission coefficient is

$$
A_{u\to\ell}=\frac{2h\signal{\nu}_{\ell u}^3}{c^2}B_{u\to\ell}
=\frac{8\pi^2\electric{e}^2}{\mechanical{m}_ec^3}\signal{\nu}_{\ell u}^2\frac{g_\ell}{g_u}f_{\ell\to u}.
$$

The absorption oscillator strength determines all three coefficients. The factor $c^3$ follows from the displayed Einstein relations. The source's boxed expression has $c^2$.

### PDF page 139

### Quantum oscillator strengths

Time-dependent perturbation theory for a quantum atom in a classical radiation field gives the absorption oscillator strength in terms of electric dipole matrix elements (Rybicki and Lightman, Eq. 10.29b):

$$
f_{\ell\to u}=\frac{8\pi^2\mechanical{m}_e}{3\electric{e}^2 h^2}
\frac{\energy{E}_u-\energy{E}_\ell}{g_\ell}
\sum_{g_\ell,g_u}\lvert\langle\ell|\electric{\boldsymbol{d}}|u\rangle\rvert^2.
$$

For multiple electrons, $\electric{\boldsymbol{d}}=-\electric{e}\sum_{i=1}^N\mechanical{\boldsymbol{r}}_i$. The sum covers the degenerate sublevels. The handwriting uses $\boldsymbol{r}$ in the matrix element and shows one power of $h$. The expression here uses the electric dipole moment and $h^2$, which make $f_{\ell\to u}$ dimensionless.

For hydrogen-like ions, Kramers' approximation gives (Bethe and Salpeter, 1957)

$$
f_{\ell\to u}
=\frac{2^6}{3\sqrt{3}\pi}\frac{1}{g_\ell}
\frac{1}{(1/n_\ell^2-1/n_u^2)^3}\frac{g_{\mathrm{I}}}{n_\ell^3 n_u^3},
$$

where $g_{\mathrm{I}}$ is the Gaunt factor. For fixed lower level $\ell$, the oscillator strength drops rapidly as the upper level rises. The exact result for the hydrogen Lyman series has $f_{1\to n}\propto n^5(n-1)^{2n-4}/(n+1)^{2n+4}$ (Rybicki and Lightman, Eq. 10.46).

### PDF page 140

Factor out the powers of $n$ in the hydrogen Lyman oscillator strengths:

$$
f_{1\to n}\propto n^5\frac{n^{2n-4}}{n^{2n+4}}
\frac{(1-1/n)^{2n-4}}{(1+1/n)^{2n+4}}\propto n^{-3}\qquad(n\to\infty).
$$

| Hydrogen Balmer line | Oscillator strength | Value |
| --- | --- | ---: |
| H$\alpha$ | $f_\alpha=f_{2\to3}$ | 0.641 |
| H$\beta$ | $f_\beta=f_{2\to4}$ | 0.119 |
| H$\gamma$ | $f_\gamma=f_{2\to5}$ | 0.045 |
| H$\delta$ | $f_\delta=f_{2\to6}$ | 0.022 |
| H$\epsilon$ | $f_\epsilon=f_{2\to7}$ | 0.013 |

### Line profiles and natural broadening

Rybicki and Lightman, §10.6. For the classical oscillator,

$$
\mechanical{\sigma}(\signal{\nu})=\mechanical{\sigma}_{\mathrm{classical}}\phi(\signal{\nu}),
\qquad
\phi(\signal{\nu})=\frac{\Gamma/(4\pi^2)}{(\signal{\nu}-\signal{\nu}_0)^2+(\Gamma/(4\pi))^2}.
$$

Here $\phi$ is the absorption line profile. Emission and absorption profiles can differ. The spectrum from the electric field of the decaying classical oscillator has the same line shape in this model.

### PDF page 141

The natural emission profile for the classical oscillator is the same Lorentzian $\phi(\signal{\nu})$. Its half-maximum points are $\signal{\nu}_0\pm\Gamma/(4\pi)$, giving full width at half maximum $\Delta\signal{\nu}=\Gamma/(2\pi)$. The wings are broader than those of a Gaussian.

![[Kyle Kabasares - Radiative Transfer - Natural line profile.png|**Fig. 85** Lorentzian line profile with half-maximum points and extended wings.]]

Since $\signal{\lambda}=c/\signal{\nu}$, the wavelength FWHM is $\Delta\signal{\lambda}\simeq(c/\signal{\nu}_0^2)\Gamma/(2\pi)$. With $\Gamma=(\quantity{2.5\times10^{-22}}{s})\signal{\nu}_0^2$, the classical electron oscillator has $\Delta\signal{\lambda}\simeq\quantity{1.2\times10^{-4}}{\text{Å}}$, independent of line wavelength.

For a hydrogen atom in upper state $u$, the quantum-mechanical minimum emission linewidth follows from the Heisenberg uncertainty principle.

### PDF page 142

The order-of-magnitude lifetime estimate is $(\Delta\energy{E})_{\min}\Delta t\sim h$, so $(\Delta\signal{\nu})_{\min}\sim1/\Delta t\sim A_{u\to\ell}$ for a single decay channel. A higher transition probability gives a shorter lifetime, stronger line, and greater natural width.

An exponentially decaying quantum amplitude has the time dependence $\Psi(x,t)\propto e^{-\Gamma t/2}e^{i\signal{\omega}_0t}$ in the convention used here. The Lorentzian FWHM is $\Gamma/(2\pi)$, where $\Gamma=A_{u\to\ell}$ in the single-channel case.

For hydrogen H$\alpha$, $\signal{\lambda}_0=\quantity{6563}{\text{Å}}$ and $A\simeq\quantity{4.4\times10^7}{s^{-1}}$. Using the order-of-magnitude linewidth $\Delta\signal{\nu}\sim A$ gives

$$
\lvert\Delta\signal{\lambda}\rvert\simeq\frac{c}{\signal{\nu}_0^2}\lvert\Delta\signal{\nu}\rvert
\sim\frac{\signal{\lambda}_0^2}{c} A\simeq\quantity{6\times10^{-4}}{\text{Å}}.
$$

Observed lines are usually much wider than this natural scale.

### Doppler broadening

An atom in thermal motion emits or absorbs at its rest-frame line frequency. A stationary observer measures a frequency shifted by the atom's velocity (Rybicki and Lightman, p. 287).

### PDF page 143

For the relativistic Doppler shift of photons, the primed frame is the atom's rest frame and the unprimed frame is the observer's. The atom's speed is $\mechanical{v}$, and $\theta$ is the angle between its velocity and the direction to the observer.

![[Kyle Kabasares - Radiative Transfer - Doppler geometry.png|**Fig. 86** Moving atom, line of sight, and observer.]]

### Lecture of June 6, 2019

- Online evaluations.
- Final exam Tuesday, June 11, 10:30 a.m.–12:30 p.m.
- Office hours Monday, June 10, 1–2 p.m.

The lecture resumes Doppler broadening. Thermal motion makes the observer's emission or absorption frequency differ from the frequency in the atom's own frame (Rybicki and Lightman, p. 287).

![[Kyle Kabasares - Radiative Transfer - Doppler geometry recap.png|**Fig. 87** Velocity and line-of-sight angle in the lecture recap.]]

### PDF page 144

### Relativistic Doppler shift for a photon

The observer measures $\energy{E}=\gamma\energy{E}'(1+\mechanical{v}\cos\theta'/c)$, with $\theta'$ the photon angle in the atom's rest frame, measured relative to the boost direction. For nonrelativistic motion, $\gamma\simeq1$ and the angles in the two frames agree to leading order. Write $\energy{E}=h\signal{\nu}$, $\energy{E}'=h\signal{\nu}_0$ and $\mechanical{v}_x=\mechanical{v}\cos\theta$ to obtain

$$
\signal{\nu}-\signal{\nu}_0\simeq\signal{\nu}_0\frac{\mechanical{v}_x}{c}.
$$

Only the line-of-sight component $\mechanical{v}_x$ contributes to Doppler broadening at this order. A gas of atoms with different velocities produces an emission or absorption profile around $\signal{\nu}_0$.

![[Kyle Kabasares - Radiative Transfer - Gas Doppler broadening.png|**Fig. 88** Random thermal velocities and the broadened spectral line seen by the observer.]]

### PDF page 145

The observer sees broadening of the line at fixed integrated intensity. To account for the shift in the absorption coefficient, apply the inverse Lorentz transformation. The photon energy in the atom's frame is $\energy{E}'=\gamma\energy{E}(1-\mechanical{v}\cos\theta/c)$, where $\theta$ is measured in the observer's frame. To first order, the atom absorbs at $\signal{\nu}'=\signal{\nu}(1-\mechanical{v}_x/c)$ when the observed frequency is $\signal{\nu}$. Thus in the Doppler approximation $\signal{\alpha}^{\mathrm{obs}}(\signal{\nu})\simeq\signal{\alpha}^{\mathrm{atom}}(\signal{\nu}-\signal{\nu}\mechanical{v}_x/c)$.

Average the shifted coefficient over all velocities. Since $\signal{\alpha}_{\signal{\nu}}=n\mechanical{\sigma}_{\signal{\nu}}$ and $n$ is independent of velocity, the average is determined by the cross section and the one-dimensional Maxwell velocity distribution $P(\mechanical{v}_x)$:

$$
\langle\mechanical{\sigma}^{\mathrm{obs}}(\signal{\nu})\rangle
=\int\mechanical{\sigma}\!\left(\signal{\nu}-\signal{\nu}\frac{\mechanical{v}_x}{c}\right)P(\mechanical{v}_x)\,d\mechanical{v}_x.
$$

### PDF page 146

Normalize the one-dimensional Boltzmann factor with $\int_{-\infty}^\infty P(\mechanical{v}_x)\,d\mechanical{v}_x=1$. This gives

$$
P(\mechanical{v}_x)=\sqrt{\frac{\mechanical{m}}{2\pi k_B\thermal{T}}}
\exp\!\left(-\frac{\mechanical{m}\mechanical{v}_x^2}{2k_B\thermal{T}}\right).
$$

Insert this in the velocity average and change integration variable to the frequency shift $\Delta\signal{\nu}=\signal{\nu}\mechanical{v}_x/c$. Since $\signal{\nu}\simeq\signal{\nu}_0$ across the narrow line,

$$
\langle\mechanical{\sigma}^{\mathrm{obs}}(\signal{\nu})\rangle
=\sqrt{\frac{\mechanical{m}}{2\pi k_B\thermal{T}}}\frac{c}{\signal{\nu}_0}
\int_{-\infty}^{\infty}\mechanical{\sigma}(\signal{\nu}-\Delta\signal{\nu})
\exp\!\left(-\frac{\mechanical{m}c^2(\Delta\signal{\nu})^2}{2 k_B\thermal{T}\signal{\nu}_0^2}\right)d(\Delta\signal{\nu}).
$$

To isolate Doppler broadening, take an infinitely narrow intrinsic profile, $\phi_{\mathrm{natural}}(\signal{\nu}')\to\delta(\signal{\nu}'-\signal{\nu}_0)$, so $\mechanical{\sigma}(\signal{\nu}')=\mechanical{\sigma}_{\mathrm{line}}\delta(\signal{\nu}'-\signal{\nu}_0)$ with $\mechanical{\sigma}_{\mathrm{line}}$ the integrated cross section.

### PDF page 147

The delta function $\delta(\signal{\nu}-\Delta\signal{\nu}-\signal{\nu}_0)$ picks out $\Delta\signal{\nu}=\signal{\nu}-\signal{\nu}_0$ in the integral. The pure Doppler cross section and profile are

$$
\begin{aligned}
\langle\mechanical{\sigma}(\signal{\nu})\rangle_D
&=\mechanical{\sigma}_{\mathrm{line}}\phi_D(\signal{\nu}),\\
\phi_D(\signal{\nu})
&=\frac{1}{\sqrt{\pi}\,\Delta\signal{\nu}_D}
\exp\!\left[-\frac{(\signal{\nu}-\signal{\nu}_0)^2}{(\Delta\signal{\nu}_D)^2}\right],\\
\Delta\signal{\nu}_D&=\frac{\signal{\nu}_0}{c}\sqrt{\frac{2k_B\thermal{T}}{\mechanical{m}}}.
\end{aligned}
$$

The Doppler parameter $b=\sqrt{2k_B\thermal{T}/\mechanical{m}}$ has units of velocity. At line center,

$$
\langle\mechanical{\sigma}(\signal{\nu}_0)\rangle_D
=\frac{\pi\electric{e}^2}{\mechanical{m}_ec}f_{\ell\to u}\frac{1}{\sqrt{\pi}\,\Delta\signal{\nu}_D}
\simeq(\quantity{1.16\times10^{-14}}{cm^2})\frac{\signal{\lambda}_0}{\unit{\text{Å}}}
\sqrt{\frac{A}{\thermal{T}/\unit{K}}}f_{\ell\to u}.
$$

Here $A$ is the absorber mass in atomic mass units.

### PDF page 148

The line-center cross section in Rybicki and Lightman, Eq. 10.71, uses $\signal{\lambda}_0$ in ångströms, $\thermal{T}$ in kelvin, and atomic weight $A$. Doppler broadening dominates the centers of most observed lines.

- In a galaxy cluster's intracluster medium, thermal bremsstrahlung comes from a coronal plasma with $k_B\thermal{T}\simeq\quantity{8}{keV}$. For an oxygen line with $h\signal{\nu}_0\simeq\quantity{0.65}{keV}$, $\Delta\signal{\nu}_D/\signal{\nu}_0\sim10^{-3}$, about ten times the natural linewidth.
- In the solar photosphere, $\thermal{T}\sim\quantity{6000}{K}$. For an iron atom with $A=56$, $b\simeq\quantity{1.4}{km\,s^{-1}}$ and $\Delta\signal{\nu}_D/\signal{\nu}_0\sim4\times10^{-6}$, over 100 times the natural width in the example.

With small-scale turbulence, a one-dimensional turbulent velocity $\mechanical{v}_t$ contributes in quadrature:

$$
\Delta\signal{\nu}_D=\frac{\signal{\nu}_0}{c}
\sqrt{\frac{2k_B\thermal{T}}{\mechanical{m}}+\mechanical{v}_t^2}.
$$

The notes describe $\mechanical{v}_t$ as an average turbulent speed and assume the turbulent motions occur on small spatial scales.

### PDF page 149

Microturbulence occurs on scales smaller than the collisional mean free path. The Gaussian broadening formula also applies when the turbulent velocity distribution is Gaussian about the mean velocity.

### Voigt profile

The cross section averaged over Maxwell velocities includes both the natural and Doppler profiles. The complete profile is the convolution of the Lorentzian $\phi_L$ with the Doppler Gaussian $\phi_D$, written with the latter centered at zero shift:

$$
\phi(\signal{\nu})=\int_{-\infty}^{\infty}\phi_L(\signal{\nu}')\phi_D(\signal{\nu}-\signal{\nu}')\,d\signal{\nu}'.
$$

Define $\Delta\signal{\nu}=\signal{\nu}-\signal{\nu}_0$ and $\Delta\signal{\nu}'=\signal{\nu}'-\signal{\nu}_0$. Then

$$
\phi(\signal{\nu})
=\int_{-\infty}^{\infty}
\frac{\Gamma/(4\pi^2)}{(\Delta\signal{\nu}')^2+(\Gamma/(4\pi))^2}
\frac{\exp[-(\Delta\signal{\nu}-\Delta\signal{\nu}')^2/(\Delta\signal{\nu}_D)^2]}
{\sqrt{\pi}\,\Delta\signal{\nu}_D}\,d(\Delta\signal{\nu}').
$$

Set $u=\Delta\signal{\nu}/\Delta\signal{\nu}_D$, $u'=\Delta\signal{\nu}'/\Delta\signal{\nu}_D$, and $a=\Gamma/(4\pi\Delta\signal{\nu}_D)$.

### PDF page 150

Using the dimensionless offsets gives

$$
\phi(\signal{\nu})=\frac{1}{\sqrt{\pi}\,\Delta\signal{\nu}_D}\frac{a}{\pi}
\int_{-\infty}^\infty\frac{e^{-(u-u')^2}}{(u')^2+a^2}\,du'.
$$

Set $y=u-u'$ and $dy=-du'$. Reversing the limits yields the Voigt profile and Voigt function,

$$
\phi(\signal{\nu})=\frac{H(a,u)}{\Delta\signal{\nu}_D\sqrt{\pi}},
\qquad
H(a,u)=\frac{a}{\pi}\int_{-\infty}^\infty\frac{e^{-y^2}}{a^2+(u-y)^2}\,dy.
$$

The denominators retain the sum of squares from the Lorentzian on the previous page. The source writes a minus sign in both expressions.

![[Kyle Kabasares - Radiative Transfer - Voigt profile.png|**Fig. 89** Source photograph of the Doppler, damping, and combined line profiles in Fig. 10.6.]]

A typical Voigt profile has a Gaussian Doppler core and Lorentzian damping wings. In terms of $u$, the core behaves as $e^{-u^2}$ and the far wings fall as $1/u^2$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
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
| $\energy{\tau}_{\signal{\nu}}$ | $1$ | Optical depth | Absorption coefficient integrated along a path. |
| $\mechanical{\ell}_{\signal{\nu}}$ | $\unit{cm}$ | Photon mean free path | Average path length to absorption in a homogeneous medium. |
| $\energy{E}_{\mathrm{I}}$ | $\unit{eV}$ | Ionization energy | Energy required to remove a bound electron from the atom. |
| $\mechanical{N}_{\mathrm{H}}$ | $\unit{cm^{-2}}$ | Hydrogen absorption column density | Hydrogen number density integrated along the ray. |
| $\mechanical{a}_0$ | $\unit{cm}$ | Bohr radius | Characteristic radius of the hydrogen ground state. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $\mechanical{\sigma}_{\mathrm{T}}$ | $\unit{cm^2}$ | Thomson cross section | Ratio of total scattered power to incident energy flux. |
| $\energy{S}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Incident energy flux | Electromagnetic energy incident per unit time and area. |
| $\mechanical{r}_0$ | $\unit{cm}$ | Classical electron radius | Length scale that sets the Thomson cross section. |
| $\electric{\epsilon}_0$ | $\unit{F\cdot m^{-1}}$ | Vacuum permittivity | Constant in the SI form of Coulomb's law. |
| $\magnetic{\mu}_0$ | $\unit{N\cdot A^{-2}}$ | Vacuum permeability | Magnetic constant in SI. |
| $\signal{\lambda}_{\mathrm{C}}$ | $\unit{cm}$ | Electron Compton wavelength | Wavelength associated with a photon of energy equal to the electron rest energy. |
| $\energy{U}$ | $\unit{erg\cdot cm^{-3}}$ | Radiation energy density | Electromagnetic energy per unit volume in Gaussian CGS. |
| $y$ | $1$ | Compton parameter | Mean fractional energy change per scattering times the mean scattering count, using the convention in this section. |
| $\thermal{T}$ | $\unit{K}$ | Brightness temperature | Temperature inferred from the intensity in the Rayleigh–Jeans limit in this section. |
| $Y_{\mathrm{SZ}}$ | $\unit{sr}$ | Integrated SZ Compton parameter | Line-of-sight Compton parameter integrated over the cluster's apparent solid angle. |
| $\energy{\epsilon}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-3}\cdot Hz^{-1}}$ | Volume emissivity | Radiated power per unit volume and frequency, integrated over direction. |
| $\energy{\Lambda}_{\signal{\nu}}^{\mathrm{ff}}$ | $\unit{erg\cdot cm^3\cdot s^{-1}\cdot Hz^{-1}}$ | Free–free spectral cooling function | Thermally averaged volume emissivity divided by the electron and ion densities. |
| $\energy{S}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Source function | Ratio of the emission coefficient to the absorption coefficient. |
| $\energy{B}_{\signal{\nu}}(\thermal{T})$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Planck function | Specific intensity of equilibrium blackbody radiation. |
| $\signal{\omega}_B$ | $\unit{rad\cdot s^{-1}}$ | Angular cyclotron frequency | Angular rate of nonrelativistic gyration in a magnetic field. |
| $\energy{U}_B$ | $\unit{erg\cdot cm^{-3}}$ | Magnetic energy density | Magnetic field energy per unit volume. |
| $\signal{\omega}_c$ | $\unit{rad\cdot s^{-1}}$ | Critical synchrotron angular frequency | Characteristic frequency scale above which the single-electron spectrum decays rapidly. |
| $\Pi$ | $1$ | Degree of polarization | Polarized intensity divided by total intensity. |
| $\magnetic{B}_{\mathrm{eq}}$ | $\unit{G}$ | Equipartition magnetic field | Field strength minimizing the total particle and magnetic energy at fixed synchrotron luminosity. |
| $\energy{A}_{u\to\ell}$ | $\unit{s^{-1}}$ | Einstein spontaneous emission coefficient | Decay probability per unit time from the upper state to the lower state. |
| $\energy{B}_{\ell\to u}$ | $\unit{cm^2\cdot sr\cdot Hz\cdot erg^{-1}}$ | Einstein absorption coefficient | Upward transition rate per unit mean specific intensity. |
| $\energy{B}_{u\to\ell}$ | $\unit{cm^2\cdot sr\cdot Hz\cdot erg^{-1}}$ | Einstein stimulated emission coefficient | Stimulated downward transition rate per unit mean specific intensity. |
| $\phi(\signal{\nu})$ | $\unit{Hz^{-1}}$ | Normalized line profile | Frequency distribution of a line, normalized to unit integral. |
| $\Gamma$ | $\unit{s^{-1}}$ | Radiative damping rate | Energy decay rate in the weakly damped classical oscillator model. |
| $f_{\ell\to u}$ | — | Absorption oscillator strength | Scales the integrated classical cross section for a transition from the lower to the upper level. |
| $f_{u\to\ell}$ | — | Emission oscillator strength | Signed oscillator strength for stimulated emission. |
| $\Delta\signal{\nu}_D$ | $\unit{Hz}$ | Doppler width | Frequency offset at which the Gaussian falls to $1/e$ of its peak. |
| $b$ | $\unit{cm\,s^{-1}}$ | Doppler parameter | Thermal speed scale for the line profile. |
