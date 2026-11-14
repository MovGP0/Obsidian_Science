---
title: "Chapter Summary"
---

> [!TLDR]
> Commutator algebra gives compatibility conditions, uncertainty bounds, conservation laws, and the ladder structure of the harmonic oscillator.

The chapter can be reconstructed from two moves. Expand a product commutator while retaining factor order. Then apply the result to a suitable state and interpret the resulting scalar. This gives the canonical derivative rules, the Ehrenfest mean equations, and the ladder shifts for the specified oscillator.

The same algebra has different physical uses. Compatibility is a common-basis statement in finite dimensions. Robertson uncertainty is a statement about one preparation. Conservation concerns evolution under a specified Hamiltonian and also requires absence of explicit time dependence. None follows merely from seeing the same operator letters in two formulas.

For a quick audit, ask whether a proposed exact position–momentum pair could be finite matrices. Taking the trace of their commutator rules this out. Any finite truncation must therefore be checked at the discarded-state boundary before its algebra is used as an exact identity.

- **Commutator:** $[\hat A,\hat B]=\hat A\hat B-\hat B\hat A$. It is antisymmetric and linear, and obeys Leibniz product rules.
- **Canonical relation:** $[\hat x,\hat p]=i\mechanical{\hbar}\hat I$. Prove it by applying both sides to a test function.
- **Compatibility:** Commuting Hermitian matrices have a common orthonormal eigenbasis. The infinite-dimensional statement requires the spectral and domain qualifications given in [[03 Compatible Operators]].
- **Robertson inequality:** $\Delta A\,\Delta B\ge\tfrac12|\langle[\hat A,\hat B]\rangle|$.
- **Heisenberg inequality:** $\mechanical{\Delta x}\,\mechanical{\Delta p}\ge\mechanical{\hbar}/2$. This is a fundamental bound on state uncertainties.
- **Oscillator ladder algebra:** $[\hat a,\hat a^\dagger]=1$, together with the oscillator Hamiltonian and state conditions, yields its equally spaced spectrum.
- **Conservation:** If an observable has no explicit time dependence and $[\hat H,\hat A]=0$, its expectation is constant in time.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that sets the canonical uncertainty bound. |
| $\Delta A$, $\Delta B$ | — | Observable uncertainty | Standard deviations with the units of their respective observables. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The position standard deviation. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The momentum standard deviation. |
