---
title: "Modern Physics (Physics 10, UC Merced 2014)"
---

> [!TLDR]
> These Physics 10 notes cover special relativity, the experiments that led to quantum theory, wave mechanics, atomic structure, nuclear decay, and classical and quantum statistics.

Source notes by Kyle Kabasares. [[Modern Physics (Physics 10, UC Merced 2014).pdf|Original PDF]].

Transcribed PDF pages 1–116 of 116.

### PDF page 1

#### Lecture of August 29, 2014

Modern Physics with Dr. Menke. Topics include quantization of light, energy, and charge, and chapters 3–9 and 11. The course accepts graphs made with Igor, MATLAB, or R. Excel graphs are excluded.

#### Lecture of September 3, 2014. Quantization of charge

Thomson used cathode rays. The class used Helmholtz coils in the $\electric{e}/\mechanical{m}$ lab.

The cathode-ray apparatus has a negative cathode, a positive anode, a grounded metal plug with another slit, and plates between which a potential difference is applied. Magnets perpendicular to the voltage plates allow the electron speed to be measured.

Faraday's constant is $\electric{F}=N_{\mathrm A}\electric{e}$, the product of Avogadro's constant and the elementary charge. The notes associate this with the 1860s. Stoney used kinetic theory to estimate the elementary charge as about $\quantity{10^{-20}}{C}$. Zeeman's work on spectral lines gave an estimate of $\electric{q}/\mechanical{m}\simeq\quantity{1.6\times10^{11}}{C/kg}$ in magnitude. The values quoted for comparison are

$$
\frac{\electric{e}}{\mechanical{m}_{\mathrm e}}=\quantity{1.759\times10^{11}}{C/kg},
\qquad
\electric{e}=\quantity{1.60\times10^{-19}}{C}.
$$

### PDF page 2

A charge in an external electric field experiences $\mechanical{\mathbf F}=\electric{q}\electric{\mathbf E}$. The **Lorentz force law** includes the magnetic field,

$$
\mechanical{\mathbf F}=\electric{q}(\electric{\mathbf E}+\mechanical{\mathbf v}\times\magnetic{\mathbf B}).
$$

In Thomson's cathode-ray experiment, $\electric{\mathbf E}\perp\magnetic{\mathbf B}$. With only the transverse magnetic field, the magnetic force supplies the centripetal force.

$$
\mechanical{F}_{\mathrm B}
=\lvert\electric{q}\rvert\mechanical{v}\magnetic{B}
=\mechanical{m}\mechanical{a}_{\mathrm c}
=\frac{\mechanical{m}\mechanical{v}^2}{\mechanical{r}},
\qquad
\frac{\lvert\electric{q}\rvert}{\mechanical{m}}=\frac{\mechanical{v}}{\mechanical{r}\magnetic{B}}.
$$

Adjust the crossed electric and magnetic fields so that the forces cancel. Their magnitudes then give $\mechanical{v}=\electric{E}/\magnetic{B}$. Combining the measurements yields

$$
\frac{\lvert\electric{q}\rvert}{\mechanical{m}}=\frac{\electric{E}}{\mechanical{r}\magnetic{B}^2}.
$$

The notes give Thomson's estimate as $\quantity{1.7\times10^{11}}{C/kg}$. The conclusions listed are that the particles carry one unit of negative charge, have mass roughly $1/2000$ of that of $\mathrm H^+$, and are constituents of all known atoms.

### PDF page 3

#### Lecture of September 5, 2014. Blackbody radiation

Hot objects glow, as with lava. People and dashboards radiate at wavelengths we cannot see, as illustrated by the infrared vision in *Predator*. The notes quote *Spinal Tap*, “None more black.”

A **blackbody** is a perfect absorber and emitter. Its spectrum has four features.

1. Blackbodies at the same temperature emit the same spectrum regardless of material.
2. The visible rainbow is only a portion of the continuous spectrum.
3. Increasing the temperature shifts the peak intensity toward shorter wavelengths.
4. The total radiated power increases with temperature.

**Wien's displacement law** gives $\signal{\lambda}_{\max}\thermal{T}=\quantity{2.898\times10^{-3}}{m\,K}$. The **Stefan–Boltzmann law** gives the total emitted power per area.

$$
\energy{R}(\thermal{T})=\int_0^\infty \energy{I}(\signal{\lambda},\thermal{T})\,d\signal{\lambda}
=\varepsilon\sigma\thermal{T}^4,
\qquad
\sigma=\quantity{5.6705\times10^{-8}}{W\,m^{-2}\,K^{-4}},
$$

where $\varepsilon$ is the emissivity. The Rayleigh–Jeans spectral exitance and Planck spectral energy density in the notes are

$$
\energy{I}(\signal{\lambda},\thermal{T})=\frac{2\pi c k_{\mathrm B}\thermal{T}}{\signal{\lambda}^4},
\qquad
\energy{u}(\signal{\lambda})=\frac{8\pi hc\,\signal{\lambda}^{-5}}{\exp[hc/(\signal{\lambda}k_{\mathrm B}\thermal{T})]-1}.
$$

### PDF page 4

The notes write $\bar{\energy{E}}=\energy{E}_{\mathrm{avg}}$. The classical mean oscillator energy is $k_{\mathrm B}\thermal{T}$. The quantized energy is $\energy{E}_n=nh\signal{f}$, with frequency $\signal{f}$ and proportionality constant $h$. The next topic listed is the Big Bang theory.

#### Example. Momentum transfer by light

The given values are $\energy{P}=\quantity{100}{W}$, $\mechanical{m}=\quantity{2\times10^{-3}}{kg}$, and $\Delta\mechanical{t}=\quantity{10^4}{s}$. The total light energy and momentum transferred on absorption are

$$
\begin{aligned}
\energy{E}_{\mathrm{tot}}&=\energy{P}\Delta\mechanical{t}=\quantity{10^6}{J},\\
\Delta\mechanical{p}&=\frac{\energy{E}_{\mathrm{tot}}}{c}
=\frac{\quantity{10^6}{J}}{\quantity{3\times10^8}{m/s}}
\simeq\quantity{3.3\times10^{-3}}{J\,s/m}.
\end{aligned}
$$

The object starts at rest, so $\Delta\mechanical{p}=\mechanical{m}(\mechanical{v}_{\mathrm f}-\mechanical{v}_0)=\mechanical{m}\mechanical{v}_{\mathrm f}$. Its final speed and kinetic energy are

$$
\mechanical{v}_{\mathrm f}=\frac{\Delta\mechanical{p}}{\mechanical{m}}\simeq\quantity{1.67}{m/s},
\qquad
\energy{K}=\frac12\mechanical{m}\mechanical{v}_{\mathrm f}^2\simeq\quantity{2.78\times10^{-3}}{J}.
$$

#### Lecture of September 8, 2014. Quantization of light

In the quantum description of blackbody radiation, $\energy{E}=nh\signal{\nu}=nh\signal{f}$ with $n=1,2,3,\ldots$ for the nonzero amounts exchanged. Light is absorbed or emitted in discrete quanta. An oscillator has a discrete set of allowed energy levels, while classical mechanics permits a continuous range of energies. Emission and absorption are associated with transitions between two levels.

### PDF page 5

The oscillator emits the energy it loses or absorbs the energy it gains as a quantum of radiant energy of magnitude $h\signal{\nu}$. The notes compare continuous classical integration $\int d\energy{E}$ with the quantum sum $\sum_{i=1}^N\Delta\energy{E}_i$. In the margin, Ohm's law $\circuit{V}=\circuit{I}\circuit{R}$ is compared to a straight line $y=mx$ of slope $m=y/x$.

#### Photoelectric apparatus

$L$ labels the light, $C$ the negative cathode, and $A$ the positive anode. The voltmeter symbol denotes the potential difference. The labels $\alpha$ and $\beta$ mark electron detection by measuring a current. The circle denotes the part that applies a magnetic field.

The experiment can vary the incident angle, intensity, and wavelength or frequency of the light, the potential difference between cathode and anode, the magnetic-field strength, the residual gas in the tube, and the cathode material.

The incident photon supplies energy for the work function and the electron's kinetic energy.

$$
h\signal{f}=\frac12\mechanical{m}\mechanical{v}^2+\energy{\phi},
\qquad
\energy{E}_{\mathrm k}=\frac12\mechanical{m}\mechanical{v}^2=h\signal{f}-\energy{\phi}.
$$

A photon must supply more energy than the work function $\energy{\phi}$ for an electron to leave with nonzero kinetic energy. The handwritten second equation uses an equals sign where the first equation gives subtraction.

The joule is the SI unit of energy. An electron volt is the energy associated with an elementary charge passing through one volt, $\quantity{1}{eV}\simeq(\quantity{1.6\times10^{-19}}{C})(\quantity{1}{V})=\quantity{1.6\times10^{-19}}{J}$.

### PDF page 6

#### Lecture of September 10, 2014. Quantization of charge, light, and energy

In the photoelectric apparatus the notes trace the electron flow from the cathode to the detector labeled $\alpha$. For light with $c=\signal{\lambda}\signal{f}$, the stopping potential is

$$
\electric{V}_0=\frac{hc}{\electric{e}\signal{\lambda}}-\frac{\energy{\phi}}{\electric{e}}.
$$

For $\signal{\lambda}=\quantity{400}{nm}$, use $h=\quantity{6.626\times10^{-34}}{J\,s}$ and $c=\quantity{2.9989\times10^8}{m/s}$ to obtain $h\signal{f}=hc/\signal{\lambda}\simeq\quantity{3.10}{eV}$. With $\energy{\phi}=\quantity{2.93}{eV}$, the stopping energy is $\electric{e}\electric{V}_0=h\signal{f}-\energy{\phi}=\quantity{0.17}{eV}$ and $\electric{V}_0=\quantity{0.17}{V}$. In Einstein's explanation a single electron absorbs the entire photon energy.

#### Röntgen's findings

- Many materials transmit X-rays. A hand casts a faint shadow with darker shadows where the bones lie. Lead glass is comparatively opaque.
- Many substances besides barium platinocyanide fluoresce. X-rays expose photographic plates and films.
- In the experiments described, Röntgen did not observe ordinary reflection or refraction. A magnet did not deflect the rays.
- X-rays discharge either positively or negatively charged objects.
- X-rays are produced when cathode rays strike a solid target.

### PDF page 7

#### Bragg scattering and X-ray crystallography

![[Kyle Kabasares - Modern Physics - Laue diffraction.png|**Fig. 1** X-rays scatter from the crystal and produce Laue spots on a photographic plate.]]

The spots demonstrate the wave behavior of X-rays. The regular spacing of crystal planes is suitable for diffraction. The Bragg condition is

$$
2\mechanical{d}\sin\theta=n\signal{\lambda},
\qquad n=1,2,3,\ldots
$$

The **Duane–Hunt rule** relates the short-wavelength limit of the X-ray spectrum to the maximum electron kinetic energy, $\energy{K}_{\max}=hc/\signal{\lambda}_{\min}$.

#### Lecture of September 12, 2014. Quantization and atomic structure

In the **Compton effect**, an incident photon scatters from a free electron initially at rest. The notes treat this as an elastic collision and relate the more readily absorbed scattered radiation to lower photon energy. Compton scattering verified the particle behavior of light.

The photoelectric effect uses incident light to eject electrons. X-ray production uses incident electrons to produce light, which the notes call the inverse photoelectric effect.

![[Kyle Kabasares - Modern Physics - Compton scattering.png|**Fig. 2** A photon of energy $h\signal{f}$ scatters through angle $\theta$, and the electron recoils.]]

### PDF page 8

The Compton wavelength shift is

$$
\signal{\lambda}_2-\signal{\lambda}_1=\frac{h}{\mechanical{m}_{\mathrm e}c}(1-\cos\theta).
$$

The factor $h/(\mechanical{m}_{\mathrm e}c)$ has units of length. It is the electron Compton wavelength, approximately $\quantity{0.00243}{nm}$.

#### Quantization recap

- Millikan used oil drops to measure the electron charge.
- Thomson used cathode rays to measure $\electric{e}/\mechanical{m}_{\mathrm e}$ and identify subatomic particles.
- Planck used $\Delta\energy{E}=nh\signal{f}$ in blackbody radiation, quantizing the energy exchanged.
- Einstein used photons to explain the photoelectric effect.
- Compton's X-ray spectra confirmed the photon description of light.

Spectra distinguish energy levels and provide evidence of atomic structure. The Bohr atom was a step toward a fuller model.

#### Lecture of September 15, 2014. Atomic structure and Rutherford scattering

Classically, a charge accelerating in an atomic orbit would radiate continuously, so the electric force alone cannot account for a stable atom. Thomson's model also failed to account for the observed large-angle deflections of alpha particles.

An alpha particle is a helium nucleus. The notes identify the beta particle in beta-minus decay as an ejected electron. The decay is $n\to p^++e^-+\bar\nu_{\mathrm e}$. The handwriting labels the last particle a neutrino, with the electron antineutrino implied by the decay shown.

### PDF page 9

A gamma ray ($\gamma$) is a very high-energy photon.

#### Rutherford's nuclear model

1. The scattering nucleus is so massive that it recoils negligibly, so $\energy{K}_{\alpha,\mathrm i}\simeq\energy{K}_{\alpha,\mathrm f}$.
2. The target is thin enough for a single scattering event to dominate.
3. Treat the incident particle and scattering nucleus as point charges and point masses.
4. Include only the Coulomb force.

#### Measuring Rutherford scattering

An incoming particle with impact parameter no greater than $\mechanical{b}$ scatters by an angle $\theta$ or larger, where $\theta$ is measured from the original beam direction. Counts at the detector give the fraction $f$ of incident particles scattered by at least this angle. The integrated cross section and scattered fraction for a thin target are

$$
\sigma=\pi\mechanical{b}^2,
\qquad
f=nt\,\pi\mechanical{b}^2
=nt\,\pi\left(\frac{Z_1Z_2\electric{e}^2}{8\pi\epsilon_0\energy{K}}\right)^2\cot^2\!\left(\frac\theta2\right).
$$

Here $nt$ is the number of scattering nuclei per unit area, $t$ is foil thickness, $\mechanical{A}$ is foil area, and $\energy{K}$ is the incident kinetic energy. The handwritten definition describes $f$ as the frequency of detector strikes. In the equation it is the dimensionless fraction of incoming particles counted. The two crossed-out sketches on the page are marked “Disregard.”

### PDF page 10

The fraction of particles scattered through $\theta$ or larger equals the total effective scattering area divided by the foil area. The number of scattering nuclei is $(nt)\mechanical{A}$, so

$$
f=\frac{[(nt)\mechanical{A}]\sigma}{\mechanical{A}}=nt\sigma
=nt\,\pi\left[\frac{(Z_1\electric{e})(Z_2\electric{e})}{8\pi\epsilon_0\energy{K}}
\cot\!\left(\frac{\theta}{2}\right)\right]^2,
\qquad \sigma=\pi\mechanical{b}^2.
$$

Here $\energy{K}$ is the alpha particle's kinetic energy, $Z_1\electric{e}$ its charge, and $Z_2\electric{e}$ the target nucleus's charge.

#### Lecture of September 17. Atomic structure

The handwritten date reads 2018, although the surrounding lectures and course title give 2014. Topics include discovery of the nucleus. The technical report filename format is `Lab#_lastname1_lastname2.pdf`.

The Rutherford scattering equation gives the scattered count per detector area at angle $\theta$ and radius $\mechanical{r}$ as

$$
N(\theta)=\frac{N_{\mathrm i}nt}{16}
\left(\frac{\electric{e}^2}{4\pi\epsilon_0}\right)^2
\frac{Z_1^2Z_2^2}{\mechanical{r}^2\energy{K}^2\sin^4(\theta/2)}.
$$

Scattering scales with the squares of the charge numbers of the incident particle and target, inversely with $\energy{K}^2$ and $\sin^4(\theta/2)$, and directly with the target thickness.

The example takes $\energy{K}=\quantity{7.7\times10^6}{eV}$, $Z_1=2$, $Z_2=79$, foil thickness $\quantity{1\times10^{-6}}{m}$, and $\theta=90^\circ$.

### PDF page 11

![[Kyle Kabasares - Modern Physics - Alpha particle deflection by gold.png|**Fig. 3** An incident alpha particle is deflected by a gold nucleus. The angle $\theta$ is measured from the incident direction.]]

The number density of gold atoms is $n=\mechanical{\rho}N_{\mathrm A}N_{\mathrm m}/M_{\mathrm g}$, where $\mechanical{\rho}=\quantity{19.3}{g/cm^3}$, $M_{\mathrm g}=\quantity{197}{g/mol}$, $N_{\mathrm A}\simeq\quantity{6.022\times10^{23}}{mol^{-1}}$, and $N_{\mathrm m}=1$ atom per counted entity. Hence

$$
n\simeq\quantity{5.90\times10^{22}}{cm^{-3}}=\quantity{5.90\times10^{28}}{m^{-3}}.
$$

For the first example,

$$
f=\pi nt\left(\frac{\electric{e}^2}{4\pi\epsilon_0}\right)^2
\left(\frac{Z_1Z_2}{2\energy{K}}\right)^2\cot^2(\theta/2)
\simeq4\times10^{-5}.
$$

#### Rutherford scattering example 2

Use $\energy{K}=\quantity{7.7\times10^6}{eV}$, $Z_1=2$, $Z_2=79$, $t=\quantity{2.1\times10^{-7}}{m}$, $\mechanical{r}=\quantity{1.0}{cm}$, and $n=\quantity{5.90\times10^{28}}{m^{-3}}$. The boxed result for the count per detector area divided by the incident count is $N(\theta)/N_{\mathrm i}=\quantity{3.2\times10^{-7}}{mm^{-2}}$.

### PDF page 12

#### Balmer series and Rydberg–Ritz formula

$$
\signal{\lambda}=(\quantity{364.6}{nm})\frac{n^2}{n^2-4},
\qquad n=3,4,5,\ldots
$$

The more general formula is $1/\signal{\lambda}_n=R(1/m^2-1/n^2)$ for $n>m$. The notes give $R_\infty=\quantity{1.09737\times10^7}{m^{-1}}$ and $R_{\mathrm H}=\quantity{1.09678\times10^7}{m^{-1}}$.

#### Substitution for Rutherford example 1

First convert $\energy{K}=\quantity{7.7\times10^6}{eV}\simeq\quantity{1.23\times10^{-12}}{J}$. Then

$$
f=\pi(\quantity{5.90\times10^{28}}{m^{-3}})(\quantity{1.0\times10^{-6}}{m})
\left[\frac{(2)(79)(\quantity{1.6\times10^{-19}}{C})^2}
{8\pi(\quantity{8.85\times10^{-12}}{C^2/(N\,m^2)})(\quantity{1.23\times10^{-12}}{J})}\right]^2
\cot^2(45^\circ).
$$

The area from the square brackets cancels the inverse area of $nt$.

#### Lecture of September 19, 2014. Bohr model of hydrogen

The notes call Bohr the “father of the atom.” His stationary states have definite total energy. An electron in a stationary state does not continuously radiate electromagnetic energy. For an emission transition, $\Delta\energy{E}=\energy{E}_1-\energy{E}_2=h\signal{\nu}$ with $\energy{E}_1>\energy{E}_2$. Classical physics describes the dynamical equilibrium of each stationary state, while transitions are governed by the quantum postulate. The mean kinetic energy is $\bar{\energy{K}}=nh\signal{f}_{\mathrm{orb}}/2$. The handwritten line also repeats this without the factor $1/2$.

### PDF page 13

The orbital angular momentum is quantized in units of $\hbar$. The preceding mean kinetic energy relation is $nh\signal{f}/2$ for orbital frequency $\signal{f}$.

