---
title: "Quantization, light, and early atomic models"
---

> [!TLDR]
> Interpret quantization through blackbody radiation, the photoelectric and Compton effects, and the scattering and spectra of atoms.

## Worked lecture material

Modern Physics with Dr. Menke. Topics include quantization of light, energy, and charge, and chapters 3–9 and 11. The course accepts graphs made with Igor, MATLAB, or R. Excel graphs are excluded.

##### Quantization of charge

Thomson used cathode rays. The class used Helmholtz coils in the $\electric{e}/\mechanical{m}$ lab.

The cathode-ray apparatus has a negative cathode, a positive anode, a grounded metal plug with another slit, and plates between which a potential difference is applied. Magnets perpendicular to the voltage plates allow the electron speed to be measured.

Faraday's constant is $\electric{F}=N_{\mathrm A}\electric{e}$, the product of Avogadro's constant and the elementary charge. The notes associate this with the 1860s. Stoney used kinetic theory to estimate the elementary charge as about $\quantity{10^{-20}}{C}$. Zeeman's work on spectral lines gave an estimate of $\electric{q}/\mechanical{m}\simeq\quantity{1.6\times10^{11}}{C/kg}$ in magnitude. The values quoted for comparison are

$$
\frac{\electric{e}}{\mechanical{m}_{\mathrm e}}=\quantity{1.759\times10^{11}}{C/kg},
\qquad
\electric{e}=\quantity{1.60\times10^{-19}}{C}.
$$

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

##### Blackbody radiation

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

The notes write $\bar{\energy{E}}=\energy{E}_{\mathrm{avg}}$. The classical mean oscillator energy is $k_{\mathrm B}\thermal{T}$. The quantized energy is $\energy{E}_n=nh\signal{f}$, with frequency $\signal{f}$ and proportionality constant $h$. The next topic listed is the Big Bang theory.

##### Example. Momentum transfer by light

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

##### Quantization of light

In the quantum description of blackbody radiation, $\energy{E}=nh\signal{\nu}=nh\signal{f}$ with $n=1,2,3,\ldots$ for the nonzero amounts exchanged. Light is absorbed or emitted in discrete quanta. An oscillator has a discrete set of allowed energy levels, while classical mechanics permits a continuous range of energies. Emission and absorption are associated with transitions between two levels.

The oscillator emits the energy it loses or absorbs the energy it gains as a quantum of radiant energy of magnitude $h\signal{\nu}$. The notes compare continuous classical integration $\int d\energy{E}$ with the quantum sum $\sum_{i=1}^N\Delta\energy{E}_i$. In the margin, Ohm's law $\circuit{V}=\circuit{I}\circuit{R}$ is compared to a straight line $y=mx$ of slope $m=y/x$.

##### Photoelectric apparatus

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

##### Quantization of charge, light, and energy

In the photoelectric apparatus the notes trace the electron flow from the cathode to the detector labeled $\alpha$. For light with $c=\signal{\lambda}\signal{f}$, the stopping potential is

$$
\electric{V}_0=\frac{hc}{\electric{e}\signal{\lambda}}-\frac{\energy{\phi}}{\electric{e}}.
$$

For $\signal{\lambda}=\quantity{400}{nm}$, use $h=\quantity{6.626\times10^{-34}}{J\,s}$ and $c=\quantity{2.9989\times10^8}{m/s}$ to obtain $h\signal{f}=hc/\signal{\lambda}\simeq\quantity{3.10}{eV}$. With $\energy{\phi}=\quantity{2.93}{eV}$, the stopping energy is $\electric{e}\electric{V}_0=h\signal{f}-\energy{\phi}=\quantity{0.17}{eV}$ and $\electric{V}_0=\quantity{0.17}{V}$. In Einstein's explanation a single electron absorbs the entire photon energy.

##### Röntgen's findings

- Many materials transmit X-rays. A hand casts a faint shadow with darker shadows where the bones lie. Lead glass is comparatively opaque.
- Many substances besides barium platinocyanide fluoresce. X-rays expose photographic plates and films.
- In the experiments described, Röntgen did not observe ordinary reflection or refraction. A magnet did not deflect the rays.
- X-rays discharge either positively or negatively charged objects.
- X-rays are produced when cathode rays strike a solid target.

