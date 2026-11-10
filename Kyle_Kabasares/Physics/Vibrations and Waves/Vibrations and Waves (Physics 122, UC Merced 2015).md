---
title: "Vibrations and Waves (Physics 122, UC Merced 2015)"
---

> [!TLDR]
> These notes develop free, damped, and driven oscillations, then derive string modes and analyze wave profiles with Fourier series. The wave examples cover reflection, transmission, dispersion, refraction, and the Doppler effect.

Source notes by Kyle Kabasares. [[Vibrations and Waves (Physics 122, UC Merced 2015).pdf|Original PDF]].

Transcribed PDF pages 1–84 of 84.

### PDF page 1

#### January 27, 2015 — review of periodic motion

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

### PDF page 2

Use $\sin\signal{\phi}=\mechanical{x}_0/\mechanical{A}$ and $\cos\signal{\phi}=\mechanical{v}_0/(\mechanical{A}\signal{\omega})$. Squaring and adding gives

$$
\frac{\mechanical{x}_0^2}{\mechanical{A}^2}+
\frac{\mechanical{v}_0^2}{\mechanical{A}^2\signal{\omega}^2}=1,
\qquad
\mechanical{A}=\sqrt{\mechanical{x}_0^2+\frac{\mechanical{v}_0^2}{\signal{\omega}^2}}.
$$

The square root follows from the line immediately above the handwritten box. When both initial values vanish, the mass stays at equilibrium and the phase is arbitrary.

#### Complex variables

The imaginary unit is written $j$, with $j^2=-1$ and $\sqrt{-4}=2j$. A complex number $z=A+jB$, with $A,B$ real, is represented by the point $(A,B)$ in the complex plane.

![[Kyle Kabasares - Vibrations and Waves - Complex plane.png|**Fig. 2** A complex number shown as a vector with real coordinate A and imaginary coordinate B.]]

In polar form, Euler's formula gives

$$
z=Re^{j\theta}=R(\cos\theta+j\sin\theta),\qquad
\operatorname{Re}z=R\cos\theta,\qquad \operatorname{Im}z=R\sin\theta.
$$

### PDF page 3

Euler's formula gives $e^{j\pi}=-1$, $e^{j\pi/2}=j$, and $e^{j2\pi}=1$. Equality of complex numbers requires equality of both components. For example, $A+jB=3+j8$ gives $A=3$ and $B=8$, while $A+jB=10$ gives $A=10$ and $B=0$.

Replace the real displacement by a complex extension $z$ satisfying $\mechanical{m}\ddot z+\mechanical{k}z=0$. Take $z=\mechanical{A}e^{j(\signal{\omega}\mechanical{t}+\signal{\phi})}$, so that $\dot z=j\signal{\omega}z$ and $\ddot z=-\signal{\omega}^2z$. Substitution gives $(\mechanical{k}-\mechanical{m}\signal{\omega}^2)z=0$. For $\signal{\omega}^2=\mechanical{k}/\mechanical{m}$ the real part is

$$
\mechanical{x}(\mechanical{t})=\operatorname{Re}z
=\mechanical{A}\cos(\signal{\omega}\mechanical{t}+\signal{\phi}).
$$

This uses a cosine phase convention, shifted from the sine convention on page 1.

#### Damped oscillator

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

### PDF page 4

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

### PDF page 5

#### January 29 lecture on damping

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

### PDF page 6

#### Resonance without damping

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

### PDF page 7

The undamped driven amplitude diverges as the driving frequency approaches $\signal{\omega}_0$. The phase changes from $0$ below resonance to $\pi$ above it. These singular features arise in the limit of zero damping.

![[Kyle Kabasares - Vibrations and Waves - Undamped amplitude and phase.png|**Fig. 7** The steady-state amplitude diverges at the natural frequency and the phase jumps by π across it.]]

#### Response when the force is switched on

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

### PDF page 8

The zero initial velocity gives $-\signal{\omega}_0\mechanical{B}\sin\signal{\beta}=0$. The zero initial displacement gives $C+\mechanical{B}\cos\signal{\beta}=0$, where $C$ is the signed driven coefficient from page 7. Combining them yields

$$
\mechanical{x}_T(\mechanical{t})
=C\left[\cos(\signal{\omega}\mechanical{t})-\cos(\signal{\omega}_0\mechanical{t})\right].
$$

Without damping, both terms persist.

#### February 3, 2015 — driven oscillator review

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

### PDF page 9

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

### PDF page 10

#### Driven oscillator with damping

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

### PDF page 11

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

#### Transient and driven terms

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

### PDF page 12

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

#### February 4, 2015 — oscillator relations

For $\mechanical{x}=\mechanical{A}\cos(2\pi\mechanical{t}/\signal{T})$, the phase is $\signal{\phi}=\signal{\omega}\mechanical{t}$ and $\signal{\omega}=d\signal{\phi}/d\mechanical{t}=2\pi\signal{f}=2\pi/\signal{T}$. For a spring–mass oscillator,

$$
\signal{\omega}=\sqrt{\frac{\mechanical{k}}{\mechanical{m}}},
\qquad
\signal{f}=\frac{1}{2\pi}\sqrt{\frac{\mechanical{k}}{\mechanical{m}}},
\qquad
\signal{T}=2\pi\sqrt{\frac{\mechanical{m}}{\mechanical{k}}}.
$$

The maximum speed is $\mechanical{v}_{\max}=\signal{\omega}\mechanical{A}=2\pi\signal{f}\mechanical{A}=2\pi\mechanical{A}/\signal{T}$. At $\mechanical{x}=\pm\mechanical{A}$, the energy is entirely elastic potential energy, $\energy{E}=\energy{U}=\tfrac12\mechanical{k}\mechanical{A}^2$.

### PDF page 13

For a spring, the force-to-displacement ratio gives the stiffness in $\unit{N\,m^{-1}}$. The signed acceleration relative to equilibrium is $\mechanical{a}_x=-(\mechanical{k}/\mechanical{m})\mechanical{x}$. The wavelength $\signal{\lambda}$ is measured in metres.

A mass hanging at rest from a vertical spring stretches it by $\Delta\mechanical{L}=\mechanical{m}\mechanical{g}/\mechanical{k}$.

![[Kyle Kabasares - Vibrations and Waves - Vertical spring extension.png|**Fig. 12** The unloaded spring and the spring extended by a hanging mass.]]

For a simple pendulum of length $\mechanical{L}$ at small angles,

$$
\signal{\omega}=\sqrt{\frac{\mechanical{g}}{\mechanical{L}}},
\qquad
\signal{T}=2\pi\sqrt{\frac{\mechanical{L}}{\mechanical{g}}}.
$$

### PDF page 14

#### February 5 lecture — continuous systems

The date on the page reads February 5, 2014. The string has fixed ends at $\mechanical{x}=0$ and $\mechanical{x}=\mechanical{L}$. Its transverse displacement is $\mechanical{y}(\mechanical{x},\mechanical{t})$. Standing waves have fixed nodes at the endpoints, and each allowed frequency corresponds to a normal mode. In this transverse model $\mechanical{v}_x=0$ and $\mechanical{v}_y=\partial\mechanical{y}/\partial\mechanical{t}$.

![[Kyle Kabasares - Vibrations and Waves - String with fixed endpoints.png|**Fig. 13** A string fixed at both endpoints oscillates transversely about its equilibrium position.]]

Let $\mechanical{\mu}$ be the mass per unit length and $\mechanical{T}$ the tension. Consider a short segment from $\mechanical{x}$ to $\mechanical{x}+\Delta\mechanical{x}$, with slopes corresponding to the angles $\mechanical{\theta}$ and $\mechanical{\theta}+\Delta\mechanical{\theta}$.

![[Kyle Kabasares - Vibrations and Waves - Forces on a string segment.png|**Fig. 14** The forces of tension act along the tangents at the two ends of the segment.]]

To first order in the angles, the horizontal components cancel and the vertical components give

$$
\begin{aligned}
\mechanical{F}_x&=\mechanical{T}\cos(\mechanical{\theta}+\Delta\mechanical{\theta})-\mechanical{T}\cos\mechanical{\theta}\simeq0,\\
\mechanical{F}_y&=\mechanical{T}\sin(\mechanical{\theta}+\Delta\mechanical{\theta})-\mechanical{T}\sin\mechanical{\theta}
\simeq\mechanical{T}\Delta\mechanical{\theta}.
\end{aligned}
$$

Newton's second law gives $\mechanical{T}\Delta\mechanical{\theta}=(\mechanical{\mu}\Delta\mechanical{x})\partial^2\mechanical{y}/\partial\mechanical{t}^2$. The slope also satisfies

$$
\tan\mechanical{\theta}=\frac{\partial\mechanical{y}}{\partial\mechanical{x}},
\qquad
\sec^2\mechanical{\theta}\frac{\partial\mechanical{\theta}}{\partial\mechanical{x}}
=\frac{\partial^2\mechanical{y}}{\partial\mechanical{x}^2}.
$$

For small angles, $\sec^2\mechanical{\theta}\simeq1$.

### PDF page 15

Divide the segment equation by $\Delta\mechanical{x}$ and use the slope relation from page 14. At leading order, $\cos^2\mechanical{\theta}\simeq1$ and

$$
\mechanical{T}\frac{\partial^2\mechanical{y}}{\partial\mechanical{x}^2}
=\mechanical{\mu}\frac{\partial^2\mechanical{y}}{\partial\mechanical{t}^2}.
$$

For a uniform string of mass $\mechanical{m}$ and length $\mechanical{L}$, $\mechanical{\mu}=\mechanical{m}/\mechanical{L}$. The ratio $\mechanical{\mu}/\mechanical{T}$ has units $\unit{s^2\,m^{-2}}$ and is the inverse square of the wave speed. Thus

$$
\frac{\partial^2\mechanical{y}}{\partial\mechanical{x}^2}
=\frac{1}{\mechanical{v}^2}\frac{\partial^2\mechanical{y}}{\partial\mechanical{t}^2},
\qquad
\mechanical{v}=\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}.
$$

Here $\mechanical{v}$ is the speed at which a disturbance travels along the string, and $\mechanical{v}_y=\partial\mechanical{y}/\partial\mechanical{t}$ is the transverse velocity of a string element.

![[Kyle Kabasares - Vibrations and Waves - Transverse direction of motion.png|**Fig. 15** A string element moves perpendicular to the equilibrium direction of the string.]]

To solve by separation of variables, try $\mechanical{y}=f(\mechanical{x})g(\mechanical{t})$, with $g(\mechanical{t})=\cos(\signal{\omega}\mechanical{t}-\signal{\phi})$. Then

$$
\begin{aligned}
\frac{\partial^2\mechanical{y}}{\partial\mechanical{x}^2}
&=f''(\mechanical{x})\cos(\signal{\omega}\mechanical{t}-\signal{\phi}),\\
\frac{\partial^2\mechanical{y}}{\partial\mechanical{t}^2}
&=-\signal{\omega}^2f(\mechanical{x})\cos(\signal{\omega}\mechanical{t}-\signal{\phi}).
\end{aligned}
$$

### PDF page 16

Cancel the common time factor to find

$$
f''(\mechanical{x})=-\frac{\signal{\omega}^2}{\mechanical{v}^2}f(\mechanical{x}).
$$

This is the harmonic oscillator equation with position as the independent variable. Write $f(\mechanical{x})=\mechanical{A}\cos(\signal{\omega}\mechanical{x}/\mechanical{v}+\signal{\alpha})$. The boundary conditions are $\mechanical{y}(0,\mechanical{t})=\mechanical{y}(\mechanical{L},\mechanical{t})=0$ for all $\mechanical{t}$, so both $f(0)$ and $f(\mechanical{L})$ must vanish.

At $\mechanical{x}=0$ the cosine must vanish, making the spatial factor proportional to $\sin(\signal{\omega}\mechanical{x}/\mechanical{v})$. The overall sign is absorbed into the amplitude or phase. At $\mechanical{x}=\mechanical{L}$, require $\sin(\signal{\omega}\mechanical{L}/\mechanical{v})=0$. The nontrivial modes have

$$
\begin{aligned}
\signal{\omega}_n&=\frac{n\pi\mechanical{v}}{\mechanical{L}}
=\frac{n\pi}{\mechanical{L}}\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}},
\qquad n=1,2,\ldots,\\
\mechanical{y}_n(\mechanical{x},\mechanical{t})
&=\mechanical{A}_n\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\cos(\signal{\omega}_n\mechanical{t}-\signal{\phi}_n).
\end{aligned}
$$

The lowest frequency $\signal{\omega}_1=\pi\mechanical{v}/\mechanical{L}$ is the fundamental. The higher frequencies are its integer harmonics.

### PDF page 17

#### Example of a string's fundamental

A uniform string has length $2.5\,\unit{m}$, mass $0.1\,\unit{kg}$, and tension $10\,\unit{N}$. The linear density is $0.04\,\unit{kg\,m^{-1}}$. Its fundamental angular frequency and ordinary frequency are

$$
\signal{\omega}_1
=\frac{\pi}{\mechanical{L}}\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}
\simeq19.9\,\unit{rad\,s^{-1}},
\qquad
\signal{\nu}_1=\frac{\signal{\omega}_1}{2\pi}\simeq3.16\,\unit{Hz}.
$$

The notebook rounds the frequency to $3.17\,\unit{Hz}$ from the rounded angular frequency.

Clamping the string at $\mechanical{x}=0.5\,\unit{m}$ adds a fixed point and changes the allowed frequencies. A spatial mode proportional to $\sin(\signal{\omega}\mechanical{x}/\mechanical{v})$ on the original interval can survive only if it already vanishes at the clamp.

![[Kyle Kabasares - Vibrations and Waves - Clamp on a string.png|**Fig. 16** A clamp is placed 0.5 m from the left end of a 2.5 m string.]]

#### Exercise 3-14

For a mass $\mechanical{m}=0.2\,\unit{kg}$ with damped angular frequency $\signal{\omega}=(\sqrt{3}/2)\signal{\omega}_0$, compare with $\signal{\omega}^2=\signal{\omega}_0^2-\signal{\gamma}^2/4$. Then

$$
\frac{\signal{\gamma}^2}{4}=\frac{\signal{\omega}_0^2}{4},
\qquad
\mechanical{b}=\mechanical{m}\signal{\gamma}=\mechanical{m}\sqrt{\frac{\mechanical{k}}{\mechanical{m}}}.
$$

The period is $\signal{T}=2\pi/\signal{\omega}$.

### PDF page 18

#### February 10, 2015 — selecting modes with a clamp

The page gives $\mechanical{L}=2.5\,\unit{m}$, $\mechanical{T}=10\,\unit{N}$, and $\mechanical{m}=0.01\,\unit{kg}$. The previous page gives $0.1\,\unit{kg}$. The mode selection below depends only on the position of the clamp as a fraction of the length.

Start from the full-length modes $\mechanical{y}_n=\mechanical{A}\sin(n\pi\mechanical{x}/\mechanical{L})\cos(\signal{\omega}_n\mechanical{t}-\signal{\phi}_n)$ with $\signal{\omega}_n=n\signal{\omega}_1$. The sine already vanishes at $\mechanical{x}=0$ and $\mechanical{x}=\mechanical{L}$. At the clamp at $0.5\,\unit{m}$, the additional condition is

$$
\sin(0.2n\pi)=0 \quad\Longrightarrow\quad n=5q,\qquad q=1,2,\ldots.
$$

![[Kyle Kabasares - Vibrations and Waves - Clamp at one fifth of the length.png|**Fig. 17** The first clamp position is one fifth of the string length from the left endpoint.]]

Moving the clamp to $1\,\unit{m}$ instead gives $\sin(0.4n\pi)=0$. This requires $n=5q/2$ with $q$ even because $n$ is an integer. The full-length modes that survive again have $n=5,10,15,\ldots$.

![[Kyle Kabasares - Vibrations and Waves - Clamp at two fifths of the length.png|**Fig. 18** The second clamp position is two fifths of the string length from the left endpoint.]]

### PDF page 19

#### Energy of a string vibration

For one normal mode, choose an instant when $\cos(\signal{\omega}_n\mechanical{t}-\signal{\phi}_n)=0$. The string is straight at this instant, so the excess elastic potential energy vanishes and all the vibration energy is kinetic.

![[Kyle Kabasares - Vibrations and Waves - Equilibrium crossing of a standing wave.png|**Fig. 19** A small element is marked on the vibrating string as the notes identify the straight configuration used to compute the energy.]]

