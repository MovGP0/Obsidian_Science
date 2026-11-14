---
title: "Radiative absorption, recombination, and Thomson scattering"
---

> [!TLDR]
> Compare basic absorption and emission processes and derive the classical scattering of an electromagnetic wave by an electron.

## Worked lecture material

##### Optical depth and mean free path

Define the optical depth between two positions along a ray by

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

##### Survey of absorption and emission processes

The change $d\energy{I}_{\signal{\nu}}/d\mechanical{s}$ is a function of the radiation intensity and the emission, absorption, and scattering coefficients. What physical processes set those coefficients?

**Absorption** occurs when a photon interacts with matter and all of the incident photon's energy is removed from the radiation field.

![[Kyle Kabasares - Radiative Transfer - Photon incident on an atom.png|**Fig. 13** Before the interaction, a photon of energy $h\nu$ approaches an atom with a bound electron.]]

After absorption the atom is either ionized or excited. If an electron is ejected, some photon energy can become the electron's kinetic energy. In **true absorption**, the energy lost by the radiation field becomes thermal energy of the material.

##### Photoelectric absorption

An incoming photon ionizes a stationary, neutral atom in its ground state. The notes identify photoelectric absorption as important for photon energies $\energy{E}_\gamma\lesssim\mechanical{m}_e c^2$, above the relevant ionization threshold. For ground-state hydrogen the threshold is $\hbar\signal{\omega}=\quantity{13.6}{eV}$.

Let $\energy{E}_{\mathrm{I}}$ be the ionization energy. For $\energy{E}_\gamma<\energy{E}_{\mathrm{I}}$, photoionization is energetically forbidden. For $\energy{E}_\gamma\ge\energy{E}_{\mathrm{I}}$, the photon can be absorbed.

How does the photoelectric absorption cross section $\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}$ depend on the energies?

1. For $\energy{E}_\gamma\gg\energy{E}_{\mathrm{I}}$, the photon feels little influence from the atom. Above threshold, the cross section decreases with increasing $\energy{E}_\gamma$.
2. At a large fixed $\energy{E}_\gamma$, increasing $\energy{E}_{\mathrm{I}}$ brings the photon closer to threshold and increases $\mechanical{\sigma}_{\mathrm{ph}}^{\mathrm{abs}}$ within this regime.

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

For neutral iron, K-shell absorption begins at $\quantity{7.1}{keV}$. The dip weakens rapidly above the edge as energy increases. In the illustrated spectrum there is little absorption above $\quantity{30}{keV}$.

