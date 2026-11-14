---
title: "Natural and Doppler broadening and the Voigt profile"
---

> [!TLDR]
> Derive natural and Doppler line shapes and combine them to predict line-center opacity and the Voigt profile.

## Worked lecture material

##### Natural line broadening

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

#### Line profiles and natural broadening

Rybicki and Lightman, §10.6. For the classical oscillator,

$$
\mechanical{\sigma}(\signal{\nu})=\mechanical{\sigma}_{\mathrm{classical}}\phi(\signal{\nu}),
\qquad
\phi(\signal{\nu})=\frac{\Gamma/(4\pi^2)}{(\signal{\nu}-\signal{\nu}_0)^2+(\Gamma/(4\pi))^2}.
$$

Here $\phi$ is the absorption line profile. Emission and absorption profiles can differ. The spectrum from the electric field of the decaying classical oscillator has the same line shape in this model.

The natural emission profile for the classical oscillator is the same Lorentzian $\phi(\signal{\nu})$. Its half-maximum points are $\signal{\nu}_0\pm\Gamma/(4\pi)$, giving full width at half maximum $\Delta\signal{\nu}=\Gamma/(2\pi)$. The wings are broader than those of a Gaussian.

![[Kyle Kabasares - Radiative Transfer - Natural line profile.png|**Fig. 85** Lorentzian line profile with half-maximum points and extended wings.]]

Since $\signal{\lambda}=c/\signal{\nu}$, the wavelength FWHM is $\Delta\signal{\lambda}\simeq(c/\signal{\nu}_0^2)\Gamma/(2\pi)$. With $\Gamma=(\quantity{2.5\times10^{-22}}{s})\signal{\nu}_0^2$, the classical electron oscillator has $\Delta\signal{\lambda}\simeq\quantity{1.2\times10^{-4}}{\text{Å}}$, independent of line wavelength.

For a hydrogen atom in upper state $u$, the quantum-mechanical minimum emission linewidth follows from the Heisenberg uncertainty principle.

The order-of-magnitude lifetime estimate is $(\Delta\energy{E})_{\min}\Delta t\sim h$, so $(\Delta\signal{\nu})_{\min}\sim1/\Delta t\sim A_{u\to\ell}$ for a single decay channel. A higher transition probability gives a shorter lifetime, stronger line, and greater natural width.

An exponentially decaying quantum amplitude has the time dependence $\Psi(x,t)\propto e^{-\Gamma t/2}e^{i\signal{\omega}_0t}$ in the convention used here. The Lorentzian FWHM is $\Gamma/(2\pi)$, where $\Gamma=A_{u\to\ell}$ in the single-channel case.

For hydrogen H$\alpha$, $\signal{\lambda}_0=\quantity{6563}{\text{Å}}$ and $A\simeq\quantity{4.4\times10^7}{s^{-1}}$. Using the order-of-magnitude linewidth $\Delta\signal{\nu}\sim A$ gives

$$
\lvert\Delta\signal{\lambda}\rvert\simeq\frac{c}{\signal{\nu}_0^2}\lvert\Delta\signal{\nu}\rvert
\sim\frac{\signal{\lambda}_0^2}{c} A\simeq\quantity{6\times10^{-4}}{\text{Å}}.
$$

Observed lines are usually much wider than this natural scale.

#### Doppler broadening

An atom in thermal motion emits or absorbs at its rest-frame line frequency. A stationary observer measures a frequency shifted by the atom's velocity (Rybicki and Lightman, p. 287).

For the relativistic Doppler shift of photons, the primed frame is the atom's rest frame and the unprimed frame is the observer's. The atom's speed is $\mechanical{v}$, and $\theta$ is the angle between its velocity and the direction to the observer.

![[Kyle Kabasares - Radiative Transfer - Doppler geometry.png|**Fig. 86** Moving atom, line of sight, and observer.]]

- Online evaluations.
- Final exam Tuesday, June 11, 10:30 a.m.–12:30 p.m.
- Office hours Monday, June 10, 1–2 p.m.

The lecture resumes Doppler broadening. Thermal motion makes the observer's emission or absorption frequency differ from the frequency in the atom's own frame (Rybicki and Lightman, p. 287).

![[Kyle Kabasares - Radiative Transfer - Doppler geometry recap.png|**Fig. 87** Velocity and line-of-sight angle in the lecture recap.]]

#### Relativistic Doppler shift for a photon

The observer measures $\energy{E}=\gamma\energy{E}'(1+\mechanical{v}\cos\theta'/c)$, with $\theta'$ the photon angle in the atom's rest frame, measured relative to the boost direction. For nonrelativistic motion, $\gamma\simeq1$ and the angles in the two frames agree to leading order. Write $\energy{E}=h\signal{\nu}$, $\energy{E}'=h\signal{\nu}_0$ and $\mechanical{v}_x=\mechanical{v}\cos\theta$ to obtain

