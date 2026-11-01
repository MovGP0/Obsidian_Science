---
title: "Dirac Notation versus Function Notation"
---

> [!TLDR]
> A wavefunction is a state's component in the position basis. Inner products, operator actions, and completeness relations can be written either in Dirac notation or with functions and integrals.

## Position-representation dictionary

The integrals below extend over the complete position axis. Let $\signal{\phi_n}(\mechanical{x})=\langle\mechanical{x}|n\rangle$ for a complete orthonormal discrete basis.

Assume a one-dimensional particle with Hilbert space $L^2(\mathbb R,d\mechanical{x})$, and use the physics inner product. The abstract ket does not depend on a basis; the function $\signal{\psi}(\mechanical{x})=\langle\mechanical{x}|\psi\rangle$ is its position component. The first row below means this representation map, not equality between a vector and a scalar function value.

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

For the general integral form, insert position completeness between the operator and the state:

$$
\langle\mechanical{x}|\hat A|\psi\rangle
=\int\langle\mechanical{x}|\hat A|\mechanical{x'}\rangle
\signal{\psi}(\mechanical{x'})\,d\mechanical{x'}.
$$

The kernel $\langle\mechanical{x}|\hat A|\mechanical{x'}\rangle$ takes an input component at $\mechanical{x'}$ to an output component at $\mechanical{x}$. For an unbounded operator, the state must also lie in its domain. A common operator symbol does not remove this condition.

For a normalized state, the continuous and discrete normalizations agree:

$$
1=\langle\psi|\psi\rangle
=\int|\signal{\psi}(\mechanical{x})|^2\,d\mechanical{x}
=\sum_n|c_n|^2,
\qquad
c_n=\langle n|\psi\rangle
=\int\signal{\phi_n}^*(\mechanical{x})\signal{\psi}(\mechanical{x})\,d\mechanical{x}.
$$

The coefficients are dimensionless, while the position wavefunction has units of inverse square root of length. The integration measure makes the squared norm dimensionless. The bra has components $\langle\psi|\mechanical{x}\rangle=\signal{\psi}^*(\mechanical{x})$: taking a bra conjugates scalar coefficients.

**Try the dictionary:** For $|\psi\rangle=(|1\rangle+i|2\rangle)/\sqrt2$, write the position function and its bra components. They are $(\signal{\phi_1}+i\signal{\phi_2})/\sqrt2$ and $(\signal{\phi_1}^*-i\signal{\phi_2}^*)/\sqrt2$. Orthonormality gives norm one in either notation. For an infinite expansion the equality is in $L^2$ norm, not necessarily at every position.

> [!note] Generalized position states
> The state $|\mechanical{x_0}\rangle$ and the delta kernel are distributional objects. They are not normalized vectors in $L^2(\mathbb R)$. The last row is an identity of distribution kernels; the corresponding identity operator is obtained as a strong limit of the basis projections.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{x'}$, $\mechanical{x_0}$ | $\unit{m}$ | Position | The coordinate, second kernel coordinate, and specified position. |
| $\signal{\psi}$, $\signal{\phi}$, $\signal{\phi_n}$ | $\unit{m^{-1/2}}$ | Wavefunction | One-dimensional position amplitudes for states and basis vectors. |
| $c_n$ | $1$ | State coefficient | The amplitude in the discrete orthonormal basis. |
