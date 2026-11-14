---
title: "Acoustic Doppler shift and wave optics practice"
---

> [!TLDR]
> Distinguish source and observer motion in sound and solve problems involving coherent waves and optical boundaries.

## Worked lecture material

A light source is $3\,\unit{m}$ below a water–air interface. With $n_{\mathrm{water}}=1.33$ and $n_{\mathrm{air}}=1$, the critical angle is $\arcsin(1/1.33)\simeq49^\circ$. The boundary of the region through which light escapes has radius $\mechanical{R}$ given by

$$
\tan\mechanical{\theta}_c=\frac{\mechanical{R}}{3\,\unit{m}},
\qquad
\mechanical{R}\simeq3.4\,\unit{m},
\qquad
\mechanical{D}=2\mechanical{R}\simeq6.8\,\unit{m}.
$$

![[Kyle Kabasares - Vibrations and Waves - Escape cone from an underwater source.png|**Fig. 60** The limiting ray reaches the water surface at the critical angle, defining the radius of the escape region.]]

##### Doppler effect

Relative motion between the wave source and the observer changes the detected frequency. The sketches compare a source moving slower than the wavefronts, at the wavefront speed, and faster than the wavefronts.

![[Kyle Kabasares - Vibrations and Waves - Subsonic sonic and supersonic wavefronts.png|**Fig. 61** Fronts bunch ahead of a subsonic source, meet at the source at Mach 1, and form a cone behind a supersonic source.]]

Let $\mechanical{u}$ be the source speed and $\mechanical{v}$ the wavefront speed in the medium. The source period is $\signal{\tau}=1/\signal{f}_{\mathrm{source}}$. If the first front is emitted at $S_0$, the $n$th later front is emitted at $S_n$ after $\mechanical{t}_n=n\signal{\tau}$, at a displacement $\mechanical{x}_n=\mechanical{u}n\signal{\tau}$ along the source path. For an observation point $P$, write $\mechanical{r}_0=S_0P$ and $\mechanical{r}_n=S_nP$. The first front reaches $P$ at $\mechanical{t}_p=\mechanical{r}_0/\mechanical{v}$.

![[Kyle Kabasares - Vibrations and Waves - Source positions and observer geometry.png|**Fig. 62** The source moves from S₀ to Sₙ as the distances to the fixed observation point P change.]]

When the first front reaches $P$, the front from $S_n$ has reached $Q$, with $S_nQ=\mechanical{v}(\mechanical{t}_p-\mechanical{t}_n)$ and $\mechanical{r}_n=S_nQ+QP$. Therefore

$$
\mechanical{r}_0-\mechanical{r}_n=\mechanical{v}\mechanical{t}_n-QP.
$$

For a distant observer, let $\mechanical{\theta}$ be the angle between the source motion and the ray to the observer. To first order in the source displacement, $\mechanical{r}_0-\mechanical{r}_n\simeq\mechanical{x}_n\cos\mechanical{\theta}$. With $\mechanical{x}_n=\mechanical{u}n\signal{\tau}$ and $QP\simeq n\signal{\lambda}(\mechanical{\theta})$,

$$
\signal{\lambda}(\mechanical{\theta})
=\signal{\tau}(\mechanical{v}-\mechanical{u}\cos\mechanical{\theta})
=\signal{\lambda}_s\left(1-\frac{\mechanical{u}}{\mechanical{v}}\cos\mechanical{\theta}\right).
$$

Here $\signal{\lambda}_s=\mechanical{v}\signal{\tau}$ is the wavelength for a source at rest. The frequency at a fixed observer is

$$
\signal{f}_o(\mechanical{\theta})
=\frac{\mechanical{v}}{\signal{\lambda}(\mechanical{\theta})}
=\frac{\signal{f}_s}{1-(\mechanical{u}/\mechanical{v})\cos\mechanical{\theta}}.
$$

For a source approaching a fixed observer at speed $\mechanical{v}_s$, the factor is $1/(1-\mechanical{v}_s/\mechanical{v})$. For an observer approaching a fixed source at speed $\mechanical{v}_o$, it is $1+\mechanical{v}_o/\mechanical{v}$. Equating the two shifts gives

$$
1=(1+\mechanical{v}_o/\mechanical{v})(1-\mechanical{v}_s/\mechanical{v}),
\qquad
\mechanical{v}(\mechanical{v}_o-\mechanical{v}_s)=\mechanical{v}_o\mechanical{v}_s.
$$

