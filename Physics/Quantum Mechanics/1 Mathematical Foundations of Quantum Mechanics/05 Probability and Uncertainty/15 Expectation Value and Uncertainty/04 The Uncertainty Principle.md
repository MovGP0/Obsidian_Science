---
title: "The Uncertainty Principle"
---

> [!TLDR]
> The Robertson inequality relates the spreads of two observables to their commutator. Applied to energy and an observable that changes with time, it gives a lower bound on a characteristic change time.

The uncertainty principle connects operator algebra to the statistical spread of measurement results. It combines the commutators and uncertainties developed in the previous chapters.

> [!theorem] Theorem 15.2 — Generalized uncertainty principle (Robertson)
> For two Hermitian observables in a normalized state,
>
> $$
> \Delta A\,\Delta B\geq
> \frac12\left|\langle[\hat A,\hat B]\rangle\right|.
> $$

The state must have finite second moments, and the operator products in the formula must be defined on that state. The spreads refer to distributions of results for repeated measurements on identically prepared systems.

## Example — Energy–time uncertainty

Let $\hat Q$ be an observable with no explicit time dependence. [[03 Ehrenfest's Theorem|Ehrenfest's theorem]] gives

$$
\frac{d\langle\hat Q\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat Q]\rangle.
$$

Thus,

$$
\left|\langle[\hat H,\hat Q]\rangle\right|
=\mechanical{\hbar}
\left|\frac{d\langle\hat Q\rangle}{d\signal{t}}\right|.
$$

Apply the Robertson inequality with $\hat A=\hat H$ and $\hat B=\hat Q$:

$$
\energy{\Delta H}\,\Delta Q
\geq\frac{\mechanical{\hbar}}2
\left|\frac{d\langle\hat Q\rangle}{d\signal{t}}\right|.
$$

Define the characteristic time

$$
\signal{\Delta t_Q}
=\frac{\Delta Q}
{\left|d\langle\hat Q\rangle/d\signal{t}\right|}.
$$

It is the time scale for the expectation value to change by one standard deviation at its current rate. Then

$$
\boxed{
\energy{\Delta H}\,\signal{\Delta t_Q}
\geq\frac{\mechanical{\hbar}}2
}.
$$

This is a form of the energy–time uncertainty relation. Time is the external parameter in the Schrödinger equation. Here, $\signal{\Delta t_Q}$ is a change time, rather than the standard deviation of a time observable.

> [!note] Conditions for the characteristic time
> The ratio is defined when the expectation value has a nonzero time derivative. It gives a local time scale. It equals an actual elapsed time for a change of one standard deviation only when the rate and spread remain sufficiently constant. If the derivative is zero, the ratio does not define a finite change time.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\Delta A$, $\Delta B$ | — | Observable spread | The standard deviation, with units set by the observable. |
| $\langle\hat Q\rangle$, $\Delta Q$ | — | Observable mean and spread | The expectation value and standard deviation of the changing observable. |
| $\energy{\Delta H}$ | $\unit{J}$ | Energy uncertainty | The standard deviation of measured energy. |
| $\signal{t}$, $\signal{\Delta t_Q}$ | $\unit{s}$ | Time | The evolution parameter and the characteristic change time. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the uncertainty bound. |
