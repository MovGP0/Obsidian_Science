---
title: "Applications to Oscillations and Signals"
---

> [!TLDR]
> Complex exponentials turn oscillation derivatives into multiplication and combine amplitude with phase in a phasor. In quantum mechanics, the conjugate of a wavefunction gives a real, nonnegative probability density.

Euler's formula is the standard tool for the description of oscillations.

A sinusoidal signal with amplitude $\signal{A}$, angular frequency $\signal{\omega}$, and initial phase $\signal{\phi}$ is written as

$$
\signal{f}(\signal{t})=\signal{A}\cos(\signal{\omega}\signal{t}+\signal{\phi}).
$$

In complex form,

$$
\signal{f}(\signal{t})
=\operatorname{Re}\!\left[\signal{A}\mathrm{e}^{\mathrm{i}(\signal{\omega}\signal{t}+\signal{\phi})}\right]
=\operatorname{Re}\!\left[\signal{A}\mathrm{e}^{\mathrm{i}\signal{\phi}}\cdot\mathrm{e}^{\mathrm{i}\signal{\omega}\signal{t}}\right].
$$

Define the **phasor** $\signal{\widetilde A}=\signal{A}\mathrm{e}^{\mathrm{i}\signal{\phi}}$. It represents the amplitude and phase with one complex number. Differentiation becomes multiplication:

$$
\frac{\mathrm{d}}{\mathrm{d}\signal{t}}
\left[\signal{\widetilde A}\mathrm{e}^{\mathrm{i}\signal{\omega}\signal{t}}\right]
=\mathrm{i}\signal{\omega}\cdot\signal{\widetilde A}\mathrm{e}^{\mathrm{i}\signal{\omega}\signal{t}}.
$$

A time derivative corresponds to multiplication by $\mathrm{i}\signal{\omega}$. Differential equations for oscillations become algebraic equations.

## Example — Sum of two oscillations with different phases

Calculate

$$
\signal{f}(\signal{t})
=3\cos(\signal{\omega}\signal{t})
+4\cos\left(\signal{\omega}\signal{t}+\frac{\pi}{2}\right)
$$

and write the result in the form $\signal{R}\cos(\signal{\omega}\signal{t}+\signal{\phi})$.

Use the phasors $\signal{\widetilde A}_1=3$ and $\signal{\widetilde A}_2=4\mathrm{e}^{\mathrm{i}\pi/2}=4\mathrm{i}$. Then

$$
\signal{\widetilde A}=3+4\mathrm{i}.
$$

The resultant amplitude is

$$
\signal{R}=|3+4\mathrm{i}|=\sqrt{9+16}=5.
$$

The phase is

$$
\signal{\phi}=\arg(3+4\mathrm{i})=\arctan(4/3)\approx53.1\,\unit{{}^{\circ}}.
$$

Thus,

$$
\signal{f}(\signal{t})=5\cos\bigl(\signal{\omega}\signal{t}+\arctan(4/3)\bigr).
$$

Without complex numbers, this calculation would require trigonometric angle-addition formulas and much more work.

> [!note]
> The source gives no physical unit for the signal amplitudes $3$, $4$, and $5$. They have the same unit as the signal. The phase conversion to degrees is only for display; the trigonometric expressions use radians.