![[Kyle Kabasares - Radiative Transfer - X-ray absorption by gas.png|**Fig. 15** An incident power-law X-ray spectrum passes through neutral gas of solar abundances at column densities of $0$, $10^{20}$, $10^{21}$, $10^{22}$, and $10^{23}\,\mathrm{cm^{-2}}$. The plot marks H and He absorption and the C, O, and Ne edges. Source as cited in the notes is Niel Brandt's Astronomy 485 course.]]

K edges of heavier elements such as C, Ne, Mg, Si, and Fe are important contributions to the photoelectric absorption cross section at X-ray energies. Cold gas in the Milky Way therefore affects extragalactic X-ray observations.

$$
\energy{I}_{\signal{\nu}}
=\energy{I}_{\signal{\nu}}(\mechanical{s}_0)e^{-\energy{\tau}_{\signal{\nu}}},
\qquad
\energy{\tau}_{\signal{\nu}}=\int\energy{\alpha}_{\signal{\nu}}\,d\mechanical{s}.
$$

##### Photoelectric absorption coefficient of gas with solar abundances

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

Problem set 2 is due April 30. The lecture begins by reviewing the optical-depth expression in terms of hydrogen column density.

![[Kyle Kabasares - Radiative Transfer - Interstellar gas absorption cross section.png|**Fig. 16** The absorption cross section of interstellar gas with typical cosmic abundances. The discontinuities mark K-shell edges of the labeled elements. The notes reproduce Longair's Fig. 4.2, which credits Brown and Gould (1970).]]

For solar abundances and photon energies above about $\quantity{0.1}{keV}$, the notes give this approximation when individual edges are unresolved:

$$
\energy{\tau}_{\signal{\omega}}
\simeq 2\times10^{-22}
\left(\frac{\hbar\signal{\omega}}{\quantity{1}{keV}}\right)^{-8/3}
\left(\frac{\mechanical{N}_{\mathrm{H}}}{\unit{cm^{-2}}}\right).
$$

The optical depth is larger for smaller photon energy. The notes also mark the approximate $\signal{\omega}^{-3}$ dependence of the underlying photoelectric cross section. At $\energy{E}_\gamma=\quantity{1}{keV}$, a column $\mechanical{N}_{\mathrm{H}}=\quantity{5\times10^{21}}{cm^{-2}}$ gives $\energy{\tau}_{\signal{\omega}}\simeq1$.

![[Kyle Kabasares - Radiative Transfer - Transparency versus hydrogen column.png|**Fig. 17** Photon energy at unit optical depth versus hydrogen column density. The curve separates the transparent region above it from the opaque region below it. The slide cites Niel Brandt's Astronomy 485 course.]]

##### Scattering and radiative recombination

In the broad sense used here, **scattering** is an interaction of a photon with matter followed shortly by emission of at least one photon.

![[Kyle Kabasares - Radiative Transfer - Photon interaction with matter.png|**Fig. 18** An incident photon approaches matter, which subsequently emits one or more photons.]]

##### Photoionization followed by radiative recombination

1. An incident photon ionizes an atom by photoelectric absorption and ejects an electron.
2. The ion captures a free electron, which can be a different electron. One or more photons are emitted during the downward transitions.

![[Kyle Kabasares - Radiative Transfer - Photoionization and recombination.png|**Fig. 19** An incident photon at frequency $\nu_i$ and an emitted photon at frequency $\nu_f$.]]

In general $\signal{\nu}_f\ne\signal{\nu}_i$, since the captured electron can first occupy a different level from the one vacated. If the recombination time is short, the sequence resembles a single scattering event.

##### Line scattering

1. An incoming photon is absorbed and excites the atom.
2. The atom decays and emits a photon. In the approximation used here, $\energy{E}_\gamma^{\mathrm{in}}=\energy{E}_\gamma^{\mathrm{out}}$ when the electron returns to its original level.

![[Kyle Kabasares - Radiative Transfer - Line scattering.png|**Fig. 20** The incident photon excites a bound electron, and a photon leaves as the electron returns to the lower level.]]

##### Stimulated emission

A photon incident on an excited atom induces a transition to a lower state.

In stimulated emission, a photon of energy $h\signal{\nu}$ induces an excited atom $A^*$ to decay to the lower state $A$. The two outgoing photons have the same energy.

$$
h\signal{\nu}+A^*\longrightarrow 2h\signal{\nu}+A
$$

![[Kyle Kabasares - Radiative Transfer - Stimulated emission.png|**Fig. 21** The incident photon induces a downward transition, giving two outgoing photons at the same frequency.]]

##### Continuum scattering

In Thomson and Compton scattering an incident photon interacts with matter and emerges with a changed direction, a changed energy, or both. The cosmic microwave background involves both kinds of scattering. Thomson scattering occurs in stellar envelopes. The notes also list accretion disks.

##### Thomson scattering

Rybicki and Lightman, pp. 90–91. A free charge radiates in response to an incident electromagnetic wave.

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

##### The classical regime

In Gaussian units, the Bohr radius and fine-structure constant are

$$
\mechanical{a}_0=\frac{\hbar^2}{\mechanical{m}_e\electric{e}^2},
\qquad
\alpha=\frac{\electric{e}^2}{\hbar c}.
$$

Thus $\alpha\mechanical{a}_0=\hbar/(\mechanical{m}_e c)$ and the Thomson condition is $\signal{\lambda}\gg2\pi\alpha\mechanical{a}_0$. Since $2\pi\alpha\simeq1/20$, wavelengths much larger than the Bohr radius satisfy this condition and lie in the classical regime.

![[Kyle Kabasares - Radiative Transfer - Linearly polarized incident wave.png|**Fig. 23** A linearly polarized wave approaches the electron from the negative $z$ side. Its electric field is along $x$, and the scattering direction makes an angle $\Theta$ with the $x$ axis.]]

**Homework.** Prove the result for the general case.

##### Motion of the electron in the incident wave

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

##### Radiated power and Thomson cross section

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

![[Kyle Kabasares - Radiative Transfer - Thomson scattering geometry.png|**Fig. 24** An incident wave polarized along $x$ reaches an electron initially at rest. The scattered ray makes an angle $\Theta$ with the polarization axis.]]

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

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
| $\energy{I}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Specific intensity | Radiated power per unit projected area, solid angle, and frequency. |
| $\energy{I}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}}$ | Frequency-integrated intensity | Specific intensity integrated over frequency. |
| $\mechanical{\sigma}_{\signal{\nu}}$ | $\unit{cm^2}$ | Absorption cross section | Effective area presented by one absorber at frequency $\signal{\nu}$. |
| $\mechanical{n}$ | $\unit{cm^{-3}}$ | Number density | Number of absorbers per unit volume. |
| $\energy{\alpha}_{\signal{\nu}}$ | $\unit{cm^{-1}}$ | Absorption coefficient | Fractional loss of specific intensity per unit path length. |
| $\energy{\tau}_{\signal{\nu}}$ | $1$ | Optical depth | Absorption coefficient integrated along a path. |
| $\mechanical{\ell}_{\signal{\nu}}$ | $\unit{cm}$ | Photon mean free path | Average path length to absorption in a homogeneous medium. |
| $\energy{E}_{\mathrm{I}}$ | $\unit{eV}$ | Ionization energy | Energy required to remove a bound electron from the atom. |
| $\mechanical{N}_{\mathrm{H}}$ | $\unit{cm^{-2}}$ | Hydrogen absorption column density | Hydrogen number density integrated along the ray. |
| $\mechanical{a}_0$ | $\unit{cm}$ | Bohr radius | Characteristic radius of the hydrogen ground state. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $\mechanical{\sigma}_{\mathrm{T}}$ | $\unit{cm^2}$ | Thomson cross section | Ratio of total scattered power to incident energy flux. |
| $\energy{S}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Incident energy flux | Electromagnetic energy incident per unit time and area. |