Thus $\mechanical{v}=\mechanical{v}_o\mechanical{v}_s/(\mechanical{v}_o-\mechanical{v}_s)$ for distinct speeds. Expanding the product fixes the sign of the final handwritten expression.

The ratio $\mechanical{u}/\mechanical{v}$ is the Mach number. If the source is at rest and the observer approaches at speed $\mechanical{v}_o$, then

$$
\signal{f}_o=\signal{f}_s(1+\mechanical{v}_o/\mechanical{v}),
\qquad
\signal{f}_s=\frac{\signal{f}_o}{1+\mechanical{v}_o/\mechanical{v}}.
$$

A car emitting a $440\,\unit{Hz}$ tone moves toward a truck at $20\,\unit{m\,s^{-1}}$. The truck moves toward the car at $15\,\unit{m\,s^{-1}}$, and the speed of sound is $340\,\unit{m\,s^{-1}}$.

![[Kyle Kabasares - Vibrations and Waves - Car and truck approaching.png|**Fig. 63** The emitting car and the receiving truck travel toward each other.]]

With the truck initially treated as stationary, the moving-source factor gives $440/(1-20/340)=467.5\,\unit{Hz}$. Then multiply by the moving-observer factor $1+15/340$:

$$
\signal{f}_{\mathrm{truck}}
=(440\,\unit{Hz})\frac{340+15}{340-20}
\simeq488\,\unit{Hz}.
$$

The source and observer roles determine the factors, resolving the interchanged expressions in the working.

A second derivation uses arrival times. The front from $S_0$ arrives at $\mechanical{t}_p^{(0)}=\mechanical{r}_0/\mechanical{v}$, and the front from $S_n$ arrives at $\mechanical{t}_p^{(n)}=n\signal{\tau}+\mechanical{r}_n/\mechanical{v}$. Using $\mechanical{r}_0-\mechanical{r}_n\simeq n\signal{\tau}\mechanical{u}\cos\mechanical{\theta}$ gives

$$
\mechanical{t}_p^{(n)}-\mechanical{t}_p^{(0)}
\simeq n\signal{\tau}\left(1-\frac{\mechanical{u}}{\mechanical{v}}\cos\mechanical{\theta}\right).
$$

##### Doppler shift for a moving observer

A stationary source emits equally spaced crests. Their separation is $\signal{\lambda}$ and their speed relative to the medium is $\mechanical{v}=\signal{\lambda}\signal{f}$.

![[Kyle Kabasares - Vibrations and Waves - Wave crests and moving observer.png|**Fig. 64** A moving observer crosses the circular crests at a different rate from a stationary observer.]]

If the listener moves toward the speaker at speed $\mechanical{u}$, the crests approach the listener at $\mechanical{v}+\mechanical{u}$. The wavelength in the medium is $\mechanical{v}/\signal{f}$, giving

$$
\signal{f}'=\frac{\mechanical{v}+\mechanical{u}}{\signal{\lambda}}
=\left(1+\frac{\mechanical{u}}{\mechanical{v}}\right)\signal{f}.
$$

![[Kyle Kabasares - Vibrations and Waves - Observer approaching a speaker.png|**Fig. 65** The listener moves toward the oncoming crests.]]

If the listener moves away, the relative crest speed is $\mechanical{v}-\mechanical{u}$ and

$$
\signal{f}'=\left(1-\frac{\mechanical{u}}{\mechanical{v}}\right)\signal{f}.
$$

At $\mechanical{u}=\mechanical{v}$ the receding observer stays at a fixed phase, so the observed frequency is zero.

![[Kyle Kabasares - Vibrations and Waves - Observer receding from a speaker.png|**Fig. 66** The listener moves in the same direction as the wavefronts.]]

##### Doppler effect for a moving source

In one emission period $\signal{T}$, a crest travels $\mechanical{v}\signal{T}$ and the source advances $\mechanical{u}\signal{T}$. Ahead of an approaching source, successive crests are therefore separated by $\signal{\lambda}'=(\mechanical{v}-\mechanical{u})\signal{T}$.

![[Kyle Kabasares - Vibrations and Waves - Crest compression by a moving source.png|**Fig. 67** The source advances before emitting the next crest, reducing the wavelength ahead of it.]]

The medium still sets the wave speed. For a stationary observer the approaching source gives