![[Kyle Kabasares - Modern Physics - Bohr circular orbit.png|**Fig. 4** The electron's velocity is tangent to its circular orbit and the Coulomb force points inward.]]

The angular momentum is $\mechanical{\mathbf L}=\mechanical{\mathbf r}\times\mechanical{\mathbf p}=\mechanical{\mathbf r}\times\mechanical{m}_{\mathrm e}\mechanical{\mathbf v}$. Since $\mechanical{\mathbf r}$ and $\mechanical{\mathbf v}$ are perpendicular,

$$
\lVert\mechanical{\mathbf L}\rVert=\mechanical{r}\mechanical{m}_{\mathrm e}\mechanical{v}=n\hbar,
\qquad n\text{ an integer}.
$$

The Coulomb force in vacuum supplies the centripetal force and gives the classical orbital speed.

$$
\mechanical{F}=\frac{\electric{e}^2}{4\pi\epsilon_0\mechanical{r}^2}
=\frac{\mechanical{m}_{\mathrm e}\mechanical{v}^2}{\mechanical{r}},
\qquad
\mechanical{v}=\frac{\electric{e}}{\sqrt{4\pi\epsilon_0\mechanical{m}_{\mathrm e}\mechanical{r}}}.
$$

The mechanical energy is

$$
\energy{E}_{\mathrm{mech}}=\energy{K}+\energy{U}
=\frac12\mechanical{m}_{\mathrm e}\mechanical{v}^2-\frac{\electric{e}^2}{4\pi\epsilon_0\mechanical{r}}
=-\frac{\electric{e}^2}{8\pi\epsilon_0\mechanical{r}}.
$$

The negative energy indicates a bound system.

### PDF page 14

Bohr's assumption D is $\mechanical{L}=\mechanical{m}_{\mathrm e}\mechanical{v}\mechanical{r}=n\hbar$. Equate the resulting speed to the Coulomb-orbit speed.

$$
\mechanical{v}=\frac{n\hbar}{\mechanical{m}_{\mathrm e}\mechanical{r}}
=\frac{\electric{e}}{\sqrt{4\pi\epsilon_0\mechanical{m}_{\mathrm e}\mechanical{r}}}.
$$

Squaring and solving gives the quantized radii.

$$
\mechanical{r}_n=\frac{4\pi\epsilon_0n^2\hbar^2}{\mechanical{m}_{\mathrm e}\electric{e}^2}
=n^2\mechanical{a}_0,
\qquad
\mechanical{a}_0=\quantity{0.529\times10^{-10}}{m}.
$$

Here $\mechanical{a}_0$ is the **Bohr radius**. Insert $\mechanical{r}_n$ into the orbital energy to obtain

$$
\energy{E}_n=-\frac{\electric{e}^2}{8\pi\epsilon_0\mechanical{r}_n}
=-\left(\frac{\electric{e}^2}{8\pi\epsilon_0\mechanical{a}_0}\right)\frac1{n^2}
=-\frac{\energy{E}_0}{n^2}.
$$

The notes give $\energy{E}_0=\quantity{13.6024}{eV}$, rounded to $\quantity{13.6}{eV}$. This is the magnitude of the ground-state energy.

### PDF page 15

For emission from an upper state to a lower state, $h\signal{f}=\energy{E}_{\mathrm u}-\energy{E}_{\mathrm l}$. Since $\signal{\lambda}\signal{f}=c$, the Bohr energies give

$$
\frac1{\signal{\lambda}}=\frac{\signal{f}}c
=\frac{\energy{E}_{\mathrm u}-\energy{E}_{\mathrm l}}{hc}
=\frac{\energy{E}_0}{hc}\left(\frac1{n_{\mathrm l}^2}-\frac1{n_{\mathrm u}^2}\right).
$$

This reproduces the Rydberg–Ritz formula. Neglecting nuclear recoil gives $R_\infty=\energy{E}_0/(hc)=\quantity{1.09737\times10^7}{m^{-1}}$. The hydrogen value quoted here is $R_{\mathrm H}=\quantity{1.096776\times10^7}{m^{-1}}$. Quantized angular momentum leads to quantization of the other orbital quantities.

#### Successes and limitations of the Bohr model

| Successes | Limitations |
| --- | --- |
| Explained the hydrogen spectrum, including the Lyman, Balmer, and Paschen series. | Applies only to hydrogenic, one-electron atoms. |
| Accurately predicted previously unknown spectral lines. | Could not account for line intensities or fine structure. |
| Expressed the Rydberg constant in terms of known constants. | Could not explain how atoms bond into molecules. |
|  | The assumptions lacked a physical foundation. |

Sommerfeld included relativistic effects and explained some of the fine structure.

### PDF page 16

#### Lecture of September 22, 2014. Atomic structure and the wave nature of matter

The Bohr model gives $\mechanical{r}_n=n^2\mechanical{a}_0$ and $\energy{E}_n=-\energy{E}_0/n^2$. The notes leave the speed as “$v_n=$ something” before deriving the orbital frequency.

At high quantum numbers, where the classical and quantum theories should agree, quantum theory must reduce to the classical result. For a circular orbit,

$$
\signal{f}_{\mathrm{orb}}=\frac{\mechanical{\omega}}{2\pi}=\frac{\mechanical{v}}{2\pi\mechanical{r}},
\qquad
\mechanical{v}=\frac{\electric{e}}{\sqrt{4\pi\epsilon_0\mechanical{m}_{\mathrm e}\mechanical{r}}}.
$$

With $\mechanical{r}_n=n^2\mechanical{a}_0$,

$$
\begin{aligned}
\signal{f}_{\mathrm{orb}}
&=\frac{\electric{e}}{2\pi\sqrt{4\pi\epsilon_0\mechanical{m}_{\mathrm e}\mechanical{r}_n^3}}\\
&=\frac{\electric{e}}{2\pi\sqrt{4\pi\epsilon_0\mechanical{m}_{\mathrm e}\mechanical{a}_0^3}}\frac1{n^3}
=\frac{\mechanical{m}_{\mathrm e}\electric{e}^4}{4\epsilon_0^2h^3}\frac1{n^3}.
\end{aligned}
$$

The square on $\epsilon_0$ follows from substituting the Bohr radius. In the large-$n$ limit the classical orbital frequency agrees with the radiation frequency of a transition between adjacent levels.

### PDF page 17

For the sequence $(n+1)\to n\to(n-1)\to\cdots$, the energy lost in each transition is $\Delta\energy{E}=h\signal{f}_{\mathrm{Bohr}}$. For the first transition,

$$
\begin{aligned}
\signal{f}_{\mathrm{Bohr}}
&=\frac{\energy{E}_0}{h}\left(\frac1{n^2}-\frac1{(n+1)^2}\right)
=\frac{\energy{E}_0}{h}\frac{2n+1}{n^2(n+1)^2}\\
&\simeq\frac{2\energy{E}_0}{hn^3}
=\frac{\mechanical{m}_{\mathrm e}\electric{e}^4}{4\epsilon_0^2h^3n^3}
=\signal{f}_{\mathrm{orb}}\quad(n\gg1).
\end{aligned}
$$

The exponent of $\epsilon_0$ is fixed by substitution for $\energy{E}_0$.

#### X-ray spectra

Classical physics accounts for the bremsstrahlung continuum. Bohr's theory accounts for the discrete peaks as transitions. The $K$ and $L$ series correspond to transitions into the respective shells. The cutoff relation is $\energy{E}_{\mathrm k}=hc/\signal{\lambda}_{\min}$. At this stage the model leaves the shell populations and the reason for shell formation unexplained.

| Principal quantum number | Shell name |
| --- | --- |
| $n=1$ | $K$ |
| $n=2$ | $L$ |
| $n=3$ | $M$ |

A $K$ electron is an electron in the $n=1$ shell.

### PDF page 18

The X-ray photon energy is $\energy{E}_{\mathrm{X}}=\energy{E}_{\mathrm{upper}}-\energy{E}_{\mathrm{lower}}$.

| Electron transition | X-ray line | $\Delta n$ |
| --- | --- | --- |
| $L\to K$ | $K_\alpha$ | $1$ |
| $M\to K$ | $K_\beta$ | $2$ |
| $M\to L$ | $L_\alpha$ | $1$ |

The notes associate $\Delta n=1,2,3,4,5$ with $\alpha,\beta,\gamma,\delta,\varepsilon$, respectively.

#### Moseley and atomic number

$$
\sqrt{\signal{f}}=A_n(Z-b),
\qquad
A_n^2=cR_\infty\left(1-\frac1{n^2}\right).
$$

The nuclear charge is $Z\electric{e}$. With one electron in the $K$ shell, an $L$-shell electron sees an effective charge of approximately $(Z-1)\electric{e}$. The subtraction $Z-b$ in Moseley's law accounts for screening.

### PDF page 19

#### Lecture of September 24. The wave nature of matter

The handwritten date reads 2015. If light behaves like particles, can particles behave like waves? The de Broglie wavelength is $\signal{\lambda}=h/\mechanical{p}$, where $\mechanical{p}$ is the momentum magnitude.

#### Davisson–Germer experiment

The notes describe this as the first experimental evidence of electron waves. The atomic spacing is $\mechanical{D}$ and the Bragg plane spacing is $\mechanical{d}=\mechanical{D}\sin\alpha$.

![[Kyle Kabasares - Modern Physics - Davisson–Germer geometry.png|**Fig. 5** An incident electron beam scatters from the crystal into an intense reflected beam. The drawing relates the plane spacing to the interatomic spacing.]]

With the angle labeled $\phi=2\alpha$ in the derivation,

$$
n\signal{\lambda}=2\mechanical{D}\sin\alpha\cos\alpha
=\mechanical{D}\sin(2\alpha)=\mechanical{D}\sin\phi.
$$

Thus $\signal{\lambda}=\mechanical{D}\sin\phi$ in first order. The electron diffraction demonstrates wavelike behavior.

For a tennis ball of mass $\quantity{57}{g}$ moving at $\quantity{25}{m/s}$,

$$
\signal{\lambda}=\frac{h}{\mechanical{m}\mechanical{v}}
=\frac{\quantity{6.626\times10^{-34}}{J\,s}}{(\quantity{0.057}{kg})(\quantity{25}{m/s})}
\simeq\quantity{4.7\times10^{-34}}{m}.
$$

For an electron with $\energy{K}=\quantity{50}{eV}$,

$$
\signal{\lambda}=\frac{h}{\sqrt{2\mechanical{m}_{\mathrm e}\energy{K}}}
=\frac{hc}{\sqrt{2(\mechanical{m}_{\mathrm e}c^2)\energy{K}}}
\simeq\quantity{0.17}{nm}.
$$

The numerical substitution uses $hc\simeq\quantity{1240}{eV\,nm}$ and $\mechanical{m}_{\mathrm e}c^2\simeq\quantity{0.511\times10^6}{eV}$. The unit attached to 1240 in the handwriting appears to be $\unit{eV\,m}$, but the boxed result uses nanometers.

### PDF page 20

#### Interference of neutrons

Gähler and Zeilinger performed interference experiments at low intensities with neutrons moving at about $\quantity{2}{km/s}$. Photons, electrons, and neutrons can all produce interference patterns in a double-slit experiment.

#### Lecture of September 26, 2014. Probability and its role

Integrating probability density over a region gives probability, just as integrating mass density over a region gives mass. The wave function extends de Broglie's wave description of matter. The notes give a separated wave function $\Psi(\mathbf r,t)=\psi(\mathbf r)\phi(t)$ and distinguish the uppercase $\Psi$ from the lowercase $\psi$ and $\phi$.

The product $\Psi^*\Psi$ is real. Integrate it over all space using the volume element $d\tau$ to get a probability of one for finding the particle somewhere.

$$
\int_{\mathbb R^3}\Psi^*(\mathbf r,t)\Psi(\mathbf r,t)\,d\tau=1.
$$

#### Postulate of quantum mechanics

The normalized wave function $\Psi(\mathbf r,t)$ completely specifies the pure state of the system. From the wave function one can determine what the theory predicts about the particle, including probabilities for the results of measurements.

### PDF page 21

#### Classical wave equation

$$
\frac{\partial^2\Psi}{\partial x^2}=\frac1{\signal{v}^2}\frac{\partial^2\Psi}{\partial t^2},
\qquad
\signal{\lambda}=\signal{v}\signal{T},\qquad \signal{v}=\signal{\lambda}\signal{f}.
$$

A sinusoidal wave traveling in the positive $x$ direction has the form

$$
\Psi(x,t)=A\sin(\signal{k}x-\signal{\omega}t)+B\cos(\signal{k}x-\signal{\omega}t)
=A'\sin(\signal{k}x-\signal{\omega}t+\phi).
$$

Here $\phi$ is a phase shift, $\signal{\omega}=2\pi/\signal{T}=2\pi\signal{f}$, and the wave number is $\signal{k}=2\pi/\signal{\lambda}$.

#### Interference

Add two cosine waves of the same amplitude and use the sum-to-product identity.

$$
\begin{aligned}
\Psi(x,t)&=A\cos(\signal{k}_1x-\signal{\omega}_1t)+A\cos(\signal{k}_2x-\signal{\omega}_2t)\\
&=2A\cos\!\left(\frac{\Delta\signal{k}}2x-\frac{\Delta\signal{\omega}}2t\right)
\cos(\signal{k}_{\mathrm{avg}}x-\signal{\omega}_{\mathrm{avg}}t).
\end{aligned}
$$

The phase velocity is $\signal{v}_{\mathrm{ph}}=\signal{\omega}/\signal{k}=\signal{\lambda}\signal{f}$ and may exceed $c$. The packet envelope travels at the group velocity, $\signal{v}_{\mathrm{gr}}=\Delta\signal{\omega}/\Delta\signal{k}$ for these two waves. The handwritten group-velocity line uses the average ratio, which gives the phase velocity of the carrier in the product above.

![[Kyle Kabasares - Modern Physics - Phase and group velocity.png|**Fig. 6** The oscillations within the packet propagate at the phase velocity, while the envelope propagates at the group velocity.]]

### PDF page 22

A wave packet can be represented by a Fourier series of components,

$$
\Psi(x,t)=\sum_i^\infty A_i\cos(\signal{k}_ix-\signal{\omega}_it).
$$

The midterm study list names Niels Bohr, Robert Millikan, Albert Einstein, Max Planck, Ernest Rutherford, Arthur Compton, and J. J. Thomson as key figures in the quantum revolution.

#### Lecture of September 29, 2014. The wave nature of matter and the role of probability

The notes remind students to print the crib sheet for the Friday midterm, which covers the lectures, photoelectric lab, and homework.

The probability of an outcome $A$ is the limiting fraction of trials that produce it. For disjoint outcomes $A$ and $B$,

$$
P(A)=\lim_{N_{\mathrm{tot}}\to\infty}\frac{N_A}{N_{\mathrm{tot}}},
\qquad
P(A\cup B)=\lim_{N_{\mathrm{tot}}\to\infty}\frac{N_A+N_B}{N_{\mathrm{tot}}}.
$$

![[Kyle Kabasares - Modern Physics - Counting outcomes in regions.png|**Fig. 7** Trial outcomes are assigned to the center $A$, the surrounding ring $B$, or the outer region $C$.]]

For $30$ rolls of a fair die, the probability of a $1$ or a $6$ on any roll is $1/6+1/6=1/3$. The expected number of such rolls is $30/3=10$.

### PDF page 23

#### Probability density and light intensity

In the wave picture, the pattern has an intensity. In the particle picture, it describes the probability that a photon strikes a given region. The intensity is $\energy{I}=\energy{P}/\mechanical{A}$, energy per time per area.

![[Kyle Kabasares - Modern Physics - Photon detection strip.png|**Fig. 8** A detector strip at position $x$ has width $dx$ and height $H$, giving area $H\,dx$.]]

In one second, the energy falling on the strip is $\energy{I}(x)H\,dx\,\Delta t$ with $\Delta t=\quantity{1}{s}$. Each photon carries energy $h\signal{f}$. The number of photons in the strip is $dN=\energy{I}(x)H\,dx\,\Delta t/(h\signal{f})$. The probability is the count divided by the total photon count.

$$
dP=\frac{dN}{N_{\mathrm{tot}}}
=\frac{H\,\Delta t}{h\signal{f}N_{\mathrm{tot}}}\,\energy{I}(x)\,dx
\propto\lvert\text{amplitude}(x)\rvert^2\,dx.
$$

Thus the photon detection probability density is proportional to the squared magnitude of the light-wave amplitude. The notes use the same fixed one-second interval for all counts.

### PDF page 24

For a normalized wave function, the probability density is $P(x)=\lvert\Psi(x)\rvert^2$. Normalization fixes the overall proportionality constant, since $\int_{-\infty}^{\infty}P(x)\,dx=1$ when all positions are included.

![[Kyle Kabasares - Modern Physics - Wave function nodes.png|**Fig. 9** The sketched wave function has nodes at the circled positions, where the probability density is zero.]]

The notes use the sinusoidal example $\Psi=A\sin(\signal{k}x-\signal{\omega}t+\phi)$, with $A$ an overall normalization constant when the domain permits normalization. A separable spatial wave function in three dimensions is $\Psi(\mathbf r)=X(x)Y(y)Z(z)$.

#### Normalizing a wave function

Take $\Psi(x)=C(1-x/\mechanical{L})$ for $0\le x\le\mechanical{L}$ and zero elsewhere, with $\mechanical{L}=\quantity{1.0}{nm}$.

![[Kyle Kabasares - Modern Physics - Linear wave function.png|**Fig. 10** The example wave function decreases linearly from $C$ at $x=0$ to zero at $x=\mechanical{L}$.]]

$$
\begin{aligned}
1&=\int_{-\infty}^\infty\lvert\Psi\rvert^2\,dx
=C^2\int_0^{\mechanical{L}}\left(1-\frac{2x}{\mechanical{L}}+\frac{x^2}{\mechanical{L}^2}\right)dx\\
&=C^2\left[x-\frac{x^2}{\mechanical{L}}+\frac{x^3}{3\mechanical{L}^2}\right]_0^{\mechanical{L}}
=C^2\frac{\mechanical{L}}3 .
\end{aligned}
$$

The positive choice is $C=\sqrt{3/\mechanical{L}}\simeq\quantity{1.732}{nm^{-1/2}}$.

### PDF page 25

#### Midterm review of September 29, 2014. Blackbody radiation

A blackbody absorbs incident light. A cavity with a small hole approximates a blackbody because incoming light reflects repeatedly inside the cavity and is absorbed.

![[Kyle Kabasares - Modern Physics - Blackbody cavity.png|**Fig. 11** The sketch shows light entering through a small opening and reflecting inside the cavity.]]

The Rayleigh–Jeans spectral radiance is $\energy{I}=2\signal{f}^2 k_{\mathrm B}\thermal{T}/c^2$. Its high-frequency rise is the **ultraviolet catastrophe**. The notes illustrate the contradiction by observing that this prediction would expose an eye looking into the cavity to arbitrarily intense high-frequency radiation. The measured spectrum falls at high frequencies. Color and temperature are related.

![[Kyle Kabasares - Modern Physics - Ultraviolet catastrophe.png|**Fig. 12** The classical prediction continues upward as frequency increases, while the measured spectrum peaks and falls.]]

Planck accounted for blackbody radiation by quantizing oscillator energy as $\energy{E}_n=nh\signal{f}$, where $n$ is an integer. Radiation of a given frequency is associated with oscillators at that frequency and their allowed energy changes. Quantization restricts the energies the oscillator can have. Einstein extended the idea to light itself. A photon is a quantum of light of energy $\energy{E}=h\signal{f}$.

### PDF page 26

#### The photoelectric effect

The classical predictions were that sufficient intensity would eject electrons at any wavelength and that increasing the amplitude would raise the maximum kinetic energy. The experiment instead shows a cutoff frequency $\signal{f}_0$ below which there is no photocurrent. For $\signal{f}>\signal{f}_0$, higher intensity increases the number of emitted electrons, while their maximum kinetic energy is set by the frequency and work function.

A photon has zero rest mass and carries momentum. Its energy obeys $\energy{E}=\mechanical{p}c=h\signal{f}$. Since $\signal{f}/c=1/\signal{\lambda}$,

$$
\mechanical{p}=\frac{h}{\signal{\lambda}},
\qquad
\signal{\lambda}=\frac h{\mechanical{p}}.
$$

The handwritten intermediate line inverts the wavelength relation.

#### Compton scattering

![[Kyle Kabasares - Modern Physics - Compton momentum components.png|**Fig. 13** An incident X-ray travels along $x$. The scattered photon makes angle $\theta$ above the incident direction and the recoil electron makes angle $\phi$ below it.]]

Conservation of momentum gives

$$
\frac{h}{\signal{\lambda}_0}
=\frac{h}{\signal{\lambda}'}\cos\theta+\mechanical{p}_{\mathrm e}\cos\phi,
\qquad
0=\frac{h}{\signal{\lambda}'}\sin\theta-\mechanical{p}_{\mathrm e}\sin\phi.
$$

The incident energy is $hc/\signal{\lambda}_0$. The notes write the outgoing energy above the electron rest energy as $hc/\signal{\lambda}'+\mechanical{p}_{\mathrm e}^2/(2\mechanical{m}_{\mathrm e})$, using the nonrelativistic recoil approximation. The boxed wavelength shift is the relativistic result,

$$
\Delta\signal{\lambda}=\signal{\lambda}_{\mathrm f}-\signal{\lambda}_0
=\frac{h}{\mechanical{m}_{\mathrm e}c}(1-\cos\theta).
$$

The shift depends on the angle at which the photon emerges.

### PDF page 27

Louis de Broglie extended wave–particle duality to matter. If light can act like a particle, a particle can act like a wave with wavelength $\signal{\lambda}=h/\mechanical{p}$.

#### Problems from the slides. Lecture 3, blackbody radiation

Given $\mechanical{m}=\quantity{2\times10^{-3}}{kg}$, $\energy{P}=\quantity{100}{W}$, and $\mechanical{t}=\quantity{10^4}{s}$, the power is $\energy{P}=\energy{W}/\mechanical{t}=\energy{E}/\mechanical{t}$. Thus

$$
\begin{aligned}
\energy{E}&=\energy{P}\mechanical{t}=\quantity{10^6}{J},\\
\mechanical{p}&=\frac{\energy{E}}{c}\simeq\quantity{3.3\times10^{-3}}{J\,s/m},\\
\mechanical{v}_{\mathrm f}&=\frac{\mechanical{p}}{\mechanical{m}}\simeq\quantity{1.65}{m/s},\\
\energy{K}_{\mathrm f}&=\frac12\mechanical{m}\mechanical{v}_{\mathrm f}^2\simeq\quantity{2.72\times10^{-3}}{J}.
\end{aligned}
$$

The initial speed is zero. This version of the example rounds the momentum before computing the final speed. The handwritten momentum unit is inverted. The ratio $\energy{E}/c$ has units $\unit{J\,s/m}$.

#### Lecture 4 problem. Quantization of light

The incident wavelength is $\quantity{400}{nm}$ and lithium has work function $\energy{\phi}=\quantity{2.93}{eV}$. Then

$$
\energy{E}=h\signal{f}=\frac{hc}{\signal{\lambda}}
\simeq\quantity{4.97\times10^{-19}}{J}\simeq\quantity{3.10}{eV}.
$$

Use $\electric{e}\electric{V}_0=h\signal{f}-\energy{\phi}$ to find

$$
\electric{V}_0=\frac{\quantity{3.10}{eV}-\quantity{2.93}{eV}}{\electric{e}}=\quantity{0.17}{V}.
$$

### PDF page 28

#### Lecture of October 1, 2014. Probability and the wave nature of matter

Write the wave function as a normalization constant times its position-dependent part, choosing the constant to satisfy $\int_{-\infty}^{\infty}\lvert\Psi(x)\rvert^2dx=1$.

For the previous example, the normalized density on $0\le x\le\mechanical{L}$ is

$$
P(x)=\lvert\Psi(x)\rvert^2=\frac3{\mechanical{L}}\left(1-\frac{2x}{\mechanical{L}}+\frac{x^2}{\mechanical{L}^2}\right).
$$

The handwritten second line labels this expression $\Psi(x)$. It is the squared wave function from the previous example.

![[Kyle Kabasares - Modern Physics - Linear example probability density.png|**Fig. 14** The density starts at $3/\mechanical{L}$ and falls to zero at the right endpoint.]]

![[Kyle Kabasares - Modern Physics - Simulated position detections.png|**Fig. 15** The dot picture illustrates how experimental detections would cluster near $x=0$ and become sparse toward $x=\mechanical{L}$.]]

The probability for an interval is $\int P(x)\,dx$. For a strip of width $\quantity{0.01}{nm}$ near $x_1=\quantity{0.05}{nm}$, approximate it by $P(x_1)\Delta x$. The handwritten answer is $0.0269=2.69\%$. The displayed inputs give about $0.0271$, depending on rounding or the point used within the strip. For the larger interval from $\quantity{0.50}{nm}$ to $\quantity{0.95}{nm}$, use

$$
\int_{\quantity{0.50}{nm}}^{\quantity{0.95}{nm}}P(x)\,dx.
$$

### PDF page 29

#### Measurement and uncertainty

Measurement disturbs a system. In the classical picture described here, the disturbance can in principle be reduced arbitrarily. It is deterministic and can be corrected for. The notes describe Heisenberg's contribution as identifying fundamental limits set by the quantum of action. In the measurement picture on this page, the disturbance has a lower limit and a statistical character that prevents predicting and correcting it event by event.

A two-wave superposition separates into an envelope and a carrier.

$$
\Psi(x,t)=\underbrace{2A\cos\!\left(\frac{\Delta\signal{k}}2x-\frac{\Delta\signal{\omega}}2t\right)}_{\text{envelope}}
\underbrace{\cos(\signal{k}_{\mathrm{avg}}x-\signal{\omega}_{\mathrm{avg}}t)}_{\text{wave within the envelope}}.
$$

![[Kyle Kabasares - Modern Physics - Envelope width and interference.png|**Fig. 16** The sketches mark consecutive envelope zeros at $x_1$ and $x_2$ and show destructive interference between neighboring lobes.]]

The localized width $\Delta x$ is the positive separation between consecutive envelope zeros, or consecutive maxima in the magnitude of the envelope. At fixed time their phases differ by $\pi$, giving

$$
\frac{\Delta\signal{k}}2(x_2-x_1)=\pi,\qquad
\Delta\signal{k}\,\Delta x=2\pi.
$$

The same argument for $t_1$ and $t_2$ at fixed position gives $\Delta\signal{\omega}\,\Delta t=2\pi$, a response-time and bandwidth relation for this envelope. Here $\Delta\signal{k}$ is the wave-number range and $\Delta\signal{\omega}$ is the angular-frequency range.

### PDF page 30

For a minimum-uncertainty Gaussian packet, $\Delta\signal{k}\,\Delta x=1/2$ when the widths are standard deviations. Since

$$
\signal{k}=\frac{2\pi}{\signal{\lambda}}=\frac{2\pi\mechanical{p}}h=\frac{\mechanical{p}}{\hbar},
$$

the Gaussian gives $\Delta\mechanical{p}\,\Delta x=\hbar/2$. The notes state the general position–momentum bound and the energy–time uncertainty relation as

$$
\Delta\mechanical{p}_x\,\Delta x\ge\frac{\hbar}{2},
\qquad
\Delta\energy{E}\,\Delta t\ge\frac{\hbar}{2}.
$$

#### Uncertainty and causality

Laplace wrote in 1812 of an all-seeing intelligence. The notes quote Heisenberg in 1927, “Through quantum mechanics, the invalidity of the law of causation is definitively established.”

#### Midterm review. Rutherford scattering

Use $\energy{K}=\quantity{7.7}{MeV}=\quantity{1.232\times10^{-12}}{J}$, $\theta=90^\circ$, and $t=\quantity{10^{-6}}{m}$. The number density is

$$
n=\frac{\mechanical{\rho}N_{\mathrm A}N_{\mathrm m}}{M_{\mathrm g}}
=\frac{(\quantity{19.3}{g/cm^3})(\quantity{6.022\times10^{23}}{mol^{-1}})(1)}{\quantity{197}{g/mol}}
=\quantity{5.90\times10^{22}}{cm^{-3}}=\quantity{5.90\times10^{28}}{m^{-3}}.
$$

Then

$$
f=\pi nt\left(\frac{(2)(79)\electric{e}^2}{8\pi\epsilon_0\energy{K}}\right)^2\cot^2(45^\circ)
\simeq4.3\times10^{-5}.
$$

The substitution uses $\electric{e}=\quantity{1.6\times10^{-19}}{C}$, $\epsilon_0=\quantity{8.85\times10^{-12}}{C^2/(N\,m^2)}$, and a rounded $\energy{K}=\quantity{1.2\times10^{-12}}{J}$.

### PDF page 31

#### Homework 3.3. Rutherford scattering

Use a gold foil of thickness $\quantity{2.0\times10^{-6}}{m}$ and incident alpha particles of kinetic energy $\quantity{7.0}{MeV}=\quantity{1.12\times10^{-12}}{J}$. The handwritten conversion includes an extra factor of $10^6$ next to MeV. The conversion result corresponds to $\quantity{7.0\times10^6}{eV}$.

As before, gold has number density $n=\mechanical{\rho}N_{\mathrm A}N_{\mathrm m}/M_{\mathrm g}=\quantity{5.90\times10^{28}}{m^{-3}}$, using $\quantity{19.3}{g/cm^3}$ and $\quantity{197}{g/mol}$. The fraction scattered through at least $90^\circ$ uses $\cot^2(45^\circ)=1$.

$$
f(90^\circ)=\pi nt
\left[\frac{(2)(79)(\quantity{1.6\times10^{-19}}{C})^2}
{8\pi(\quantity{8.85\times10^{-12}}{C^2/(N\,m^2)})(\quantity{1.12\times10^{-12}}{J})}\right]^2
\simeq9.8\times10^{-5}.
$$

The fraction scattered from $45^\circ$ to $75^\circ$ is the difference of the two cumulative fractions.

$$
f(45^\circ)-f(75^\circ)=(9.8\times10^{-5})\left[\cot^2(22.5^\circ)-\cot^2(37.5^\circ)\right]
\simeq4.05\times10^{-4}.
$$

#### Bohr model review

The assumption of quantized angular momentum leads to quantized orbital speed, radius, and energy.

### PDF page 32

#### Tipler 3.12. Wien's law

Use $\signal{\lambda}_{\max}\thermal{T}=\quantity{2.898\times10^{-3}}{m\,K}$. At $\thermal{T}=\quantity{3}{K}$, $\signal{\lambda}_{\max}\simeq\quantity{9.66\times10^{-4}}{m}$. The recorded results for parts (b) and (c) are $\quantity{9.66\times10^{-6}}{m}$ and $\quantity{9.66\times10^{-8}}{m}$.

#### Tipler 3.41. Compton wavelengths

For a proton of mass $\quantity{1.672\times10^{-27}}{kg}$ and an electron of mass $\quantity{9.11\times10^{-31}}{kg}$,

$$
\signal{\lambda}_{\mathrm C,p}=\frac{h}{\mechanical{m}_{\mathrm p}c}\simeq\quantity{1.32\times10^{-15}}{m},
\qquad
\signal{\lambda}_{\mathrm C,e}=\frac{h}{\mechanical{m}_{\mathrm e}c}\simeq\quantity{2.43\times10^{-12}}{m}.
$$

Use $h=\quantity{6.626\times10^{-34}}{J\,s}$ and $c\simeq\quantity{3.00\times10^8}{m/s}$. The photon energy $hc/\signal{\lambda}_{\mathrm C}$ at the proton wavelength is $\quantity{1.50\times10^{-10}}{J}$, and at the electron wavelength it is $\quantity{8.18\times10^{-14}}{J}$.

#### Tipler 3.47. Bragg condition and tube voltage

For first order, $\theta=20^\circ$ and $\mechanical{d}=\quantity{0.28}{nm}$ give

$$
\signal{\lambda}=2\mechanical{d}\sin\theta
=2(\quantity{0.28}{nm})\sin(20^\circ)\simeq\quantity{0.192}{nm}.
$$

Set this wavelength equal to the cutoff $\signal{\lambda}_{\min}=hc/(\electric{e}\electric{V})$. With $hc/\electric{e}\simeq\quantity{1.24\times10^3}{V\,nm}$, the tube voltage is $\electric{V}\simeq\quantity{6.47\times10^3}{V}$.

### PDF page 33

#### Problem 5.3. Electron accelerating voltage

For a nonrelativistic electron accelerated through $\electric{V}_0$, use $\energy{E}_{\mathrm k}=\electric{e}\electric{V}_0$. Then

$$
\signal{\lambda}=\frac h{\mechanical{p}}
=\frac h{\sqrt{2\mechanical{m}_{\mathrm e}\electric{e}\electric{V}_0}},
\qquad
\electric{V}_0=\frac{h^2}{2\mechanical{m}_{\mathrm e}\electric{e}\signal{\lambda}^2}.
$$

#### Problems 5.6 and 5.11. Wavelength and kinetic energy

From $\mechanical{p}=\mechanical{m}\mechanical{v}$ and $\energy{K}=\mechanical{p}^2/(2\mechanical{m})$,

$$
\signal{\lambda}=\frac{h}{\sqrt{2\mechanical{m}\energy{K}}}
=\frac{hc}{\sqrt{2\mechanical{m}c^2\energy{K}}}.
$$

Solve for kinetic energy to obtain $\energy{K}=h^2c^2/(2\mechanical{m}c^2\signal{\lambda}^2)$.

#### Homework 2.2 and Tipler 3.34

For a peak wavelength of $\quantity{82.8}{nm}$, Wien's law gives

$$
\thermal{T}=\frac{\quantity{2.898\times10^{-3}}{m\,K}}{\quantity{82.8\times10^{-9}}{m}}
\simeq\quantity{3.5\times10^4}{K}.
$$

For a tube voltage of $\quantity{80}{kV}$, the X-ray cutoff is $\signal{\lambda}_{\min}=(\quantity{1.24\times10^3}{V\,nm})/(\quantity{80\times10^3}{V})\simeq\quantity{0.016}{nm}$.

### PDF page 34

#### Problem 3.37. One-percent Compton shift

The shift is $\Delta\signal{\lambda}/\signal{\lambda}_1=0.01$. At $\theta=90^\circ$, $\signal{\lambda}_2-\signal{\lambda}_1=h/(\mechanical{m}_{\mathrm e}c)$. Therefore

$$
\signal{\lambda}_1=\frac{100h}{\mechanical{m}_{\mathrm e}c}\simeq\quantity{0.242}{nm}.
$$

#### Problem 3.38. Compton backscattering

For $\signal{\lambda}_1=\quantity{0.0711}{nm}$, the incident energy is $\energy{E}=hc/\signal{\lambda}_1\simeq\quantity{2.80\times10^{-15}}{J}$. At $\theta=180^\circ$ the wavelength shift is $2h/(\mechanical{m}_{\mathrm e}c)$. Thus

$$
\signal{\lambda}_2=\signal{\lambda}_1+\frac{2h}{\mechanical{m}_{\mathrm e}c}\simeq\quantity{0.0760}{nm}.
$$

#### Lecture of October 6, 2014. The Schrödinger equation

Schrödinger's formulation uses a wave equation and normalization $\int\Psi^*\Psi\,dx=1$. Heisenberg's formulation uses linear algebra. In bra–ket notation the normalization is $\langle\Psi\mid\Psi\rangle=1$.

The Schrödinger equation is nonrelativistic and linear and relates the position and time dependence of the wave function. If $\Psi_1$ and $\Psi_2$ solve it, then $\Psi_1\pm\Psi_2$ also solves it. Linear combinations allow interference and can combine arbitrarily many wave components.

### PDF page 35

The classical wave equation has a second time derivative, $\partial_x^2\Psi=\signal{v}^{-2}\partial_t^2\Psi$. The time-dependent Schrödinger equation has a first time derivative.

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{\partial^2\Psi(x,t)}{\partial x^2}
+\energy{V}(x,t)\Psi(x,t)=i\hbar\frac{\partial\Psi(x,t)}{\partial t}.
$$

The terms on the left are the kinetic and potential contributions to the Hamiltonian acting on $\Psi$. When the potential is time independent, the operator is $\hat H=-\hbar^2\partial_x^2/(2\mechanical{m})+\energy{V}(x)$. Separating $\Psi(x,t)=\psi(x)\phi(t)$ gives the time-independent equation,

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dx^2}+\energy{V}(x)\psi=\energy{E}\psi.
$$

Here $\energy{E}$ is the total energy. For a bound state with a regular finite potential, $\psi$ and $\psi'$ are continuous, $\psi\to0$ at either infinity, and $\psi$ satisfies the equation. The curvature satisfies

$$
\frac{d^2\psi}{dx^2}=\frac{2\mechanical{m}}{\hbar^2}(\energy{V}-\energy{E})\psi.
$$

A larger energy difference gives a larger magnitude of curvature at a fixed $\psi$.

![[Kyle Kabasares - Modern Physics - Wave function across a potential barrier.png|**Fig. 17** The sketch shows a wave function across a narrow region of elevated potential energy.]]

### PDF page 36

#### Lecture of October 8, 2014. Square wells

The lecture covers the infinite square well, the finite square well, and wave functions for variations on a square well. To solve a problem with the Schrödinger equation, identify the potential energy and make any necessary simplifying assumptions, identify the boundary conditions, and find the general solution.

The time-independent equation is $\hat H\psi=\energy{E}\psi$, with

$$
\hat H=-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2}{dx^2}+\energy{V}(x).
$$

The first term is the kinetic-energy operator and the second gives the potential energy.

![[Kyle Kabasares - Modern Physics - Infinite square well states.png|**Fig. 18** The infinite well confines the particle between $0$ and $\mechanical{L}$. The $n=1$ state has zero interior nodes and $n=2$ has one, following the rule $n-1$.]]

The potential is infinite in region I ($x<0$) and region III ($x>\mechanical{L}$). It is zero in region II ($0\le x\le\mechanical{L}$). The particle is confined to the well and $\psi=0$ in regions I and III. In region II,

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dx^2}=\energy{E}\psi.
$$

### PDF page 37

Inside the well, write $\psi''=-\signal{k}^2\psi$ with $\signal{k}=\sqrt{2\mechanical{m}\energy{E}/\hbar^2}$. The general solution is

$$
\psi_{\mathrm{II}}(x)=A\sin(\signal{k}x)+B\cos(\signal{k}x).
$$

Continuity with the exterior zero solution gives $\psi_{\mathrm I}(0)=\psi_{\mathrm{II}}(0)=0$ and $\psi_{\mathrm{II}}(\mechanical{L})=\psi_{\mathrm{III}}(\mechanical{L})=0$. At $x=0$, the first condition sets $B=0$. At $x=\mechanical{L}$, the second condition requires $A\sin(\signal{k}\mechanical{L})=0$. A nontrivial state therefore has $\signal{k}\mechanical{L}=n\pi$ with $n=1,2,3,\ldots$. The boundary conditions produce quantization.

$$
\frac{2\mechanical{m}\energy{E}}{\hbar^2}\mechanical{L}^2=n^2\pi^2,
\qquad
\energy{E}_n=\frac{\hbar^2\pi^2}{2\mechanical{m}\mechanical{L}^2}n^2.
$$

The handwritten box omits the square on $\hbar$, which appears in the preceding line.

### PDF page 38

Normalize the infinite-well solution.

$$
\begin{aligned}
1&=\int_{-\infty}^{\infty}\lvert\psi\rvert^2\,dx
=A^2\int_0^{\mechanical{L}}\sin^2(\signal{k}x)\,dx\\
&=A^2\left[\frac x2-\frac{\sin(2\signal{k}x)}{4\signal{k}}\right]_0^{\mechanical{L}}
=A^2\frac{\mechanical{L}}2 .
\end{aligned}
$$

The sine term vanishes at both endpoints because $\signal{k}\mechanical{L}=n\pi$. The handwritten antiderivative lacks the $\signal{k}$ in the denominator. Choose $A=\sqrt{2/\mechanical{L}}$. The wave function and energies are

$$
\psi_{\mathrm{II}}(x)=\sqrt{\frac2{\mechanical{L}}}\sin(\signal{k}x),
\qquad \signal{k}=\frac{\sqrt{2\mechanical{m}\energy{E}}}{\hbar},
\qquad \energy{E}_n=\frac{\hbar^2\pi^2}{2\mechanical{m}\mechanical{L}^2}n^2,\quad n=1,2,\ldots
$$

The position probability density is $P(x)=\lvert\psi(x)\rvert^2$.

#### Lecture of October 10, 2014. Infinite square well

Identify the potential first. It vanishes for $0\le x\le\mechanical{L}$ and is infinite elsewhere. There is zero probability of finding the particle outside the well, so $\psi_{\mathrm I}=\psi_{\mathrm{III}}=0$.

![[Kyle Kabasares - Modern Physics - Infinite well regions.png|**Fig. 19** The potential is zero inside region II and rises to infinity at the boundaries with regions I and III.]]

### PDF page 39

The general solution of the time-independent Schrödinger equation is mathematically valid. The boundary conditions select the quantized solutions, and normalization allows probabilities to be calculated. The notes caution against picturing the trapped particle as following a classical trajectory.

![[Kyle Kabasares - Modern Physics - Infinite well wave function review.png|**Fig. 20** The two lowest infinite-well wave functions are sketched between the boundaries at $0$ and $\mechanical{L}$.]]

![[Kyle Kabasares - Modern Physics - Position measurement and collapse.png|**Fig. 21** The notes illustrate wave-function collapse on position measurement with a narrow peak near $x=\mechanical{L}/4$.]]

The same-axis position and momentum obey $\Delta x\,\Delta\mechanical{p}_x\ge\hbar/2$. For $x$ and the perpendicular momentum component $\mechanical{p}_y$, the bound shown is $\Delta x\,\Delta\mechanical{p}_y\ge0$. The notes link simultaneous measurement in different directions to orthogonality and give $\hat{\mathbf x}\cdot\hat{\mathbf y}=\cos90^\circ=0$.

The roman numeral in $\psi_{\mathrm I}$ denotes region I. A state label such as $\psi_1$ refers to the $n=1$ solution, here considered in region II. Orthogonality of distinct states gives

$$
\int_{-\infty}^{\infty}\psi_n^*(x)\psi_m(x)\,dx=0,\qquad n\ne m.
$$

The asterisk denotes complex conjugation. For the cat-in-a-box example, take

$$
\psi_{\mathrm{cat}}=\frac1{\sqrt2}\psi_{\mathrm{alive}}+\frac1{\sqrt2}\psi_{\mathrm{dead}}.
$$

Integrating $\psi_{\mathrm{cat}}^*\psi_{\mathrm{cat}}$ over all space gives

$$
\begin{aligned}
\int\psi_{\mathrm{cat}}^*\psi_{\mathrm{cat}}\,dx
={}&\frac12\int\psi_{\mathrm{alive}}^*\psi_{\mathrm{alive}}\,dx
+\frac12\int\psi_{\mathrm{alive}}^*\psi_{\mathrm{dead}}\,dx\\
&+\frac12\int\psi_{\mathrm{dead}}^*\psi_{\mathrm{alive}}\,dx
+\frac12\int\psi_{\mathrm{dead}}^*\psi_{\mathrm{dead}}\,dx.
\end{aligned}
$$

The cross terms vanish because the two states are orthogonal. The diagonal terms give one in total for normalized component states.

### PDF page 40

Each diagonal integral in the cat example is one, so the combined norm is $1/2+1/2=1$.

For a particle in an infinite square well with only three states in the expansion, write $\psi_{\mathrm{particle}}=A(c_1\psi_1+c_2\psi_2+c_3\psi_3)$. The component wave functions can be chosen real, so $\psi_i^*=\psi_i$. Orthogonality removes the cross terms on integration. For real coefficients and normalized components,

$$
\int_0^{\mechanical{L}}\lvert\psi_{\mathrm{particle}}\rvert^2dx
=A^2(c_1^2+c_2^2+c_3^2)=1.
$$

#### Lecture of October 15, 2014. Finite square well

Stronger confinement spreads the energy levels farther apart. In the classically forbidden region to the right of the well, the bound-state wave function decays as

$$
\psi(x)=\psi_{\mathrm{edge}}e^{-(x-\mechanical{L})/\eta},
\qquad
\eta=\frac1\alpha=\frac{\hbar}{\sqrt{2\mechanical{m}(\energy{V}-\energy{E})}}.
$$

The handwritten exponent places $\eta$ in the numerator. The displayed definition makes $\eta$ a length and therefore puts it in the denominator. At the finite wall, $\psi_{\mathrm{II}}(\mechanical{L})=\psi_{\mathrm{III}}(\mechanical{L})$ and $\psi'_{\mathrm{II}}(\mechanical{L})=\psi'_{\mathrm{III}}(\mechanical{L})$. At an infinitely high wall, $\psi$ goes to zero at the boundary, and its derivative can jump there.

![[Kyle Kabasares - Modern Physics - Infinite wall matching.png|**Fig. 22** The ground-state wave function vanishes at the infinitely high walls. Its slope at the boundary can differ from the slope of the exterior zero solution.]]

### PDF page 41

![[Kyle Kabasares - Modern Physics - Finite well second state.png|**Fig. 23** The $n=2$ wave function in a finite square well extends beyond both walls.]]

The time-independent Schrödinger equation gives

$$
-\frac{\hbar^2}{2\mechanical{m}}\psi''+\energy{V}\psi=\energy{E}\psi,
\qquad
\psi''=\frac{2\mechanical{m}}{\hbar^2}(\energy{V}-\energy{E})\psi.
$$

The curvature depends on the difference between potential and total energy. An electron confined in a semiconductor layer is one application of a quantum well. Another model pictures an electron confined between parallel capacitor plates with a uniform electric field.

![[Kyle Kabasares - Modern Physics - Parallel plates.png|**Fig. 24** The electric field between the charged plates is directed from the positive plate to the negative plate.]]

![[Kyle Kabasares - Modern Physics - Tilted infinite well.png|**Fig. 25** The potential rises linearly across the well from $0$ to $\quantity{5}{nm}$. The sketch marks a level with $n=5$.]]

#### Quantum harmonic oscillator

In a symmetric potential $\energy{V}(-x)=\energy{V}(x)$, the eigenfunctions can have even or odd parity, $\psi(-x)=\pm\psi(x)$. Either way $\lvert\psi(-x)\rvert^2=\lvert\psi(x)\rvert^2$. The bound-state wave function decays asymptotically in the forbidden regions with $\energy{V}>\energy{E}$ and oscillates in the allowed regions with $\energy{V}<\energy{E}$.

![[Kyle Kabasares - Modern Physics - Harmonic oscillator turning points.png|**Fig. 26** The quadratic potential $\energy{V}(x)=\tfrac12\mechanical{m}\mechanical{\omega}^2x^2$ is shown with low-lying states and turning points at $-A$ and $+A$ for the marked energy.]]

### PDF page 42

#### Harmonic oscillator wave functions

The eigenfunctions are Gaussian factors times Hermite polynomials. With $q=x\sqrt{\mechanical{m}\mechanical{\omega}/\hbar}$,

$$
\psi_n=C_n e^{-q^2/2}H_n(q),
\qquad
\psi_0=A_0e^{-q^2/2},\qquad
\psi_1=A_1q e^{-q^2/2},\qquad
\psi_2=A_2(1-2q^2)e^{-q^2/2}.
$$

The scale factors and overall signs can be absorbed into the constants. The lecture of October 20, 2014, repeats the three oscillator functions.

#### Lecture of October 20, 2014. Barrier boundary conditions

![[Kyle Kabasares - Modern Physics - Three regions of a finite barrier.png|**Fig. 27** In regions I and III the energy exceeds the potential and the wave number is real. In region II the potential exceeds the total energy, giving an imaginary wave number.]] 

Match the amplitudes and first derivatives across the two interfaces.

$$
\begin{aligned}
\psi_{\mathrm I}(0)&=\psi_{\mathrm{II}}(0),
& \psi_{\mathrm{II}}(\mechanical{L})&=\psi_{\mathrm{III}}(\mechanical{L}),\\
\psi'_{\mathrm I}(0)&=\psi'_{\mathrm{II}}(0),
& \psi'_{\mathrm{II}}(\mechanical{L})&=\psi'_{\mathrm{III}}(\mechanical{L}).
\end{aligned}
$$

The free-particle solution for $x<0$ is $\psi_{\mathrm I}=Ae^{i\signal{k}_1x}+Be^{-i\signal{k}_1x}$. Euler's identity gives $e^{i\theta}=\cos\theta+i\sin\theta$. With the usual time factor, the positive exponent describes a wave traveling right and the negative exponent describes one traveling left. The incident amplitude $A$ is nonzero because a particle was sent toward the barrier. The amplitude $B$ accounts for reflection. The red note says to keep the crossed-out $B$ term.

### PDF page 43

Rearrange the stationary Schrödinger equation to read $\psi''=2\mechanical{m}(\energy{V}-\energy{E})\psi/\hbar^2$. In regions I and III, $\energy{V}=0$ and the coefficient is negative for $\energy{E}>0$. The wave numbers $\signal{k}_1$ and $\signal{k}_3$ are real and the solutions oscillate. In region II with $\energy{V}>\energy{E}$ the coefficient is positive, and $\signal{k}_2=i\kappa$ is imaginary, with $\kappa=\sqrt{2\mechanical{m}(\energy{V}-\energy{E})}/\hbar$.

The term $Ce^{i\signal{k}_2 x}=Ce^{-\kappa x}$ decays. The source keeps only this term in the barrier. The general solution for matching a barrier of finite width includes both $e^{-\kappa x}$ and $e^{+\kappa x}$. In region III write $\psi_{\mathrm{III}}=De^{i\signal{k}_3 x}+Fe^{-i\signal{k}_3 x}$. Here $F=0$ because no particle is incident from the right.

#### Lecture of October 22, 2014. Tunneling and expectation values

The lecture returns to amplitudes and wavelengths at a potential barrier. Regions I and III have zero potential, while region II has potential $\energy{V}_0$. On the incident side $\psi_{\mathrm I}=Ae^{i\signal{k}_1x}+Be^{-i\signal{k}_1x}$, with incident and reflected terms. The $\signal{k}_j$ values are set by the difference between the total energy and the potential in each region.

![[Kyle Kabasares - Modern Physics - Rectangular potential barrier.png|**Fig. 28** The review sketch marks the three regions, the barrier height $\energy{V}_0$, and its width $\mechanical{L}$. The energy line on this sketch is above the barrier.]]

### PDF page 44

In region III the solution is $\psi_{\mathrm{III}}=Fe^{ik_3x}+Ge^{-ik_3x}$. There is no wave incident from the right, so $G=0$ and the first term is the transmitted wave.

The reflected wave in region I is complex. Its squared modulus is

$$
\lvert\psi_{\mathrm{I,ref}}\rvert^2
=(B^*e^{ik_1x})(Be^{-ik_1x})
=B^*B=\lvert B\rvert^2.
$$

The reflection and transmission coefficients for equal wave numbers in regions I and III are

$$
R=\frac{\lvert\psi_{\mathrm{I,ref}}\rvert^2}{\lvert\psi_{\mathrm{I,inc}}\rvert^2}
=\frac{B^*B}{A^*A},
\qquad
T=\frac{F^*F}{A^*A}.
$$

For a barrier with $\energy{E}<\energy{V_0}$, the equation in region II is

$$
-\frac{\hbar^2}{2\mechanical{m}}\psi_{\mathrm{II}}''
+\energy{V_0}\psi_{\mathrm{II}}
=\energy{E}\psi_{\mathrm{II}}.
$$

Thus $\psi_{\mathrm{II}}''=\kappa^2\psi_{\mathrm{II}}$, where $\kappa=\sqrt{2\mechanical{m}(\energy{V_0}-\energy{E})}/\hbar$. The two terms $Ce^{ik_2x}+De^{-ik_2x}$ are real exponentials in $x$ because $k_2=i\kappa$ and $k_2^2=2\mechanical{m}(\energy{E}-\energy{V_0})/\hbar^2<0$. For a barrier of width $\mechanical{L}$,

$$
T=\left[1+\frac{\energy{V_0}^{\,2}\sinh^2(\kappa\mechanical{L})}
{4\energy{E}(\energy{V_0}-\energy{E})}\right]^{-1}.
$$

#### Expectation values

If you do an experiment to measure some characteristic of a quantum particle, what do you expect to find?

### PDF page 45

For a normalized wave function $\psi$, the expectation value of the observable $Q$ is

$$
\langle Q\rangle
=\int_{-\infty}^{+\infty}\psi^*(x)\bigl(\hat Q\psi(x)\bigr)\,dx.
$$

The operator $\hat Q$ acts on $\psi$. For energy the operator is the Hamiltonian $\hat H$,

$$
\hat H\psi=-\frac{\hbar^2}{2\mechanical{m}}\frac{\partial^2\psi}{\partial x^2}+\energy{V}\psi
=\energy{E}\psi,
\qquad
\langle\energy{E}\rangle=\int_{-\infty}^{+\infty}\psi^*\hat H\psi\,dx.
$$

#### Lecture, October 24, 2014 — The hydrogen atom

The three-dimensional Schrödinger equation and the hydrogen atom.

- **Bohr model.** An electron in a circular orbit does not radiate. Its orbital radius and energy are quantized. The model leaves the fixed energy levels unexplained.
- **de Broglie model.** The electron is a standing wave. The standing-wave condition explains the fixed energy levels and gives the same energies.
- **Schrödinger model.** The electron is described by a three-dimensional wave. Boundary conditions produce quantized energy levels, and the model gives the correct energies and angular momenta.

### PDF page 46

The Schrödinger equation generalizes to atoms with multiple electrons. For hydrogen, put the proton at the origin and describe the electron in spherical coordinates,

$$
x=r\sin\theta\cos\phi,\qquad y=r\sin\theta\sin\phi,\qquad z=r\cos\theta.
$$

Here $r$ is distance from the origin, $\theta$ is the angle from the $z$-axis, and $\phi$ is the angle from the $x$-axis in the $xy$-plane. The angle conventions in Math 23 interchanged $\theta$ and $\phi$.

![[Kyle Kabasares - Modern Physics - Hydrogen spherical coordinates.png|**Fig. 29** Spherical coordinates for the electron relative to the proton.]]

The potential energy is $\energy{V}(r)=-\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$. Its radial dependence permits separation of variables, $\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)$ with $Y(\theta,\phi)=f(\theta)g(\phi)$.

