---
title: "Commuting observables and conserved means"
---

> [!TLDR]
> An observable with no explicit time dependence has a constant mean when it commutes with the Hamiltonian.

Chapter: [[11 Unitary Operators/00 Unitary Operators|Chapter 11 — Unitary Operators]]. Exercise 5. Difficulty: **Intermediate level**.

Back to [[11 Unitary Operators/08 Exercises#Exercise 5|Chapter 11 exercise index]].

## Question

Prove that if $[\hat A,\hat H]=0$, then

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}=0
$$

for every evolving state. Assume that $\hat A$ has no explicit time dependence and that the required domain conditions hold.

## Worked solution

Differentiate the expectation value with the product rule. There is no term from $\partial\hat A/\partial\signal{t}$ because the operator has no explicit time dependence:

$$
\frac{d}{d\signal{t}}\langle\hat A\rangle
=\frac{d\langle\psi|}{d\signal{t}}\hat A|\psi\rangle
+\langle\psi|\hat A\frac{d|\psi\rangle}{d\signal{t}}.
$$

For a self-adjoint Hamiltonian, the Schrödinger equation and its adjoint give

$$
\frac{d|\psi\rangle}{d\signal{t}}=-\frac{i}{\mechanical{\hbar}}\hat H|\psi\rangle,
\qquad
\frac{d\langle\psi|}{d\signal{t}}=\frac{i}{\mechanical{\hbar}}\langle\psi|\hat H.
$$

Insert both relations without changing the order of the operators:

$$
\begin{aligned}
\frac{d}{d\signal{t}}\langle\hat A\rangle
&=\frac{i}{\mechanical{\hbar}}\langle\psi|\hat H\hat A|\psi\rangle
-\frac{i}{\mechanical{\hbar}}\langle\psi|\hat A\hat H|\psi\rangle\\
&=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle
=-\frac{i}{\mechanical{\hbar}}\langle[\hat A,\hat H]\rangle=0.
\end{aligned}
$$

This proof uses no special choice of state. Thus the result holds for every evolving state for which the derivatives and products exist on the required domain. The commutator is zero as an operator on that domain, rather than only having zero mean in one chosen state. If the Hamiltonian depends explicitly on time, the same proof holds provided $[\hat A,\hat H(\signal{t})]=0$ at every time.

Two assumptions do separate work. Commutation removes the change caused by state evolution. Absence of explicit operator time dependence removes the other term in the total derivative. For example, a scalar time-dependent multiple of the identity commutes with every Hamiltonian, yet its expectation follows that scalar function and need not be constant.

The conclusion here applies to all admissible initial preparations, rather than one stationary state. In finite dimensions, a stronger description follows: commutation with a time-independent Hamiltonian also makes the observable's spectral projectors commute with the evolution, so the full outcome distribution is preserved. The mean proof in the question is enough for its claim; the stronger statement needs the corresponding spectral/domain treatment in infinite dimensions.

## Answer

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle=0.
$$

The mean of the observable is conserved for every admissible state under the stated assumptions.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The evolution parameter in the expectation value. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the Schrödinger equation. |
| $\langle\hat A\rangle$ | — | Observable mean | The conserved mean, with the unit of the chosen observable. |