A string element of length $d\mechanical{x}$ has mass $\mechanical{\mu}\,d\mechanical{x}$ and transverse velocity

$$
\frac{\partial\mechanical{y}_n}{\partial\mechanical{t}}
=-\mechanical{A}_n\signal{\omega}_n
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\sin(\signal{\omega}_n\mechanical{t}-\signal{\phi}_n).
$$

At the chosen instant the time-dependent sine has magnitude one. Integrating $d\energy{K}=\tfrac12\mechanical{\mu}(\partial\mechanical{y}_n/\partial\mechanical{t})^2\,d\mechanical{x}$ gives

$$
\begin{aligned}
\energy{E}_n
&=\frac12\mechanical{\mu}\mechanical{A}_n^2\signal{\omega}_n^2
\int_0^{\mechanical{L}}\sin^2\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}\\
&=\frac14\mechanical{\mu}\mechanical{A}_n^2\signal{\omega}_n^2
\int_0^{\mechanical{L}}\left[1-\cos\left(\frac{2n\pi\mechanical{x}}{\mechanical{L}}\right)\right]d\mechanical{x}\\
&=\frac14\mechanical{\mu}\mechanical{L}\mechanical{A}_n^2\signal{\omega}_n^2.
\end{aligned}
$$

The cosine integrates to zero over the string.

### PDF page 20

The integral for the energy yields $\energy{E}_n=\tfrac14\mechanical{L}\mechanical{\mu}\mechanical{A}_n^2\signal{\omega}_n^2$ because the sine at the upper integration limit vanishes. The total displacement is the superposition $\mechanical{y}(\mechanical{x},\mechanical{t})=\sum_n\mechanical{y}_n(\mechanical{x},\mechanical{t})$.

#### Fourier series of the string profile

At a fixed time $\mechanical{t}_0$, the temporal cosine is constant for each mode. Thus

$$
\mechanical{y}(\mechanical{x},\mechanical{t}_0)
=\sum_{n=1}^\infty \mechanical{B}_n
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right),
\qquad
\mechanical{B}_n=\mechanical{A}_n\cos(\signal{\omega}_n\mechanical{t}_0-\signal{\phi}_n).
$$

![[Kyle Kabasares - Vibrations and Waves - String profile at a fixed time.png|**Fig. 20** A snapshot of the string's transverse displacement can contain many normal modes.]]

For a known profile, isolate the $m$th coefficient by multiplying both sides by $\sin(m\pi\mechanical{x}/\mechanical{L})$ and integrating. The required orthogonality relation is

$$
\int_0^{\mechanical{L}}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
=\begin{cases}
0,&m\ne n,\\
\mechanical{L}/2,&m=n.
\end{cases}
$$

### PDF page 21

The orthogonality integral gives the Fourier sine coefficient of a profile at $\mechanical{t}_0$:

$$
\mechanical{B}_m=
\frac{2}{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{y}(\mechanical{x},\mechanical{t}_0)
\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}.
$$

For example, take the ramp $\mechanical{y}(\mechanical{x})=k\mechanical{x}$ on $0<\mechanical{x}<\mechanical{L}$, where $k$ is the slope. The notebook sketches an extension that repeats every $\mechanical{L}$. The half-range sine series computed below instead extends the ramp as an odd, $2\mechanical{L}$-periodic function.

![[Kyle Kabasares - Vibrations and Waves - Ramp example.png|**Fig. 21** The notebook sketches a ramp segment and its repetition.]]

Integrate by parts with $u=\mechanical{x}$ and $dv=\sin(n\pi\mechanical{x}/\mechanical{L})\,d\mechanical{x}$:

$$
\begin{aligned}
\mechanical{B}_n
&=\frac{2k}{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}\\
&=\frac{2k}{\mechanical{L}}\left[
-\frac{\mechanical{x}\mechanical{L}}{n\pi}\cos\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\right]_0^{\mechanical{L}}
=-\frac{2k\mechanical{L}}{n\pi}\cos(n\pi).
\end{aligned}
$$

The remaining cosine integral vanishes. On the open interval the series is

$$
k\mechanical{x}
=\frac{2k\mechanical{L}}{\pi}\left[
\sin\frac{\pi\mechanical{x}}{\mechanical{L}}
-\frac12\sin\frac{2\pi\mechanical{x}}{\mechanical{L}}
+\frac13\sin\frac{3\pi\mechanical{x}}{\mechanical{L}}-\cdots\right].
$$

Every sine term is zero at $\mechanical{x}=\mechanical{L}$, where the ramp itself takes the value $k\mechanical{L}$.

### PDF page 22

#### February 12, 2015 — Fourier sine examples

On $0<\mechanical{x}<\mechanical{L}$, expand a profile in the modes $\sin(n\pi\mechanical{x}/\mechanical{L})$. The notebook first writes $\mechanical{y}(\mechanical{x}+\mechanical{L})=\mechanical{y}(\mechanical{x})$. The general sine basis has period $2\mechanical{L}$ and represents the odd extension. In the second example below, the surviving terms also have period $\mechanical{L}$.

1. For $\mechanical{y}(\mechanical{x})=\mechanical{A}\sin(\pi\mechanical{x}/\mechanical{L})$, the only nonzero coefficient is $\mechanical{B}_1=\mechanical{A}$.
2. For the two-level profile, $\mechanical{y}=\mechanical{A}$ on the first half of the interval and $\mechanical{y}=-\mechanical{A}$ on the second half.

![[Kyle Kabasares - Vibrations and Waves - Two-level profile.png|**Fig. 22** A square profile takes opposite values on the two halves of a period.]]

For the second profile, split the integral at the jump:

$$
\begin{aligned}
\mechanical{B}_n
&=\frac{2\mechanical{A}}{\mechanical{L}}\left[
\int_0^{\mechanical{L}/2}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
-\int_{\mechanical{L}/2}^{\mechanical{L}}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}\right]\\
&=\frac{2\mechanical{A}}{n\pi}\left[1+\cos(n\pi)-2\cos(n\pi/2)\right].
\end{aligned}
$$

The last cosine retains the half-interval argument. For odd $n$, the bracket vanishes. For even $n=2m$, the bracket becomes $2-2\cos(m\pi)$.

### PDF page 23

For $n=2m$, the two-level profile on page 22 has

$$
\mechanical{B}_{2m}=\begin{cases}
4\mechanical{A}/(m\pi),&m\text{ odd},\\
0,&m\text{ even}.
\end{cases}
$$

The contributing mode numbers $n$ are $2,6,10,14,\ldots$, giving

$$
\mechanical{y}(\mechanical{x})=\frac{4\mechanical{A}}{\pi}
\left[\sin\frac{2\pi\mechanical{x}}{\mechanical{L}}+
\frac13\sin\frac{6\pi\mechanical{x}}{\mechanical{L}}+
\frac15\sin\frac{10\pi\mechanical{x}}{\mechanical{L}}+\cdots\right]
$$

away from the jumps.

Now take a new profile with $\mechanical{y}=\mechanical{A}$ on $-\mechanical{L}<\mechanical{x}<\mechanical{L}$ and $\mechanical{y}=-\mechanical{A}$ on $\mechanical{L}<\mechanical{x}<3\mechanical{L}$. Its $4\mechanical{L}$-periodic extension is even, $\mechanical{y}(\mechanical{x})=\mechanical{y}(-\mechanical{x})$, so its sine coefficients vanish. The two integrals in the notes against $\sin(n\pi\mechanical{x}/\mechanical{L})$ also vanish individually, since each interval has length equal to an integer number of cycles.

![[Kyle Kabasares - Vibrations and Waves - Even two-level profile.png|**Fig. 23** The positive part of this square profile is centered at the origin.]]

For a general $2\pi$-periodic function of a dimensionless argument $x$, the real Fourier series is

$$
\begin{aligned}
y(x)&=\frac{a_0}{2}+\sum_{n=1}^\infty [a_n\cos(nx)+b_n\sin(nx)],\\
a_n&=\frac1\pi\int_{-\pi}^\pi y(x)\cos(nx)\,dx,\qquad n\ge0,\\
b_n&=\frac1\pi\int_{-\pi}^\pi y(x)\sin(nx)\,dx,\qquad n\ge1.
\end{aligned}
$$

In particular, $a_0=\pi^{-1}\int_{-\pi}^\pi y(x)\,dx$.

### PDF page 24

For positive integers $m,n$, the orthogonality relations on $[-\pi,\pi]$ are

$$
\int_{-\pi}^{\pi}\sin(mx)\sin(nx)\,dx=\pi\delta_{mn},
\qquad
\int_{-\pi}^{\pi}\sin(mx)\cos(nx)\,dx=0.
$$

Here $\delta_{mn}=1$ for $m=n$ and is zero otherwise. The odd, $2\pi$-periodic sawtooth defined by $f(x)=x$ on $-\pi<x<\pi$ has the sine series

$$
f(x)=2\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n}\sin(nx)
$$

on that open interval.

![[Kyle Kabasares - Vibrations and Waves - Odd sawtooth profile.png|**Fig. 24** The periodic extension of the ramp on the symmetric interval has jumps at odd multiples of π.]]

#### Standing waves as traveling waves

Use $\sin(\theta+\phi)+\sin(\theta-\phi)=2\sin\theta\cos\phi$ and $\signal{\omega}_n=n\pi\mechanical{v}/\mechanical{L}$ to write a normal mode with zero time phase as

$$
\begin{aligned}
\mechanical{y}_n(\mechanical{x},\mechanical{t})
&=\mechanical{A}_n\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\cos(\signal{\omega}_n\mechanical{t})\\
&=\frac{\mechanical{A}_n}{2}
\left[
\sin\left(\frac{n\pi}{\mechanical{L}}(\mechanical{x}-\mechanical{v}\mechanical{t})\right)
+\sin\left(\frac{n\pi}{\mechanical{L}}(\mechanical{x}+\mechanical{v}\mechanical{t})\right)
\right].
\end{aligned}
$$

The first component travels in the positive $\mechanical{x}$ direction and the second in the negative direction. Their wavelength is $\signal{\lambda}_n=2\mechanical{L}/n$, so $n\pi/\mechanical{L}=2\pi/\signal{\lambda}_n$.

### PDF page 25

Follow a point of fixed phase on the right-moving sine wave. Requiring the same phase at $(\mechanical{x},\mechanical{t})$ and $(\mechanical{x}+\Delta\mechanical{x},\mechanical{t}+\Delta\mechanical{t})$ gives

$$
\mechanical{x}-\mechanical{v}\mechanical{t}
=\mechanical{x}+\Delta\mechanical{x}-\mechanical{v}(\mechanical{t}+\Delta\mechanical{t}),
\qquad
\frac{\Delta\mechanical{x}}{\Delta\mechanical{t}}=\mechanical{v}.
$$

![[Kyle Kabasares - Vibrations and Waves - Motion of a sinusoidal crest.png|**Fig. 25** Two snapshots show a sinusoidal feature translated by the wave speed times the elapsed time.]]

More generally a right-moving wave has the form $\mechanical{y}(\mechanical{x},\mechanical{t})=f(\mechanical{x}-\mechanical{v}\mechanical{t})$. On a uniform string, $\mechanical{v}=\sqrt{\mechanical{T}/\mechanical{\mu}}$.

#### Superposition

A standing wave is formed by two waves of equal amplitude and wavelength traveling in opposite directions. As a second example, superpose two equal-amplitude waves traveling to the right in the same medium, with different wavelengths:

$$
\mechanical{y}_1=\mechanical{A}\sin\left[\frac{2\pi}{\signal{\lambda}_1}(\mechanical{x}-\mechanical{v}\mechanical{t})\right],
\qquad
\mechanical{y}_2=\mechanical{A}\sin\left[\frac{2\pi}{\signal{\lambda}_2}(\mechanical{x}-\mechanical{v}\mechanical{t})\right].
$$

Because both terms depend on the same translated coordinate, their sum has the same shape at different times. One may choose $\mechanical{t}=0$ as the reference snapshot.

![[Kyle Kabasares - Vibrations and Waves - Translation of a composite wave.png|**Fig. 26** A composite wave is shown at an earlier and a later time as its profile travels to the right.]]

### PDF page 26

At $\mechanical{t}=0$, let $\signal{k}_i=1/\signal{\lambda}_i$, measured in cycles per metre. The angular wave number is $2\pi\signal{k}_i$ in this convention. The sum of the two sine waves is

$$
\begin{aligned}
\mechanical{y}(\mechanical{x},0)
&=\mechanical{A}\sin(2\pi\signal{k}_1\mechanical{x})+\mechanical{A}\sin(2\pi\signal{k}_2\mechanical{x})\\
&=2\mechanical{A}
\sin[\pi(\signal{k}_1+\signal{k}_2)\mechanical{x}]
\cos[\pi(\signal{k}_1-\signal{k}_2)\mechanical{x}].
\end{aligned}
$$

For nearby wave numbers, the cosine modulates the shorter-scale oscillation of the sine.

![[Kyle Kabasares - Vibrations and Waves - Spatial beat pattern.png|**Fig. 27** The cosine envelope modulates the rapidly varying sine at a fixed time.]]

#### Wave pulses

A pulse can have a non-sinusoidal profile. The notes sketch an ocean pulse and a rectangular electronic pulse. A fixed profile $f$ travels to the right as $f(\mechanical{x}-\mechanical{v}\mechanical{t})$ and to the left as $f(\mechanical{x}+\mechanical{v}\mechanical{t})$.

![[Kyle Kabasares - Vibrations and Waves - Ocean and electronic pulses.png|**Fig. 28** Rounded and rectangular examples of traveling pulses.]]

For example, take $\mechanical{b}>0$ and

$$
\mechanical{y}(\mechanical{x},\mechanical{t})=
\frac{\mechanical{b}^3}{\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2}.
$$

The peak height is $\mechanical{b}$ at $\mechanical{x}=\mechanical{v}\mechanical{t}$. At $\mechanical{t}=0$, setting the height equal to $\mechanical{b}/2$ gives $\mechanical{x}^2=\mechanical{b}^2$. Thus the half-height positions are $\pm\mechanical{b}$ initially and $\mechanical{v}\mechanical{t}\pm\mechanical{b}$ at a later time.

![[Kyle Kabasares - Vibrations and Waves - Traveling pulse height and width.png|**Fig. 29** The pulse peak and the two half-height points move together.]]

### PDF page 27

For the moving pulse, the half-height equation is

$$
\frac{\mechanical{b}}{2}=
\frac{\mechanical{b}^3}{\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2}.
$$

It gives $(\mechanical{x}-\mechanical{v}\mechanical{t})^2=\mechanical{b}^2$, so the two points stay separated by $2\mechanical{b}$.

The transverse velocity is the time derivative at fixed position. Using $\partial_{\mechanical{t}}(\mechanical{x}-\mechanical{v}\mechanical{t})^2=-2\mechanical{v}(\mechanical{x}-\mechanical{v}\mechanical{t})$ gives

$$
\mechanical{v}_y(\mechanical{x},\mechanical{t})
=\frac{\partial\mechanical{y}}{\partial\mechanical{t}}
=\frac{2\mechanical{v}\mechanical{b}^3(\mechanical{x}-\mechanical{v}\mechanical{t})}
{\left[\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2\right]^2}.
$$

At $\mechanical{t}=0$, this is $2\mechanical{v}\mechanical{b}^3\mechanical{x}/(\mechanical{b}^2+\mechanical{x}^2)^2$. Equivalently, for a right-moving profile, $\partial\mechanical{y}/\partial\mechanical{t}=-\mechanical{v}\,\partial\mechanical{y}/\partial\mechanical{x}$. The spatial derivative of the pulse at $\mechanical{t}=0$ is $-2\mechanical{b}^3\mechanical{x}/(\mechanical{b}^2+\mechanical{x}^2)^2$.

#### Checking the wave equation

For a general right-moving pulse, set $\xi=\mechanical{x}-\mechanical{v}\mechanical{t}$ and $\mechanical{y}=f(\xi)$. The chain rule gives

$$
\frac{\partial\mechanical{y}}{\partial\mechanical{x}}=f'(\xi),
\qquad
\frac{\partial^2\mechanical{y}}{\partial\mechanical{x}^2}=f''(\xi).
$$

### PDF page 28

For $\xi=\mechanical{x}-\mechanical{v}\mechanical{t}$, the time derivatives are

$$
\frac{\partial\mechanical{y}}{\partial\mechanical{t}}=-\mechanical{v}f'(\xi),\qquad
\frac{\partial^2\mechanical{y}}{\partial\mechanical{t}^2}=\mechanical{v}^2f''(\xi).
$$