$$
\signal{\nu}-\signal{\nu}_0\simeq\signal{\nu}_0\frac{\mechanical{v}_x}{c}.
$$

Only the line-of-sight component $\mechanical{v}_x$ contributes to Doppler broadening at this order. A gas of atoms with different velocities produces an emission or absorption profile around $\signal{\nu}_0$.

![[Kyle Kabasares - Radiative Transfer - Gas Doppler broadening.png|**Fig. 88** Random thermal velocities and the broadened spectral line seen by the observer.]]

The observer sees broadening of the line at fixed integrated intensity. To account for the shift in the absorption coefficient, apply the inverse Lorentz transformation. The photon energy in the atom's frame is $\energy{E}'=\gamma\energy{E}(1-\mechanical{v}\cos\theta/c)$, where $\theta$ is measured in the observer's frame. To first order, the atom absorbs at $\signal{\nu}'=\signal{\nu}(1-\mechanical{v}_x/c)$ when the observed frequency is $\signal{\nu}$. Thus in the Doppler approximation $\signal{\alpha}^{\mathrm{obs}}(\signal{\nu})\simeq\signal{\alpha}^{\mathrm{atom}}(\signal{\nu}-\signal{\nu}\mechanical{v}_x/c)$.

Average the shifted coefficient over all velocities. Since $\signal{\alpha}_{\signal{\nu}}=n\mechanical{\sigma}_{\signal{\nu}}$ and $n$ is independent of velocity, the average is determined by the cross section and the one-dimensional Maxwell velocity distribution $P(\mechanical{v}_x)$:

$$
\langle\mechanical{\sigma}^{\mathrm{obs}}(\signal{\nu})\rangle
=\int\mechanical{\sigma}\!\left(\signal{\nu}-\signal{\nu}\frac{\mechanical{v}_x}{c}\right)P(\mechanical{v}_x)\,d\mechanical{v}_x.
$$

##### Thermal Doppler profile

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

The line-center cross section in Rybicki and Lightman, Eq. 10.71, uses $\signal{\lambda}_0$ in ångströms, $\thermal{T}$ in kelvin, and atomic weight $A$. Doppler broadening dominates the centers of most observed lines.

- In a galaxy cluster's intracluster medium, thermal bremsstrahlung comes from a coronal plasma with $k_B\thermal{T}\simeq\quantity{8}{keV}$. For an oxygen line with $h\signal{\nu}_0\simeq\quantity{0.65}{keV}$, $\Delta\signal{\nu}_D/\signal{\nu}_0\sim10^{-3}$, about ten times the natural linewidth.
- In the solar photosphere, $\thermal{T}\sim\quantity{6000}{K}$. For an iron atom with $A=56$, $b\simeq\quantity{1.4}{km\,s^{-1}}$ and $\Delta\signal{\nu}_D/\signal{\nu}_0\sim4\times10^{-6}$, over 100 times the natural width in the example.

With small-scale turbulence, a one-dimensional turbulent velocity $\mechanical{v}_t$ contributes in quadrature:

$$
\Delta\signal{\nu}_D=\frac{\signal{\nu}_0}{c}
\sqrt{\frac{2k_B\thermal{T}}{\mechanical{m}}+\mechanical{v}_t^2}.
$$

The notes describe $\mechanical{v}_t$ as an average turbulent speed and assume the turbulent motions occur on small spatial scales.

##### Microturbulence and the Voigt profile

Microturbulence occurs on scales smaller than the collisional mean free path. The Gaussian broadening formula also applies when the turbulent velocity distribution is Gaussian about the mean velocity.

#### Voigt profile

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

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
| $\mechanical{\sigma}_{\signal{\nu}}$ | $\unit{cm^2}$ | Absorption cross section | Effective area presented by one absorber at frequency $\signal{\nu}$. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $y$ | $1$ | Compton parameter | Mean fractional energy change per scattering times the mean scattering count, using the convention in this section. |
| $\thermal{T}$ | $\unit{K}$ | Brightness temperature | Temperature inferred from the intensity in the Rayleigh–Jeans limit in this section. |
| $\phi(\signal{\nu})$ | $\unit{Hz^{-1}}$ | Normalized line profile | Frequency distribution of a line, normalized to unit integral. |
| $\Gamma$ | $\unit{s^{-1}}$ | Radiative damping rate | Energy decay rate in the weakly damped classical oscillator model. |
| $f_{\ell\to u}$ | — | Absorption oscillator strength | Scales the integrated classical cross section for a transition from the lower to the upper level. |
| $\Delta\signal{\nu}_D$ | $\unit{Hz}$ | Doppler width | Frequency offset at which the Gaussian falls to $1/e$ of its peak. |
| $b$ | $\unit{cm\,s^{-1}}$ | Doppler parameter | Thermal speed scale for the line profile. |
