---
title: "Thermal source functions and optically thick spectra"
---

> [!TLDR]
> Use detailed balance and optical depth to connect blackbody emission with the spectrum of a thermal plasma.

## Worked lecture material

The small turbulent line widths and Doppler shifts in Perseus suggest $\mechanical{P}_{\mathrm{nontherm}}\simeq0.04\,\mechanical{P}_{\mathrm{therm}}$. The notes cite the Hitomi Collaboration, *Nature* 535 (2016).

##### Thermal bremsstrahlung absorption

In free–free absorption an ion and free electron interact with an incident photon and emerge as an ion and free electron with the photon energy absorbed.

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

The thermally averaged free–free emissivity has the scaling $\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}\propto\mechanical{n}^2\thermal{T}^{-1/2}e^{-h\signal{\nu}/(k_{\mathrm B}\thermal{T})}$ for a fixed plasma composition.

##### Blackbody radiation and thermal equilibrium

Blackbody radiation is radiation in thermal equilibrium. To show that its specific intensity depends only on frequency and temperature, consider a container of arbitrary shape whose walls are held at temperature $\thermal{T}$. Let the walls and enclosed radiation reach equilibrium. Open a hole small enough to measure the radiation without appreciably disturbing equilibrium. A filter transmits only the frequency of interest.

![[Kyle Kabasares - Radiative Transfer - Blackbody cavity with frequency filter.png|**Fig. 52** A small opening in the cavity allows the specific intensity at frequency $\nu$ to be measured through a filter.]]

Suppose the measured specific intensity through the opening is $\energy{I}_{\signal{\nu}}$.

Take a second cavity of arbitrary shape, also in thermal equilibrium with its walls, initially at the same temperature $\thermal{T}'=\thermal{T}$. Join the two small openings through the frequency filter. The openings restrict the transfer enough that the changes are quasistatic and the radiation inside each cavity stays in equilibrium with its walls. Let the intensity passing from the second cavity be $\energy{I}_{\signal{\nu}}'$.

![[Kyle Kabasares - Radiative Transfer - Two cavities at the same temperature.png|**Fig. 53** A frequency filter connects two differently shaped blackbody cavities initially at the same temperature.]]

If $\energy{I}_{\signal{\nu}}'>\energy{I}_{\signal{\nu}}$, energy would flow from the second cavity into the first. The first would warm and the second would cool, so continued transfer in that direction would send heat from a cooler body to a hotter one. For the quasistatic changes within each cavity, $d\thermal{S}=\delta\energy{Q}/\thermal{T}$, giving

$$
d\thermal{S}_{\mathrm{tot}}
=d\thermal{S}+d\thermal{S}'
=\frac{\delta\energy{Q}}{\thermal{T}}
+\frac{\delta\energy{Q}'}{\thermal{T}'}.
$$

Energy conservation for the isolated pair gives $\delta\energy{Q}'=-\delta\energy{Q}$. If the warmer cavity at temperature $\thermal{T}$ received heat from the cooler one at $\thermal{T}'$, its heat gain $\delta\energy{Q}>0$ would give

$$
d\thermal{S}_{\mathrm{tot}}
=\delta\energy{Q}\left(\frac{1}{\thermal{T}}-\frac{1}{\thermal{T}'}\right)<0.
$$

That violates the second law of thermodynamics. Exchanging the cavity labels rules out the reverse intensity inequality at equal temperatures. Thus $\energy{I}_{\signal{\nu}}'=\energy{I}_{\signal{\nu}}$. The equilibrium blackbody specific intensity is isotropic and is a universal function of temperature and frequency, $\energy{B}_{\signal{\nu}}(\thermal{T})$.

Now consider the first cavity again, with the walls and radiation in equilibrium at temperature $\thermal{T}$. Put a lump of material into the cavity. Assume that its emitted radiation depends on its temperature and internal properties.

![[Kyle Kabasares - Radiative Transfer - Material in a blackbody cavity.png|**Fig. 54** A lump of material at temperature $T$ sits in the path from the cavity to the opening and frequency filter.]]

##### Kirchhoff's law for thermal radiation

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

##### Radio spectrum of a homogeneous thermal plasma

With no incident intensity and a constant thermal source function,

$$
\energy{I}_{\signal{\nu}}(\energy{\tau}_{\signal{\nu}})
=\energy{B}_{\signal{\nu}}(\thermal{T})
\left(1-e^{-\energy{\tau}_{\signal{\nu}}}\right).
$$

##### Optically thin

For $\energy{\tau}_{\signal{\nu}}\ll1$, $\energy{I}_{\signal{\nu}}\simeq\energy{B}_{\signal{\nu}}\energy{\tau}_{\signal{\nu}}$, with $\energy{\tau}_{\signal{\nu}}\simeq\energy{\alpha}_{\signal{\nu}}^{\mathrm{ff}}\mechanical{L}$ in a uniform medium of length $\mechanical{L}$. Multiplying the radio-frequency opacity by the Rayleigh–Jeans function gives

$$
\energy{I}_{\signal{\nu}}\propto
\frac{\mechanical{n}_e\mechanical{n}_i}{\signal{\nu}^2\thermal{T}^{3/2}}
(\signal{\nu}^2\thermal{T})\mechanical{L}
=\frac{\mechanical{n}_e\mechanical{n}_i\mechanical{L}}{\sqrt{\thermal{T}}}.
$$

The source writes $\thermal{T}^{1/2}$ in the intermediate denominator. Its final scaling follows from the $\thermal{T}^{3/2}$ opacity denominator on the preceding page.

##### Optically thick

For $\energy{\tau}_{\signal{\nu}}\gg1$, the intensity approaches the Rayleigh–Jeans spectrum, $\energy{I}_{\signal{\nu}}\simeq\energy{B}_{\signal{\nu}}=2k_{\mathrm B}\thermal{T}\signal{\nu}^2/c^2$.

![[Kyle Kabasares - Radiative Transfer - Radio free–free turnover.png|**Fig. 56** The radio spectrum rises as $\nu^2$ in the optically thick, self-absorbed region and is approximately flat in the optically thin region.]]

Measurements on both sides of the radio turnover, together with an estimate of the source size, can be used to infer the total gas mass.

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{I}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Specific intensity | Radiated power per unit projected area, solid angle, and frequency. |
| $\energy{I}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}}$ | Frequency-integrated intensity | Specific intensity integrated over frequency. |
| $\energy{j}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot Hz^{-1}\cdot sr^{-1}\cdot cm^{-3}}$ | Emission coefficient | Specific intensity added by spontaneous emission per unit path length. |
| $\mechanical{n}$ | $\unit{cm^{-3}}$ | Number density | Number of absorbers per unit volume. |
| $\energy{\alpha}_{\signal{\nu}}$ | $\unit{cm^{-1}}$ | Absorption coefficient | Fractional loss of specific intensity per unit path length. |
| $\energy{\tau}_{\signal{\nu}}$ | $1$ | Optical depth | Absorption coefficient integrated along a path. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $\energy{S}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Incident energy flux | Electromagnetic energy incident per unit time and area. |
| $\thermal{T}$ | $\unit{K}$ | Brightness temperature | Temperature inferred from the intensity in the Rayleigh–Jeans limit in this section. |
| $\energy{\epsilon}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-3}\cdot Hz^{-1}}$ | Volume emissivity | Radiated power per unit volume and frequency, integrated over direction. |
| $\energy{S}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Source function | Ratio of the emission coefficient to the absorption coefficient. |
| $\energy{B}_{\signal{\nu}}(\thermal{T})$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Planck function | Specific intensity of equilibrium blackbody radiation. |
