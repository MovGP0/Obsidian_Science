---
title: "Bound states in a finite potential well"
---

> [!TLDR]
> Finite-well states oscillate inside and decay outside; matching their values and slopes selects discrete energies.

Chapter 3 — Ordinary Differential Equations · Exercise 4 · Intermediate level

[[03 Ordinary Differential Equations/08 Exercises|Chapter 3 exercise index]]

## Question

A particle is in the potential

$$
\energy{V}(\mechanical{x})=
\begin{cases}
-\energy{V}_0<0,& |\mechanical{x}|\le\mechanical{a},\\
0,&\text{otherwise}.
\end{cases}
$$

**(a)** Write the Schrödinger equation in both regions for a bound-state energy $-\energy{V}_0<\energy{E}<0$.

**(b)** Show that the solution oscillates inside the well, with sine and cosine terms, and decays outside as $\mathrm{e}^{-\signal{\kappa}|\mechanical{x}|}$.

**(c)** Write the matching conditions: continuity of $\signal{\psi}$ and $\signal{\psi}'$ at $\mechanical{x}=\pm\mechanical{a}$. Why do they give a transcendental equation for $\energy{E}$?

## Worked solution

### (a) Equations in the two potential regions

Start with the time-independent Schrödinger equation:

$$
-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\signal{\psi}''
+\energy{V}\signal{\psi}=\energy{E}\signal{\psi}.
$$

Inside, $\energy{V}=-\energy{V}_0$. Move the potential term to the right and define a positive wave number:

$$
\signal{\psi}''+\signal{k}^2\signal{\psi}=0,
\qquad
\signal{k}=\frac{\sqrt{2\mechanical{m}(\energy{E}+\energy{V}_0)}}{\mechanical{\hbar}}>0.
$$

Outside, $\energy{V}=0$ and $\energy{E}<0$. Define a positive decay coefficient:

$$
\signal{\psi}''-\signal{\kappa}^2\signal{\psi}=0,
\qquad
\signal{\kappa}=\frac{\sqrt{-2\mechanical{m}\energy{E}}}{\mechanical{\hbar}}>0.
$$

The energy interval in the question makes both square roots real. It also implies

$$
\signal{k}^2+\signal{\kappa}^2
=\frac{2\mechanical{m}\energy{V}_0}{\mechanical{\hbar}^2}.
$$

### (b) Oscillation and decay

The interior characteristic roots are $\pm\mathrm{i}\signal{k}$, so the general interior solution is a sine and cosine combination. The exterior roots are $\pm\signal{\kappa}$. A bound state must be square-integrable; discard the branch that grows at either infinity. The remaining solution is

$$
\signal{\psi}(\mechanical{x})=
\begin{cases}
\signal{C}_{\mathrm L}\mathrm{e}^{\signal{\kappa}(\mechanical{x}+\mechanical{a})},&\mechanical{x}<-\mechanical{a},\\
\signal{A}\cos(\signal{k}\mechanical{x})+\signal{B}\sin(\signal{k}\mechanical{x}),&|\mechanical{x}|\le\mechanical{a},\\
\signal{C}_{\mathrm R}\mathrm{e}^{-\signal{\kappa}(\mechanical{x}-\mechanical{a})},&\mechanical{x}>\mechanical{a}.
\end{cases}
$$

The shifts make $\signal{C}_{\mathrm L}$ and $\signal{C}_{\mathrm R}$ the values at the two edges. Each exterior branch is proportional to $\mathrm{e}^{-\signal{\kappa}|\mechanical{x}|}$ on its own side. The two coefficients need not have the same sign; an odd state has opposite signs.

### (c) Matching and the energy equations

The potential jump is finite and the particle mass is constant. Integrating the Schrödinger equation over a shrinking interval about an edge makes the finite potential and energy integrals tend to zero. Hence the derivative has no jump. The wavefunction is also continuous. At $\mechanical{x}=+\mechanical{a}$, the two conditions give

$$
\begin{aligned}
\signal{A}\cos(\signal{k}\mechanical{a})+\signal{B}\sin(\signal{k}\mechanical{a})&=\signal{C}_{\mathrm R},\\
-\signal{k}\signal{A}\sin(\signal{k}\mechanical{a})+\signal{k}\signal{B}\cos(\signal{k}\mechanical{a})&=-\signal{\kappa}\signal{C}_{\mathrm R}.
\end{aligned}
$$

