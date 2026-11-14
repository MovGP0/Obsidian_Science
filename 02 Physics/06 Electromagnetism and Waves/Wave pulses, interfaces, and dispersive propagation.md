---
title: "Wave pulses, interfaces, and dispersive propagation"
---

> [!TLDR]
> Check traveling pulses against the wave equation and use interface conditions to compute reflected and transmitted amplitudes.

## Worked lecture material

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

##### Wave pulses

A pulse can have a non-sinusoidal profile. The notes sketch an ocean pulse and a rectangular electronic pulse. A fixed profile $f$ travels to the right as $f(\mechanical{x}-\mechanical{v}\mechanical{t})$ and to the left as $f(\mechanical{x}+\mechanical{v}\mechanical{t})$.

![[Kyle Kabasares - Vibrations and Waves - Ocean and electronic pulses.png|**Fig. 28** Rounded and rectangular examples of traveling pulses.]]

For example, take $\mechanical{b}>0$ and

$$
\mechanical{y}(\mechanical{x},\mechanical{t})=
\frac{\mechanical{b}^3}{\mechanical{b}^2+(\mechanical{x}-\mechanical{v}\mechanical{t})^2}.
$$

The peak height is $\mechanical{b}$ at $\mechanical{x}=\mechanical{v}\mechanical{t}$. At $\mechanical{t}=0$, setting the height equal to $\mechanical{b}/2$ gives $\mechanical{x}^2=\mechanical{b}^2$. Thus the half-height positions are $\pm\mechanical{b}$ initially and $\mechanical{v}\mechanical{t}\pm\mechanical{b}$ at a later time.

![[Kyle Kabasares - Vibrations and Waves - Traveling pulse height and width.png|**Fig. 29** The pulse peak and the two half-height points move together.]]

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

##### Checking the wave equation

For a general right-moving pulse, set $\xi=\mechanical{x}-\mechanical{v}\mechanical{t}$ and $\mechanical{y}=f(\xi)$. The chain rule gives

$$
\frac{\partial\mechanical{y}}{\partial\mechanical{x}}=f'(\xi),
\qquad
\frac{\partial^2\mechanical{y}}{\partial\mechanical{x}^2}=f''(\xi).
$$

For $\xi=\mechanical{x}-\mechanical{v}\mechanical{t}$, the time derivatives are

$$
\frac{\partial\mechanical{y}}{\partial\mechanical{t}}=-\mechanical{v}f'(\xi),\qquad
\frac{\partial^2\mechanical{y}}{\partial\mechanical{t}^2}=\mechanical{v}^2f''(\xi).
$$

Together with the spatial derivative, this verifies the wave equation for the right-moving profile.

**Homework 2, problem 1**

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

**Homework 2, problems 2 and 3**

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

##### Boundary effects

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

##### Reflection and transmission

The lecture identifies the two factors as amplitude coefficients. When $\mechanical{\mu}_1<\mechanical{\mu}_2$ at the same tension, $\mechanical{v}_1>\mechanical{v}_2$ and the reflected amplitude changes sign.

![[Kyle Kabasares - Vibrations and Waves - Pulse approaching a denser string.png|**Fig. 34** The incident pulse moves from a lighter string toward a denser string.]]

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