$$
-\frac{\hbar^2}{2\mechanical{m}}\left(
\frac{\partial^2\psi}{\partial x^2}
+\frac{\partial^2\psi}{\partial y^2}
+\frac{\partial^2\psi}{\partial z^2}\right)
+\energy{V}\psi=\energy{E}\psi,
\qquad
-\frac{\hbar^2}{2\mechanical{m}}\nabla^2\psi+\energy{V}\psi=\energy{E}\psi.
$$

Using the reduced mass $\mechanical{\mu}$, the spherical-coordinate equation can be rearranged to place the radial derivative and potential on the left.

$$
-\frac{\hbar^2}{2\mechanical{\mu}r^2}
\frac{\partial}{\partial r}\left(r^2\frac{\partial\psi}{\partial r}\right)
+[\energy{V}(r)-\energy{E}]\psi
=\frac{\hbar^2}{2\mechanical{\mu}r^2}
\left[
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial\psi}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2\psi}{\partial\phi^2}
\right].
$$

### PDF page 47

Substitute $\psi=R(r)f(\theta)g(\phi)$ into the rearranged equation and divide both sides by $Rfg$. The radial and angular factors then separate.

$$
-\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\frac{2\mechanical{\mu}r^2}{\hbar^2}[\energy{V}(r)-\energy{E}]
=\frac{1}{f\sin\theta}\frac{d}{d\theta}\left(\sin\theta\frac{df}{d\theta}\right)
+\frac{1}{g\sin^2\theta}\frac{d^2g}{d\phi^2}.
$$

