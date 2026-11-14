---
title: "Mechanical oscillation and traveling-wave problems"
---

> [!TLDR]
> Connect harmonic and damped motion to ideal traveling waves, intensity, and the acoustic Doppler shift.

## Worked lecture material

2. For the solid disk pulley, $\tau_{\mathrm{net}}=RT_1-RT_2=-I\alpha$. Since $I=\tfrac12MR^2$ and $\alpha=a/R$,

$$
RT_1-RT_2=-\left(\tfrac12MR^2\right)\frac aR.
$$

![[Kyle Kabasares - Newtonian Mechanics - Exam Review Pulley Torque.png|**Fig. 185** The tensions, weight, and reaction on the pulley.]]

3. Find the center of mass of a rod with $\lambda=\mathrm{d}m/\mathrm{d}x=bx^2$ from $0$ to $L$. The page also recalls $I=\int r^2\,\mathrm{d}m$, which becomes $\int x^2\,\mathrm{d}m$ for this rod about its end.

![[Kyle Kabasares - Newtonian Mechanics - Rod with Quadratic Density.png|**Fig. 186** A mass element at distance x from the end.]]

$$
x_{\mathrm{CM}}=\frac bM\int_0^L x^3\,\mathrm{d}x=\frac{bL^4}{4M},
\qquad
M=b\int_0^L x^2\,\mathrm{d}x=\frac{bL^3}{3}.
$$

Substitute the mass to get $x_{\mathrm{CM}}=3L/4$.

##### ) — Oscillatory motion

Periodic motion repeats its features. The waveform can have a shape other than a sine or cosine. The period $T$ is the time for one oscillation and the frequency $f=1/T$ is the number of oscillations per second. Frequency is measured in hertz, $\unit{Hz}=\unit{s^{-1}}$. The amplitude $A$ measures the maximum deviation of the plotted quantity from its central value. The plotted quantity may be position, velocity, or acceleration.

![[Kyle Kabasares - Newtonian Mechanics - Period and Amplitude of an Oscillation.png|**Fig. 187** A repeating waveform marked with amplitude and period.]]

For the stated hearing range $20$–$20{,}000\,\unit{Hz}$, the periods at the low and high ends are $5\times10^{-2}\,\unit{s}$ and $5\times10^{-5}\,\unit{s}$, respectively. The handwritten periods have hertz labels and the minimum and maximum period labels are exchanged.

##### Simple harmonic motion

A restoring force proportional to displacement from equilibrium gives simple harmonic motion. Hooke's law, $F=-kx$, is an example.

##### Mass–spring differential equation

Attach a spring to a block on a frictionless surface and let it oscillate.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal Mass Spring Oscillator.png|**Fig. 188** A block oscillates horizontally on a spring.]]

Hooke's law gives $F=-kx$ and Newton's second law gives $F=ma$. Since $a=\mathrm{d}v/\mathrm{d}t=\mathrm{d}^2x/\mathrm{d}t^2$,

$$
m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}+kx=0.
$$

An algebraic equation such as $x^2-x=0$ has the numbers $0$ and $1$ as solutions. The differential equation instead determines a function $x(t)$ giving the block's displacement from equilibrium at any time. Try $x=A\cos(\omega t)$, with amplitude $A$ and angular frequency $\omega$. Then

$$
\frac{\mathrm{d}x}{\mathrm{d}t}=-\omega A\sin(\omega t),
\qquad
\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=-\omega^2 A\cos(\omega t).
$$

Substitution gives $(k-m\omega^2)A\cos(\omega t)=0$. The cosine vanishes at some times, such as $\omega t=\pi/2$ and $3\pi/2$. For a nonzero-amplitude solution at all times, set $k-m\omega^2=0$.

$$
\omega=\sqrt{\frac km},\qquad
T=\frac{2\pi}{\omega}=\frac1f=2\pi\sqrt{\frac mk}.
$$

The ideal linear spring's period is independent of amplitude. Many systems obey $F=-kx$ only approximately at small amplitudes. Sine and cosine with any phase also solve the equation.

##### Phase of simple harmonic motion

The expression $x=A\cos(\omega t\pm\phi)$ also solves the oscillator equation. The phase constant is measured in radians. A negative phase in the cosine argument shifts the graph to the right.

![[Kyle Kabasares - Newtonian Mechanics - Phase Shift of a Cosine.png|**Fig. 189** Two cosine curves with different phase constants.]]

##### Velocity and acceleration

For $x=A\cos(\omega t)$,

$$
v=\frac{\mathrm{d}x}{\mathrm{d}t}=-\omega A\sin(\omega t),
\qquad
a=\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=-\omega^2 A\cos(\omega t).
$$

At equilibrium $a=0$ and the speed is $\omega A$. At either turning point $v=0$ and the acceleration magnitude is $\omega^2A$. A phase-shifted position graph with positive initial slope has positive initial velocity.