$$
\signal{f}'=\frac{\mechanical{v}}{\signal{\lambda}'}
=\frac{\signal{f}}{1-\mechanical{u}/\mechanical{v}},
$$

and a receding source gives $\signal{f}'=\signal{f}/(1+\mechanical{u}/\mechanical{v})$.

Combining source and observer motion along the line joining them gives

$$
\signal{f}'=\signal{f}
\frac{1\pm\mechanical{u}_o/\mechanical{v}}{1\mp\mechanical{u}_s/\mechanical{v}}.
$$

Choose each sign independently. An observer approaching the source adds to the numerator, while a source approaching the observer subtracts from the denominator. Recession reverses the corresponding sign.

As the approaching source reaches the wave speed, the denominator vanishes and the simple periodic-arrival picture breaks down. The fronts coincide at the source at Mach 1 and form a conical envelope in the supersonic case, associated with a sonic boom.

![[Kyle Kabasares - Vibrations and Waves - Sonic and supersonic source review.png|**Fig. 68** Wavefronts pile up at the sonic threshold and form a cone for a faster source.]]

##### Doppler effect review

In a time trace, the period $\signal{T}$ is the time between successive crests, and $\signal{f}=1/\signal{T}$. In a spatial snapshot, the distance between successive crests is the wavelength $\signal{\lambda}$. The amplitude is measured from equilibrium to a crest or trough.

![[Kyle Kabasares - Vibrations and Waves - Period and amplitude.png|**Fig. 69** A time trace marks one period and the amplitude.]]

![[Kyle Kabasares - Vibrations and Waves - Wavelength crest and trough.png|**Fig. 70** A spatial snapshot labels the wavelength, a crest, and a trough.]]

Imagine moving a pencil up and down while pulling a sheet of paper sideways. The periodic motion traces out a spatial profile. One wavelength advances in a period, so $\mechanical{v}=\Delta\mechanical{x}/\Delta\mechanical{t}=\signal{\lambda}/\signal{T}=\signal{\lambda}\signal{f}$.

![[Kyle Kabasares - Vibrations and Waves - Rope between supports.png|**Fig. 71** A stretched rope is held between two supports.]]

For a uniform rope, the linear density is $\mechanical{\mu}=\mechanical{M}/\mechanical{L}$. For a small segment it is $d\mechanical{m}/d\mechanical{L}$.

![[Kyle Kabasares - Vibrations and Waves - Linear density of a rope.png|**Fig. 72** A short rope segment shows the mass and length used to define linear density.]]

Assuming the wave speed depends only on the tension $\mechanical{F}_T$ and the linear density, write $\mechanical{v}\propto\mechanical{F}_T^a\mechanical{\mu}^b$. The time dimension gives $-2a=-1$, and the mass dimension gives $a+b=0$. Thus $a=1/2$ and $b=-1/2$. The wave equation fixes the dimensionless constant to one, yielding $\mechanical{v}=\sqrt{\mechanical{F}_T/\mechanical{\mu}}$.

##### Periodic traveling wave as a function of position and time

At the reference time, take

$$
\mechanical{y}(\mechanical{x},0)=\mechanical{A}\cos\left(\frac{2\pi\mechanical{x}}{\signal{\lambda}}\right).
$$

Its crests occur at integer multiples of $\signal{\lambda}$, where the cosine's argument is zero modulo $2\pi$ and the displacement is $\mechanical{A}$.

![[Kyle Kabasares - Vibrations and Waves - Snapshot of a cosine wave.png|**Fig. 73** At the reference time a crest lies at the origin and the next one is one wavelength away.]]

Follow the crest initially at $\mechanical{x}=0$. Its location at time $\mechanical{t}$ is $\mechanical{x}_{\mathrm{peak}}=\signal{\lambda}\mechanical{t}/\signal{T}$. It advances by half a wavelength in half a period and one wavelength in one period.

![[Kyle Kabasares - Vibrations and Waves - One period of rightward travel.png|**Fig. 74** Three snapshots track the same crest at the initial time, half a period later, and one period later.]]

Thus the phase variable must depend on $\mechanical{x}-\signal{\lambda}\mechanical{t}/\signal{T}$. The right-moving wave is

$$
\mechanical{y}(\mechanical{x},\mechanical{t})
=\mechanical{A}\cos\left[\frac{2\pi}{\signal{\lambda}}\left(
\mechanical{x}-\frac{\signal{\lambda}\mechanical{t}}{\signal{T}}\right)\right]
=\mechanical{A}\cos\left(2\pi\frac{\mechanical{x}}{\signal{\lambda}}
-2\pi\frac{\mechanical{t}}{\signal{T}}\right).
$$