##### Bragg scattering and X-ray crystallography

![[Kyle Kabasares - Modern Physics - Laue diffraction.png|**Fig. 1** X-rays scatter from the crystal and produce Laue spots on a photographic plate.]]

The spots demonstrate the wave behavior of X-rays. The regular spacing of crystal planes is suitable for diffraction. The Bragg condition is

$$
2\mechanical{d}\sin\theta=n\signal{\lambda},
\qquad n=1,2,3,\ldots
$$

The **Duane–Hunt rule** relates the short-wavelength limit of the X-ray spectrum to the maximum electron kinetic energy, $\energy{K}_{\max}=hc/\signal{\lambda}_{\min}$.

##### Quantization and atomic structure

In the **Compton effect**, an incident photon scatters from a free electron initially at rest. The notes treat this as an elastic collision and relate the more readily absorbed scattered radiation to lower photon energy. Compton scattering verified the particle behavior of light.

The photoelectric effect uses incident light to eject electrons. X-ray production uses incident electrons to produce light, which the notes call the inverse photoelectric effect.

![[Kyle Kabasares - Modern Physics - Compton scattering.png|**Fig. 2** A photon of energy $h\signal{f}$ scatters through angle $\theta$, and the electron recoils.]]

The Compton wavelength shift is

$$
\signal{\lambda}_2-\signal{\lambda}_1=\frac{h}{\mechanical{m}_{\mathrm e}c}(1-\cos\theta).
$$

The factor $h/(\mechanical{m}_{\mathrm e}c)$ has units of length. It is the electron Compton wavelength, approximately $\quantity{0.00243}{nm}$.

##### Quantization recap

- Millikan used oil drops to measure the electron charge.
- Thomson used cathode rays to measure $\electric{e}/\mechanical{m}_{\mathrm e}$ and identify subatomic particles.
- Planck used $\Delta\energy{E}=nh\signal{f}$ in blackbody radiation, quantizing the energy exchanged.
- Einstein used photons to explain the photoelectric effect.
- Compton's X-ray spectra confirmed the photon description of light.

Spectra distinguish energy levels and provide evidence of atomic structure. The Bohr atom was a step toward a fuller model.

##### Atomic structure and Rutherford scattering

Classically, a charge accelerating in an atomic orbit would radiate continuously, so the electric force alone cannot account for a stable atom. Thomson's model also failed to account for the observed large-angle deflections of alpha particles.

An alpha particle is a helium nucleus. The notes identify the beta particle in beta-minus decay as an ejected electron. The decay is $n\to p^++e^-+\bar\nu_{\mathrm e}$. The handwriting labels the last particle a neutrino, with the electron antineutrino implied by the decay shown.

A gamma ray ($\gamma$) is a very high-energy photon.

##### Rutherford's nuclear model

1. The scattering nucleus is so massive that it recoils negligibly, so $\energy{K}_{\alpha,\mathrm i}\simeq\energy{K}_{\alpha,\mathrm f}$.
2. The target is thin enough for a single scattering event to dominate.
3. Treat the incident particle and scattering nucleus as point charges and point masses.
4. Include only the Coulomb force.

##### Measuring Rutherford scattering

An incoming particle with impact parameter no greater than $\mechanical{b}$ scatters by an angle $\theta$ or larger, where $\theta$ is measured from the original beam direction. Counts at the detector give the fraction $f$ of incident particles scattered by at least this angle. The integrated cross section and scattered fraction for a thin target are

$$
\sigma=\pi\mechanical{b}^2,
\qquad
f=nt\,\pi\mechanical{b}^2
=nt\,\pi\left(\frac{Z_1Z_2\electric{e}^2}{8\pi\epsilon_0\energy{K}}\right)^2\cot^2\!\left(\frac\theta2\right).
$$

Here $nt$ is the number of scattering nuclei per unit area, $t$ is foil thickness, $\mechanical{A}$ is foil area, and $\energy{K}$ is the incident kinetic energy. The handwritten definition describes $f$ as the frequency of detector strikes. In the equation it is the dimensionless fraction of incoming particles counted. The two crossed-out sketches on the page are marked “Disregard.”

