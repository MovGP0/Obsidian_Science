---
title: "Common Errors"
---

> [!TLDR]
> An expectation value depends on both the state and the observable. The mean square generally differs from the square of the mean. A conserved expectation also requires the correct time-dependence and commutator conditions.

## Error 1 — Equating the mean square and the square of the mean

In general,

$$
\langle\hat A^2\rangle\ne\langle\hat A\rangle^2.
$$

Their difference is the variance:

$$
(\Delta A)^2
=\langle\hat A^2\rangle-\langle\hat A\rangle^2.
$$

For a normalized pure state with the required finite moments, equality holds exactly when $\Delta A=0$: the state is an eigenstate of $\hat A$.

## Error 2 — Omitting the state dependence

The expectation value is a property of the pair consisting of an operator and a state. It is not a property of the operator alone.

Writing $\langle\hat A\rangle$ without specifying the state can be ambiguous. Use $\langle\hat A\rangle_\psi$ or $\langle\psi|\hat A|\psi\rangle$ when needed.

## Error 3 — Assuming every expectation value is conserved

An expectation value can change with time. For an observable with no explicit time dependence,

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle.
$$

If $[\hat H,\hat A]=0$, the expectation is conserved for every state on the applicable domain. In particular, the mean energy $\langle\hat H\rangle$ is conserved for a time-independent Hamiltonian. Other expectations, such as mean position, can change.

> [!note] A state-specific qualification
> The source states the conservation condition as an operator commutation condition. For one particular evolving state, it is enough that the expectation of the commutator vanishes at all times. The operator itself need not vanish. If the observable has explicit time dependence, the additional term $\langle\partial\hat A/\partial\signal{t}\rangle$ must also be included.

## Error 4 — Confusing the two averages in a numerical example

Consider outcomes $3$ and $4$ with equal probabilities. Then

$$
\langle X\rangle=\frac{3+4}{2}=3.5,
\qquad
\langle X\rangle^2=12.25,
$$

whereas

$$
\langle X^2\rangle=\frac{9+16}{2}=12.5.
$$

The difference is the variance, $12.5-12.25=0.25$.

## Quantum mechanics — The formalism in eight points

The following list brings together the mathematical structure developed in this book. The displayed spectral sums use a discrete orthonormal eigenbasis. The simple outcome formula assumes a nondegenerate eigenvalue, and the exponential evolution formula assumes a time-independent Hamiltonian.

1. **State:**

   $$
   |\psi\rangle\in\mathcal H,
   \qquad\langle\psi|\psi\rangle=1.
   $$

2. **Observable:** a Hermitian operator with spectral decomposition

   $$
   \hat A=\sum_n a_n|a_n\rangle\langle a_n|.
   $$

3. **Probability:**

   $$
   P(a_n)=|\langle a_n|\psi\rangle|^2.
   $$

4. **Expectation value:**

   $$
   \langle\hat A\rangle
   =\sum_n a_nP(a_n)
   =\langle\psi|\hat A|\psi\rangle.
   $$

5. **Uncertainty:**

   $$
   \Delta A=\sqrt{\langle\hat A^2\rangle-\langle\hat A\rangle^2}.
   $$

6. **Uncertainty principle:**

   $$
   \Delta A\,\Delta B\geq
   \frac12\left|\langle[\hat A,\hat B]\rangle\right|.
   $$

7. **Time evolution:**

   $$
   |\psi(\signal{t})\rangle
   =e^{-i\hat H\signal{t}/\mechanical{\hbar}}|\psi(0)\rangle.
   $$

8. **Ehrenfest's theorem:**

   $$
   \frac{d\langle\hat A\rangle}{d\signal{t}}
   =\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle
   +\left\langle\frac{\partial\hat A}{\partial\signal{t}}\right\rangle.
   $$

> [!note] Scope of the overview
> Degenerate measurement outcomes require projectors onto eigenspaces. Continuous spectra require spectral integrals. In infinite-dimensional spaces, the observables require suitable self-adjoint operators and domains. These qualifications give the corresponding precise versions of the compact formulas above.

The same framework applies to the hydrogen atom, the harmonic oscillator, tunnelling, atoms with many electrons, and laser models. Each application needs its own Hamiltonian and physical assumptions.

The path through this book supplied the tools to state these eight points precisely:

- Complex numbers support the state description in point 1.
- Differential equations describe the evolution in point 7.
- Linear algebra supports points 2–5.
- Commutators give the structure of point 6.
- Fourier analysis connects position and momentum descriptions in point 4.
- Probability theory supports points 3–5.

These tools provide the foundation for further study of quantum mechanics.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $a_n$, $\langle\hat A\rangle$, $\Delta A$, $\Delta B$ | — | Observable outcomes and statistics | The units depend on the measured observables. |
| $P(a_n)$ | $\unit{1}$ | Measurement probability | The probability of an observable outcome. |
| $\langle\hat H\rangle$ | $\unit{J}$ | Mean energy | The conserved energy expectation for a time-independent Hamiltonian. |
| $\signal{t}$ | $\unit{s}$ | Time | The parameter of state evolution. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in evolution and the Ehrenfest equation. |
