---
title: "Pauli expectation values and the Bloch vector"
---

> [!TLDR]
> The relative spin phase sets the first two Bloch-vector components. Their squared sum is one for this pure state.

Chapter 5 · Exercise 7 · Intermediate level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 7|Chapter 5 exercises]].

## Question

Consider the spin state with relative phase $\signal{\phi}$:

$$
|\psi\rangle=\frac1{\sqrt2}
\bigl(|\uparrow\rangle+\mathrm{e}^{\mathrm{i}\signal{\phi}}|\downarrow\rangle\bigr).
$$

**(a)** Calculate $\langle\sigma_x\rangle$, $\langle\sigma_y\rangle$, and $\langle\sigma_z\rangle$.

**(b)** Verify

$$
\langle\sigma_x\rangle^2+\langle\sigma_y\rangle^2+\langle\sigma_z\rangle^2=1.
$$

The Bloch vector has norm $1$ for a pure state.

## Worked solution

### (a) Evaluate the three expectation values

Use the ordered basis $(|\uparrow\rangle,|\downarrow\rangle)$ and real $\signal{\phi}$:

$$
|\psi\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\\mathrm{e}^{\mathrm{i}\signal{\phi}}\end{pmatrix},
\qquad
\langle\psi|=\frac1{\sqrt2}\begin{pmatrix}1&\mathrm{e}^{-\mathrm{i}\signal{\phi}}\end{pmatrix}.
$$

The bra uses the conjugate phase. First check normalization:

$$
\langle\psi|\psi\rangle=\tfrac12(1+\mathrm{e}^{-\mathrm{i}\signal{\phi}}\mathrm{e}^{\mathrm{i}\signal{\phi}})=1.
$$

For each matrix, apply it to the ket first, then multiply by the bra. This gives the scalar expectation value:

$$
\sigma_x|\psi\rangle=\frac1{\sqrt2}\begin{pmatrix}\mathrm{e}^{\mathrm{i}\signal{\phi}}\\1\end{pmatrix},
\qquad
\langle\sigma_x\rangle=\tfrac12(\mathrm{e}^{\mathrm{i}\signal{\phi}}+\mathrm{e}^{-\mathrm{i}\signal{\phi}})=\cos\signal{\phi}.
$$

$$
\sigma_y|\psi\rangle=\frac1{\sqrt2}\begin{pmatrix}-\mathrm{i}\mathrm{e}^{\mathrm{i}\signal{\phi}}\\\mathrm{i}\end{pmatrix},
\qquad
\langle\sigma_y\rangle=\tfrac12(-\mathrm{i}\mathrm{e}^{\mathrm{i}\signal{\phi}}+\mathrm{i}\mathrm{e}^{-\mathrm{i}\signal{\phi}})
=\frac{\mathrm{e}^{\mathrm{i}\signal{\phi}}-\mathrm{e}^{-\mathrm{i}\signal{\phi}}}{2\mathrm{i}}=\sin\signal{\phi}.
$$

$$
\sigma_z|\psi\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\-\mathrm{e}^{\mathrm{i}\signal{\phi}}\end{pmatrix},
\qquad
\langle\sigma_z\rangle=\tfrac12(1-\mathrm{e}^{-\mathrm{i}\signal{\phi}}\mathrm{e}^{\mathrm{i}\signal{\phi}})=0.
$$

The zero third component follows from the equal probabilities of the up and down basis states.

### (b) Check the Bloch-vector norm

The Bloch vector consists of these three dimensionless expectation values. Its squared norm is

$$
\langle\sigma_x\rangle^2+\langle\sigma_y\rangle^2+\langle\sigma_z\rangle^2
=\cos^2\signal{\phi}+\sin^2\signal{\phi}+0=1.
$$

Thus its norm is one, as required for this normalized pure state.

## Answer

(a) $\boxed{\langle\sigma_x\rangle=\cos\signal{\phi},\quad\langle\sigma_y\rangle=\sin\signal{\phi},\quad\langle\sigma_z\rangle=0}$. (b) The squared sum is $1$, so the Bloch vector has norm $1$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\phi}$ | $\unit{rad}$ | Relative spin phase | The phase between the two spin components. |
| $\langle\sigma_x\rangle,\langle\sigma_y\rangle,\langle\sigma_z\rangle$ | $1$ | Pauli expectation values | The three components of the Bloch vector. |
