---
title: "Matter waves, diffraction, and early quantum problems"
---

> [!TLDR]
> Use matter wavelengths, diffraction, uncertainty, and normalization in worked problems from the early quantum experiments.

## Worked lecture material

##### The wave nature of matter

The handwritten date reads 2015. If light behaves like particles, can particles behave like waves? The de Broglie wavelength is $\signal{\lambda}=h/\mechanical{p}$, where $\mechanical{p}$ is the momentum magnitude.

##### Davisson–Germer experiment

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

##### Interference of neutrons

Gähler and Zeilinger performed interference experiments at low intensities with neutrons moving at about $\quantity{2}{km/s}$. Photons, electrons, and neutrons can all produce interference patterns in a double-slit experiment.

##### Probability and its role

Integrating probability density over a region gives probability, just as integrating mass density over a region gives mass. The wave function extends de Broglie's wave description of matter. The notes give a separated wave function $\Psi(\mathbf r,t)=\psi(\mathbf r)\phi(t)$ and distinguish the uppercase $\Psi$ from the lowercase $\psi$ and $\phi$.

The product $\Psi^*\Psi$ is real. Integrate it over all space using the volume element $d\tau$ to get a probability of one for finding the particle somewhere.

$$
\int_{\mathbb R^3}\Psi^*(\mathbf r,t)\Psi(\mathbf r,t)\,d\tau=1.
$$

##### Postulate of quantum mechanics

The normalized wave function $\Psi(\mathbf r,t)$ completely specifies the pure state of the system. From the wave function one can determine what the theory predicts about the particle, including probabilities for the results of measurements.

##### Classical wave equation

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

##### Interference

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

A wave packet can be represented by a Fourier series of components,

$$
\Psi(x,t)=\sum_i^\infty A_i\cos(\signal{k}_ix-\signal{\omega}_it).
$$

The midterm study list names Niels Bohr, Robert Millikan, Albert Einstein, Max Planck, Ernest Rutherford, Arthur Compton, and J. J. Thomson as key figures in the quantum revolution.

##### The wave nature of matter and the role of probability

The notes remind students to print the crib sheet for the Friday midterm, which covers the lectures, photoelectric lab, and homework.

The probability of an outcome $A$ is the limiting fraction of trials that produce it. For disjoint outcomes $A$ and $B$,

$$
P(A)=\lim_{N_{\mathrm{tot}}\to\infty}\frac{N_A}{N_{\mathrm{tot}}},
\qquad
P(A\cup B)=\lim_{N_{\mathrm{tot}}\to\infty}\frac{N_A+N_B}{N_{\mathrm{tot}}}.
$$

![[Kyle Kabasares - Modern Physics - Counting outcomes in regions.png|**Fig. 7** Trial outcomes are assigned to the center $A$, the surrounding ring $B$, or the outer region $C$.]]

For $30$ rolls of a fair die, the probability of a $1$ or a $6$ on any roll is $1/6+1/6=1/3$. The expected number of such rolls is $30/3=10$.

##### Probability density and light intensity

In the wave picture, the pattern has an intensity. In the particle picture, it describes the probability that a photon strikes a given region. The intensity is $\energy{I}=\energy{P}/\mechanical{A}$, energy per time per area.

![[Kyle Kabasares - Modern Physics - Photon detection strip.png|**Fig. 8** A detector strip at position $x$ has width $dx$ and height $H$, giving area $H\,dx$.]]

In one second, the energy falling on the strip is $\energy{I}(x)H\,dx\,\Delta t$ with $\Delta t=\quantity{1}{s}$. Each photon carries energy $h\signal{f}$. The number of photons in the strip is $dN=\energy{I}(x)H\,dx\,\Delta t/(h\signal{f})$. The probability is the count divided by the total photon count.

