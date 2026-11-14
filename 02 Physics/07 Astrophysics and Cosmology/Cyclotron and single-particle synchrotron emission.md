---
title: "Cyclotron and single-particle synchrotron emission"
---

> [!TLDR]
> Relate charged-particle orbits and relativistic beaming to synchrotron power and the characteristic single-electron spectrum.

## Worked lecture material

Use the optically thick spectrum to determine $\thermal{T}$, typically of order $\quantity{10^4}{K}$ for planetary nebulae. The optically thin spectrum then gives the density when $\thermal{T}$ and the source length $\mechanical{L}$ are known. The density and source size yield the total gas mass.

Problem set 4 was due May 23. Monday makeup lectures were suspended for the time being.

##### Synchrotron radiation

See Rybicki and Lightman, chapter 6. Radio synchrotron sources include diffuse Galactic emission, supernova remnants, radio galaxies, and radio halos and relics in clusters. The Crab Nebula and its pulsar are examples associated with optical continuum emission.

Consider a particle of velocity $\vec{\mechanical{v}}$ moving in a uniform magnetic field $\vec{\magnetic{B}}$.

![[Kyle Kabasares - Radiative Transfer - Electron in a uniform magnetic field.png|**Fig. 57** An electron moves at an angle to the uniform magnetic field.]]

For nonrelativistic cyclotron motion, $|\vec{\mechanical{v}}|\ll c$. The magnetic force on an electron in Gaussian CGS is

$$
\vec{\mechanical{F}}=-\electric{e}\frac{\vec{\mechanical{v}}}{c}\times\vec{\magnetic{B}}.
$$

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

##### Properties of nonrelativistic cyclotron radiation

The charged particle follows a helix, rotating about the field at angular frequency $\signal{\omega}_B$ while moving along it at constant velocity $\mechanical{v}_\parallel$. The circular motion accelerates the particle, which radiates at the cyclotron frequency in this limit.

The polarization depends on the viewing angle.

- For a magnetic field perpendicular to the line of sight, the projected acceleration oscillates along a line on the sky. The observed radiation is linearly polarized, with its electric field oscillating at $\signal{\omega}_B$.
- For a field parallel to the line of sight, the orbital acceleration rotates in the plane of the sky. The radiation is circularly polarized.
- Intermediate viewing angles give elliptical polarization.

Relativistic motion changes these results. As a historical example, the notes show a cyclotron feature near $\quantity{34}{keV}$ in Hercules X-1 and quote a magnetic field of order $\quantity{3\times10^8}{T}$, or $\quantity{3\times10^{12}}{G}$.

![[Kyle Kabasares - Radiative Transfer - Hercules X-1 cyclotron feature.png|**Fig. 58** A sketch of the Hercules X-1 spectrum shows a dip near 34 keV.]]

##### Relativistic motion in a magnetic field

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

With only a magnetic field acting, $\vec{\mechanical{a}}\perp\vec{\mechanical{v}}$, so $d\gamma/dt=0$. The Lorentz force reduces to

$$
\gamma\mechanical{m}_e\frac{d\vec{\mechanical{v}}}{dt}
=-\frac{\electric{e}}{c}(\vec{\mechanical{v}}\times\vec{\magnetic{B}}).
$$

The relativistic angular gyration frequency is therefore $\signal{\omega}_B^{\mathrm{rel}}=\signal{\omega}_B/\gamma$, with $\signal{\omega}_B=\electric{e}\magnetic{B}/(\mechanical{m}_e c)$.

##### Total radiated power of a relativistic electron

Apply Larmor's formula in the instantaneous rest frame and express the acceleration through the invariant square of the four-acceleration (Rybicki and Lightman, section 4.8).

$$
\energy{L}=\frac{2\electric{e}^2}{3c^3}(A\cdot A),
\qquad
A=\left(\gamma c\frac{d\gamma}{dt},\ \gamma\frac{d(\gamma\vec{\mechanical{v}})}{dt}\right).
$$