The solutions have the form $\psi_{n\ell m}=R_{n\ell}(r)f_{\ell m}(\theta)g_m(\phi)$.

- $n=1,2,3,\ldots$ is the principal quantum number.
- $\ell=0,1,\ldots,n-1$ is the orbital quantum number.
- $m=-\ell,-\ell+1,\ldots,\ell$ is the magnetic quantum number. It determines the $z$-component of orbital angular momentum.

#### Lecture, October 27, 2014 — Hydrogen and an expectation-value example

Find the expectation value of position in the harmonic oscillator ground state.

$$
\psi_0=A_0e^{-\alpha x^2/2},\qquad \alpha=\frac{\mechanical{m}\mechanical{\omega}}{\hbar}.
$$

Either normalize first or divide by the norm in the expectation-value calculation.

$$
\langle\mechanical{x}\rangle=
\frac{\int_{-\infty}^{+\infty}\psi_0^*x\psi_0\,dx}
{\int_{-\infty}^{+\infty}\psi_0^*\psi_0\,dx}.
$$

![[Kyle Kabasares - Modern Physics - Harmonic oscillator expectation example.png|**Fig. 30** Symmetric harmonic oscillator potential.]]

Taking $A_0$ real, the normalization condition is

$$
1=A_0^2\int_{-\infty}^{+\infty}e^{-\alpha x^2}\,dx
=2A_0^2\int_0^\infty e^{-\alpha x^2}\,dx
=A_0^2\sqrt{\frac{\pi}{\alpha}}.
$$

### PDF page 48

The normalized ground state has $A_0=(\alpha/\pi)^{1/4}$.

$$
\begin{aligned}
\langle\mechanical{x}\rangle
&=\int_{-\infty}^{+\infty}\psi_0^*x\psi_0\,dx\\
&=A_0^2\int_{-\infty}^{+\infty}xe^{-\alpha x^2}\,dx=0.
\end{aligned}
$$

The factor $x$ is odd and the Gaussian is even. The resulting odd integrand integrates to zero on the symmetric domain.

![[Kyle Kabasares - Modern Physics - First excited oscillator state.png|**Fig. 31** The first excited oscillator wave function and its symmetric probability density, drawn relative to its energy level.]]

#### Three-dimensional waves

The hydrogen potential is $\energy{V}(r)=-\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$. The separated wave function is $\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)=R(r)f(\theta)g(\phi)$. The quantum numbers are $n=1,2,3,\ldots$, $\ell=0,1,\ldots,n-1$, and $m=-\ell,\ldots,+\ell$.

### PDF page 49

#### Reviewing the Schrödinger equation — Conditions on wave functions

The one-dimensional time-independent Schrödinger equation is

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi(x)}{dx^2}
+\energy{V}(x)\psi(x)=\energy{E}\psi(x).
$$

The potential may have different forms in adjacent regions, and its slope may be discontinuous. Solve the Schrödinger equation in each region and match the solutions smoothly at finite potential steps. The sketching rule on this page refers to smooth joining of the wave function. Where the potential is infinite, the wave function vanishes.

1. $\psi(x)$ must exist and satisfy the Schrödinger equation.
2. $\psi(x)$ and $d\psi/dx$ must be continuous for the ordinary finite potentials considered here.
3. $\psi(x)$ and $d\psi/dx$ must be finite.
4. $\psi(x)$ and $d\psi/dx$ must be single-valued.
5. For a normalizable bound state, $\psi(x)\to0$ sufficiently fast as $x\to\pm\infty$ for the normalization integral to remain finite.

#### The infinite square well

This system is also called the particle in a box.

### PDF page 50

The infinite well has $\energy{V}(x)=0$ for $0<x<\mechanical{L}$ and $\energy{V}(x)=\infty$ outside.

![[Kyle Kabasares - Modern Physics - Infinite square well review.png|**Fig. 32** Infinite square well between $x=0$ and $x=L$.]]

With $\mechanical{p}=h/\signal{\lambda}$ and $n\signal{\lambda}/2=\mechanical{L}$, the allowed energies are

$$
\energy{E}_n=\frac{\mechanical{p}^{\,2}}{2\mechanical{m}}
=\frac{n^2h^2}{8\mechanical{m}\mechanical{L}^{\,2}}
=\frac{n^2\pi^2\hbar^2}{2\mechanical{m}\mechanical{L}^{\,2}}
=n^2\energy{E}_1,\qquad n=1,2,3,\ldots.
$$

#### The finite square well

The form of the exterior solution depends on whether $\energy{E}$ is above or below $\energy{V_0}$.

![[Kyle Kabasares - Modern Physics - Finite square well review.png|**Fig. 33** Finite square well with exterior potential $V_0$.]]

Inside, $\energy{V}(x)=0$ and $\psi''=-k^2\psi$ with $k^2=2\mechanical{m}\energy{E}/\hbar^2$. The wave function can be nonzero at the walls and must be continuous there. Outside, for a bound state with $\energy{E}<\energy{V_0}$,

$$
\psi''=\alpha^2\psi,\qquad \alpha^2=\frac{2\mechanical{m}(\energy{V_0}-\energy{E})}{\hbar^2}>0.
$$

### PDF page 51

Outside the well, $\psi''$ has the same sign as $\psi$. Where $\psi$ is positive, $\psi''$ is positive and the curve bends away from the axis. Inside the well, $0<x<\mechanical{L}$, $\psi''$ and $\psi$ have opposite signs. The curve bends toward the axis like a sine or cosine.

#### Lecture, October 29, 2014 — Boundary conditions and angular momentum

The bound-state radial wave function $R(r)$ approaches zero as $r\to\infty$. The spherical-coordinate volume element and the radial probability density for a normalized angular factor are

$$
d\tau=dx\,dy\,dz=r^2\sin\theta\,dr\,d\theta\,d\phi,\qquad
P(r)=r^2\lvert R(r)\rvert^2.
$$

In one dimension the probability in $dx$ is $\lvert\psi(x)\rvert^2dx$. Probabilities come from the squared modulus of the wave function. The radial factor $r^2$ makes the radial probability density vanish at the nucleus when $R$ is finite there.

Angular momentum is conserved in the central potential. Classically an orbit can have any nonzero angular momentum, with direction given by the right-hand rule. Quantum mechanically the allowed angular momenta are quantized and $\ell=0$ is possible.

![[Kyle Kabasares - Modern Physics - Classical orbital angular momentum.png|**Fig. 34** Right-hand-rule direction of orbital angular momentum and its projection on the $z$-axis.]]

### PDF page 52

For a given $\ell$, orbital angular momentum has magnitude $\lvert\mechanical{\vec L}\rvert=\sqrt{\ell(\ell+1)}\,\hbar$, while its $z$-component is $\mechanical{L}_z=m\hbar$ with $m=-\ell,\ldots,\ell$. The example $\ell=2$ requires $n\ge3$.

![[Kyle Kabasares - Modern Physics - Quantized angular momentum.png|**Fig. 35** Vector model of the five angular momentum projections for $\ell=2$.]]

#### Lecture, October 31, 2014 — The hydrogen atom

In a symmetric potential, stationary states can be chosen to have definite parity. Their probability density is symmetric, and the expectation value of position lies at the center.

Atoms in magnetic fields show consequences of angular momentum quantization, as in the Stern–Gerlach experiment.

The orbitals for $\ell=0,1,2,3,4$ are denoted $s,p,d,f,g$, respectively. For electric dipole transitions, $\Delta n$ is unrestricted by the selection rules, $\Delta\ell=\pm1$, and $\Delta m=0,\pm1$.

$$
\energy{E}_n=-\frac{\mechanical{\mu}}{2}
\left(\frac{\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}\hbar}\right)^2
\frac{1}{n^2},\qquad n=1,2,3,\ldots.
$$

The energy is independent of $\ell$, in agreement with the Bohr model. The quantum number $\ell=0,1,\ldots,n-1$ enters both $R(r)$ and $f(\theta)$ and determines $\lvert\mechanical{\vec L}\rvert=\sqrt{\ell(\ell+1)}\,\hbar$. Bohr's model used $\mechanical{L}=n\hbar$.

### PDF page 53

#### Magnetic quantum number

There are $2\ell+1$ allowed values of $m=-\ell,\ldots,\ell$, with $\mechanical{L}_z=m\hbar$. For the hydrogen electron,

$$
\psi_{n\ell m}=C_{n\ell m}R_{n\ell}(r)f_{\ell m}(\theta)g_m(\phi),\qquad
P(r)=r^2\lvert R_{n\ell}(r)\rvert^2.
$$

The wave function can be complex. The position–momentum uncertainty relation gives $\Delta x\,\Delta p_x\ge\hbar/2$, while the corresponding lower bound for $\Delta x\,\Delta p_y$ is zero. In a state of definite $\mechanical{L}^{\,2}=\mechanical{L}_x^2+\mechanical{L}_y^2+\mechanical{L}_z^2$ and $\mechanical{L}_z$, the transverse components generally have uncertainties.

#### Normal Zeeman effect

An external field $\magnetic{\vec B}=\magnetic{B}_0\hat z$ splits the $\ell=1$ level into $m=+1,0,-1$. The adjacent levels are separated by $\magnetic{\mu}_B\magnetic{B}_0$, where $\magnetic{\mu}_B$ is the Bohr magneton. A line of transition energy $\energy{E}_0$ splits into lines at $\energy{E}_0$ and $\energy{E}_0\pm\magnetic{\mu}_B\magnetic{B}_0$.

![[Kyle Kabasares - Modern Physics - Normal Zeeman splitting.png|**Fig. 36** The $\ell=1$ level and its allowed transitions to $\ell=0$, with and without a magnetic field.]]

For an electron in a circular orbit with speed $\mechanical{v}$, the current is charge per orbital period. Multiplying it by the orbit area gives the signed magnetic moment along the orbital axis,

$$
\magnetic{\mu}=\circuit{I}\mechanical{A}
=\frac{-\electric{e}}{2\pi r/\mechanical{v}}\pi r^2
=-\frac{\electric{e}r\mechanical{v}}{2},\qquad
\magnetic{\vec\mu}=-\frac{\electric{e}}{2\mechanical{m}}\mechanical{\vec L}.
$$

Orbital angular momentum has magnitude $\mechanical{m}\mechanical{v}r$ and points perpendicular to the orbital plane. Without a field the orientations are random. In a field there is a torque $\mechanical{\vec\tau}=\magnetic{\vec\mu}\times\magnetic{\vec B}$.

### PDF page 54

#### Lecture, November 3, 2014 — Hydrogen and orbital angular momentum

For a circular orbit, $\mechanical{L}=\mechanical{m}_e r\mechanical{v}$ and $\magnetic{\mu}=\circuit{I}\mechanical{A}=(-\electric{e})\pi r^2/(2\pi r/\mechanical{v})$. The electron's magnetic moment, its torque, and its potential energy in a field are

$$
\magnetic{\vec\mu}=-\frac{\electric{e}}{2\mechanical{m}_e}\mechanical{\vec L},
\qquad
\mechanical{\vec\tau}=\magnetic{\vec\mu}\times\magnetic{\vec B},
\qquad
\energy{V}_B=-\magnetic{\vec\mu}\cdot\magnetic{\vec B}.
$$

![[Kyle Kabasares - Modern Physics - Classical and quantized dipoles.png|**Fig. 37** A classical dipole in a field and the vector model of quantized orbital angular momentum projections.]]

For a field along $z$, $\mechanical{L}_z=m_\ell\hbar$ while $\lvert\mechanical{\vec L}\rvert=\sqrt{\ell(\ell+1)}\,\hbar$. Therefore

$$
\magnetic{\mu}_z=-\frac{\electric{e}}{2\mechanical{m}_e}\mechanical{L}_z
=-\magnetic{\mu}_B m_\ell,\qquad
\magnetic{\mu}_B=\frac{\electric{e}\hbar}{2\mechanical{m}_e}
=9.27\times10^{-24}\,\unit{J/T}.
$$

The Bohr magneton is also $5.79\times10^{-5}\,\unit{eV/T}$ or $5.79\times10^{-9}\,\unit{eV/G}$. In vector notation $\magnetic{\vec\mu}=-\magnetic{\mu}_B\mechanical{\vec L}/\hbar$. The potential energy is quantized through the allowed $m_\ell$.

$$
\energy{V}_B=-\magnetic{\mu}_z\magnetic{B}=\magnetic{\mu}_Bm_\ell\magnetic{B}.
$$

### PDF page 55

#### Stern–Gerlach experiment and electron spin

Orbital angular momentum alone gives $2\ell+1$ projections. Why does the beam split into two when the atom has a single valence electron in an $s$ orbital? The electron also has intrinsic angular momentum, or spin, with $s=1/2$ and $m_s=\pm1/2$.

| Property | Orbital angular momentum | Spin angular momentum |
| --- | --- | --- |
| Magnitude | $\sqrt{\ell(\ell+1)}\,\hbar$ | $\sqrt{s(s+1)}\,\hbar=\sqrt{3/4}\,\hbar$ |
| Quantum number | $\ell=0,1,\ldots,n-1$ | $s=1/2$ |
| $z$-component | $\mechanical{L}_z=m_\ell\hbar$ | $\mechanical{S}_z=m_s\hbar$ |
| Projection quantum numbers | $m_\ell=-\ell,\ldots,\ell$ | $m_s=\pm1/2$ |

