---
title: "Chapter Summary"
---

> [!TLDR]
> Unitary transformations preserve state geometry and give reversible dynamics. Continuous symmetries connect their self-adjoint generators with conservation laws.

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
