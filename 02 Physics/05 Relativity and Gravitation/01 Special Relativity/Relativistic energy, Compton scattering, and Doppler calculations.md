---
title: "Relativistic energy, Compton scattering, and Doppler calculations"
---

> [!TLDR]
> Use four-momentum conservation and photon kinematics to analyze scattering, energy transfer, and Doppler shifts.

## Worked lecture material

### Chapter 10, Momentum

##### Review of Lorentz axes

In $(\mechanical{x},\mechanical{c}t)$ coordinates, the Lorentz transformation and its inverse are

$$
\begin{aligned}
\mechanical{x}'&=\mechanical{\gamma}(\mechanical{x}-\mechanical{\beta}\mechanical{c}t),&
\mechanical{c}t'&=\mechanical{\gamma}(\mechanical{c}t-\mechanical{\beta}\mechanical{x}),\\
\mechanical{x}&=\mechanical{\gamma}(\mechanical{x}'+\mechanical{\beta}\mechanical{c}t'),&
\mechanical{c}t&=\mechanical{\gamma}(\mechanical{c}t'+\mechanical{\beta}\mechanical{x}').
\end{aligned}
$$

The axes have a common origin. The $\mechanical{x}'$ axis consists of events with $t'=0$, so its slope in the unprimed diagram is $\mechanical{\beta}=\mechanical{v}/\mechanical{c}$. The $\mechanical{c}t'$ axis consists of events with $\mechanical{x}'=0$, so it tilts toward the $\mechanical{x}$ axis by the same angle $\mechanical{\theta}$, where $\tan\mechanical{\theta}=\mechanical{\beta}$. In the primed diagram the tilt of the unprimed axes has the opposite sign, with signed tangent $-\mechanical{v}/\mechanical{c}$.

