---
title: "Bose condensation, photon gases, and phonons"
---

> [!TLDR]
> Treat the Bose ground state separately and calculate the transition temperature, thermal energy, and bosonic radiation spectra.

## Worked lecture material

For an ultrarelativistic Fermi gas,

$$
\mechanical{P}\mechanical{V}=\frac{\energy{E}}{3}.
$$

##### Degenerate Bose gas

For nonrelativistic bosons, the mean occupation and dispersion are

$$
n(\energy{\epsilon})=\frac{1}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}-1},
\qquad
\energy{\epsilon}=\frac{\mechanical{p}^2}{2\mechanical{m}}.
$$

The $-1$ in the denominator changes the low-energy occupation. Counting states in a spherical shell gives

$$
\begin{aligned}
\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}\,d^3\mechanical{p}
&\longrightarrow \frac{4\pi g\mechanical{V}}{(2\pi\energy{\hbar})^3}\mechanical{p}^2\,d\mechanical{p} \\
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}\sqrt{\energy{\epsilon}}\,d\energy{\epsilon}.
\end{aligned}
$$

With $x=\thermal{\beta}\energy{\epsilon}$, the continuum particle count is

$$
\begin{aligned}
N_{\mathrm{ex}}
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{\sqrt{\energy{\epsilon}}\,d\energy{\epsilon}}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}-1} \\
&=\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{\sqrt{x}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}-1}.
\end{aligned}
$$

The energy-level sketches contrast the filled low-energy levels of a Fermi gas with the Bose case. The fermion sketch shows spin pairs through the Fermi energy. In the boson sketch, several particles occupy the ground state and one occupies an excited state. The lecture asks at what temperature a macroscopic ground-state population appears.

##### Critical temperature of the Bose gas

The page repeats the nonrelativistic state count and continuum integral from page 56 and cites Pathria, page 157. Choose the ground-state energy to be zero. Its occupation is

$$
N_0=n(0)=\frac{1}{e^{-\thermal{\beta}\energy{\mu}}-1}.
$$

When nearly all $N$ particles occupy the ground state, $e^{-\thermal{\beta}\energy{\mu}}-1\approx 1/N$. Hence

$$
\energy{\mu}\approx-\thermal{k}_{\mathrm B}\thermal{T}\ln\left(1+\frac{1}{N}\right)
\approx-\frac{\thermal{k}_{\mathrm B}\thermal{T}}{N}.
$$

The chemical potential approaches zero from below as $\thermal{T}\to 0$. At the critical temperature $\thermal{T}_{\mathrm c}$ in the thermodynamic limit, $\thermal{\beta}\energy{\mu}=0$. The excited states alone then accommodate $N$ particles,

$$
N=\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c})^{3/2}}{4\pi^2\energy{\hbar}^3}I,
\qquad
I=\int_0^\infty\frac{\sqrt{x}\,dx}{e^x-1}.
$$

The integral follows from the gamma function and the Riemann zeta function,

$$
\begin{aligned}
\int_0^\infty\frac{x^{s-1}\,dx}{e^x-1}&=\Gamma(s)\zeta(s),&
\zeta(s)&=\sum_{j=1}^\infty\frac{1}{j^s}\qquad(s>1),\\
I&=\Gamma\left(\frac32\right)\zeta\left(\frac32\right)
=\frac{\sqrt{\pi}}{2}\zeta\left(\frac32\right)\approx 2.315.
\end{aligned}
$$

Solving the state-count equation gives

$$
\boxed{\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c}
=\frac{\energy{\hbar}^2}{2\mechanical{m}}\left(\frac{N}{\mechanical{V}}\right)^{2/3}
\left(\frac{4\pi^2}{gI}\right)^{2/3}.}
$$

The factors $4\pi^2$ and $g$ in the boxed result follow from the state count above. The grand canonical factor associated with particle number is $e^{+\thermal{\beta}\energy{\mu}N}$.

