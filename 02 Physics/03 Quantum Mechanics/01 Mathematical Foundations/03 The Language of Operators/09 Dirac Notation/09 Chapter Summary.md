---
title: "Chapter Summary"
---

> [!TLDR]
> Dirac notation joins state vectors, dual functionals, operators, and measurement rules in one algebra. Completeness converts abstract expressions into basis calculations.

To reconstruct the chapter, start with one normalized ket and one complete orthonormal basis. Form its bra by conjugating coefficients. Insert the identity to recover its basis expansion, then use the same expansion to verify that its squared coefficients sum to one. Applying a rank-one projector selects one of those terms.

This chain separates an algebraic result from a physical assumption: the squared projected norm is a nonnegative number bounded by one; the Born postulate identifies it with a specified outcome probability. A basis change preserves this number when the state and projector are both represented in the new basis.

For a boundary test, omit one basis vector. The sum of the retained outer products is then a projector, not the full identity. Which state would reveal the omission immediately? Any nonzero state in the omitted direction does so.

- **Ket and bra:** $|\psi\rangle\in\mathcal H$ is a state vector. Its bra $\langle\psi|$ is the corresponding continuous linear functional.
- **Inner product:** $\langle\psi|\phi\rangle\in\mathbb C$ is conjugate symmetric and linear in the ket.
- **Operator:** $\hat A|\psi\rangle$ is a ket, while $\langle\phi|\hat A|\psi\rangle\in\mathbb C$ is a matrix element.
- **Expectation value:** For a normalized state, $\langle\hat A\rangle=\langle\psi|\hat A|\psi\rangle$.
- **Projector:** For normalized $|n\rangle$, $\hat P_n=|n\rangle\langle n|$ is Hermitian and idempotent.
- **Completeness:** $\sum_n|n\rangle\langle n|=\hat I$ for a complete discrete orthonormal basis. Insert it to expand an expression in that basis.
- **Six postulates:** State, observable, measurement outcome, probability, collapse, and time evolution. See [[07 The Postulates of Quantum Mechanics]] for their scope and formulas.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle\hat A\rangle$ | — | Expectation value | The mean measurement outcome; its unit depends on the observable. |