Together with the spatial derivative, this verifies the wave equation for the right-moving profile.

#### Homework 2, problem 1

For a fixed-end string,

$$
\signal{\omega}_n=2\pi\signal{f}_n=\frac{n\pi\mechanical{v}}{\mechanical{L}},
\qquad
\mechanical{v}=\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}
=\signal{f}_n\signal{\lambda}_n,\qquad
\signal{\lambda}_n=\frac{2\mechanical{L}}{n}.
$$

Choose $\mechanical{y}_n=\mechanical{A}_n\sin(n\pi\mechanical{x}/\mechanical{L})\sin(\signal{\omega}_n\mechanical{t})$. The displacement vanishes at $\mechanical{t}=0$, when the transverse velocity is $\mechanical{A}_n\signal{\omega}_n\sin(n\pi\mechanical{x}/\mechanical{L})$. The factor $\signal{\omega}_n$ comes from differentiating the time-dependent sine.

![[Kyle Kabasares - Vibrations and Waves - Mass element and deflection.png|**Fig. 30** A string mass element has transverse displacement and velocity.]]

With $d\mechanical{m}=\mechanical{\mu}\,d\mechanical{x}$, integrate its kinetic energy at $\mechanical{t}=0$:

$$
\energy{E}_n
=\frac12\int_0^{\mechanical{L}}\mechanical{\mu}\mechanical{A}_n^2\signal{\omega}_n^2
\sin^2\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
=\frac{\mechanical{\mu}\mechanical{L}}{4}\mechanical{A}_n^2\signal{\omega}_n^2
=\frac{n^2\pi^2\mechanical{T}}{4\mechanical{L}}\mechanical{A}_n^2.
$$

For a superposition of the first and third modes, the spatial cross term integrates to zero. The energy is

$$
\energy{E}=\energy{E}_1+\energy{E}_3
=\frac{\pi^2\mechanical{T}}{4\mechanical{L}}\left(\mechanical{A}_1^2+9\mechanical{A}_3^2\right).
$$

### PDF page 29

#### Homework 2, problems 2 and 3

With $n=3$ and $\mechanical{L}$ and $\mechanical{\mu}$ fixed, quadrupling the tension doubles the frequency:

$$
\frac{\signal{f}_{3,\mathrm{final}}}{\signal{f}_{3,\mathrm{initial}}}
=\sqrt{\frac{\mechanical{T}_{\mathrm{final}}}{\mechanical{T}_{\mathrm{initial}}}}=2.
$$

The wavelength $\signal{\lambda}_3=2\mechanical{L}/3$ is the same before and after the change.

In problem 3 the tension is $200\,\unit{N}$ and the second mode is

$$
\mechanical{y}_2=(0.01\,\unit{m})
\sin\left[\left(\frac{\pi}{2}\,\unit{m^{-1}}\right)\mechanical{x}\right]
\sin[(12\pi\,\unit{s^{-1}})\mechanical{t}].
$$

Match the spatial coefficient to $2\pi/\mechanical{L}$ to obtain $\mechanical{L}=4\,\unit{m}$. The wave speed and string mass follow:

$$
\mechanical{v}=\frac{\signal{\omega}_2\mechanical{L}}{2\pi}=24\,\unit{m\,s^{-1}},
\qquad
\mechanical{M}=\mechanical{\mu}\mechanical{L}
=\frac{\mechanical{T}\mechanical{L}}{\mechanical{v}^2}=\frac{25}{18}\,\unit{kg}.
$$

Finally, $\signal{\omega}_3=(3/2)\signal{\omega}_2$, so the third-mode period is $\signal{\tau}_3=4\pi/(3\signal{\omega}_2)=1/9\,\unit{s}\simeq0.11\,\unit{s}$.

### PDF page 30

#### February 19, 2015 — boundary effects

For a profile traveling to the right at speed $\mechanical{v}$, follow a point at fixed phase. The change in displacement along its path is

$$
\frac{d\mechanical{y}}{d\mechanical{t}}
=
\frac{\partial\mechanical{y}}{\partial\mechanical{x}}\frac{d\mechanical{x}}{d\mechanical{t}}
+\frac{\partial\mechanical{y}}{\partial\mechanical{t}}=0.
$$

Since $d\mechanical{x}/d\mechanical{t}=\mechanical{v}$, the transverse velocity at a fixed position is $\mechanical{v}_y=\partial\mechanical{y}/\partial\mechanical{t}=-\mechanical{v}\,\partial\mechanical{y}/\partial\mechanical{x}$.

Consider two oppositely signed pulses, $\mechanical{y}_1=f(\mechanical{x}-\mechanical{v}\mechanical{t})$ and $\mechanical{y}_2=-f(\mechanical{x}+\mechanical{v}\mechanical{t})$. The arrow on the second pulse points left, which determines the plus sign in its argument. At complete overlap at $\mechanical{t}=0$ the displacements cancel, while the transverse velocities add to $-2\mechanical{v}f'(\mechanical{x})$. The string therefore still carries kinetic energy.

![[Kyle Kabasares - Vibrations and Waves - Pulse overlap and transverse velocity.png|**Fig. 31** Opposite displacements can cancel while the transverse velocities point in the same direction.]]

A pulse reflected from a hard, fixed boundary is inverted so that the endpoint displacement vanishes. At a soft, free boundary, the end can move and the reflected pulse retains its sign.

![[Kyle Kabasares - Vibrations and Waves - Hard and soft boundary reflections.png|**Fig. 32** Reflection at a fixed end and motion at a free end.]]

### PDF page 31

Join two strings at $\mechanical{x}=0$, with wave speeds $\mechanical{v}_1$ on the left and $\mechanical{v}_2$ on the right. A pulse incident from the left produces a reflected pulse $g$ and a transmitted pulse $f_2$:

$$
\begin{aligned}
\mechanical{y}_1(\mechanical{x},\mechanical{t})
&=f_1(\mechanical{t}-\mechanical{x}/\mechanical{v}_1)
+g(\mechanical{t}+\mechanical{x}/\mechanical{v}_1),\\
\mechanical{y}_2(\mechanical{x},\mechanical{t})
&=f_2(\mechanical{t}-\mechanical{x}/\mechanical{v}_2).
\end{aligned}
$$

![[Kyle Kabasares - Vibrations and Waves - Incident reflected and transmitted pulses.png|**Fig. 33** At the junction, part of the incident pulse travels back and part continues into the second string.]]

The displacement is continuous at the junction. With equal tension and negligible junction mass, the transverse force balance also makes the slope continuous:

$$
f_1+g=f_2,\qquad
\frac{-f_1'+g'}{\mechanical{v}_1}=-\frac{f_2'}{\mechanical{v}_2}.
$$

Integrate the slope condition with zero offset before the pulses arrive. Combining it with displacement continuity gives

$$
g(\mechanical{t})=\frac{\mechanical{v}_2-\mechanical{v}_1}{\mechanical{v}_1+\mechanical{v}_2}f_1(\mechanical{t}),
\qquad
f_2(\mechanical{t})=\frac{2\mechanical{v}_2}{\mechanical{v}_1+\mechanical{v}_2}f_1(\mechanical{t}).
$$

#### February 24, 2015 — reflection and transmission

The lecture identifies the two factors as amplitude coefficients. When $\mechanical{\mu}_1<\mechanical{\mu}_2$ at the same tension, $\mechanical{v}_1>\mechanical{v}_2$ and the reflected amplitude changes sign.

![[Kyle Kabasares - Vibrations and Waves - Pulse approaching a denser string.png|**Fig. 34** The incident pulse moves from a lighter string toward a denser string.]]

### PDF page 32

Compare corresponding points on the incident, reflected, and transmitted profiles at a later time. Let $\mechanical{x}_1$ be the location a point on the incident profile would have reached if it had continued into an extension of the first string. Its reflected counterpart has coordinate $\mechanical{x}_g$ satisfying

$$
\mechanical{t}+\frac{\mechanical{x}_g}{\mechanical{v}_1}
=\mechanical{t}-\frac{\mechanical{x}_1}{\mechanical{v}_1},
\qquad
\mechanical{x}_g=-\mechanical{x}_1.
$$

The two positions are mirror images across the interface, so reflection preserves the spatial width.

![[Kyle Kabasares - Vibrations and Waves - Separated reflected and transmitted pulses.png|**Fig. 35** The inverted reflected pulse and upright transmitted pulse after they separate.]]

For a transmitted point, the equal-argument condition is

$$
\mechanical{t}-\frac{\mechanical{x}_2}{\mechanical{v}_2}
=\mechanical{t}-\frac{\mechanical{x}_1}{\mechanical{v}_1},
\qquad
\mechanical{x}_2=\frac{\mechanical{v}_2}{\mechanical{v}_1}\mechanical{x}_1.
$$

The transmitted spatial width is multiplied by $\mechanical{v}_2/\mechanical{v}_1$, and its displacement is multiplied by $2\mechanical{v}_2/(\mechanical{v}_1+\mechanical{v}_2)$.

![[Kyle Kabasares - Vibrations and Waves - Spatial compression at a junction.png|**Fig. 36** The transmitted profile is compared with the profile that would have continued in the original medium.]]

For incidence from a lighter to a denser string, $\mechanical{v}_1>\mechanical{v}_2$. The reflected pulse is inverted with reduced height and the original width. The transmitted pulse stays upright with reduced height and a narrower profile.

### PDF page 33

For incidence from a denser to a lighter string, $\mechanical{\mu}_1>\mechanical{\mu}_2$ and $\mechanical{v}_1<\mechanical{v}_2$. The reflected pulse stays upright with reduced height and unchanged width. The transmitted pulse stays upright with increased height. Its width increases by $\mechanical{v}_2/\mechanical{v}_1$ by the matching argument on page 32, although this page lists the width as unchanged.

The two limiting cases are:

- **Fixed boundary.** As $\mechanical{\mu}_2\to\infty$, $\mechanical{v}_2\to0$. The reflected profile is $g=-f_1$ and the transmitted displacement vanishes.
- **Free boundary.** As $\mechanical{\mu}_2\to0$, $\mechanical{v}_2\to\infty$. The reflected profile is $g=f_1$, and the displacement at the junction is $2f_1$.

![[Kyle Kabasares - Vibrations and Waves - Fixed and free boundary limits.png|**Fig. 37** A heavy second string approaches a fixed end and a very light second string approaches a free end.]]

#### Example of a right-moving sine wave

A string has $\mechanical{\mu}=0.1\,\unit{kg\,m^{-1}}$, tension $50\,\unit{N}$, amplitude $0.02\,\unit{m}$, and period $0.1\,\unit{s}$. Its wave speed and wavelength are

$$
\mechanical{v}=\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}\simeq22.4\,\unit{m\,s^{-1}},
\qquad
\signal{\lambda}=\mechanical{v}\signal{T}\simeq2.2\,\unit{m}.
$$

In $\mechanical{y}=\mechanical{A}\sin[(2\pi/\signal{\lambda})(\mechanical{x}-\mechanical{v}\mechanical{t})+\signal{\phi}]$, the condition $\mechanical{y}(0,0)=0.01\,\unit{m}$ gives $\sin\signal{\phi}=1/2$. Negative initial transverse velocity requires $\cos\signal{\phi}>0$, so $\signal{\phi}=\pi/6$ modulo $2\pi$.

### PDF page 34

Using the rounded speed and wavelength from the preceding page, the sinusoidal wave is

$$
\mechanical{y}(\mechanical{x},\mechanical{t})
=(0.02\,\unit{m})\sin\left[
\frac{2\pi}{2.2\,\unit{m}}
\big(\mechanical{x}-(22.4\,\unit{m\,s^{-1}})\mechanical{t}\big)
+\frac{\pi}{6}
\right].
$$

#### Problem 3 — a triangular pulse

The linear densities are $\mechanical{\mu}_1=0.1\,\unit{kg\,m^{-1}}$ and $\mechanical{\mu}_2=0.3\,\unit{kg\,m^{-1}}$. The speeds used in the calculation are $\mechanical{v}_1=14\,\unit{m\,s^{-1}}$ and $\mechanical{v}_2=8\,\unit{m\,s^{-1}}$. The reflected and transmitted displacement factors are

$$
\frac{\mechanical{v}_2-\mechanical{v}_1}{\mechanical{v}_2+\mechanical{v}_1}=-\frac{3}{11}\simeq-\frac14,
\qquad
\frac{2\mechanical{v}_2}{\mechanical{v}_2+\mechanical{v}_1}=\frac{8}{11}\simeq\frac34.
$$

The reflected profile is spatially mirrored, as in $\mechanical{x}_g=-\mechanical{x}_1$.

![[Kyle Kabasares - Vibrations and Waves - Triangular pulse at a junction.png|**Fig. 38** An incident triangular pulse and the reflected and transmitted profiles after crossing the junction.]]

#### Homework 3, problem 2

A standing-mode factor $\sin(n\pi\mechanical{x}/\mechanical{L})\cos(\signal{\omega}_n\mechanical{t})$ is the half-sum of the sine waves with arguments $n\pi\mechanical{x}/\mechanical{L}\mp\signal{\omega}_n\mechanical{t}$. More generally a traveling wave has the form $f(\mechanical{x}\pm\mechanical{v}\mechanical{t})$.

In the example, the displacement at $\mechanical{x}=1\,\unit{m}$ is $0.2\sin(3\pi\mechanical{t}+\pi/8)$ in the units of the problem. The notes begin to match this time trace to a right-moving sine with angular wave number $2\pi/\signal{\lambda}$. The temporal angular frequency has magnitude $3\pi\,\unit{s^{-1}}$.

### PDF page 35

Here the notation switches to the angular wave number $\signal{k}=2\pi/\signal{\lambda}$, so $\mechanical{v}=\signal{\omega}/\signal{k}$ and $\signal{\omega}=2\pi\signal{f}$.

The notes again split a standing mode into two sine waves, with arguments $(n\pi/\mechanical{L})(\mechanical{x}-\mechanical{v}\mechanical{t})$ and $(n\pi/\mechanical{L})(\mechanical{x}+\mechanical{v}\mechanical{t})$. At the fixed endpoint $\mechanical{x}=0$ their sum is zero. The nonzero trace written for the homework, $\mechanical{y}(0,\mechanical{t})=\mechanical{A}\sin(\signal{\omega}\mechanical{t})$ with amplitude $0.2$ and $\signal{\omega}=3\pi\,\unit{s^{-1}}$, therefore has to be treated separately as a traveling-wave trace.

For a single wave, the trace at $1\,\unit{m}$ leads the trace at $0$ by $\pi/8$ modulo $2\pi$. The notes match $\pi/8=\signal{k}(1\,\unit{m})$ and obtain $\signal{\lambda}=16\,\unit{m}$. With both traces written using a positive temporal phase, this choice corresponds to the left-moving form $\mechanical{A}\sin(\signal{\omega}\mechanical{t}+\signal{k}\mechanical{x})$. A right-moving form has the opposite spatial phase and requires $-\signal{k}(1\,\unit{m})\equiv\pi/8\pmod{2\pi}$. The handwritten rightward assumption and the unwrapped phase match thus give different directions.

### PDF page 36

#### Dispersion

In a nondispersive medium, all wavelengths propagate at the same speed. An ideal string with $\mechanical{v}=\sqrt{\mechanical{T}/\mechanical{\mu}}$ is an example. The notes give atmospheric waves and deep-water gravity waves as dispersive examples. In deep water the shorter gravity wavelengths have lower phase speeds.

For this derivation write $\signal{k}_i=1/\signal{\lambda}_i$ in cycles per metre and $\signal{f}_i=\mechanical{v}_i/\signal{\lambda}_i$. Consider two nearby wavelengths with equal amplitudes:

$$
\mechanical{y}_i
=\mechanical{A}\sin[2\pi(\signal{k}_i\mechanical{x}-\signal{f}_i\mechanical{t})],
\qquad i=1,2.
$$

Using the sine addition identity, their sum is

$$
\mechanical{y}_1+\mechanical{y}_2
=2\mechanical{A}\sin[2\pi(\signal{\bar k}\mechanical{x}-\signal{\bar f}\mechanical{t})]
\cos[\pi(\Delta\signal{k}\mechanical{x}-\Delta\signal{f}\mechanical{t})],
$$

where the bars denote the two means and the differences use the same ordering for both quantities.

![[Kyle Kabasares - Vibrations and Waves - Phase and envelope of nearby waves.png|**Fig. 39** Nearby frequencies produce a fast oscillation with a slowly varying envelope.]]