For incidence from a denser to a lighter string, $\mechanical{\mu}_1>\mechanical{\mu}_2$ and $\mechanical{v}_1<\mechanical{v}_2$. The reflected pulse stays upright with reduced height and unchanged width. The transmitted pulse stays upright with increased height. Its width increases by $\mechanical{v}_2/\mechanical{v}_1$ by the matching argument on [[#Reflection and transmission|the section on Reflection and transmission]], although this page lists the width as unchanged.

The two limiting cases are:

- **Fixed boundary.** As $\mechanical{\mu}_2\to\infty$, $\mechanical{v}_2\to0$. The reflected profile is $g=-f_1$ and the transmitted displacement vanishes.
- **Free boundary.** As $\mechanical{\mu}_2\to0$, $\mechanical{v}_2\to\infty$. The reflected profile is $g=f_1$, and the displacement at the junction is $2f_1$.

![[Kyle Kabasares - Vibrations and Waves - Fixed and free boundary limits.png|**Fig. 37** A heavy second string approaches a fixed end and a very light second string approaches a free end.]]

##### Example of a right-moving sine wave

A string has $\mechanical{\mu}=0.1\,\unit{kg\,m^{-1}}$, tension $50\,\unit{N}$, amplitude $0.02\,\unit{m}$, and period $0.1\,\unit{s}$. Its wave speed and wavelength are

$$
\mechanical{v}=\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}\simeq22.4\,\unit{m\,s^{-1}},
\qquad
\signal{\lambda}=\mechanical{v}\signal{T}\simeq2.2\,\unit{m}.
$$

In $\mechanical{y}=\mechanical{A}\sin[(2\pi/\signal{\lambda})(\mechanical{x}-\mechanical{v}\mechanical{t})+\signal{\phi}]$, the condition $\mechanical{y}(0,0)=0.01\,\unit{m}$ gives $\sin\signal{\phi}=1/2$. Negative initial transverse velocity requires $\cos\signal{\phi}>0$, so $\signal{\phi}=\pi/6$ modulo $2\pi$.

Using the rounded speed and wavelength from the preceding page, the sinusoidal wave is

$$
\mechanical{y}(\mechanical{x},\mechanical{t})
=(0.02\,\unit{m})\sin\left[
\frac{2\pi}{2.2\,\unit{m}}
\big(\mechanical{x}-(22.4\,\unit{m\,s^{-1}})\mechanical{t}\big)
+\frac{\pi}{6}
\right].
$$

##### A triangular pulse

The linear densities are $\mechanical{\mu}_1=0.1\,\unit{kg\,m^{-1}}$ and $\mechanical{\mu}_2=0.3\,\unit{kg\,m^{-1}}$. The speeds used in the calculation are $\mechanical{v}_1=14\,\unit{m\,s^{-1}}$ and $\mechanical{v}_2=8\,\unit{m\,s^{-1}}$. The reflected and transmitted displacement factors are

$$
\frac{\mechanical{v}_2-\mechanical{v}_1}{\mechanical{v}_2+\mechanical{v}_1}=-\frac{3}{11}\simeq-\frac14,
\qquad
\frac{2\mechanical{v}_2}{\mechanical{v}_2+\mechanical{v}_1}=\frac{8}{11}\simeq\frac34.
$$

The reflected profile is spatially mirrored, as in $\mechanical{x}_g=-\mechanical{x}_1$.

![[Kyle Kabasares - Vibrations and Waves - Triangular pulse at a junction.png|**Fig. 38** An incident triangular pulse and the reflected and transmitted profiles after crossing the junction.]]

**Homework 3, problem 2**

A standing-mode factor $\sin(n\pi\mechanical{x}/\mechanical{L})\cos(\signal{\omega}_n\mechanical{t})$ is the half-sum of the sine waves with arguments $n\pi\mechanical{x}/\mechanical{L}\mp\signal{\omega}_n\mechanical{t}$. More generally a traveling wave has the form $f(\mechanical{x}\pm\mechanical{v}\mechanical{t})$.

In the example, the displacement at $\mechanical{x}=1\,\unit{m}$ is $0.2\sin(3\pi\mechanical{t}+\pi/8)$ in the units of the problem. The notes begin to match this time trace to a right-moving sine with angular wave number $2\pi/\signal{\lambda}$. The temporal angular frequency has magnitude $3\pi\,\unit{s^{-1}}$.

Here the notation switches to the angular wave number $\signal{k}=2\pi/\signal{\lambda}$, so $\mechanical{v}=\signal{\omega}/\signal{k}$ and $\signal{\omega}=2\pi\signal{f}$.

The notes again split a standing mode into two sine waves, with arguments $(n\pi/\mechanical{L})(\mechanical{x}-\mechanical{v}\mechanical{t})$ and $(n\pi/\mechanical{L})(\mechanical{x}+\mechanical{v}\mechanical{t})$. At the fixed endpoint $\mechanical{x}=0$ their sum is zero. The nonzero trace written for the homework, $\mechanical{y}(0,\mechanical{t})=\mechanical{A}\sin(\signal{\omega}\mechanical{t})$ with amplitude $0.2$ and $\signal{\omega}=3\pi\,\unit{s^{-1}}$, therefore has to be treated separately as a traveling-wave trace.

For a single wave, the trace at $1\,\unit{m}$ leads the trace at $0$ by $\pi/8$ modulo $2\pi$. The notes match $\pi/8=\signal{k}(1\,\unit{m})$ and obtain $\signal{\lambda}=16\,\unit{m}$. With both traces written using a positive temporal phase, this choice corresponds to the left-moving form $\mechanical{A}\sin(\signal{\omega}\mechanical{t}+\signal{k}\mechanical{x})$. A right-moving form has the opposite spatial phase and requires $-\signal{k}(1\,\unit{m})\equiv\pi/8\pmod{2\pi}$. The handwritten rightward assumption and the unwrapped phase match thus give different directions.

##### Dispersion

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

For deep-water gravity waves, the dispersion relation is $\signal{f}=C\signal{k}^{1/2}$. The phase and group velocities are

$$
\mechanical{v}_p=\frac{\signal{f}}{\signal{k}}=\frac{C}{\sqrt{\signal{k}}},
\qquad
\mechanical{v}_g=\frac{d\signal{f}}{d\signal{k}}=\frac{C}{2\sqrt{\signal{k}}}
=\frac12\mechanical{v}_p.
$$

##### Example of a dispersive string

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

## Source

Kyle Kabasares, *Vibrations and Waves (Physics 122, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial parameter in the equation of motion. |
| $\mechanical{t}$ | $\unit{s}$ | Time | Independent variable for the motion. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of phase accumulation. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase constant | Phase at the initial time. |
| $\mechanical{b}$ | $\unit{kg\,s^{-1}}$ | Damping coefficient | Proportionality constant between drag and velocity. |
| $\signal{\tau}$ | $\unit{s}$ | Amplitude decay time | Time for the envelope to fall by a factor of $e$. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | Deflection of a string element from equilibrium. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | Magnitude of the force along the string, distinct from the period $\signal{T}$. |
| $\signal{\omega}_n$ | $\unit{rad\,s^{-1}}$ | String mode angular frequency | Discrete angular frequency selected by the fixed endpoints. |
| $\signal{k}_i$ | $\unit{m^{-1}}$ | Spatial frequency | Reciprocal wavelength in cycles per metre on this page. |
| $\mechanical{b}$ | $\unit{m}$ | Pulse height and half-width | Peak displacement and distance from the peak to a half-height point in this example. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Angular wave number | Phase change per unit distance, equal to $2\pi/\signal{\lambda}$. |
| $d$ | $\unit{m^4\,s^{-2}}$ | String dispersion coefficient | Multiplies the squared angular wave number in the phase speed squared. |
| $\mechanical{M}$ | $\unit{kg}$ | Reduced mass | Effective mass for relative motion of the isolated pair. |
