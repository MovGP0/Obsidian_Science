---
title: "Dirac Notation versus Function Notation"
---

> [!TLDR]
> A wavefunction is a state's component in the position basis. Inner products, operator actions, and completeness relations can be written either in Dirac notation or with functions and integrals.

## Position-representation dictionary

The integrals below extend over the complete position axis. Let $\signal{\phi_n}(\mechanical{x})=\langle\mechanical{x}|n\rangle$ for a complete orthonormal discrete basis.

| Dirac notation | Function notation in the position representation |
| --- | --- |
| $\vert\psi\rangle$ | $\signal{\psi}(\mechanical{x})$ |
| $\langle\phi\vert\psi\rangle$ | $\int\signal{\phi}^*(\mechanical{x})\signal{\psi}(\mechanical{x})\,d\mechanical{x}$ |
| $\hat A\vert\psi\rangle$ | $\hat A\signal{\psi}(\mechanical{x})$ |
| $\langle\phi\vert\hat A\vert\psi\rangle$ | $\int\signal{\phi}^*(\mechanical{x})\hat A\signal{\psi}(\mechanical{x})\,d\mechanical{x}$ |
| $\vert\mechanical{x_0}\rangle$ | $\delta(\mechanical{x}-\mechanical{x_0})$ |
| $\langle\mechanical{x}\vert\psi\rangle$ | $\signal{\psi}(\mechanical{x})$ |
| $\sum_n\vert n\rangle\langle n\vert=\hat I$ | $\sum_n\signal{\phi_n}(\mechanical{x})\signal{\phi_n}^*(\mechanical{x'})=\delta(\mechanical{x}-\mechanical{x'})$ |

In the operator rows, the symbol on the right denotes the position-space representation of the abstract operator. It can be a differential operator, multiplication operator, or a more general integral operator.

> [!note] Generalized position states
> The state $|\mechanical{x_0}\rangle$ and the delta kernel are distributional objects. They are not normalized vectors in $L^2(\mathbb R)$. The last row is an identity of distribution kernels; the corresponding identity operator is obtained as a strong limit of the basis projections.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{x'}$, $\mechanical{x_0}$ | $\unit{m}$ | Position | The coordinate, second kernel coordinate, and specified position. |
| $\signal{\psi}$, $\signal{\phi}$, $\signal{\phi_n}$ | $\unit{m^{-1/2}}$ | Wavefunction | One-dimensional position amplitudes for states and basis vectors. |
