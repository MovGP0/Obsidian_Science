---
title: "Oscillator and wave-mode review calculations"
---

> [!TLDR]
> Check damping regimes, endpoint conditions, Fourier expansions, and wave-energy relations in review problems.

## Worked lecture material

##### Oscillator review

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

##### Nondispersive wave equation and energy

For $\partial_{\mechanical{x}}^2\mechanical{y}=\mechanical{v}^{-2}\partial_{\mechanical{t}}^2\mechanical{y}$, the speed is $\sqrt{\mechanical{T}/\mechanical{\mu}}$ on a string or $\sqrt{\mechanical{k}/\mechanical{\rho}}$ in a gas, where $\mechanical{k}$ is the relevant bulk modulus. The string's energy densities per unit length and its instantaneous power in the positive $\mechanical{x}$ direction are

$$
\frac{d\energy{K}}{d\mechanical{x}}=\frac12\mechanical{\mu}(\partial_{\mechanical{t}}\mechanical{y})^2,
\qquad
\frac{d\energy{U}}{d\mechanical{x}}=\frac12\mechanical{T}(\partial_{\mechanical{x}}\mechanical{y})^2,
\qquad
\energy{P}=-\mechanical{T}(\partial_{\mechanical{t}}\mechanical{y})(\partial_{\mechanical{x}}\mechanical{y}).
$$

The reflection and transmission amplitude coefficients at the junction are $R=(\mechanical{v}_2-\mechanical{v}_1)/(\mechanical{v}_2+\mechanical{v}_1)$ and $T=2\mechanical{v}_2/(\mechanical{v}_2+\mechanical{v}_1)$.

##### Fourier series and dispersion review

For a $2\pi$-periodic function of $\theta$, write

$$
\begin{aligned}
f(\theta)&\sim\frac{A_0}{2}+\sum_{m=1}^{\infty}[A_m\cos(m\theta)+B_m\sin(m\theta)],\\
A_m&=\frac1\pi\int_{-\pi}^{\pi}f(\theta)\cos(m\theta)\,d\theta,\qquad m=0,1,\ldots,\\
B_m&=\frac1\pi\int_{-\pi}^{\pi}f(\theta)\sin(m\theta)\,d\theta,\qquad m=1,2,\ldots.
\end{aligned}
$$

The constant term appears once, outside the sum. For dispersive waves, $\mechanical{v}_p=\signal{\omega}/\signal{k}$ and $\mechanical{v}_g=d\signal{\omega}/d\signal{k}$.

##### Trigonometric identities

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

##### Complex exponentials

$$
e^{j\theta}=\cos\theta+j\sin\theta,\qquad
\cos\theta=\frac{e^{j\theta}+e^{-j\theta}}{2},\qquad
\sin\theta=\frac{e^{j\theta}-e^{-j\theta}}{2j}.
$$

Subtracting Euler's identities at the two opposite angles supplies the $j$ in the sine denominator.

Expand the exponential as $e^x=1+x+x^2/2!+x^3/3!+\cdots$. Substituting $x=j\theta$ gives

$$
e^{j\theta}=1+j\theta-\frac{\theta^2}{2!}-j\frac{\theta^3}{3!}+\frac{\theta^4}{4!}+\cdots
=\cos\theta+j\sin\theta.
$$

Grouping the even and odd powers yields the cosine and sine series. The polar form of a complex number is $z=a+jb=\lvert z\rvert e^{j\theta}$.

##### Knight Physics — equal travel times in joined strings

The two segments have total length $4\,\unit{m}$ and linear densities $\mechanical{\mu}_1=2.0\,\unit{g\,m^{-1}}$ and $\mechanical{\mu}_2=4.0\,\unit{g\,m^{-1}}$.

![[Kyle Kabasares - Vibrations and Waves - Pulses in two joined segments.png|**Fig. 96** The two pulses travel away from the junction through segments of different linear density.]]

With the same tension on both segments,

$$
\frac{\mechanical{v}_1}{\mechanical{v}_2}
=\frac{\sqrt{\mechanical{T}/\mechanical{\mu}_1}}{\sqrt{\mechanical{T}/\mechanical{\mu}_2}}
=\sqrt2.
$$

For simultaneous arrival at the outer ends, require $\mechanical{L}_1/\mechanical{v}_1=\mechanical{L}_2/\mechanical{v}_2$. Therefore the faster pulse must travel farther, with $\mechanical{L}_1=\sqrt2\,\mechanical{L}_2$.

The equal-time condition gives $\mechanical{L}_1=\sqrt2\,\mechanical{L}_2$. Together with $\mechanical{L}_1+\mechanical{L}_2=4\,\unit{m}$, this gives