The orbital moment is $\magnetic{\vec\mu}_\ell=-\magnetic{\mu}_B\mechanical{\vec L}/\hbar$, with magnitude $\magnetic{\mu}_B\sqrt{\ell(\ell+1)}$ and projection $-m_\ell\magnetic{\mu}_B$. The handwritten comparison gives the spin moment the same coefficient as the orbital moment. For the electron spin the coefficient includes the spin $g$ factor, $\magnetic{\vec\mu}_s=-g_s\magnetic{\mu}_B\mechanical{\vec S}/\hbar$, with $g_s\simeq2$.

#### Total angular momentum

$$
\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}.
$$

![[Kyle Kabasares - Modern Physics - Total angular momentum addition.png|**Fig. 38** Vector addition of orbital and spin angular momentum.]]

Classically the magnitude can vary continuously between the difference and sum of the two magnitudes. Quantum mechanically $\lvert\mechanical{\vec J}\rvert=\sqrt{j(j+1)}\,\hbar$. For spin $1/2$, the allowed $j$ values are $\ell+1/2$ and $\lvert\ell-1/2\rvert$.

### PDF page 56

The total angular momentum may come from orbital motion, spin, or both. Its projection is $\mechanical{J}_z=\mechanical{L}_z+\mechanical{S}_z=m_j\hbar$, where $m_j=m_\ell+m_s$ and $m_j=-j,-j+1,\ldots,j$. The electron's total magnetic moment includes the factor of two from the relativistic spin result,

$$
\magnetic{\vec\mu}_{\mathrm{tot}}=-\frac{\electric{e}}{2\mechanical{m}_e}
(\mechanical{\vec L}+2\mechanical{\vec S}).
$$

#### Lecture, November 5, 2014 — Hydrogen and atomic physics

How do we define $j$? With $\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}$, the magnitude is $\mechanical{J}=\sqrt{j(j+1)}\,\hbar$ and the projection is $\mechanical{J}_z=m_j\hbar$. The value of $j$ depends on $\ell$ and $s$.

For $n=3$, $\ell=2$, and $s=1/2$, find the allowed values of $j$, the angular momentum magnitude, and the $z$-component.

| $j$ | $\mechanical{J}$ | $\mechanical{J}_z/\hbar$ |
| --- | --- | --- |
| $3/2$ | $\sqrt{15}\,\hbar/2$ | $-3/2,-1/2,1/2,3/2$ |
| $5/2$ | $\sqrt{35}\,\hbar/2$ | $-5/2,-3/2,-1/2,1/2,3/2,5/2$ |

### PDF page 57

Hydrogen excited to $\energy{E}=-(13.6/9)\,\unit{eV}$ has $n=3$. Its allowed orbital quantum numbers are $\ell=0,1,2$. For each $\ell$, $m_\ell=-\ell,\ldots,\ell$ and each orbital has $m_s=\pm1/2$. In particular the five $3d$ orbitals have $m_\ell=-2,-1,0,1,2$.

![[Kyle Kabasares - Modern Physics - Hydrogen n3 spin states.png|**Fig. 39** The $3s$, $3p$, and $3d$ orbitals, each with two possible spin states.]]

The spatial wave function is $\psi=R_{n\ell}(r)Y_{\ell m}(\theta,\phi)$. Including spin doubles the nine spatial states to eighteen states. The electron is an elementary fermion and obeys the Pauli exclusion principle.

States with opposite spins are orthogonal, while a normalized state has unit overlap with itself.

$$
\int_{\mathrm{all\ space}}\psi_{100\uparrow}^*\psi_{100\downarrow}\,d\tau=0,\qquad
\int_{\mathrm{all\ space}}\psi_{100\uparrow}^*\psi_{100\uparrow}\,d\tau=1.
$$

Similarly, for $n\ne m$, $(2/L)\int_0^L\sin(n\pi x/L)\sin(m\pi x/L)\,dx=0$ in the infinite well.

For electric dipole transitions in a one-electron atom, $\Delta n$ can take any allowed value including zero, $\Delta\ell=\pm1$, and $\Delta m_\ell=0,\pm1$.

#### Lecture, November 10, 2014 — Atomic physics

The time-independent Schrödinger equation is an eigenvalue equation, $\hat H\psi=\energy{E}\psi$. The Hamiltonian represents kinetic plus potential energy. In one Cartesian dimension,

$$
\hat H=-\frac{\hbar^2}{2\mechanical{m}}\frac{\partial^2}{\partial x^2}+\energy{V}(x).
$$

The hydrogen potential $\energy{V}(r)=-\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$ allows separation into three ordinary differential equations, giving $R_{n\ell}(r)f_{\ell m}(\theta)g_m(\phi)=R_{n\ell}(r)Y_{\ell m}(\theta,\phi)$. For helium,

$$
\energy{V}=-\frac{2\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}r_1}
-\frac{2\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}r_2}
+\frac{\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}r_{12}}.
$$

The first two terms are electron–nucleus attractions. The last is electron–electron repulsion and couples the coordinates, so the same separation does not yield an analytic solution.

### PDF page 58

#### More than one electron — LS coupling

The Schrödinger equation still applies, but the interacting many-electron problem generally has no closed-form solution. For two electrons outside a closed shell, combine their orbital and spin angular momenta separately before forming the total.

$$
\mechanical{\vec L}=\mechanical{\vec L}_1+\mechanical{\vec L}_2,\qquad
\mechanical{\vec S}=\mechanical{\vec S}_1+\mechanical{\vec S}_2,\qquad
\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}.
$$

Use capital letters for the dimensionless multi-electron quantum numbers. In unit steps, $L$ ranges from $\lvert\ell_1-\ell_2\rvert$ to $\ell_1+\ell_2$, $S$ from $\lvert s_1-s_2\rvert$ to $s_1+s_2$, and $J$ from $\lvert L-S\rvert$ to $L+S$. Both electrons have $s_i=1/2$, so $S=0$ or $1$. Opposite projections can form the singlet, while the parallel configurations shown are triplet states.

#### Building the periodic table

The spectroscopic notation shown is $n\,{}^{2S+1}L_J$. The one-electron orbital labels for $\ell=0,1,2,\ldots$ are $s,p,d,\ldots$. The multi-electron term labels for $L=0,1,2,\ldots$ are $S,P,D,\ldots$.

Apply the Pauli exclusion principle when choosing terms and use spectroscopic notation to label them. The allowed optical transitions listed here use $\Delta L=\pm1$.

### PDF page 59

The optical selection rules continue with $\Delta S=0$ and $\Delta J=0,\pm1$. For electric dipole transitions the forbidden zero-to-zero case is $J=0\to J=0$ (the handwritten line gives $J=1\to J=1$).

#### LS coupling example

One electron is in $4p$ ($n_1=4$, $\ell_1=1$) and the other is in $4d$ ($n_2=4$, $\ell_2=2$). Their projections are unspecified. Find the allowed values of $J$.

Orbital addition gives $L=1,2,3$. Spin addition gives $S=0,1$. For each pair, $J$ runs from $\lvert L-S\rvert$ through $L+S$.

| $S$ | $L=1$ | $L=2$ | $L=3$ |
| --- | --- | --- | --- |
| $0$ | $1$ | $2$ | $3$ |
| $1$ | $0,1,2$ | $1,2,3$ | $2,3,4$ |

The combined list is $J=0,1,2,3,4$.

#### Lecture, November 12, 2014 — Atomic physics

Exam 2 involves sketching wave functions. Choose one of questions 2 and 3 and one of questions 4 and 5. Topics are the Schrödinger equation, the hydrogen atom, and atomic physics. Consider single- and multi-electron atoms, including atoms with one or two electrons outside a closed shell.

### PDF page 60

A single-electron label $n\ell$ may be $3p$, for example. For a single electron, $\ell=0,1,\ldots,n-1$ and the measurable orbital angular momentum magnitude is $\sqrt{\ell(\ell+1)}\,\hbar$. In a multi-electron atom, $L$ denotes the total orbital quantum number. The total angular momentum magnitude is $\sqrt{J(J+1)}\,\hbar$, where the quantum number $J$ ranges from $\lvert L-S\rvert$ to $L+S$.

#### LS coupling example revisited

For $4p$ and $4d$ electrons, $\ell_1=1$, $\ell_2=2$, and both spins are $1/2$, each with projections $m_s=\pm1/2$. Orbital addition gives $L=1,2,3$ and spin addition gives $S=0,1$. Applying the range for $J$ to each pair gives $J=1,2,3$ for $S=0$ and the combined set $J=0,1,2,3,4$ for $S=1$.

#### Hydrogen example

Find the possible total angular momentum measurements for the hydrogen ground state and first excited level. The ground state is $1s$ with either spin projection. The first excited level contains $2s$ and $2p$ states with either spin projection. For $1s$, $\ell=0$ and $s=1/2$, so both endpoints of the range $\lvert\ell-s\rvert$ to $\ell+s$ equal $1/2$.

### PDF page 61

For $1s$, the total angular momentum magnitude is $\mechanical{J}=\sqrt{j(j+1)}\,\hbar=\sqrt{3/4}\,\hbar$. The allowed electric dipole excitation from $1s$ goes to $2p$ by $\Delta\ell=1$. For $2p$, $\ell=1$ and $s=1/2$, so $j=1/2$ or $3/2$, giving magnitudes $\sqrt{3/4}\,\hbar$ or $\sqrt{15/4}\,\hbar$.

#### LS coupling example 2 — Spectroscopic notation

For the $4p$ and $4d$ electrons, $L=1,2,3$, $S=0,1$, and the combined list is $J=0,1,2,3,4$. In the notebook's $n\,{}^{2S+1}L_J$ notation, the terms listed on this page are

| Spin $S$ | Orbital $L$ | Total $J$ | Terms |
| --- | --- | --- | --- |
| $0$ | $1,2,3$ | $1,2,3$, respectively | $4\,{}^1P_1$, $4\,{}^1D_2$, $4\,{}^1F_3$ |
| $1$ | $1$ | $0,1,2$ | $4\,{}^3P_0$, $4\,{}^3P_1$, $4\,{}^3P_2$ |
| $1$ | $2$ | $1,2,3$ | $4\,{}^3D_1$, $4\,{}^3D_2$, $4\,{}^3D_3$ |

### PDF page 62

For the remaining triplet in the $4p\,4d$ example, $S=1$ and $L=3$, so $J=2,3,4$. The terms are $4\,{}^3F_2$, $4\,{}^3F_3$, and $4\,{}^3F_4$.

#### Lecture, November 14, 2014 — Hund's rules

The topics are multi-electron atoms, Hund's rules, and examples. In the term symbol $\,{}^{2S+1}L_J$, identify the letter $L$, then the spin multiplicity $2S+1$, then the subscript $J$.

1. Maximize total spin $S$ subject to the Pauli exclusion principle.
2. Among terms satisfying the first rule, maximize total orbital angular momentum $L$.
3. For a subshell that is less than half full, select the smallest $J$.

#### Applying Hund's rules

The first five electrons in a $d$ subshell ($\ell=2$) occupy the five distinct orbitals $m_\ell=-2,-1,0,1,2$ with parallel spins. Using spin up for all five is a convention. All spin down gives the other extreme projection.

![[Kyle Kabasares - Modern Physics - Five electrons in a d subshell.png|**Fig. 40** Five singly occupied $d$ orbitals with parallel spins.]]

### PDF page 63

For two electrons in a $d$ subshell, parallel spins can occupy $m_\ell=-2,-1$ or $+1,+2$. These give the two extreme projections $M_L=-3$ and $+3$.

![[Kyle Kabasares - Modern Physics - Two electrons in a d subshell.png|**Fig. 41** Two parallel-spin configurations with extreme orbital projections.]]

#### Helium excited states

What are the $L$, $S$, and $J$ values for the first few excited states of helium? The ground configuration is $1s^2$. Excite one electron to form $1s\,2p$, consistent with the orbital dipole rule $\Delta\ell=\pm1$. The notes also ask how the $1s\,2s$ configuration can be reached and suggest asking Dr. Menke.

For $1s\,2p$, the first electron has $\ell_1=0$, $m_{\ell_1}=0$, and $s_1=1/2$. The second has $\ell_2=1$, $m_{\ell_2}=-1,0,1$, and $s_2=1/2$. This gives $L=1$ ($P$), $S=0$ or $1$, and $J=1$ for the singlet or $0,1,2$ for the triplet. The ordering predicted by the Hund-rule exercise puts $\,{}^1P_1$ highest and $\,{}^3P_0$ lowest by maximum $S$ and minimum $J$, with $\,{}^3P_1$ and $\,{}^3P_2$ between them.

### PDF page 64

For helium $1s\,2s$, both electrons have $\ell=0$ and $s=1/2$. Thus $L=0$, and $S=0,1$ gives the terms $\,{}^1S_0$ and $\,{}^3S_1$. In using Hund's rules, prioritize $S$, then $L$, then $J$.

#### Carbon term symbols

Carbon has six electrons in $1s^2\,2s^2\,2p^2$. The closed $1s$ and $2s$ subshells contribute zero net angular momentum. The two $2p$ electrons each have $\ell=1$ and $s=1/2$, giving $L=0,1,2$ and $S=0,1$ before applying the exclusion principle.

| $S$ | $L$ | $J$ | Term | Pauli restriction |
| --- | --- | --- | --- | --- |
| $0$ | $0$ | $0$ | $\,{}^1S_0$ | Allowed |
| $0$ | $1$ | $1$ | $\,{}^1P_1$ | Excluded |
| $0$ | $2$ | $2$ | $\,{}^1D_2$ | Allowed |
| $1$ | $0$ | $1$ | $\,{}^3S_1$ | Excluded |
| $1$ | $1$ | $0,1,2$ | $\,{}^3P_{0,1,2}$ | Allowed |
| $1$ | $2$ | $1,2,3$ | $\,{}^3D_{1,2,3}$ | Excluded |

The sketch argues against the triplet $D$ term by trying to place two parallel spins in the same $m_\ell$ orbital to reach $M_L=2$.

### PDF page 65

#### Wave functions — Dr. Physics A

A traveling wave can be written as $\psi=e^{i(kx-\omega t)}$, where $i=\sqrt{-1}$. Euler's formula gives $e^{i\alpha x}=\cos(\alpha x)+i\sin(\alpha x)$. The real part is sinusoidal, $\cos(kx-\omega t)$, with wave number $k=2\pi/\signal{\lambda}$.

![[Kyle Kabasares - Modern Physics - Sinusoidal wavelength.png|**Fig. 42** One wavelength of a sinusoidal wave.]]

#### Sketching wave functions

1. Choose a trial energy $\energy{E}$. The turning points at $\energy{E}=\energy{U}(x)$ separate classically allowed and forbidden regions.
2. The local kinetic energy $\energy{E}-\energy{U}(x)$ varies with position. In the allowed region the local wave number is $k=\sqrt{2\mechanical{m}[\energy{E}-\energy{U}(x)]}/\hbar$.
3. In the allowed region, $\psi''=-k^2\psi$, so the curvature points toward the axis. It sharpens as $\energy{E}-\energy{U}(x)$ and $k$ increase.
4. In the forbidden region, $\psi''=\kappa^2\psi$ with $\kappa^2=2\mechanical{m}[\energy{U}(x)-\energy{E}]/\hbar^2$. The curvature points away from the axis, and a bound-state tail decays as $x\to\pm\infty$.
5. The ground state $n=1$ has no nodes. State $n$ has $n-1$ interior nodes.

![[Kyle Kabasares - Modern Physics - Turning points and kinetic energy.png|**Fig. 43** The trial energy intersects the potential at the turning points. The vertical gap inside gives the local kinetic energy.]]

### PDF page 66

6. The wave amplitude depends on $\energy{E}-\energy{U}(x)$. In the step-potential sketch the particle slows in region II and the probability $\int_{\mathrm{II}}\lvert\psi(x)\rvert^2\,dx$ increases with the amplitude. To see the role of the wave number, take $\psi=A\sin(kx)$, so $\psi'=kA\cos(kx)$ and $\psi^2+(\psi')^2/k^2=A^2$. Both $\psi$ and $\psi'$ are continuous at a finite step, but $k=\sqrt{2\mechanical{m}(\energy{E}-\energy{U})}/\hbar$ changes.
7. For $\energy{U}(x)=\energy{U}(-x)$ the definite-parity solutions have $\lvert\psi(x)\rvert^2=\lvert\psi(-x)\rvert^2$. An even wave function obeys $\psi(x)=+\psi(-x)$ and an odd one obeys $\psi(x)=-\psi(-x)$.

![[Kyle Kabasares - Modern Physics - Step potential amplitude.png|**Fig. 44** A stepped potential changes the wave number and amplitude between regions I and II.]]

#### Book study

With zero potential in the well, $k^2=(\mechanical{p}/\hbar)^2=2\mechanical{m}\energy{E}/\hbar^2$. In the forbidden region outside a finite well the wave function curves away from the axis.

### PDF page 67

#### Problem 8.1 — Finite well with two interior potentials

Take $\energy{V}_2>\energy{E}>\energy{V}_1>0$. In region I, $\energy{V}=0$ and the kinetic energy is constant and maximal, so the de Broglie wavelength is constant there. The sketch shows a smaller amplitude in this region, where the particle moves faster. In region II, $\energy{V}=\energy{V}_1$, the kinetic energy decreases, the wavelength increases, and the sketch shows a larger amplitude. Outside both regions, $\energy{V}_2>\energy{E}$ and the bound-state wave function decays exponentially.

![[Kyle Kabasares - Modern Physics - Stepped finite well problem.png|**Fig. 45** Wave function in a stepped finite well with two oscillatory regions and evanescent tails.]]

#### Problem 8.2 — Electron in an infinite well

For $\mechanical{L}=0.100\,\unit{nm}$, use $\energy{E}_n=n^2h^2/(8\mechanical{m}_e\mechanical{L}^{\,2})$. Substituting $h=6.626\times10^{-34}\,\unit{J\,s}$ and $\mechanical{m}_e=9.11\times10^{-31}\,\unit{kg}$ gives

$$
\energy{E}_1=6.02\times10^{-18}\,\unit{J}=37.7\,\unit{eV}.
$$

Using that rounded ground-state energy gives $\energy{E}_2=150.8\,\unit{eV}$, $\energy{E}_3=339.3\,\unit{eV}$, and $\energy{E}_4=603.2\,\unit{eV}$.

### PDF page 68

#### Reviewing hydrogen

- The Bohr model describes the electron as a point particle moving in a circle. Its postulated fixed energy levels give the correct energies and leave the origin of the quantization unexplained.
- The de Broglie model gives the same energies and explains quantization by treating the electron as a standing wave on a ring. The ring gives an effectively one-dimensional model.
- Both models give incorrect orbital angular momenta and lack a generalization to multi-electron atoms.
- The Schrödinger equation describes the electron as a three-dimensional wave. Boundary conditions give the quantized energies. The equation also gives the correct orbital angular momenta and generalizes to multi-electron atoms.

![[Kyle Kabasares - Modern Physics - Bohr orbit review.png|**Fig. 46** Circular Bohr orbits around a positive nucleus.]]

![[Kyle Kabasares - Modern Physics - De Broglie ring review.png|**Fig. 47** Standing matter wave around a ring.]]

### PDF page 69

#### Three-dimensional wave functions

For hydrogen, $\psi_{n\ell m}(r,\theta,\phi)=R_{n\ell}(r)Y_{\ell m}(\theta,\phi)$, or $\psi=R(r)f(\theta)g(\phi)$. The probability in $d\tau$ is $P(r,\theta,\phi)\,d\tau=\psi_{n\ell m}^*\psi_{n\ell m}\,d\tau$.

![[Kyle Kabasares - Modern Physics - Three-dimensional wave function coordinates.png|**Fig. 48** Spherical position coordinates $r$, $\theta$, and $\phi$.]]

For a bound electron the radial function tends to zero at infinity, consistent with normalizability and vanishing probability density far from the nucleus. The azimuthal factor must match at $\phi=0$ and $2\pi$. In general $g(\phi+2\pi)=g(\phi)$.

#### Total angular momentum example

An electron has $\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}$. For hydrogen in $3d$, $n=3$, $\ell=2$, and $s=1/2$. Find the possible $j$, $\mechanical{J}$, and $\mechanical{J}_z$. From $\lvert\ell-s\rvert$ through $\ell+s$, the values of $j$ are $3/2$ and $5/2$. The magnitude $\sqrt{j(j+1)}\,\hbar$ is respectively $\sqrt{15/4}\,\hbar$ and $\sqrt{35/4}\,\hbar$.

### PDF page 70

For the $3d$ example, $\mechanical{J}_z=m_j\hbar$ and $m_j=-j,-j+1,\ldots,j$. When $j=3/2$, $m_j=\pm1/2,\pm3/2$. When $j=5/2$, $m_j=\pm1/2,\pm3/2,\pm5/2$. The combined list of projections is $\mechanical{J}_z=\pm\hbar/2,\pm3\hbar/2,\pm5\hbar/2$.

#### LS coupling review

For two electrons outside a closed shell, $\mechanical{\vec L}=\mechanical{\vec L}_1+\mechanical{\vec L}_2$, $\mechanical{\vec S}=\mechanical{\vec S}_1+\mechanical{\vec S}_2$, and $\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}$. The quantum numbers run from difference to sum for each addition, giving the label $n\,{}^{2S+1}L_J$.

The optical rules listed are $\Delta L=\pm1$, $\Delta S=0$, and $\Delta J=0,\pm1$. The handwritten exception again says $1\to1$. The electric dipole exception is $J=0\to J=0$.

For $4p$ and $4d$ electrons, $\ell_1=1$, $\ell_2=2$, and $s_1=s_2=1/2$. Thus $L=1,2,3$ and $S=0,1$. The boxed list on this page gives $J=1,2,3,4$. The $L=1$, $S=1$ case also gives $J=0$, as found on PDF page 59.

### PDF page 71

#### Homework 8.3 — Differentiating an oscillator state

The oscillator ground state and potential are

$$
\psi_0(x)=Ae^{-x^2/(2L^2)},\qquad
\energy{V}(x)=\tfrac12\mechanical{k}x^2=\frac{\hbar^2x^2}{2\mechanical{m}\mechanical{L}^{\,4}}.
$$

Define $\psi_{\mathrm{new}}(x)=L\,d\psi_0/dx$, so that $\psi_{\mathrm{new}}'=L\psi_0''$. Differentiating the Gaussian gives $\psi_0'=-(x/L^2)Ae^{-x^2/(2L^2)}$ and therefore $\psi_{\mathrm{new}}=-(Ax/L)e^{-x^2/(2L^2)}$. The product rule gives