The sine phase travels at $\mechanical{v}_p=\signal{\bar f}/\signal{\bar k}$. The cosine envelope travels at $\Delta\signal{f}/\Delta\signal{k}$, which tends to the group velocity $\mechanical{v}_g=d\signal{f}/d\signal{k}$ in the narrow-band limit. With angular frequency and angular wave number the same ratios are $\signal{\omega}/\signal{k}$ and $d\signal{\omega}/d\signal{k}$. The velocities coincide for a nondispersive medium and generally differ when dispersion is present.

### PDF page 37

For deep-water gravity waves, the dispersion relation is $\signal{f}=C\signal{k}^{1/2}$. The phase and group velocities are

$$
\mechanical{v}_p=\frac{\signal{f}}{\signal{k}}=\frac{C}{\sqrt{\signal{k}}},
\qquad
\mechanical{v}_g=\frac{d\signal{f}}{d\signal{k}}=\frac{C}{2\sqrt{\signal{k}}}
=\frac12\mechanical{v}_p.
$$

#### Example of a dispersive string

Take $\signal{\omega}=\signal{k}\sqrt{\mechanical{T}/\mechanical{\mu}+d\signal{k}^2}$, now with angular wave number $\signal{k}=2\pi/\signal{\lambda}$. The initial profile is

$$
\mechanical{y}(\mechanical{x},0)
=\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)
+4\sin\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)
+9\sin\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)
$$

in the displacement units of the problem. Divide the dispersion relation by $\signal{k}$ for the phase velocity and differentiate by the product rule for the group velocity:

$$
\begin{aligned}
\mechanical{v}_p&=\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}+d\signal{k}^2},\\
\mechanical{v}_g&=\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}+d\signal{k}^2}
+\frac{d\signal{k}^2}{\sqrt{\mechanical{T}/\mechanical{\mu}+d\signal{k}^2}}.
\end{aligned}
$$

For the sine modes, $\signal{\lambda}_n=2\mechanical{L}/n$ and $\signal{k}_n=n\pi/\mechanical{L}$. Their angular frequencies are

$$
\signal{\omega}_n=\frac{n\pi}{\mechanical{L}}
\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}+d\left(\frac{n\pi}{\mechanical{L}}\right)^2}.
$$

### PDF page 38

For the dispersive-string example, a cosine time factor for each mode corresponds to release from rest. Using the mode frequencies from page 37 gives, in the units of the example,

$$
\begin{aligned}
\mechanical{y}(\mechanical{x},\mechanical{t})
={}&\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_1\mechanical{t})\\
&+4\sin\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_2\mechanical{t})
+9\sin\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_3\mechanical{t}).
\end{aligned}
$$

The second mode uses the same time dependence as the first and third, with its own angular frequency.

#### March 4, 2015 quiz review — forced vibrations and resonance

The free motion can be apparent immediately after the drive starts. With damping, it dies away and the steady oscillation follows the driving frequency. For the particular solution of the undamped equation,

$$
\mechanical{m}\ddot{\mechanical{x}}+\mechanical{k}\mechanical{x}
=\mechanical{F}_0\cos(\signal{\omega}\mechanical{t}),
$$

try $\mechanical{x}=C\cos(\signal{\omega}\mechanical{t})$. Its derivatives are $\dot{\mechanical{x}}=-\signal{\omega}C\sin(\signal{\omega}\mechanical{t})$ and $\ddot{\mechanical{x}}=-\signal{\omega}^2C\cos(\signal{\omega}\mechanical{t})$. Substitute and equate the coefficients of the common cosine:

$$
(\mechanical{k}-\mechanical{m}\signal{\omega}^2)C=\mechanical{F}_0.
$$

### PDF page 39

The real cosine coefficient and the nonnegative amplitude are

$$
C=\frac{\mechanical{F}_0}{\mechanical{k}-\mechanical{m}\signal{\omega}^2}
=\frac{\mechanical{F}_0/\mechanical{m}}{\signal{\omega}_0^2-\signal{\omega}^2},
\qquad
\mechanical{A}=\lvert C\rvert.
$$

#### Complex exponential method for forced oscillations

The sinusoidal driving force is the real projection of the rotating vector $\mechanical{F}_0e^{j\signal{\omega}\mechanical{t}}$. The displacement is the real projection of a vector $z$ rotating at the same angular frequency, with relative phase $\signal{\alpha}$.

![[Kyle Kabasares - Vibrations and Waves - Rotating force and displacement vectors.png|**Fig. 40** The horizontal projections of the two rotating vectors give the applied force and driven displacement.]]

Set $z=\mechanical{A}e^{j(\signal{\omega}\mechanical{t}+\signal{\alpha})}$ in $\mechanical{m}\ddot z+\mechanical{k}z=\mechanical{F}_0e^{j\signal{\omega}\mechanical{t}}$. Using $\dot z=j\signal{\omega}z$ and $\ddot z=-\signal{\omega}^2z$ gives

$$
(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}e^{-j\signal{\alpha}}.
$$

### PDF page 40

For the undamped driven solution, expand $e^{-j\signal{\alpha}}=\cos\signal{\alpha}-j\sin\signal{\alpha}$. Equating real and imaginary parts gives

$$
(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}\cos\signal{\alpha},
\qquad
0=\frac{\mechanical{F}_0}{\mechanical{m}}\sin\signal{\alpha}.
$$

#### Forced oscillations with velocity damping

Newton's law becomes

$$
\mechanical{m}\ddot{\mechanical{x}}=-\mechanical{k}\mechanical{x}
-\mechanical{b}\dot{\mechanical{x}}+\mechanical{F}_0\cos(\signal{\omega}\mechanical{t}).
$$

Set $\signal{\omega}_0^2=\mechanical{k}/\mechanical{m}$ and $\signal{\gamma}=\mechanical{b}/\mechanical{m}$. The normalized real equation is

$$
\ddot{\mechanical{x}}+\signal{\gamma}\dot{\mechanical{x}}+\signal{\omega}_0^2\mechanical{x}
=\frac{\mechanical{F}_0}{\mechanical{m}}\cos(\signal{\omega}\mechanical{t}).
$$

To solve, replace $\mechanical{x}$ by the real part of $z=\mechanical{A}e^{j(\signal{\omega}\mechanical{t}-\signal{\delta})}$ and use the complex drive $(\mechanical{F}_0/\mechanical{m})e^{j\signal{\omega}\mechanical{t}}$. Writing the phase as $-\signal{\delta}$ makes $\signal{\delta}$ the positive angle by which the driving force leads the displacement.

### PDF page 41

Substituting $\dot z=j\signal{\omega}z$ and $\ddot z=-\signal{\omega}^2z$ and canceling the time factor gives

$$
(\signal{\omega}_0^2-\signal{\omega}^2+j\signal{\gamma}\signal{\omega})\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}(\cos\signal{\delta}+j\sin\signal{\delta}).
$$

Its real and imaginary parts are

$$
(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}\cos\signal{\delta},
\qquad
\signal{\gamma}\signal{\omega}\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}\sin\signal{\delta}.
$$

Dividing the second equation by the first gives the tangent of the lag. Squaring and adding gives the amplitude:

$$
\tan\signal{\delta}=\frac{\signal{\gamma}\signal{\omega}}{\signal{\omega}_0^2-\signal{\omega}^2},
\qquad
\mechanical{A}(\signal{\omega})=
\frac{\mechanical{F}_0/\mechanical{m}}
{\sqrt{(\signal{\omega}_0^2-\signal{\omega}^2)^2+(\signal{\gamma}\signal{\omega})^2}}.
$$

### PDF page 42

The resonance definition begun on page 41 describes driving a system under conditions that maximize its response to the drive.

#### Fourier series convergence

Let $f$ be periodic with period $2L$ and piecewise continuously differentiable on a period, allowing jumps. In this convention the constant term is the mean $a_0$:

$$
\begin{aligned}
f(x)&\sim a_0+\sum_{n=1}^\infty
\left[a_n\cos\left(\frac{n\pi x}{L}\right)+b_n\sin\left(\frac{n\pi x}{L}\right)\right],\\
a_0&=\frac{1}{2L}\int_{-L}^{L}f(x)\,dx,\\
a_n&=\frac{1}{L}\int_{-L}^{L}f(x)\cos\left(\frac{n\pi x}{L}\right)dx,\qquad n\ge1,\\
b_n&=\frac{1}{L}\int_{-L}^{L}f(x)\sin\left(\frac{n\pi x}{L}\right)dx,\qquad n\ge1.
\end{aligned}
$$

At a point of continuity the series converges to $f(x)$. At a jump it converges to $\tfrac12[f(x^+)+f(x^-)]$, the mean of the right and left limits.

The example asks for the Fourier series and graph of the function of period $2$ defined on one period by

$$
f(x)=
\begin{cases}
0,&-1\le x\le0,\\
1,&0<x<1.
\end{cases}
$$

![[Kyle Kabasares - Vibrations and Waves - Periodic unit step.png|**Fig. 41** The unit step on the central interval repeats with period two.]]

### PDF page 43

The Fourier series agrees with the periodic step away from the jumps. At each jump the limit is $(0+1)/2=1/2$.

![[Kyle Kabasares - Vibrations and Waves - Fourier limit at step discontinuities.png|**Fig. 42** The limiting Fourier series takes the midpoint value at each discontinuity.]]

Since the period is $2$, use $L=1$. Only the interval $(0,1)$ contributes to the coefficient integrals. Substituting $u=n\pi x$ in the cosine integral gives

$$
a_n=\int_0^1\cos(n\pi x)\,dx
=\left[\frac{\sin(n\pi x)}{n\pi}\right]_0^1=0,\qquad n\ge1.
$$

The constant term is

$$
a_0=\frac12\int_{-1}^1 f(x)\,dx
=\frac12\int_0^1 1\,dx=\frac12.
$$

### PDF page 44

The sine coefficient comes from the interval on which $f=1$. With $u=n\pi x$,

$$
\begin{aligned}
b_n&=\int_0^1\sin(n\pi x)\,dx
=\frac{1}{n\pi}\int_0^{n\pi}\sin u\,du\\
&=\frac{1-\cos(n\pi)}{n\pi}=\frac{1-(-1)^n}{n\pi}.
\end{aligned}
$$

Thus $b_n=2/(n\pi)$ for odd $n$ and is zero for even $n$. Together with $a_0=1/2$ and $a_n=0$ for $n\ge1$, this gives

$$
\frac12+\frac{2}{\pi}\sin(\pi x)
+\frac{2}{3\pi}\sin(3\pi x)+\frac{2}{5\pi}\sin(5\pi x)+\cdots
=
\frac12+\sum_{n=0}^\infty\frac{2}{(2n+1)\pi}\sin[(2n+1)\pi x].
$$

### PDF page 45

#### Problem 1 — coupled oscillators

Masses $\mechanical{m}_A$ and $\mechanical{m}_B$ are attached to the walls by springs of stiffness $\mechanical{k}$ and to each other by a spring of stiffness $\mechanical{k}'$. The problem asks for the frequencies in three limits, then the general equations of motion and the general frequencies.

![[Kyle Kabasares - Vibrations and Waves - Two masses coupled by springs.png|**Fig. 43** Two outer springs connect the masses to the walls, and a middle spring couples their motion.]]