The handwritten power formula on this page appears to use $c^2$. The Larmor formula on [[Radiative absorption, recombination, and Thomson scattering#Radiated power and Thomson cross section|the section on Radiated power and Thomson cross section]] uses $c^3$. In the instantaneous rest frame $\vec{\mechanical{v}}'=0$, $\gamma=1$, and $d\gamma/dt'=0$, so $A'=(0,\vec{\mechanical{a}}')$.

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

##### Synchrotron power averaged over pitch angle

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

##### Synchrotron and inverse Compton power

For the same electron in the isotropic averages and the Thomson regime,

$$
\frac{\energy{L}_{\mathrm{sync}}}{\energy{L}_{\mathrm{IC}}}
=\frac{\energy{U}_B}{\energy{U}_{\mathrm{photon}}}.
$$

Both processes involve radiation from accelerated charges, so Larmor's formula gives $\energy{L}\propto\mechanical{a}^2$. For inverse Compton scattering the incident radiation gives $\mechanical{a}_{\mathrm{IC}}^2\propto|\vec{\electric{E}}|^2\propto\energy{U}_{\mathrm{photon}}$. For synchrotron radiation, $\mechanical{a}_{\mathrm{sync}}^2\propto|\vec{\magnetic{B}}|^2\propto\energy{U}_B$.

The Monday makeup lecture was canceled. The lecture reviews $\energy{L}_{\mathrm{sync}}=(4/3)\gamma^2(\mechanical{v}/c)^2\mechanical{\sigma}_{\mathrm{T}}c\energy{U}_B$ for a single electron of speed $\mechanical{v}$ in a constant field, averaged over an isotropic distribution of velocity directions.

##### Relativistic beaming

The qualitative discussion of the synchrotron spectrum begins with relativistic beaming (Rybicki and Lightman, section 6.2 and p. 110). It uses the previously derived Lorentz transformation for the angle of a velocity vector.

![[Kyle Kabasares - Radiative Transfer - Velocity angle and boost axis.png|**Fig. 60** The laboratory velocity makes an angle $\theta$ with the boost direction along $x$.]]

For an object with lab-frame speed $\mechanical{u}$, the velocity transformation gives $\tan\theta'=\mechanical{u}\sin\theta/[\gamma(\mechanical{u}\cos\theta-\mechanical{v})]$. The handwritten numerator on this page has a prime on the angle. The velocity transformation on [[Inverse Compton scattering and photon energy exchange#Velocity transformations|the section on Velocity transformations]] uses the unprimed angle.

For light, $\mechanical{u}=c$. Transforming back to the laboratory frame yields the **aberration of light** relations

$$
\tan\theta=\frac{\sin\theta'}{\gamma(\cos\theta'+\mechanical{v}/c)},
\qquad
\sin\theta=\frac{\sin\theta'}{\gamma(1+(\mechanical{v}/c)\cos\theta')}.
$$

In the electric dipole approximation, the angular power pattern is $d\energy{L}/d\Omega\propto\mechanical{a}^2\sin^2\phi$, where $\phi$ is measured from the acceleration direction (Rybicki and Lightman, equation 3.23a).

![[Kyle Kabasares - Radiative Transfer - Electric dipole radiation pattern.png|**Fig. 61** Nonrelativistic dipole radiation forms a toroidal pattern symmetric about the dipole axis, with angular dependence $\sin^2\theta$.]]

For $\mechanical{v}\simeq c$ and $\gamma\gg1$, the aberration relation becomes

$$
\sin\theta\simeq\frac{\sin\theta'}{\gamma(1+\cos\theta')}.
$$

For rest-frame emission near $\theta'=\pi/2$, this gives $\theta\simeq1/\gamma\ll1$. Even radiation emitted perpendicular to the lab velocity direction in the electron rest frame appears at a small angle to that velocity in the lab. Almost all the radiated energy is concentrated in a forward cone of characteristic half-angle $1/\gamma$.

