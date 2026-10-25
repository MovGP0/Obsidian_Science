---
title: "Rectangular-barrier transmission and tunnelling"
---

> [!TLDR]
> Matching the three regions gives nonzero transmission below the barrier height, with exponential suppression for a thick barrier.

Chapter 3 — Ordinary Differential Equations · Exercise 7 · Challenge level

[[03 Ordinary Differential Equations/08 Exercises|Chapter 3 exercise index]]

## Question

A particle with energy $0<\energy{E}<\energy{V}_0$ meets a rectangular barrier:

$$
\energy{V}(\mechanical{x})=\energy{V}_0,
\qquad0\le\mechanical{x}\le\mechanical{a}.
$$

**(a)** Write the general solutions in the three regions: left, barrier, and right.

**(b)** Classically, the particle cannot cross the barrier because $\energy{E}<\energy{V}_0$. In quantum mechanics, show that the solution inside the barrier is $\mathrm{e}^{\pm\signal{\kappa}\mechanical{x}}$, with

$$
\signal{\kappa}=\frac{\sqrt{2\mechanical{m}(\energy{V}_0-\energy{E})}}{\mechanical{\hbar}}.
$$

This is a real exponential function, not an oscillating function.

**(c)** The **transmission coefficient** is

$$
T=\left|\frac{\signal{A}_{\mathrm{transmitted}}}{\signal{A}_{\mathrm{incident}}}\right|^2.
$$

For a thick barrier, $\signal{\kappa}\mechanical{a}\gg1$,

$$
T\approx\mathrm{e}^{-2\signal{\kappa}\mechanical{a}}.
$$

Comment on the exponential dependence on $\mechanical{a}$ and $\energy{V}_0-\energy{E}$. Where is tunneling used in modern technology?

> [!note]
> The transmission formula assumes equal asymptotic potentials on the incident and transmitted sides, as for a barrier with zero potential outside. The source's thick-barrier expression gives the leading exponential dependence; an energy-dependent prefactor is omitted. Retain that distinction when discussing the approximation.

## Worked solution

Assume $\energy{V}=0$ outside the barrier, as specified by the question's note, and a particle incident from the left. Use $r$ and $t$ for reflection and transmission **amplitudes**. Keep $T$ for the transmission **probability**; these quantities are different.

### (a) Solutions in the three regions

Outside the barrier, the Schrödinger equation is $\signal{\psi}''+\signal{k}^2\signal{\psi}=0$, with

$$
\signal{k}=\frac{\sqrt{2\mechanical{m}\energy{E}}}{\mechanical{\hbar}}>0.
$$

The completely general exterior solutions contain waves in both directions. For the left-incident scattering problem, there is no incoming wave from the right. Divide all amplitudes by the nonzero incident amplitude. Then

$$
\begin{aligned}
\signal{\psi}_{\mathrm L}&=\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}
+r\mathrm{e}^{-\mathrm{i}\signal{k}\mechanical{x}},&&\mechanical{x}<0,\\
\signal{\psi}_{\mathrm B}&=b\mathrm{e}^{\signal{\kappa}\mechanical{x}}
+c\mathrm{e}^{-\signal{\kappa}\mechanical{x}},&&0\le\mechanical{x}\le\mechanical{a},\\
\signal{\psi}_{\mathrm R}&=t\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}},&&\mechanical{x}>\mechanical{a}.
\end{aligned}
$$

Here $r,t,b,c$ are dimensionless amplitude ratios. Before this scattering condition is imposed, the general right-hand form is $d\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{x}}+f\mathrm{e}^{-\mathrm{i}\signal{k}\mechanical{x}}$; the condition sets $f=0$. The common wavefunction amplitude has been divided out in the displayed expressions.

### (b) Why the barrier solution is exponential

Inside the barrier,

$$
-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\signal{\psi}''
+\energy{V}_0\signal{\psi}=\energy{E}\signal{\psi}.
$$

Rearrangement gives

$$
\signal{\psi}''=\signal{\kappa}^2\signal{\psi},\qquad
\signal{\kappa}=\frac{\sqrt{2\mechanical{m}(\energy{V}_0-\energy{E})}}{\mechanical{\hbar}}.
$$

Since $\energy{V}_0-\energy{E}>0$, the characteristic roots $\pm\signal{\kappa}$ are real. Thus the solutions are $\mathrm{e}^{\pm\signal{\kappa}\mechanical{x}}$, with no oscillation. Keep both branches: the barrier has finite width, so neither branch diverges at an infinite endpoint within this region.

### (c) Derive transmission and its thick-barrier limit

Continuity of the wavefunction and its derivative at the two finite steps gives

$$
\begin{aligned}
1+r&=b+c, &\quad \mathrm{i}\signal{k}(1-r)&=\signal{\kappa}(b-c),\\
b\mathrm{e}^{\signal{\kappa}\mechanical{a}}+c\mathrm{e}^{-\signal{\kappa}\mechanical{a}}
&=t\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{a}},
&\quad \signal{\kappa}(b\mathrm{e}^{\signal{\kappa}\mechanical{a}}-c\mathrm{e}^{-\signal{\kappa}\mechanical{a}})
&=\mathrm{i}\signal{k}t\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{a}}.
\end{aligned}
$$

For compact algebra, let $q=\signal{\kappa}\mechanical{a}$ and $F=t\mathrm{e}^{\mathrm{i}\signal{k}\mechanical{a}}$. These are mathematical helpers. Add and subtract the right-edge equations:

