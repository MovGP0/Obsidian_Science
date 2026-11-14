---
title: "Radiation from antennas and electromagnetic multipoles"
---

> [!TLDR]
> Compute far fields and radiated power from antenna currents and electric dipole, magnetic dipole, or electric quadrupole moments.

## Worked lecture material

##### Radiation

Chapter 9 begins with the retarded solution for time-dependent charge and current densities. With $s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert$,

$$
\begin{aligned}
\electric{\phi}(\mechanical{\mathbf x},t)
&=\frac{1}{4\pi\electric{\varepsilon}_0}\int
\frac{\electric{\rho}(\mechanical{\mathbf x}',t')\delta(t-t'-s/c)}{s}\,d^3\mechanical{x}'\,dt',\\
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
&=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{\circuit{\mathbf J}(\mechanical{\mathbf x}',t')\delta(t-t'-s/c)}{s}\,d^3\mechanical{x}'\,dt'.
\end{aligned}
$$

Far from a localized source, the amplitude factor approaches $1/\mechanical{r}$, where $\mechanical{r}=\lvert\mechanical{\mathbf x}\rvert$. The lecture makes a first approximation with $s\simeq\mechanical{r}$ also in the delay, giving $\electric{\phi}\simeq(4\pi\electric{\varepsilon}_0\mechanical{r})^{-1}\int\electric{\rho}(\mechanical{\mathbf x}',t-\mechanical{r}/c)\,d^3\mechanical{x}'$. Using a common delay also requires the travel-time variation across the source to be small on the time scale of the source variation.

The outgoing harmonic spherical-wave factor is $e^{ik(\mechanical{r}-ct)}/\mechanical{r}$, compared with $e^{i(\mathbf k\cdot\mechanical{\mathbf x}-\omega t)}$ for a plane wave. Away from the sources, the vector potential satisfies $\Box\magnetic{\mathbf A}=0$. For a spherically symmetric component, or at leading radial order far away, use the radial part of the Laplacian.

$$
\nabla^2\magnetic{\mathbf A}
=\frac{1}{\mechanical{r}}\frac{\partial^2}{\partial\mechanical{r}^2}(\mechanical{r}\magnetic{\mathbf A})
+\text{angular terms},
\qquad
\frac{1}{c^2}\frac{\partial^2}{\partial t^2}(\mechanical{r}\magnetic{\mathbf A})
-\frac{\partial^2}{\partial\mechanical{r}^2}(\mechanical{r}\magnetic{\mathbf A})=0
$$

in the radial approximation. This gives the outgoing radial factor $e^{ik\mechanical{r}}/\mechanical{r}$ at fixed frequency. Time-dependent sources can radiate energy carried outward by electromagnetic waves.

##### Radiated power

Power $\energy{P}$ is the rate at which radiation carries energy away. Its angular distribution is $d\energy{P}/d\Omega$. One can also resolve the power by angular frequency, $d^2\energy{P}/(d\Omega\,d\omega)$, which the page labels $\energy{I}$ and calls “fluence.”

![[Kyle Kabasares - Electrodynamics - Poynting flux through a sphere.png|**Fig. 120** Integrate the outward Poynting flux over a sphere surrounding the source.]]

$$
\energy{P}=\int\mechanical{r}^2(\electric{\mathbf E}\times\magnetic{\mathbf H})\cdot\hat{\mathbf r}\,d\Omega,
\qquad
\frac{d\energy{P}}{d\Omega}=\mechanical{r}^2(\electric{\mathbf E}\times\magnetic{\mathbf H})\cdot\hat{\mathbf r}.
$$

Compute the retarded potentials, then use $\electric{\mathbf E}=-\nabla\electric{\phi}-\partial_t\magnetic{\mathbf A}$ and $\magnetic{\mathbf H}=(\nabla\times\magnetic{\mathbf A})/\magnetic{\mu}_0$ in vacuum. Fields falling faster than $1/\mechanical{r}$ make vanishing contributions to the flux at infinity. Keep the leading $1/\mechanical{r}$ terms. In the vector-potential integral, simplify the denominator while retaining the source-dependent delay.

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)\simeq
\frac{\magnetic{\mu}_0}{4\pi\mechanical{r}}\int
\circuit{\mathbf J}(\mechanical{\mathbf x}',t')\delta\!\left(t-t'-\frac{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}{c}\right)
\,d^3\mechanical{x}'\,dt'.
$$

Apply the same denominator approximation to the scalar potential.

The notes refer to Jackson §§9.5–9.6 for examples of the limits of the approximations in near-field calculations. Resolve the real current density into positive-frequency components by writing it as the real part of $\int_0^\infty\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')e^{-i\omega t'}\,d\omega$. Consider one harmonic component. The time delta in the retarded potential gives

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)\simeq
\frac{\magnetic{\mu}_0}{4\pi\mechanical{r}}
\int\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')\,
e^{-i\omega(t-\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert/c)}
\,d^3\mechanical{x}'.
$$

Expand the path length for a source small compared with the observation distance.

$$
\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert
=\mechanical{r}-\hat{\mathbf r}\cdot\mechanical{\mathbf x}'
+O\!\left(\lvert\mechanical{\mathbf x}'\rvert^2/\mechanical{r}\right).
$$

Then the leading far-field potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)\simeq
\frac{\magnetic{\mu}_0}{4\pi}\frac{e^{-i\omega(t-\mechanical{r}/c)}}{\mechanical{r}}
\int\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')
e^{-ik\hat{\mathbf r}\cdot\mechanical{\mathbf x}'}\,d^3\mechanical{x}',
\qquad k=\frac{\omega}{c}.
$$

The handwritten phase inside the integral omits $1/c$. It follows from dividing the expanded path length by $c$. The page references Jackson, Eq. 9.8.

![[Kyle Kabasares - Electrodynamics - Antenna path difference in the far field.png|**Fig. 121** Contributions from two points on the antenna have different travel distances.]]

Interference can be important when the difference in travel times is comparable to the oscillation period, or when $\omega$ times that delay is appreciable.

##### Finite straight antenna

A wire from $\mechanical{x}=0$ to $\mechanical{x}=\mechanical{L}$ carries the harmonic current $\circuit{I}_0 e^{-i\omega t}$ in the positive $\mechanical{x}$ direction.

![[Kyle Kabasares - Electrodynamics - Finite straight antenna with harmonic current.png|**Fig. 122** Uniform harmonic current along a finite straight segment.]]

Use step functions to select the segment and delta functions to confine the current to the axis.

$$
\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')
=\circuit{I}_0\delta(\mechanical{y}')\delta(\mechanical{z}')
\bigl[\Theta(\mechanical{x}')-\Theta(\mechanical{x}'-\mechanical{L})\bigr]\hat{\mathbf x}.
$$

The transverse integrations give one, and the longitudinal integration is over $0<\mechanical{x}'<\mechanical{L}$. Let $u=\hat{\mathbf r}\cdot\hat{\mathbf x}$ and use the phase convention from [[#Radiated power|the section on Radiated power]].

$$
\begin{aligned}
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
&\simeq\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}
\frac{e^{-i\omega(t-\mechanical{r}/c)}}{\mechanical{r}}\hat{\mathbf x}
\int_0^{\mechanical{L}}e^{-iku\mechanical{x}'}\,d\mechanical{x}',\\
\int_0^{\mechanical{L}}e^{-iku\mechanical{x}'}\,d\mechanical{x}'
&=\frac{e^{-iku\mechanical{L}}-1}{-iku}.
\end{aligned}
$$

The integral equals $\mechanical{L}$ when $u=0$.

##### Long-wavelength approximation

If the wavelength is much larger than the source size, then $\lvert k\hat{\mathbf r}\cdot\mechanical{\mathbf x}'\rvert\ll1$. Expand the spatial phase in the far-field integral.

$$
\int \circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')
\left[1-ik\hat{\mathbf r}\cdot\mechanical{\mathbf x}'
+\frac12(-ik\hat{\mathbf r}\cdot\mechanical{\mathbf x}')^2+\cdots\right]d^3\mechanical{x}'.
$$

The first integral to compute is $\int \circuit{\mathbf J}_\omega\,d^3\mechanical{x}'$. The lowest displayed term can vanish, depending on the source.

##### Electric dipole radiation

For a localized steady current, the integral of the current density vanishes. For a time-dependent source it can be nonzero. Integrating the charge continuity equation against position gives $\int\circuit{\mathbf J}\,d^3\mechanical{x}'=d\electric{\mathbf p}/dt$ when the boundary term vanishes.

![[Kyle Kabasares - Electrodynamics - Current between opposite electric charges.png|**Fig. 123** Current transfers charge between the two ends of a dipole.]]

For the harmonic convention $e^{-i\omega t}$, the integral of the current amplitude is $-i\omega\electric{\mathbf p}_\omega$, where $\electric{\mathbf p}_\omega$ is the dipole amplitude. The leading far-field vector potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
\simeq\frac{\magnetic{\mu}_0}{4\pi}
\frac{e^{i(k\mechanical{r}-\omega t)}}{\mechanical{r}}
(-i\omega\electric{\mathbf p}_\omega).
$$

Compute $\magnetic{\mathbf H}=(\nabla\times\magnetic{\mathbf A})/\magnetic{\mu}_0$ (Jackson, Eq. 9.19). In the radiation zone, $\electric{\mathbf E}=\circuit{Z}_0\magnetic{\mathbf H}\times\hat{\mathbf r}$, where $\circuit{Z}_0=\sqrt{\magnetic{\mu}_0/\electric{\varepsilon}_0}$. For a dipole oscillating along a fixed axis, the average power per solid angle varies as $k^4\lvert\electric{\mathbf p}_\omega\rvert^2\sin^2\theta$, where $\theta$ is measured from the dipole axis (Eq. 9.23). The total-power line labeled Eq. 9.24 is left blank.

![[Kyle Kabasares - Electrodynamics - Harmonic current and antenna end charges.png|**Fig. 124** The end charges build up as the harmonic current flows along the segment.]]

For charges $\pm\electric{Q}(t)$ separated by $\mechanical{L}$, $d\electric{Q}/dt=\circuit{I}_0e^{-i\omega t}$. Thus the oscillating charge is $\electric{Q}(t)=\circuit{I}_0e^{-i\omega t}/(-i\omega)$ and the dipole amplitude is $\electric{\mathbf p}_\omega=(\circuit{I}_0\mechanical{L}/(-i\omega))\hat{\mathbf x}$ for a segment along $\hat{\mathbf x}$. The example gives

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{c^2\circuit{Z}_0}{32\pi^2}k^4
\left\lvert\frac{\circuit{I}_0\mechanical{L}}{-i\omega}\right\rvert^2\sin^2\theta.
$$

The current in the tapered antenna example (Jackson, Eq. 9.25) is

$$
\circuit{I}(\mechanical{z},t)
=\circuit{I}_0\left(1-\frac{2\lvert\mechanical{z}\rvert}{\mechanical{d}}\right)e^{-i\omega t},
\qquad \lvert\mechanical{z}\rvert\leq\mechanical{d}/2.
$$

![[Kyle Kabasares - Electrodynamics - Tapered antenna current endpoints.png|**Fig. 125** The current is largest at the midpoint and vanishes at both ends.]]

##### Radiation review

Time-dependent sources can produce outgoing electromagnetic waves that carry energy away. At large $\mechanical{r}$ the vector potential is given by the current transform from [[#Radiated power|the section on Radiated power]] (Jackson, Eq. 9.8). When $k\lvert\hat{\mathbf r}\cdot\mechanical{\mathbf x}'\rvert$ is small, expand the spatial phase. The leading term is the electric dipole term. Write the dipole moment as $\electric{\mathbf p}(t)=\electric{\mathbf p}_\omega e^{-i\omega t}$ with $\electric{\mathbf p}_\omega=\int\mechanical{\mathbf x}'\electric{\rho}_\omega(\mechanical{\mathbf x}')\,d^3\mechanical{x}'$. Then

$$
\magnetic{\mathbf A}\simeq
\frac{\magnetic{\mu}_0}{4\pi}
\frac{e^{i(k\mechanical{r}-\omega t)}}{\mechanical{r}}(-i\omega\electric{\mathbf p}_\omega).
$$

The power per solid angle is proportional to $k^4\lvert\electric{\mathbf p}_\omega\rvert^2\sin^2\theta$, and the total power is its integral over solid angle (Eq. 9.24). The lecture returns to the tapered antenna on Jackson p. 412.

![[Kyle Kabasares - Electrodynamics - Antenna axis in the radiation example.png|**Fig. 126** The wire extends from $-\mechanical{d}/2$ to $+\mechanical{d}/2$ along its axis.]]

##### Charge and dipole moment of the tapered antenna

Use the continuity equation to obtain the charge density from the varying current. Define the support factor $F(\mechanical{z})=\Theta(\mechanical{z}+\mechanical{d}/2)-\Theta(\mechanical{z}-\mechanical{d}/2)$.

$$
\circuit{\mathbf J}=
\circuit{I}_0\left(1-\frac{2\lvert\mechanical{z}\rvert}{\mechanical{d}}\right)e^{-i\omega t}
\delta(\mechanical{x})\delta(\mechanical{y})F(\mechanical{z})\hat{\mathbf z}.
$$

The derivative of the support factor gives no end terms because the current amplitude vanishes at both ends. Differentiating the taper gives $+2/\mechanical{d}$ below the midpoint and $-2/\mechanical{d}$ above it. Since $\partial_t\electric{\rho}=-i\omega\electric{\rho}$, continuity gives

$$
\electric{\rho}=\frac{\nabla\cdot\circuit{\mathbf J}}{i\omega}
=-\frac{2\circuit{I}_0e^{-i\omega t}}{i\omega\mechanical{d}}\,
\operatorname{sgn}(\mechanical{z})\,\delta(\mechanical{x})\delta(\mechanical{y})F(\mechanical{z}).
$$

The axial dipole moment follows by integrating $\mechanical{z}\electric{\rho}$ over the two halves.

$$
\begin{aligned}
\electric{p}_z(t)
&=\frac{2\circuit{I}_0e^{-i\omega t}}{i\omega\mechanical{d}}
\left[\int_{-\mechanical{d}/2}^{0}\mechanical{z}\,d\mechanical{z}
-\int_0^{\mechanical{d}/2}\mechanical{z}\,d\mechanical{z}\right]\\
&=\frac{\mechanical{d}}{2}\frac{\circuit{I}_0e^{-i\omega t}}{-i\omega}.
\end{aligned}
$$

The handwritten dipole integral reverses the signs of the two charge densities calculated just above it. The expression here follows those densities and satisfies $d\electric{p}_z/dt=\int\circuit{J}_z\,d^3\mechanical{x}$. The sign drops out of the power.

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{c^2\circuit{Z}_0}{32\pi^2}k^4
\left(\frac{\mechanical{d}}{2}\right)^2\frac{\lvert\circuit{I}_0\rvert^2}{\omega^2}\sin^2\theta,
\qquad \omega=ck.
$$

The tapered antenna dipole moment can also be found from the integrated current, $\int\circuit{\mathbf J}\,d^3\mechanical{x}'=-i\omega\electric{\mathbf p}$ (Jackson, Eq. 9.14). The transverse delta functions integrate to one. The longitudinal integrals are

$$
\int\circuit{J}_z\,d^3\mechanical{x}'
=\circuit{I}_0e^{-i\omega t}\left[
\int_0^{\mechanical{d}/2}\left(1-\frac{2\mechanical{z}'}{\mechanical{d}}\right)d\mechanical{z}'
+\int_{-\mechanical{d}/2}^0\left(1+\frac{2\mechanical{z}'}{\mechanical{d}}\right)d\mechanical{z}'\right]
=\frac{\mechanical{d}}2\circuit{I}_0e^{-i\omega t}.
$$

The second integrand uses the negative-coordinate branch of $\lvert\mechanical{z}'\rvert$. The result gives the same dipole moment as the charge integral.

##### Magnetic dipole radiation from a current loop

Consider a rectangular loop with a uniform harmonic current $\circuit{I}=\circuit{I}_0e^{-i\omega t}$.

![[Kyle Kabasares - Electrodynamics - Rectangular loop with harmonic current.png|**Fig. 127** The same current flows around each side of the closed loop.]]

The incoming and outgoing current balance at every point, so there is no oscillating charge density and no electric dipole radiation. A time-varying magnetic dipole still radiates. Its angular power follows the electric-dipole formula with $\lvert\electric{\mathbf p}_\omega\rvert$ replaced by $\lvert\magnetic{\mathbf m}_\omega\rvert/c$.

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{\circuit{Z}_0}{32\pi^2}k^4\lvert\magnetic{\mathbf m}_\omega\rvert^2\sin^2\theta.
$$

For a planar loop of area $\mechanical{a}$, the magnitude of the moment is current times area, and $\magnetic{\mathbf m}(t)=\circuit{I}_0\mechanical{a}e^{-i\omega t}\hat{\mathbf n}$. Some sources have both electric and magnetic dipole terms vanish.

For opposite tapered currents on the two sides of a rectangle, the electric dipoles cancel and the magnetic dipole remains.

![[Kyle Kabasares - Electrodynamics - Opposite tapered currents around a rectangle.png|**Fig. 128** Oppositely directed tapered currents on the two parallel sides.]]

Two opposing collinear segments can cancel both moments. Their electric dipoles are equal and opposite, and the collinear geometry encloses zero area.

![[Kyle Kabasares - Electrodynamics - Two opposing collinear current segments.png|**Fig. 129** Two opposite currents on a common axis.]]

##### Electric quadrupole radiation

When both dipoles vanish, the electric quadrupole can contribute. The example combines charges $-\electric{Q}$ at $\mechanical{z}=\pm\mechanical{d}/2$ with $2\electric{Q}$ at the origin. The oscillating charge gives a time-dependent quadrupole moment.

![[Kyle Kabasares - Electrodynamics - Charge layout of an electric quadrupole.png|**Fig. 130** Two like end charges and two opposite charges combined at the center.]]

This section uses the traceless convention with a factor of $1/3$ in the trace subtraction.

$$
\electric{Q}_{ab}=\int \electric{\rho}(\mechanical{\mathbf x}')
\left[\mechanical{x}_a'\mechanical{x}_b'-\frac13(\mechanical{r}')^2\delta_{ab}\right]d^3\mechanical{x}'.
$$

Replace the integral by a sum over the point charges. The $\mechanical{x}$ coordinates are zero, and the center charge contributes zero. The end charges give

$$
\electric{Q}_{xx}=2(-\electric{Q})\left[-\frac13\left(\frac{\mechanical{d}}2\right)^2\right]
=\frac{2\electric{Q}}3\left(\frac{\mechanical{d}}2\right)^2.
$$

By axial symmetry, $\electric{Q}_{yy}=\electric{Q}_{xx}$. Tracelessness gives $\electric{Q}_{zz}=-2\electric{Q}_{xx}$. The page cites Jackson Eq. 9.45 for the angular power. With $\electric{\mathbf Q}_{\mathrm J}=3\electric{\mathbf Q}$ to convert the trace-subtracted tensor on page 95 to the convention with a factor of three, write

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{c^2\circuit{Z}_0 k^6}{1152\pi^2}
\left\lvert
\bigl[\hat{\mathbf r}\times(\electric{\mathbf Q}_{\mathrm J}\hat{\mathbf r})\bigr]\times\hat{\mathbf r}
\right\rvert^2.
$$

Here the tensor is the harmonic amplitude. The handwritten $k^2$ gives the wrong dimensions for a charge quadrupole moment. The $k^6$ combines two powers from the first spatial-phase term in the potential, two from the harmonic source relation, and two from taking the curl and forming the power.

##### Charges from the opposing currents

![[Kyle Kabasares - Electrodynamics - Opposed currents producing quadrupole charges.png|**Fig. 131** The current on each segment points away from the center in the chosen phase convention.]]

The current density can be written as

$$
\circuit{\mathbf J}
=\circuit{I}_0e^{-i\omega t}\delta(\mechanical{x})\delta(\mechanical{y})\hat{\mathbf z}
\bigl[2\Theta(\mechanical{z})-\Theta(\mechanical{z}-\mechanical{d}/2)-\Theta(\mechanical{z}+\mechanical{d}/2)\bigr].
$$

Differentiate the steps and use $\electric{\rho}=(\nabla\cdot\circuit{\mathbf J})/(i\omega)$.

$$
\electric{\rho}
=\frac{\circuit{I}_0e^{-i\omega t}}{i\omega}\delta(\mechanical{x})\delta(\mechanical{y})
\bigl[2\delta(\mechanical{z})-\delta(\mechanical{z}-\mechanical{d}/2)-\delta(\mechanical{z}+\mechanical{d}/2)\bigr].
$$

##### Rotating electric dipole

Find the leading radiation field or radiation pattern of a dipole rotating in the $\mechanical{x}\mechanical{y}$ plane with angular frequency $\omega$.

![[Kyle Kabasares - Electrodynamics - Electric dipole rotating in the xy plane.png|**Fig. 132** The dipole rotates from the positive $\mechanical{y}$ direction toward the positive $\mechanical{x}$ direction.]]

$$
\begin{aligned}
\electric{\mathbf p}(t)
&=\electric{p}_0\cos(\omega t)\hat{\mathbf y}+\electric{p}_0\sin(\omega t)\hat{\mathbf x}
=\operatorname{Re}[\electric{\mathbf p}_\omega e^{-i\omega t}],\\
\electric{\mathbf p}_\omega&=i\electric{p}_0\hat{\mathbf x}+\electric{p}_0\hat{\mathbf y}.
\end{aligned}
$$

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{L}$ | $\unit{m}$ | Gaussian cylinder length | Axial extent of the cylinder chosen for the flux integral. |
| $\mechanical{d}$ | $\unit{m}$ | Plate separation | Distance between the two parallel planes. |
| $\circuit{I}$ | $\unit{A}$ | Electric current | Charge flowing per unit time through a cross section. |
| $\omega$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of change of phase in time in magnitude. |
| $\energy{P}$ | $\unit{W}$ | Radiated power | Rate of outward energy flow through a surface surrounding the source. |
| $\circuit{Z}_0$ | $\unit{\Omega}$ | Vacuum wave impedance | Ratio of transverse electric to magnetic field-strength amplitudes in an outgoing wave. |
