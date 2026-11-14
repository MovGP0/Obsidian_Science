---
title: "Free, damped, and driven oscillator calculations"
---

> [!TLDR]
> Solve for oscillator motion with damping and sinusoidal forcing, and use initial data to recover the transient response.

## Worked lecture material

##### Review of periodic motion

Expand the restoring force about equilibrium:

$$
\mechanical{F}=-\mechanical{k}_1\mechanical{x}-\mechanical{k}_2\mechanical{x}^2-\cdots.
$$

For small displacement $\mechanical{x}$, keep only the linear term $\mechanical{F}=-\mechanical{k}\mechanical{x}$. Newton's second law becomes

$$
\mechanical{m}\frac{d^2\mechanical{x}}{d\mechanical{t}^2}+\mechanical{k}\mechanical{x}=0.
$$

A solution is

$$
\mechanical{x}(\mechanical{t})=\mechanical{A}\sin(\signal{\omega}\mechanical{t}+\signal{\phi}),
\qquad
\signal{\omega}=\sqrt{\frac{\mechanical{k}}{\mechanical{m}}}.
$$

The system sets the angular frequency $\signal{\omega}$, while the initial conditions set the amplitude $\mechanical{A}$ and the phase constant $\signal{\phi}$. The period and frequency obey $\signal{T}=2\pi/\signal{\omega}=1/\signal{f}$.

![[Kyle Kabasares - Vibrations and Waves - Sinusoidal displacement.png|**Fig. 1** Displacement versus time for simple harmonic motion, with the amplitude marked from equilibrium to a crest.]]

At $\mechanical{t}=0$, the displacement and its time derivative are

$$
\mechanical{x}_0=\mechanical{A}\sin\signal{\phi},
\qquad
\mechanical{v}_0=\mechanical{A}\signal{\omega}\cos\signal{\phi}.
$$

Dividing gives $\tan\signal{\phi}=\signal{\omega}\mechanical{x}_0/\mechanical{v}_0$ when $\mechanical{v}_0\ne0$. The signs in the two initial-condition equations determine the quadrant of $\signal{\phi}$.

Use $\sin\signal{\phi}=\mechanical{x}_0/\mechanical{A}$ and $\cos\signal{\phi}=\mechanical{v}_0/(\mechanical{A}\signal{\omega})$. Squaring and adding gives

$$
\frac{\mechanical{x}_0^2}{\mechanical{A}^2}+
\frac{\mechanical{v}_0^2}{\mechanical{A}^2\signal{\omega}^2}=1,
\qquad
\mechanical{A}=\sqrt{\mechanical{x}_0^2+\frac{\mechanical{v}_0^2}{\signal{\omega}^2}}.
$$

The square root follows from the line immediately above the handwritten box. When both initial values vanish, the mass stays at equilibrium and the phase is arbitrary.

##### Complex variables

The imaginary unit is written $j$, with $j^2=-1$ and $\sqrt{-4}=2j$. A complex number $z=A+jB$, with $A,B$ real, is represented by the point $(A,B)$ in the complex plane.

![[Kyle Kabasares - Vibrations and Waves - Complex plane.png|**Fig. 2** A complex number shown as a vector with real coordinate A and imaginary coordinate B.]]

In polar form, Euler's formula gives

$$
z=Re^{j\theta}=R(\cos\theta+j\sin\theta),\qquad
\operatorname{Re}z=R\cos\theta,\qquad \operatorname{Im}z=R\sin\theta.
$$

Euler's formula gives $e^{j\pi}=-1$, $e^{j\pi/2}=j$, and $e^{j2\pi}=1$. Equality of complex numbers requires equality of both components. For example, $A+jB=3+j8$ gives $A=3$ and $B=8$, while $A+jB=10$ gives $A=10$ and $B=0$.

Replace the real displacement by a complex extension $z$ satisfying $\mechanical{m}\ddot z+\mechanical{k}z=0$. Take $z=\mechanical{A}e^{j(\signal{\omega}\mechanical{t}+\signal{\phi})}$, so that $\dot z=j\signal{\omega}z$ and $\ddot z=-\signal{\omega}^2z$. Substitution gives $(\mechanical{k}-\mechanical{m}\signal{\omega}^2)z=0$. For $\signal{\omega}^2=\mechanical{k}/\mechanical{m}$ the real part is

