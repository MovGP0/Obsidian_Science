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

## Why the commutator bounds the spreads

For the following proof, assume the stated operator products exist. Form the centered vectors $|u\rangle=(\hat A-\langle\hat A\rangle\hat I)|\psi\rangle$ and $|v\rangle=(\hat B-\langle\hat B\rangle\hat I)|\psi\rangle$. Their norms are $\Delta A$ and $\Delta B$. Cauchy–Schwarz gives $\Delta A\,\Delta B\ge|\langle u|v\rangle|$, which is at least the absolute value of its imaginary part. Self-adjointness gives

$$
2i\operatorname{Im}\langle u|v\rangle
=\langle u|v\rangle-\langle v|u\rangle
=\langle[\hat A,\hat B]\rangle.
$$

Taking absolute values proves the bound. Centering removes the means, while the imaginary part selects the commutator. This derivation is also given in [MIT Quantum Theory I, Lecture 4](https://ocw.mit.edu/courses/8-321-quantum-theory-i-fall-2017/ac00139191d2945975969fd58e335c09_MIT8_321F17_lec4.pdf).

A nonzero operator commutator need not have a nonzero expectation in every state. A zero right-hand side in one state therefore gives only a trivial lower bound; it does not prove that either spread vanishes or that the observables commute.

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