The fraction of particles scattered through $\theta$ or larger equals the total effective scattering area divided by the foil area. The number of scattering nuclei is $(nt)\mechanical{A}$, so

$$
f=\frac{[(nt)\mechanical{A}]\sigma}{\mechanical{A}}=nt\sigma
=nt\,\pi\left[\frac{(Z_1\electric{e})(Z_2\electric{e})}{8\pi\epsilon_0\energy{K}}
\cot\!\left(\frac{\theta}{2}\right)\right]^2,
\qquad \sigma=\pi\mechanical{b}^2.
$$

Here $\energy{K}$ is the alpha particle's kinetic energy, $Z_1\electric{e}$ its charge, and $Z_2\electric{e}$ the target nucleus's charge.

##### Atomic structure

The handwritten date reads 2018, although the surrounding lectures and course title give 2014. Topics include discovery of the nucleus. The technical report filename format is `Lab#_lastname1_lastname2.pdf`.

The Rutherford scattering equation gives the scattered count per detector area at angle $\theta$ and radius $\mechanical{r}$ as

$$
N(\theta)=\frac{N_{\mathrm i}nt}{16}
\left(\frac{\electric{e}^2}{4\pi\epsilon_0}\right)^2
\frac{Z_1^2Z_2^2}{\mechanical{r}^2\energy{K}^2\sin^4(\theta/2)}.
$$

Scattering scales with the squares of the charge numbers of the incident particle and target, inversely with $\energy{K}^2$ and $\sin^4(\theta/2)$, and directly with the target thickness.

The example takes $\energy{K}=\quantity{7.7\times10^6}{eV}$, $Z_1=2$, $Z_2=79$, foil thickness $\quantity{1\times10^{-6}}{m}$, and $\theta=90^\circ$.

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

##### Rutherford scattering example 2

Use $\energy{K}=\quantity{7.7\times10^6}{eV}$, $Z_1=2$, $Z_2=79$, $t=\quantity{2.1\times10^{-7}}{m}$, $\mechanical{r}=\quantity{1.0}{cm}$, and $n=\quantity{5.90\times10^{28}}{m^{-3}}$. The boxed result for the count per detector area divided by the incident count is $N(\theta)/N_{\mathrm i}=\quantity{3.2\times10^{-7}}{mm^{-2}}$.

##### Balmer series and Rydberg–Ritz formula

$$
\signal{\lambda}=(\quantity{364.6}{nm})\frac{n^2}{n^2-4},
\qquad n=3,4,5,\ldots
$$

The more general formula is $1/\signal{\lambda}_n=R(1/m^2-1/n^2)$ for $n>m$. The notes give $R_\infty=\quantity{1.09737\times10^7}{m^{-1}}$ and $R_{\mathrm H}=\quantity{1.09678\times10^7}{m^{-1}}$.

##### Substitution for Rutherford example 1

First convert $\energy{K}=\quantity{7.7\times10^6}{eV}\simeq\quantity{1.23\times10^{-12}}{J}$. Then

$$
f=\pi(\quantity{5.90\times10^{28}}{m^{-3}})(\quantity{1.0\times10^{-6}}{m})
\left[\frac{(2)(79)(\quantity{1.6\times10^{-19}}{C})^2}
{8\pi(\quantity{8.85\times10^{-12}}{C^2/(N\,m^2)})(\quantity{1.23\times10^{-12}}{J})}\right]^2
\cot^2(45^\circ).
$$

The area from the square brackets cancels the inverse area of $nt$.

##### Bohr model of hydrogen

The notes call Bohr the “father of the atom.” His stationary states have definite total energy. An electron in a stationary state does not continuously radiate electromagnetic energy. For an emission transition, $\Delta\energy{E}=\energy{E}_1-\energy{E}_2=h\signal{\nu}$ with $\energy{E}_1>\energy{E}_2$. Classical physics describes the dynamical equilibrium of each stationary state, while transitions are governed by the quantum postulate. The mean kinetic energy is $\bar{\energy{K}}=nh\signal{f}_{\mathrm{orb}}/2$. The handwritten line also repeats this without the factor $1/2$.

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