$$
b\mathrm{e}^{q}=\frac F2\left(1+\frac{\mathrm{i}\signal{k}}{\signal{\kappa}}\right),\qquad
c\mathrm{e}^{-q}=\frac F2\left(1-\frac{\mathrm{i}\signal{k}}{\signal{\kappa}}\right).
$$

Insert these in the left-edge equations. The exponential sums give hyperbolic functions:

$$
\begin{aligned}
1+r&=F\left(\cosh q-\frac{\mathrm{i}\signal{k}}{\signal{\kappa}}\sinh q\right),\\
1-r&=F\left(\cosh q+\frac{\mathrm{i}\signal{\kappa}}{\signal{k}}\sinh q\right).
\end{aligned}
$$

Add the equations to eliminate $r$ and solve for $t$:

$$
t=\frac{\mathrm{e}^{-\mathrm{i}\signal{k}\mechanical{a}}}
{\cosh q+\dfrac{\mathrm{i}(\signal{\kappa}^2-\signal{k}^2)}{2\signal{k}\signal{\kappa}}\sinh q}.
$$

The incident and transmitted wave numbers are equal. Their probability currents therefore have the same velocity factor, so $T=|t|^2$, in agreement with the question's amplitude-ratio formula. Take the squared magnitude, use $\cosh^2q=1+\sinh^2q$, and combine terms:

$$
\begin{aligned}
T^{-1}
&=\cosh^2q+\frac{(\signal{\kappa}^2-\signal{k}^2)^2}{4\signal{k}^2\signal{\kappa}^2}\sinh^2q\\
&=1+\frac{(\signal{k}^2+\signal{\kappa}^2)^2}{4\signal{k}^2\signal{\kappa}^2}\sinh^2q\\
&=1+\frac{\energy{V}_0^2}{4\energy{E}(\energy{V}_0-\energy{E})}\sinh^2(\signal{\kappa}\mechanical{a}).
\end{aligned}
$$

For $q\gg1$, $\sinh^2q\approx\mathrm{e}^{2q}/4$. At fixed $0<\energy{E}<\energy{V}_0$, this gives

$$
\boxed{T\approx
\frac{16\energy{E}(\energy{V}_0-\energy{E})}{\energy{V}_0^2}
\mathrm{e}^{-2\signal{\kappa}\mechanical{a}}}.
$$

> [!note]
> The question's expression $T\approx\mathrm{e}^{-2\signal{\kappa}\mechanical{a}}$ states the leading exponential dependence. It omits the energy-dependent prefactor. It is not the full asymptotic equality with unit prefactor. The approximation above keeps that prefactor; the exact expression should be used when the barrier is not thick.

At fixed energy and barrier height, an increase $\Delta\mechanical{a}$ in width multiplies the leading transmission by $\mathrm{e}^{-2\signal{\kappa}\Delta\mechanical{a}}$. The exponent is

$$
-\frac{2\mechanical{a}}{\mechanical{\hbar}}
\sqrt{2\mechanical{m}(\energy{V}_0-\energy{E})}.
$$

Thus a wider barrier or a larger energy deficit suppresses transmission exponentially. The deficit enters through its square root. This explains why small changes in barrier width can produce large changes in tunnelling current.

Technology uses tunnelling in tunnel diodes, scanning tunnelling microscopes, and electron transfer through insulating layers in flash-memory programming and erasure. The exact rectangular-barrier formula is an idealized model; real device barriers can have other shapes.

## Answer

The exterior solutions are travelling waves and the interior solution is a linear combination of $\mathrm{e}^{\pm\signal{\kappa}\mechanical{x}}$. For zero potential on both exterior sides,

$$
T=\left[1+\frac{\energy{V}_0^2}{4\energy{E}(\energy{V}_0-\energy{E})}
\sinh^2(\signal{\kappa}\mechanical{a})\right]^{-1}.
$$

For a thick barrier, its leading form is the exponential in the question multiplied by $16\energy{E}(\energy{V}_0-\energy{E})/\energy{V}_0^2$. Tunnelling supports tunnel diodes, scanning tunnelling microscopes, and flash-memory charge transfer.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}_{\mathrm L},\signal{\psi}_{\mathrm B},\signal{\psi}_{\mathrm R}$ | — | Scattering wavefunctions | The states in the three regions, shown after division by the incident amplitude. |
| $\signal{A}_{\mathrm{transmitted}},\signal{A}_{\mathrm{incident}}$ | — | Wave amplitudes | The units depend on the scattering-state normalization. |
| $\mechanical{x},\mechanical{a},\Delta\mechanical{a}$ | $\unit{m}$ | Position and barrier widths | The coordinate, width, and change in width. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass in the Schrödinger equation. |
| $\energy{V},\energy{V}_0,\energy{E}$ | $\unit{J}$ | Potential and particle energies | The potential, positive barrier height, and incident energy. |
| $\signal{k},\signal{\kappa}$ | $\unit{m^{-1}}$ | Wave number and decay coefficient | The exterior oscillation rate and barrier exponential rate. |
| $r,t,b,c,d,f$ | $1$ | Amplitude ratios | The complex wave coefficients relative to the incident amplitude. |
| $T$ | $1$ | Transmission coefficient | The transmitted probability-current fraction. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that sets the tunnelling exponent. |