$$
\psi_{\mathrm{new}}'=-\frac{A}{L}\left(1-\frac{x^2}{L^2}\right)e^{-x^2/(2L^2)}.
$$

For the second derivative, apply the product rule to $f=x^2$ and $g=e^{-x^2/(2L^2)}/L^2$. Then $f'=2x$ and $g'=-xe^{-x^2/(2L^2)}/L^4$, giving

$$
\psi_{\mathrm{new}}''=-\frac{A}{L}
\left(-\frac{x}{L^2}-\frac{2x}{L^2}+\frac{x^3}{L^4}\right)e^{-x^2/(2L^2)}.
$$

Substitute into $-\hbar^2\psi_{\mathrm{new}}''/(2\mechanical{m})+\energy{V}\psi_{\mathrm{new}}=\energy{E}\psi_{\mathrm{new}}$.

### PDF page 72

Homework 8.3 continues expanding the second derivative and restates the time-independent equation. The consistent Gaussian exponent throughout is $-x^2/(2L^2)$, and the last power in the derivative is $x^3$, as follows from differentiating $x^2e^{-x^2/(2L^2)}$. Equivalently, $\psi_{\mathrm{new}}''=(x^2/L^4-3/L^2)\psi_{\mathrm{new}}$. Inserting this into the equation cancels the $x^2$ term against the oscillator potential and gives $\energy{E}=3\hbar^2/(2\mechanical{m}L^2)$.

#### Problem 8.4 — Penetration depth

Write the penetration depth as $\mechanical{\eta}=1/\alpha$.

$$
\mechanical{\eta}=\frac{\hbar}{\sqrt{2\mechanical{m}(\energy{V_0}-\energy{E})}},
\qquad
\energy{V_0}-\energy{E}=\frac{\hbar^2}{2\mechanical{m}\mechanical{\eta}^{\,2}}.
$$

For an electron and $\mechanical{\eta}=1.0\times10^{-9}\,\unit{m}$, use $\hbar=1.05\times10^{-34}\,\unit{J\,s}$ and $\mechanical{m}_e=9.11\times10^{-31}\,\unit{kg}$. The energy difference is $0.038\,\unit{eV}$.

### PDF page 73

#### Homework set 11

**11.1.** For $j=3/2$, the projections are $m_j=-3/2,-1/2,1/2,3/2$. The magnetic field defines the $z$-axis in the Stern–Gerlach experiment, giving four lines. For zero total spin and $\ell=1$, there are $2\ell+1=3$ lines from the orbital projections.

**11.2.** Hydrogen in $3d$ has $\ell=2$ and $s=1/2$. The range $\lvert\ell-s\rvert$ to $\ell+s$ gives $j=3/2,5/2$. The magnitudes are $\sqrt{15/4}\,\hbar$ and $\sqrt{35/4}\,\hbar$. The combined projections are $\mechanical{J}_z/\hbar=-5/2,-3/2,-1/2,1/2,3/2,5/2$.

**11.3(a).** For a $p$ electron, $\ell=1$ and $s=1/2$, so the possible $j$ values are $1/2$ and $3/2$. The $p\to s$ transition changes $\ell$ by $-1$.

**11.4(a).** Test the transitions using the order $(n,\ell,m_\ell,m_s)$.

1. $(5,2,1,1/2)\to(5,2,1,-1/2)$ fails the $\Delta\ell=\pm1$ condition.
2. $(4,3,0,1/2)\to(4,2,1,-1/2)$ changes the spin projection. The handwritten reason was $\Delta n\ne0$, although the earlier rule allows $\Delta n=0$.
3. $(5,2,-2,-1/2)\to(1,0,0,-1/2)$ fails both the $\Delta\ell$ and $\Delta m_\ell$ conditions.
4. The fourth transition is marked allowed. The calculation gives $\Delta\energy{E}=\energy{E}_f-\energy{E}_i=-(13.6\,\unit{eV})(1/n_f^2-1/n_i^2)=2.55\,\unit{eV}$.

### PDF page 74

#### Problem 10.3 — Angle of orbital angular momentum

In the vector model,

$$
\cos\theta=\frac{\mechanical{L}_z}{\lvert\mechanical{\vec L}\rvert}
=\frac{m_\ell}{\sqrt{\ell(\ell+1)}}.
$$

![[Kyle Kabasares - Modern Physics - Orbital angular momentum angle.png|**Fig. 49** Projection of orbital angular momentum and the angle to the $z$-axis.]]

For $\ell=4$, $m_\ell$ ranges from $-4$ to $4$. The smallest angle corresponds to the largest cosine, at $m_\ell=4$, so $\theta_{\min}=\arccos(4/\sqrt{20})=26.6^\circ$. For $\ell=2$, the largest projection is $m_\ell=2$, giving $\theta_{\min}=\arccos(2/\sqrt6)=35.3^\circ$.

#### Problem 10.4 — Transverse angular momentum

With $\ell=2$,

$$
\mechanical{L}_x^2+\mechanical{L}_y^2
=\mechanical{L}^{\,2}-\mechanical{L}_z^2
=[\ell(\ell+1)-m_\ell^2]\hbar^2.
$$

For $m_\ell=2$ the result is $(6-4)\hbar^2=2\hbar^2$.

### PDF page 75

**10.4(b–d).** For $\ell=2$, the largest value of $\mechanical{L}_x^2+\mechanical{L}_y^2$ is $6\hbar^2$ at $m_\ell=0$. At $m_\ell=1$ the sum is $6\hbar^2-\hbar^2=5\hbar^2$. The individual transverse components are indeterminate in this state. The smallest principal quantum number for $\ell=2$ is $n=3$, since $\ell\le n-1$.

#### Problem 9.2 — Momentum expectation in an infinite well

For $n=3$ in a well of width $L$, $\psi_3(x)=\sqrt{2/L}\sin(3\pi x/L)$ inside the well and zero outside. Apply the momentum operator $\hat p_x=(\hbar/i)d/dx$.

$$
\begin{aligned}
\langle\mechanical{p}_x\rangle
&=\int_0^L\psi_3^*\frac{\hbar}{i}\frac{d\psi_3}{dx}\,dx\\
&=\frac{6\pi\hbar}{iL^2}\int_0^L
\sin(3\pi x/L)\cos(3\pi x/L)\,dx\\
&=\frac{3\pi\hbar}{iL^2}\left[-\frac{L}{6\pi}\cos(6\pi x/L)\right]_0^L=0.
\end{aligned}
$$

The two endpoint cosines are equal.

### PDF page 76

#### Problems from the book

**6-23(a).** For $\energy{E}_4<\energy{V}_0$, the fourth bound state in a finite well has $n-1=3$ interior nodes.

![[Kyle Kabasares - Modern Physics - Fourth state of a finite well.png|**Fig. 50** Fourth bound-state sketch in a finite square well.]]

**6-26.** Sketch a wave function for a stepped well with $\energy{V}_1<\energy{E}<\energy{V}_2$.

![[Kyle Kabasares - Modern Physics - Stepped well book problem.png|**Fig. 51** A wave function with two oscillatory regions and tails in the exterior potential $V_2$.]]

**6-3.** Given $\psi(x)=Ae^{-x^2/(2L^2)}$ and $\energy{E}=\hbar^2/(2\mechanical{m}L^2)$, use the time-independent Schrödinger equation. The first derivative is $\psi'=-(Ax/L^2)e^{-x^2/(2L^2)}$. The product rule gives

$$
\psi''(x)=\frac{A}{L^2}\frac{d}{dx}\left[-xe^{-x^2/(2L^2)}\right]
=\frac{A}{L^2}\left[\frac{x^2}{L^2}-1\right]e^{-x^2/(2L^2)}.
$$

### PDF page 77

**6-3, continued.** Solve for $\energy{V}(x)$ and substitute the Gaussian and its second derivative.

$$
\begin{aligned}
\energy{V}(x)
&=\energy{E}+\frac{\hbar^2}{2\mechanical{m}}\frac{\psi''(x)}{\psi(x)}\\
&=\frac{\hbar^2}{2\mechanical{m}L^2}+\frac{\hbar^2}{2\mechanical{m}}
\left(\frac{x^2}{L^4}-\frac{1}{L^2}\right)
=\frac{\hbar^2x^2}{2\mechanical{m}L^4}.
\end{aligned}
$$

This is $\energy{V}(x)=\tfrac12\mechanical{k}x^2$ with $\mechanical{k}=\hbar^2/(\mechanical{m}L^4)$.

**6-4(a).** The classical kinetic energy at position $x$ is

$$
\energy{K}(x)=\energy{E}-\energy{V}(x)=
\frac{\hbar^2}{2\mechanical{m}L^2}-\frac{\hbar^2x^2}{2\mechanical{m}L^4}
=\frac{\hbar^2(L^2-x^2)}{2\mechanical{m}L^4}.
$$

### PDF page 78

**6-4(b).** A classical turning point has $\energy{K}=0$, or $\energy{E}=\energy{V}(x)$. Here $L^2-x^2=0$, so $x=\pm L$.

**6-4(c).** Equate the coefficients in $\energy{V}(x)=\tfrac12\mechanical{m}\mechanical{\omega}^{\,2}x^2=\hbar^2x^2/(2\mechanical{m}L^4)$. This gives $\mechanical{\omega}=\hbar/(\mechanical{m}L^2)$. The handwritten intermediate step cancels both factors of mass when solving for $\omega^2$. Retaining them gives

$$
\energy{E}=\energy{V}(x)+\energy{K}(x)=\tfrac12\mechanical{m}\mechanical{\omega}^{\,2}L^2
=\frac{\hbar^2}{2\mechanical{m}L^2}=\tfrac12\hbar\mechanical{\omega}.
$$

Also $\hbar=h/(2\pi)$, so $\hbar^2=h^2/(4\pi^2)$.

### PDF page 79

The de Broglie wavelength satisfies $\signal{\lambda}=h/\mechanical{p}=h/(\mechanical{m}\mechanical{v})$, where $\mechanical{p}=\sqrt{2\mechanical{m}\energy{K}}$ in the nonrelativistic case.

**6-6(a), crossed-out work.** The wave function is $\psi(x)=A\sin(kx)$ with $k=2.5\times10^{10}\,\unit{m^{-1}}$. The work sets up the expectation integral with $\hat p=(\hbar/i)\partial/\partial x$ and notes that $\psi''=-k^2\psi$ for the zero-potential equation.

**6-16.** The infinite-well $n=2$ to $n=1$ separation corresponds to a photon with $\signal{\lambda}=694.3\,\unit{nm}$.

$$
\Delta\energy{E}=\energy{E}_2-\energy{E}_1=\frac{3\pi^2\hbar^2}{2\mechanical{m}_eL^2}
=\frac{hc}{\signal{\lambda}},\qquad
L=\sqrt{\frac{3\pi^2\hbar^2\signal{\lambda}}{2\mechanical{m}_ehc}}
=0.791\,\unit{nm}.
$$

**10.6(a).** Model the electron as a classical uniform sphere of radius $r$. Its angular momentum is $\mechanical{L}=\mechanical{I}\mechanical{\omega}=(2/5)\mechanical{m}_e r^2\mechanical{\omega}=(2/5)\mechanical{m}_er\mechanical{v}$. Equating this to $\sqrt{s(s+1)}\,\hbar=\sqrt{3/4}\,\hbar$ gives a surface speed of $2.51\times10^{11}\,\unit{m/s}$, about $837c$. The result exposes the failure of the classical spinning-sphere model.

### PDF page 80

#### Understanding the Stern–Gerlach experiment

A charge moving around a circular orbit has a magnetic moment proportional to its angular momentum. By the right-hand rule, $\mechanical{\vec L}=\mechanical{m}(\mechanical{\vec r}\times\mechanical{\vec v})$. For positive charge the vectors are parallel. For negative charge they are antiparallel.

$$
\magnetic{\mu}=\circuit{I}\mechanical{A}
=\electric{q}\frac{\mechanical{v}}{2\pi r}\pi r^2
=\frac{\electric{q}}{2\mechanical{m}}\mechanical{L}.
$$

![[Kyle Kabasares - Modern Physics - Angular momentum of circular current.png|**Fig. 52** Angular momentum of a particle following a circular orbit.]]

For the hydrogen electron, the orbital moment has magnitude $\magnetic{\mu}_B\sqrt{\ell(\ell+1)}$ and $\magnetic{\mu}_z=-m_\ell\magnetic{\mu}_B$, with $\magnetic{\mu}_B=\electric{e}\hbar/(2\mechanical{m}_e)$.

Atoms from an oven are collimated and sent through a magnet whose pole shape produces a gradient in $\magnetic{B}_z$ along $z$. The description treats the transverse components as constant along the beam. Classical dipoles could have a continuum of orientations.

![[Kyle Kabasares - Modern Physics - Stern Gerlach apparatus.png|**Fig. 53** Oven, collimator, shaped magnet poles, and detector in the Stern–Gerlach apparatus.]]

### PDF page 81

With orbital angular momentum alone, there are $2\ell+1$ possible values of $\magnetic{\mu}_z$ and thus $2\ell+1$ beam positions, counting the undeflected one. This gives one position for $\ell=0$ and three for $\ell=1$, corresponding to $m_\ell=-1,0,1$.

The silver ground configuration is $[\mathrm{Kr}]\,4d^{10}5s^1$. The $s$ valence electron has $\ell=0$, so the orbital-only argument predicts one beam position. The experiment gave two deflections.

The total angular momentum and its projection satisfy

$$
\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S},\qquad
\lvert\mechanical{\vec J}\rvert=\sqrt{j(j+1)}\,\hbar,\qquad
\mechanical{J}_z=m_j\hbar.
$$

For one electron, $j=\ell+s$ or $\lvert\ell-s\rvert$, and the $2j+1$ projections are $m_j=-j,-j+1,\ldots,j$. For $\ell=0$, $j=s=1/2$, so the two projections are from spin. For $\ell=1$, $j=3/2$ or $1/2$. The vector model describes these as parallel and antiparallel coupling, respectively.

### PDF page 82

#### Example problems

Two electrons have $\ell_1=2$ and $\ell_2=3$. The possible total orbital angular momentum quantum numbers range from $\lvert2-3\rvert=1$ to $2+3=5$, giving $L=1,2,3,4,5$.

**11.4.** The rules used here allow any $\Delta n$, require $\Delta L=\pm1$ and $\Delta S=0$, and allow $\Delta J=0,\pm1$ except $J=0\to0$.

| Transition | Classification |
| --- | --- |
| $4S_{1/2}\to3S_{1/2}$ | Forbidden, $\Delta L=0$. |
| $4S_{1/2}\to3P_{3/2}$ | Allowed, $\Delta L=+1$ and $\Delta J=+1$. |
| $4P_{3/2}\to3S_{1/2}$ | Allowed, $\Delta L=-1$ and $\Delta J=-1$. |
| $4D_{5/2}\to3P_{1/2}$ | Forbidden, $\lvert\Delta J\rvert=2$. |
| $4D_{3/2}\to3P_{1/2}$ | Allowed, $\Delta L=-1$ and $\Delta J=-1$. |
| $4D_{3/2}\to3S_{1/2}$ | Forbidden, $\lvert\Delta L\rvert=2$. |
| $5D_{3/2}\to4S_{1/2}$ | Forbidden, $\lvert\Delta L\rvert=2$. |
| $5P_{1/2}\to3S_{1/2}$ | Allowed. |

### PDF page 83

**6-23.** Sketch $\psi(x)$ and $P(x)=\lvert\psi(x)\rvert^2$ for the $n=4$ state of a finite square well. The wave function has three nodes, giving four lobes in the probability density. The small potential sketch is drawn as an upward step within $0<x<L$, while the wave function and problem label describe a well.