- **Very large $\mechanical{m}_A$.** In the infinite-mass limit one frequency tends to zero. With $A$ effectively fixed, $B$ oscillates at $\signal{\omega}_B=\sqrt{(\mechanical{k}+\mechanical{k}')/\mechanical{m}_B}$.
- **No outer springs.** For $\mechanical{k}=0$ the center of mass has a zero-frequency translation mode. In the center-of-mass frame, $\mechanical{m}_A\mechanical{x}_A=-\mechanical{m}_B\mechanical{x}_B$ and $\mechanical{m}_A\ddot{\mechanical{x}}_A=-\mechanical{k}'(\mechanical{x}_A-\mechanical{x}_B)$. The nonzero frequency is $\sqrt{\mechanical{k}'/\mechanical{M}}$, with reduced mass $\mechanical{M}=\mechanical{m}_A\mechanical{m}_B/(\mechanical{m}_A+\mechanical{m}_B)$.
- **No coupling spring.** For $\mechanical{k}'=0$, the independent frequencies are $\sqrt{\mechanical{k}/\mechanical{m}_A}$ and $\sqrt{\mechanical{k}/\mechanical{m}_B}$.

For the general case,

$$
\begin{aligned}
\mechanical{m}_A\ddot{\mechanical{x}}_A&=-\mechanical{k}\mechanical{x}_A
+\mechanical{k}'(\mechanical{x}_B-\mechanical{x}_A),\\
\mechanical{m}_B\ddot{\mechanical{x}}_B&=-\mechanical{k}\mechanical{x}_B
-\mechanical{k}'(\mechanical{x}_B-\mechanical{x}_A).
\end{aligned}
$$

### PDF page 46

For a normal mode write $\mechanical{x}_A=\mechanical{A}\cos(\signal{\omega}\mechanical{t})$ and $\mechanical{x}_B=\mechanical{B}\cos(\signal{\omega}\mechanical{t})$. The equations for the two amplitudes are

$$
\begin{pmatrix}
\signal{\omega}^2-(\mechanical{k}+\mechanical{k}')/\mechanical{m}_A & \mechanical{k}'/\mechanical{m}_A\\
\mechanical{k}'/\mechanical{m}_B & \signal{\omega}^2-(\mechanical{k}+\mechanical{k}')/\mechanical{m}_B
\end{pmatrix}
\begin{pmatrix}\mechanical{A}\\\mechanical{B}\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
$$

A nonzero amplitude vector requires a vanishing determinant. Expanding it gives

$$
\signal{\omega}^4
-\signal{\omega}^2(\mechanical{k}+\mechanical{k}')
\left(\frac1{\mechanical{m}_A}+\frac1{\mechanical{m}_B}\right)
+\frac{(\mechanical{k}+\mechanical{k}')^2-(\mechanical{k}')^2}
{\mechanical{m}_A\mechanical{m}_B}=0.
$$

The two squared frequencies are the roots of this quadratic in $\signal{\omega}^2$. The amplitude equations resolve the repeated $\mechanical{m}_A$ and missing prime in the handwritten determinant.

#### A. P. French, exercise 4-3

A mass of $0.2\,\unit{kg}$ hangs from a spring with stiffness $80\,\unit{N\,m^{-1}}$. The resistive force is $-\mechanical{b}\mechanical{v}$, with $\mechanical{b}=4\,\unit{N\,s\,m^{-1}}$. Part (a) asks for the free equation and its period. A crossed-out part (b) specifies a drive $\mechanical{F}_0\sin(\signal{\omega}\mechanical{t})$ with amplitude $2\,\unit{N}$ and writes the frequency as $30\,\unit{Hz}$. It asks for the steady amplitude.

Measured from the hanging equilibrium, the free equation is $\ddot{\mechanical{x}}+(\mechanical{b}/\mechanical{m})\dot{\mechanical{x}}+(\mechanical{k}/\mechanical{m})\mechanical{x}=0$. The squared damped frequency is $\signal{\omega}_0^2-\signal{\gamma}^2/4=300\,\unit{s^{-2}}$, giving $\signal{T}=2\pi/\signal{\omega}\simeq0.36\,\unit{s}$. This grouping of the factor $1/4$ gives the period boxed in the notes.

### PDF page 47

#### Driven-oscillator formula review

- **Undamped particular solution.** $\mechanical{x}=C\cos(\signal{\omega}\mechanical{t})$, with $C=(\mechanical{F}_0/\mechanical{m})/(\signal{\omega}_0^2-\signal{\omega}^2)$. With a positive amplitude $\lvert C\rvert$, use phase $0$ below $\signal{\omega}_0$ and $\pi$ above it.
- **Damped steady state.** $\mechanical{x}=\mechanical{A}\cos(\signal{\omega}\mechanical{t}-\signal{\delta})$, with the amplitude and phase lag on page 41.
- **Undamped response from rest at equilibrium.** $\mechanical{x}=C[\cos(\signal{\omega}\mechanical{t})-\cos(\signal{\omega}_0\mechanical{t})]$.
- **Underdamped response with a transient.** $\mechanical{x}=\mechanical{B}e^{-\signal{\gamma}\mechanical{t}/2}\cos(\signal{\omega}_1\mechanical{t}+\signal{\beta})+\mechanical{A}\cos(\signal{\omega}\mechanical{t}-\signal{\delta})$. The free angular frequency is $\signal{\omega}_1=\sqrt{\signal{\omega}_0^2-\signal{\gamma}^2/4}$, with the square root supplied by the earlier derivation.

#### Transverse waves and string dynamics

In a transverse wave the elements of the medium move perpendicular to the propagation direction.

![[Kyle Kabasares - Vibrations and Waves - Transverse displacements in a wave.png|**Fig. 44** The arrows show displacement across the direction of propagation.]]

On a uniform string of length $\mechanical{L}$ and mass $\mechanical{M}$, the density is $\mechanical{\mu}=\mechanical{M}/\mechanical{L}$. The ends at $0$ and $\mechanical{L}$ are fixed. For a short element with small tangent angles, subtract the two tension components:

$$
\begin{aligned}
\mechanical{F}_y&=\mechanical{T}[\sin(\mechanical{\theta}+\Delta\mechanical{\theta})-\sin\mechanical{\theta}]
\simeq\mechanical{T}\Delta\mechanical{\theta},\\
\mechanical{F}_x&=\mechanical{T}[\cos(\mechanical{\theta}+\Delta\mechanical{\theta})-\cos\mechanical{\theta}]\simeq0.
\end{aligned}
$$

![[Kyle Kabasares - Vibrations and Waves - Tension components in review.png|**Fig. 45** The net transverse force comes from the difference in slope across the string element.]]

### PDF page 48

The segment equation is $\mechanical{T}\Delta\mechanical{\theta}=(\mechanical{\mu}\Delta\mechanical{x})\mechanical{a}_y$. Using $\tan\mechanical{\theta}=\partial\mechanical{y}/\partial\mechanical{x}$, $\mechanical{a}_y=\partial^2\mechanical{y}/\partial\mechanical{t}^2$, and $\sec^2\mechanical{\theta}\simeq1$ gives

$$
\frac{\partial^2\mechanical{y}}{\partial\mechanical{x}^2}
=\frac{\mechanical{\mu}}{\mechanical{T}}\frac{\partial^2\mechanical{y}}{\partial\mechanical{t}^2}
=\frac{1}{\mechanical{v}^2}\frac{\partial^2\mechanical{y}}{\partial\mechanical{t}^2}.
$$

Separating $\mechanical{y}=f(\mechanical{x})\cos(\signal{\omega}\mechanical{t}-\signal{\phi})$ gives $f''=-(\signal{\omega}/\mechanical{v})^2f$. The solution satisfying the left fixed end is proportional to $\sin(\signal{\omega}\mechanical{x}/\mechanical{v})$. The right end requires $\signal{\omega}\mechanical{L}/\mechanical{v}=n\pi$. Hence $\signal{\lambda}_n=2\mechanical{L}/n$, $\signal{\omega}_n=(n\pi/\mechanical{L})\sqrt{\mechanical{T}/\mechanical{\mu}}=n\signal{\omega}_1$, and

$$
\mechanical{y}_n=\mechanical{A}_n\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\cos(\signal{\omega}_n\mechanical{t}-\signal{\phi}_n).
$$

For $\mechanical{L}=2.5\,\unit{m}$, $\mechanical{m}=0.01\,\unit{kg}$, and $\mechanical{T}=10\,\unit{N}$, the density is $\mechanical{\mu}=0.004\,\unit{kg\,m^{-1}}$ and $\mechanical{v}=50\,\unit{m\,s^{-1}}$. Therefore $\signal{\omega}_1=20\pi\,\unit{rad\,s^{-1}}$ and $\signal{f}_1=\signal{\omega}_1/(2\pi)=10\,\unit{Hz}$. The handwritten result differs from the substitution because the side calculation reverses the mass-to-length ratio.

### PDF page 49

Adding a clamp $0.5\,\unit{m}$ from one end imposes $\mechanical{y}(0,\mechanical{t})=\mechanical{y}(0.5\,\unit{m},\mechanical{t})=\mechanical{y}(2.5\,\unit{m},\mechanical{t})=0$. This is the same geometric condition as the first case on page 18.

![[Kyle Kabasares - Vibrations and Waves - Three fixed points.png|**Fig. 46** Both endpoints and the intermediate clamp are nodes.]]

#### Energy and superposition of modes

When a single normal mode passes through equilibrium, its energy is

$$
\energy{E}_n=\int_0^{\mechanical{L}}\frac12\mechanical{\mu}
\left[\mechanical{A}_n\signal{\omega}_n\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\right]^2
d\mechanical{x}.
$$

A superposition has the form

$$
\mechanical{y}(\mechanical{x},\mechanical{t})=
\sum_{n=1}^\infty\mechanical{A}_n\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\cos(\signal{\omega}_n\mechanical{t}-\signal{\phi}_n).
$$

#### Fourier analysis in space

At a fixed $\mechanical{t}_0$, put $\mechanical{B}_n=\mechanical{A}_n\cos(\signal{\omega}_n\mechanical{t}_0-\signal{\phi}_n)$. The spatial profile is the sum of the sine modes weighted by $\mechanical{B}_n$. Harmonic analysis of a known profile $\mechanical{y}(\mechanical{x})$ gives

$$
\mechanical{B}_n=\frac{2}{\mechanical{L}}\int_0^{\mechanical{L}}
\mechanical{y}(\mechanical{x})\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}.
$$

The page recalls the ramp $\mechanical{y}=k\mechanical{x}$ with endpoint values $0$ and $k\mechanical{L}$. It also writes a general periodic expansion with both sines and cosines. The ramp's half-range sine coefficients are calculated on page 21.

### PDF page 50

#### Example 1 — Fourier sine series of a ramp

For $\mechanical{y}(\mechanical{x})=k\mechanical{x}$ on $0<\mechanical{x}<\mechanical{L}$, put $u=\mechanical{x}$ and $dv=\sin(n\pi\mechanical{x}/\mechanical{L})\,d\mechanical{x}$ in integration by parts. Then

$$
\begin{aligned}
\mechanical{B}_n
&=\frac{2k}{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}\\
&=\frac{2k}{\mechanical{L}}\left\{
\left[-\frac{\mechanical{x}\mechanical{L}}{n\pi}\cos\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\right]_0^{\mechanical{L}}
+\frac{\mechanical{L}}{n\pi}\int_0^{\mechanical{L}}\cos\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
\right\}.
\end{aligned}
$$

In the last integral, $s=n\pi\mechanical{x}/\mechanical{L}$ gives $d\mechanical{x}=(\mechanical{L}/n\pi)\,ds$. The integral is proportional to $\sin(n\pi)-\sin 0=0$. The boundary term gives $\mechanical{B}_n=-2k\mechanical{L}\cos(n\pi)/(n\pi)$, so

$$
k\mechanical{x}
=\sum_{n=1}^\infty
-\frac{2k\mechanical{L}}{n\pi}\cos(n\pi)
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right),
\qquad 0<\mechanical{x}<\mechanical{L}.
$$

### PDF page 51

#### Examples 2 and 3 — sine coefficients

For $\mechanical{y}=\mechanical{A}\sin(\pi\mechanical{x}/\mechanical{L})$, the notebook gives a computer-algebra expression for the unnormalized projection:

$$
\int_0^{\mechanical{L}}\mechanical{y}(\mechanical{x})
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
=\frac{\mechanical{A}\mechanical{L}\sin(n\pi)}{\pi(1-n^2)}.
$$

At $n=1$ use the integral directly, which gives $\mechanical{A}\mechanical{L}/2$. For the other positive integers the integral is zero. Multiplying by the normalization $2/\mechanical{L}$ from page 49 gives $\mechanical{B}_1=\mechanical{A}$.

For the profile that is $\mechanical{A}$ on the first half and $-\mechanical{A}$ on the second, split the projection into integrals over the two halves. For the first integral, $s=n\pi\mechanical{x}/\mechanical{L}$ has upper limit $n\pi/2$, since $\mechanical{x}=\mechanical{L}/2$. Thus

$$
\int_0^{\mechanical{L}/2}\mechanical{A}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
=\frac{\mechanical{A}\mechanical{L}}{n\pi}[1-\cos(n\pi/2)].
$$

The full coefficient is on page 22.

#### Homework 2, problem 1(a) review

Write $\sin^2 u=(1-\cos 2u)/2$ in the mode energy integral. The cosine term integrates to zero at the endpoints, leaving

$$
\energy{E}_n=\frac14\mechanical{L}\mechanical{\mu}\mechanical{A}_n^2\signal{\omega}_n^2
=\frac14\mechanical{L}\left(\frac{\mechanical{M}}{\mechanical{L}}\right)
\mechanical{A}_n^2
\left[\frac{n\pi}{\mechanical{L}}\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}\right]^2.
$$

### PDF page 52

Use $\signal{\omega}=2\pi/\signal{T}=2\pi\signal{f}$ and $\mechanical{\mu}=\mechanical{M}/\mechanical{L}$. In the energy formula, the density cancels:

$$
\energy{E}_n
=\frac14\mechanical{\mu}\mechanical{L}\mechanical{A}_n^2
\frac{n^2\pi^2}{\mechanical{L}^2}\frac{\mechanical{T}}{\mechanical{\mu}}
=\frac{\mechanical{A}_n^2n^2\pi^2\mechanical{T}}{4\mechanical{L}}.
$$

For part 1(b), the stated superposition has the time factors $\cos(\signal{\omega}_1\mechanical{t})$ and $\cos(\signal{\omega}_3\mechanical{t}-\pi/4)$:

$$
\mechanical{y}(\mechanical{x},\mechanical{t})
=\mechanical{A}_1\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_1\mechanical{t})
+\mechanical{A}_3\sin\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_3\mechanical{t}-\pi/4).
$$

The energy is the sum of the two mode energies:

$$
\energy{E}_{\mathrm{tot}}=\energy{E}_1+\energy{E}_3
=\frac{\pi^2\mechanical{T}}{4\mechanical{L}}\left(\mechanical{A}_1^2+9\mechanical{A}_3^2\right).
$$

The square on $\mechanical{A}_1$ is present in the derivation above the handwritten box.

#### Homework 2, problem 2 review

Changing the tension to $\mechanical{T}_f=4\mechanical{T}_i$ at fixed $\mechanical{L}$ and $\mechanical{\mu}$ gives $\signal{\omega}_{3f}=2\signal{\omega}_{3i}$ and hence $\signal{f}_{3f}=2\signal{f}_{3i}$. The wave speed also doubles, $\mechanical{v}_{3f}=\sqrt{4\mechanical{T}_i/\mechanical{\mu}}=2\mechanical{v}_{3i}$. The ratio $\mechanical{v}/\signal{f}$ gives the wavelength.

### PDF page 53

The wavelength ratio is

$$
\frac{\signal{\lambda}_{3f}}{\signal{\lambda}_{3i}}
=\frac{\mechanical{v}_{3f}/\signal{f}_{3f}}{\mechanical{v}_{3i}/\signal{f}_{3i}}
=\frac{2}{2}=1.
$$

The same factor multiplies both ordinary frequencies because $\signal{f}=\signal{\omega}/(2\pi)$.

#### Homework 2, problem 3 review

The second mode has amplitude $0.01\,\unit{m}$, spatial coefficient $\pi/(2\,\unit{m})$, and angular frequency $12\pi\,\unit{rad\,s^{-1}}$. With tension $200\,\unit{N}$, the successive steps are

$$
\frac{2\pi}{\mechanical{L}}=\frac{\pi}{2\,\unit{m}}
\ \Longrightarrow\
\mechanical{L}=4\,\unit{m},
\qquad
\mechanical{v}=\frac{\mechanical{L}\signal{\omega}_2}{2\pi}=24\,\unit{m\,s^{-1}},
\qquad
\mechanical{M}=\frac{\mechanical{T}\mechanical{L}}{\mechanical{v}^2}\simeq1.4\,\unit{kg}.
$$

### PDF page 54

#### Waves and wave pulses review

A fixed pulse profile has the form $f(\mechanical{x}-\mechanical{v}\mechanical{t})$ when moving left to right and $f(\mechanical{x}+\mechanical{v}\mechanical{t})$ when moving right to left. For the example

$$
\mechanical{y}(\mechanical{x},\mechanical{t})=
\frac{\mechanical{b}^3}{\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2},
$$

the maximum height $\mechanical{b}$ occurs when $\mechanical{x}-\mechanical{v}\mechanical{t}=0$, or at $\mechanical{t}=\mechanical{x}/\mechanical{v}$ for a fixed position.

At $\mechanical{t}=0$, the half-height condition $\mechanical{b}/2=\mechanical{b}^3/(\mechanical{b}^2+\mechanical{x}^2)$ gives $\mechanical{x}=\pm\mechanical{b}$. At a later time,

$$
\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2=2\mechanical{b}^2
\ \Longrightarrow\
\mechanical{x}=\mechanical{v}\mechanical{t}\pm\mechanical{b}.
$$

The handwritten box gives the arrival time $(\mechanical{x}-\mechanical{b})/\mechanical{v}$ of the leading half-height point. The trailing point arrives at $(\mechanical{x}+\mechanical{b})/\mechanical{v}$.

### PDF page 55

Using the quotient rule on the pulse gives

$$
\mechanical{v}_y(\mechanical{x},\mechanical{t})
=\frac{\partial\mechanical{y}}{\partial\mechanical{t}}
=\frac{2\mechanical{b}^3\mechanical{v}(\mechanical{x}-\mechanical{v}\mechanical{t})}
{[\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2]^2}.
$$

At $\mechanical{t}=0$, this reduces to $2\mechanical{b}^3\mechanical{v}\mechanical{x}/(\mechanical{b}^2+\mechanical{x}^2)^2$. For any differentiable right-moving profile, $\partial\mechanical{y}/\partial\mechanical{t}=-\mechanical{v}\,\partial\mechanical{y}/\partial\mechanical{x}$. Differentiating again gives $\partial^2\mechanical{y}/\partial\mechanical{t}^2=\mechanical{v}^2\partial^2\mechanical{y}/\partial\mechanical{x}^2$.

#### Exercise 6-1(a)

A uniform string is $2.5\,\unit{m}$ long, has a mass of $0.01\,\unit{kg}$, and is under $10\,\unit{N}$ of tension. Here the notes compute $\mechanical{\mu}=\mechanical{M}/\mechanical{L}=4\times10^{-3}\,\unit{kg\,m^{-1}}$ and obtain

$$
\signal{\omega}_1=\frac{\pi}{\mechanical{L}}\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}
\simeq62.8\,\unit{rad\,s^{-1}},
\qquad
\signal{f}_1=\frac{\signal{\omega}_1}{2\pi}=10\,\unit{Hz}.
$$

### PDF page 56

#### Exercise 6-1(b)

The string is plucked and then touched $0.5\,\unit{m}$ from one end. Before touching, its modes occur at $10,20,30,\ldots\,\unit{Hz}$. A mode that survives must have a node at the touch point. The remaining $2.0\,\unit{m}$ span has a fundamental wavelength of $4.0\,\unit{m}$ and fundamental frequency

$$
\signal{f}=\frac{50\,\unit{m\,s^{-1}}}{4.0\,\unit{m}}=12.5\,\unit{Hz}.
$$

The lowest common harmonic of $10\,\unit{Hz}$ and $12.5\,\unit{Hz}$ is $50\,\unit{Hz}$. The original modes that persist have frequencies $50,100,150,\ldots\,\unit{Hz}$.

![[Kyle Kabasares - Vibrations and Waves - Fifth harmonic at the touch point.png|**Fig. 47** The touch point one fifth of the way along the string is a node of the fifth harmonic.]]

#### Wave reflection problem

Sketch the result for a pulse passing from a light rope to a heavy rope, from a heavy rope to a light rope, and from a rope to a very light thread. In the first case the incident pulse is partly transmitted upright and partly reflected upside down.

![[Kyle Kabasares - Vibrations and Waves - Reflection from a heavier rope.png|**Fig. 48** The light-to-heavy junction produces an inverted reflection and an upright transmission.]]

### PDF page 57

For a pulse incident from a heavy rope onto a light rope, the reflected pulse is upright. The transmitted profile is drawn taller than the incident one.

![[Kyle Kabasares - Vibrations and Waves - Reflection from a lighter rope.png|**Fig. 49** The heavy-to-light junction produces two upright pulses.]]

#### Exercise 7-6

A pulse takes $0.1\,\unit{s}$ to travel the length $\mechanical{L}$ of a string of mass $\mechanical{m}_s$. A mass $\mechanical{m}_b=100\mechanical{m}_s$ hangs over a pulley and supplies the tension $\mechanical{T}=\mechanical{m}_b\mechanical{g}$.