$$
dP=\frac{dN}{N_{\mathrm{tot}}}
=\frac{H\,\Delta t}{h\signal{f}N_{\mathrm{tot}}}\,\energy{I}(x)\,dx
\propto\lvert\text{amplitude}(x)\rvert^2\,dx.
$$

Thus the photon detection probability density is proportional to the squared magnitude of the light-wave amplitude. The notes use the same fixed one-second interval for all counts.

For a normalized wave function, the probability density is $P(x)=\lvert\Psi(x)\rvert^2$. Normalization fixes the overall proportionality constant, since $\int_{-\infty}^{\infty}P(x)\,dx=1$ when all positions are included.

![[Kyle Kabasares - Modern Physics - Wave function nodes.png|**Fig. 9** The sketched wave function has nodes at the circled positions, where the probability density is zero.]]

The notes use the sinusoidal example $\Psi=A\sin(\signal{k}x-\signal{\omega}t+\phi)$, with $A$ an overall normalization constant when the domain permits normalization. A separable spatial wave function in three dimensions is $\Psi(\mathbf r)=X(x)Y(y)Z(z)$.

##### Normalizing a wave function

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

##### Blackbody radiation

A blackbody absorbs incident light. A cavity with a small hole approximates a blackbody because incoming light reflects repeatedly inside the cavity and is absorbed.

![[Kyle Kabasares - Modern Physics - Blackbody cavity.png|**Fig. 11** The sketch shows light entering through a small opening and reflecting inside the cavity.]]

The Rayleigh–Jeans spectral radiance is $\energy{I}=2\signal{f}^2 k_{\mathrm B}\thermal{T}/c^2$. Its high-frequency rise is the **ultraviolet catastrophe**. The notes illustrate the contradiction by observing that this prediction would expose an eye looking into the cavity to arbitrarily intense high-frequency radiation. The measured spectrum falls at high frequencies. Color and temperature are related.

![[Kyle Kabasares - Modern Physics - Ultraviolet catastrophe.png|**Fig. 12** The classical prediction continues upward as frequency increases, while the measured spectrum peaks and falls.]]

Planck accounted for blackbody radiation by quantizing oscillator energy as $\energy{E}_n=nh\signal{f}$, where $n$ is an integer. Radiation of a given frequency is associated with oscillators at that frequency and their allowed energy changes. Quantization restricts the energies the oscillator can have. Einstein extended the idea to light itself. A photon is a quantum of light of energy $\energy{E}=h\signal{f}$.

##### The photoelectric effect

The classical predictions were that sufficient intensity would eject electrons at any wavelength and that increasing the amplitude would raise the maximum kinetic energy. The experiment instead shows a cutoff frequency $\signal{f}_0$ below which there is no photocurrent. For $\signal{f}>\signal{f}_0$, higher intensity increases the number of emitted electrons, while their maximum kinetic energy is set by the frequency and work function.

A photon has zero rest mass and carries momentum. Its energy obeys $\energy{E}=\mechanical{p}c=h\signal{f}$. Since $\signal{f}/c=1/\signal{\lambda}$,

$$
\mechanical{p}=\frac{h}{\signal{\lambda}},
\qquad
\signal{\lambda}=\frac h{\mechanical{p}}.
$$

The handwritten intermediate line inverts the wavelength relation.

##### Compton scattering

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

Louis de Broglie extended wave–particle duality to matter. If light can act like a particle, a particle can act like a wave with wavelength $\signal{\lambda}=h/\mechanical{p}$.

##### Blackbody radiation problems

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

##### Quantization of light

The incident wavelength is $\quantity{400}{nm}$ and lithium has work function $\energy{\phi}=\quantity{2.93}{eV}$. Then

$$
\energy{E}=h\signal{f}=\frac{hc}{\signal{\lambda}}
\simeq\quantity{4.97\times10^{-19}}{J}\simeq\quantity{3.10}{eV}.
$$

Use $\electric{e}\electric{V}_0=h\signal{f}-\energy{\phi}$ to find

