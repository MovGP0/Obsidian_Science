---
title: "Dirac Notation"
---

> [!TLDR]
> Dirac notation expresses states, inner products, and operators without choosing a representation. It uses the same algebra for discrete bases and generalized continuous bases.

A useful first question is: which parts of a calculation change when we change basis? The state vector and the operator describe the same preparation and transformation. Their coordinate columns and matrices change together. An inner product, and hence a projection probability, must stay the same.

Read the ket-and-bra section first to distinguish vectors from functionals. Then use projectors and completeness to turn abstract products into calculations. The representation section applies this method to wavefunctions; the postulates section separates the mathematical language from the physical measurement assumptions. As a check on this distinction, a complex inner product is an amplitude, not a probability. Only its squared magnitude has the probability interpretation, with normalized states and the specified projection measurement.

Paul Dirac introduced this notation in 1930 in an influential book on theoretical physics. The basic idea is simple: instead of working only with a wavefunction $\signal{\psi}(\mechanical{x})$ and an integral such as

$$
\int\signal{\psi}^*(\mechanical{x})\signal{\phi}(\mechanical{x})\,d\mechanical{x},
$$

we use the abstract state $|\psi\rangle$ and the inner product $\langle\psi|\phi\rangle$. The notation adds no new mathematics. It simplifies expressions and makes their algebraic structure visible.

Its main advantage appears when we change representation: from position to momentum, or from a discrete basis to a continuous one. The abstract Dirac expressions remain the same.

## Chapter sections

- [[01 Ket and Bra|Ket and bra]]
- [[02 The Inner Product in Dirac Notation|The inner product in Dirac notation]]
- [[03 Operators in Dirac Notation|Operators in Dirac notation]]
- [[04 Projectors|Projectors]]
- [[05 The Completeness Relation|The completeness relation]]
- [[06 From Notation to Representation|From notation to representation]]
- [[07 The Postulates of Quantum Mechanics|The postulates of quantum mechanics]]
- [[09 Dirac Notation/08 Common Errors|Common errors and quantum interpretation]]
- [[09 Dirac Notation/09 Chapter Summary|Chapter summary]]
- [[09 Dirac Notation/10 Exercises|Exercises]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle coordinate in the position representation. |
| $\signal{\psi}$, $\signal{\phi}$ | $\unit{m^{-1/2}}$ | Wavefunction | One-dimensional position probability amplitudes. |
