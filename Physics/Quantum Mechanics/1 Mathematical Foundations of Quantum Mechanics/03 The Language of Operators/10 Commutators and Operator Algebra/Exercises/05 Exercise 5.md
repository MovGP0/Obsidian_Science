---
title: "The Ehrenfest theorem"
---

> [!TLDR]
> The Schrödinger equation and its adjoint turn the time derivative of an expectation value into a Hamiltonian commutator.

Chapter 10 — Commutators and Operator Algebra · Exercise 5 · Intermediate level.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

Prove that, for an observable $\hat A$ without explicit time dependence,

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle.
$$

**Hint:** Differentiate $\langle\hat A\rangle(\signal{t})=\langle\psi(\signal{t})|\hat A|\psi(\signal{t})\rangle$ and use $i\mechanical{\hbar}\partial_{\signal{t}}|\psi\rangle=\hat H|\psi\rangle$.

## Worked solution

Assume a normalized state obeys the Schrödinger equation and that the Hamiltonian is self-adjoint on the required domain:

$$
i\mechanical{\hbar}\frac{\partial}{\partial\signal{t}}|\psi\rangle=\hat H|\psi\rangle,
\qquad \hat H^\dagger=\hat H.
$$

Divide by $i\mechanical{\hbar}$. Since $1/i=-i$, the ket derivative is

$$
\frac{\partial}{\partial\signal{t}}|\psi\rangle
=-\frac{i}{\mechanical{\hbar}}\hat H|\psi\rangle.
$$

Take the adjoint of this equation. The adjoint reverses the order of a product and complex-conjugates its scalar coefficient. Thus

$$
\frac{\partial}{\partial\signal{t}}\langle\psi|
=\frac{i}{\mechanical{\hbar}}\langle\psi|\hat H.
$$

This opposite sign is essential. Differentiate the expectation value with the product rule. The operator has no explicit time dependence, so there is no operator-derivative term:

$$
\begin{aligned}
\frac{d\langle\hat A\rangle}{d\signal{t}}
&=\left(\frac{\partial\langle\psi|}{\partial\signal{t}}\right)\hat A|\psi\rangle
+\langle\psi|\hat A\left(\frac{\partial|\psi\rangle}{\partial\signal{t}}\right)\\
&=\frac{i}{\mechanical{\hbar}}\langle\psi|\hat H\hat A|\psi\rangle
-\frac{i}{\mechanical{\hbar}}\langle\psi|\hat A\hat H|\psi\rangle\\
&=\frac{i}{\mechanical{\hbar}}\langle\psi|(\hat H\hat A-\hat A\hat H)|\psi\rangle\\
&=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle.
\end{aligned}
$$

The commutator therefore measures the change of the mean caused by state evolution. If it vanishes on the evolving state, this expectation value is constant.

> [!note]
> The state must be differentiable, and the products $\hat H\hat A|\psi\rangle$ and $\hat A\hat H|\psi\rangle$ must be defined with sufficient regularity to differentiate the expectation value. For an explicitly time-dependent observable, add $\langle\partial\hat A/\partial\signal{t}\rangle$ to the right side.

## Answer

$$
\boxed{\frac{d\langle\hat A\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle}
$$

This holds for an observable with no explicit time dependence under the stated differentiability and domain conditions.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle\hat A\rangle$ | — | Observable mean | The mean value, with the unit of the chosen observable. |
| $\signal{t}$ | $\unit{s}$ | Time | The parameter of state evolution. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the Schrödinger equation. |