![[Kyle Kabasares - Newtonian Mechanics - Position Velocity and Acceleration of Oscillator.png|**Fig. 190** Time traces for displacement, velocity, and acceleration.]]

##### Torsional oscillation

The rotational counterpart of Hooke's law is $\tau=-k\theta$, with $k$ here the torsion constant. Since $\tau=I\alpha$,

$$
I\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}=-k\theta,
\qquad
\omega=\sqrt{\frac{k}{I}},
\qquad
\theta=A\cos(\omega t).
$$

![[Kyle Kabasares - Newtonian Mechanics - Torsional Oscillator Sketch.png|**Fig. 191** Angular displacement of a suspended disk.]]

##### Physical pendulum

Any rigid body that swings about a pivot can act as a physical pendulum. Let $L$ be the distance from the pivot to the center of mass. The pivot force has zero moment arm and gravity provides the restoring torque.

![[Kyle Kabasares - Newtonian Mechanics - Physical Pendulum and Gravity Torque.png|**Fig. 192** Pivot, center of mass, and the component of weight that contributes torque.]]

$$
\tau=-mgL\sin\theta=I\alpha,
\qquad
I\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}=-mgL\sin\theta.
$$

The Taylor expansion is $\sin\theta=\theta-\theta^3/3!+\cdots$. For small angles in radians, $\sin\theta\approx\theta\approx\tan\theta$. The approximate equation is $I\ddot\theta=-mgL\theta$, so $\theta=A\cos(\omega t)$ for release from rest, with $\omega=\sqrt{mgL/I}$ and $I$ taken about the pivot.

##### Solid sphere as a pendulum

A sphere of mass $M$ and radius $R$ swings with its center at distance $L$ from the pivot. Assume $R=L/2$.