For helium, the ideal-gas calculation gives a critical temperature of roughly $3\;\unit{K}$. The lecture records an experimental value of approximately $2.19\;\unit{K}$ and attributes the comparison to Fritz London. The handwritten date reads 1928.

##### Counting the ground state separately

The ground state can hold a macroscopic population. Include its occupation explicitly and use the continuum integral for the excited states,

$$
N=N_0+\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{\sqrt{x}\,dx}{e^{x-\thermal{\beta}\energy{\mu}}-1}.
$$

Below $\thermal{T}_{\mathrm c}$, set $\energy{\mu}=0$ in the excited-state integral in the thermodynamic limit. Its value is proportional to $\thermal{T}^{3/2}$ and equals $N$ at $\thermal{T}_{\mathrm c}$. Therefore,

$$
N_{\mathrm{ex}}=N\left(\frac{\thermal{T}}{\thermal{T}_{\mathrm c}}\right)^{3/2},
\qquad
N_0=N\left[1-\left(\frac{\thermal{T}}{\thermal{T}_{\mathrm c}}\right)^{3/2}\right].
$$

At zero temperature, all particles occupy the ground state. The margin cites Pathria, page 162.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Ground and excited Bose populations.png|**Fig. 12** Ground-state fraction (blue) and excited-state fraction (red) below the critical temperature.]]

Bose condensation occurs in momentum space. The macroscopic ground-state population occupies the $\mechanical{\vec p}=0$ state.

##### Energy and heat capacity

The ground state contributes $N_0\cdot 0$ to the energy. Below $\thermal{T}_{\mathrm c}$, with $\energy{\mu}\to 0$, the excited states give

$$
\begin{aligned}
\energy{E}
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{\energy{\epsilon}^{3/2}\,d\energy{\epsilon}}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}-1}\\
&=\frac{g\mechanical{V}(2\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T})^{3/2}\thermal{k}_{\mathrm B}\thermal{T}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty \frac{x^{3/2}\,dx}{e^x-1}.
\end{aligned}
$$

The last integral is $\Gamma(5/2)\zeta(5/2)=(3\sqrt{\pi}/4)\zeta(5/2)\approx 1.78329$. Dividing by the state count at $\thermal{T}_{\mathrm c}$ gives

$$
\energy{E}\approx 0.770\,N\thermal{k}_{\mathrm B}\thermal{T}
\left(\frac{\thermal{T}}{\thermal{T}_{\mathrm c}}\right)^{3/2},
\qquad
\thermal{C}_V=\left(\frac{\partial\energy{E}}{\partial\thermal{T}}\right)_{\mechanical{V},N}
=\frac{5\energy{E}}{2\thermal{T}}\propto\thermal{T}^{3/2}.
$$

The ideal Bose gas has a cusp at the transition and approaches the classical heat capacity $3N\thermal{k}_{\mathrm B}/2$ at high temperature. The sketch for helium labels a sharp anomaly near $2.19\;\unit{K}$ as the lambda transition. The margin cites Pathria, page 165.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Bose gas and helium heat capacity.png|**Fig. 13** Heat capacity sketches for the ideal Bose gas and helium. The upper plateau corresponds to $3\thermal{k}_{\mathrm B}/2$ per particle.]]

##### Chemical potential near the Bose transition

The finite-volume estimate at $\thermal{T}_{\mathrm c}$ is

$$
|\energy{\mu}|=\frac{\energy{\hbar}^2}{2\mechanical{m}}
\left(\frac{1}{\mechanical{V}}\right)^{2/3}
\left(\frac{4\pi}{g}\right)^{2/3}
\longrightarrow 0
\qquad(\mechanical{V}\to\infty).
$$

The sketch shows zero chemical potential up to $\thermal{T}_{\mathrm c}$ and a quadratic departure above it. Its rising curve represents the magnitude $|\energy{\mu}|\propto(\thermal{T}-\thermal{T}_{\mathrm c})^2$.

##### Photons and phonons

A photon has energy $\energy{\epsilon}_{p}=\mechanical{c}|\mechanical{\vec p}|=\energy{\hbar}\signal{\omega}$, with arbitrarily low energies in the continuum. The number of photons can vary at fixed energy and volume. Entropy maximization gives

