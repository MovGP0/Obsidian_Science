---
title: "Chapter Summary"
---

> [!TLDR]
> Measurement probabilities determine expectation values and uncertainties. Ehrenfest's theorem describes their evolution. Together with the spectral and uncertainty relations, they connect the mathematical tools of this book to quantum measurements.

- **Expectation value:**

  $$
  \langle\hat A\rangle
  =\langle\psi|\hat A|\psi\rangle
  =\sum_n a_n|c_n|^2.
  $$

  It is the probability-weighted mean of the eigenvalues.

- **Uncertainty:**

  $$
  \Delta A=\sqrt{\langle\hat A^2\rangle-\langle\hat A\rangle^2}.
  $$

  For a normalized pure state with finite second moment, it vanishes exactly when the state is an eigenstate of that observable.

- **Energy conservation:** $\langle\hat H\rangle$ is conserved for a time-independent Hamiltonian. Expectations of other observables can change.

- **Ehrenfest's theorem:**

  $$
  \frac{d\langle\hat A\rangle}{d\signal{t}}
  =\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle
  +\left\langle\frac{\partial\hat A}{\partial\signal{t}}\right\rangle.
  $$

  For position and momentum, it gives Newton's equations for expectations, with mean force $-\langle\energy{V}'(\hat x)\rangle$. Replacing this with the force at the mean position requires further conditions.

- **Transition frequencies:** coherent contributions to $\langle\hat x\rangle(\signal{t})$ oscillate with angular frequencies

  $$
  \signal{\omega_{mn}}
  =\frac{\energy{E_m}-\energy{E_n}}{\mechanical{\hbar}}.
  $$

- **Energy–time uncertainty:**

  $$
  \energy{\Delta H}\,\signal{\Delta t_Q}
  \geq\frac{\mechanical{\hbar}}2,
  \qquad
  \signal{\Delta t_Q}
  =\frac{\Delta Q}{|d\langle\hat Q\rangle/d\signal{t}|}.
  $$

  The characteristic time is defined for a nonzero rate of change of an observable with no explicit time dependence.

- **The complete framework:** the [[15 Expectation Value and Uncertainty/06 Common Errors#Quantum mechanics — The formalism in eight points|eight-point overview]] collects the basic nonrelativistic quantum formalism. Specific systems require specific Hamiltonians.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $a_n$, $\langle\hat A\rangle$, $\Delta A$, $\Delta Q$, $\langle\hat Q\rangle$ | — | Observable statistics | Outcomes, expectations, and spreads with units set by the observable. |
| $c_n$ | $\unit{1}$ | Probability amplitude | The coefficient of an eigenstate in the state expansion. |
| $\energy{E_m}$, $\energy{E_n}$, $\langle\hat H\rangle$, $\energy{\Delta H}$ | $\unit{J}$ | Energy | Eigenvalues, mean energy, and energy uncertainty. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale relating energy and angular frequency. |
| $\signal{t}$, $\signal{\Delta t_Q}$ | $\unit{s}$ | Time | The evolution parameter and characteristic change time. |
| $\signal{\omega_{mn}}$ | $\unit{s^{-1}}$ | Transition angular frequency | The energy difference divided by the reduced Planck constant. |
| $\langle\hat x\rangle$ | $\unit{m}$ | Mean position | The position expectation of the state. |
| $-\langle\energy{V}'(\hat x)\rangle$ | $\unit{N}$ | Mean force | The force expectation in the mean-motion equation. |