For emission from an upper state to a lower state, $h\signal{f}=\energy{E}_{\mathrm u}-\energy{E}_{\mathrm l}$. Since $\signal{\lambda}\signal{f}=c$, the Bohr energies give

$$
\frac1{\signal{\lambda}}=\frac{\signal{f}}c
=\frac{\energy{E}_{\mathrm u}-\energy{E}_{\mathrm l}}{hc}
=\frac{\energy{E}_0}{hc}\left(\frac1{n_{\mathrm l}^2}-\frac1{n_{\mathrm u}^2}\right).
$$

This reproduces the Rydberg–Ritz formula. Neglecting nuclear recoil gives $R_\infty=\energy{E}_0/(hc)=\quantity{1.09737\times10^7}{m^{-1}}$. The hydrogen value quoted here is $R_{\mathrm H}=\quantity{1.096776\times10^7}{m^{-1}}$. Quantized angular momentum leads to quantization of the other orbital quantities.

##### Successes and limitations of the Bohr model

| Successes | Limitations |
| --- | --- |
| Explained the hydrogen spectrum, including the Lyman, Balmer, and Paschen series. | Applies only to hydrogenic, one-electron atoms. |
| Accurately predicted previously unknown spectral lines. | Could not account for line intensities or fine structure. |
| Expressed the Rydberg constant in terms of known constants. | Could not explain how atoms bond into molecules. |
|  | The assumptions lacked a physical foundation. |

Sommerfeld included relativistic effects and explained some of the fine structure.

##### Atomic structure and the wave nature of matter

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

##### X-ray spectra

Classical physics accounts for the bremsstrahlung continuum. Bohr's theory accounts for the discrete peaks as transitions. The $K$ and $L$ series correspond to transitions into the respective shells. The cutoff relation is $\energy{E}_{\mathrm k}=hc/\signal{\lambda}_{\min}$. At this stage the model leaves the shell populations and the reason for shell formation unexplained.

| Principal quantum number | Shell name |
| --- | --- |
| $n=1$ | $K$ |
| $n=2$ | $L$ |
| $n=3$ | $M$ |

A $K$ electron is an electron in the $n=1$ shell.

The X-ray photon energy is $\energy{E}_{\mathrm{X}}=\energy{E}_{\mathrm{upper}}-\energy{E}_{\mathrm{lower}}$.

| Electron transition | X-ray line | $\Delta n$ |
| --- | --- | --- |
| $L\to K$ | $K_\alpha$ | $1$ |
| $M\to K$ | $K_\beta$ | $2$ |
| $M\to L$ | $L_\alpha$ | $1$ |

The notes associate $\Delta n=1,2,3,4,5$ with $\alpha,\beta,\gamma,\delta,\varepsilon$, respectively.

##### Moseley and atomic number

$$
\sqrt{\signal{f}}=A_n(Z-b),
\qquad
A_n^2=cR_\infty\left(1-\frac1{n^2}\right).
$$

The nuclear charge is $Z\electric{e}$. With one electron in the $K$ shell, an $L$-shell electron sees an effective charge of approximately $(Z-1)\electric{e}$. The subtraction $Z-b$ in Moseley's law accounts for screening.

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

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
| $\mechanical{b}$ | $\unit{m}$ | Impact parameter | Perpendicular offset of the incident trajectory from the scattering center. |
| $\sigma$ | $\unit{m^2}$ | Integrated scattering cross section | Effective area for scattering by at least the specified angle. |
| $R_\infty$ | $\unit{m^{-1}}$ | Rydberg constant | Series constant for an infinitely massive nucleus. |
| $R_{\mathrm H}$ | $\unit{m^{-1}}$ | Hydrogen Rydberg constant | Accounts for the electron–proton reduced mass. |
| $\mechanical{a}_0$ | $\unit{m}$ | Bohr radius | Radius of the $n=1$ orbit in the Bohr model. |
| $\energy{E}_n$ | $\unit{eV}$ | Bound-state energy | Energy of the $n$th level relative to ionization. |
| $\signal{\lambda}$ | $\unit{m}$ | De Broglie wavelength | Wavelength associated with momentum magnitude $\mechanical{p}$ through $h/\mechanical{p}$. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate for the decay of an individual nucleus. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Nuclear mass per unit volume. |