$$
\mechanical{L}_2=\frac{4\,\unit{m}}{1+\sqrt2}\simeq1.7\,\unit{m},
\qquad
\mechanical{L}_1=\frac{4\sqrt2\,\unit{m}}{1+\sqrt2}\simeq2.3\,\unit{m}.
$$

The length relation on [[#Knight Physics — equal travel times in joined strings|the section on Knight Physics — equal travel times in joined strings]] fixes the index on the term multiplied by $\sqrt2$ and agrees with the boxed lengths.

##### Three classes of damping

- **Underdamped.** The motion oscillates with a decaying envelope $\mechanical{A}(\mechanical{t})=\mechanical{A}_0e^{-\mechanical{b}\mechanical{t}/(2\mechanical{m})}$.
- **Critically damped.** The motion in the sketch returns quickly toward equilibrium without oscillating. The notes give a pendulum in maple syrup as an illustration of motion with strong damping.
- **Overdamped.** The return toward equilibrium is also nonoscillatory, but relaxation is slower in the example shown.

![[Kyle Kabasares - Vibrations and Waves - Three damping classes.png|**Fig. 97** The sketches compare oscillatory decay, critical damping, and a slower overdamped return.]]

##### Standing waves and endpoint conditions

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

##### Fourier series review

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

To isolate the cosine coefficient, multiply the series by $\cos(mx)$ and integrate over $[-\pi,\pi]$. The constant term and all sine terms integrate to zero, and among the cosine terms only the one with matching index remains. Since $\int_{-\pi}^{\pi}\cos^2(mx)\,dx=\pi$ for positive integer $m$,

$$
A_m=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos(mx)\,dx.
$$

For the sine coefficient, multiply by $\sin(mx)$ instead. Only the matching sine survives, and $\int_{-\pi}^{\pi}\sin^2(mx)\,dx=\pi$. Thus

$$
B_m=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin(mx)\,dx.
$$

##### A flat profile and its odd extension

In the next string example, the notes use a profile that is $\mechanical{A}$ for $0<\mechanical{x}<\mechanical{L}$ and $-\mechanical{A}$ for $\mechanical{L}<\mechanical{x}<2\mechanical{L}$, repeated with period $2\mechanical{L}$. Its average is zero, so the constant Fourier term vanishes.

![[Kyle Kabasares - Vibrations and Waves - Odd square extension of a flat profile.png|**Fig. 103** The flat positive segment alternates with a negative segment in the periodic extension.]]

The spatial period is measured in metres. To apply the formulas for a $2\pi$-periodic argument, rescale position to a dimensionless phase.

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

##### Matrix review

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

## Source

Kyle Kabasares, *Vibrations and Waves (Physics 122, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Restoring force | Force that vanishes at equilibrium. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial parameter in the equation of motion. |
| $\mechanical{t}$ | $\unit{s}$ | Time | Independent variable for the motion. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of phase accumulation. |
| $\mechanical{b}$ | $\unit{kg\,s^{-1}}$ | Damping coefficient | Proportionality constant between drag and velocity. |
| $\signal{\gamma}$ | $\unit{s^{-1}}$ | Damping rate | Ratio of the velocity drag coefficient to mass. |
| $\signal{\omega}_0$ | $\unit{rad\,s^{-1}}$ | Undamped natural angular frequency | Angular frequency in the absence of drag. |
| $\signal{\alpha}$ | $\unit{rad}$ | Response phase | Phase of the displacement relative to the driving cosine. |
| $\signal{\delta}$ | $\unit{rad}$ | Phase lag | Angle by which the steady displacement lags the applied force. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | Deflection of a string element from equilibrium. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | Magnitude of the force along the string, distinct from the period $\signal{T}$. |
| $\signal{\omega}_n$ | $\unit{rad\,s^{-1}}$ | String mode angular frequency | Discrete angular frequency selected by the fixed endpoints. |
| $\mechanical{b}$ | $\unit{m}$ | Pulse height and half-width | Peak displacement and distance from the peak to a half-height point in this example. |
| $\signal{k}$ | $\unit{rad\,m^{-1}}$ | Angular wave number | Phase change per unit distance, equal to $2\pi/\signal{\lambda}$. |
| $d$ | $\unit{m^4\,s^{-2}}$ | String dispersion coefficient | Multiplies the squared angular wave number in the phase speed squared. |
| $\signal{\Gamma}_{1,2}$ | $\unit{s^{-1}}$ | Overdamped decay rates | The two exponential rates of the free response. |
| $\energy{P}$ | $\unit{W}$ | Instantaneous wave power | Energy flow rate through a cross section of the string. |
