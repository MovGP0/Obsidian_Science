---
title: "Dirac Notation and Quantum Mechanics"
---

> [!TLDR]
> Position and momentum have a nonzero canonical commutator. The Robertson inequality and the commutator identities connect operator algebra to measurement uncertainties.

## Position and momentum in the position representation

Use these formulas for a particle on the full real line, with square-integrable wavefunctions and a fixed Cartesian coordinate. Position acts by multiplication; momentum acts by differentiation. Their self-adjoint realizations have domains within the state space, so the formulas are not actions on every square-integrable function. A finite interval requires separate boundary conditions.

$$
\hat x\signal{\psi}(\mechanical{x})
=\mechanical{x}\signal{\psi}(\mechanical{x}),
$$

$$
\hat p\signal{\psi}(\mechanical{x})
=-i\mechanical{\hbar}
\frac{\partial\signal{\psi}}{\partial\mechanical{x}}.
$$

## Canonical commutator

$$
[\hat x,\hat p]=i\mechanical{\hbar}\hat I.
$$

Here $[\hat A,\hat B]=\hat A\hat B-\hat B\hat A$. On a smooth, rapidly decreasing test wavefunction, the product rule gives an extra wavefunction term when momentum differentiates the product of position and wavefunction. The derivative terms cancel in the subtraction, leaving the positive sign shown above. This provides a direct check on the momentum sign convention.

## Robertson inequality

$$
\Delta A\,\Delta B
\geq\frac12\left|\langle[\hat A,\hat B]\rangle\right|.
$$

The state is normalized and has the required finite moments and operator domains.

The operators represent self-adjoint observables, and $\Delta A=\sqrt{\langle\hat A^2\rangle-\langle\hat A\rangle^2}$, with the corresponding definition for $B$. Use this inequality to bound the spread of repeated measurements on identically prepared states. It is a state-preparation bound; it does not by itself describe the disturbance caused by a measurement device.

For position and momentum, the canonical commutator gives $\mechanical{\Delta x}\,\mechanical{\Delta p}\geq\mechanical{\hbar}/2$. A zero commutator expectation only gives a zero lower bound: it does not imply that either spread vanishes. For example, taking the same observable for both operators makes the commutator zero in every state, including states with nonzero variance.

## Leibniz rule

Use this rule to expand a commutator with a product while preserving factor order. No assumption that the factors commute is needed.

$$
[\hat A,\hat B\hat C]
=[\hat A,\hat B]\hat C+\hat B[\hat A,\hat C].
$$

## Jacobi identity

$$
[\hat A,[\hat B,\hat C]]
+[\hat B,[\hat C,\hat A]]
+[\hat C,[\hat A,\hat B]]=0.
$$

The Jacobi identity checks whether a proposed set of commutation rules is algebraically consistent. Both identities follow by expanding the commutators and cancelling equal ordered products. For unbounded operators, use a common invariant domain on which all displayed products exist; a formal cancellation does not establish a self-adjoint operator identity on arbitrary states.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the position representation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional state amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in momentum and the canonical commutator. |
| $\Delta A$, $\Delta B$ | — | Observable uncertainty | Standard deviations, with units set by the observables. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of position in the state. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The standard deviation of momentum in the state. |
