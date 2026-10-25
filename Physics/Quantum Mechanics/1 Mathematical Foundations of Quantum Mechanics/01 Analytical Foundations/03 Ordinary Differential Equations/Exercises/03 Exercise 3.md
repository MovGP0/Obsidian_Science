---
title: "Verification of infinite-well eigenstates"
---

> [!TLDR]
> The sine states vanish at both walls, have unit norm, and satisfy the interior Schrödinger equation.

Chapter 3 — Ordinary Differential Equations · Exercise 3 · Basic level

[[03 Ordinary Differential Equations/08 Exercises|Chapter 3 exercise index]]

## Question

Verify that

$$
\signal{\psi}_n(\mechanical{x})
=\sqrt{\frac2{\mechanical{L}}}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
$$

satisfies:

**(a)** The boundary conditions $\signal{\psi}_n(0)=\signal{\psi}_n(\mechanical{L})=0$.

**(b)** The normalization condition

$$
\int_0^{\mechanical{L}}|\signal{\psi}_n|^2\,\mathrm{d}\mechanical{x}=1.
$$

**(c)** The Schrödinger equation with

$$
\energy{E}_n=\frac{n^2\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}.
$$

## Worked solution

Take $\mechanical{L}>0$ and $n=1,2,3,\ldots$. The state is defined inside the infinite well, where $\energy{V}=0$.

### (a) Boundary conditions

At the left and right walls,

$$
\signal{\psi}_n(0)=\sqrt{\frac2{\mechanical{L}}}\sin0=0,
\qquad
\signal{\psi}_n(\mechanical{L})
=\sqrt{\frac2{\mechanical{L}}}\sin(n\pi)=0.
$$

The positive-integer condition on $n$ makes the second sine vanish. The choice $n=0$ gives the zero function, which cannot be normalized.

### (b) Normalization

The wavefunction is real. Use $\sin^2u=(1-\cos2u)/2$ to perform the integral:

$$
\begin{aligned}
\int_0^{\mechanical{L}}|\signal{\psi}_n|^2\,\mathrm{d}\mechanical{x}
&=\frac2{\mechanical{L}}\int_0^{\mechanical{L}}
\sin^2\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)\,\mathrm{d}\mechanical{x}\\
&=\frac1{\mechanical{L}}
\left[\mechanical{x}-\frac{\mechanical{L}}{2n\pi}
\sin\left(\frac{2n\pi\mechanical{x}}{\mechanical{L}}\right)\right]_0^{\mechanical{L}}\\
&=\frac{\mechanical{L}}{\mechanical{L}}=1.
\end{aligned}
$$

Thus the factor $\sqrt{2/\mechanical{L}}$ makes the total probability one.

### (c) Schrödinger equation

Differentiate twice:

$$
\signal{\psi}_n''(\mechanical{x})
=-\left(\frac{n\pi}{\mechanical{L}}\right)^2\signal{\psi}_n(\mechanical{x}).
$$

Inside the well, the time-independent Schrödinger equation is

$$
-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\signal{\psi}_n''
=\energy{E}_n\signal{\psi}_n.
$$

Substitute the second derivative:

$$
-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\signal{\psi}_n''
=\frac{n^2\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}\signal{\psi}_n
=\energy{E}_n\signal{\psi}_n.
$$

This verifies the equation and the stated energy. The infinite walls enter through the boundary conditions; the interior equation does not apply across an infinite potential jump.

## Answer

All three conditions hold for every positive integer $n$: both endpoint values are zero, the norm is one, and the energy is

$$
\energy{E}_n=\frac{n^2\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}_n$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional box state. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate inside the well. |
| $\mechanical{L}$ | $\unit{m}$ | Well width | The distance between the walls. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass in the kinetic-energy operator. |
| $\energy{E}_n,\energy{V}$ | $\unit{J}$ | Energy and potential energy | The state energy and the zero interior potential. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the Schrödinger equation. |
