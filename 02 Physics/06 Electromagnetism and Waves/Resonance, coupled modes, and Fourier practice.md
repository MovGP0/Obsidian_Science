---
title: "Resonance, coupled modes, and Fourier practice"
---

> [!TLDR]
> Compute resonant responses and coupled normal modes, then use Fourier sine coefficients to solve string-profile problems.

## Worked lecture material

For the dispersive-string example, a cosine time factor for each mode corresponds to release from rest. Using the mode frequencies from [[Wave pulses, interfaces, and dispersive propagation#Example of a dispersive string|the section on Example of a dispersive string]] gives, in the units of the example,

$$
\begin{aligned}
\mechanical{y}(\mechanical{x},\mechanical{t})
={}&\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_1\mechanical{t})\\
&+4\sin\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_2\mechanical{t})
+9\sin\left(\frac{3\pi\mechanical{x}}{\mechanical{L}}\right)\cos(\signal{\omega}_3\mechanical{t}).
\end{aligned}
$$

The second mode uses the same time dependence as the first and third, with its own angular frequency.

The free motion can be apparent immediately after the drive starts. With damping, it dies away and the steady oscillation follows the driving frequency. For the particular solution of the undamped equation,

$$
\mechanical{m}\ddot{\mechanical{x}}+\mechanical{k}\mechanical{x}
=\mechanical{F}_0\cos(\signal{\omega}\mechanical{t}),
$$

try $\mechanical{x}=C\cos(\signal{\omega}\mechanical{t})$. Its derivatives are $\dot{\mechanical{x}}=-\signal{\omega}C\sin(\signal{\omega}\mechanical{t})$ and $\ddot{\mechanical{x}}=-\signal{\omega}^2C\cos(\signal{\omega}\mechanical{t})$. Substitute and equate the coefficients of the common cosine:

$$
(\mechanical{k}-\mechanical{m}\signal{\omega}^2)C=\mechanical{F}_0.
$$

The real cosine coefficient and the nonnegative amplitude are

$$
C=\frac{\mechanical{F}_0}{\mechanical{k}-\mechanical{m}\signal{\omega}^2}
=\frac{\mechanical{F}_0/\mechanical{m}}{\signal{\omega}_0^2-\signal{\omega}^2},
\qquad
\mechanical{A}=\lvert C\rvert.
$$

##### Complex exponential method for forced oscillations

The sinusoidal driving force is the real projection of the rotating vector $\mechanical{F}_0e^{j\signal{\omega}\mechanical{t}}$. The displacement is the real projection of a vector $z$ rotating at the same angular frequency, with relative phase $\signal{\alpha}$.

![[Kyle Kabasares - Vibrations and Waves - Rotating force and displacement vectors.png|**Fig. 40** The horizontal projections of the two rotating vectors give the applied force and driven displacement.]]

Set $z=\mechanical{A}e^{j(\signal{\omega}\mechanical{t}+\signal{\alpha})}$ in $\mechanical{m}\ddot z+\mechanical{k}z=\mechanical{F}_0e^{j\signal{\omega}\mechanical{t}}$. Using $\dot z=j\signal{\omega}z$ and $\ddot z=-\signal{\omega}^2z$ gives

$$
(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}e^{-j\signal{\alpha}}.
$$

For the undamped driven solution, expand $e^{-j\signal{\alpha}}=\cos\signal{\alpha}-j\sin\signal{\alpha}$. Equating real and imaginary parts gives

$$
(\signal{\omega}_0^2-\signal{\omega}^2)\mechanical{A}
=\frac{\mechanical{F}_0}{\mechanical{m}}\cos\signal{\alpha},
\qquad
0=\frac{\mechanical{F}_0}{\mechanical{m}}\sin\signal{\alpha}.
$$

##### Forced oscillations with velocity damping

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