$$
\electric{V}_0=\frac{\quantity{3.10}{eV}-\quantity{2.93}{eV}}{\electric{e}}=\quantity{0.17}{V}.
$$

##### Probability and the wave nature of matter

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

##### Measurement and uncertainty

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

##### Uncertainty and causality

Laplace wrote in 1812 of an all-seeing intelligence. The notes quote Heisenberg in 1927, “Through quantum mechanics, the invalidity of the law of causation is definitively established.”

##### Rutherford scattering

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

**Homework 3.3. Rutherford scattering**

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

##### Bohr model review

The assumption of quantized angular momentum leads to quantized orbital speed, radius, and energy.

##### Tipler 3.12. Wien's law

Use $\signal{\lambda}_{\max}\thermal{T}=\quantity{2.898\times10^{-3}}{m\,K}$. At $\thermal{T}=\quantity{3}{K}$, $\signal{\lambda}_{\max}\simeq\quantity{9.66\times10^{-4}}{m}$. The recorded results for parts (b) and (c) are $\quantity{9.66\times10^{-6}}{m}$ and $\quantity{9.66\times10^{-8}}{m}$.

##### Tipler 3.41. Compton wavelengths

For a proton of mass $\quantity{1.672\times10^{-27}}{kg}$ and an electron of mass $\quantity{9.11\times10^{-31}}{kg}$,

$$
\signal{\lambda}_{\mathrm C,p}=\frac{h}{\mechanical{m}_{\mathrm p}c}\simeq\quantity{1.32\times10^{-15}}{m},
\qquad
\signal{\lambda}_{\mathrm C,e}=\frac{h}{\mechanical{m}_{\mathrm e}c}\simeq\quantity{2.43\times10^{-12}}{m}.
$$

Use $h=\quantity{6.626\times10^{-34}}{J\,s}$ and $c\simeq\quantity{3.00\times10^8}{m/s}$. The photon energy $hc/\signal{\lambda}_{\mathrm C}$ at the proton wavelength is $\quantity{1.50\times10^{-10}}{J}$, and at the electron wavelength it is $\quantity{8.18\times10^{-14}}{J}$.

##### Tipler 3.47. Bragg condition and tube voltage

For first order, $\theta=20^\circ$ and $\mechanical{d}=\quantity{0.28}{nm}$ give

$$
\signal{\lambda}=2\mechanical{d}\sin\theta
=2(\quantity{0.28}{nm})\sin(20^\circ)\simeq\quantity{0.192}{nm}.
$$

Set this wavelength equal to the cutoff $\signal{\lambda}_{\min}=hc/(\electric{e}\electric{V})$. With $hc/\electric{e}\simeq\quantity{1.24\times10^3}{V\,nm}$, the tube voltage is $\electric{V}\simeq\quantity{6.47\times10^3}{V}$.

##### Electron accelerating voltage

For a nonrelativistic electron accelerated through $\electric{V}_0$, use $\energy{E}_{\mathrm k}=\electric{e}\electric{V}_0$. Then

$$
\signal{\lambda}=\frac h{\mechanical{p}}
=\frac h{\sqrt{2\mechanical{m}_{\mathrm e}\electric{e}\electric{V}_0}},
\qquad
\electric{V}_0=\frac{h^2}{2\mechanical{m}_{\mathrm e}\electric{e}\signal{\lambda}^2}.
$$

##### Problems 5.6 and 5.11. Wavelength and kinetic energy

From $\mechanical{p}=\mechanical{m}\mechanical{v}$ and $\energy{K}=\mechanical{p}^2/(2\mechanical{m})$,

$$
\signal{\lambda}=\frac{h}{\sqrt{2\mechanical{m}\energy{K}}}
=\frac{hc}{\sqrt{2\mechanical{m}c^2\energy{K}}}.
$$

Solve for kinetic energy to obtain $\energy{K}=h^2c^2/(2\mechanical{m}c^2\signal{\lambda}^2)$.