![[Kyle Kabasares - Vibrations and Waves - Hanging mass sets the tension.png|**Fig. 50** A hanging block supplies the tension in the horizontal string.]]

Use $\mechanical{v}=\mechanical{L}/(0.1\,\unit{s})$ and $\mechanical{v}^2=\mechanical{T}/\mechanical{\mu}$, with $\mechanical{\mu}=\mechanical{m}_s/\mechanical{L}$:

$$
\frac{\mechanical{L}^2}{(0.1\,\unit{s})^2}
=\frac{100\mechanical{m}_s\mechanical{g}\mechanical{L}}{\mechanical{m}_s},
\qquad
\mechanical{L}=100\mechanical{g}(0.1\,\unit{s})^2=9.8\,\unit{m}.
$$

For the third standing mode, $\signal{\omega}_3=3\pi\mechanical{v}/\mechanical{L}=30\pi\,\unit{rad\,s^{-1}}$, so the zero-phase solution is

$$
\mechanical{y}=\mechanical{A}\sin\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)
\cos[(30\pi\,\unit{s^{-1}})\mechanical{t}].
$$

### PDF page 58

#### Homework 3, problem 2 revisited

The time traces at $\mechanical{x}=0$ and $\mechanical{x}=1\,\unit{m}$ are proportional to $\sin(3\pi\mechanical{t})$ and $\sin(3\pi\mechanical{t}+\pi/8)$, respectively, with amplitude $0.2$ in the problem's units. The angular frequency is $3\pi\,\unit{rad\,s^{-1}}$, so $\signal{f}=3/2\,\unit{Hz}$.

For a right-moving wave, use $\mechanical{y}=\mechanical{A}\sin(\signal{\omega}\mechanical{t}-\signal{k}\mechanical{x}+\signal{\phi})$. Matching the first trace sets $\signal{\phi}=0$ modulo $2\pi$. Matching the second sets

$$
-\signal{k}(1\,\unit{m})+\signal{\phi}=\frac{\pi}{8}\pmod{2\pi},
\qquad
\frac{2\pi(1\,\unit{m})}{\signal{\lambda}}=2n\pi-\frac{\pi}{8}.
$$

The possible positive wavelengths are

$$
\signal{\lambda}=\frac{16}{16n-1}\,\unit{m},\qquad n=1,2,3,\ldots.
$$

This phase match includes the integer-cycle ambiguity left open in the earlier work on page 35.

### PDF page 59

#### Exercise 7-9

The sketch shows a triangular pulse moving right at $24\,\unit{m\,s^{-1}}$, with height marked $0.4\,\unit{m}$ and a position mark at $1.0$.

![[Kyle Kabasares - Vibrations and Waves - Right-moving triangular pulse.png|**Fig. 51** The initial triangular pulse and its direction of travel.]]

#### March 10, 2015 — wavefronts and boundary effects

This lecture introduces refraction and total internal reflection. Plane wavefronts appear as parallel lines in a two-dimensional section. Circular wavefronts expand radially from a source. The distance between successive equal-phase fronts is the wavelength $\signal{\lambda}$. A ray follows the local propagation direction and crosses the fronts at right angles.

![[Kyle Kabasares - Vibrations and Waves - Plane and circular wavefronts.png|**Fig. 52** Parallel fronts propagate in one direction and circular fronts propagate radially outward.]]

The Huygens–Fresnel construction treats every point on a wavefront as a secondary source. The new front is the envelope of the resulting wavelets after they propagate. The construction applies to both plane and circular waves.

![[Kyle Kabasares - Vibrations and Waves - Huygens wavelets.png|**Fig. 53** Secondary wavelets from a plane front reach the next plane front after traveling a distance ct.]]

### PDF page 60

#### Prelude to diffraction

The sketches apply the secondary-wavelet construction to a narrow opening. The outgoing fronts spread from the opening for both incident profiles shown.

![[Kyle Kabasares - Vibrations and Waves - Diffraction through an aperture.png|**Fig. 54** Wavefronts spread after passing through an opening in a barrier.]]

#### Refraction and Snell's law

When a wave crosses an interface, its frequency stays fixed. Its speed and wavelength can change. In one period $\signal{T}$, the wave travels $\mechanical{v}\signal{T}=\signal{\lambda}$ in the corresponding medium.

![[Kyle Kabasares - Vibrations and Waves - Secondary wavelets at a refracting boundary.png|**Fig. 55** The transmitted wavelets construct a new front with a different orientation.]]

Let $\mechanical{\theta}_i$ and $\mechanical{\theta}_r$ be the angles of incidence and refraction measured from the normal. The right triangles in the sketch share the distance $\mechanical{\ell}$ measured along the interface:

$$
\sin\mechanical{\theta}_i=\frac{\signal{\lambda}_1}{\mechanical{\ell}},
\qquad
\sin\mechanical{\theta}_r=\frac{\signal{\lambda}_2}{\mechanical{\ell}}.
$$

![[Kyle Kabasares - Vibrations and Waves - Geometry of Snells law.png|**Fig. 56** The wavelength and the common interface distance give the sine of each ray angle.]]

With $\signal{\lambda}_i=\mechanical{v}_i/\signal{f}$ and the optical index $n_i=\mechanical{c}/\mechanical{v}_i$, the ratios give

$$
\frac{\sin\mechanical{\theta}_i}{\sin\mechanical{\theta}_r}
=\frac{\signal{\lambda}_1}{\signal{\lambda}_2}
=\frac{\mechanical{v}_1}{\mechanical{v}_2}
=\frac{n_2}{n_1}.
$$

For light, $\mechanical{c}$ is the speed in vacuum. The notebook also mentions a relative index defined using the speed in air as a reference.

### PDF page 61

#### Refraction examples

A horizontal ray in the prism meets the slanted face with incidence angle $30^\circ$. The outgoing ray is deflected $22.6^\circ$ from horizontal, so its angle to the normal is $52.6^\circ$. Thus

$$
\frac{n_2}{n_1}=\frac{\sin30^\circ}{\sin52.6^\circ}\simeq0.63.
$$

Taking the exterior to have $n_2\simeq1$ gives $n_1\simeq1.59$.

![[Kyle Kabasares - Vibrations and Waves - Refraction at a prism face.png|**Fig. 57** The ray bends away from the normal when leaving the prism.]]

For three media with parallel interfaces, the example gives $n_1\sin20^\circ=n_2\sin30^\circ=n_3\sin10^\circ$. Eliminating the middle index gives $n_3=n_1\sin20^\circ/\sin10^\circ$.

#### Total internal reflection

For incidence from higher to lower index, $n_1>n_2$, the refracted angle increases to $90^\circ$ at the critical angle:

$$
\mechanical{\theta}_c=\arcsin\left(\frac{n_2}{n_1}\right).
$$

At the threshold the refracted ray is grazing. Above it the ray undergoes total internal reflection.

![[Kyle Kabasares - Vibrations and Waves - Critical incidence at an interface.png|**Fig. 58** The refracted direction approaches the interface as the angle of incidence approaches the critical value.]]

In the right-triangular prism example, the threshold is $\mechanical{\theta}_c\simeq42^\circ$. The interior angle $\mechanical{\alpha}$ at $C$ is complementary to the incidence angle on the slanted face, so the upper bound for $\mechanical{\alpha}$ is $48^\circ$.

![[Kyle Kabasares - Vibrations and Waves - Prism total internal reflection.png|**Fig. 59** A horizontal ray meets the slanted face of the prism at the critical angle in the limiting sketch.]]

### PDF page 62

A light source is $3\,\unit{m}$ below a water–air interface. With $n_{\mathrm{water}}=1.33$ and $n_{\mathrm{air}}=1$, the critical angle is $\arcsin(1/1.33)\simeq49^\circ$. The boundary of the region through which light escapes has radius $\mechanical{R}$ given by

$$
\tan\mechanical{\theta}_c=\frac{\mechanical{R}}{3\,\unit{m}},
\qquad
\mechanical{R}\simeq3.4\,\unit{m},
\qquad
\mechanical{D}=2\mechanical{R}\simeq6.8\,\unit{m}.
$$

![[Kyle Kabasares - Vibrations and Waves - Escape cone from an underwater source.png|**Fig. 60** The limiting ray reaches the water surface at the critical angle, defining the radius of the escape region.]]

#### March 12, 2015 — Doppler effect

Relative motion between the wave source and the observer changes the detected frequency. The sketches compare a source moving slower than the wavefronts, at the wavefront speed, and faster than the wavefronts.

![[Kyle Kabasares - Vibrations and Waves - Subsonic sonic and supersonic wavefronts.png|**Fig. 61** Fronts bunch ahead of a subsonic source, meet at the source at Mach 1, and form a cone behind a supersonic source.]]

Let $\mechanical{u}$ be the source speed and $\mechanical{v}$ the wavefront speed in the medium. The source period is $\signal{\tau}=1/\signal{f}_{\mathrm{source}}$. If the first front is emitted at $S_0$, the $n$th later front is emitted at $S_n$ after $\mechanical{t}_n=n\signal{\tau}$, at a displacement $\mechanical{x}_n=\mechanical{u}n\signal{\tau}$ along the source path. For an observation point $P$, write $\mechanical{r}_0=S_0P$ and $\mechanical{r}_n=S_nP$. The first front reaches $P$ at $\mechanical{t}_p=\mechanical{r}_0/\mechanical{v}$.

![[Kyle Kabasares - Vibrations and Waves - Source positions and observer geometry.png|**Fig. 62** The source moves from S₀ to Sₙ as the distances to the fixed observation point P change.]]

### PDF page 63

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

### PDF page 64

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

### PDF page 65

#### Final exam review — moving observer

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

### PDF page 66

#### Doppler effect for a moving source

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

### PDF page 67

#### Additional review by Doc Shuster

In a time trace, the period $\signal{T}$ is the time between successive crests, and $\signal{f}=1/\signal{T}$. In a spatial snapshot, the distance between successive crests is the wavelength $\signal{\lambda}$. The amplitude is measured from equilibrium to a crest or trough.

![[Kyle Kabasares - Vibrations and Waves - Period and amplitude.png|**Fig. 69** A time trace marks one period and the amplitude.]]

![[Kyle Kabasares - Vibrations and Waves - Wavelength crest and trough.png|**Fig. 70** A spatial snapshot labels the wavelength, a crest, and a trough.]]

Imagine moving a pencil up and down while pulling a sheet of paper sideways. The periodic motion traces out a spatial profile. One wavelength advances in a period, so $\mechanical{v}=\Delta\mechanical{x}/\Delta\mechanical{t}=\signal{\lambda}/\signal{T}=\signal{\lambda}\signal{f}$.

![[Kyle Kabasares - Vibrations and Waves - Rope between supports.png|**Fig. 71** A stretched rope is held between two supports.]]

For a uniform rope, the linear density is $\mechanical{\mu}=\mechanical{M}/\mechanical{L}$. For a small segment it is $d\mechanical{m}/d\mechanical{L}$.

![[Kyle Kabasares - Vibrations and Waves - Linear density of a rope.png|**Fig. 72** A short rope segment shows the mass and length used to define linear density.]]

Assuming the wave speed depends only on the tension $\mechanical{F}_T$ and the linear density, write $\mechanical{v}\propto\mechanical{F}_T^a\mechanical{\mu}^b$. The time dimension gives $-2a=-1$, and the mass dimension gives $a+b=0$. Thus $a=1/2$ and $b=-1/2$. The wave equation fixes the dimensionless constant to one, yielding $\mechanical{v}=\sqrt{\mechanical{F}_T/\mechanical{\mu}}$.

### PDF page 68

#### Periodic traveling wave as a function of position and time

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

### PDF page 69

#### Longitudinal and transverse waves

In a transverse wave the displacement is perpendicular to the propagation axis. In a longitudinal wave the displacement is parallel to that axis, and the medium develops regions of compression and rarefaction.

![[Kyle Kabasares - Vibrations and Waves - Transverse and longitudinal profiles.png|**Fig. 75** A transverse displacement profile is compared with a longitudinal compression and rarefaction.]]

#### Effects of boundary conditions

At the free end, represented by a sliding ring, the incident pulse raises the ring and reflects without inversion. At the fixed end, represented by a knot, the displacement at the end remains zero. Energy remains in the moving string even when the incident and reflected profiles overlap and cancel the displacement. The reflected pulse leaves the fixed boundary inverted.

![[Kyle Kabasares - Vibrations and Waves - Pulse reflection sequences.png|**Fig. 76** Time sequences compare reflection at a free end and at a fixed end.]]

#### Exercise 8-8

A source emitting $2000\,\unit{Hz}$ moves away from a stationary listener at $60$ miles per hour, taken as about $26.6\,\unit{m\,s^{-1}}$ in the notes. With sound speed $334\,\unit{m\,s^{-1}}$,

$$
\signal{f}_o
=\frac{\signal{f}}{1+\mechanical{u}/\mechanical{v}}
=\frac{2000\,\unit{Hz}}{1+26.6/334}
\simeq1852\,\unit{Hz}.
$$

![[Kyle Kabasares - Vibrations and Waves - Receding source example.png|**Fig. 77** The vehicle carrying the source moves away from the listener.]]

### PDF page 70

#### Huygens' principle review

Treat each point on a wavefront as a source of secondary waves. At an opening the outgoing fronts can spread in directions beyond the original beam. For a plane wave the secondary wavelets reinforce along the forward envelope, giving another plane front.

![[Kyle Kabasares - Vibrations and Waves - Huygens principle at an opening.png|**Fig. 78** A wavefront reaching an opening gives rise to spreading wavelets.]]

![[Kyle Kabasares - Vibrations and Waves - Plane front from secondary sources.png|**Fig. 79** Secondary wavelets and the forward direction of constructive interference.]]

#### Exercise 36

The emitted frequency is $400\,\unit{Hz}$, the approach speed is $25\,\unit{m\,s^{-1}}$, and sound travels at $340\,\unit{m\,s^{-1}}$. For a moving source and fixed listener,

$$
\signal{f}'=\frac{400\,\unit{Hz}}{1-25/340}\simeq431.7\,\unit{Hz}.
$$

The handwritten box gives $431.2\,\unit{Hz}$, while the substitution shown gives $431.7\,\unit{Hz}$.

![[Kyle Kabasares - Vibrations and Waves - Moving source and fixed listener.png|**Fig. 80** The source approaches the stationary listener.]]

For a fixed source and approaching listener, $\signal{f}'=(1+25/340)(400\,\unit{Hz})\simeq429\,\unit{Hz}$.

![[Kyle Kabasares - Vibrations and Waves - Fixed source and moving listener.png|**Fig. 81** The listener moves toward the source.]]

#### Exercise 37(a)

The vehicle carrying the source travels at $90\,\unit{km\,h^{-1}}=25\,\unit{m\,s^{-1}}$ and emits a $600\,\unit{Hz}$ tone.

![[Kyle Kabasares - Vibrations and Waves - Vehicle sound source.png|**Fig. 82** A vehicle carries the source toward the listener.]]

### PDF page 71

For exercise 37, take the sound speed as $343\,\unit{m\,s^{-1}}$. The moving-source formula gives $600/(1-25/343)\simeq647\,\unit{Hz}$ on approach and $600/(1+25/343)\simeq559\,\unit{Hz}$ on recession.

![[Kyle Kabasares - Vibrations and Waves - Vehicle receding after passing.png|**Fig. 83** After passing the listener, the vehicle moves away and the tone shifts down.]]

#### Exercises 38 and 39

In exercise 38, a source emits at $\signal{f}=25\,\unit{kHz}$ and is heard at $\signal{f}'=20\,\unit{kHz}$. For a receding source and fixed observer,