##### Longitudinal and transverse waves

In a transverse wave the displacement is perpendicular to the propagation axis. In a longitudinal wave the displacement is parallel to that axis, and the medium develops regions of compression and rarefaction.

![[Kyle Kabasares - Vibrations and Waves - Transverse and longitudinal profiles.png|**Fig. 75** A transverse displacement profile is compared with a longitudinal compression and rarefaction.]]

##### Effects of boundary conditions

At the free end, represented by a sliding ring, the incident pulse raises the ring and reflects without inversion. At the fixed end, represented by a knot, the displacement at the end remains zero. Energy remains in the moving string even when the incident and reflected profiles overlap and cancel the displacement. The reflected pulse leaves the fixed boundary inverted.

![[Kyle Kabasares - Vibrations and Waves - Pulse reflection sequences.png|**Fig. 76** Time sequences compare reflection at a free end and at a fixed end.]]

**Exercise 8-8**

A source emitting $2000\,\unit{Hz}$ moves away from a stationary listener at $60$ miles per hour, taken as about $26.6\,\unit{m\,s^{-1}}$ in the notes. With sound speed $334\,\unit{m\,s^{-1}}$,

$$
\signal{f}_o
=\frac{\signal{f}}{1+\mechanical{u}/\mechanical{v}}
=\frac{2000\,\unit{Hz}}{1+26.6/334}
\simeq1852\,\unit{Hz}.
$$

![[Kyle Kabasares - Vibrations and Waves - Receding source example.png|**Fig. 77** The vehicle carrying the source moves away from the listener.]]

##### Huygens' principle review

Treat each point on a wavefront as a source of secondary waves. At an opening the outgoing fronts can spread in directions beyond the original beam. For a plane wave the secondary wavelets reinforce along the forward envelope, giving another plane front.

![[Kyle Kabasares - Vibrations and Waves - Huygens principle at an opening.png|**Fig. 78** A wavefront reaching an opening gives rise to spreading wavelets.]]

![[Kyle Kabasares - Vibrations and Waves - Plane front from secondary sources.png|**Fig. 79** Secondary wavelets and the forward direction of constructive interference.]]

**Exercise 36**

The emitted frequency is $400\,\unit{Hz}$, the approach speed is $25\,\unit{m\,s^{-1}}$, and sound travels at $340\,\unit{m\,s^{-1}}$. For a moving source and fixed listener,

$$
\signal{f}'=\frac{400\,\unit{Hz}}{1-25/340}\simeq431.7\,\unit{Hz}.
$$

The handwritten box gives $431.2\,\unit{Hz}$, while the substitution shown gives $431.7\,\unit{Hz}$.

![[Kyle Kabasares - Vibrations and Waves - Moving source and fixed listener.png|**Fig. 80** The source approaches the stationary listener.]]

For a fixed source and approaching listener, $\signal{f}'=(1+25/340)(400\,\unit{Hz})\simeq429\,\unit{Hz}$.

![[Kyle Kabasares - Vibrations and Waves - Fixed source and moving listener.png|**Fig. 81** The listener moves toward the source.]]

**Exercise 37(a)**

The vehicle carrying the source travels at $90\,\unit{km\,h^{-1}}=25\,\unit{m\,s^{-1}}$ and emits a $600\,\unit{Hz}$ tone.

![[Kyle Kabasares - Vibrations and Waves - Vehicle sound source.png|**Fig. 82** A vehicle carries the source toward the listener.]]

For exercise 37, take the sound speed as $343\,\unit{m\,s^{-1}}$. The moving-source formula gives $600/(1-25/343)\simeq647\,\unit{Hz}$ on approach and $600/(1+25/343)\simeq559\,\unit{Hz}$ on recession.

![[Kyle Kabasares - Vibrations and Waves - Vehicle receding after passing.png|**Fig. 83** After passing the listener, the vehicle moves away and the tone shifts down.]]

##### Exercises 38 and 39

In exercise 38, a source emits at $\signal{f}=25\,\unit{kHz}$ and is heard at $\signal{f}'=20\,\unit{kHz}$. For a receding source and fixed observer,