At $\mechanical{x}=-\mechanical{a}$, they give

$$
\begin{aligned}
\signal{A}\cos(\signal{k}\mechanical{a})-\signal{B}\sin(\signal{k}\mechanical{a})&=\signal{C}_{\mathrm L},\\
\signal{k}\signal{A}\sin(\signal{k}\mechanical{a})+\signal{k}\signal{B}\cos(\signal{k}\mechanical{a})&=\signal{\kappa}\signal{C}_{\mathrm L}.
\end{aligned}
$$

The potential is even, so choose states of definite parity. This reduces the four matching equations to two equations for each parity.

For an **even state**, $\signal{B}=0$ and $\signal{C}_{\mathrm L}=\signal{C}_{\mathrm R}$. At the right edge,

$$
\signal{C}_{\mathrm R}=\signal{A}\cos(\signal{k}\mechanical{a}),\qquad
-\signal{k}\signal{A}\sin(\signal{k}\mechanical{a})=-\signal{\kappa}\signal{C}_{\mathrm R}.
$$

Divide the second equation by the first for a nonzero state:

$$
\boxed{\signal{k}\tan(\signal{k}\mechanical{a})=\signal{\kappa}}.
$$

For an **odd state**, $\signal{A}=0$ and $\signal{C}_{\mathrm L}=-\signal{C}_{\mathrm R}$. Then

$$
\signal{C}_{\mathrm R}=\signal{B}\sin(\signal{k}\mechanical{a}),\qquad
\signal{k}\signal{B}\cos(\signal{k}\mechanical{a})=-\signal{\kappa}\signal{C}_{\mathrm R},
$$

which gives

$$
\boxed{-\signal{k}\cot(\signal{k}\mechanical{a})=\signal{\kappa}}.
$$

The divisions cannot remove a nonzero bound state: if the corresponding boundary sine or cosine were zero, continuity would set the exterior coefficient to zero, and derivative matching would then set the interior coefficient to zero.

Both $\signal{k}$ and $\signal{\kappa}$ depend on $\energy{E}$. For example, set $z=\signal{k}\mechanical{a}$ and $z_0=\mechanical{a}\sqrt{2\mechanical{m}\energy{V}_0}/\mechanical{\hbar}$. These are dimensionless helpers. The equations become

$$
z\tan z=\sqrt{z_0^2-z^2}
\quad\text{or}\quad
-z\cot z=\sqrt{z_0^2-z^2},\qquad 0<z<z_0.
$$

The unknown occurs inside trigonometric functions and outside them, so these are transcendental equations. Their allowed roots give discrete bound-state energies through $\energy{E}=\mechanical{\hbar}^2z^2/(2\mechanical{m}\mechanical{a}^2)-\energy{V}_0$. A graphical or numerical root search usually finds the energies.

## Answer

Inside the well, $\signal{\psi}''+\signal{k}^2\signal{\psi}=0$; outside, $\signal{\psi}''-\signal{\kappa}^2\signal{\psi}=0$. The bound state oscillates inside and decays on both exterior sides. Continuity of the state and its first derivative gives

$$
\signal{k}\tan(\signal{k}\mechanical{a})=\signal{\kappa}
\quad\text{(even)},\qquad
-\signal{k}\cot(\signal{k}\mechanical{a})=\signal{\kappa}
\quad\text{(odd)}.
$$

These equations determine the allowed energies in $-\energy{V}_0<\energy{E}<0$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Bound-state wavefunction | The square-integrable state in the finite well. |
| $\signal{A},\signal{B},\signal{C}_{\mathrm L},\signal{C}_{\mathrm R}$ | $\unit{m^{-1/2}}$ | Wavefunction coefficients | The interior and edge amplitudes. |
| $\mechanical{x},\mechanical{a}$ | $\unit{m}$ | Position and half-width | The coordinate and distance from the center to an edge. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The constant mass in both regions. |
| $\energy{V},\energy{V}_0,\energy{E}$ | $\unit{J}$ | Potential and state energies | The potential, positive well depth, and negative bound-state energy. |
| $\signal{k},\signal{\kappa}$ | $\unit{m^{-1}}$ | Wave number and decay coefficient | The interior oscillation rate and exterior decay rate. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that sets the energy scale. |