> [!info] Quantum mechanics — Why the wavefunction is complex
> The wavefunction $\signal{\psi}(\mechanical{x},\signal{t})$ for a free particle with momentum $\mechanical{p}$ and energy $\energy{E}$ is
>
> $$
> \signal{\psi}(\mechanical{x},\signal{t})
> =\signal{A}\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})},
> \qquad\signal{k}=\frac{\mechanical{p}}{\energy{\hbar}},
> \quad\signal{\omega}=\frac{\energy{E}}{\energy{\hbar}}.
> $$
>
> This is not an arbitrary choice. The time-dependent Schrödinger equation is
>
> $$
> \mathrm{i}\energy{\hbar}\frac{\partial\signal{\psi}}{\partial\signal{t}}
> =-\frac{\energy{\hbar}^2}{2\mechanical{m}}
> \frac{\partial^2\signal{\psi}}{\partial\mechanical{x}^2}.
> $$
>
> The factor $\mathrm{i}$ on the left side makes the solutions intrinsically complex. There is no such factor on the right side. An equation of the form $\mathrm{i}\signal{\omega}\signal{\psi}=\partial_{xx}\signal{\psi}$ cannot have real solutions that change with time.[^real-solutions]
>
> The physically measurable quantity is not $\signal{\psi}$, but $|\signal{\psi}|^2$:
>
> $$
> \rho(\mechanical{x},\signal{t})
> =|\signal{\psi}(\mechanical{x},\signal{t})|^2
> =\signal{\psi}^*(\mechanical{x},\signal{t})\signal{\psi}(\mechanical{x},\signal{t}).
> $$
>
> This is the **probability density**. The probability of finding the particle in the interval $[\mechanical{x},\mechanical{x}+\mathrm{d}\mechanical{x}]$ is $\rho(\mechanical{x},\signal{t})\,\mathrm{d}\mechanical{x}$.
>
> The conjugate $\signal{\psi}^*$ has a structural role. It ensures that $|\signal{\psi}|^2$ is real and nonnegative. In contrast, $\signal{\psi}^2$ would generally be complex and would have no probability interpretation.
>
> Finally, normalization,
>
> $$
> \int_{-\infty}^{+\infty}|\signal{\psi}(\mechanical{x},\signal{t})|^2\,\mathrm{d}\mechanical{x}=1,
> $$
>
> states that the particle must be somewhere. Chapter 2 will show how to calculate such integrals explicitly.

[^real-solutions]: In contrast, the heat equation $\partial_t u=\partial_{xx}u$ and the wave equation $\partial_{tt}u=\partial_{xx}u$ have real solutions.

> [!note]
> The source first gives an ideal plane wave and later gives the normalization condition for a normalizable state. A nonzero plane wave has constant probability density and cannot satisfy this integral over the whole real line. Use a wave packet for unit normalization on the real line, or an appropriate alternative normalization for ideal plane waves.
>
> The source also uses $\mathrm{i}\signal{\omega}\signal{\psi}=\partial_{xx}\signal{\psi}$ as a schematic statement. The argument about real solutions follows directly from the time-dependent Schrödinger equation above: if $\signal{\psi}$ is real for all positions and times, its imaginary part requires $\partial\signal{\psi}/\partial\signal{t}=0$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{f}(\signal{t})$ | — | Signal | The real oscillating signal. Its unit depends on the application. |
| $\signal{A}$ | — | Signal amplitude | The amplitude of a sinusoidal signal. It has the same unit as the signal. |
| $\signal{\widetilde A},\signal{\widetilde A}_1,\signal{\widetilde A}_2$ | — | Phasors | Complex amplitudes that represent signal amplitude and phase. |
| $\signal{R}$ | — | Resultant signal amplitude | The absolute value of the sum of the two phasors. |
| $\signal{t}$ | $\unit{s}$ | Time | The time coordinate of the signal or wavefunction. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The rate at which the signal or plane-wave phase changes with time. |
| $\signal{\phi}$ | $\unit{rad}$ | Phase | The initial or resultant phase of an oscillation. |
| $\signal{\psi}(\mechanical{x},\signal{t})$ | $\unit{m^{-1/2}}$ | Wavefunction | The position-space wavefunction with one-dimensional probability-density normalization. |
| $\signal{A}$ | $\unit{m^{-1/2}}$ | Wavefunction amplitude | The constant prefactor in the plane-wave expression under the stated unit convention. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle's position in one spatial dimension. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum of the free particle. |
| $\energy{E}$ | $\unit{J}$ | Energy | The energy of the free particle. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The spatial phase coefficient of the plane wave. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that relates energy and momentum to wave frequency and wave number. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass in the Schrödinger equation. |
| $\rho(\mechanical{x},\signal{t})$ | $\unit{m^{-1}}$ | Probability density | The probability per unit length in position space. |
| $u$ | — | Real field | The field in the comparison heat and wave equations. Its unit depends on the field. |