![[Kyle Kabasares - Special Relativity - Lorentz axes and length contraction.png|**Fig. 9** Tilted axes for the two frames, with projections of the event on the primed space axis and the worldline of the stick's endpoint.]]

An event $(\mechanical{c}t',\mechanical{x}')=(0,\mechanical{x}_a')$ has coordinates $(\mechanical{\beta}\mechanical{\gamma}\mechanical{x}_a',\mechanical{\gamma}\mechanical{x}_a')$ in $S$. An event $(\mechanical{c}t_a',0)$ on the primed time axis has $\mechanical{c}t=\mechanical{\gamma}\mechanical{c}t_a'$ and $\mechanical{x}=\mechanical{\beta}\mechanical{\gamma}\mechanical{c}t_a'$.

Take a stick at rest in $S'$ with one end at $\mechanical{x}'=0$ and the other at $\mechanical{x}'=\mechanical{x}_a'$. In $S$, its endpoint worldline is parallel to the $\mechanical{c}t'$ axis. To locate the endpoint at $t=0$, follow this worldline back from the event with $t'=0$ and subtract the horizontal shift $\Delta$.

$$
\begin{aligned}
\Delta&=\tan\mechanical{\theta}\,(\mechanical{\beta}\mechanical{\gamma}\mechanical{x}_a')
=\mechanical{\beta}^2\mechanical{\gamma}\mechanical{x}_a',\\
\mechanical{L}
&=\mechanical{\gamma}\mechanical{x}_a'-\Delta
=\mechanical{\gamma}\mechanical{x}_a'(1-\mechanical{\beta}^2)
=\frac{\mechanical{x}_a'}{\mechanical{\gamma}}.
\end{aligned}
$$

##### Relativistic dynamics

The classical momentum of a particle is $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$. For multiple particles the total is $\sum_i\mechanical{\vec p}_i$. The following example tests the classical formula using the relativistic velocity transformation.

In $S$, a body of mass $3\mechanical{m}$ initially at rest splits into a fragment of mass $\mechanical{m}$ moving left at speed $2\mechanical{v}$ and a fragment of mass $2\mechanical{m}$ moving right at speed $\mechanical{v}$. The sum of their classical momenta is zero, equal to the initial value.

In $S'$, which moves right at speed $\mechanical{v}$, the initial body moves at $-\mechanical{v}$, giving classical momentum $-3\mechanical{m}\mechanical{v}$. The transformed fragment velocities follow from the longitudinal rule.

$$
\begin{aligned}
\mechanical{V}_1' &=\frac{-2\mechanical{v}-\mechanical{v}}{1-(-2\mechanical{v})\mechanical{v}/\mechanical{c}^2}
=\frac{-3\mechanical{v}}{1+2\mechanical{v}^2/\mechanical{c}^2},\\
\mechanical{V}_2' &=\frac{\mechanical{v}-\mechanical{v}}{1-\mechanical{v}^2/\mechanical{c}^2}=0.
\end{aligned}
$$

Using the same classical formula after the split in $S'$ gives

$$
\mechanical{p}_{\mathrm{tot}}'
=\mechanical{m}\mechanical{V}_1'+2\mechanical{m}\mechanical{V}_2'
=\frac{-3\mechanical{m}\mechanical{v}}{1+2\mechanical{v}^2/\mechanical{c}^2}.
$$

The classical momentum sum changes across the split in $S'$. The side equations on this page also list the transverse velocity transformations. Those components vanish in this example, and their general form, with the factor $\mechanical{\gamma}$ in the denominator, is on [[Lorentz transformations and spacetime diagram problems#Velocity transformations|the section on Velocity transformations]].

##### Four-scalars and four-vectors

A four-scalar is invariant under a change of inertial frame. The notes point to the speed of light and the squared spacetime interval,

$$
(\Delta\mechanical{s})^2=-\mechanical{c}^2(\Delta t)^2+
(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2+(\Delta\mechanical{z})^2.
$$

A four-vector has components $(A_0,A_1,A_2,A_3)$ in $S$ and $(A_0',A_1',A_2',A_3')$ in $S'$. The components must obey the Lorentz transformation.

For a boost along $x$, the components of a generic four-vector transform as

$$
\begin{aligned}
A_0'&=\mechanical{\gamma}(A_0-\mechanical{\beta}A_1),&
A_1'&=\mechanical{\gamma}(A_1-\mechanical{\beta}A_0),\\
A_2'&=A_2,& A_3'&=A_3.
\end{aligned}
$$

The handwritten $A_1'$ line has $A_2$ in the second term. The boost mixes the time and longitudinal components, as on [[#Chapter 10, Momentum|the section on · Chapter 10, Momentum]]. The squared Minkowski norm $d^2=-A_0^2+A_1^2+A_2^2+A_3^2$ is a four-scalar. Applying it to the difference of two spacetime positions gives their squared interval.

##### Four-velocity

The ordinary velocity uses the coordinate time of the frame, for example $\mechanical{V}_x=d\mechanical{x}/dt$ in $S$ and $\mechanical{V}_x'=d\mechanical{x}'/dt'$ in $S'$. Write the spacetime position as

$$
\mechanical{X}_{\mu}(t)=(\mechanical{c}t,\mechanical{x},\mechanical{y},\mechanical{z}).
$$

For inertial motion from the origin at speed $\mechanical{v}$, its squared interval is

$$
\mechanical{s}^2
=-\mechanical{c}^2t^2+\mechanical{x}^2+\mechanical{y}^2+\mechanical{z}^2
=(\mechanical{v}^2-\mechanical{c}^2)t^2
=-\frac{\mechanical{c}^2t^2}{\mechanical{\gamma}^2}.
$$

For this timelike path, the proper time satisfies $\mechanical{c}^2\tau^2=-\mechanical{s}^2$, so $|\tau|=|t|/\mechanical{\gamma}$. The notes use the interval to motivate normalizing the four-position, with the intermediate square root written without the sign and factor of $\mechanical{c}$ needed for a real time in seconds.

Dividing the spacetime displacement by the elapsed proper time, or differentiating with respect to proper time, gives the four-velocity.

$$
\mechanical{U}_{\mu}
=\mechanical{\gamma}\left(\mechanical{c},\frac{\mechanical{x}}{t},\frac{\mechanical{y}}{t},\frac{\mechanical{z}}{t}\right)
=\mechanical{\gamma}(\mechanical{c},\mechanical{V}_x,\mechanical{V}_y,\mechanical{V}_z).
$$

##### Four-momentum

Multiply the four-velocity by the mass.

$$
\mechanical{p}_{\mu}
=\mechanical{m}\mechanical{U}_{\mu}
=(\mechanical{\gamma}\mechanical{m}\mechanical{c},
\mechanical{\gamma}\mechanical{m}\mechanical{V}_x,
\mechanical{\gamma}\mechanical{m}\mechanical{V}_y,
\mechanical{\gamma}\mechanical{m}\mechanical{V}_z).
$$

The first spatial component is $\mechanical{p}_1=\mechanical{\gamma}\mechanical{m}\mechanical{V}_x=\mechanical{m}\mechanical{V}_x/\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$. At low speeds it approaches $\mechanical{m}\mechanical{V}_x$. For motion along $x$ with speed approaching $\mechanical{c}$, it grows without bound.

![[Kyle Kabasares - Special Relativity - Momentum versus speed.png|**Fig. 10** The classical line and the relativistic momentum curve agree at low speed. The relativistic curve rises steeply near the speed of light.]]

The time component is $\mechanical{p}_0=\mechanical{\gamma}\mechanical{m}\mechanical{c}$, so $\mechanical{p}_0\mechanical{c}=\mechanical{\gamma}\mechanical{m}\mechanical{c}^2$. A sketch shows two particles moving apart, the first left at $(4/5)\mechanical{c}$ and the second right at $(3/5)\mechanical{c}$. The first momentum is written $\mechanical{p}_1=\mechanical{\gamma}_1\mechanical{m}_1\mechanical{v}_1$, with $\mechanical{v}_1$ signed along the axis.

The notebook marks a space for the April 27 lecture.

### Compton scattering

An incident photon has energy $\energy{h}\signal{\nu}$ and momentum magnitude $\energy{h}\signal{\nu}/\mechanical{c}$. It scatters from an electron initially at rest. The photon leaves at angle $\mechanical{\theta}$ above the incident direction with energy $\energy{h}\signal{\nu}'$ and momentum magnitude $\energy{h}\signal{\nu}'/\mechanical{c}$. The electron recoils below that direction at angle $\mechanical{\phi}$, with energy $\energy{E}_e$ and momentum magnitude $\mechanical{p}_e$.

The aim is to find $\signal{\nu}'$ in terms of $\signal{\nu}$ and $\mechanical{\theta}$. The recoil electron obeys the energy–momentum relation, and the collision conserves energy.

$$
\energy{E}_e^2=\mechanical{m}_e^2\mechanical{c}^4+\mechanical{p}_e^2\mechanical{c}^2, \tag{1}
$$

$$
\energy{h}\signal{\nu}+\mechanical{m}_e\mechanical{c}^2
=\energy{h}\signal{\nu}'+\energy{E}_e. \tag{2}
$$

The incident photon momentum equals the vector sum of the scattered photon momentum and the electron momentum.

![[Kyle Kabasares - Special Relativity - Compton scattering momentum triangle.png|**Fig. 11** The scattered photon and recoil electron momenta add head to tail to give the incident photon momentum.]]

The law of cosines gives

$$
\mechanical{p}_e^2
=\left(\frac{\energy{h}\signal{\nu}'}{\mechanical{c}}\right)^2
+\left(\frac{\energy{h}\signal{\nu}}{\mechanical{c}}\right)^2
-2\left(\frac{\energy{h}\signal{\nu}'}{\mechanical{c}}\right)
\left(\frac{\energy{h}\signal{\nu}}{\mechanical{c}}\right)\cos\mechanical{\theta}. \tag{3}
$$

Eliminate $\mechanical{p}_e$ with (1), then use (2) to express $\energy{E}_e$ in terms of the photon frequencies. The common factor after substituting (3) is $\energy{h}^2$, which the first handwritten elimination line appears to write as $\energy{h}^4$.

$$
\begin{aligned}
\frac{\energy{E}_e^2-\mechanical{m}_e^2\mechanical{c}^4}{\energy{h}^2}
&=\signal{\nu}'^{\,2}+\signal{\nu}^2-2\signal{\nu}\signal{\nu}'\cos\mechanical{\theta},\\
\frac{\left[\energy{h}(\signal{\nu}-\signal{\nu}')+\mechanical{m}_e\mechanical{c}^2\right]^2
-\mechanical{m}_e^2\mechanical{c}^4}{\energy{h}^2}
&=(\signal{\nu}-\signal{\nu}')^2+
\frac{2\mechanical{m}_e\mechanical{c}^2}{\energy{h}}(\signal{\nu}-\signal{\nu}').
\end{aligned}
$$

Equating these results and canceling the squared frequency terms yields

$$
\signal{\nu}-\signal{\nu}'=\frac{\energy{h}}{\mechanical{m}_e\mechanical{c}^2}
\signal{\nu}\signal{\nu}'(1-\cos\mechanical{\theta}).
$$

With $\signal{\lambda}=\mechanical{c}/\signal{\nu}$ and $\signal{\lambda}'=\mechanical{c}/\signal{\nu}'$, the wavelength shift is independent of the initial photon energy.

$$
\boxed{\signal{\lambda}'-\signal{\lambda}
=\frac{\energy{h}}{\mechanical{m}_e\mechanical{c}}(1-\cos\mechanical{\theta})
=\signal{\lambda}_{\mathrm C}(1-\cos\mechanical{\theta}).}
$$

The electron's Compton wavelength is $\signal{\lambda}_{\mathrm C}=\energy{h}/(\mechanical{m}_e\mechanical{c})=2.43\times10^{-12}\;\unit{m}$. The shift is nonnegative. A positive shift increases the wavelength and decreases the photon energy and momentum, giving a redshift. The maximum shift is $2\signal{\lambda}_{\mathrm C}$ at $\mechanical{\theta}=\pi$, for a backscattered photon. From the stated Compton wavelength this is $4.86\times10^{-12}\;\unit{m}$. The source writes approximately $4\times10^{-12}\;\unit{m}$.

For comparison, the photon at the hydrogen ionization threshold has $\energy{E}=13.6\;\unit{eV}$ and $\signal{\lambda}=\energy{h}\mechanical{c}/\energy{E}\approx91\;\unit{nm}$. The notes use $\energy{h}\mechanical{c}\approx1.24\times10^{-6}\;\unit{eV\,m}$.

##### Relativistic Doppler effect

The energy–momentum four-vector for light is

$$
\mechanical{p}_{\mu}
=\left(\frac{\energy{E}}{\mechanical{c}},\mechanical{\vec p}\right)
=\frac{\energy{h}\signal{\nu}}{\mechanical{c}}(1,\signal{\hat k}),
$$

where $\signal{\hat k}$ is the unit vector in the propagation direction. Suppose it lies in the $xy$ plane. In the observer frame $S$ the wave makes angle $\mechanical{\theta}$ with the positive $x$ axis. In the source frame $S'$, moving at speed $\mechanical{v}$ along $x$, the corresponding angle is $\mechanical{\theta}'$. The sketches label the wave in each frame and separately show a receding source sending light back to the observer.

$$
\begin{aligned}
\mechanical{p}_{\mu}
&=\frac{\energy{h}\signal{\nu}}{\mechanical{c}}(1,\cos\mechanical{\theta},\sin\mechanical{\theta},0),\\
\mechanical{p}_{\mu}'
&=\frac{\energy{h}\signal{\nu}'}{\mechanical{c}}(1,\cos\mechanical{\theta}',\sin\mechanical{\theta}',0).
\end{aligned}
$$

To find the observed $\signal{\nu}$ and $\mechanical{\theta}$ from $\signal{\nu}'$ and $\mechanical{\theta}'$, use the inverse boost with $\mechanical{\beta}=\mechanical{v}/\mechanical{c}$.

$$
\begin{aligned}
\mechanical{p}_0 &= \mechanical{\gamma}(\mechanical{p}_0'+\mechanical{\beta}\mechanical{p}_1'),\\
\mechanical{p}_1 &= \mechanical{\gamma}(\mechanical{p}_1'+\mechanical{\beta}\mechanical{p}_0'),\\
\mechanical{p}_2 &= \mechanical{p}_2'.
\end{aligned}
$$

Substituting the photon components and canceling $\energy{h}/\mechanical{c}$ gives

$$
\begin{aligned}
\signal{\nu}&=\mechanical{\gamma}\signal{\nu}'(1+\mechanical{\beta}\cos\mechanical{\theta}'),\\
\signal{\nu}\cos\mechanical{\theta}
&=\mechanical{\gamma}\signal{\nu}'(\cos\mechanical{\theta}'+\mechanical{\beta}),\\
\signal{\nu}\sin\mechanical{\theta}&=\signal{\nu}'\sin\mechanical{\theta}'.
\end{aligned}
$$

Divide the longitudinal component equation by the frequency equation to obtain the change in the propagation angle. Solving for the primed angle gives the inverse.

$$
\cos\mechanical{\theta}
=\frac{\cos\mechanical{\theta}'+\mechanical{\beta}}{1+\mechanical{\beta}\cos\mechanical{\theta}'},
\qquad
\cos\mechanical{\theta}'
=\frac{\cos\mechanical{\theta}-\mechanical{\beta}}{1-\mechanical{\beta}\cos\mechanical{\theta}}.
$$

Use the inverse angle relation to write the observed frequency in terms of the observed angle.

$$
\begin{aligned}
\signal{\nu}
&=\mechanical{\gamma}\signal{\nu}'\left(1+\mechanical{\beta}
\frac{\cos\mechanical{\theta}-\mechanical{\beta}}{1-\mechanical{\beta}\cos\mechanical{\theta}}\right)\\
&=\mechanical{\gamma}\signal{\nu}'\frac{1-\mechanical{\beta}^2}{1-\mechanical{\beta}\cos\mechanical{\theta}}
=\signal{\nu}'\frac{\sqrt{1-\mechanical{\beta}^2}}{1-\mechanical{\beta}\cos\mechanical{\theta}}.
\end{aligned}
$$

For a given geometry, the shift for light depends on the relative velocity of the source and observer. For sound, the velocities relative to the medium also enter.

##### (i) Receding source

The photon travels in the negative $x$ direction, so $\mechanical{\theta}=\mechanical{\theta}'=\pi$. Then

$$
\signal{\nu}=\signal{\nu}'\frac{\sqrt{1-\mechanical{\beta}^2}}{1+\mechanical{\beta}}
=\signal{\nu}'\sqrt{\frac{1-\mechanical{\beta}}{1+\mechanical{\beta}}}
<\signal{\nu}'.
$$

The observer sees redshifted light, with lower frequency.

##### (ii) Approaching source

The photon travels in the positive $x$ direction, so $\mechanical{\theta}=\mechanical{\theta}'=0$. Then

$$
\signal{\nu}=\signal{\nu}'\frac{\sqrt{1-\mechanical{\beta}^2}}{1-\mechanical{\beta}}
=\signal{\nu}'\sqrt{\frac{1+\mechanical{\beta}}{1-\mechanical{\beta}}}
>\signal{\nu}'.
$$

The observer sees blueshifted light, with higher frequency.

##### (iii) Transverse Doppler shift

For $\mechanical{\theta}=\pi/2$ in the observer frame, the angle relation gives $\cos\mechanical{\theta}'=-\mechanical{\beta}$ and the frequency is

$$
\signal{\nu}=\signal{\nu}'\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}.
$$

The notes contrast this with the classical Doppler effect for sound, where transverse motion relative to the medium gives no shift when the source and observer velocity components along the ray both vanish.

##### Can $\signal{\nu}=\signal{\nu}'$?

Yes. The sketch shows the observed frequency decreasing as the angle increases from $0$ to $\pi$, crossing the emitted frequency between the forward and transverse directions. The sketch places the crossing near $\pi/2$. The frequency equation from the previous page gives the crossing condition $1-\mechanical{\beta}\cos\mechanical{\theta}=\sqrt{1-\mechanical{\beta}^2}$.

##### Particle dynamics in the lab frame

A neutral kaon $K^0$ moves in the lab at $\mechanical{v}=(3/5)\mechanical{c}$ and decays into two neutral pions,

$$
K^0\longrightarrow\pi^0+\pi^0.
$$

Both pions move along the line of the original kaon's motion. What are their energies in the lab? Start in the rest frame $S'$ of the kaon. The initial total momentum is zero, so this is the **center-of-momentum frame**. The sketch shows the two pions moving in opposite directions in $S'$.

Work first in the center-of-momentum frame $S'$, then transform back to the lab. Let $\mechanical{m}_{K^0}$ and $\mechanical{m}_{\pi^0}$ be the kaon and neutral-pion masses. The pions have equal energies and opposite signed momenta, $\mechanical{p}_1'=-\mechanical{p}'$ and $\mechanical{p}_2'=+\mechanical{p}'$. If their common speed is $\mechanical{v}'$, then

$$
\begin{aligned}
\energy{E}_1'=\energy{E}_2'
&=\frac12\mechanical{m}_{K^0}\mechanical{c}^2
=\mechanical{\gamma}'\mechanical{m}_{\pi^0}\mechanical{c}^2,\\
\mechanical{\gamma}' &= \frac{\mechanical{m}_{K^0}}{2\mechanical{m}_{\pi^0}},\\
\frac{\mechanical{v}'}{\mechanical{c}}
&=\sqrt{1-\left(\frac{2\mechanical{m}_{\pi^0}}{\mechanical{m}_{K^0}}\right)^2}
\approx0.84,\\
\mechanical{p}'&=\mechanical{\gamma}'\mechanical{m}_{\pi^0}\mechanical{v}'
=\frac12\mechanical{m}_{K^0}\mechanical{v}'.
\end{aligned}
$$

The page then writes the energy and longitudinal momentum transformation from $S$ to $S'$ for $\mechanical{p}_{\mu}=(\energy{E}/\mechanical{c},\mechanical{p}_1,\mechanical{p}_2,\mechanical{p}_3)$.

$$
\begin{aligned}
\frac{\energy{E}'}{\mechanical{c}}
&=\mechanical{\gamma}\left(\frac{\energy{E}}{\mechanical{c}}-
\frac{\mechanical{v}}{\mechanical{c}}\mechanical{p}_1\right),\\
\mechanical{p}_1'
&=\mechanical{\gamma}\left(\mechanical{p}_1-
\frac{\mechanical{v}}{\mechanical{c}^2}\energy{E}\right),\\
\mechanical{\gamma} &= \frac{1}{\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}=\frac54.
\end{aligned}
$$

For the return to $S$, use the inverse boost, $\energy{E}=\mechanical{\gamma}(\energy{E}'+\mechanical{v}\mechanical{p}_x')$, with $\mechanical{p}_x'=-\mechanical{p}'$ for the first pion and $+\mechanical{p}'$ for the second. The handwritten page stops at the boost factor.

Homework 6 lists problems 12-17, 12-20, 12-22, 13-1, 13-2, 13-7, 13-9, and 13-17. Problem 12-17 is underlined separately.

Topics for the Wednesday exam include Lorentz transformations, spacetime, momentum, energy, applications, and transforming energy and momentum.

##### Special relativity review

##### Time dilation

The ratio of coordinate time to proper time is

$$
\frac{\Delta t}{\Delta t_0}=\mechanical{\gamma}
=\frac{1}{\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}
=\frac{1}{\sqrt{1-\mechanical{\beta}^2}}.
$$

The ratio starts at $1$ for $\mechanical{\beta}=0$, reaches $2$ at $\mechanical{\beta}\approx0.87$, and grows without bound as $\mechanical{\beta}\to1$.

##### Length contraction

A meter stick has length $\mechanical{L}=(1\;\unit{m})\sqrt{1-\mechanical{\beta}^2}$. It contracts to $0.5\;\unit{m}$ at $\mechanical{\beta}\approx0.87$. The classical length is constant.

![[Kyle Kabasares - Special Relativity - Time dilation and length contraction curves.png|**Fig. 12** Time dilation increases and the measured length of the meter stick decreases as the speed ratio approaches one.]]

##### Velocity addition and momentum

The speed sketch compares classical $\mechanical{V}_{\mathrm f}=\mechanical{a}\Delta t$ with the relativistic curve, which approaches $\mechanical{c}$ from below as acceleration continues. The momentum sketch contrasts the classical line $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$ with the relativistic momentum, which continues to grow without bound.

![[Kyle Kabasares - Special Relativity - Speed and momentum summary curves.png|**Fig. 13** Continued acceleration brings the speed closer to the speed of light while the momentum continues to grow.]]

The opening sketch plots momentum against time spent speeding up. It shows a single straight line labeled “classical and relativistic agree.” For example, when a constant force acts along the motion, both give a constant rate of change of momentum with time, even though the relations between momentum and speed differ.

The relativistic momentum is $\mechanical{\vec p}=\mechanical{\gamma}\mechanical{m}_0\mechanical{\vec v}$. This section also uses the historical convention of writing a speed-dependent **relativistic mass**, $\mechanical{m}_{\mathrm{rel}}=\mechanical{\gamma}\mechanical{m}_0$, where $\mechanical{m}_0$ is the invariant rest mass. In that convention $\mechanical{\vec p}=\mechanical{m}_{\mathrm{rel}}\mechanical{\vec v}$.

##### Relativistic energy

The total energy and rest energy are

$$
\energy{E}_{\mathrm{tot}}=\mechanical{m}_{\mathrm{rel}}\mechanical{c}^2
=\mechanical{\gamma}\mechanical{m}_0\mechanical{c}^2,\qquad
\energy{E}_0=\mechanical{m}_0\mechanical{c}^2.
$$

For a massive object, $\mechanical{\gamma}$ starts at $1$ and grows without bound as its speed approaches $\mechanical{c}$. A sketch shows an electron and a positron moving toward each other and asks about annihilation.

##### Rest-energy example

An apple of mass $\mechanical{m}_0=0.12\;\unit{kg}$ has rest energy

$$
\energy{E}_0=(0.12\;\unit{kg})(3.0\times10^8\;\unit{m\,s^{-1}})^2
\approx1.1\times10^{16}\;\unit{J}.
$$

The kinetic energy is the total energy minus the rest energy.

$$
\energy{K}=\energy{E}_{\mathrm{tot}}-\energy{E}_0
=\mechanical{\gamma}\mechanical{m}_0\mechanical{c}^2-\mechanical{m}_0\mechanical{c}^2
=(\mechanical{\gamma}-1)\energy{E}_0.
$$

For low speeds, expand the Lorentz factor in the kinetic energy using the binomial series.

$$
\begin{aligned}
\energy{K}
&=\frac{\mechanical{m}_0\mechanical{c}^2}{\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}
-\mechanical{m}_0\mechanical{c}^2\\
&=\mechanical{m}_0\mechanical{c}^2
\left[1+\frac12\frac{\mechanical{v}^2}{\mechanical{c}^2}
+\frac38\frac{\mechanical{v}^4}{\mechanical{c}^4}+\cdots\right]
-\mechanical{m}_0\mechanical{c}^2.
\end{aligned}
$$

The constant terms cancel. The leading term is the classical kinetic energy, $\energy{K}\approx\tfrac12\mechanical{m}_0\mechanical{v}^2$.

##### Understanding spacetime

The first sketch adds time to the three spatial axes. The next sketches reduce the picture to one spatial coordinate $\mechanical{x}$ and a vertical time axis. Future-directed worldlines point toward increasing time. With the time axis scaled as $\mechanical{c}t$, a light ray from the origin makes a $45^\circ$ angle with the spatial axis.

The wedge between the positive spatial axis and the future light ray would require travel faster than light from the origin. The final sketch labels the origin “now,” with the future above and the past below. A marked point outside the future cone cannot be reached from now, and a point outside the past cone could not have sent a signal to arrive here by now.

##### Invariance of the spacetime interval

In the diagram, event $P$ is separated from the origin by $\Delta\mechanical{x}$ and $\Delta t$. An observer moving at speed $\mechanical{v}$ along $x$ measures the separations

$$
\Delta\mechanical{x}'=\mechanical{\gamma}(\Delta\mechanical{x}-\mechanical{v}\Delta t),\qquad
\Delta t'=\mechanical{\gamma}\left(\Delta t-\frac{\mechanical{v}}{\mechanical{c}^2}\Delta\mechanical{x}\right).
$$

This page defines $\mechanical{s}^2$ with a positive time term, the opposite overall sign from the convention on [[Lorentz transformations and spacetime diagram problems#Minkowski spacetime|the section on · Minkowski spacetime]]. Substitute the transformed separations.

$$
\begin{aligned}
(\mechanical{c}\Delta t')^2-(\Delta\mechanical{x}')^2
&=\mechanical{\gamma}^2\left[
\mechanical{c}^2\left(\Delta t-\frac{\mechanical{v}}{\mechanical{c}^2}\Delta\mechanical{x}\right)^2
-(\Delta\mechanical{x}-\mechanical{v}\Delta t)^2\right]\\
&=\mechanical{\gamma}^2\left[(\mechanical{c}^2-\mechanical{v}^2)(\Delta t)^2+
\left(\frac{\mechanical{v}^2}{\mechanical{c}^2}-1\right)(\Delta\mechanical{x})^2\right]\\
&=\mechanical{\gamma}^2\left(1-\frac{\mechanical{v}^2}{\mechanical{c}^2}\right)
\left[(\mechanical{c}\Delta t)^2-(\Delta\mechanical{x})^2\right]\\
&=(\mechanical{c}\Delta t)^2-(\Delta\mechanical{x})^2.
\end{aligned}
$$

The two cross terms cancel and the remaining factor multiplying the interval is $1$. All inertial observers agree on this $\mechanical{s}^2$.

With the time-positive convention $\mechanical{s}^2=(\mechanical{c}t)^2-\mechanical{x}^2$, a positive fixed value of $\mechanical{s}^2$ gives a hyperbola in the spacetime diagram. The sketch shows its upper branch. The $45^\circ$ light rays are its asymptotes.

![[Kyle Kabasares - Special Relativity - Constant interval hyperbola.png|**Fig. 14** Events on the upper branch have the same positive squared interval from the origin.]]

The slope information for the segment from the origin to $P$ gives $\mechanical{v}=\Delta\mechanical{x}/\Delta t$ in one frame and $\mechanical{v}'=\Delta\mechanical{x}'/\Delta t'$ in another. The coordinate separations can differ while the squared interval agrees.

##### Time dilation from the interval

The sketch shows me riding in a vehicle at $10\;\unit{mph}$ and you standing on the ground. For two events on my worldline, I measure elapsed time $t$ and zero displacement in my rest frame. You measure $t'$ and displacement $\mechanical{v}'t'$. Equating our expressions for the invariant interval,

$$
\begin{aligned}
(\mechanical{c}t)^2&=(\mechanical{c}t')^2-(\mechanical{v}'t')^2,\\
t^2&=t'^2\left(1-\frac{\mechanical{v}'^{\,2}}{\mechanical{c}^2}\right),\\
t&=t'\sqrt{1-\frac{\mechanical{v}'^{\,2}}{\mechanical{c}^2}}.
\end{aligned}
$$

Here the prime labels the ground observer's coordinates, following the notebook's choice for this example.

## Source

Kyle Kabasares, *Special Relativity (Physics 126, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed of one inertial frame relative to another. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ and primed forms | $\unit{m}$ | Spatial coordinates | Location of an event in an inertial frame. |
| $t$, $t'$ | $\unit{s}$ | Coordinate times | Time assigned to an event in the two frames. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of the particle. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | The light propagation speed. |
| $\mechanical{\beta}$ | 1 | Speed ratio | Relative speed divided by the speed of light. |
| $\Delta t$, $\Delta t'$ | $\unit{s}$ | Time interval | Difference between event times or clock readings, including the interferometer travel-time difference. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Distance traveled by light in one wave period. |
| $\Delta t_{\mathrm{rest}}$, $\Delta t_0$, $\tau$ | $\unit{s}$ | Proper time interval | Time recorded by the clock present at both events. |
| $\mechanical{\gamma}$ | 1 | Lorentz factor | Factor relating the coordinate interval to the proper interval for inertial motion. |
| $\tau_0$, $\tau$ | $\unit{s}$ | Rest and laboratory lifetimes | Muon lifetime measured in its rest frame and in the laboratory. |
| $\mechanical{d}$, $\mechanical{L}$ | $\unit{m}$ | Distance | Distance traveled in the laboratory or separation of the departure and arrival points. |
| $\mechanical{V}_x$, $\mechanical{V}_y$, $\mechanical{V}_z$ and primed forms | $\unit{m\,s^{-1}}$ | Object velocity components | Velocity of an object along the coordinate axes. |
| $\mechanical{\theta}$, $\mechanical{\theta}'$ | $\unit{rad}$ | Angle | Tilt of a rod or coordinate axis, or angle of a ray relative to the reference axis. |
| $\mechanical{s}^2$ | $\unit{m^2}$ | Squared spacetime interval | Invariant quadratic expression in coordinate separations. |
| $\mechanical{\vec p}$, $\mechanical{p}_{\mathrm{tot}}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Momentum of a particle and the sum over particles. |
| $\mechanical{X}_{\mu}$ | $\unit{m}$ | Four-position | Spacetime position with the time coordinate scaled by the speed of light. |
| $\mechanical{U}_{\mu}$ | $\unit{m\,s^{-1}}$ | Four-velocity | Rate of change of four-position with respect to proper time. |
| $\mechanical{p}_{\mu}$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Product of the mass and four-velocity. |
| $\energy{h}$ | $\unit{J\,s}$ | Planck constant | Relates photon energy to frequency. |
| $\signal{\nu}$, $\signal{\nu}'$ | $\unit{Hz}$ | Photon frequencies | Frequencies before and after scattering. |
| $\mechanical{m}_e$ | $\unit{kg}$ | Electron mass | Rest mass of the electron. |
| $\energy{E}_e$ | $\unit{J}$ | Electron energy | Total relativistic energy of the recoiling electron. |
| $\mechanical{p}_e$ | $\unit{kg\,m\,s^{-1}}$ | Electron momentum magnitude | Magnitude of the recoiling electron's spatial momentum. |
| $\mechanical{\phi}$ | $\unit{rad}$ | Electron recoil angle | Angle of the electron's path below the incident photon direction. |
| $\signal{\lambda}_{\mathrm C}$ | $\unit{m}$ | Electron Compton wavelength | Characteristic wavelength that sets the scale of the scattering shift. |
| $\signal{\hat k}$ | 1 | Propagation direction | Unit vector along the photon momentum. |
| $\mechanical{m}_{K^0}$, $\mechanical{m}_{\pi^0}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Particle masses | Rest masses of the neutral kaon and neutral pion. |
| $\energy{E}$, $\energy{E}'$, $\energy{E}_{\mathrm{tot}}$ | $\unit{J}$ or $\unit{eV}$ | Energy | Time component of four-momentum multiplied by the speed of light. |
| $\mechanical{m}_0$ | $\unit{kg}$ | Rest mass | Invariant mass measured in the rest frame. |
| $\mechanical{m}_{\mathrm{rel}}$ | $\unit{kg}$ | Relativistic mass | Frame-dependent shorthand for the total energy divided by the speed of light squared. |
| $\energy{E}_0$ | $\unit{J}$ or $\unit{eV}$ | Rest energy | Energy of an object at rest. |
| $\energy{K}$ | $\unit{J}$ or $\unit{eV}$ | Kinetic energy | Difference between total energy and rest energy. |