$$
\mechanical{x}(\mechanical{t})=\operatorname{Re}z
=\mechanical{A}\cos(\signal{\omega}\mechanical{t}+\signal{\phi}).
$$

This uses a cosine phase convention, shifted from the sine convention on [[#Review of periodic motion|the section on Review of periodic motion]].

##### Damped oscillator

With a drag force proportional to velocity, the equation of motion is

$$
\mechanical{m}\frac{d^2\mechanical{x}}{d\mechanical{t}^2}
+\mechanical{b}\frac{d\mechanical{x}}{d\mechanical{t}}
+\mechanical{k}\mechanical{x}=0.
$$

In the oscillatory case the amplitude varies with time while the angular frequency is constant.

![[Kyle Kabasares - Vibrations and Waves - Damped displacement.png|**Fig. 3** The peaks of an oscillatory displacement shrink as the motion is damped.]]

Set $z=\mechanical{A}e^{j(\signal{p}\mechanical{t}+\signal{\alpha})}$ with complex angular frequency $\signal{p}=\signal{\delta}+j\signal{\eta}$. Now $\dot z=j\signal{p}z$ and $\ddot z=-\signal{p}^2z$, giving the characteristic equation

$$
-\mechanical{m}\signal{p}^2+j\mechanical{b}\signal{p}+\mechanical{k}=0.
$$

Define the damping rate $\signal{\gamma}=\mechanical{b}/\mechanical{m}$ and the undamped angular frequency $\signal{\omega}_0=\sqrt{\mechanical{k}/\mechanical{m}}$. In this derivation the components of the complex frequency are written $\signal{s}$ and $\signal{n}$, so $\signal{p}=\signal{s}+j\signal{n}$. Dividing the characteristic equation by $\mechanical{m}$ and separating real and imaginary parts gives

$$
\begin{aligned}
\signal{n}^2-\signal{s}^2-\signal{\gamma}\signal{n}+\signal{\omega}_0^2&=0,\\
\signal{s}(\signal{\gamma}-2\signal{n})&=0.
\end{aligned}
$$

For oscillatory motion $\signal{s}\ne0$, so $\signal{n}=\signal{\gamma}/2$ and $\signal{s}^2=\signal{\omega}_0^2-\signal{\gamma}^2/4$. The latter uses the denominator $4$ from the substitution and from the final expression on the page. Taking the positive frequency gives

$$
\begin{aligned}
z(\mechanical{t})&=\mechanical{A}_0e^{-\signal{\gamma}\mechanical{t}/2}e^{j(\signal{\omega}\mechanical{t}+\signal{\alpha})},\\
\mechanical{x}(\mechanical{t})&=\mechanical{A}_0e^{-\signal{\gamma}\mechanical{t}/2}\cos(\signal{\omega}\mechanical{t}+\signal{\alpha}),\\
\signal{\omega}&=\sqrt{\signal{\omega}_0^2-\signal{\gamma}^2/4}.
\end{aligned}
$$

The amplitude envelope is $\mechanical{A}(\mechanical{t})=\mechanical{A}_0e^{-\mechanical{t}/\signal{\tau}}$, with $\signal{\tau}=2/\signal{\gamma}$. It falls from $\mechanical{A}_0$ to $\mechanical{A}_0/e$ in one time constant. The notes estimate the energy from the amplitude envelope:

$$
\energy{E}_{\mathrm{env}}(\mechanical{t})
=\tfrac12\mechanical{k}\mechanical{A}_0^2e^{-\signal{\gamma}\mechanical{t}}.
$$

This describes the energy decay scale. The instantaneous mechanical energy is $\tfrac12\mechanical{m}\dot{\mechanical{x}}^2+\tfrac12\mechanical{k}\mechanical{x}^2$.

##### Damping

The page is dated January 29, 2014, while the preceding lecture and PDF title give 2015.

For $\signal{\gamma}=\mechanical{b}/\mechanical{m}$, the sign of $\signal{\omega}_0^2-\signal{\gamma}^2/4$ determines the kind of motion.

- **Underdamped.** For $\signal{\gamma}/2<\signal{\omega}_0$, the frequency is real and the motion oscillates inside an exponentially decreasing envelope. With weak damping, $\signal{\omega}_0\gg\signal{\gamma}$ and $\signal{\omega}\simeq\signal{\omega}_0$.

![[Kyle Kabasares - Vibrations and Waves - Underdamped motion.png|**Fig. 4** The displacement oscillates with decreasing amplitude.]]

- **Overdamped.** For $\signal{\gamma}/2>\signal{\omega}_0$, set $\signal{\beta}=\sqrt{\signal{\gamma}^2/4-\signal{\omega}_0^2}$. The characteristic frequencies are imaginary and the two modes decay exponentially:

$$
\mechanical{x}(\mechanical{t})
=C_+e^{-(\signal{\gamma}/2+\signal{\beta})\mechanical{t}}
+C_-e^{-(\signal{\gamma}/2-\signal{\beta})\mechanical{t}}.
$$

The notes write the faster mode, whose time constant is $1/(\signal{\gamma}/2+\signal{\beta})$.

![[Kyle Kabasares - Vibrations and Waves - Overdamped motion.png|**Fig. 5** An example of a nonoscillatory return toward equilibrium.]]

- **Critically damped.** At $\signal{\omega}_0=\signal{\gamma}/2$, the two roots coincide and the oscillation frequency vanishes. The page displays the pure exponential solution with time constant $2/\signal{\gamma}$. Including the second solution for the repeated root gives

$$
\mechanical{x}(\mechanical{t})=(C_1+C_2\mechanical{t})e^{-\signal{\gamma}\mechanical{t}/2}.
$$

##### Resonance without damping

Drive the spring–mass oscillator with $\mechanical{F}_{\mathrm{ext}}=\mechanical{F}_0\cos(\signal{\omega}\mechanical{t})$, where $\signal{\omega}$ is the driving frequency and $\signal{\omega}_0=\sqrt{\mechanical{k}/\mechanical{m}}$ is the natural frequency.

![[Kyle Kabasares - Vibrations and Waves - Driven mass and spring.png|**Fig. 6** A mass attached to a spring fixed at one end.]]

The early response generally contains both frequencies. With damping, the natural-frequency transient decays, leaving the driven steady state. The following undamped calculation gives the particular solution at the driving frequency. Any homogeneous component persists when drag is exactly zero.

Use the complex equation and trial solution

$$
\mechanical{m}\ddot z+\mechanical{k}z=\mechanical{F}_0e^{j\signal{\omega}\mechanical{t}},
\qquad
z=\mechanical{A}e^{j(\signal{\omega}\mechanical{t}+\signal{\alpha})}.
$$

Substituting $\ddot z=-\signal{\omega}^2z$ gives

$$
(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}e^{-j\signal{\alpha}}.
$$

Equating the imaginary parts gives $\sin\signal{\alpha}=0$. For positive drive amplitude and $\signal{\omega}\ne\signal{\omega}_0$,

$$
\mechanical{A}
=\left\lvert\frac{\mechanical{F}_0/\mechanical{m}}{\signal{\omega}_0^2-\signal{\omega}^2}\right\rvert,
\qquad
\signal{\alpha}=\begin{cases}
0,&\signal{\omega}<\signal{\omega}_0,\\
\pi,&\signal{\omega}>\signal{\omega}_0.
\end{cases}
$$

The undamped driven amplitude diverges as the driving frequency approaches $\signal{\omega}_0$. The phase changes from $0$ below resonance to $\pi$ above it. These singular features arise in the limit of zero damping.

![[Kyle Kabasares - Vibrations and Waves - Undamped amplitude and phase.png|**Fig. 7** The steady-state amplitude diverges at the natural frequency and the phase jumps by π across it.]]

##### Response when the force is switched on

The driven term by itself would give $\mechanical{x}(0)=C$, where $C=(\mechanical{F}_0/\mechanical{m})/(\signal{\omega}_0^2-\signal{\omega}^2)$ is the signed coefficient of the cosine. For an oscillator initially at rest at equilibrium, this conflicts with the initial position. Add the free solution to satisfy both initial conditions:

$$
\begin{aligned}
\ddot{\mechanical{x}}_1+\signal{\omega}_0^2\mechanical{x}_1&=0,
&\mechanical{x}_1(\mechanical{t})&=\mechanical{B}\cos(\signal{\omega}_0\mechanical{t}+\signal{\beta}),\\
\ddot{\mechanical{x}}_2+\signal{\omega}_0^2\mechanical{x}_2
&=\frac{\mechanical{F}_0}{\mechanical{m}}\cos(\signal{\omega}\mechanical{t}),
&\mechanical{x}_2(\mechanical{t})&=C\cos(\signal{\omega}\mechanical{t}).
\end{aligned}
$$

The total displacement is $\mechanical{x}_T=\mechanical{x}_1+\mechanical{x}_2$, with $\mechanical{x}_T(0)=0$ and $\dot{\mechanical{x}}_T(0)=0$.

The zero initial velocity gives $-\signal{\omega}_0\mechanical{B}\sin\signal{\beta}=0$. The zero initial displacement gives $C+\mechanical{B}\cos\signal{\beta}=0$, where $C$ is the signed driven coefficient from [[#Response when the force is switched on|the section on Response when the force is switched on]]. Combining them yields

$$
\mechanical{x}_T(\mechanical{t})
=C\left[\cos(\signal{\omega}\mechanical{t})-\cos(\signal{\omega}_0\mechanical{t})\right].
$$

Without damping, both terms persist.

##### Driven oscillator review

The undamped oscillator obeys $\mechanical{m}\ddot{\mechanical{x}}+\mechanical{k}\mechanical{x}=\mechanical{F}_0\cos(\signal{\omega}\mechanical{t})$. The driven response is in phase below resonance and shifted by $\pi$ above resonance if the amplitude is taken positive.

![[Kyle Kabasares - Vibrations and Waves - Undamped resonance review.png|**Fig. 8** The driven amplitude rises toward the natural frequency and falls beyond it.]]

For small $\mechanical{t}$, both $\signal{\omega}\mechanical{t}$ and $\signal{\omega}_0\mechanical{t}$ are small. Use

$$
\cos\theta=1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}+\cdots,\qquad
\sin\theta=\theta-\frac{\theta^3}{3!}+\frac{\theta^5}{5!}+\cdots.
$$

The constant terms in the difference of cosines cancel, leaving the quadratic term as the first nonzero contribution:

$$
\mechanical{x}_T(\mechanical{t})
\simeq C\left[-\frac{(\signal{\omega}\mechanical{t})^2}{2}
+\frac{(\signal{\omega}_0\mechanical{t})^2}{2}\right].
$$

Substitute the driven coefficient into the small-time expansion:

$$
\mechanical{x}_T(\mechanical{t})
\simeq
\frac{\mechanical{F}_0/\mechanical{m}}{\signal{\omega}_0^2-\signal{\omega}^2}
\frac{(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{t}^2}{2}
=\frac{\mechanical{F}_0\mechanical{t}^2}{2\mechanical{m}}.
$$

At first the motion is approximately that of a body accelerating from rest under the initial force $\mechanical{F}_0$.

At longer times, rewrite the difference of cosines using $\cos\theta-\cos\phi=-2\sin[(\theta+\phi)/2]\sin[(\theta-\phi)/2]$:

$$
\mechanical{x}_T(\mechanical{t})
=2C
\sin\left(\frac{\signal{\omega}_0-\signal{\omega}}{2}\mechanical{t}\right)
\sin\left(\frac{\signal{\omega}+\signal{\omega}_0}{2}\mechanical{t}\right).
$$

When the two frequencies are close, the first sine varies slowly and modulates the rapidly oscillating second sine. The resulting amplitude modulation produces beats.

![[Kyle Kabasares - Vibrations and Waves - Slow modulation and beats.png|**Fig. 9** A slowly varying sine and a fast sine produce beats when multiplied.]]

##### Driven oscillator with damping

The equation of motion is

$$
\mechanical{m}\ddot{\mechanical{x}}
+\mechanical{b}\dot{\mechanical{x}}
+\mechanical{k}\mechanical{x}
=\mechanical{F}_0\cos(\signal{\omega}\mechanical{t}).
$$

For the complex extension, use $\ddot z+\signal{\gamma}\dot z+\signal{\omega}_0^2z=(\mechanical{F}_0/\mechanical{m})e^{j\signal{\omega}\mechanical{t}}$. The steady solution has the form $z=\mechanical{A}e^{j(\signal{\omega}\mechanical{t}-\signal{\delta})}$, with $\signal{\delta}$ the phase lag. Since $\ddot z=-\signal{\omega}^2z$, factoring out the common time dependence gives

$$
(\signal{\omega}_0^2-\signal{\omega}^2+j\signal{\gamma}\signal{\omega})\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}e^{j\signal{\delta}}.
$$

Equate real and imaginary parts:

$$
(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}\cos\signal{\delta},
\qquad
\signal{\gamma}\signal{\omega}\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}\sin\signal{\delta}.
$$

Squaring and adding yields

$$
\mechanical{A}(\signal{\omega})
=
\frac{\mechanical{F}_0/\mechanical{m}}{\sqrt{(\signal{\omega}_0^2-\signal{\omega}^2)^2+\signal{\gamma}^2\signal{\omega}^2}}.
$$

The minus sign on $\signal{\omega}^2$ follows from the second derivative and agrees with the boxed result. To find a positive driving frequency that maximizes the amplitude, set $d\mechanical{A}/d\signal{\omega}=0$.

Dividing the two amplitude equations gives

$$
\tan\signal{\delta}
=\frac{\signal{\gamma}\signal{\omega}}{\signal{\omega}_0^2-\signal{\omega}^2}.
$$

For positive damping the lag grows from $0$ toward $\pi$ as the drive frequency increases. At $\signal{\omega}=\signal{\omega}_0$, the lag is $\pi/2$ and the amplitude is $(\mechanical{F}_0/\mechanical{m})/(\signal{\gamma}\signal{\omega}_0)$. The positive frequency that maximizes the amplitude, when $\signal{\gamma}^2<2\signal{\omega}_0^2$, is

$$
\signal{\omega}_m=\sqrt{\signal{\omega}_0^2-\frac{\signal{\gamma}^2}{2}}.
$$

![[Kyle Kabasares - Vibrations and Waves - Damped amplitude and phase.png|**Fig. 10** The amplitude peaks below the undamped natural frequency, while the phase lag passes through π/2 at the natural frequency.]]

##### Transient and driven terms

Compare the undamped response, with a persistent free term, to the underdamped response

$$
\mechanical{x}(\mechanical{t})
=\mechanical{B}e^{-\signal{\gamma}\mechanical{t}/2}
\cos(\signal{\omega}_1\mechanical{t}+\signal{\alpha})
+\mechanical{A}\cos(\signal{\omega}\mechanical{t}-\signal{\delta}),
\qquad
\signal{\omega}_1=\sqrt{\signal{\omega}_0^2-\frac{\signal{\gamma}^2}{4}}.
$$

For weak damping, $\signal{\omega}_1\simeq\signal{\omega}_0$. Set the drive to $\signal{\omega}=\signal{\omega}_0$ so that the driven term is $\mechanical{A}\sin(\signal{\omega}_0\mechanical{t})$. This fixes the sign of the phase shift from the cosine convention on the same page. For zero initial position and velocity, the initial position equation is $\mechanical{B}\cos\signal{\alpha}=0$. Take $\signal{\alpha}=\pi/2$ and use the velocity to determine $\mechanical{B}$.

A margin note gives the wave-speed relation $\mechanical{c}=\signal{\lambda}\signal{f}$, with wavelength $\signal{\lambda}=\mechanical{c}/\signal{f}$, and records a speed of $4\,\unit{m\,s^{-1}}$.

Returning to the weakly damped oscillator driven at $\signal{\omega}_0$, differentiate the free and driven terms at $\mechanical{t}=0$:

$$
\mechanical{v}(0)
=-\frac{\signal{\gamma}}{2}\mechanical{B}\cos\signal{\alpha}
-\signal{\omega}_0\mechanical{B}\sin\signal{\alpha}
+\signal{\omega}_0\mechanical{A}=0.
$$

With $\signal{\alpha}=\pi/2$, this yields $\mechanical{B}=\mechanical{A}$ in the approximation $\signal{\omega}_1\simeq\signal{\omega}_0$. The response grows toward its steady amplitude:

$$
\mechanical{x}(\mechanical{t})
\simeq\mechanical{A}\sin(\signal{\omega}_0\mechanical{t})
\left(1-e^{-\signal{\gamma}\mechanical{t}/2}\right).
$$

![[Kyle Kabasares - Vibrations and Waves - Resonant buildup.png|**Fig. 11** A driven oscillation builds up after the force is switched on.]]

##### Oscillator relations

For $\mechanical{x}=\mechanical{A}\cos(2\pi\mechanical{t}/\signal{T})$, the phase is $\signal{\phi}=\signal{\omega}\mechanical{t}$ and $\signal{\omega}=d\signal{\phi}/d\mechanical{t}=2\pi\signal{f}=2\pi/\signal{T}$. For a spring–mass oscillator,

$$
\signal{\omega}=\sqrt{\frac{\mechanical{k}}{\mechanical{m}}},
\qquad
\signal{f}=\frac{1}{2\pi}\sqrt{\frac{\mechanical{k}}{\mechanical{m}}},
\qquad
\signal{T}=2\pi\sqrt{\frac{\mechanical{m}}{\mechanical{k}}}.
$$

The maximum speed is $\mechanical{v}_{\max}=\signal{\omega}\mechanical{A}=2\pi\signal{f}\mechanical{A}=2\pi\mechanical{A}/\signal{T}$. At $\mechanical{x}=\pm\mechanical{A}$, the energy is entirely elastic potential energy, $\energy{E}=\energy{U}=\tfrac12\mechanical{k}\mechanical{A}^2$.

For a spring, the force-to-displacement ratio gives the stiffness in $\unit{N\,m^{-1}}$. The signed acceleration relative to equilibrium is $\mechanical{a}_x=-(\mechanical{k}/\mechanical{m})\mechanical{x}$. The wavelength $\signal{\lambda}$ is measured in metres.

A mass hanging at rest from a vertical spring stretches it by $\Delta\mechanical{L}=\mechanical{m}\mechanical{g}/\mechanical{k}$.

![[Kyle Kabasares - Vibrations and Waves - Vertical spring extension.png|**Fig. 12** The unloaded spring and the spring extended by a hanging mass.]]

For a simple pendulum of length $\mechanical{L}$ at small angles,

$$
\signal{\omega}=\sqrt{\frac{\mechanical{g}}{\mechanical{L}}},
\qquad
\signal{T}=2\pi\sqrt{\frac{\mechanical{L}}{\mechanical{g}}}.
$$

## Source

Kyle Kabasares, *Vibrations and Waves (Physics 122, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Restoring force | Force that vanishes at equilibrium. |
| $\mechanical{k}_2$ | $\unit{N\,m^{-2}}$ | Quadratic force coefficient | Coefficient of the squared displacement in the expansion of the restoring force. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial parameter in the equation of motion. |
| $\mechanical{t}$ | $\unit{s}$ | Time | Independent variable for the motion. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of phase accumulation. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase constant | Phase at the initial time. |
| $\mechanical{v}_0$ | $\unit{m\,s^{-1}}$ | Initial velocity | Time derivative of the displacement at the initial time. |
| $\mechanical{b}$ | $\unit{kg\,s^{-1}}$ | Damping coefficient | Proportionality constant between drag and velocity. |
| $\signal{\gamma}$ | $\unit{s^{-1}}$ | Damping rate | Ratio of the velocity drag coefficient to mass. |
| $\signal{\tau}$ | $\unit{s}$ | Amplitude decay time | Time for the envelope to fall by a factor of $e$. |
| $\signal{\omega}_0$ | $\unit{rad\,s^{-1}}$ | Undamped natural angular frequency | Angular frequency in the absence of drag. |
| $\energy{E}_{\mathrm{env}}$ | $\unit{J}$ | Energy scale from the amplitude envelope | Proportional to the square of the displacement envelope. |
| $\signal{\beta}$ | $\unit{s^{-1}}$ | Overdamped rate offset | Difference between either exponential decay rate and the critical rate $\signal{\gamma}/2$ in magnitude. |
| $\signal{\alpha}$ | $\unit{rad}$ | Response phase | Phase of the displacement relative to the driving cosine. |
| $\signal{\delta}$ | $\unit{rad}$ | Phase lag | Angle by which the steady displacement lags the applied force. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Wave speed | Product of wavelength and frequency. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{b}$ | $\unit{m}$ | Pulse height and half-width | Peak displacement and distance from the peak to a half-height point in this example. |
| $d$ | $\unit{m^4\,s^{-2}}$ | String dispersion coefficient | Multiplies the squared angular wave number in the phase speed squared. |
| $\mechanical{x},\mechanical{x}_0,\mechanical{A}$ | $\unit{m}$ | Displacement, initial displacement, and amplitude | Position relative to equilibrium and maximum magnitude of displacement. |
| $\mechanical{k},\mechanical{k}_1$ | $\unit{N\,m^{-1}}$ | Linear stiffness | Coefficient of the first-order restoring force. |
| $\signal{T},\signal{f}$ | $\unit{s}$, $\unit{Hz}$ | Period and frequency | Duration of one cycle and number of cycles per unit time. |
| $\signal{p},\signal{\delta},\signal{\eta}$ | $\unit{s^{-1}}$ | Complex angular frequency and its components | The real component produces oscillation and the imaginary component produces exponential decay under the chosen sign convention. |
| $\mechanical{F}_{\mathrm{ext}},\mechanical{F}_0$ | $\unit{N}$ | Driving force and force amplitude | Applied periodic force and its peak magnitude. |
| $\signal{\omega}_m,\signal{\omega}_1$ | $\unit{rad\,s^{-1}}$ | Peak-response and damped free frequencies | Frequency maximizing displacement amplitude and frequency of the decaying free oscillation. |
| $\mechanical{v},\mechanical{v}_{\max}$ | $\unit{m\,s^{-1}}$ | Particle velocity and maximum speed | Time derivative of the displacement and its peak magnitude. |
| $\energy{E},\energy{U}$ | $\unit{J}$ | Mechanical and elastic potential energy | The energies coincide at an undamped oscillator's turning point. |
| $\mechanical{a}_x,\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Acceleration and gravitational acceleration | Oscillator acceleration along the displacement axis and magnitude of local gravitational acceleration. |
| $\mechanical{L},\Delta\mechanical{L}$ | $\unit{m}$ | Pendulum length and spring extension | Length setting the pendulum frequency and the static extension due to a hanging mass. |
| $\energy{E}_n,\energy{K}$ | $\unit{J}$ | Mode energy and kinetic energy | Total vibration energy of a normal mode and its instantaneous kinetic contribution. |
| $\mechanical{A}_n,\mechanical{B}_n$ | $\unit{m}$ | Mode amplitude and snapshot coefficient | Maximum displacement scale of the mode and its signed coefficient at the chosen time. |
| $\mechanical{v}_p,\mechanical{v}_g$ | $\unit{m\,s^{-1}}$ | Phase and group velocities | Speeds of the carrier phase and narrow-band envelope. |
| $\mechanical{\theta}_i,\mechanical{\theta}_r$ | $\unit{rad}$ | Incidence and refraction angles | Ray angles measured from the interface normal. |
| $\mechanical{v}_s,\mechanical{v}_o$ | $\unit{m\,s^{-1}}$ | Source and observer speeds | Speeds relative to the medium, taken toward the other party in the collinear examples. |
| $\mechanical{k},\mechanical{\rho}$ | $\unit{Pa}$, $\unit{kg\,m^{-3}}$ | Bulk modulus and mass density | Elastic and inertial parameters setting the speed of sound in a gas. |
| $d\energy{K}/d\mechanical{x},d\energy{U}/d\mechanical{x}$ | $\unit{J\,m^{-1}}$ | Linear energy densities | Kinetic and elastic potential energy per unit string length. |
| $R,T$ | 1 | Reflection and transmission amplitude coefficients | Signed displacement factors for an incident pulse at a junction. |