![[Kyle Kabasares - Modern Physics - Finite well wave function and density.png|**Fig. 54** The notebook's potential, fourth-state wave function, and squared modulus sketches.]]

**6-26.** For $\energy{V}_1<\energy{E}<\energy{V}_2$, sketch the stepped well and its wave function separately.

![[Kyle Kabasares - Modern Physics - Stepped well and separate wave function.png|**Fig. 55** Stepped potential and wave function with the interior step at $x_1$ and the right boundary at $x_2$.]]

For the last sketch, as the kinetic energy decreases, momentum decreases and $\signal{\lambda}=h/\mechanical{p}$ increases.

![[Kyle Kabasares - Modern Physics - Variable wavelength in a well.png|**Fig. 56** Two wave functions in a varying potential between infinite walls, at the indicated energies of $2\,\unit{eV}$ and $0.5\,\unit{eV}$.]]

### PDF page 84

#### Possible energy states of atomic carbon

Carbon has six electrons, $1s^2\,2s^2\,2p^2$. The closed subshell contributions cancel. Each remaining electron has $n=2$, $\ell=1$, and $s=1/2$. Coupling gives $L=0,1,2$ and $S=0,1$, with $J$ running from $\lvert L-S\rvert$ to $L+S$. Before the Pauli restriction, the union of $J$ values is $0,1,2,3$.

| $S$ | $L$ | $J$ | Spectroscopic notation on this page | Pauli restriction |
| --- | --- | --- | --- | --- |
| $0$ | $0$ | $0$ | $2\,{}^1S_0$ | Allowed |
| $0$ | $1$ | $1$ | $2\,{}^1P_1$ | Excluded, as marked on PDF page 64 |
| $0$ | $2$ | $2$ | $2\,{}^1D_2$ | Allowed |
| $1$ | $0$ | $1$ | $2\,{}^3S_1$ | Excluded |
| $1$ | $1$ | $0,1,2$ | $2\,{}^3P_{0,1,2}$ | Allowed |
| $1$ | $2$ | $1,2,3$ | $2\,{}^3D_{1,2,3}$ | Excluded |

The handwritten explanation for the excluded triplet $S$ term sketches two parallel spins occupying one orbital. The $S$ in that term symbol means total orbital quantum number $L=0$, while each electron in this configuration remains a $p$ electron.

### PDF page 85

#### Lecture, November 19, 2014 — Radioactive decay

In the comparison used in lecture, alpha particles are helium-4 nuclei with the least penetration and most ionization. Gamma rays are very short-wavelength photons with the most penetration and least ionization in air. Beta particles (electrons in $\beta^-$ decay) lie between them.

Radioactive decay is statistical. Individual decays are random, while the expected number of decays in $dt$ is proportional to the number $N(t)$ of nuclei present. Let $\lambda$ be the decay constant.

$$
-dN=\lambda N\,dt,\qquad
\int_{N_0}^{N_f}\frac{dN}{N}=-\int_0^t\lambda\,dt,\qquad
\ln\frac{N_f}{N_0}=-\lambda t,\qquad N(t)=N_0e^{-\lambda t}.
$$

The activity is $R=-dN/dt=\lambda N_0e^{-\lambda t}=R_0e^{-\lambda t}$. One becquerel is one decay per second. One curie is $3.7\times10^{10}\,\unit{Bq}$.

### PDF page 86

#### Radioactive decay examples

**1.** A $1.0\,\unit{mg}$ sample has a half-life of one hour. After two hours its remaining radioactive mass is $(1.0\,\unit{mg})(1/2)(1/2)=0.25\,\unit{mg}$.

**2.** A polonium-210 sample undergoing alpha decay has activity $R=2000\,\unit{Bq}$. Find the number of nuclei and the mass. The calculation uses $t_{1/2}=138$ days.

$$
\frac12=e^{-\lambda t_{1/2}},\qquad
\lambda=\frac{\ln 2}{t_{1/2}},\qquad
N=\frac{R}{\lambda}=\frac{R t_{1/2}}{\ln 2}=3.44\times10^{10}.
$$

There is one nucleus per atom. Using $6.02\times10^{23}$ atoms per mole and a molar mass of $0.210\,\unit{kg/mol}$ gives a sample mass of $1.2\times10^{-14}\,\unit{kg}$.

### PDF page 87

#### Lecture, November 21, 2014 — The nucleus

**1. Nuclear size.** Could electrons be constituents of the nucleus? Estimate the momentum spread of an electron confined to a diameter of $8.0\times10^{-15}\,\unit{m}$ using the Heisenberg uncertainty relation.

$$
\Delta x\,\Delta p_x\ge\frac{\hbar}{2},\qquad
\Delta p_x\gtrsim\frac{6.58\times10^{-16}\,\unit{eV\,s}}{2(8.0\times10^{-15}\,\unit{m})}
=0.041\,\unit{eV\,s/m}.
$$

This gives a momentum scale with $pc\simeq12.3\,\unit{MeV}$. The handwritten estimate of $81\,\unit{keV}$ uses $938\,\unit{MeV}/c^2$, the proton mass, in $p^2/(2m)$. For an electron the momentum is relativistic, giving a kinetic energy scale $\sqrt{(pc)^2+(\mechanical{m}_ec^2)^2}-\mechanical{m}_ec^2$ of roughly $12\,\unit{MeV}$. The lecture compares the confinement scale with the $13.6\,\unit{eV}$ binding energy of the electron in hydrogen.

The mass number $A$ is the total number of protons and neutrons. The atomic number $Z$ counts protons and $N$ counts neutrons, so $A=N+Z$. The notation $\,{}_Z^AX_N$ gives, for example, $\,{}_8^{16}\mathrm O_8$, also written $\,{}_8^{16}\mathrm O$ or $\,{}^{16}\mathrm O$.

**2. Nuclear spin.** The deuteron is the nucleus of deuterium, $\,{}_1^2\mathrm H$, with $Z=1$, $A=2$, and spin 1. A hypothetical model with two protons and one electron would combine three spin-$1/2$ particles. Its spin projections would be half-integers, $\pm1/2$ or $\pm3/2$, inconsistent with spin 1.

### PDF page 88

**3. Nuclear magnetic moments.** The Bohr and nuclear magnetons use the electron and proton masses, respectively.

$$
\magnetic{\mu}_B=\frac{\electric{e}\hbar}{2\mechanical{m}_e},
\qquad
\magnetic{\mu}_N=\frac{\electric{e}\hbar}{2\mechanical{m}_p},
\qquad
\mechanical{m}_e=9.11\times10^{-31}\,\unit{kg},\quad
\mechanical{m}_p=1.67\times10^{-27}\,\unit{kg}.
$$

The electron moment is approximately one Bohr magneton in magnitude. The nuclear magneton sets the scale of the proton's magnetic moment.

#### Nuclear radius and density

The scattering sketch shows deflection by a nucleus. The Coulomb potential energy for two unit positive charges is $\energy{V}=\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$. The notes label the matter radius and connect the nuclear scale with the short range of the strong force.

![[Kyle Kabasares - Modern Physics - Alpha scattering and nuclear radius.png|**Fig. 57** Deflection of an alpha particle near a nucleus.]]

The second sketch shows polonium-210 alpha particles hitting beryllium, producing penetrating radiation that passes through lead and ejects protons from paraffin. The handwritten proton energy is labeled $5.7\,\unit{keV}$.

![[Kyle Kabasares - Modern Physics - Neutron discovery sketch.png|**Fig. 58** Beryllium, lead, and paraffin in the neutron-discovery sketch.]]

With nuclear radius $\mechanical{R}=R_0A^{1/3}$ and $R_0=1.2\times10^{-15}\,\unit{m}=1.2\,\unit{fm}$, the volume is $(4\pi/3)R_0^3A$. The mass is approximately $uA$, where $u$ is the atomic mass unit. The density is approximately independent of $A$,

$$
\mechanical{\rho}=\frac{uA}{(4\pi/3)R_0^3A}
=\frac{u}{(4\pi/3)R_0^3}
\simeq2.3\times10^{17}\,\unit{kg/m^3}.
$$

### PDF page 89

#### Lecture, November 26, 2014 — Nuclear magnetons and the confinement estimate

The lecture revisits the calculation from Friday. A nucleon is a nuclear particle, either a proton or a neutron. Nuclear magnetic moments are expressed in nuclear magnetons.

$$
\magnetic{\mu}_N=\frac{\electric{e}\hbar}{2\mechanical{m}_p},\qquad
\magnetic{\mu}_p=2.79\magnetic{\mu}_N,\qquad
\magnetic{\mu}_n=-1.91\magnetic{\mu}_N,\qquad
\magnetic{\mu}_e=-1.00116\magnetic{\mu}_B.
$$

The nuclear magneton is roughly 1800 times smaller than the Bohr magneton. The neutron has zero net charge but a negative magnetic moment, indicating an internal charge distribution.

For the confinement estimate, take $\Delta x$ of order the nuclear diameter and $\mechanical{p}_x$ of order $\Delta p_x$. The smallest momentum spread in the estimate is $\hbar/(2\Delta x)=0.041\,\unit{eV\,s/m}$. Using the nonrelativistic expression for a proton with $\mechanical{m}_pc^2=938\,\unit{MeV}$ gives

$$
\energy{K}\simeq\frac{(\Delta p_xc)^2}{2\mechanical{m}_pc^2}
=8.06\times10^4\,\unit{eV}\simeq0.08\,\unit{MeV}.
$$

### PDF page 90

For the electron, the handwritten calculation uses $\mechanical{m}_ec^2=511\,\unit{keV}$ in the nonrelativistic formula and obtains $(pc)^2/(2\mechanical{m}_ec^2)=148\,\unit{MeV}$. The estimate illustrates the large energy cost of nuclear confinement. The relativistic kinetic energy for the same momentum scale is about $12\,\unit{MeV}$, as noted on PDF page 87.

The radius model $\mechanical{R}=R_0A^{1/3}$ with $R_0=1.2\,\unit{fm}$ gives

$$
\mechanical{R}(\,{}^{238}\mathrm U)=7.4\,\unit{fm},\qquad
\mechanical{R}(\,{}^4\mathrm{He})=1.9\,\unit{fm},\qquad
\frac{\mechanical{R}(\,{}^{238}\mathrm U)}{\mechanical{R}(\,{}^4\mathrm{He})}=3.9.
$$

In nuclide notation, $A$ counts protons plus neutrons, $Z$ counts protons, and $N$ counts neutrons. The density is mass divided by the spherical volume $(4\pi/3)\mechanical{R}^{\,3}$.

The strong nuclear force contributes to binding. The atom's mass is smaller than the sum $Z\mechanical{m}_e+Z\mechanical{m}_p+N\mechanical{m}_n$ for its separated constituents. The atomic electron binding energy compares the mass of the bare nucleus plus free electrons with the mass of the atom.

$$
\energy{B}_{\mathrm{atomic}}=(\mechanical{m}_{\mathrm{nucleus}}+Z\mechanical{m}_e-\mechanical{m}_{\mathrm{atom}})c^2.
$$

### PDF page 91

The deuteron is the nucleus of deuterium and contains one proton and one neutron. The atom's mass $2.014102\,\unit{u}$ exceeds the nuclear mass, about $2.01355\,\unit{u}$, by approximately the electron mass $0.000549\,\unit{u}$ when electron binding is neglected. Using atomic masses cancels the electron masses in the difference.

$$
\begin{aligned}
\mechanical{M}(\,{}^2\mathrm H)&\simeq\mechanical{M}(\,{}^1\mathrm H)+\mechanical{m}_n-\energy{B}_d/c^2,\\
\energy{B}_d&=[\mechanical{M}(\,{}^1\mathrm H)+\mechanical{m}_n-\mechanical{M}(\,{}^2\mathrm H)]c^2\\
&=(1.007825+1.008665-2.014102)\,\unit{u}\,c^2\simeq2.22\,\unit{MeV}.
\end{aligned}
$$

The conversion is $1\,\unit{u}\,c^2\simeq931.5\,\unit{MeV}$.

#### Lecture, December 1, 2014 — Nuclear binding energy

For a nuclide $\,{}_Z^AX$, $A=Z+N$ is the mass number, $Z$ counts protons, $N$ counts neutrons, and $X$ is the element symbol. Using atomic masses and neglecting the electronic binding correction,

$$
\energy{B}(\,{}_Z^AX)=
[N\mechanical{m}_n+Z\mechanical{M}(\,{}^1\mathrm H)-\mechanical{M}(\,{}_Z^AX)]c^2.
$$

The binding energy of the deuteron is $\energy{B}_d=2.224\,\unit{MeV}$. In $\gamma+d\to n+p$, the threshold photon energy includes the recoil term. In the mass notation used in the notes,

$$
hf_{\min}=\energy{B}_d\left[1+\frac{\energy{B}_d}{2\mechanical{M}(\,{}^2\mathrm H)c^2}\right].
$$

### PDF page 92

The potential sketches compare long-range Coulomb attraction for an electron and positron with a nuclear potential and a short-range square-well approximation for a neutron–proton collision. The approximation sets the potential to zero outside about $3\,\unit{fm}$. The collision sketch labels the impact parameter $b$.

![[Kyle Kabasares - Modern Physics - Coulomb and nuclear potentials.png|**Fig. 59** Coulomb and nuclear potential sketches and neutron–proton scattering.]]

A nucleus is energetically stable against a breakup into $R$ and $S$ when its mass is smaller than the combined product mass.

$$
\energy{B}_{R+S}=[\mechanical{M}(R)+\mechanical{M}(S)-\mechanical{M}(\,{}_Z^AX)]c^2.
$$

A positive value means the breakup requires energy. A negative value makes that channel energetically possible. The starred remark allows for persistence despite a negative value, as may occur when a decay is strongly inhibited.

#### Beryllium-8 example

Show that $\,{}^8\mathrm{Be}$ has positive binding energy relative to free nucleons but is unstable against breakup into two alpha particles.

$$
\begin{aligned}
\energy{B}(\,{}^8\mathrm{Be})
&=[4\mechanical{m}_n+4\mechanical{M}(\,{}^1\mathrm H)-\mechanical{M}(\,{}^8\mathrm{Be})]c^2\\
&=[4(1.008665)+4(1.007825)-8.005305]\,\unit{u}\,c^2
\simeq56.5\,\unit{MeV}.
\end{aligned}
$$

For $\,{}^8\mathrm{Be}\to2\alpha$, compare $2\mechanical{M}(\,{}^4\mathrm{He})$ with $\mechanical{M}(\,{}^8\mathrm{Be})$.

### PDF page 93

For $\,{}^8\mathrm{Be}\to2\alpha$, the mass difference in the order products minus parent is $[2(4.002603)-8.005305]\,\unit{u}$. Multiplying by $c^2$ gives approximately $-0.093\,\unit{MeV}$, so the breakup is energetically allowed.

For radioactive decay, $R=\lambda N(t)$ and $N(t)=N_0e^{-\lambda t}$. The half-life and mean lifetime are

$$
t_{1/2}=-\frac{\ln(1/2)}{\lambda}=\frac{\ln2}{\lambda}\simeq\frac{0.693}{\lambda},
\qquad
\tau=\frac1\lambda=\frac{t_{1/2}}{\ln2}.
$$

Decay conserves total mass-energy, linear momentum, angular momentum, electric charge, and the total nucleon number in these low-energy reactions. For a parent at rest decaying to a heavier daughter $D$ and a lighter product $Y$,

$$
\mechanical{M}(\,{}_Z^AX)=\mechanical{M}_D+\mechanical{M}_Y+\frac{\energy{Q}}{c^2}.
$$

The disintegration energy $\energy{Q}$ goes into the kinetic energies of the products in this two-body case.

#### Lecture, December 3, 2014 — Decay series

Mass-energy, linear momentum, angular momentum, and electric charge are conserved. The sum of the mass numbers $A$ over all nuclear products is also conserved.

### PDF page 94

Using $1\,\unit{u}\,c^2\simeq931.5\,\unit{MeV}$, the disintegration energy is $\energy{Q}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}_D-\mechanical{M}_Y]c^2$. It is the negative of the binding energy with respect to that particular breakup channel.

An alpha particle binds two protons and two neutrons by about $28.3\,\unit{MeV}$. Alpha decay is energetically possible if the corresponding four free nucleons are bound to the parent by less than that amount.

$$
\,{}_Z^AX\to\,{}_{Z-2}^{A-4}D+\alpha,\qquad
\energy{Q}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z-2}^{A-4}D)-\mechanical{M}(\,{}^4\mathrm{He})]c^2.
$$

A positive $\energy{Q}$ allows the decay energetically.

#### Uranium-230 decay channels

| Channel | Decay energy in the notes |
| --- | --- |
| $\,{}^{230}_{92}\mathrm U\to n+\,{}^{229}_{92}\mathrm U$ | $-7.7\,\unit{MeV}$ |
| $\,{}^{230}_{92}\mathrm U\to p+\,{}^{229}_{91}\mathrm{Pa}$ | $-5.6\,\unit{MeV}$ |
| $\,{}^{230}_{92}\mathrm U\to\,{}^{226}_{90}\mathrm{Th}+\alpha$ | $+6.0\,\unit{MeV}$ |

The mass entries in $\unit{u}$ are $230.033927$ for uranium-230, $229.033496$ for uranium-229, $226.024891$ for thorium-226, $4.002603$ for helium-4, and $1.008665$ for the neutron. For the proton-emission calculation with atomic masses, the listed $1.007825\,\unit{u}$ is the hydrogen atom mass. The single-neutron and single-proton channels are energetically closed, while the alpha channel is open.

### PDF page 95

#### Beta decay, electron capture, and gamma decay

In $\beta^-$ decay, $n\to p+e^-+\bar\nu_e$. The nuclear transition and the decay energy in terms of neutral atomic masses are

$$
\,{}_Z^AX\to\,{}_{Z+1}^AD+e^-+\bar\nu_e,\qquad
\energy{Q}_{\beta^-}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z+1}^AD)]c^2.
$$

In $\beta^+$ decay, a proton in the nucleus converts to a neutron with a positron and a neutrino.

$$
\,{}_Z^AX\to\,{}_{Z-1}^AD+e^++\nu_e,\qquad
\energy{Q}_{\beta^+}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z-1}^AD)-2\mechanical{m}_e]c^2.
$$

In electron capture, $p+e^-\to n+\nu_e$. The daughter has $Z-1$ and the same $A$. With neutral atomic masses, $\energy{Q}_{\mathrm{EC}}=[\mechanical{M}(\,{}_Z^AX)-\mechanical{M}(\,{}_{Z-1}^AD)]c^2$.

For gamma decay, $X^*\to X+\gamma$. Neglecting recoil, the photon energy is $hf=\energy{E}(X^*)-\energy{E}(X)$.

#### Uranium–lead dating example

Assume all $\,{}^{206}\mathrm{Pb}$ in the rock came from $\,{}^{238}\mathrm U$, the longest-lived member of the chain, with $t_{1/2}=4.47\times10^9$ years. The measured number ratio is $N_{\mathrm{Pb}}/N_{\mathrm U}=0.60$. With $N_{\mathrm U}=N_0e^{-\lambda t}$ and $N_{\mathrm{Pb}}=N_0(1-e^{-\lambda t})$,

$$
0.60=e^{\lambda t}-1,\qquad
t=\frac{t_{1/2}}{\ln2}\ln(1.60)\simeq3.0\times10^9\ \text{years}.
$$

### PDF page 96

#### Lecture, December 5, 2014 — Statistical physics

Topics are the classical Maxwell–Boltzmann distribution, Bose–Einstein and Fermi–Dirac statistics, and applications of quantum statistics.

How can two particles be arranged among three states? If the particles are distinguishable, label them $x$ and $o$. Each can occupy any state, so Maxwell–Boltzmann counting gives $3^2=9$ arrangements. The two particles occupy the same state in three of the nine arrangements.

For identical bosons, the particles are indistinguishable and can share a state. Bose–Einstein counting gives six arrangements. Three put both in one state and three put them in different states, so half are grouped together.

![[Kyle Kabasares - Modern Physics - Two particles in three states.png|**Fig. 60** Classical arrangements for two distinguishable particles and Bose–Einstein occupations for two indistinguishable particles.]]

### PDF page 97

For two identical fermions in three states, exclusion permits only the three distinct pairs of occupied states. The particles cannot share a single quantum state. Fermions have half-integer spin and a wave function antisymmetric under exchange.

![[Kyle Kabasares - Modern Physics - Two fermions in three states.png|**Fig. 61** Three Fermi–Dirac occupations of two particles in three states.]]

| Distribution | Examples | Occupation function |
| --- | --- | --- |
| Maxwell–Boltzmann | Classical ideal gas | $f_{\mathrm{MB}}=Ae^{-\energy{E}/(k_B\thermal{T})}$ |
| Bose–Einstein | Liquid helium-4, photons | $f_{\mathrm{BE}}=[B_{\mathrm{BE}}e^{\energy{E}/(k_B\thermal{T})}-1]^{-1}$ |
| Fermi–Dirac | Electron gas in a conductor | $f_{\mathrm{FD}}=[B_{\mathrm{FD}}e^{\energy{E}/(k_B\thermal{T})}+1]^{-1}$ |

The quantum forms above use the positive exponent and the Fermi–Dirac plus sign. These correct the signs written in this table.

The radial probability density $P(r)$ gives probability $P(r)\,dr$ between $r$ and $r+dr$. In the energy distribution, $n(E)\,dE$ counts particles with energies between $E$ and $E+dE$. For Maxwell–Boltzmann statistics, $n(E)=g(E)f_{\mathrm{MB}}(E)$, where $g(E)$ is the density of states.

### PDF page 98

#### Maxwell–Boltzmann population example

Find $n(E_2)/n(E_1)$ for hydrogen. The $1s$ ground level has two spin configurations, so $g(E_1)=2$. The first excited level contains $2s$ and the three $2p$ orbitals with two spin configurations each, so $g(E_2)=8$.

$$
\frac{n(E_2)}{n(E_1)}
=\frac{g(E_2)f_{\mathrm{MB}}(E_2)}{g(E_1)f_{\mathrm{MB}}(E_1)}
=4e^{-(\energy{E}_2-\energy{E}_1)/(k_B\thermal{T})}.
$$

The written estimates are $10^{-175}$ at $293\,\unit{K}$, $2\times10^{-10}$ at $5000\,\unit{K}$, and $3.55$ at $10^6\,\unit{K}$.

#### Lecture, December 8, 2014 — Distributions and microstates

The number distribution $n(E)=g(E)f(E)$ combines the density of states or degeneracy $g$ with the occupation factor $f$. The number of particles in the energy interval $[E,E+dE]$ is $n(E)\,dE$. A probability for that interval uses the normalized energy distribution. The handwritten line labels that probability $f(E)\,dE$.

A microstate describes the system by specifying the state of each individual particle.

### PDF page 99

In an ideal gas, $\energy{E}=\energy{K}=\tfrac12\mechanical{m}(v_x^2+v_y^2+v_z^2)$. Substituting into the Maxwell–Boltzmann factor and normalizing over velocity space gives

$$
f(v_x,v_y,v_z)=f(v_x)f(v_y)f(v_z)
=\left(\frac{\mechanical{m}}{2\pi k_B\thermal{T}}\right)^{3/2}
e^{-\mechanical{m}(v_x^2+v_y^2+v_z^2)/(2k_B\thermal{T})}.
$$

The normalization is $\iiint f\,dv_x\,dv_y\,dv_z=1$. The mean velocity component is $\langle\mechanical{v}_x\rangle=\int_{-\infty}^{\infty}v_xf(v_x)\,dv_x$. Compare the quantum expectation $\langle Q\rangle=\int\psi^*\hat Q\psi\,dx$ with $\int\psi^*\psi\,dx=1$. For position, $\hat Q$ is multiplication by $x$.

Bosons have integer spin and can occupy the same state. Fermions have half-integer spin and obey exclusion. For two particles in different orthonormal one-particle states $n,m$, the labeled products are $\psi_n(1)\psi_m(2)$ and $\psi_n(2)\psi_m(1)$. The normalized exchange combinations are

$$
\psi_{\mathrm{S,A}}(1,2)=\frac1{\sqrt2}
[\psi_n(1)\psi_m(2)\pm\psi_n(2)\psi_m(1)].
$$

The plus sign is symmetric for bosons and the minus sign is antisymmetric for fermions. What is the probability density $\psi^*\psi$ if the indistinguishable bosons are both in state $n$?

### PDF page 100

Substituting $m=n$ into the symmetric expression from the preceding page gives $(2/\sqrt2)\psi_n(1)\psi_n(2)$ and a squared modulus twice that of the simple product. The handwritten argument uses this to illustrate bosonic bunching. The factor $1/\sqrt2$ there assumes different orthogonal orbitals. If both particles occupy the same normalized orbital, the normalized joint state is $\psi_n(1)\psi_n(2)$. In the three-state counting example, the same-state fractions are $1/2$ for bosons and $1/3$ for distinguishable particles.

Putting two fermions in the same state gives zero in the antisymmetric combination, expressing Pauli exclusion.

#### Lecture, December 10, 2014 — Quantum statistics

The total particle number is $N=\int n(E)\,dE$. In the Fermi–Dirac distribution write the temperature-dependent factor $B_{\mathrm{FD}}=e^{-\energy{E}_F/(k_B\thermal{T})}$. The final expression on the page is

$$
f_{\mathrm{FD}}(E)=\frac{1}{e^{(\energy{E}-\energy{E}_F)/(k_B\thermal{T})}+1}.
$$

What is the Fermi energy $\energy{E}_F$?

### PDF page 101

At absolute zero the fermions fill the lowest available levels. The energy at the upper edge of the occupied levels is $\energy{E}_F$.

$$
f_{\mathrm{FD}}(E)=
\begin{cases}
1,& E<E_F,\\
0,& E>E_F.
\end{cases}
$$

![[Kyle Kabasares - Modern Physics - Fermi level occupations.png|**Fig. 62** Filled low-energy levels and empty higher levels at zero temperature.]]

Model the particles in a three-dimensional infinite well of side $L$. In one dimension, $\energy{E}_n=\energy{E}_1n^2$ with $\energy{E}_1=h^2/(8\mechanical{m}L^2)$. In three dimensions,

$$
\energy{E}_{n_xn_yn_z}=\energy{E}_1(n_x^2+n_y^2+n_z^2),\qquad n_x,n_y,n_z=1,2,3,\ldots.
$$

![[Kyle Kabasares - Modern Physics - Cubical infinite well.png|**Fig. 63** Three-dimensional box of side $L$.]]

In the space of quantum numbers, define $r^2=n_x^2+n_y^2+n_z^2$. Positive integers occupy the first octant. Approximating the count by the volume of that octant and including two spin states per point gives

$$
N_r\simeq2\cdot\frac18\cdot\frac{4\pi r^3}{3}.
$$

![[Kyle Kabasares - Modern Physics - Fermi sphere octant.png|**Fig. 64** Quantum numbers in the positive octant of a sphere of radius $r$.]]

### PDF page 102

Since $\energy{E}=\energy{E}_1r^2$, the cumulative state count is $N_r=(\pi/3)(\energy{E}/\energy{E}_1)^{3/2}$. At $\thermal{T}=0$, substitute $\energy{E}_F$ and set the count equal to the total number of fermions $N$.

$$
\energy{E}_F=\energy{E}_1\left(\frac{3N}{\pi}\right)^{2/3}
=\frac{h^2}{8\mechanical{m}}\left(\frac{3N}{\pi L^3}\right)^{2/3}.
$$

Here $N/L^3$ is the number density of free electrons for the conductor being modeled. The density of states is $g(E)=dN_r/dE$ and $n(E)=g(E)f_{\mathrm{FD}}(E)$. At absolute zero $n(E)=g(E)$ below $E_F$ and $0$ above it. At finite temperature the distribution in the notation of the lecture is

$$
n_{\mathrm{FD}}(E)=\frac{\pi}{2}\left(\frac{8\mechanical{m}}{h^2}\right)^{3/2}
\frac{L^3\sqrt{\energy{E}}}{e^{(\energy{E}-\energy{E}_F)/(k_B\thermal{T})}+1}.
$$

The volume is $L^3$, and the mean energy is $\langle\energy{E}\rangle=N^{-1}\int_0^\infty E\,n(E)\,dE$.

### PDF page 103

Heat capacity at constant volume is $\thermal{C}_V=(\partial\energy{E}/\partial\thermal{T})_V$ for the total energy.

#### Final lecture, December 12, 2014

Final exam topics include expectation values, sketching wave functions, angular momentum, nuclear physics, statistical physics, the Schrödinger equation, and experiments from the lab or foundational to quantum mechanics.

Only certain levels are allowed for a bound particle. What gives quantization? Start from

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dx^2}
+\energy{V}(x)\psi=\energy{E}\psi.
$$

Applying the boundary conditions selects the allowed solutions. An infinite well imposes $\psi(0)=\psi(L)=0$. A lone potential step does not confine the particle on both sides and gives no discrete bound levels.

