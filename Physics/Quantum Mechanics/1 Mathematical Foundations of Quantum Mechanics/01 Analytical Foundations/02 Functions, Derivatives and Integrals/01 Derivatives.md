---
title: "Derivatives"
---

> [!TLDR]
> A derivative gives a function's local rate of change. The power, exponential, product, and chain rules let us calculate derivatives of quantum wavefunctions.

> [!definition] Definition 2.1 — Derivative
> The **derivative** of $f:\mathbb{R}\to\mathbb{C}$ at $x_0$ is the limit
>
> $$
> f'(x_0)=\left.\frac{\mathrm{d}f}{\mathrm{d}x}\right|_{x_0}
> =\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h},
> $$
>
> if the limit exists. The function $f$ is **differentiable** at $x_0$ if this limit exists and is finite.

Geometrically, $f'(x_0)$ is the slope of the tangent to the graph of $f$ at $(x_0,f(x_0))$. Physically, if $\mechanical{f}(\signal{t})$ is a particle's position at time $\signal{t}$, its derivative $\mechanical{f}'(\signal{t})$ is the instantaneous velocity.

> [!note]
> The ordinary geometric statement about a tangent slope applies directly to a real-valued function. For a complex-valued function, differentiate its real and imaginary parts.

## Derivative rules

The following rules follow from the definition. You must know them by memory.

| $f(x)$ | $f'(x)$ | Comment |
| --- | --- | --- |
| $c$ (constant) | $0$ | |
| $x^n$ | $nx^{n-1}$ | $n\in\mathbb{R}$; use $x>0$ if $n\notin\mathbb{Z}$. |
| $\mathrm{e}^{ax}$ | $a\mathrm{e}^{ax}$ | $a\in\mathbb{C}$. |
| $\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}$ | $\mathrm{i}\signal{k}\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}$ | Key case for quantum mechanics. |
| $\ln x$ | $1/x$ | $x>0$. |
| $\sin(ax)$ | $a\cos(ax)$ | |
| $\cos(ax)$ | $-a\sin(ax)$ | |
| $f(x)+g(x)$ | $f'(x)+g'(x)$ | Linearity. |
| $f(x)g(x)$ | $f'(x)g(x)+f(x)g'(x)$ | Product rule (Leibniz). |
| $f(g(x))$ | $f'(g(x))\cdot g'(x)$ | Chain rule. |

## Example — Derivative of a plane wave

Consider $\signal{\psi}(\mechanical{x})=\signal{A}\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}$. This function is the wavefunction of a free particle with momentum $\mechanical{p}=\energy{\hbar}\signal{k}$.

Use $\mathrm{d}\mathrm{e}^{ax}/\mathrm{d}x=a\mathrm{e}^{ax}$ with $a=\mathrm{i}\signal{k}$:

$$
\frac{\mathrm{d}\signal{\psi}}{\mathrm{d}\mechanical{x}}
=\mathrm{i}\signal{k}\cdot\signal{A}\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}
=\mathrm{i}\signal{k}\signal{\psi}(\mechanical{x}).
$$

Differentiate again:

$$
\frac{\mathrm{d}^2\signal{\psi}}{\mathrm{d}\mechanical{x}^2}
=\mathrm{i}\signal{k}\cdot\frac{\mathrm{d}\signal{\psi}}{\mathrm{d}\mechanical{x}}
=(\mathrm{i}\signal{k})^2\signal{\psi}
=-\signal{k}^2\signal{\psi}.
$$

The momentum operator in quantum mechanics is $\hat p=-\mathrm{i}\energy{\hbar}\,\mathrm{d}/\mathrm{d}\mechanical{x}$. Apply it:

$$
\hat p\signal{\psi}
=-\mathrm{i}\energy{\hbar}\frac{\mathrm{d}\signal{\psi}}{\mathrm{d}\mechanical{x}}
=-\mathrm{i}\energy{\hbar}\cdot\mathrm{i}\signal{k}\signal{\psi}
=\energy{\hbar}\signal{k}\signal{\psi}.
$$

The function $\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}$ is an eigenfunction of the momentum operator with eigenvalue $\energy{\hbar}\signal{k}=\mechanical{p}$. This is not a coincidence. We will return to it in Chapter 7.

## Example — Derivative of a product

Calculate the derivative of $f(x)=x^2\mathrm{e}^{-x^2}$.

Use the product rule with $u=x^2$ and $v=\mathrm{e}^{-x^2}$:

$$
u'=2x,\qquad v'=-2x\mathrm{e}^{-x^2}.
$$

$$
\begin{aligned}
f'(x)&=2x\mathrm{e}^{-x^2}+x^2\cdot(-2x\mathrm{e}^{-x^2})\\
&=2x\mathrm{e}^{-x^2}(1-x^2).
\end{aligned}
$$

The critical points, where $f'=0$, are $x=0$ and $x=\pm1$. The function is nonnegative and has maxima at $x=\pm1$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{f}(\signal{t})$ | $\unit{m}$ | Particle position | The position function in the physical interpretation of a derivative. |
| $\mechanical{f}'(\signal{t})$ | $\unit{m\,s^{-1}}$ | Instantaneous velocity | The time derivative of the particle's position. |
| $\signal{t}$ | $\unit{s}$ | Time | The independent variable of the position function. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The spatial coordinate in the plane-wave example. |
| $\signal{\psi}$ | — | Wavefunction | The free-particle plane wave. Its unit depends on the normalization convention. |
| $\signal{A}$ | — | Wavefunction amplitude | The constant prefactor of the plane wave. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | The spatial phase coefficient of the plane wave. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The eigenvalue of the momentum operator for this wave. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the momentum operator and momentum–wave-number relation. |
