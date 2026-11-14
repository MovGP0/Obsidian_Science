---
title: "Inverse Compton scattering and photon energy exchange"
---

> [!TLDR]
> Transform photon kinematics and intensities between frames to calculate the power exchanged between photons and energetic electrons.

## Worked lecture material

In the extreme relativistic limit, $x\gg1$, the total cross section is approximately

$$
\mechanical{\sigma}\simeq\frac{3\mechanical{\sigma}_{\mathrm{T}}}{8x}
\left(\ln(2x)+\frac{1}{2}\right).
$$

See Rybicki and Lightman, equation 7.6b.

##### Inverse Compton scattering

See Rybicki and Lightman, chapter 7, sections 1, 2, and 4. Start with a moving electron and calculate the energy it transfers to an incident photon. Transform the photon to the electron rest frame, evaluate the scattering there, and transform back to the laboratory frame.

Assume that the incident photon energy in the electron rest frame is much smaller than $\mechanical{m}_e c^2$. Scattering in that frame can then be treated in the Thomson limit. The notes return to the validity of this assumption later.

![[Kyle Kabasares - Radiative Transfer - Inverse Compton lab frame.png|**Fig. 27** Lab-frame directions of the incident and scattered photons and the moving electron.]]

Choose the electron direction $\hat{k}_e$ as the axis from which the angles are measured.

In the laboratory frame define

$$
\cos\theta_i=\hat{k}_i\cdot\hat{k}_e,\qquad
\cos\theta_f=\hat{k}_f\cdot\hat{k}_e.
$$

The corresponding angles in the electron rest frame are $\cos\theta_i'=\hat{k}_i'\cdot\hat{k}_e$ and $\cos\theta_f'=\hat{k}_f'\cdot\hat{k}_e$. The lab-frame electron direction serves as the reference axis in both drawings.

![[Kyle Kabasares - Radiative Transfer - Inverse Compton electron rest frame.png|**Fig. 28** The incident and outgoing photon directions in the electron rest frame, with the lab-frame electron direction retained as a reference.]]

##### Velocity transformations

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

##### Lorentz transformation matrix

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

##### Energy transformation for a massive particle

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

##### Energy transformation for a massless particle

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

Energy conservation limits the maximum outgoing photon energy to order $\gamma\mechanical{m}_e c^2$ when the incoming photon energy is small compared with the electron energy. The line above this estimate appears to square the incident energy. The Thomson-limit result on the preceding page scales linearly with it.

##### Power scattered by one moving electron

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

##### Transforming the scattered luminosity

The notes use the invariance of total emitted power when the emitted radiation has zero net momentum in the emitter's instantaneous rest frame (Rybicki and Lightman, section 4.8). The radiated energy then transforms as $d\energy{E}=\gamma\,d\energy{E}'$, while the time interval along the emitter's worldline transforms as $dt=\gamma\,dt'$. Their ratio is invariant under this condition.

$$
\frac{d\energy{E}}{dt}=\frac{d\energy{E}'}{dt'}
$$

Thus the scattered luminosity in the laboratory frame is $d\energy{E}_\gamma/dt=c\mechanical{\sigma}_{\mathrm{T}}\energy{U}_\gamma'$. To transform the incident photon energy density, write

$$
\energy{U}_\gamma'=\int\energy{E}'\,\mechanical{n}(\energy{E}')\,d\energy{E}',
$$

where $\energy{E}'$ is the incident photon energy in the electron rest frame and $\mechanical{n}(\energy{E}')\,d\energy{E}'$ is the photon number density in the energy interval $[\energy{E}',\energy{E}'+d\energy{E}']$.

##### Photon number and phase-space volume

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

##### Net inverse Compton power

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

##### Mean photon energy boost

For $\mechanical{v}\simeq c$ and Thomson scattering in the electron rest frame, $\energy{L}_{\mathrm{IC}}\simeq(4/3)\mechanical{\sigma}_{\mathrm{T}}c\gamma^2\energy{U}_\gamma$. The unboosted scattered power is the mean incident photon energy times the scattering rate. The inverse Compton power uses the mean gain per photon instead.

$$
\begin{aligned}
\mechanical{\sigma}_{\mathrm{T}}c\energy{U}_\gamma
&=\langle\energy{E}_\gamma^i\rangle\frac{dN_\gamma}{dt},\\
\energy{L}_{\mathrm{IC}}
&=\langle\energy{E}_\gamma^f-\energy{E}_\gamma^i\rangle\frac{dN_\gamma}{dt}.
\end{aligned}
$$

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
| $\mechanical{n}$ | $\unit{cm^{-3}}$ | Number density | Number of absorbers per unit volume. |
| $\mechanical{\sigma}_{\mathrm{T}}$ | $\unit{cm^2}$ | Thomson cross section | Ratio of total scattered power to incident energy flux. |
| $\energy{S}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Incident energy flux | Electromagnetic energy incident per unit time and area. |
| $\energy{U}$ | $\unit{erg\cdot cm^{-3}}$ | Radiation energy density | Electromagnetic energy per unit volume in Gaussian CGS. |
| $y$ | $1$ | Compton parameter | Mean fractional energy change per scattering times the mean scattering count, using the convention in this section. |
| $b$ | $\unit{cm\,s^{-1}}$ | Doppler parameter | Thermal speed scale for the line profile. |
