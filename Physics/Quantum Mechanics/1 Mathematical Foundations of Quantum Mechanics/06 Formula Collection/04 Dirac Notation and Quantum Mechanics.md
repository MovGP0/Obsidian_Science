---
title: "Dirac Notation and Quantum Mechanics"
---

> [!TLDR]
> Position and momentum have a nonzero canonical commutator. The Robertson inequality and the commutator identities connect operator algebra to measurement uncertainties.

## Position and momentum in the position representation

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

## Robertson inequality

$$
\Delta A\,\Delta B
\geq\frac12\left|\langle[\hat A,\hat B]\rangle\right|.
$$

The state is normalized and has the required finite moments and operator domains.

## Leibniz rule

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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the position representation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional state amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in momentum and the canonical commutator. |
| $\Delta A$, $\Delta B$ | — | Observable uncertainty | Standard deviations, with units set by the observables. |