![[Kyle Kabasares - Modern Physics - Final lecture infinite well.png|**Fig. 65** Infinite well with walls at $0$ and $L$.]]

![[Kyle Kabasares - Modern Physics - Final lecture potential step.png|**Fig. 66** A potential step of height $V_0$.]]

The normalization integral is the area under $\psi^*\psi$, $\int_{-\infty}^{+\infty}\psi^*\psi\,dx=1$. For one particle the wave function may be $\psi_n(x)$. A product state for two labeled particles has $\psi_{\mathrm{tot}}=\psi_n(1)\psi_m(2)$.

### PDF page 104

#### Probability and expectation values

In one dimension, $\psi^*\psi$ is the probability density and $\psi^*\psi\,dx$ is the probability of finding the particle between $x$ and $x+dx$. The wave function also determines the expectation of an observable. For energy, integrate $\psi^*(\hat H\psi)$ over all positions.

![[Kyle Kabasares - Modern Physics - First two well states and probabilities.png|**Fig. 67** First two infinite-well wave functions and their probability densities. Both densities are symmetric about $L/2$.]]

The particle is equally likely to be found on either side of the center for either state shown.

In statistical physics, integrating a quantity times the probability density over all possible values gives the expectation value. The handwritten line calls it the most likely value. The most likely value is given by a peak of the probability density. The probability density can include the Maxwell–Boltzmann, Fermi–Dirac, or Bose–Einstein occupation factor along with other factors such as the density of states.

### PDF page 105

#### Speed distribution and average energy

The notes write $F(v)=Av^3e^{-mv^2/(2k_BT)}$ and require $\int_0^\infty F(v)\,dv=1$, with $A$ a normalization constant. For the three-dimensional Maxwell speed distribution the shell measure is $4\pi v^2\,dv$, so the speed-density factor is $v^2$. The $v^3$ factor gives the speed weighting used in Homework 13.1 on PDF page 112.

For any speed density $F$, the statistical average of the kinetic energy is

$$
\langle\energy{E}\rangle=
\frac{\displaystyle\int_0^\infty \tfrac12\mechanical{m}v^2F(v)\,dv}
{\displaystyle\int_0^\infty F(v)\,dv}.
$$

The denominator is one if $F$ is normalized. The notebook uses the handwritten $Av^3$ weighting in both integrals and compares the average with a peak of the ground-state probability density.

### PDF page 106

#### Studying for the final — Problem 6-28

For the infinite well, $\psi_n(x)=\sqrt{2/L}\sin(n\pi x/L)$ between $0$ and $L$. For $n=3$, apply $\hat p_x=(\hbar/i)d/dx$ to the ket's wave function.

$$
\langle\mechanical{p}_x\rangle=\int_0^L\psi_3^*\frac{\hbar}{i}\psi_3'\,dx
=\frac{2\hbar}{iL}\int_0^L
\sin\left(\frac{3\pi x}{L}\right)
\cos\left(\frac{3\pi x}{L}\right)\frac{3\pi}{L}\,dx.
$$

With $u=\sin(3\pi x/L)$, the integral is the change in $u^2/2$ from $x=0$ to $x=L$. Both endpoint values are zero, so $\langle\mechanical{p}_x\rangle=0$.

How can the mean momentum vanish while the kinetic energy at $n=3$ is $9\pi^2\hbar^2/(2\mechanical{m}L^2)$? Contributions with opposite momentum cancel in the mean. They add in the mean squared momentum, which determines the kinetic energy.

### PDF page 107

#### Problem 6-30 — Position moments for a uniform density

**(a)** If $P(x)$ is constant on $0<x<L$, normalization gives $\int_0^L P(x)\,dx=PL=1$ and $P=1/L$. The page also lists $\psi_n(x)=\sqrt{2/L}\sin(n\pi x/L)$. That stationary wave function gives an oscillatory density whose spatial average is $1/L$.

**(b)** Using the uniform density,

$$
\langle\mechanical{x}\rangle=\frac1L\int_0^Lx\,dx=\frac L2,\qquad
\langle\mechanical{x}^{\,2}\rangle=\frac1L\int_0^Lx^2\,dx=\frac{L^2}{3}.
$$

#### Problem 6-31 — Squared momentum

In one dimension, $\hat p_x^2=(\hbar/i)^2d^2/dx^2=-\hbar^2d^2/dx^2$. For a stationary state the Schrödinger equation gives $\hat p_x^2\psi=2\mechanical{m}[\energy{E}-\energy{V}(x)]\psi$. Therefore for a normalized state,

$$
\langle\mechanical{p}_x^2\rangle
=\int_{-\infty}^{+\infty}\psi^*\hat p_x^2\psi\,dx
=2\mechanical{m}\bigl(\energy{E}-\langle\energy{V}\rangle\bigr).
$$

The handwritten expression $2\mechanical{m}[\energy{E}-\energy{V}(x)]$ is the pointwise ratio where $\psi\ne0$. For constant potential it also gives the expectation.

### PDF page 108

**6-23 review.** For the fourth bound state of a finite well, the wave function has three interior nodes.

![[Kyle Kabasares - Modern Physics - Fourth state wave function review.png|**Fig. 68** Fourth bound-state wave function and schematic probability density. The squared modulus vanishes at all three wave function nodes.]]

#### Nuclear physics review

The mass number $A$ counts nucleons and satisfies $A=Z+N$. The atomic number $Z$ counts protons and determines the element. Changing neutron number $N$ at fixed $Z$ gives another isotope. Nuclides are labeled $\,{}_Z^AX$. One femtometer is $10^{-15}\,\unit{m}$.

The unified atomic mass unit in the notes is $1\,\unit{u}=1.660540\times10^{-27}\,\unit{kg}\simeq931.5\,\unit{MeV}/c^2$. The listed masses are

$$
\mechanical{m}_p=1.007276\,\unit{u},\qquad
\mechanical{m}_n=1.008664\,\unit{u},\qquad
\mechanical{m}_e=0.0005485799\,\unit{u}.
$$

### PDF page 109

Radioactive nuclei decay at random. An alpha particle is a helium nucleus $\,{}_2^4\mathrm{He}^{2+}$ with no electrons.

$$
\,{}_Z^AX\to\,{}_{Z-2}^{A-4}Y+\,{}_2^4\mathrm{He},
\qquad
\,{}_{92}^{238}\mathrm U\to\,{}_{90}^{234}\mathrm{Th}+\,{}_2^4\mathrm{He}.
$$

A free neutron is unstable and undergoes beta decay into a proton, electron, and electron antineutrino. The abbreviated line on this page shows the proton and electron.

#### Problem 12.3 — Orbital angular momentum direction

For $\ell=4$, $m_\ell=0,\pm1,\pm2,\pm3,\pm4$ and $\mechanical{L}_z=m_\ell\hbar$. The magnitude is $\sqrt{20}\,\hbar$ and its square is $\mechanical{L}_x^2+\mechanical{L}_y^2+\mechanical{L}_z^2$. The vector model gives $\cos\theta=\mechanical{L}_z/\lvert\mechanical{\vec L}\rvert$. The minimum angle to positive $z$ is $\arccos(4/\sqrt{20})=26.6^\circ$. For $\ell=2$, the magnitude is $\sqrt6\,\hbar$ and the minimum angle is $\arccos(2/\sqrt6)=35.3^\circ$.

![[Kyle Kabasares - Modern Physics - Angular momentum direction review.png|**Fig. 69** Projection $L_z$ and the angle between the orbital angular momentum and the $z$-axis.]]

### PDF page 110

**10.4 review.** For $\ell=2$, $\mechanical{L}^{\,2}=6\hbar^2$ and $\mechanical{L}_z^2=m_\ell^2\hbar^2$. The possible values of $\lvert m_\ell\rvert$ are $0,1,2$.

- The minimum of $\mechanical{L}_x^2+\mechanical{L}_y^2$ occurs at $\lvert m_\ell\rvert=2$ and equals $6\hbar^2-4\hbar^2=2\hbar^2$.
- The maximum occurs at $m_\ell=0$ and equals $6\hbar^2$.
- At $m_\ell=1$, it equals $5\hbar^2$.
- The principal quantum number must be at least 3.

#### Statistical physics review

Maxwell–Boltzmann statistics is the classical case. Bose–Einstein and Fermi–Dirac are the quantum cases. For a classical ideal gas of particles of the same type treated as distinguishable, the Maxwell–Boltzmann distribution uses $f_{\mathrm{MB}}=Ae^{-\energy{E}/(k_B\thermal{T})}$, with the exponential as the Boltzmann factor.

### PDF page 111

Bose–Einstein statistics applies to identical, indistinguishable particles with integer spin, including helium-4 atoms and photons. Its occupation factor is $f_{\mathrm{BE}}=[B_{\mathrm{BE}}e^{\energy{E}/(k_B\thermal{T})}-1]^{-1}$. Fermi–Dirac statistics applies to identical, indistinguishable particles with half-integer spin, such as the free electrons in a conductor. Its occupation factor is $f_{\mathrm{FD}}=[B_{\mathrm{FD}}e^{\energy{E}/(k_B\thermal{T})}+1]^{-1}$. The exponents use the same positive sign as the corrected expressions on PDF page 97.

![[Kyle Kabasares - Modern Physics - Comparing statistical distributions.png|**Fig. 70** Comparison of Bose–Einstein, Maxwell–Boltzmann, and Fermi–Dirac occupation factors on an energy scale marked in steps of $k_BT$.]]

The density of states $g(E)$ is the number of available states per unit energy. The particle count between $E$ and $E+dE$ is $n(E)\,dE$. In each of the three cases $n(E)=g(E)f(E)$, using the corresponding occupation factor.

### PDF page 112

#### Maxwell–Boltzmann example — Lecture 35, slide 10

The hydrogen ground level $1s$ has two spin states, so $g(E_1)=2$. The first excited level has one $2s$ and three $2p$ orbitals, each with two spin states, so $g(E_2)=8$. With the positive excitation energy $\energy{E}_2-\energy{E}_1=10.2\,\unit{eV}$, the population ratio at $293\,\unit{K}$ is

$$
\frac{n(E_2)}{n(E_1)}
=4e^{-(\energy{E}_2-\energy{E}_1)/(k_B\thermal{T})}
=4\exp\left[-\frac{10.2\,\unit{eV}}
{(8.617\times10^{-5}\,\unit{eV/K})(293\,\unit{K})}\right].
$$

#### Homework 13.1 — Speed-weighted distribution

This exercise explicitly weights the ordinary speed distribution $f(v)\propto v^2e^{-mv^2/(2k_BT)}$ by $v$. The resulting density is $F(v)=Av^3e^{-\lambda v^2}$ with $\lambda=\mechanical{m}/(2k_B\thermal{T})$. Normalization gives $A=[\int_0^\infty v^3e^{-\lambda v^2}\,dv]^{-1}$.

$$
\langle\energy{K}\rangle
=\frac{\mechanical{m}}{2}\frac{I_5}{I_3},
\qquad
I_j=\int_0^\infty v^j e^{-\lambda v^2}\,dv.
$$

The integrals are $I_5=\lambda^{-3}$ and $I_3=\tfrac12\lambda^{-2}$, giving $I_5/I_3=2/\lambda$.

### PDF page 113

**13.1, continued.** The pressure of the gas is $\thermal{P}=(2/3)N\langle\energy{E}\rangle/\mechanical{V}$. To compute mean energy per particle using $n(E)=g(E)f(E)$, integrate $E\,g(E)f(E)$ over the energies and divide by $N$, or use a density already normalized to one.

#### Midterm 2 — Problem 1

The well has potential $\energy{V}_2$ to the left of $x=0$, zero between $0$ and $a$, $\energy{V}_1$ between $a$ and $L$, and an infinite wall at $L$. The sketches show $0<\energy{E}_2<\energy{V}_1$ for $n=2$, and $\energy{V}_1<\energy{E}_3<\energy{V}_2$ for $n=3$. The second state has one interior node and the third has two. At a finite wall in a forbidden region the tail decays exponentially.

![[Kyle Kabasares - Modern Physics - Midterm stepped well states.png|**Fig. 71** Second and third states in a stepped well with one infinite wall.]]

When potential energy rises, kinetic energy falls. In an allowed region the de Broglie wavelength $h/\mechanical{p}$ increases as momentum falls. The handwritten line uses $hc/\lambda$, which is the photon energy relation.

What is the physical significance of normalization? The total probability of finding the particle somewhere is 100 percent. Normalizing $\psi$ scales its squared modulus so its integral over all space is one.

### PDF page 114

#### Problem 4(a) — Hydrogen radial probability

For $n=2$, $\ell=1$, $m_\ell=-1$, the radial function is

$$
R_{21}(r)=\frac1{\sqrt3}\left(\frac{Z}{2a_0}\right)^{3/2}
\left(\frac{Zr}{a_0}\right)e^{-Zr/(2a_0)}.
$$

Use $P(r)=r^2\lvert R_{21}(r)\rvert^2$ and integrate from $a_0$ to $2a_0$. For hydrogen, $Z=1$, so

$$
\Pr(a_0\le r\le2a_0)=\frac{1}{24a_0^5}\int_{a_0}^{2a_0}r^4e^{-r/a_0}\,dr.
$$

The boxed line in the notebook changes the limits to $0$ and $\infty$ and retains the unsquared exponential. The expression above follows the requested interval and squared radial function.

**8-33.** Photons are bosons, so any number can occupy the same lowest mode. The notebook uses this fact to compare the available many-particle configurations with a gas subject to exclusion.

**8-29.** The Einstein-model molar heat capacity is

$$
\thermal{C}_V=\frac{d\energy{U}}{d\thermal{T}}
=3N_Ak_B\left(\frac{hf}{k_B\thermal{T}}\right)^2
\frac{e^{hf/(k_B\thermal{T})}}{(e^{hf/(k_B\thermal{T})}-1)^2}.
$$

As $\thermal{T}\to\infty$, $x=hf/(k_B\thermal{T})\to0$ and $e^x-1\simeq x$. The limiting value is $3N_Ak_B=3R$.

### PDF page 115

#### Beta decay and electron capture review

| Process | Nuclear change | Decay energy from neutral atomic masses |
| --- | --- | --- |
| $\beta^-$ | $\,{}_Z^AX\to\,{}_{Z+1}^AD+e^-+\bar\nu_e$ | $[\mechanical{M}(X)-\mechanical{M}(D)]c^2$ |
| $\beta^+$ | $\,{}_Z^AX\to\,{}_{Z-1}^AD+e^++\nu_e$ | $[\mechanical{M}(X)-\mechanical{M}(D)-2\mechanical{m}_e]c^2$ |
| Electron capture | $\,{}_Z^AX+e^-\to\,{}_{Z-1}^AD+\nu_e$ | $[\mechanical{M}(X)-\mechanical{M}(D)]c^2$ |

The nucleon changes are $n\to p+e^-+\bar\nu_e$, $p\to n+e^++\nu_e$ inside a suitable parent nucleus, and $p+e^-\to n+\nu_e$. The review page draws an antineutrino in some of the last two lines. Both of those processes emit an electron neutrino, as on PDF page 95.

#### Problem 11-33 — Beryllium-8

The sign of binding energy determines stability with respect to the specified channel. For $\,{}^8\mathrm{Be}$ relative to free nucleons,

$$
\energy{B}=[4(1.008665)+4(1.007825)-8.005305](931.5\,\unit{MeV})
=+56.5\,\unit{MeV}.
$$

For breakup into two $\,{}^4\mathrm{He}$ nuclei, the binding energy in the products-minus-parent convention is

$$
\energy{B}_{2\alpha}=[2(4.002603)-8.005305](931.5\,\unit{MeV})
=-0.0922\,\unit{MeV}.
$$

The two-alpha decay is energetically allowed.

### PDF page 116

#### Problem 11-35 — Forces and energies across a carbon nucleus

The radius model gives $\mechanical{R}(\,{}^{12}\mathrm C)=(1.2\,\unit{fm})12^{1/3}=2.74\,\unit{fm}$, so the diameter is $d=5.48\,\unit{fm}$. The sketch places two protons across the diameter.

![[Kyle Kabasares - Modern Physics - Protons across a carbon nucleus.png|**Fig. 72** Two protons separated by the estimated carbon-12 nuclear diameter.]]

The handwritten gravitational force magnitude is $\mechanical{F}_G=G\mechanical{m}_p^{\,2}/d^2=6.19\times10^{-36}\,\unit{N}$. The Coulomb force is $\electric{F}_C=k_e\electric{e}^{\,2}/d^2$. The page gives $9.65\,\unit{N}$. Using the displayed $d$ and constants gives approximately $7.7\,\unit{N}$.

The gravitational potential energy magnitude is $G\mechanical{m}_p^{\,2}/d\simeq3.4\times10^{-50}\,\unit{J}=2.1\times10^{-37}\,\unit{MeV}$. The repulsive electric potential energy is $k_e\electric{e}^{\,2}/d=4.2\times10^{-14}\,\unit{J}\simeq0.26\,\unit{MeV}$. The notebook compares the latter with a nuclear potential depth of $50\,\unit{MeV}$ over about $3\,\unit{fm}$ and gives a ratio of about 192.

#### Problem 11-36 — Mass scale from interaction range

For an assumed strong-force range $\mechanical{R}=5\,\unit{fm}$, use $\mechanical{R}=\hbar/(\mechanical{m}c)$.

$$
\mechanical{m}=\frac{\hbar}{\mechanical{R}c}
=\frac{1.05\times10^{-34}\,\unit{J\,s}}
{(5\times10^{-15}\,\unit{m})(2.99\times10^8\,\unit{m/s})}
=7.02\times10^{-29}\,\unit{kg}.
$$

The units reduce as $\unit{J\,s^2/m^2}=\unit{kg}$. The mass is about $77$ electron masses, or $39.3\,\unit{MeV}/c^2$ using $\mechanical{m}_ec^2=510.99\,\unit{keV}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | Magnitude of the electron charge. |
| $\electric{e}/\mechanical{m}_{\mathrm e}$ | $\unit{C/kg}$ | Electron charge-to-mass ratio | Magnitude of the charge divided by the electron mass. |
| $\electric{F}$ | $\unit{C/mol}$ | Faraday constant | Charge per mole of elementary charges. |
| $\electric{\mathbf E}$ | $\unit{V/m}$ | Electric field | Force per unit positive charge at rest. |
| $\magnetic{\mathbf B}$ | $\unit{T}$ | Magnetic flux density | Enters the velocity-dependent part of the Lorentz force. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Determines the blackbody spectrum. |
| $\signal{\lambda}_{\max}$ | $\unit{m}$ | Peak wavelength | Wavelength of maximum spectral exitance. |
| $\energy{R}$ | $\unit{W\,m^{-2}}$ | Radiant exitance | Emitted power per unit surface area. |
| $\varepsilon$ | $1$ | Emissivity | Ratio of emitted power to that of a blackbody at the same temperature. |
| $h$ | $\unit{J\,s}$ | Planck constant | Relates the energy of one quantum to its frequency. |
| $\energy{\phi}$ | $\unit{eV}$ | Work function | Minimum energy needed to remove an electron from a material surface. |
| $\electric{V}_0$ | $\unit{V}$ | Stopping potential | Retarding voltage whose magnitude corresponds to the maximum photoelectron kinetic energy divided by the elementary charge. |
| $\signal{\lambda}_{\mathrm C}$ | $\unit{m}$ | Compton wavelength | Length $h/(\mechanical{m}_{\mathrm e}c)$ for the electron. |
| $\mechanical{b}$ | $\unit{m}$ | Impact parameter | Perpendicular offset of the incident trajectory from the scattering center. |
| $\sigma$ | $\unit{m^2}$ | Integrated scattering cross section | Effective area for scattering by at least the specified angle. |
| $R_\infty$ | $\unit{m^{-1}}$ | Rydberg constant | Series constant for an infinitely massive nucleus. |
| $R_{\mathrm H}$ | $\unit{m^{-1}}$ | Hydrogen Rydberg constant | Accounts for the electron–proton reduced mass. |
| $\mechanical{a}_0$ | $\unit{m}$ | Bohr radius | Radius of the $n=1$ orbit in the Bohr model. |
| $\energy{E}_n$ | $\unit{eV}$ | Bound-state energy | Energy of the $n$th level relative to ionization. |
| $\signal{\lambda}$ | $\unit{m}$ | De Broglie wavelength | Wavelength associated with momentum magnitude $\mechanical{p}$ through $h/\mechanical{p}$. |
| $\signal{v}_{\mathrm{ph}}$ | $\unit{m/s}$ | Phase velocity | Speed of a point of constant phase. |
| $\signal{v}_{\mathrm{gr}}$ | $\unit{m/s}$ | Group velocity | Speed of the envelope of a narrow wave packet. |
| $\hat H$ | $\unit{J}$ | Hamiltonian | Operator for the total energy. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent multiplication term in the Hamiltonian. |
| $\mechanical{\mu}$ | $\unit{kg}$ | Reduced mass | Effective mass of the relative motion in the two-body problem. |
| $\magnetic{\vec\mu}$ | $\unit{J/T}$ | Magnetic dipole moment | Couples a current loop or particle to an applied magnetic field. |
| $\magnetic{\mu}_B$ | $\unit{J/T}$ | Bohr magneton | Scale of the electron orbital magnetic moment. |
| $\mechanical{\vec S}$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum of a particle. |
| $\mechanical{\vec J}$ | $\unit{J\,s}$ | Total angular momentum | Vector sum of orbital and spin angular momenta. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate for the decay of an individual nucleus. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
| $t_{1/2}$ | $\unit{s}$ | Half-life | Time for the expected number of radioactive nuclei to fall by half. |
| $\magnetic{\mu}_N$ | $\unit{J/T}$ | Nuclear magneton | Magnetic moment scale based on the proton mass. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Nuclear mass per unit volume. |
| $\energy{B}$ | $\unit{MeV}$ | Nuclear binding energy | Energy required to separate a nucleus into its constituent nucleons. |
| $\tau$ | $\unit{s}$ | Mean lifetime | Reciprocal of the decay constant. |
| $\energy{Q}$ | $\unit{MeV}$ | Decay energy | Parent rest energy minus the sum of product rest energies. |
| $\energy{E}_F$ | $\unit{eV}$ | Fermi energy | Energy of the highest occupied level at absolute zero. |
| $\thermal{C}_V$ | $\unit{J/K}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume. |