**Homework 2.2 and Tipler 3.34**

For a peak wavelength of $\quantity{82.8}{nm}$, Wien's law gives

$$
\thermal{T}=\frac{\quantity{2.898\times10^{-3}}{m\,K}}{\quantity{82.8\times10^{-9}}{m}}
\simeq\quantity{3.5\times10^4}{K}.
$$

For a tube voltage of $\quantity{80}{kV}$, the X-ray cutoff is $\signal{\lambda}_{\min}=(\quantity{1.24\times10^3}{V\,nm})/(\quantity{80\times10^3}{V})\simeq\quantity{0.016}{nm}$.

##### One-percent Compton shift

The shift is $\Delta\signal{\lambda}/\signal{\lambda}_1=0.01$. At $\theta=90^\circ$, $\signal{\lambda}_2-\signal{\lambda}_1=h/(\mechanical{m}_{\mathrm e}c)$. Therefore

$$
\signal{\lambda}_1=\frac{100h}{\mechanical{m}_{\mathrm e}c}\simeq\quantity{0.242}{nm}.
$$

##### Compton backscattering

For $\signal{\lambda}_1=\quantity{0.0711}{nm}$, the incident energy is $\energy{E}=hc/\signal{\lambda}_1\simeq\quantity{2.80\times10^{-15}}{J}$. At $\theta=180^\circ$ the wavelength shift is $2h/(\mechanical{m}_{\mathrm e}c)$. Thus

$$
\signal{\lambda}_2=\signal{\lambda}_1+\frac{2h}{\mechanical{m}_{\mathrm e}c}\simeq\quantity{0.0760}{nm}.
$$

##### The Schrödinger equation

Schrödinger's formulation uses a wave equation and normalization $\int\Psi^*\Psi\,dx=1$. Heisenberg's formulation uses linear algebra. In bra–ket notation the normalization is $\langle\Psi\mid\Psi\rangle=1$.

The Schrödinger equation is nonrelativistic and linear and relates the position and time dependence of the wave function. If $\Psi_1$ and $\Psi_2$ solve it, then $\Psi_1\pm\Psi_2$ also solves it. Linear combinations allow interference and can combine arbitrarily many wave components.

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | Magnitude of the electron charge. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Determines the blackbody spectrum. |
| $\signal{\lambda}_{\max}$ | $\unit{m}$ | Peak wavelength | Wavelength of maximum spectral exitance. |
| $h$ | $\unit{J\,s}$ | Planck constant | Relates the energy of one quantum to its frequency. |
| $\energy{\phi}$ | $\unit{eV}$ | Work function | Minimum energy needed to remove an electron from a material surface. |
| $\electric{V}_0$ | $\unit{V}$ | Stopping potential | Retarding voltage whose magnitude corresponds to the maximum photoelectron kinetic energy divided by the elementary charge. |
| $\signal{\lambda}_{\mathrm C}$ | $\unit{m}$ | Compton wavelength | Length $h/(\mechanical{m}_{\mathrm e}c)$ for the electron. |
| $\energy{E}_n$ | $\unit{eV}$ | Bound-state energy | Energy of the $n$th level relative to ionization. |
| $\signal{\lambda}$ | $\unit{m}$ | De Broglie wavelength | Wavelength associated with momentum magnitude $\mechanical{p}$ through $h/\mechanical{p}$. |
| $\signal{v}_{\mathrm{ph}}$ | $\unit{m/s}$ | Phase velocity | Speed of a point of constant phase. |
| $\signal{v}_{\mathrm{gr}}$ | $\unit{m/s}$ | Group velocity | Speed of the envelope of a narrow wave packet. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate for the decay of an individual nucleus. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Nuclear mass per unit volume. |
| $\tau$ | $\unit{s}$ | Mean lifetime | Reciprocal of the decay constant. |