$$
\mechanical{u}=\mechanical{v}\left(\frac{\signal{f}}{\signal{f}'}-1\right)
=(343\,\unit{m\,s^{-1}})\left(\frac{25}{20}-1\right)
\simeq85.7\,\unit{m\,s^{-1}}.
$$

![[Kyle Kabasares - Vibrations and Waves - Receding high-frequency source.png|**Fig. 84** The source moves away from a fixed observer.]]

In exercise 39, $\signal{f}=800\,\unit{Hz}$ and $\signal{f}'=900\,\unit{Hz}$. The source approaches at speed $\mechanical{u}=\mechanical{v}(1-\signal{f}/\signal{f}')\simeq38.1\,\unit{m\,s^{-1}}$.

**Exercise 78**

The wire is $0.75\,\unit{m}$ long with diameter $0.46\,\unit{mm}$ and linear density $1.3\,\unit{g\,m^{-1}}$. Its mass is $\mechanical{M}=\mechanical{\mu}\mechanical{L}=0.975\,\unit{g}$.

![[Kyle Kabasares - Vibrations and Waves - Wire dimensions.png|**Fig. 85** The wire's length and circular cross section set the geometry for the tensile calculation.]]

For wave speed $250\,\unit{m\,s^{-1}}$ and frequency $196\,\unit{Hz}$, the wavelength is $250/196\simeq1.27\,\unit{m}$. The tension is $\mechanical{T}=\mechanical{\mu}\mechanical{v}^2=81.25\,\unit{N}$. The tensile stress $\mechanical{F}/\mechanical{A}$ is related to strain by $\mechanical{F}/\mechanical{A}=\mechanical{Y}\Delta\mechanical{L}/\mechanical{L}$, with Young's modulus $\mechanical{Y}=20\times10^{10}\,\unit{N\,m^{-2}}$.

For the wire in exercise 78, the cross-sectional area is $\mechanical{A}=\pi\mechanical{r}^2$, with $\mechanical{r}=0.23\,\unit{mm}$. Taking the applied force as the tension, the elongation is

$$
\Delta\mechanical{L}
=\frac{\mechanical{F}\mechanical{L}}{\mechanical{Y}\pi\mechanical{r}^2}
=\frac{(81.25\,\unit{N})(0.75\,\unit{m})}
{(20\times10^{10}\,\unit{N\,m^{-2}})\pi(0.23\times10^{-3}\,\unit{m})^2}
\simeq1.83\,\unit{mm}.
$$

##### Snell's law review

Snell's law gives $n_1\sin\mechanical{\theta}_1=n_2\sin\mechanical{\theta}_2$. For incidence from the higher-index side, $\mechanical{\theta}_c=\arcsin(n_2/n_1)$. At fixed frequency, $\sin\mechanical{\theta}_1/\sin\mechanical{\theta}_2=\signal{\lambda}_1/\signal{\lambda}_2=\mechanical{v}_1/\mechanical{v}_2$.

![[Kyle Kabasares - Vibrations and Waves - Critical ray from below the surface.png|**Fig. 86** The ray at critical incidence grazes the interface after refraction.]]

Optical dispersion is the wavelength dependence of the refractive index. In the normal-dispersion example here, the index increases as the wavelength decreases.

##### Knight Physics, exercise 23.58

A ray in air hits the prism at $50^\circ$ to the normal. The violet ray has angle $30^\circ$ inside the prism, so $n_{\mathrm{violet}}=\sin50^\circ/\sin30^\circ\simeq1.53$. Since $n_{\mathrm{violet}}=1.02n_{\mathrm{red}}$, use $n_{\mathrm{red}}\simeq1.50$. The red ray's internal angle is $\mechanical{\theta}_{\mathrm{red}}=\arcsin(\sin50^\circ/1.50)\simeq30.7^\circ$.

![[Kyle Kabasares - Vibrations and Waves - Prism dispersion of red and violet.png|**Fig. 87** The prism refracts red and violet light at different angles.]]

**Homework 4, problem 1 — optical fiber**

A ray enters from air with wavelength $850\,\unit{nm}$ and incidence angle $20.5^\circ$ to the normal. Inside the fiber its wavelength is $574.3\,\unit{nm}$. The sketch gives the cladding index as $1.44$.

![[Kyle Kabasares - Vibrations and Waves - Ray entering an optical fiber.png|**Fig. 88** Refraction at the entrance face sets the ray direction inside the core.]]

At fixed frequency, the wavelength ratio gives the core index:

$$
n_2=n_1\frac{\signal{\lambda}_1}{\signal{\lambda}_2}
=\frac{850}{574.3}\simeq1.480.
$$

Snell's law at the entrance gives $\mechanical{\theta}_2=\arcsin(\sin20.5^\circ/1.480)\simeq13.7^\circ$. The angle to the normal at the side wall is $\mechanical{\theta}_3=90^\circ-\mechanical{\theta}_2\simeq76.3^\circ$. The angle to the wall itself is $\mechanical{\theta}_3'=\mechanical{\theta}_2$.

![[Kyle Kabasares - Vibrations and Waves - Complementary ray angles in the fiber.png|**Fig. 89** The entrance and side-wall normals are perpendicular, so the corresponding ray angles are complementary.]]

##### Lateral shift through glass

The incident ray makes $30^\circ$ with the glass surface and thus $\mechanical{\theta}_1=60^\circ$ with its normal. For $n_{\mathrm{glass}}=1.5$, the refracted angle is $\mechanical{\theta}_2=\arcsin(\sin60^\circ/1.5)\simeq35.3^\circ$. A ray entering a higher-index medium bends toward the normal and a ray entering a lower-index medium bends away from it.

![[Kyle Kabasares - Vibrations and Waves - Lateral offset through a glass slab.png|**Fig. 90** The ray emerges parallel to its incident direction with a lateral offset.]]

For slab thickness $\mechanical{t}_{\mathrm{slab}}$, the ray travels $\mechanical{\ell}=\mechanical{t}_{\mathrm{slab}}/\cos\mechanical{\theta}_2$ in the glass. With $\mechanical{\phi}=\mechanical{\theta}_1-\mechanical{\theta}_2$, the perpendicular offset is

$$
\mechanical{d}=\mechanical{\ell}\sin\mechanical{\phi}
=\frac{\mechanical{t}_{\mathrm{slab}}\sin(\mechanical{\theta}_1-\mechanical{\theta}_2)}{\cos\mechanical{\theta}_2}.
$$

The boxed offset is $0.51\,\unit{cm}$, consistent with a slab thickness of $1\,\unit{cm}$.

**Homework 4, problem 3 — prism exit**

At the threshold for total internal reflection from glass of index $1.5$ into air, the outgoing ray is at $90^\circ$ to the normal. Therefore

$$
\mechanical{\theta}_c=\arcsin(1.0/1.5)=41.8^\circ\simeq42^\circ.
$$

The ray makes the complementary angle $90^\circ-\mechanical{\theta}_c\simeq48^\circ$ to the exit face.

![[Kyle Kabasares - Vibrations and Waves - Critical angle at a prism exit.png|**Fig. 91** The internal ray approaches the slanted prism face at critical incidence.]]

##### Quiz 1 — rectangular and polar forms

Write $z=a+jb=Ae^{j\theta}$. Euler's identity gives $a=A\cos\theta$ and $b=A\sin\theta$. Thus $A=\sqrt{a^2+b^2}$ and, for $a\ne0$, $\tan\theta=b/a$. For $z\ne0$, the signs of the sine and cosine select the phase quadrant.

##### Quiz 2 — mass between springs

A mass $\mechanical{m}=100\,\unit{g}$ lies between two springs of stiffness $\mechanical{k}=0.1\,\unit{N\,m^{-1}}$ each. Initially $\mechanical{x}=0$ and $\mechanical{v}=0.2\,\unit{m\,s^{-1}}$.

![[Kyle Kabasares - Vibrations and Waves - Mass between identical springs.png|**Fig. 92** Two identical springs both contribute to the restoring force on the mass.]]

The effective stiffness is $2\mechanical{k}$, so $\signal{\omega}=\sqrt{2\mechanical{k}/\mechanical{m}}=\sqrt2\,\unit{rad\,s^{-1}}$ and $\signal{f}=\sqrt2/(2\pi)\,\unit{Hz}$. For $\mechanical{x}=\mechanical{A}\sin(\signal{\omega}\mechanical{t}+\signal{\phi})$, the initial position requires $\sin\signal{\phi}=0$. Taking the amplitude positive, the positive initial velocity gives $\signal{\phi}=0$ and $\mechanical{A}=0.2/\sqrt2\,\unit{m}$.

##### Quiz 4 — mass at the midpoint of a string

A mass $\mechanical{m}$ is attached at the midpoint of a string of length $\mechanical{L}$ under tension $\mechanical{T}$. For a small transverse displacement $\mechanical{y}$, each half contributes a restoring component approximately equal to $-\mechanical{T}\mechanical{y}/(\mechanical{L}/2)$. Thus

$$
\mechanical{m}\ddot{\mechanical{y}}\simeq-\frac{4\mechanical{T}}{\mechanical{L}}\mechanical{y},
\qquad
\signal{\omega}=2\sqrt{\frac{\mechanical{T}}{\mechanical{m}\mechanical{L}}}.
$$

![[Kyle Kabasares - Vibrations and Waves - Transverse motion of a midpoint mass.png|**Fig. 93** The two tension forces pull a displaced midpoint mass back toward equilibrium.]]

##### Quiz 2 wave solutions — problem 2

The standing-wave condition is $\signal{\lambda}_n=2\mechanical{L}/n$. Using $\mechanical{L}=310.372\,\unit{mm}$ and $\signal{\lambda}=632.9924\,\unit{nm}$ gives $n\simeq980650$. The adjacent mode numbers listed are $980651$ and $980649$, whose wavelengths follow from $2\mechanical{L}/(n\pm1)$.

![[Kyle Kabasares - Vibrations and Waves - Half-wave fundamental.png|**Fig. 94** The fundamental fits half a wavelength between the boundaries.]]

##### Two coherent sources

The sources are separated by $1\,\unit{m}$. Each wave has amplitude $\mechanical{A}=0.1\,\unit{mm}$ and frequency $500\,\unit{Hz}$, and the source phase difference in the written sum is $\pi/2$. The observation point lies $2\,\unit{m}$ in front of $S_1$ and $3\,\unit{m}$ from $S_2$.

![[Kyle Kabasares - Vibrations and Waves - Two coherent sources.png|**Fig. 95** The two sources are separated by one metre.]]

With $\signal{\lambda}=(340\,\unit{m\,s^{-1}})/(500\,\unit{Hz})=0.68\,\unit{m}$, set $\signal{k}=2\pi/\signal{\lambda}$ and $\signal{\omega}=2\pi\signal{f}$. At the observation point,

$$
\mechanical{y}
=\mechanical{A}\big[
\sin(\signal{k}(2\,\unit{m})-\signal{\omega}\mechanical{t})
+\sin(\signal{k}(3\,\unit{m})-\signal{\omega}\mechanical{t}+\pi/2)\big].
$$

The sine addition identity gives a sinusoid with amplitude $2\mechanical{A}\lvert\cos([\signal{k}(1\,\unit{m})+\pi/2]/2)\rvert$. The two phases differ by both the path phase and the phase set at the sources.

## Source

Kyle Kabasares, *Vibrations and Waves (Physics 122, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Restoring force | Force that vanishes at equilibrium. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial parameter in the equation of motion. |
| $\mechanical{t}$ | $\unit{s}$ | Time | Independent variable for the motion. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of phase accumulation. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase constant | Phase at the initial time. |
| $\signal{\tau}$ | $\unit{s}$ | Amplitude decay time | Time for the envelope to fall by a factor of $e$. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | Deflection of a string element from equilibrium. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | Magnitude of the force along the string, distinct from the period $\signal{T}$. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Local tangent angle | Angle between the string and the equilibrium direction. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Angular wave number | Phase change per unit distance, equal to $2\pi/\signal{\lambda}$. |
| $d$ | $\unit{m^4\,s^{-2}}$ | String dispersion coefficient | Multiplies the squared angular wave number in the phase speed squared. |
| $\mechanical{M}$ | $\unit{kg}$ | Reduced mass | Effective mass for relative motion of the isolated pair. |
| $\mechanical{\theta}_c$ | $\unit{rad}$ | Critical angle | Angle of incidence at which the refracted ray becomes grazing. |
| $\mechanical{u}$ | $\unit{m\,s^{-1}}$ | Source speed | Speed of the emitter relative to the medium in the Doppler derivation. |
| $\signal{f}_{\mathrm{source}}$ | $\unit{Hz}$ | Emitted frequency | Rate at which the moving source emits wavefronts. |
| $\signal{f}_o$ | $\unit{Hz}$ | Observed frequency | Arrival rate of wavefronts at the observer. |
| $\mechanical{Y}$ | $\unit{Pa}$ | Young's modulus | Ratio of tensile stress to fractional elongation in the linear regime. |