![[Kyle Kabasares - Radiative Transfer - Relativistic forward cone.png|**Fig. 62** The radiation is beamed along the electron's motion within a cone of characteristic half-angle $\theta\simeq1/\gamma$.]]

![[Kyle Kabasares - Radiative Transfer - Relativistic angular radiation pattern.png|**Fig. 63** Rybicki and Lightman's diagrams compare angular radiation patterns in two frames for acceleration perpendicular to the velocity. The strongly beamed pattern is schematic.]]

Most radiation is beamed into the forward cone with characteristic angular radius $\theta\sim1/\gamma$.

##### Synchrotron spectrum of a single electron

Consider an electron in a circular orbit in a constant magnetic field. An observer receives a pulse each time the forward emission cone sweeps across the line of sight.

![[Kyle Kabasares - Radiative Transfer - Synchrotron beam sweeping across an observer.png|**Fig. 64** The direction of the beam follows the instantaneous velocity. The observer receives emission during the short interval in which the cone points toward them.]]

The relativistic gyrofrequency determines the time between successive pulses. For this circular orbit, the separation is $\Delta t=2\pi/\signal{\omega}_B^{\mathrm{rel}}$. The discussion of its spectral consequence continues on the next page.

The pulse repetition frequency is $1/\Delta t=\signal{\omega}_B^{\mathrm{rel}}/(2\pi)$.

![[Kyle Kabasares - Radiative Transfer - Synchrotron emission cones along a trajectory.png|**Fig. 65** Emission cones at successive points of an accelerated particle's trajectory, from the Rybicki and Lightman illustration reproduced on the slide.]]

Each pulse has a finite duration. The fraction of the orbit traversed while the beam points toward the observer is of order $\theta/(2\pi)$. The narrow pulses give the spectrum power at frequencies above the repetition frequency.

![[Kyle Kabasares - Radiative Transfer - Pulse duration from the beam opening angle.png|**Fig. 66** The observer sees the electron only while its instantaneous emission cone includes the line of sight.]]

For a more precise estimate of the observed duration, account for the change in light-travel time while the electron approaches the observer.

![[Kyle Kabasares - Radiative Transfer - Light travel time across the emitting arc.png|**Fig. 67** The electron is visible between points A and B, separated by a chord of length $L$. The observer is at distance $D\gg L$.]]

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

Synchrotron emission from one electron spans harmonics of the relativistic gyration frequency up to order $\gamma^3\signal{\omega}_B^{\mathrm{rel}}$, above which it falls rapidly. For example, if the relativistic gyration frequency is of order $\quantity{10^{10}}{Hz}$ and $\gamma\sim10^3$ to $10^4$, the upper scale is of order $\quantity{10^{19}}{Hz}$ to $\quantity{10^{22}}{Hz}$. The radiation can thus cover a wide part of the electromagnetic spectrum.

The **critical angular frequency** is

$$
\signal{\omega}_c
=\frac{3}{2}\gamma^2\frac{\electric{e}\magnetic{B}}{\mechanical{m}_ec}\sin\alpha
=\frac{3}{2}\gamma^3\signal{\omega}_B^{\mathrm{rel}}\sin\alpha.
$$

The handwritten definition also relates $\signal{\omega}_c$ to the estimated pulse bandwidth. The bandwidth argument fixes the scale, and the numerical prefactor comes from the detailed spectrum. Emission falls off rapidly above $\signal{\omega}_c$, while the continuum approximation describes frequencies well above the fundamental and below the cutoff.

![[Kyle Kabasares - Radiative Transfer - Single-electron synchrotron spectrum.png|**Fig. 69** The single-electron spectrum rises as $(\omega/\omega_c)^{1/3}$ at low frequencies and has a high-frequency tail proportional to $(\omega/\omega_c)^{1/2}e^{-\omega/\omega_c}$.]]

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $\mechanical{\sigma}_{\mathrm{T}}$ | $\unit{cm^2}$ | Thomson cross section | Ratio of total scattered power to incident energy flux. |
| $\energy{U}$ | $\unit{erg\cdot cm^{-3}}$ | Radiation energy density | Electromagnetic energy per unit volume in Gaussian CGS. |
| $\thermal{T}$ | $\unit{K}$ | Brightness temperature | Temperature inferred from the intensity in the Rayleigh–Jeans limit in this section. |
| $\signal{\omega}_B$ | $\unit{rad\cdot s^{-1}}$ | Angular cyclotron frequency | Angular rate of nonrelativistic gyration in a magnetic field. |
| $\energy{U}_B$ | $\unit{erg\cdot cm^{-3}}$ | Magnetic energy density | Magnetic field energy per unit volume. |
| $\signal{\omega}_c$ | $\unit{rad\cdot s^{-1}}$ | Critical synchrotron angular frequency | Characteristic frequency scale above which the single-electron spectrum decays rapidly. |