The resonance definition begun on [[#Forced oscillations with velocity damping|the section on Forced oscillations with velocity damping]] describes driving a system under conditions that maximize its response to the drive.

##### Fourier series convergence

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

##### Coupled oscillators

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

##### A. P. French, exercise 4-3

A mass of $0.2\,\unit{kg}$ hangs from a spring with stiffness $80\,\unit{N\,m^{-1}}$. The resistive force is $-\mechanical{b}\mechanical{v}$, with $\mechanical{b}=4\,\unit{N\,s\,m^{-1}}$. Part (a) asks for the free equation and its period. A crossed-out part (b) specifies a drive $\mechanical{F}_0\sin(\signal{\omega}\mechanical{t})$ with amplitude $2\,\unit{N}$ and writes the frequency as $30\,\unit{Hz}$. It asks for the steady amplitude.

Measured from the hanging equilibrium, the free equation is $\ddot{\mechanical{x}}+(\mechanical{b}/\mechanical{m})\dot{\mechanical{x}}+(\mechanical{k}/\mechanical{m})\mechanical{x}=0$. The squared damped frequency is $\signal{\omega}_0^2-\signal{\gamma}^2/4=300\,\unit{s^{-2}}$, giving $\signal{T}=2\pi/\signal{\omega}\simeq0.36\,\unit{s}$. This grouping of the factor $1/4$ gives the period boxed in the notes.

##### Driven-oscillator formula review

- **Undamped particular solution.** $\mechanical{x}=C\cos(\signal{\omega}\mechanical{t})$, with $C=(\mechanical{F}_0/\mechanical{m})/(\signal{\omega}_0^2-\signal{\omega}^2)$. With a positive amplitude $\lvert C\rvert$, use phase $0$ below $\signal{\omega}_0$ and $\pi$ above it.
- **Damped steady state.** $\mechanical{x}=\mechanical{A}\cos(\signal{\omega}\mechanical{t}-\signal{\delta})$, with the amplitude and phase lag on [[#Forced oscillations with velocity damping|the section on Forced oscillations with velocity damping]].
- **Undamped response from rest at equilibrium.** $\mechanical{x}=C[\cos(\signal{\omega}\mechanical{t})-\cos(\signal{\omega}_0\mechanical{t})]$.
- **Underdamped response with a transient.** $\mechanical{x}=\mechanical{B}e^{-\signal{\gamma}\mechanical{t}/2}\cos(\signal{\omega}_1\mechanical{t}+\signal{\beta})+\mechanical{A}\cos(\signal{\omega}\mechanical{t}-\signal{\delta})$. The free angular frequency is $\signal{\omega}_1=\sqrt{\signal{\omega}_0^2-\signal{\gamma}^2/4}$, with the square root supplied by the earlier derivation.

##### Transverse waves and string dynamics

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

Adding a clamp $0.5\,\unit{m}$ from one end imposes $\mechanical{y}(0,\mechanical{t})=\mechanical{y}(0.5\,\unit{m},\mechanical{t})=\mechanical{y}(2.5\,\unit{m},\mechanical{t})=0$. This is the same geometric condition as the first case on [[Fixed-string normal modes and Fourier coefficients#Selecting modes with a clamp|the section on Selecting modes with a clamp]].

![[Kyle Kabasares - Vibrations and Waves - Three fixed points.png|**Fig. 46** Both endpoints and the intermediate clamp are nodes.]]

##### Energy and superposition of modes

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

##### Fourier analysis in space

At a fixed $\mechanical{t}_0$, put $\mechanical{B}_n=\mechanical{A}_n\cos(\signal{\omega}_n\mechanical{t}_0-\signal{\phi}_n)$. The spatial profile is the sum of the sine modes weighted by $\mechanical{B}_n$. Harmonic analysis of a known profile $\mechanical{y}(\mechanical{x})$ gives

$$
\mechanical{B}_n=\frac{2}{\mechanical{L}}\int_0^{\mechanical{L}}
\mechanical{y}(\mechanical{x})\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}.
$$

The page recalls the ramp $\mechanical{y}=k\mechanical{x}$ with endpoint values $0$ and $k\mechanical{L}$. It also writes a general periodic expansion with both sines and cosines. The ramp's half-range sine coefficients are calculated on [[Fixed-string normal modes and Fourier coefficients#Fourier series of the string profile|the section on Fourier series of the string profile]].

##### Fourier sine series of a ramp

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

##### Examples 2 and 3 — sine coefficients

For $\mechanical{y}=\mechanical{A}\sin(\pi\mechanical{x}/\mechanical{L})$, the notebook gives a computer-algebra expression for the unnormalized projection:

$$
\int_0^{\mechanical{L}}\mechanical{y}(\mechanical{x})
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
=\frac{\mechanical{A}\mechanical{L}\sin(n\pi)}{\pi(1-n^2)}.
$$

At $n=1$ use the integral directly, which gives $\mechanical{A}\mechanical{L}/2$. For the other positive integers the integral is zero. Multiplying by the normalization $2/\mechanical{L}$ from [[#Energy and superposition of modes|the section on Energy and superposition of modes]] gives $\mechanical{B}_1=\mechanical{A}$.

For the profile that is $\mechanical{A}$ on the first half and $-\mechanical{A}$ on the second, split the projection into integrals over the two halves. For the first integral, $s=n\pi\mechanical{x}/\mechanical{L}$ has upper limit $n\pi/2$, since $\mechanical{x}=\mechanical{L}/2$. Thus

$$
\int_0^{\mechanical{L}/2}\mechanical{A}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)d\mechanical{x}
=\frac{\mechanical{A}\mechanical{L}}{n\pi}[1-\cos(n\pi/2)].
$$

The full coefficient is on [[Fixed-string normal modes and Fourier coefficients#Fourier sine examples|the section on Fourier sine examples]].

**Homework 2, problem 1(a) review**

Write $\sin^2 u=(1-\cos 2u)/2$ in the mode energy integral. The cosine term integrates to zero at the endpoints, leaving

$$
\energy{E}_n=\frac14\mechanical{L}\mechanical{\mu}\mechanical{A}_n^2\signal{\omega}_n^2
=\frac14\mechanical{L}\left(\frac{\mechanical{M}}{\mechanical{L}}\right)
\mechanical{A}_n^2
\left[\frac{n\pi}{\mechanical{L}}\sqrt{\frac{\mechanical{T}}{\mechanical{\mu}}}\right]^2.
$$

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

**Homework 2, problem 2 review**

Changing the tension to $\mechanical{T}_f=4\mechanical{T}_i$ at fixed $\mechanical{L}$ and $\mechanical{\mu}$ gives $\signal{\omega}_{3f}=2\signal{\omega}_{3i}$ and hence $\signal{f}_{3f}=2\signal{f}_{3i}$. The wave speed also doubles, $\mechanical{v}_{3f}=\sqrt{4\mechanical{T}_i/\mechanical{\mu}}=2\mechanical{v}_{3i}$. The ratio $\mechanical{v}/\signal{f}$ gives the wavelength.

The wavelength ratio is

$$
\frac{\signal{\lambda}_{3f}}{\signal{\lambda}_{3i}}
=\frac{\mechanical{v}_{3f}/\signal{f}_{3f}}{\mechanical{v}_{3i}/\signal{f}_{3i}}
=\frac{2}{2}=1.
$$

The same factor multiplies both ordinary frequencies because $\signal{f}=\signal{\omega}/(2\pi)$.

**Homework 2, problem 3 review**

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
| $\signal{\beta}$ | $\unit{s^{-1}}$ | Overdamped rate offset | Difference between either exponential decay rate and the critical rate $\signal{\gamma}/2$ in magnitude. |
| $\signal{\alpha}$ | $\unit{rad}$ | Response phase | Phase of the displacement relative to the driving cosine. |
| $\signal{\delta}$ | $\unit{rad}$ | Phase lag | Angle by which the steady displacement lags the applied force. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Spatial distance over one wave cycle. |
| $\mechanical{y}$ | $\unit{m}$ | Transverse displacement | Deflection of a string element from equilibrium. |
| $\mechanical{\mu}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string. |
| $\mechanical{T}$ | $\unit{N}$ | String tension | Magnitude of the force along the string, distinct from the period $\signal{T}$. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Local tangent angle | Angle between the string and the equilibrium direction. |
| $\signal{\omega}_n$ | $\unit{rad\,s^{-1}}$ | String mode angular frequency | Discrete angular frequency selected by the fixed endpoints. |
| $\mechanical{b}$ | $\unit{m}$ | Pulse height and half-width | Peak displacement and distance from the peak to a half-height point in this example. |
| $d$ | $\unit{m^4\,s^{-2}}$ | String dispersion coefficient | Multiplies the squared angular wave number in the phase speed squared. |
| $\mechanical{k}'$ | $\unit{N\,m^{-1}}$ | Coupling stiffness | Spring constant of the middle spring. |
| $\mechanical{M}$ | $\unit{kg}$ | Reduced mass | Effective mass for relative motion of the isolated pair. |
