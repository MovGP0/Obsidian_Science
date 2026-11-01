---
title: "Partial Derivatives"
---

> [!TLDR]
> A partial derivative changes one variable while the other variables remain fixed. Applied to a plane wave, these derivatives give the free-particle energy–momentum relation.

When a function depends on several variables, differentiate with respect to one variable and keep the others fixed. A wavefunction $\signal{\psi}(\mechanical{x},\signal{t})$ is an example.

> [!definition] Definition 2.2 — Partial derivative
> For $f:\mathbb{R}^2\to\mathbb{C}$, the partial derivative with respect to $x$ is
>
> $$
> \frac{\partial f}{\partial x}(x_0,t_0)
> =\lim_{h\to0}\frac{f(x_0+h,t_0)-f(x_0,t_0)}{h}.
> $$
>
> Treat $t$ as a constant and differentiate with respect to $x$ in the usual way.

## Example — Partial derivatives of a plane wave

Consider

$$
\signal{\psi}(\mechanical{x},\signal{t})
=\signal{A}\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})}.
$$

This is the general form of a plane wave in quantum mechanics.

Differentiate with respect to $\mechanical{x}$, with $\signal{t}$ fixed:

$$
\frac{\partial\signal{\psi}}{\partial\mechanical{x}}
=\signal{A}\cdot\mathrm{i}\signal{k}\cdot
\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})}
=\mathrm{i}\signal{k}\signal{\psi}.
$$

Differentiate with respect to $\signal{t}$, with $\mechanical{x}$ fixed:

$$
\frac{\partial\signal{\psi}}{\partial\signal{t}}
=\signal{A}\cdot(-\mathrm{i}\signal{\omega})\cdot
\mathrm{e}^{\mathrm{i}(\signal{k}\mechanical{x}-\signal{\omega}\signal{t})}
=-\mathrm{i}\signal{\omega}\signal{\psi}.
$$

The second derivative with respect to $\mechanical{x}$ is

$$
\frac{\partial^2\signal{\psi}}{\partial\mechanical{x}^2}
=\mathrm{i}\signal{k}\cdot\frac{\partial\signal{\psi}}{\partial\mechanical{x}}
=(\mathrm{i}\signal{k})^2\signal{\psi}
=-\signal{k}^2\signal{\psi}.
$$

Substitute these results into the Schrödinger equation for a free particle, with potential energy $\energy{V}=0$:

$$
\mathrm{i}\energy{\hbar}\frac{\partial\signal{\psi}}{\partial\signal{t}}
=-\frac{\energy{\hbar}^2}{2\mechanical{m}}
\frac{\partial^2\signal{\psi}}{\partial\mechanical{x}^2}.
$$

The left side is

$$
\mathrm{i}\energy{\hbar}\cdot(-\mathrm{i}\signal{\omega})\signal{\psi}
=\energy{\hbar}\signal{\omega}\signal{\psi}.
$$

The right side is

$$
-\frac{\energy{\hbar}^2}{2\mechanical{m}}\cdot(-\signal{k}^2)\signal{\psi}
=\frac{\energy{\hbar}^2\signal{k}^2}{2\mechanical{m}}\signal{\psi}.
$$

The equation is satisfied exactly when

$$
\energy{\hbar}\signal{\omega}
=\frac{\energy{\hbar}^2\signal{k}^2}{2\mechanical{m}},
\qquad\text{or}\qquad
\signal{\omega}=\frac{\energy{\hbar}\signal{k}^2}{2\mechanical{m}}.
$$

With $\mechanical{p}=\energy{\hbar}\signal{k}$ and $\energy{E}=\energy{\hbar}\signal{\omega}$, we obtain

$$
\energy{E}=\frac{\mechanical{p}^2}{2\mechanical{m}}.
$$

This is the nonrelativistic dispersion relation for a free particle.

## Partial change is different from change along a path

The limit in Definition 2.2 must exist and be finite. Holding the second coordinate fixed is part of the definition. For a differentiable mathematical function evaluated on a path $x=x(s)$, $t=t(s)$, the chain rule instead gives

$$
\frac{\mathrm{d}}{\mathrm{d}s}f(x(s),t(s))
=\frac{\partial f}{\partial x}\frac{\mathrm{d}x}{\mathrm{d}s}
+\frac{\partial f}{\partial t}\frac{\mathrm{d}t}{\mathrm{d}s}.
$$

Here $s$ is a path parameter, and the partial derivatives are evaluated on the path. A path derivative can change both inputs; it must not replace the fixed-position time derivative in the Schrödinger equation.

For the wave example, take a nonzero constant amplitude, real constant wave number and frequency, and positive mass. Then cancellation of the wavefunction is legitimate because this exponential never vanishes. The equation constrains the frequency: a trial plane wave with an arbitrary frequency is not necessarily a solution. Reversing the wave number reverses momentum but leaves its square, and therefore the free-particle energy, unchanged. This checks the distinction between a directed momentum and a nonnegative kinetic energy.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | — | Wavefunction | The free-particle plane wave. Its unit depends on the normalization convention. |
| $\signal{A}$ | — | Wavefunction amplitude | The constant prefactor of the plane wave. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The spatial coordinate of the wavefunction. |
| $\signal{t}$ | $\unit{s}$ | Time | The time coordinate of the wavefunction. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The coefficient of position in the wave's phase. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The coefficient of time in the wave's phase. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that relates wave parameters to momentum and energy. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The free particle's mass. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The free particle's momentum. |
| $\energy{E}$ | $\unit{J}$ | Energy | The nonrelativistic energy of the free particle. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The potential energy, set to zero for a free particle. |
