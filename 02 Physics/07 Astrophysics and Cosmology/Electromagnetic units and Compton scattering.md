---
title: "Electromagnetic units and Compton scattering"
---

> [!TLDR]
> Compare SI and Gaussian electromagnetic conventions and use relativistic kinematics to calculate Compton energy shifts and cross sections.

## Worked lecture material

The incident field factor $(\electric{E}_x)_0^2\cos^2(\signal{\omega}t)$ cancels in the ratio of scattered power to incident flux.

$$
\mechanical{\sigma}_{\mathrm{T}}
=\frac{\energy{L}}{\energy{S}}
=\frac{8\pi}{3}\frac{\electric{e}^4}{\mechanical{m}_e^2c^4}
=\frac{8\pi}{3}\mechanical{r}_0^2
\simeq\quantity{0.665\times10^{-24}}{cm^2}
$$

Here $\mechanical{r}_0=\electric{e}^2/(\mechanical{m}_e c^2)\simeq\quantity{2.82\times10^{-13}}{cm}$ is the classical electron radius. The cross section is the effective area a free electron presents to the incident wave in the nonrelativistic limit. The scattered wave keeps the same frequency, $\hbar\signal{\omega}_f=\hbar\signal{\omega}_i$, so Thomson scattering is elastic. The total cross section also applies to unpolarized light. The notes assign that result as a homework problem.

##### CGS and SI electromagnetic units

Start from Coulomb's law for the signed radial force,

$$
\mechanical{F}_{21}=\frac{k\electric{q}_1\electric{q}_2}{\mechanical{r}_{21}^2}.
$$

The scalars $\electric{q}_1$ and $\electric{q}_2$ give the magnitude and sign of the charges.

Here $\mechanical{r}_{21}$ is the distance between the charges and $\mechanical{F}_{21}$ is the force on $\electric{q}_2$ due to $\electric{q}_1$.

##### MKS (SI)

Force is in newtons, distance is in meters, and charge is in coulombs. The elementary charge is $\quantity{1.602\times10^{-19}}{C}$.

$$
\mechanical{F}_{21}
=\frac{1}{4\pi\electric{\epsilon}_0}
\frac{\electric{q}_1\electric{q}_2}{\mechanical{r}_{21}^2},
\qquad
k=\frac{1}{4\pi\electric{\epsilon}_0}\simeq\quantity{8.988\times10^9}{N\cdot m^2\cdot C^{-2}}.
$$

The permittivity of free space is $\electric{\epsilon}_0\simeq\quantity{8.854\times10^{-12}}{F\cdot m^{-1}}$. The notes mention the force between parallel currents, proportional to $\circuit{I}_1\circuit{I}_2/\mechanical{d}$ for a fixed wire length, as a historical measurement method.

##### CGS (electrostatic units)

Force is in dynes ($\unit{g\cdot cm\cdot s^{-2}}$) and distance is in centimeters. Set $k=1$ and measure charge in electrostatic units (esu). The elementary charge is approximately $\quantity{4.8\times10^{-10}}{esu}$, and $\quantity{1}{C}\simeq\quantity{3\times10^9}{esu}$.

In Gaussian CGS, Coulomb's law becomes $\mechanical{F}_{21}=\electric{q}_1\electric{q}_2/\mechanical{r}_{21}^2$.

##### Maxwell's equations in SI and Gaussian CGS

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

##### Lorentz force and Poynting vector

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

##### Electromagnetic energy density and wave equation

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

##### Compton scattering

Use the same incident-photon and free-electron setup, now allowing for recoil. The Thomson conditions $\mechanical{v}\ll c$, $\mechanical{p}_e/\mechanical{m}_e\ll c$, and $h\signal{\nu}\ll\mechanical{m}_ec^2$ are crossed out in the source.

The recoil question is whether $\mechanical{p}_e^2/(2\mechanical{m}_e)\ll h\signal{\nu}$ still holds, using the nonrelativistic expression as an estimate for the electron kinetic energy. Take $\mechanical{p}_e\sim\mechanical{p}_\gamma=h\signal{\nu}/c$ as an order-of-magnitude estimate.

Using the momentum estimate, the negligible-recoil condition would require

$$
\frac{1}{2}h\signal{\nu}
\left(\frac{h\signal{\nu}}{\mechanical{m}_e c^2}\right)\ll h\signal{\nu}
\quad\Longleftrightarrow\quad
\frac{1}{2}h\signal{\nu}\ll\mechanical{m}_e c^2.
$$

When the incident energy is comparable to the electron rest energy, the electron can recoil significantly and the outgoing photon can carry less energy. Calculating the cross section requires quantum electrodynamics. The photon energy loss follows from conservation of energy and momentum.

##### Four-vectors and Lorentz transformations

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

The invariant is $P\cdot P=-\mechanical{m}^2c^2$, or $-\mechanical{m}^2$ with $c=1$. The energy–momentum form of $P$ and this invariant apply to massive and massless particles.

##### Photon energy after scattering from a free electron

Initially, a photon travels along $\hat{k}_i$ with energy $\energy{E}_\gamma^i=hc/\signal{\lambda}_i$. The electron is at rest. After the interaction, the photon travels along $\hat{k}_f$ with energy $\energy{E}_\gamma^f=hc/\signal{\lambda}_f$, and the electron recoils.

![[Kyle Kabasares - Radiative Transfer - Compton scattering before and after.png|**Fig. 26** An incident photon reaches a stationary free electron. The outgoing photon makes an angle $\Theta$ with the incident direction, and the electron recoils.]]

To solve for the outgoing photon energy, use four-vectors with $c=1$. The initial photon four-momentum is

$$
P_\gamma^i=(\energy{E}_\gamma^i,\vec{\mechanical{p}}_\gamma^i),
\qquad
\vec{\mechanical{p}}_\gamma^i=\energy{E}_\gamma^i\hat{k}_i.
$$

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

##### Total cross section for Compton scattering

The Klein–Nishina formula gives the total cross section as $3\mechanical{\sigma}_{\mathrm{T}}/4$ times a function of $x=\energy{E}_\gamma/(\mechanical{m}_e c^2)$ (Rybicki and Lightman, equation 7.5). In the low-energy limit $x\ll1$, the expansion is

$$
\mechanical{\sigma}
=\mechanical{\sigma}_{\mathrm{T}}\left(1-2x+\frac{26}{5}x^2+\cdots\right)
$$

(Rybicki and Lightman, equation 7.6a).

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
| $\mechanical{\sigma}_{\mathrm{T}}$ | $\unit{cm^2}$ | Thomson cross section | Ratio of total scattered power to incident energy flux. |
| $\energy{S}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Incident energy flux | Electromagnetic energy incident per unit time and area. |
| $\mechanical{r}_0$ | $\unit{cm}$ | Classical electron radius | Length scale that sets the Thomson cross section. |
| $\electric{\epsilon}_0$ | $\unit{F\cdot m^{-1}}$ | Vacuum permittivity | Constant in the SI form of Coulomb's law. |
| $\magnetic{\mu}_0$ | $\unit{N\cdot A^{-2}}$ | Vacuum permeability | Magnetic constant in SI. |
| $\signal{\lambda}_{\mathrm{C}}$ | $\unit{cm}$ | Electron Compton wavelength | Wavelength associated with a photon of energy equal to the electron rest energy. |
| $\energy{U}$ | $\unit{erg\cdot cm^{-3}}$ | Radiation energy density | Electromagnetic energy per unit volume in Gaussian CGS. |
| $y$ | $1$ | Compton parameter | Mean fractional energy change per scattering times the mean scattering count, using the convention in this section. |
