---
title: "Chapter Summary"
---

> [!TLDR]
> Unitary transformations preserve state geometry and give reversible dynamics. Continuous symmetries connect their self-adjoint generators with conservation laws.

To reconstruct the chapter, start with the identity $U^\dagger U=I$ and use it to preserve an overlap. Next differentiate a one-parameter group at the identity to identify its generator. Finally test whether the full group leaves the Hamiltonian invariant; only this last step supplies a conserved generator under the stated conditions.

A fixed-observable check keeps this chain honest. A spin rotation can preserve the state norm while changing the probability of spin up along a fixed axis. If the measurement axis is rotated as well, the corresponding overlap probability is unchanged. These are different questions.

When passing to infinite dimensions, carry domains with conjugated observables, distinguish a unitary map from a non-surjective isometry, and use spectral evolution for a self-adjoint generator. Formal power-series manipulations alone do not settle these points.

- **Unitarity:** $\hat U^\dagger\hat U=\hat U\hat U^\dagger=\hat I$. Norms and inner products are preserved. Unitary conjugation preserves operator eigenvalues.
- **Generator exponential:** For a Hermitian matrix $\hat G$, $e^{i\theta\hat G}$ is unitary. Calculate it by diagonalization or by separating even and odd series terms when $\hat G^2=c\hat I$.
- **Exponential products:** $e^{\hat A+\hat B}=e^{\hat A}e^{\hat B}$ is guaranteed for commuting matrices. Do not assume it for noncommuting generators.
- **Translation:** $\hat T(\mechanical{a})=e^{-i\mechanical{a}\hat p/\mechanical{\hbar}}$, and $\hat T(\mechanical{a})\signal{\psi}(\mechanical{x})=\signal{\psi}(\mechanical{x}-\mechanical{a})$.
- **Time evolution:** $|\psi(\signal{t})\rangle=e^{-i\hat H\signal{t}/\mechanical{\hbar}}|\psi(0)\rangle$ for a time-independent self-adjoint Hamiltonian. The evolution is unitary and reversible.
- **Symmetry and conservation:** A continuous dynamical symmetry gives $[\hat H,\hat G]=0$. If the generator has no explicit time dependence, $d\langle\hat G\rangle/d\signal{t}=0$.
- **Energy eigenstates:** Stationary states change only by a global phase under the specified time evolution.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{a}$ | $\unit{m}$ | Translation distance | The displacement of the wavefunction. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the translated wavefunction. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the generator exponentials. |
| $\signal{t}$ | $\unit{s}$ | Time | The time-evolution parameter. |
| $\langle\hat G\rangle$ | — | Generator expectation | The conserved mean, with the unit of its physical generator. |