$$
\left(\frac{\partial\thermal{S}}{\partial N}\right)_{\mechanical{V},\energy{E}}=-\frac{\energy{\mu}}{\thermal{T}}=0.
$$

Consequently $\energy{\mu}=0$, and the Planck occupation factor is

$$
n(\energy{\epsilon})=\frac{1}{e^{\thermal{\beta}\energy{\epsilon}}-1}
=\frac{1}{e^{\energy{\hbar}\signal{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})}-1}.
$$

For the two photon polarizations, the phase-space shell contains

$$
\begin{aligned}
d\mathcal{N}
&=\frac{g\mechanical{V}\,d^3\mechanical{p}}{(2\pi\energy{\hbar})^3}
=\frac{2\mechanical{V}}{(2\pi\energy{\hbar})^3}4\pi\mechanical{p}^2\,d\mechanical{p} \\
&=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3}\signal{\omega}^2\,d\signal{\omega},
\qquad \mechanical{p}=\frac{\energy{\hbar}\signal{\omega}}{\mechanical{c}}.
\end{aligned}
$$

The shell substitution gives $\signal{\omega}^2$ for the mode count. The extra factor of $\signal{\omega}$ appears when weighting each mode by its energy.

##### Photon number density

With $x=\thermal{\beta}\energy{\hbar}\signal{\omega}$,

$$
\begin{aligned}
N
&=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3}
\int_0^\infty\frac{\signal{\omega}^2\,d\signal{\omega}}{e^{\thermal{\beta}\energy{\hbar}\signal{\omega}}-1}\\
&=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3(\thermal{\beta}\energy{\hbar})^3}
\int_0^\infty\frac{x^2\,dx}{e^x-1},\\
\frac{N}{\mechanical{V}}
&=\frac{\Gamma(3)\zeta(3)}{\pi^2}
\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\hbar}\mechanical{c}}\right)^3
\approx 0.2436\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\hbar}\mechanical{c}}\right)^3.
\end{aligned}
$$

Ordinary light beams pass through each other with negligible interaction. The notebook sketches a photon scattering process through an electron loop. The amplitude scales as the fourth power of the elementary charge and hence as $\alpha^2$, where $\alpha$ is the fine-structure constant. The probability scales as $\alpha^4$.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Photon scattering box diagram.png|**Fig. 14** Electron-loop box diagram for photon–photon scattering. Wavy lines represent photons.]]

##### Mean energy in a frequency interval

Multiply the mode count by the mean occupation and the energy per photon,

$$
d\energy{E}
=\energy{\hbar}\signal{\omega}\,n(\signal{\omega})\,d\mathcal{N}
=\frac{\mechanical{V}}{\pi^2\mechanical{c}^3}
\frac{\energy{\hbar}\signal{\omega}^3}{e^{\energy{\hbar}\signal{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})}-1}\,d\signal{\omega}.
$$

When $\energy{\hbar}\signal{\omega}\ll\thermal{k}_{\mathrm B}\thermal{T}$, the mean energy per mode approaches the equipartition value $\thermal{k}_{\mathrm B}\thermal{T}$. When $\energy{\hbar}\signal{\omega}\gg\thermal{k}_{\mathrm B}\thermal{T}$, the spectrum falls exponentially.

![[Kyle Kabasares - Thermodynamics and Statistical Mechanics - Planck spectrum peak.png|**Fig. 15** Planck spectrum in the dimensionless frequency $x=\energy{\hbar}\signal{\omega}/(\thermal{k}_{\mathrm B}\thermal{T})$. The maximum of $x^3/(e^x-1)$ lies near $x=2.822$.]]

