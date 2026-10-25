---
title: "Ket and Bra"
---

> [!TLDR]
> A ket is a Hilbert-space vector, and its bra is the corresponding continuous linear functional. The map from a ket to its bra conjugates scalar coefficients.

> [!definition] Definition 9.1 | Ket
> A **ket** $|\psi\rangle$ is a vector in a Hilbert space $\mathcal H$. A state ket represents the physical state of the system.

> [!definition] Definition 9.2 | Bra
> The **bra** $\langle\psi|$ is the linear functional associated with $|\psi\rangle$ through the inner product. Applied to an arbitrary ket $|\phi\rangle$, it returns the complex number $\langle\psi|\phi\rangle$.

Mathematically, the bra belongs to the continuous dual space $\mathcal H^*$. The **Riesz representation theorem** states that every continuous linear functional on a Hilbert space has the form $\langle\psi|\cdot\rangle$ for a unique $|\psi\rangle\in\mathcal H$. Thus, kets and bras correspond bijectively.

This correspondence is **antilinear**. If

$$
|\psi\rangle=\alpha|u\rangle+\beta|v\rangle,
$$

then

$$
\langle\psi|=\alpha^*\langle u|+\beta^*\langle v|.
$$

## From a wavefunction to a ket

In the position representation,

$$
|\psi\rangle\longleftrightarrow
\signal{\psi}(\mechanical{x})=\langle\mechanical{x}|\psi\rangle,
$$

and

$$
\langle\psi|\longleftrightarrow
\signal{\psi}^*(\mechanical{x})=\langle\psi|\mechanical{x}\rangle.
$$

The inner product is

$$
\langle\psi|\phi\rangle
=\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})
\signal{\phi}(\mechanical{x})\,d\mechanical{x}.
$$

The word **bracket** describes the combination of a **bra** and a **ket**: $\langle\psi|\phi\rangle$.

> [!note]
> The ket is an abstract vector. The wavefunction is its representation in a chosen basis. A normalized nonzero ket describes a pure state; multiplying it by a global phase does not change that physical state. The zero vector is a valid Hilbert-space vector but does not describe a physical state.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the generalized position basis. |
| $\signal{\psi}$, $\signal{\phi}$ | $\unit{m^{-1/2}}$ | Wavefunction | One-dimensional position probability amplitudes. |
