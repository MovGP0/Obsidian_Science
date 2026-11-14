---
title: "Fixed-string normal modes and Fourier coefficients"
---

> [!TLDR]
> Derive the wave equation from string tension and use fixed-end modes to reconstruct an initial profile.

## Worked lecture material

##### Continuous systems

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

Divide the segment equation by $\Delta\mechanical{x}$ and use the slope relation from [[#Continuous systems|the section on Continuous systems]]. At leading order, $\cos^2\mechanical{\theta}\simeq1$ and

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

##### Example of a string's fundamental

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

**Exercise 3-14**

For a mass $\mechanical{m}=0.2\,\unit{kg}$ with damped angular frequency $\signal{\omega}=(\sqrt{3}/2)\signal{\omega}_0$, compare with $\signal{\omega}^2=\signal{\omega}_0^2-\signal{\gamma}^2/4$. Then

$$
\frac{\signal{\gamma}^2}{4}=\frac{\signal{\omega}_0^2}{4},
\qquad
\mechanical{b}=\mechanical{m}\signal{\gamma}=\mechanical{m}\sqrt{\frac{\mechanical{k}}{\mechanical{m}}}.
$$

The period is $\signal{T}=2\pi/\signal{\omega}$.

##### Selecting modes with a clamp

The page gives $\mechanical{L}=2.5\,\unit{m}$, $\mechanical{T}=10\,\unit{N}$, and $\mechanical{m}=0.01\,\unit{kg}$. The previous page gives $0.1\,\unit{kg}$. The mode selection below depends only on the position of the clamp as a fraction of the length.

Start from the full-length modes $\mechanical{y}_n=\mechanical{A}\sin(n\pi\mechanical{x}/\mechanical{L})\cos(\signal{\omega}_n\mechanical{t}-\signal{\phi}_n)$ with $\signal{\omega}_n=n\signal{\omega}_1$. The sine already vanishes at $\mechanical{x}=0$ and $\mechanical{x}=\mechanical{L}$. At the clamp at $0.5\,\unit{m}$, the additional condition is

$$
\sin(0.2n\pi)=0 \quad\Longrightarrow\quad n=5q,\qquad q=1,2,\ldots.
$$

![[Kyle Kabasares - Vibrations and Waves - Clamp at one fifth of the length.png|**Fig. 17** The first clamp position is one fifth of the string length from the left endpoint.]]

Moving the clamp to $1\,\unit{m}$ instead gives $\sin(0.4n\pi)=0$. This requires $n=5q/2$ with $q$ even because $n$ is an integer. The full-length modes that survive again have $n=5,10,15,\ldots$.

![[Kyle Kabasares - Vibrations and Waves - Clamp at two fifths of the length.png|**Fig. 18** The second clamp position is two fifths of the string length from the left endpoint.]]

##### Energy of a string vibration

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

The integral for the energy yields $\energy{E}_n=\tfrac14\mechanical{L}\mechanical{\mu}\mechanical{A}_n^2\signal{\omega}_n^2$ because the sine at the upper integration limit vanishes. The total displacement is the superposition $\mechanical{y}(\mechanical{x},\mechanical{t})=\sum_n\mechanical{y}_n(\mechanical{x},\mechanical{t})$.

##### Fourier series of the string profile

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

##### Fourier sine examples

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

For $n=2m$, the two-level profile on [[#Fourier sine examples|the section on Fourier sine examples]] has

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

##### Standing waves as traveling waves

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

Follow a point of fixed phase on the right-moving sine wave. Requiring the same phase at $(\mechanical{x},\mechanical{t})$ and $(\mechanical{x}+\Delta\mechanical{x},\mechanical{t}+\Delta\mechanical{t})$ gives

$$
\mechanical{x}-\mechanical{v}\mechanical{t}
=\mechanical{x}+\Delta\mechanical{x}-\mechanical{v}(\mechanical{t}+\Delta\mechanical{t}),
\qquad
\frac{\Delta\mechanical{x}}{\Delta\mechanical{t}}=\mechanical{v}.
$$

![[Kyle Kabasares - Vibrations and Waves - Motion of a sinusoidal crest.png|**Fig. 25** Two snapshots show a sinusoidal feature translated by the wave speed times the elapsed time.]]

More generally a right-moving wave has the form $\mechanical{y}(\mechanical{x},\mechanical{t})=f(\mechanical{x}-\mechanical{v}\mechanical{t})$. On a uniform string, $\mechanical{v}=\sqrt{\mechanical{T}/\mechanical{\mu}}$.

##### Superposition

A standing wave is formed by two waves of equal amplitude and wavelength traveling in opposite directions. As a second example, superpose two equal-amplitude waves traveling to the right in the same medium, with different wavelengths:

$$
\mechanical{y}_1=\mechanical{A}\sin\left[\frac{2\pi}{\signal{\lambda}_1}(\mechanical{x}-\mechanical{v}\mechanical{t})\right],
\qquad
\mechanical{y}_2=\mechanical{A}\sin\left[\frac{2\pi}{\signal{\lambda}_2}(\mechanical{x}-\mechanical{v}\mechanical{t})\right].
$$

Because both terms depend on the same translated coordinate, their sum has the same shape at different times. One may choose $\mechanical{t}=0$ as the reference snapshot.

![[Kyle Kabasares - Vibrations and Waves - Translation of a composite wave.png|**Fig. 26** A composite wave is shown at an earlier and a later time as its profile travels to the right.]]

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
| $\mechanical{b}$ | $\unit{kg\,s^{-1}}$ | Damping coefficient | Proportionality constant between drag and velocity. |
| $\signal{\gamma}$ | $\unit{s^{-1}}$ | Damping rate | Ratio of the velocity drag coefficient to mass. |
| $\signal{\omega}_0$ | $\unit{rad\,s^{-1}}$ | Undamped natural angular frequency | Angular frequency in the absence of drag. |
| $\signal{\alpha}$ | $\unit{rad}$ | Response phase | Phase of the displacement relative to the driving cosine. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | Deflection of a string element from equilibrium. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | Magnitude of the force along the string, distinct from the period $\signal{T}$. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Local tangent angle | Angle between the string and the equilibrium direction. |
| $\signal{\omega}_n$ | $\unit{rad\,s^{-1}}$ | String mode angular frequency | Discrete angular frequency selected by the fixed endpoints. |
| $\mechanical{b}$ | $\unit{m}$ | Pulse height and half-width | Peak displacement and distance from the peak to a half-height point in this example. |
| $d$ | $\unit{m^4\,s^{-2}}$ | String dispersion coefficient | Multiplies the squared angular wave number in the phase speed squared. |