The photon dispersion is $\energy{E}=\mechanical{c}|\mechanical{\vec p}|$, and $\energy{\mu}=0$. Integrate the Planck spectrum from [[#Photon number density|the section on Photon number density]], using $x=\thermal{\beta}\energy{\hbar}\signal{\omega}$,

$$
\begin{aligned}
\langle\energy{E}\rangle
&=\frac{\mechanical{V}}{\pi^2(\energy{\hbar}\mechanical{c})^3\thermal{\beta}^4}
\int_0^\infty\frac{x^3\,dx}{e^x-1} \\
&=\frac{\pi^2\mechanical{V}(\thermal{k}_{\mathrm B}\thermal{T})^4}{15(\energy{\hbar}\mechanical{c})^3}
=\frac{4\thermal{\sigma}\mechanical{V}}{\mechanical{c}}\thermal{T}^4.
\end{aligned}
$$

The integral is $\pi^4/15$. Here $\thermal{\sigma}$ is the Stefan–Boltzmann constant. The margin gives the dates 1879 and 1884.

The grand potential equals the Helmholtz free energy for this gas. Integration by parts gives

$$
\begin{aligned}
\energy{\Omega}
&=\energy{A}-\energy{\mu}N
=\thermal{k}_{\mathrm B}\thermal{T}\int\ln(1-e^{-\thermal{\beta}\energy{\hbar}\signal{\omega}})\,d\mathcal{N} \\
&=\frac{\thermal{k}_{\mathrm B}\thermal{T}\mechanical{V}}{\pi^2\mechanical{c}^3}
\int_0^\infty\signal{\omega}^2\ln(1-e^{-\thermal{\beta}\energy{\hbar}\signal{\omega}})\,d\signal{\omega} \\
&=-\frac{\mechanical{V}}{3\pi^2\mechanical{c}^3}
\int_0^\infty\frac{\energy{\hbar}\signal{\omega}^3\,d\signal{\omega}}{e^{\thermal{\beta}\energy{\hbar}\signal{\omega}}-1}
=-\frac{\langle\energy{E}\rangle}{3}.
\end{aligned}
$$

Using $\energy{\Omega}=-\mechanical{P}\mechanical{V}$ and $\energy{A}=\langle\energy{E}\rangle-\thermal{T}\thermal{S}$,

$$
\mechanical{P}=\frac{4\thermal{\sigma}}{3\mechanical{c}}\thermal{T}^4,
\qquad
\thermal{S}=\frac{16\thermal{\sigma}\mechanical{V}}{3\mechanical{c}}\thermal{T}^3.
$$

## Source

Kyle Kabasares, *Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of a particle. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $N$ | 1 | Particle count | Number of atoms or molecules. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates absolute temperature to a microscopic energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature of the system or reservoir. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\energy{\mu}$ | $\unit{J}$ per particle | Chemical potential | Intensive energy variable conjugate to particle number. |
| $\Omega$ | 1 | Multiplicity | Number of accessible microstates, including the cumulative count in the ideal-gas calculation. |
| $\signal{\nu}$, $\signal{\omega}$ | $\unit{Hz}$, $\unit{rad\,s^{-1}}$ | Frequency and angular frequency | Two frequency conventions for radiation modes, related by $\signal{\omega}=2\pi\signal{\nu}$. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Propagation speed in the photon spectrum formula. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $\energy{\Omega}$ | $\unit{J}$ | Grand potential | Legendre transform of Helmholtz free energy with respect to particle number. |
| $j$ | 1 | Internal partition function | Sum over molecular states other than translation. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\thermal{T}_{\mathrm c}$ | $\unit{K}$ | Critical temperature | Onset of macroscopic ground-state occupation or magnetic ordering, according to the model. |
| $N_0$, $N_{\mathrm{ex}}$ | $1$ | Ground and excited populations | Particles in the ground state and particles in all excited states, respectively. |
| $\mathcal{N}$ | $1$ | Mode count | Number of photon modes, including polarization. |
| $\alpha$ | $1$ | Fine-structure constant | Electromagnetic coupling used in the photon scattering estimate. |
| $\thermal{\sigma}$ | $\unit{W\,m^{-2}\,K^{-4}}$ | Stefan–Boltzmann constant | Coefficient of $\thermal{T}^4$ in the blackbody radiant flux. |
