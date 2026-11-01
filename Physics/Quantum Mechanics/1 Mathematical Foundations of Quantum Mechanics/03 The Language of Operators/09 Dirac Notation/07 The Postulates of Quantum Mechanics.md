---
title: "The Postulates of Quantum Mechanics"
---

> [!TLDR]
> The six postulates specify states, observables, outcomes, probabilities, state changes after measurement, and time evolution. The formulas below describe pure states and ideal projective measurements.

These rules distinguish three tasks: specify the preparation, predict outcome frequencies for that preparation, and specify the state conditioned on an outcome. The probability rule alone does not determine the state update. The update written in P5 is the ideal projection rule used in this chapter.

A consistency test is available before solving any dynamics. For a complete set of mutually orthogonal outcome projectors, their sum is the identity. Summing P4 therefore gives the state norm, which is one by P1. After a nonzero-probability outcome, the denominator in P5 makes the conditional state normalized. An outcome of zero probability cannot be used in this conditional formula.

P6 assumes the system has a Hamiltonian description with unitary evolution between the ideal measurement operations. If the chosen state describes only part of an interacting system, its reduced dynamics generally needs a mixed-state treatment. The postulates are physical starting assumptions here; the Hilbert-space identities check their consistency but do not prove them from mathematics alone.

## P1 — State

The system is described by a ket $|\psi\rangle\in\mathcal H$ with

$$
\langle\psi|\psi\rangle=1.
$$

## P2 — Observable

Each measurable quantity corresponds to a Hermitian operator $\hat A=\hat A^\dagger$, with eigenstates $\{|a_n\rangle\}$ and real eigenvalues $\{a_n\}$.

## P3 — Measurement

The result of a measurement of $\hat A$ is one of its eigenvalues $a_n$.

## P4 — Probability

For a nondegenerate eigenvalue, the probability of obtaining $a_n$ is

$$
P(a_n)=|\langle a_n|\psi\rangle|^2.
$$

For a degenerate eigenvalue, use

$$
P(a_n)=\langle\psi|\hat P_n|\psi\rangle,
$$

where $\hat P_n$ projects onto the entire eigenspace for that eigenvalue.

## P5 — Collapse

After an ideal measurement with nondegenerate outcome $a_n$, the state becomes $|a_n\rangle$, up to a global phase. For a degenerate outcome, it becomes the normalized projection:

$$
|\psi_{\mathrm{after}}\rangle
=\frac{\hat P_n|\psi\rangle}{\sqrt{P(a_n)}},
\qquad P(a_n)>0.
$$

## P6 — Time evolution

Between measurements, the state evolves according to the Schrödinger equation:

$$
i\mechanical{\hbar}\frac{d}{d\signal{t}}|\psi(\signal{t})\rangle
=\hat H(\signal{t})|\psi(\signal{t})\rangle.
$$

These six postulates provide the framework from which the hydrogen spectrum, quantum tunnelling, and entanglement can be derived, with the Hamiltonian and system structure specified.

> [!note]
> The source presents this as a compact statement of all quantum mechanics. Its formulas here concern pure states, a discrete measurement spectrum, and ideal projective measurements. Mixed states and generalized measurements extend the description. In infinite dimensions, observables require self-adjoint operators with specified domains; continuous spectra need spectral measures rather than only sums over normalizable eigenstates.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $a_n$ | — | Measurement outcome | An eigenvalue, with the unit of the measured observable. |
| $P(a_n)$ | $1$ | Measurement probability | The probability of obtaining the specified outcome. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the Schrödinger equation. |
| $\signal{t}$ | $\unit{s}$ | Time | The time parameter of state evolution. |