$$
\mechanical{u}=\mechanical{v}\left(\frac{\signal{f}}{\signal{f}'}-1\right)
=(343\,\unit{m\,s^{-1}})\left(\frac{25}{20}-1\right)
\simeq85.7\,\unit{m\,s^{-1}}.
$$

![[Kyle Kabasares - Vibrations and Waves - Receding high-frequency source.png|**Fig. 84** The source moves away from a fixed observer.]]

In exercise 39, $\signal{f}=800\,\unit{Hz}$ and $\signal{f}'=900\,\unit{Hz}$. The source approaches at speed $\mechanical{u}=\mechanical{v}(1-\signal{f}/\signal{f}')\simeq38.1\,\unit{m\,s^{-1}}$.

#### Exercise 78

The wire is $0.75\,\unit{m}$ long with diameter $0.46\,\unit{mm}$ and linear density $1.3\,\unit{g\,m^{-1}}$. Its mass is $\mechanical{M}=\mechanical{\mu}\mechanical{L}=0.975\,\unit{g}$.

![[Kyle Kabasares - Vibrations and Waves - Wire dimensions.png|**Fig. 85** The wire's length and circular cross section set the geometry for the tensile calculation.]]

For wave speed $250\,\unit{m\,s^{-1}}$ and frequency $196\,\unit{Hz}$, the wavelength is $250/196\simeq1.27\,\unit{m}$. The tension is $\mechanical{T}=\mechanical{\mu}\mechanical{v}^2=81.25\,\unit{N}$. The tensile stress $\mechanical{F}/\mechanical{A}$ is related to strain by $\mechanical{F}/\mechanical{A}=\mechanical{Y}\Delta\mechanical{L}/\mechanical{L}$, with Young's modulus $\mechanical{Y}=20\times10^{10}\,\unit{N\,m^{-2}}$.

### PDF page 72

For the wire in exercise 78, the cross-sectional area is $\mechanical{A}=\pi\mechanical{r}^2$, with $\mechanical{r}=0.23\,\unit{mm}$. Taking the applied force as the tension, the elongation is

$$
\Delta\mechanical{L}
=\frac{\mechanical{F}\mechanical{L}}{\mechanical{Y}\pi\mechanical{r}^2}
=\frac{(81.25\,\unit{N})(0.75\,\unit{m})}
{(20\times10^{10}\,\unit{N\,m^{-2}})\pi(0.23\times10^{-3}\,\unit{m})^2}
\simeq1.83\,\unit{mm}.
$$

#### Snell's law review

Snell's law gives $n_1\sin\mechanical{\theta}_1=n_2\sin\mechanical{\theta}_2$. For incidence from the higher-index side, $\mechanical{\theta}_c=\arcsin(n_2/n_1)$. At fixed frequency, $\sin\mechanical{\theta}_1/\sin\mechanical{\theta}_2=\signal{\lambda}_1/\signal{\lambda}_2=\mechanical{v}_1/\mechanical{v}_2$.

![[Kyle Kabasares - Vibrations and Waves - Critical ray from below the surface.png|**Fig. 86** The ray at critical incidence grazes the interface after refraction.]]

Optical dispersion is the wavelength dependence of the refractive index. In the normal-dispersion example here, the index increases as the wavelength decreases.

#### Knight Physics, exercise 23.58

A ray in air hits the prism at $50^\circ$ to the normal. The violet ray has angle $30^\circ$ inside the prism, so $n_{\mathrm{violet}}=\sin50^\circ/\sin30^\circ\simeq1.53$. Since $n_{\mathrm{violet}}=1.02n_{\mathrm{red}}$, use $n_{\mathrm{red}}\simeq1.50$. The red ray's internal angle is $\mechanical{\theta}_{\mathrm{red}}=\arcsin(\sin50^\circ/1.50)\simeq30.7^\circ$.

![[Kyle Kabasares - Vibrations and Waves - Prism dispersion of red and violet.png|**Fig. 87** The prism refracts red and violet light at different angles.]]

### PDF page 73

#### Homework 4, problem 1 — optical fiber

A ray enters from air with wavelength $850\,\unit{nm}$ and incidence angle $20.5^\circ$ to the normal. Inside the fiber its wavelength is $574.3\,\unit{nm}$. The sketch gives the cladding index as $1.44$.

![[Kyle Kabasares - Vibrations and Waves - Ray entering an optical fiber.png|**Fig. 88** Refraction at the entrance face sets the ray direction inside the core.]]

At fixed frequency, the wavelength ratio gives the core index:

$$
n_2=n_1\frac{\signal{\lambda}_1}{\signal{\lambda}_2}
=\frac{850}{574.3}\simeq1.480.
$$

Snell's law at the entrance gives $\mechanical{\theta}_2=\arcsin(\sin20.5^\circ/1.480)\simeq13.7^\circ$. The angle to the normal at the side wall is $\mechanical{\theta}_3=90^\circ-\mechanical{\theta}_2\simeq76.3^\circ$. The angle to the wall itself is $\mechanical{\theta}_3'=\mechanical{\theta}_2$.

![[Kyle Kabasares - Vibrations and Waves - Complementary ray angles in the fiber.png|**Fig. 89** The entrance and side-wall normals are perpendicular, so the corresponding ray angles are complementary.]]

#### Problem 2 — lateral shift through glass

The incident ray makes $30^\circ$ with the glass surface and thus $\mechanical{\theta}_1=60^\circ$ with its normal. For $n_{\mathrm{glass}}=1.5$, the refracted angle is $\mechanical{\theta}_2=\arcsin(\sin60^\circ/1.5)\simeq35.3^\circ$. A ray entering a higher-index medium bends toward the normal and a ray entering a lower-index medium bends away from it.

![[Kyle Kabasares - Vibrations and Waves - Lateral offset through a glass slab.png|**Fig. 90** The ray emerges parallel to its incident direction with a lateral offset.]]

For slab thickness $\mechanical{t}_{\mathrm{slab}}$, the ray travels $\mechanical{\ell}=\mechanical{t}_{\mathrm{slab}}/\cos\mechanical{\theta}_2$ in the glass. With $\mechanical{\phi}=\mechanical{\theta}_1-\mechanical{\theta}_2$, the perpendicular offset is

$$
\mechanical{d}=\mechanical{\ell}\sin\mechanical{\phi}
=\frac{\mechanical{t}_{\mathrm{slab}}\sin(\mechanical{\theta}_1-\mechanical{\theta}_2)}{\cos\mechanical{\theta}_2}.
$$

The boxed offset is $0.51\,\unit{cm}$, consistent with a slab thickness of $1\,\unit{cm}$.

### PDF page 74

#### Homework 4, problem 3 — prism exit

At the threshold for total internal reflection from glass of index $1.5$ into air, the outgoing ray is at $90^\circ$ to the normal. Therefore

$$
\mechanical{\theta}_c=\arcsin(1.0/1.5)=41.8^\circ\simeq42^\circ.
$$

The ray makes the complementary angle $90^\circ-\mechanical{\theta}_c\simeq48^\circ$ to the exit face.

![[Kyle Kabasares - Vibrations and Waves - Critical angle at a prism exit.png|**Fig. 91** The internal ray approaches the slanted prism face at critical incidence.]]

#### Quiz 1 — rectangular and polar forms

Write $z=a+jb=Ae^{j\theta}$. Euler's identity gives $a=A\cos\theta$ and $b=A\sin\theta$. Thus $A=\sqrt{a^2+b^2}$ and, for $a\ne0$, $\tan\theta=b/a$. For $z\ne0$, the signs of the sine and cosine select the phase quadrant.

#### Quiz 2 — mass between springs

A mass $\mechanical{m}=100\,\unit{g}$ lies between two springs of stiffness $\mechanical{k}=0.1\,\unit{N\,m^{-1}}$ each. Initially $\mechanical{x}=0$ and $\mechanical{v}=0.2\,\unit{m\,s^{-1}}$.

![[Kyle Kabasares - Vibrations and Waves - Mass between identical springs.png|**Fig. 92** Two identical springs both contribute to the restoring force on the mass.]]

The effective stiffness is $2\mechanical{k}$, so $\signal{\omega}=\sqrt{2\mechanical{k}/\mechanical{m}}=\sqrt2\,\unit{rad\,s^{-1}}$ and $\signal{f}=\sqrt2/(2\pi)\,\unit{Hz}$. For $\mechanical{x}=\mechanical{A}\sin(\signal{\omega}\mechanical{t}+\signal{\phi})$, the initial position requires $\sin\signal{\phi}=0$. Taking the amplitude positive, the positive initial velocity gives $\signal{\phi}=0$ and $\mechanical{A}=0.2/\sqrt2\,\unit{m}$.

### PDF page 75

#### Quiz 4 — mass at the midpoint of a string

A mass $\mechanical{m}$ is attached at the midpoint of a string of length $\mechanical{L}$ under tension $\mechanical{T}$. For a small transverse displacement $\mechanical{y}$, each half contributes a restoring component approximately equal to $-\mechanical{T}\mechanical{y}/(\mechanical{L}/2)$. Thus

$$
\mechanical{m}\ddot{\mechanical{y}}\simeq-\frac{4\mechanical{T}}{\mechanical{L}}\mechanical{y},
\qquad
\signal{\omega}=2\sqrt{\frac{\mechanical{T}}{\mechanical{m}\mechanical{L}}}.
$$

![[Kyle Kabasares - Vibrations and Waves - Transverse motion of a midpoint mass.png|**Fig. 93** The two tension forces pull a displaced midpoint mass back toward equilibrium.]]

#### Quiz 2 wave solutions — problem 2

The standing-wave condition is $\signal{\lambda}_n=2\mechanical{L}/n$. Using $\mechanical{L}=310.372\,\unit{mm}$ and $\signal{\lambda}=632.9924\,\unit{nm}$ gives $n\simeq980650$. The adjacent mode numbers listed are $980651$ and $980649$, whose wavelengths follow from $2\mechanical{L}/(n\pm1)$.

![[Kyle Kabasares - Vibrations and Waves - Half-wave fundamental.png|**Fig. 94** The fundamental fits half a wavelength between the boundaries.]]

#### Problem 3(a) — two coherent sources

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

### PDF page 76

#### Oscillator review

The normalized forced equation is $\ddot{\mechanical{x}}+\signal{\gamma}\dot{\mechanical{x}}+\signal{\omega}_0^2\mechanical{x}=a_0\cos(\signal{\omega}\mechanical{t})$, with $a_0=\mechanical{F}_0/\mechanical{m}$ in the earlier notation. Add the steady solution to the appropriate free solution:

$$
\mechanical{x}-\mechanical{x}_{\mathrm{ss}}=
\begin{cases}
C_1e^{-\signal{\gamma}\mechanical{t}/2}
\cos\big(\sqrt{\signal{\omega}_0^2-\signal{\gamma}^2/4}\,\mechanical{t}+\signal{\alpha}\big),
&\signal{\omega}_0>\signal{\gamma}/2,\\
(C_1+C_2\mechanical{t})e^{-\signal{\gamma}\mechanical{t}/2},
&\signal{\omega}_0=\signal{\gamma}/2,\\
C_1e^{-\signal{\Gamma}_1\mechanical{t}}+C_2e^{-\signal{\Gamma}_2\mechanical{t}},
&\signal{\omega}_0<\signal{\gamma}/2,
\end{cases}
$$

where $\signal{\Gamma}_{1,2}=\signal{\gamma}/2\pm\sqrt{\signal{\gamma}^2/4-\signal{\omega}_0^2}$. The steady response is $\mechanical{x}_{\mathrm{ss}}=\mechanical{A}(\signal{\omega})\cos[\signal{\omega}\mechanical{t}-\signal{\delta}(\signal{\omega})]$, with

$$
\mechanical{A}(\signal{\omega})
=\frac{a_0}{\sqrt{(\signal{\omega}_0^2-\signal{\omega}^2)^2+\signal{\gamma}^2\signal{\omega}^2}},
\qquad
\tan\signal{\delta}(\signal{\omega})=\frac{\signal{\gamma}\signal{\omega}}{\signal{\omega}_0^2-\signal{\omega}^2}.
$$

#### Nondispersive wave equation and energy

For $\partial_{\mechanical{x}}^2\mechanical{y}=\mechanical{v}^{-2}\partial_{\mechanical{t}}^2\mechanical{y}$, the speed is $\sqrt{\mechanical{T}/\mechanical{\mu}}$ on a string or $\sqrt{\mechanical{k}/\mechanical{\rho}}$ in a gas, where $\mechanical{k}$ is the relevant bulk modulus. The string's energy densities per unit length and its instantaneous power in the positive $\mechanical{x}$ direction are

$$
\frac{d\energy{K}}{d\mechanical{x}}=\frac12\mechanical{\mu}(\partial_{\mechanical{t}}\mechanical{y})^2,
\qquad
\frac{d\energy{U}}{d\mechanical{x}}=\frac12\mechanical{T}(\partial_{\mechanical{x}}\mechanical{y})^2,
\qquad
\energy{P}=-\mechanical{T}(\partial_{\mechanical{t}}\mechanical{y})(\partial_{\mechanical{x}}\mechanical{y}).
$$

The reflection and transmission amplitude coefficients at the junction are $R=(\mechanical{v}_2-\mechanical{v}_1)/(\mechanical{v}_2+\mechanical{v}_1)$ and $T=2\mechanical{v}_2/(\mechanical{v}_2+\mechanical{v}_1)$.

### PDF page 77

#### Fourier series and dispersion review

For a $2\pi$-periodic function of $\theta$, write

$$
\begin{aligned}
f(\theta)&\sim\frac{A_0}{2}+\sum_{m=1}^{\infty}[A_m\cos(m\theta)+B_m\sin(m\theta)],\\
A_m&=\frac1\pi\int_{-\pi}^{\pi}f(\theta)\cos(m\theta)\,d\theta,\qquad m=0,1,\ldots,\\
B_m&=\frac1\pi\int_{-\pi}^{\pi}f(\theta)\sin(m\theta)\,d\theta,\qquad m=1,2,\ldots.
\end{aligned}
$$

The constant term appears once, outside the sum. For dispersive waves, $\mechanical{v}_p=\signal{\omega}/\signal{k}$ and $\mechanical{v}_g=d\signal{\omega}/d\signal{k}$.

#### Trigonometric identities

$$
\begin{aligned}
\sin(a+b)&=\sin a\cos b+\cos a\sin b,\\
\cos(a+b)&=\cos a\cos b-\sin a\sin b,\\
\sin a+\sin b&=2\sin\left(\frac{a+b}{2}\right)\cos\left(\frac{a-b}{2}\right),\\
\sin a-\sin b&=2\cos\left(\frac{a+b}{2}\right)\sin\left(\frac{a-b}{2}\right),\\
\cos a+\cos b&=2\cos\left(\frac{a+b}{2}\right)\cos\left(\frac{a-b}{2}\right),\\
\cos a-\cos b&=-2\sin\left(\frac{a+b}{2}\right)\sin\left(\frac{a-b}{2}\right).
\end{aligned}
$$

The phase-shift identities are $\sin(\theta\pm\pi/2)=\pm\cos\theta$, $\cos(\theta\pm\pi/2)=\mp\sin\theta$, $\sin(\theta\pm\pi)=-\sin\theta$, and $\cos(\theta\pm\pi)=-\cos\theta$.

#### Complex exponentials

$$
e^{j\theta}=\cos\theta+j\sin\theta,\qquad
\cos\theta=\frac{e^{j\theta}+e^{-j\theta}}{2},\qquad
\sin\theta=\frac{e^{j\theta}-e^{-j\theta}}{2j}.
$$

Subtracting Euler's identities at the two opposite angles supplies the $j$ in the sine denominator.

### PDF page 78

Expand the exponential as $e^x=1+x+x^2/2!+x^3/3!+\cdots$. Substituting $x=j\theta$ gives

$$
e^{j\theta}=1+j\theta-\frac{\theta^2}{2!}-j\frac{\theta^3}{3!}+\frac{\theta^4}{4!}+\cdots
=\cos\theta+j\sin\theta.
$$

Grouping the even and odd powers yields the cosine and sine series. The polar form of a complex number is $z=a+jb=\lvert z\rvert e^{j\theta}$.

#### Knight Physics — equal travel times in joined strings

The two segments have total length $4\,\unit{m}$ and linear densities $\mechanical{\mu}_1=2.0\,\unit{g\,m^{-1}}$ and $\mechanical{\mu}_2=4.0\,\unit{g\,m^{-1}}$.

![[Kyle Kabasares - Vibrations and Waves - Pulses in two joined segments.png|**Fig. 96** The two pulses travel away from the junction through segments of different linear density.]]

With the same tension on both segments,

$$
\frac{\mechanical{v}_1}{\mechanical{v}_2}
=\frac{\sqrt{\mechanical{T}/\mechanical{\mu}_1}}{\sqrt{\mechanical{T}/\mechanical{\mu}_2}}
=\sqrt2.
$$

For simultaneous arrival at the outer ends, require $\mechanical{L}_1/\mechanical{v}_1=\mechanical{L}_2/\mechanical{v}_2$. Therefore the faster pulse must travel farther, with $\mechanical{L}_1=\sqrt2\,\mechanical{L}_2$.

### PDF page 79

The equal-time condition gives $\mechanical{L}_1=\sqrt2\,\mechanical{L}_2$. Together with $\mechanical{L}_1+\mechanical{L}_2=4\,\unit{m}$, this gives

$$
\mechanical{L}_2=\frac{4\,\unit{m}}{1+\sqrt2}\simeq1.7\,\unit{m},
\qquad
\mechanical{L}_1=\frac{4\sqrt2\,\unit{m}}{1+\sqrt2}\simeq2.3\,\unit{m}.
$$

The length relation on page 78 fixes the index on the term multiplied by $\sqrt2$ and agrees with the boxed lengths.

#### Three classes of damping

- **Underdamped.** The motion oscillates with a decaying envelope $\mechanical{A}(\mechanical{t})=\mechanical{A}_0e^{-\mechanical{b}\mechanical{t}/(2\mechanical{m})}$.
- **Critically damped.** The motion in the sketch returns quickly toward equilibrium without oscillating. The notes give a pendulum in maple syrup as an illustration of motion with strong damping.
- **Overdamped.** The return toward equilibrium is also nonoscillatory, but relaxation is slower in the example shown.

![[Kyle Kabasares - Vibrations and Waves - Three damping classes.png|**Fig. 97** The sketches compare oscillatory decay, critical damping, and a slower overdamped return.]]

### PDF page 80

#### Standing waves and endpoint conditions

A standing wave has fixed nodes, where the displacement remains zero, and antinodes, where the oscillation amplitude is greatest. A closed tube has displacement nodes at its ends.

![[Kyle Kabasares - Vibrations and Waves - Displacement node in a closed tube.png|**Fig. 98** A tube closed at both ends supports standing waves with displacement nodes.]]

![[Kyle Kabasares - Vibrations and Waves - Fixed nodes and moving antinodes.png|**Fig. 99** The profile changes over time while the nodes remain at fixed positions.]]

For a string with two fixed ends, the first three modes fit one, two, or three half-wavelengths along the string. In general,

$$
\signal{\lambda}_n=\frac{2\mechanical{L}}{n},\qquad
\signal{f}_n=\frac{n\mechanical{v}}{2\mechanical{L}}
=\frac{n}{2\mechanical{L}}\sqrt{\frac{\mechanical{F}_T}{\mechanical{\mu}}}.
$$

![[Kyle Kabasares - Vibrations and Waves - First three modes with fixed ends.png|**Fig. 100** The first three fixed-end modes contain one, two, and three half-wavelengths.]]

For one fixed and one free end, the fixed end is a node and the free end is an antinode. The length is one, three, or five quarter-wavelengths for the first three allowed modes, so

$$
\signal{\lambda}_n=\frac{4\mechanical{L}}{2n-1},
\qquad
\signal{f}_n=\frac{\mechanical{v}}{4\mechanical{L}}(2n-1).
$$

Only the odd harmonics of the fundamental occur. The labels in the sketch count the allowed modes in order.

![[Kyle Kabasares - Vibrations and Waves - First three modes with a free end.png|**Fig. 101** The first three allowed modes for a rope with one fixed and one free end.]]

### PDF page 81

#### Fourier series review

For a string fixed at both ends and released from rest, write

$$
\mechanical{y}(\mechanical{x},\mechanical{t})
=\sum_{n=1}^\infty \mechanical{B}_n\sin(\signal{k}_n\mechanical{x})
\cos(\signal{\omega}_n\mechanical{t}),
\qquad
\signal{k}_n=\frac{n\pi}{\mechanical{L}},\quad
\signal{\omega}_n=\mechanical{v}\signal{k}_n.
$$

At $\mechanical{t}=0$, all the cosines are one and the first two terms are $\mechanical{B}_1\sin(\pi\mechanical{x}/\mechanical{L})+\mechanical{B}_2\sin(2\pi\mechanical{x}/\mechanical{L})$.

![[Kyle Kabasares - Vibrations and Waves - Initial shape of a plucked string.png|**Fig. 102** The string initially has a piecewise linear profile between fixed endpoints.]]

The general Fourier representation of a suitable $2\pi$-periodic function is

$$
f(x)\sim\frac{A_0}{2}
+\sum_{m=1}^\infty A_m\cos(mx)
+\sum_{m=1}^\infty B_m\sin(mx).
$$

Integrating over one period eliminates all nonconstant sines and cosines because their positive and negative signed areas cancel. Therefore

$$
\int_{-\pi}^{\pi}f(x)\,dx=\pi A_0,
\qquad
A_0=\frac1\pi\int_{-\pi}^{\pi}f(x)\,dx.
$$

The mean value over the period is $A_0/2$.

### PDF page 82

To isolate the cosine coefficient, multiply the series by $\cos(mx)$ and integrate over $[-\pi,\pi]$. The constant term and all sine terms integrate to zero, and among the cosine terms only the one with matching index remains. Since $\int_{-\pi}^{\pi}\cos^2(mx)\,dx=\pi$ for positive integer $m$,

$$
A_m=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos(mx)\,dx.
$$

For the sine coefficient, multiply by $\sin(mx)$ instead. Only the matching sine survives, and $\int_{-\pi}^{\pi}\sin^2(mx)\,dx=\pi$. Thus

$$
B_m=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin(mx)\,dx.
$$

#### A flat profile and its odd extension

In the next string example, the notes use a profile that is $\mechanical{A}$ for $0<\mechanical{x}<\mechanical{L}$ and $-\mechanical{A}$ for $\mechanical{L}<\mechanical{x}<2\mechanical{L}$, repeated with period $2\mechanical{L}$. Its average is zero, so the constant Fourier term vanishes.

![[Kyle Kabasares - Vibrations and Waves - Odd square extension of a flat profile.png|**Fig. 103** The flat positive segment alternates with a negative segment in the periodic extension.]]

The spatial period is measured in metres. To apply the formulas for a $2\pi$-periodic argument, rescale position to a dimensionless phase.

### PDF page 83

Put $\theta=\pi\mechanical{x}/\mechanical{L}$ to convert the spatial period $2\mechanical{L}$ to the dimensionless period $2\pi$. The series becomes

$$
f(\mechanical{x})\sim\frac{A_0}{2}+
\sum_{m=1}^{\infty}\left[
A_m\cos\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)
+B_m\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)\right],
$$

where the coefficient formulas may use the period from $0$ to $2\mechanical{L}$:

$$
A_m=\frac1{\mechanical{L}}\int_0^{2\mechanical{L}}
f(\mechanical{x})\cos\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x},
\qquad
B_m=\frac1{\mechanical{L}}\int_0^{2\mechanical{L}}
f(\mechanical{x})\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}.
$$

