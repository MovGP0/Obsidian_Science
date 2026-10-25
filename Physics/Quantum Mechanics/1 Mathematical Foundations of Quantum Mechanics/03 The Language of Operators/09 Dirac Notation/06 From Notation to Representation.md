---
title: "From Notation to Representation"
---

> [!TLDR]
> Dirac equations are independent of representation. Choosing position, momentum, or a discrete basis turns the same abstract equation into a differential equation or a matrix equation.

A common source of confusion is that Dirac notation is **representation independent**. The equation

$$
\hat H|\psi\rangle=\energy{E}|\psi\rangle
$$

has the same abstract form in every representation. To calculate a specific result, we choose a basis.

## Position representation

Project onto $\langle\mechanical{x}|$:

$$
\langle\mechanical{x}|\hat H|\psi\rangle
=\energy{E}\langle\mechanical{x}|\psi\rangle
\quad\Longrightarrow\quad
H_x\signal{\psi}(\mechanical{x})
=\energy{E}\signal{\psi}(\mechanical{x}).
$$

For the usual particle Hamiltonian, the operator becomes a differential operator acting on the position wavefunction.

## Momentum representation

Project onto $\langle\mechanical{p}|$:

$$
\langle\mechanical{p}|\hat H|\psi\rangle
=\energy{E}\langle\mechanical{p}|\psi\rangle
\quad\Longrightarrow\quad
H_p\signal{\widetilde\psi}(\mechanical{p})
=\energy{E}\signal{\widetilde\psi}(\mechanical{p}).
$$

The momentum operator acts by multiplication by $\mechanical{p}$. In the usual momentum-space phase convention, the position operator acts as

$$
\hat x\longleftrightarrow i\mechanical{\hbar}\frac{\partial}{\partial\mechanical{p}}.
$$

The symbols $H_x$ and $H_p$ denote the representations of the same abstract Hamiltonian. The source uses $H$ for both; the subscripts here make the representation explicit.

## Discrete representation

Project onto a discrete orthonormal basis:

$$
H_{mn}=\langle m|\hat H|n\rangle
\quad\Longrightarrow\quad Hc=\energy{E}c.
$$

Here $c$ is the column of state coefficients. The Hamiltonian is represented by a matrix. In finite dimensions, its eigenvalues follow from

$$
\det(H-\energy{E}I)=0.
$$

The physics is the same; only the mathematical representation changes.

> [!note]
> A discrete basis can also be infinite. In that case, the Hamiltonian is an infinite matrix representation with domain and convergence conditions. The ordinary finite-matrix determinant formula does not apply directly.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}$ | $\unit{J}$ | Energy | The eigenvalue of the Hamiltonian. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the position representation. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The coordinate in the momentum representation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The one-dimensional position probability amplitude. |
| $\signal{\widetilde\psi}$ | $(\unit{kg\,m\,s^{-1}})^{-1/2}$ | Momentum wavefunction | The amplitude normalized with respect to the momentum integral. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the momentum-space position operator. |
| $c$ | $1$ | State coefficients | The probability-amplitude column in a discrete orthonormal basis. |