![[Kyle Kabasares - Newtonian Mechanics - Solid Sphere on a Pendulum Arm.png|**Fig. 193** The sphere's center lies a distance L from the pivot.]]

$$
I=I_{\mathrm{CM}}+ML^2=\tfrac25M(L/2)^2+ML^2=\tfrac{11}{10}ML^2.
$$

$$
\omega=\sqrt{\frac{10g}{11L}},\qquad
T_{\mathrm{sphere}}=2\pi\sqrt{\frac{11L}{10g}},
\qquad
T_{\mathrm{point}}=2\pi\sqrt{\frac Lg}.
$$

##### ) — Energy of a mass–spring oscillator

Use $x=A\cos(\omega t)$, $v=-\omega A\sin(\omega t)$, and $\omega^2=k/m$.

$$
\begin{aligned}
U&=\tfrac12kx^2=\tfrac12kA^2\cos^2(\omega t),\\
K&=\tfrac12mv^2=\tfrac12m\omega^2A^2\sin^2(\omega t)=\tfrac12kA^2\sin^2(\omega t),\\
E_{\mathrm{tot}}&=K+U=\tfrac12kA^2=\mathrm{constant}.
\end{aligned}
$$

At displacement $x$, $\tfrac12mv^2+\tfrac12kx^2=\tfrac12kA^2$. The signed velocity is

$$
v=\pm\sqrt{\frac{k}{m}(A^2-x^2)}
=\pm\omega\sqrt{A^2-x^2}.
$$

The last handwritten expression uses $\omega$ instead of $\omega^2$ inside the root.

Give the block initial velocity $v_i$ at the spring's equilibrium position and find the amplitude. The initial energy is entirely kinetic, $E_{\mathrm{tot}}=\tfrac12mv_i^2$, and at the turning point it is $\tfrac12kA^2$.

![[Kyle Kabasares - Newtonian Mechanics - Initial Velocity at Spring Equilibrium.png|**Fig. 194** The block receives a rightward initial velocity at equilibrium.]]

##### Vertical simple harmonic oscillator

Gently lower a mass onto a hanging spring. The equilibrium shifts downward by $d$. The vertical system has the same frequency as the horizontal system with the same mass and spring constant.

![[Kyle Kabasares - Newtonian Mechanics - Shifted Equilibrium of Vertical Spring.png|**Fig. 195** Unloaded spring and loaded spring with equilibrium shifted downward.]]

##### Damped harmonic motion

Include a resistive force proportional to velocity, $F_d=-bv$, where $b$ is the damping coefficient and the minus sign indicates opposition to motion.

$$
m\ddot x=-kx\quad\text{without damping},
\qquad
m\ddot x=-kx-b\dot x\quad\text{with damping}.
$$

For an underdamped oscillator, one solution is $x=Ae^{-bt/(2m)}\cos(\omega_d t)$. The exponential is the envelope factor, and $A$ is the envelope amplitude at $t=0$.

![[Kyle Kabasares - Newtonian Mechanics - Three Damping Regimes.png|**Fig. 196** Underdamped (a), critically damped (b), and overdamped (c) responses.]]

For weak damping, the damped angular frequency, frequency, and period are close to the undamped values, and the amplitude decreases exponentially. The notes describe critical and overdamping by comparing the damping and spring forces. The regime boundaries in this model instead follow from $b^2-4mk$, with negative, zero, and positive values corresponding to underdamping, critical damping, and overdamping.

##### Time for the amplitude to reach 37 percent

Use the envelope to find when the amplitude is $1/e\approx0.37$ of its original value:

$$
Ae^{-bt/(2m)}=\frac A e,\qquad
\frac{bt}{2m}=1,\qquad t=\frac{2m}{b}.
$$

##### ) — Wave motion

The amplitude is $A$, the wavelength $\lambda$ is the distance between successive points in the same phase, and $v$ is the propagation speed. Water, sound, and light are examples of traveling waves.

![[Kyle Kabasares - Newtonian Mechanics - Wavelength and Amplitude.png|**Fig. 197** One full wavelength marked on the waveform.]]

Transverse waves include light and waves on a string. Longitudinal waves include sound and compression waves on a spring. Their maxima and minima in density are compressions and rarefactions. Water surface waves exhibit both transverse and longitudinal motion. The sketch uses “node” for a zero crossing and “antinodes” for extrema. These terms describe fixed locations in a standing wave.

![[Kyle Kabasares - Newtonian Mechanics - Transverse and Longitudinal Waves.png|**Fig. 198** Transverse wave profile and longitudinal compressions and rarefactions.]]

##### One-dimensional traveling waves

At constant speed $v$, a pulse moves a distance $vt$ in time $t$.

![[Kyle Kabasares - Newtonian Mechanics - Traveling Pulse at Two Times.png|**Fig. 199** The pulse at zero time and after moving to the right.]]

$$
\frac{\partial^2 y}{\partial x^2}=\frac1{v^2}\frac{\partial^2 y}{\partial t^2}.
$$

The right-moving and left-moving forms are $y=f(x-vt)$ and $y=f(x+vt)$, respectively. A sum of one wave of each form is also a solution.

##### Speed of a wave on a string

For tension $F$ and linear mass density $\mu$, $v=\sqrt{F/\mu}$. A $10\,\unit{kg}$ mass hangs from a $1\,\unit{m}$ rope of mass $0.2\,\unit{kg}$. Pluck the rope. Using $\mu=0.2\,\unit{kg/m}$ and approximating $F$ by the weight of the hanging mass gives $v=\sqrt{mg/\mu}\approx22\,\unit{m/s}$.

##### Traveling waves

The speed is $v=f\lambda$. Wavelength is measured in meters and frequency in hertz. For a sinusoidal wave,

$$
y(x,t)=A\cos(kx\pm\omega t),\qquad
k=\frac{2\pi}{\lambda},\qquad v=\frac{\omega}{k}.
$$

Here $k$ is the wave number in $\unit{m^{-1}}$ and $\omega$ is angular frequency.

Three ocean wave crests span $17\,\unit{s}$ from first to third, and the distance between crests is about $20\,\unit{m}$. Two periods fit in the interval, so $T=8.5\,\unit{s}$, $f\approx0.118\,\unit{Hz}$, and $v=f\lambda\approx2.35\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Three Ocean Wave Crests.png|**Fig. 200** The time between the first and third crests spans two periods.]]

For $A=0.75\,\unit{m}$, $k=2\pi/(20\,\unit{m})\approx0.314\,\unit{m^{-1}}$ and $\omega=2\pi f\approx0.74\,\unit{s^{-1}}$. For rightward propagation, $y=0.75\cos(0.314x-0.74t)$ with values in SI units.

##### Intensity of spherical waves

A source that radiates sound or light uniformly in all directions gives

$$
\signal{I}=\frac{\energy{P}}{4\pi r^2}.
$$

Intensity decreases with distance $r$ and is measured in watts per square meter.

##### Doppler shift

A moving sound source such as a fire truck can be heard at a shifted frequency. The emitted frequency is $f$ and the observed frequency is $f'$.

$$
f'=f\frac{v\pm v_o}{v\mp v_s}.
$$

Here $v$ is the sound speed, taken as $343\,\unit{m/s}$, and $v_o,v_s$ are observer and source speeds relative to the medium. Choose the numerator plus sign when the observer moves toward the source and the denominator minus sign when the source moves toward the observer.

![[Kyle Kabasares - Newtonian Mechanics - Stationary and Moving Sound Source.png|**Fig. 201** Waves arriving at an observer from stationary and approaching sources.]]

## Source

Kyle Kabasares, *Newtonian Mechanics (Physics 8, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{P}$ | $\unit{W}$ | Power | Work done per unit time. |
| $\signal{I}$ | $\unit{W/m^2}$ | Wave intensity | Power transmitted per unit area. |