The square extension is odd and the cosine is even, so their product integrates to zero over a symmetric period. Only sine terms contribute. Splitting the sine integral across the two halves gives

$$
\begin{aligned}
B_m&=\frac{\mechanical{A}}{\mechanical{L}}\int_0^{\mechanical{L}}
\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
-\frac{\mechanical{A}}{\mechanical{L}}\int_{\mechanical{L}}^{2\mechanical{L}}
\sin\left(\frac{m\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}\\
&=\frac{2\mechanical{A}}{m\pi}[1-(-1)^m].
\end{aligned}
$$

For odd $m$ the coefficient is $4\mechanical{A}/(m\pi)$, while all even coefficients vanish. More generally, for a profile on the fixed-end string, the odd extension gives $B_m=(2/\mechanical{L})\int_0^{\mechanical{L}} f(\mechanical{x})\sin(m\pi\mechanical{x}/\mechanical{L})\,d\mechanical{x}$.

### PDF page 84

The complete sine series for the flat profile with its odd extension is

$$
\mechanical{y}(\mechanical{x},0)\sim
\frac{4\mechanical{A}}{\pi}
\left[
\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)
+\frac13\sin\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)
+\frac15\sin\left(\frac{5\pi\mechanical{x}}{\mechanical{L}}\right)+\cdots
\right].
$$

The coefficient is $4\mechanical{A}/(m\pi)$ for odd $m$ and zero for even $m$.

#### May 4, 2015 — matrix review

The lecture begins with a sketch of coupled masses and springs, then lists scaling, rotation, and reflection as examples of linear transformations.

![[Kyle Kabasares - Vibrations and Waves - Coupled masses in the matrix lecture.png|**Fig. 104** Two masses and three springs form the coupled system at the start of the matrix review.]]

A rotation through $\theta$ takes $\mathbf r_1$ to $\mathbf r_2$ without changing their length $r$. If $\mathbf r_1$ makes angle $\alpha$ with the horizontal axis, its components are $(r\cos\alpha,r\sin\alpha)$ and the rotated components are $(r\cos(\alpha+\theta),r\sin(\alpha+\theta))$.

![[Kyle Kabasares - Vibrations and Waves - Rotation of a vector.png|**Fig. 105** The two vectors have equal lengths and differ in angle by θ.]]

Expanding the angle sums gives $x_2=x_1\cos\theta-y_1\sin\theta$ and $y_2=x_1\sin\theta+y_1\cos\theta$. In matrix form,

$$
\begin{pmatrix}x_2\\y_2\end{pmatrix}
=
\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}
\begin{pmatrix}x_1\\y_1\end{pmatrix}.
$$

The final line begins another matrix labeled $A$ with a visible first entry of $1$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\mechanical{x}_0,\mechanical{A}$ | $\unit{m}$ | Displacement, initial displacement, and amplitude | Position relative to equilibrium and maximum magnitude of displacement. |
| $\mechanical{F}$ | $\unit{N}$ | Restoring force | Force that vanishes at equilibrium. |
| $\mechanical{k},\mechanical{k}_1$ | $\unit{N\,m^{-1}}$ | Linear stiffness | Coefficient of the first-order restoring force. |
| $\mechanical{k}_2$ | $\unit{N\,m^{-2}}$ | Quadratic force coefficient | Coefficient of the squared displacement in the expansion of the restoring force. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial parameter in the equation of motion. |
| $\mechanical{t}$ | $\unit{s}$ | Time | Independent variable for the motion. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of phase accumulation. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase constant | Phase at the initial time. |
| $\signal{T},\signal{f}$ | $\unit{s}$, $\unit{Hz}$ | Period and frequency | Duration of one cycle and number of cycles per unit time. |
| $\mechanical{v}_0$ | $\unit{m\,s^{-1}}$ | Initial velocity | Time derivative of the displacement at the initial time. |
| $\mechanical{b}$ | $\unit{kg\,s^{-1}}$ | Damping coefficient | Proportionality constant between drag and velocity. |
| $\signal{p},\signal{\delta},\signal{\eta}$ | $\unit{s^{-1}}$ | Complex angular frequency and its components | The real component produces oscillation and the imaginary component produces exponential decay under the chosen sign convention. |
| $\signal{\gamma}$ | $\unit{s^{-1}}$ | Damping rate | Ratio of the velocity drag coefficient to mass. |
| $\signal{\tau}$ | $\unit{s}$ | Amplitude decay time | Time for the envelope to fall by a factor of $e$. |
| $\signal{\omega}_0$ | $\unit{rad\,s^{-1}}$ | Undamped natural angular frequency | Angular frequency in the absence of drag. |
| $\energy{E}_{\mathrm{env}}$ | $\unit{J}$ | Energy scale from the amplitude envelope | Proportional to the square of the displacement envelope. |
| $\signal{\beta}$ | $\unit{s^{-1}}$ | Overdamped rate offset | Difference between either exponential decay rate and the critical rate $\signal{\gamma}/2$ in magnitude. |
| $\mechanical{F}_{\mathrm{ext}},\mechanical{F}_0$ | $\unit{N}$ | Driving force and force amplitude | Applied periodic force and its peak magnitude. |
| $\signal{\alpha}$ | $\unit{rad}$ | Response phase | Phase of the displacement relative to the driving cosine. |
| $\signal{\delta}$ | $\unit{rad}$ | Phase lag | Angle by which the steady displacement lags the applied force. |
| $\signal{\omega}_m,\signal{\omega}_1$ | $\unit{rad\,s^{-1}}$ | Peak-response and damped free frequencies | Frequency maximizing displacement amplitude and frequency of the decaying free oscillation. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Wave speed | Product of wavelength and frequency. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{v},\mechanical{v}_{\max}$ | $\unit{m\,s^{-1}}$ | Particle velocity and maximum speed | Time derivative of the displacement and its peak magnitude. |
| $\energy{E},\energy{U}$ | $\unit{J}$ | Mechanical and elastic potential energy | The energies coincide at an undamped oscillator's turning point. |
| $\mechanical{a}_x,\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Acceleration and gravitational acceleration | Oscillator acceleration along the displacement axis and magnitude of local gravitational acceleration. |
| $\mechanical{L},\Delta\mechanical{L}$ | $\unit{m}$ | Pendulum length and spring extension | Length setting the pendulum frequency and the static extension due to a hanging mass. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | Deflection of a string element from equilibrium. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | Magnitude of the force along the string, distinct from the period $\signal{T}$. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Local tangent angle | Angle between the string and the equilibrium direction. |
| $\signal{\omega}_n$ | $\unit{rad\,s^{-1}}$ | String mode angular frequency | Discrete angular frequency selected by the fixed endpoints. |
| $\energy{E}_n,\energy{K}$ | $\unit{J}$ | Mode energy and kinetic energy | Total vibration energy of a normal mode and its instantaneous kinetic contribution. |
| $\mechanical{A}_n,\mechanical{B}_n$ | $\unit{m}$ | Mode amplitude and snapshot coefficient | Maximum displacement scale of the mode and its signed coefficient at the chosen time. |
| $\signal{k}_i$ | $\unit{m^{-1}}$ | Spatial frequency | Reciprocal wavelength in cycles per metre on this page. |
| $\mechanical{b}$ | $\unit{m}$ | Pulse height and half-width | Peak displacement and distance from the peak to a half-height point in this example. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Angular wave number | Phase change per unit distance, equal to $2\pi/\signal{\lambda}$. |
| $\mechanical{v}_p,\mechanical{v}_g$ | $\unit{m\,s^{-1}}$ | Phase and group velocities | Speeds of the carrier phase and narrow-band envelope. |
| $d$ | $\unit{m^4\,s^{-2}}$ | String dispersion coefficient | Multiplies the squared angular wave number in the phase speed squared. |
| $\mechanical{k}'$ | $\unit{N\,m^{-1}}$ | Coupling stiffness | Spring constant of the middle spring. |
| $\mechanical{M}$ | $\unit{kg}$ | Reduced mass | Effective mass for relative motion of the isolated pair. |
| $n_i$ | 1 | Refractive index | Ratio of the vacuum speed of light to the phase speed in medium $i$. |
| $\mechanical{\theta}_i,\mechanical{\theta}_r$ | $\unit{rad}$ | Incidence and refraction angles | Ray angles measured from the interface normal. |
| $\mechanical{\theta}_c$ | $\unit{rad}$ | Critical angle | Angle of incidence at which the refracted ray becomes grazing. |
| $\mechanical{u}$ | $\unit{m\,s^{-1}}$ | Source speed | Speed of the emitter relative to the medium in the Doppler derivation. |
| $\signal{f}_{\mathrm{source}}$ | $\unit{Hz}$ | Emitted frequency | Rate at which the moving source emits wavefronts. |
| $\signal{f}_o$ | $\unit{Hz}$ | Observed frequency | Arrival rate of wavefronts at the observer. |
| $\mechanical{v}_s,\mechanical{v}_o$ | $\unit{m\,s^{-1}}$ | Source and observer speeds | Speeds relative to the medium, taken toward the other party in the collinear examples. |
| $\mechanical{Y}$ | $\unit{Pa}$ | Young's modulus | Ratio of tensile stress to fractional elongation in the linear regime. |
| $\signal{\Gamma}_{1,2}$ | $\unit{s^{-1}}$ | Overdamped decay rates | The two exponential rates of the free response. |
| $\mechanical{k},\mechanical{\rho}$ | $\unit{Pa}$, $\unit{kg\,m^{-3}}$ | Bulk modulus and mass density | Elastic and inertial parameters setting the speed of sound in a gas. |
| $d\energy{K}/d\mechanical{x},d\energy{U}/d\mechanical{x}$ | $\unit{J\,m^{-1}}$ | Linear energy densities | Kinetic and elastic potential energy per unit string length. |
| $\energy{P}$ | $\unit{W}$ | Instantaneous wave power | Energy flow rate through a cross section of the string. |
| $R,T$ | 1 | Reflection and transmission amplitude coefficients | Signed displacement factors for an incident pulse at a junction. |
